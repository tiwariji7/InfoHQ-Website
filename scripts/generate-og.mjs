import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const servicePages = [
  { slug: 'ai-intelligent-systems', title: 'AI & Intelligent Systems Development', category: 'AI & Software Engineering' },
  { slug: 'custom-software', title: 'Custom Software Development Company', category: 'AI & Software Engineering' },
  { slug: 'web-development', title: 'Web Development Company in Pune', category: 'Web & Mobile App Development' },
  { slug: 'mobile-app-development', title: 'Mobile App Development Company', category: 'Web & Mobile App Development' },
  { slug: 'business-automation', title: 'Business Process Automation Services', category: 'Automation & System Integrations' },
  { slug: 'cloud-devops', title: 'Cloud & DevOps Services', category: 'Cloud, DevOps & Security' },
  { slug: 'cybersecurity', title: 'Cybersecurity & Application Security Audits', category: 'Cloud, DevOps & Security' },
  { slug: 'website-maintenance', title: 'Website Maintenance & Support Services', category: 'Cloud, DevOps & Security' },
  { slug: 'ui-ux-design', title: 'UI/UX Design Services', category: 'Design & Digital Marketing' },
  { slug: 'brand-design', title: 'Brand & Graphic Design Services', category: 'Design & Digital Marketing' },
  { slug: 'social-media-management', title: 'Social Media Management Services', category: 'Design & Digital Marketing' },
  { slug: 'digital-marketing', title: 'Digital Marketing & SEO Services', category: 'Design & Digital Marketing' }
];

const cards = [
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
    title: 'Portfolio & Case Studies — Shipped Projects & Real Results',
    label: 'Portfolio Hub'
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
  // 8. The 5 Blog Categories
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
  // 9. Portfolio Case Studies
  {
    slug: 'portfolio/sehat',
    title: 'SeHAT SmartCare AI — AI-Powered Health Assistance Platform',
    label: 'Case Study • Healthcare AI'
  },
  {
    slug: 'portfolio/alpha-studio-tech',
    title: 'High-Converting Digital Agency Web Platform with Sub-Second Speeds',
    label: 'Case Study • Web Platform'
  },
  {
    slug: 'portfolio/cogniflow-ai',
    title: 'Autonomous RAG & Multi-Modal Knowledge Search Intelligence Agent',
    label: 'Case Study • Enterprise AI'
  },
  {
    slug: 'portfolio/omniflow-b2b',
    title: 'Automated Multi-Channel B2B Order & WhatsApp Dispatch Pipeline',
    label: 'Case Study • Automation'
  },
  // 10. Legal & Compliance
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
  // 11. Default Site Cards
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

// Add each of the 12 Services
servicePages.forEach((s) => {
  cards.push({
    slug: `services/${s.slug}`,
    title: s.title,
    label: `Services • ${s.category}`
  });
});

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
}

generateAllOGImages().catch((err) => {
  console.error('Error generating OG images:', err);
  process.exit(1);
});
