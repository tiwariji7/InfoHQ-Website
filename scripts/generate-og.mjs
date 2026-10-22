import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Find Chrome or Edge executable on Windows/Linux/macOS
function getBrowserExecutable() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

// Service slugs
const serviceSlugs = [
  'ai-intelligent-systems',
  'custom-software',
  'web-development',
  'mobile-app-development',
  'business-automation',
  'cloud-devops',
  'cybersecurity',
  'website-maintenance',
  'ui-ux-design',
  'brand-design',
  'social-media-management',
  'digital-marketing'
];

// Category slugs
const categorySlugs = ['ai', 'automation', 'web', 'cloud', 'design'];

// Static core pages
const corePages = [
  { url: '/', output: 'public/og/home.webp', name: 'Home Hero' },
  { url: '/services', output: 'public/og/services.webp', name: 'Services Hub' },
  { url: '/pricing', output: 'public/og/pricing.webp', name: 'Pricing' },
  { url: '/portfolio', output: 'public/og/portfolio.webp', name: 'Portfolio' },
  { url: '/company', output: 'public/og/company.webp', name: 'Company' },
  { url: '/contact', output: 'public/og/contact.webp', name: 'Contact' },
  { url: '/blogs', output: 'public/og/blogs.webp', name: 'Blogs Hub' },
  { url: '/privacy', output: 'public/og/privacy.webp', name: 'Privacy Policy' },
  { url: '/terms', output: 'public/og/terms.webp', name: 'Terms of Service' }
];

async function isServerRunning(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
    return res.ok || res.status < 500;
  } catch {
    return false;
  }
}

async function main() {
  console.log('🚀 Starting Screenshot-based WebP OG Image Generation...');

  const browserPath = getBrowserExecutable();
  if (!browserPath) {
    console.warn('⚠️ No Chrome or Edge executable found. Skipping screenshot OG generation.');
    return;
  }

  const baseUrl = 'http://localhost:4321';
  let serverProcess = null;

  // Check if dev server is running, otherwise launch temporary preview/dev
  const running = await isServerRunning(baseUrl);
  if (running) {
    console.log(`✓ Detected running server at ${baseUrl}`);
  } else {
    console.log('Starting local dev server for OG capture...');
    serverProcess = spawn('npx', ['astro', 'dev', '--port', '4321'], {
      shell: true,
      stdio: 'ignore'
    });

    let attempts = 0;
    while (attempts < 20) {
      await new Promise((r) => setTimeout(r, 1000));
      if (await isServerRunning(baseUrl)) break;
      attempts++;
    }
  }

  const tempDir = path.resolve('scratch/og-temp');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const tasks = [];

  // 1. Core pages
  for (const page of corePages) {
    tasks.push({
      url: `${baseUrl}${page.url}`,
      outPath: path.resolve(page.output),
      name: page.name,
      windowHeight: page.url === '/' ? 630 : 680
    });
  }

  // 2. Services detail pages
  for (const slug of serviceSlugs) {
    tasks.push({
      url: `${baseUrl}/services/${slug}/`,
      outPath: path.resolve(`public/og/services/${slug}.webp`),
      name: `Service: ${slug}`,
      windowHeight: 680
    });
  }

  // 3. Blog category pages
  for (const cat of categorySlugs) {
    tasks.push({
      url: `${baseUrl}/blogs/${cat}/`,
      outPath: path.resolve(`public/og/blogs/${cat}.webp`),
      name: `Blog Category: ${cat}`,
      windowHeight: 680
    });
  }

  let count = 0;
  for (const task of tasks) {
    const rawPng = path.join(tempDir, `raw-${Date.now()}-${Math.random().toString(36).substring(7)}.png`);
    const targetDir = path.dirname(task.outPath);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    try {
      execSync(
        `"${browserPath}" --headless --no-sandbox --disable-gpu --window-size=1200,${task.windowHeight} --screenshot="${rawPng}" "${task.url}"`,
        { stdio: 'ignore' }
      );

      if (fs.existsSync(rawPng)) {
        const webpBuffer = await sharp(rawPng)
          .resize(1200, 630, { fit: 'cover', position: 'top' })
          .webp({ quality: 85 })
          .toBuffer();

        fs.writeFileSync(task.outPath, webpBuffer);
        const sizeKb = (webpBuffer.length / 1024).toFixed(1);
        console.log(`✓ [${++count}/${tasks.length}] Generated: ${path.relative(process.cwd(), task.outPath)} (${sizeKb} KB)`);
        fs.unlinkSync(rawPng);
      }
    } catch (err) {
      console.error(`✗ Error generating OG for ${task.name}:`, err.message);
    }
  }

  // Generate fallback defaults (copies of home.webp)
  const homeWebpPath = path.resolve('public/og/home.webp');
  if (fs.existsSync(homeWebpPath)) {
    fs.copyFileSync(homeWebpPath, path.resolve('public/og/default.webp'));
    fs.copyFileSync(homeWebpPath, path.resolve('public/og/site.webp'));
    console.log('✓ Created default.webp and site.webp from home hero screenshot');
  }

  // Clean up any stale .jpg files in public/og
  function cleanJpgs(dir) {
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, file.name);
      if (file.isDirectory()) cleanJpgs(full);
      else if (file.name.endsWith('.jpg')) {
        fs.unlinkSync(full);
        console.log(`Pruned old jpg: ${path.relative(process.cwd(), full)}`);
      }
    }
  }
  cleanJpgs(path.resolve('public/og'));

  if (serverProcess) {
    serverProcess.kill();
  }

  console.log('\n🎉 All Screenshot-based WebP OG images successfully created!');
}

main().catch((err) => {
  console.error('Fatal error in generate-og:', err);
  process.exit(1);
});
