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

async function buildBrandAssets() {
  const sourceImage = 'C:/Users/tiwar/.gemini/antigravity/brain/3ab35662-9bc0-4970-a12a-9690c5bbdafc/.user_uploaded/media_1793862517495_ab5541b5.jpg';
  
  if (!fs.existsSync(sourceImage)) {
    throw new Error('Source image not found at ' + sourceImage);
  }

  console.log('Loading source image:', sourceImage);
  const { data, info } = await sharp(sourceImage).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // 1. Process alpha channel and un-premultiply white background
  // Preserve white LED indicator lights on server blades:
  const isLedDot = (x, y) => {
    return x >= 267 && x <= 278 && y >= 267 && y <= 323;
  };

  const rgba = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 3;
      const j = (y * w + x) * 4;
      const r = data[i], g = data[i+1], b = data[i+2];

      if (isLedDot(x, y) && (r > 200 || g > 200 || b > 200)) {
        rgba[j] = 255;
        rgba[j+1] = 255;
        rgba[j+2] = 255;
        rgba[j+3] = 255;
        continue;
      }

      const delta = Math.max(255 - r, 255 - g, 255 - b);
      if (delta <= 10) {
        rgba[j] = 255;
        rgba[j+1] = 255;
        rgba[j+2] = 255;
        rgba[j+3] = 0;
      } else if (delta >= 45) {
        rgba[j] = r;
        rgba[j+1] = g;
        rgba[j+2] = b;
        rgba[j+3] = 255;
      } else {
        const alphaNorm = (delta - 10) / 35;
        const a = Math.round(alphaNorm * 255);
        const unR = Math.min(255, Math.max(0, Math.round((r - (1 - alphaNorm) * 255) / alphaNorm)));
        const unG = Math.min(255, Math.max(0, Math.round((g - (1 - alphaNorm) * 255) / alphaNorm)));
        const unB = Math.min(255, Math.max(0, Math.round((b - (1 - alphaNorm) * 255) / alphaNorm)));
        rgba[j] = unR;
        rgba[j+1] = unG;
        rgba[j+2] = unB;
        rgba[j+3] = a;
      }
    }
  }

  const fullTransparent = sharp(rgba, {
    raw: { width: w, height: h, channels: 4 }
  });

  // 2. Crop Brand Logo (Full lockup: Icon | InfoHQ)
  const logoMinX = 84;
  const logoMaxX = 920;
  const logoMinY = 116;
  const logoMaxY = 362;
  const logoW = logoMaxX - logoMinX;
  const logoH = logoMaxY - logoMinY;

  console.log(`Generating Brand Logo (${logoW}x${logoH})...`);
  const croppedLogo = fullTransparent.clone().extract({
    left: logoMinX,
    top: logoMinY,
    width: logoW,
    height: logoH
  });

  const brandLogoPng = await croppedLogo.png().toBuffer();
  const brandLogoWebp = await croppedLogo.webp({ quality: 98, effort: 6 }).toBuffer();

  fs.writeFileSync('public/images/infohq-brandlogo.webp', brandLogoWebp);
  fs.writeFileSync('public/images/infohq-brandlogo.png', brandLogoPng);
  console.log('Saved public/images/infohq-brandlogo.webp and infohq-brandlogo.png');

  // 3. Extract Design Icon Mark for Favicon
  const iconMinX = 88;
  const iconMaxX = 356;
  const iconMinY = 120;
  const iconMaxY = 358;
  const iconW = iconMaxX - iconMinX;
  const iconH = iconMaxY - iconMinY;

  console.log(`Extracting Design Icon Mark (${iconW}x${iconH})...`);
  const croppedIcon = fullTransparent.clone().extract({
    left: iconMinX,
    top: iconMinY,
    width: iconW,
    height: iconH
  });

  // Fit icon mark inside 512x512 master square canvas with comfortable margins
  const masterSize = 512;
  const targetIconW = 420;
  const targetIconH = Math.round(iconH * (targetIconW / iconW)); // ~373px

  const resizedIconBuf = await croppedIcon
    .resize(targetIconW, targetIconH, { fit: 'contain', kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  const padX = Math.round((masterSize - targetIconW) / 2); // 46px
  const padY = Math.round((masterSize - targetIconH) / 2); // 70px

  const emptySquare = Buffer.alloc(masterSize * masterSize * 4, 0);
  const masterFaviconBuf = await sharp(emptySquare, {
    raw: { width: masterSize, height: masterSize, channels: 4 }
  })
    .composite([{ input: resizedIconBuf, left: padX, top: padY, blend: 'over' }])
    .png()
    .toBuffer();

  // Save master favicon PNG & WebP
  fs.writeFileSync('public/images/favicon.png', masterFaviconBuf);
  console.log('Saved master public/images/favicon.png (512x512)');

  // 4. Generate all favicon resolutions
  console.log('Generating favicon suite...');

  // 16x16 PNG
  const p16 = await sharp(masterFaviconBuf)
    .resize(16, 16, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon-16x16.png', p16);

  // 32x32 PNG
  const p32 = await sharp(masterFaviconBuf)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon-32x32.png', p32);

  // 48x48 PNG for ICO
  const p48 = await sharp(masterFaviconBuf)
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  // Multi-resolution favicon.ico (16, 32, 48)
  const icoBuffer = createIco([p16, p32, p48], [16, 32, 48]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Saved public/favicon.ico');

  // 256x256 WebP favicon (used by modern browsers & BlogCard avatars)
  const webpFavicon = await sharp(masterFaviconBuf)
    .resize(256, 256, { kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 95, effort: 6 })
    .toBuffer();
  fs.writeFileSync('public/favicon.webp', webpFavicon);
  fs.writeFileSync('public/images/favicon.webp', webpFavicon);
  console.log('Saved public/favicon.webp and public/images/favicon.webp');

  // 192x192 Android Chrome
  const p192 = await sharp(masterFaviconBuf)
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/android-chrome-192x192.png', p192);

  // 512x512 Android Chrome
  fs.writeFileSync('public/android-chrome-512x512.png', masterFaviconBuf);
  console.log('Saved Android Chrome icons (192x192, 512x512)');

  // 180x180 Apple Touch Icon
  // For iOS springboard, Apple guidelines require solid non-alpha background
  // We place the crisp design icon centered on a clean pure white background
  const p180Icon = await croppedIcon.clone()
    .resize(140, Math.round(iconH * (140 / iconW)), { fit: 'contain', kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();
  const p180Meta = await sharp(p180Icon).metadata();
  const applePadX = Math.round((180 - p180Meta.width) / 2);
  const applePadY = Math.round((180 - p180Meta.height) / 2);

  const white180 = Buffer.alloc(180 * 180 * 4, 255);
  const appleTouchBuf = await sharp(white180, {
    raw: { width: 180, height: 180, channels: 4 }
  })
    .composite([{ input: p180Icon, left: applePadX, top: applePadY, blend: 'over' }])
    .png()
    .toBuffer();
  fs.writeFileSync('public/apple-touch-icon.png', appleTouchBuf);
  console.log('Saved public/apple-touch-icon.png (180x180 with clean solid background for iOS)');

  console.log('All brand assets and favicons generated successfully!');
}

buildBrandAssets().catch(err => {
  console.error('Error generating brand assets:', err);
  process.exit(1);
});
