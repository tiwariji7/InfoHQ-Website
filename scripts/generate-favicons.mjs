import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Multi-resolution ICO builder with PNG frames
function createIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerLen = 6;
  const dirEntryLen = 16;
  let offset = headerLen + count * dirEntryLen;

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  for (let i = 0; i < count; i++) {
    const buf = pngBuffers[i];
    const size = sizes[i];
    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

async function run() {
  const inputPath = 'public/images/favicon.png';
  if (!fs.existsSync(inputPath)) {
    console.error('Source favicon.png not found at ' + inputPath);
    return;
  }

  console.log('Loading source image from ' + inputPath + '...');
  const size = 1024;
  const radius = size / 2;

  // 1. Resize source to high-res master square (1024x1024)
  const masterRaw = await sharp(inputPath)
    .resize(size, size, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const data = masterRaw.data;
  const channels = masterRaw.info.channels;

  // 2. Clean near-white background to pure #FFFFFF
  for (let i = 0; i < data.length; i += channels) {
    if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }

  const cleanedRgb = await sharp(data, {
    raw: { width: size, height: size, channels: 3 }
  }).png().toBuffer();

  // 3. Create smooth anti-aliased circular mask SVG
  const maskSvg = Buffer.from(`
    <svg width="${size}" height="${size}">
      <circle cx="${radius}" cy="${radius}" r="${radius - 1}" fill="#ffffff" />
    </svg>
  `);

  const masterCirclePng = await sharp(cleanedRgb)
    .composite([
      {
        input: maskSvg,
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  console.log('Master circular PNG created.');

  // 4. Generate various sizes
  console.log('Generating favicon sizes...');

  // 16x16 PNG
  const p16 = await sharp(masterCirclePng)
    .resize(16, 16, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // 32x32 PNG
  const p32 = await sharp(masterCirclePng)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // 48x48 PNG
  const p48 = await sharp(masterCirclePng)
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // 180x180 Apple Touch Icon (iOS home screen)
  const p180 = await sharp(masterCirclePng)
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // 192x192 Android / Chrome
  const p192 = await sharp(masterCirclePng)
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // 512x512 Large Icon
  const p512 = await sharp(masterCirclePng)
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // High-res WebP for modern browsers (256x256)
  const webpFavicon = await sharp(masterCirclePng)
    .resize(256, 256, { kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  // 5. Generate Multi-size ICO (16, 32, 48)
  const icoBuffer = createIco([p16, p32, p48], [16, 32, 48]);

  // 6. Write files to public/
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.webp', webpFavicon);
  fs.writeFileSync('public/images/favicon.webp', webpFavicon);
  fs.writeFileSync('public/favicon-32x32.png', p32);
  fs.writeFileSync('public/favicon-16x16.png', p16);
  fs.writeFileSync('public/apple-touch-icon.png', p180);
  fs.writeFileSync('public/android-chrome-192x192.png', p192);
  fs.writeFileSync('public/android-chrome-512x512.png', p512);

  console.log('All favicon assets generated successfully:');
  console.log('  - public/favicon.ico (16x16, 32x32, 48x48)');
  console.log('  - public/favicon.webp (256x256 circular)');
  console.log('  - public/images/favicon.webp (256x256 circular)');
  console.log('  - public/favicon-32x32.png');
  console.log('  - public/favicon-16x16.png');
  console.log('  - public/apple-touch-icon.png (180x180)');
  console.log('  - public/android-chrome-192x192.png');
  console.log('  - public/android-chrome-512x512.png');
}

run().catch(console.error);

