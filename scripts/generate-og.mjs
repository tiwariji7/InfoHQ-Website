import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

// Dynamic loader for services data
function loadServicesCards() {
  try {
    const filePath = path.resolve('src/data/servicesData.ts');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    const clean = content
      .replace(/export interface[\s\S]*?}/, '')
      .replace(/: ServiceItem\[\]/g, '')
      .replace('export const servicesData', 'const servicesData');
    const fn = new Function(clean + '; return servicesData;');
    const services = fn();
    return services.map((s) => ({
      slug: `services/${s.slug}`,
      title: s.title,
      label: `Services • ${s.category}`
    }));
  } catch (err) {
    console.warn('Warning: Could not dynamically load servicesData.ts, skipping services OG:', err);
    return [];
  }
}

// Dynamic loader for blog content collection (MD / MDX)
function loadContentCollectionCards() {
  const contentDir = path.resolve('src/content/blog');
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir);
  const blogCards = [];
  for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    const slug = file.replace(/\.mdx?$/, '');
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
    const title = titleMatch ? titleMatch[1] : slug;
    blogCards.push({
      slug: `blogs/${slug}`,
      title,
      label: 'Blog • Article'
    });
  }
  return blogCards;
}

// Dynamic loader for portfolio case studies (only if standalone routes exist)
function loadPortfolioCards() {
  const portfolioDynamicRoute = path.resolve('src/pages/portfolio/[slug].astro');
  if (!fs.existsSync(portfolioDynamicRoute)) {
    // Portfolio projects are showcased on the main /portfolio hub, no sub-routes exist
    return [];
  }
  try {
    const portfolioAstro = fs.readFileSync(path.resolve('src/pages/portfolio.astro'), 'utf-8');
    const match = portfolioAstro.match(/const flagshipCaseStudies = (\[[\s\S]*?\n\];)/);
    if (!match) return [];
    const fn = new Function('return ' + match[1].replace(/;$/, ''));
    const items = fn();
    return items.map((p) => ({
      slug: `portfolio/${p.id}`,
      title: p.title,
      label: `Case Study • ${p.category}`
    }));
  } catch {
    return [];
  }
}

// Core static site routes
const staticCards = [
  // 1. Home
  {
    slug: 'home',
    title: 'InfoHQ — AI & Software Development Company in India',
    label: 'Engineering Studio'
  },
  // 2. Services Hub
  {
    slug: 'services',
    title: 'Our Services — AI, Software, Web & Mobile Development',
    label: 'Services Hub'
  },
  // 3. Pricing
  {
    slug: 'pricing',
    title: 'Pricing — Web, App & AI Development Costs',
    label: 'Transparent Pricing'
  },
  // 4. Portfolio Hub
  {
    slug: 'portfolio',
    title: 'Portfolio & Case Studies | InfoHQ',
    label: 'Portfolio & Case Studies'
  },
  // 5. Company
  {
    slug: 'company',
    title: 'About InfoHQ — AI & Software Engineering Studio',
    label: 'About InfoHQ'
  },
  // 6. Contact
  {
    slug: 'contact',
    title: 'Contact InfoHQ — Get a Free Consultation',
    label: 'Get In Touch'
  },
  // 7. Blogs Listing
  {
    slug: 'blogs',
    title: 'Blog — AI, Software & Engineering Insights',
    label: 'Engineering Blog'
  },
  // 8. The 5 Blog Categories (preserved per Part 2 instruction)
  {
    slug: 'blogs/ai-automation',
    title: 'AI & Automation Engineering Insights',
    label: 'Blog — AI & Automation'
  },
  {
    slug: 'blogs/web-app-development',
    title: 'Web & Mobile App Engineering Insights',
    label: 'Blog — Web & Mobile'
  },
  {
    slug: 'blogs/case-studies',
    title: 'Production Engineering Case Studies & Teardowns',
    label: 'Blog — Case Studies'
  },
  {
    slug: 'blogs/engineering-practices',
    title: 'Engineering Practices, Security & CI/CD Insights',
    label: 'Blog — Engineering'
  },
  {
    slug: 'blogs/industry-insights',
    title: 'Digital Growth, Compliance & Enterprise Tech Insights',
    label: 'Blog — Industry'
  },
  // 9. Legal & Compliance
  {
    slug: 'privacy',
    title: 'Privacy Policy | InfoHQ',
    label: 'Legal & Compliance'
  },
  {
    slug: 'terms',
    title: 'Terms of Service | InfoHQ',
    label: 'Legal & Compliance'
  },
  // 10. Default Site Cards
  {
    slug: 'default',
    title: 'InfoHQ — AI, Software & Digital Growth',
    label: 'Engineering Studio'
  },
  {
    slug: 'site',
    title: 'InfoHQ — Engineering AI, Software & Digital Products',
    label: 'Engineering Studio'
  }
];

const cards = [
  ...staticCards,
  ...loadServicesCards(),
  ...loadContentCollectionCards(),
  ...loadPortfolioCards()
];

async function generateAllOGImages() {
  console.log(`Starting Open Graph image generation for ${cards.length} cards...`);

  // 1. Read fonts
  const fontBoldPath = path.resolve('node_modules/@fontsource/inter/files/inter-latin-700-normal.woff');
  const fontRegPath = path.resolve('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff');
  const fontBold = fs.readFileSync(fontBoldPath);
  const fontReg = fs.readFileSync(fontRegPath);

  // 2. Read and convert real logo to PNG in memory
  const logoWebpPath = path.resolve('public/images/infohq-logo.webp');
  const logoWebp = fs.readFileSync(logoWebpPath);
  const logoPngBuffer = await sharp(logoWebp).png().toBuffer();
  const logoDataUri = `data:image/png;base64,${logoPngBuffer.toString('base64')}`;

  const results = [];

  for (const card of cards) {
    // Determine dynamic title font size with auto-shrink
    let titleFontSize = '52px';
    if (card.title.length > 68) {
      titleFontSize = '38px';
    } else if (card.title.length > 48) {
      titleFontSize = '44px';
    }

    const markup = {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F1EFFA',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(221, 73, 133, 0.12) 0%, rgba(241, 239, 250, 0) 55%), radial-gradient(circle at 15% 25%, rgba(124, 92, 232, 0.10) 0%, rgba(241, 239, 250, 0) 55%)',
          padding: '56px 72px 42px 72px',
          fontFamily: 'Inter',
          position: 'relative'
        },
        children: [
          // Top Row: Real Logo (top-left) & Purple Category/Page Label (top-right)
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: logoDataUri,
                    width: '155',
                    height: '52',
                    style: {
                      objectFit: 'contain'
                    }
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#7C5CE8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      backgroundColor: 'rgba(124, 92, 232, 0.08)',
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(124, 92, 232, 0.22)'
                    },
                    children: card.label
                  }
                }
              ]
            }
          },
          // Middle Area: Real Page Title (Large Navy #1A085C, Inter Bold)
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                padding: '24px 0 16px 0'
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: titleFontSize,
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: '#1A085C',
                      letterSpacing: '-0.025em',
                      maxHeight: '270px',
                      overflow: 'hidden'
                    },
                    children: card.title
                  }
                }
              ]
            }
          },
          // Bottom Bar: infohq.in small at bottom-left & tagline
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: '16px'
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#1A085C',
                      letterSpacing: '-0.01em'
                    },
                    children: 'infohq.in'
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#7C5CE8'
                    },
                    children: 'Engineering AI, Software & Digital Growth'
                  }
                }
              ]
            }
          },
          // Thin brand-gradient line along the bottom edge
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '5px',
                backgroundImage: 'linear-gradient(90deg, #E8604E 0%, #DD4985 35%, #914FBB 65%, #5782E0 100%)'
              }
            }
          }
        ]
      }
    };

    // Render SVG via Satori
    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontBold,
          weight: 700,
          style: 'normal'
        },
        {
          name: 'Inter',
          data: fontReg,
          weight: 400,
          style: 'normal'
        }
      ]
    });

    // Render PNG via @resvg/resvg-js
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width',
        value: 1200
      }
    });
    const pngData = resvg.render().asPng();

    // Compress to progressive JPEG via Sharp (Quality 82 ensures ~35-55KB, strictly < 100KB)
    const jpegBuffer = await sharp(pngData)
      .jpeg({
        quality: 82,
        progressive: true
      })
      .toBuffer();

    const targetFile = path.resolve(`public/og/${card.slug}.jpg`);
    const targetDir = path.dirname(targetFile);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetFile, jpegBuffer);
    const sizeKb = (jpegBuffer.length / 1024).toFixed(1);
    results.push({ slug: card.slug, bytes: jpegBuffer.length, sizeKb: `${sizeKb} KB` });
    console.log(`Generated: public/og/${card.slug}.jpg (${sizeKb} KB)`);
  }

  console.log(`\nSuccessfully generated ${results.length} Open Graph JPEG cards!`);
  const allUnder100k = results.every(r => r.bytes < 100 * 1024);
  console.log(`All files under 100KB: ${allUnder100k ? 'YES' : 'NO'}`);

  // Clean up any stale OG image files for routes that no longer exist
  const ogDir = path.resolve('public/og');
  if (fs.existsSync(ogDir)) {
    const validRelativePaths = new Set(cards.map((c) => path.normalize(`${c.slug}.jpg`)));
    
    function cleanDirectory(dir, relPrefix = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relPath = path.join(relPrefix, entry.name);
        if (entry.isDirectory()) {
          cleanDirectory(fullPath, relPath);
          if (fs.readdirSync(fullPath).length === 0) {
            fs.rmdirSync(fullPath);
          }
        } else if (entry.isFile() && entry.name.endsWith('.jpg')) {
          if (!validRelativePaths.has(path.normalize(relPath))) {
            fs.unlinkSync(fullPath);
            console.log(`Pruned stale OG card: public/og/${relPath.replace(/\\/g, '/')}`);
          }
        }
      }
    }
    
    cleanDirectory(ogDir);
  }
}

generateAllOGImages().catch((err) => {
  console.error('Error generating OG images:', err);
  process.exit(1);
});
