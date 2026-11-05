import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

function loadServicesData() {
  const tsContent = fs.readFileSync('src/data/servicesData.ts', 'utf8');
  const jsContent = tsContent
    .replace(/export interface[\s\S]*?\}\n/, '')
    .replace(/export const servicesData: ServiceItem\[\] =/, 'const servicesData =') + '\nreturn servicesData;';
  return new Function(jsContent)();
}

// XML Escaping helper
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Word wrapping helper for SVG text
function wrapText(text, maxCharsPerLine = 48) {
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Master Light Mode OG Card SVG Builder (1200x630)
function buildOgCardSvg({
  badge = 'ENGINEERING STUDIO',
  eyebrow = 'AI • FULL-STACK SOFTWARE • AUTOMATION',
  title = 'Engineering Scalable Software & Intelligent Systems',
  description = 'Custom autonomous agents, scalable web applications, and automated workflows for ambitious businesses.',
  chips = ['Autonomous AI', 'Custom Software', 'Cloud & DevOps'],
  domain = 'infohq.in'
}) {
  const width = 1200;
  const height = 630;

  // Split title into 1 or 2 lines for optical hierarchy
  const titleWords = title.split(/\s+/);
  let titleLine1 = '';
  let titleLine2 = '';

  if (titleWords.length > 5) {
    const half = Math.ceil(titleWords.length / 2);
    titleLine1 = titleWords.slice(0, half).join(' ');
    titleLine2 = titleWords.slice(half).join(' ');
  } else {
    titleLine1 = title;
  }

  // Split description into up to 2 lines
  const descLines = wrapText(description, 58).slice(0, 2);

  // XML escape all strings
  const safeBadge = escapeXml(badge);
  const safeEyebrow = escapeXml(eyebrow);
  const safeLine1 = escapeXml(titleLine1);
  const safeLine2 = escapeXml(titleLine2);
  const safeDesc1 = escapeXml(descLines[0] || '');
  const safeDesc2 = escapeXml(descLines[1] || '');
  const safeChips = chips.map(c => escapeXml(c));
  const safeDomain = escapeXml(domain);

  const titleSvg = safeLine2
    ? `
      <text x="80" y="272" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="50" font-weight="900" fill="#1A085C" letter-spacing="-0.03em">${safeLine1}</text>
      <text x="80" y="342" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="50" font-weight="900" fill="url(#accentGrad)" letter-spacing="-0.03em">${safeLine2}</text>
    `
    : `
      <text x="80" y="308" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="54" font-weight="900" fill="#1A085C" letter-spacing="-0.03em">${safeLine1}</text>
    `;

  const descSvg = safeDesc2
    ? `
      <text x="80" y="415" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="500" fill="#475569" letter-spacing="-0.01em">${safeDesc1}</text>
      <text x="80" y="448" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="500" fill="#475569" letter-spacing="-0.01em">${safeDesc2}</text>
    `
    : `
      <text x="80" y="425" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="500" fill="#475569" letter-spacing="-0.01em">${safeDesc1}</text>
    `;

  let chipsX = 80;
  const chipsSvg = safeChips.map((chip) => {
    const chipWidth = Math.max(120, chip.length * 9.5 + 46);
    const textCenterX = Math.round(chipWidth / 2);
    const item = `
      <g transform="translate(${chipsX}, 0)">
        <rect x="0" y="0" width="${chipWidth}" height="34" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.2"/>
        <text x="${textCenterX}" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#334155" text-anchor="middle">&#10003; ${chip}</text>
      </g>
    `;
    chipsX += chipWidth + 14;
    return item;
  }).join('\n');

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Clean Light Canvas Gradient -->
      <linearGradient id="bgLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="40%" stop-color="#F8F8FF"/>
        <stop offset="100%" stop-color="#EEF2FE"/>
      </linearGradient>

      <!-- Soft Ambient Glow -->
      <radialGradient id="glowLight" cx="90%" cy="15%" r="65%">
        <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.14"/>
        <stop offset="100%" stop-color="#4F46E5" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glowBottom" cx="15%" cy="85%" r="55%">
        <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/>
      </radialGradient>

      <!-- Heading Accent Gradient (Matching website dual-tone) -->
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4F46E5"/>
        <stop offset="100%" stop-color="#7C3AED"/>
      </linearGradient>

      <!-- Card Top Decorative Bar Gradient -->
      <linearGradient id="topBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1A085C"/>
        <stop offset="50%" stop-color="#4F46E5"/>
        <stop offset="100%" stop-color="#7C3AED"/>
      </linearGradient>
    </defs>

    <!-- Base Light Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgLight)"/>
    <rect width="${width}" height="${height}" fill="url(#glowLight)"/>
    <rect width="${width}" height="${height}" fill="url(#glowBottom)"/>

    <!-- Outer Framing White Card Container -->
    <rect x="36" y="36" width="${width - 72}" height="${height - 72}" rx="22" fill="#FFFFFF" fill-opacity="0.82" stroke="#E0E7FF" stroke-width="1.5"/>

    <!-- Top Decorative Gradient Accent Bar -->
    <rect x="36" y="36" width="${width - 72}" height="5" rx="2.5" fill="url(#topBarGrad)"/>

    <!-- Category Pill Badge -->
    <g transform="translate(830, 78)">
      <rect x="0" y="0" width="290" height="38" rx="19" fill="#EEF2FF" stroke="#C7D2FE" stroke-width="1.2"/>
      <circle cx="20" cy="19" r="4.5" fill="#4F46E5"/>
      <text x="34" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#3730A3" letter-spacing="0.08em">${safeBadge}</text>
    </g>

    <!-- Eyebrow Tag -->
    <text x="80" y="202" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#4F46E5" letter-spacing="0.08em">${safeEyebrow}</text>

    <!-- Main Title -->
    ${titleSvg}

    <!-- Description -->
    ${descSvg}

    <!-- BOTTOM BAR: Chips -->
    <g transform="translate(0, 508)">
      ${chipsSvg}
    </g>

    <!-- BOTTOM BAR: Domain Pill -->
    <g transform="translate(980, 508)">
      <rect x="0" y="0" width="140" height="34" rx="8" fill="#1A085C" stroke="#1A085C" stroke-width="1"/>
      <circle cx="22" cy="17" r="4" fill="#38BDF8"/>
      <text x="80" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">${safeDomain}</text>
    </g>
  </svg>
  `;
}

async function renderCardToFile(cardData, outputBaseNoExt, brandLogoBuffer) {
  const svg = buildOgCardSvg(cardData);
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  
  // Composite the official Brand Logo at top-left (left: 80, top: 76)
  const finalWebp = await sharp(base)
    .composite([{ input: brandLogoBuffer, left: 80, top: 76, blend: 'over' }])
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  const dir = path.dirname(outputBaseNoExt);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(`${outputBaseNoExt}.webp`, finalWebp);
}

export async function main() {
  console.log('🚀 Generating Light Theme 1200x630 OG Social Cards (WebP only)...');

  // Load official Brand Logo (resized to height 42px)
  const brandLogoBuffer = await sharp('public/images/infohq-brandlogo.png')
    .resize({ height: 42 })
    .png()
    .toBuffer();

  // 1. Core Pages
  const coreCards = [
    {
      basePath: 'public/og/home',
      badge: 'ENGINEERING STUDIO',
      eyebrow: 'AUTONOMOUS AI • FULL-STACK • AUTOMATION',
      title: 'Engineering Scalable Software & Intelligent Systems',
      description: 'Custom autonomous AI agents, enterprise web applications, and automated workflows for ambitious businesses worldwide.',
      chips: ['Autonomous AI', 'Custom Software', 'Cloud & DevOps']
    },
    {
      basePath: 'public/og/services',
      badge: 'ENTERPRISE SERVICES',
      eyebrow: 'CAPABILITIES & SPECIALIZATIONS',
      title: 'Specialized Software, AI & Cloud Engineering',
      description: 'Production-ready engineering from autonomous LLM agents to high-speed web apps and resilient DevOps infrastructure.',
      chips: ['Full-Stack Web', 'AI & RAG Systems', 'Enterprise Security']
    },
    {
      basePath: 'public/og/pricing',
      badge: 'TRANSPARENT PRICING',
      eyebrow: 'FIXED-SCOPE & RETAINER PLANS',
      title: 'Transparent Pricing & Monthly Retainer Plans',
      description: 'Predictable pricing for custom development projects and dedicated monthly engineering teams. No hidden costs.',
      chips: ['Fixed Scope', 'Monthly Retainers', 'Full IP Ownership']
    },
    {
      basePath: 'public/og/portfolio',
      badge: 'CASE STUDIES & WORK',
      eyebrow: 'PRODUCTION ARCHITECTURE',
      title: 'Production Architecture & Client Case Studies',
      description: 'Explore live web applications, automated business pipelines, and scalable cloud systems engineered by InfoHQ.',
      chips: ['Verified Results', 'Full Architecture', 'Live Deployments']
    },
    {
      basePath: 'public/og/company',
      badge: 'ABOUT INFOHQ',
      eyebrow: 'ENGINEERING PHILOSOPHY',
      title: 'Engineering Scalable Software for Ambitious Teams',
      description: 'We design, develop, and maintain mission-critical software systems that help businesses scale with zero friction.',
      chips: ['Senior Engineers', 'Direct Slack Access', 'India & Global']
    },
    {
      basePath: 'public/og/contact',
      badge: 'START A PROJECT',
      eyebrow: 'DIRECT ARCHITECTURE CALL',
      title: 'Schedule an Architecture Consultation Call',
      description: 'Discuss your product requirements, get direct technical feasibility feedback, and receive a transparent project roadmap.',
      chips: ['24h Response', 'Direct Engineer Call', 'NDA Protected']
    },
    {
      basePath: 'public/og/blogs',
      badge: 'ENGINEERING INSIGHTS',
      eyebrow: 'AI & SOFTWARE BLOG',
      title: 'Software Architecture & Business Growth Insights',
      description: 'Actionable engineering guides, applied AI case studies, automation workflows, and founder playbooks.',
      chips: ['Applied AI', 'Workflow Automation', 'Startup Growth']
    },
    {
      basePath: 'public/og/privacy',
      badge: 'LEGAL & COMPLIANCE',
      eyebrow: 'DATA PROTECTION STANDARDS',
      title: 'Privacy Policy & Data Security Standards',
      description: 'Learn how InfoHQ protects user privacy, secures data transmission, and complies with international standards.',
      chips: ['GDPR Aligned', 'Encrypted In-Transit', 'Zero Third-Party Sales']
    },
    {
      basePath: 'public/og/terms',
      badge: 'LEGAL & COMPLIANCE',
      eyebrow: 'COMMERCIAL TERMS',
      title: 'Terms of Service & Engineering Agreements',
      description: 'Client agreements, 100% intellectual property transfer, confidentiality, and commercial SLA terms.',
      chips: ['100% IP Transfer', 'Confidentiality', 'Commercial SLA']
    }
  ];

  for (const card of coreCards) {
    await renderCardToFile(card, card.basePath, brandLogoBuffer);
    console.log(`✓ Generated Light Core Card: ${card.basePath} (.webp)`);
  }

  // 2. Default Fallbacks (mirror home card)
  fs.copyFileSync('public/og/home.webp', 'public/og/default.webp');
  fs.copyFileSync('public/og/home.webp', 'public/og/site.webp');
  console.log('✓ Created light default and site fallbacks (.webp)');

  // 3. Service Detail Pages (12 services)
  const servicesData = loadServicesData();
  for (const svc of servicesData) {
    const cardData = {
      badge: svc.category.toUpperCase().slice(0, 24),
      eyebrow: `${svc.techStack.slice(0, 3).join(' • ').toUpperCase()}`,
      title: svc.title,
      description: svc.shortDesc || svc.metaDesc,
      chips: svc.deliverables ? svc.deliverables.slice(0, 3).map(d => d.slice(0, 22)) : ['Production Ready', 'Custom Built', 'Scalable']
    };

    const outBase = `public/og/services/${svc.slug}`;
    await renderCardToFile(cardData, outBase, brandLogoBuffer);
    console.log(`✓ Generated Light Service Card: ${outBase} (.webp)`);
  }

  // 4. Blog Category Pages (5 categories)
  const categoryCards = [
    {
      slug: 'startups',
      badge: 'STARTUP PLAYBOOK',
      eyebrow: 'GROWTH • CLIENT ACQUISITION • SALES',
      title: 'Startup Growth & Client Acquisition Strategies',
      description: 'Practical playbooks for finding paying customers, founder-led sales, B2B lead generation, and scaling early-stage businesses.',
      chips: ['Customer Acquisition', 'Lead Generation', 'Founder-Led Sales']
    },
    {
      slug: 'ai',
      badge: 'APPLIED AI & LLMS',
      eyebrow: 'AGENTS • RAG • DATA INTELLIGENCE',
      title: 'Applied AI, Autonomous Agents & Enterprise RAG',
      description: 'Deep dives on deploying autonomous agents, multi-agent frameworks, document intelligence, and private RAG knowledge bases.',
      chips: ['Autonomous Agents', 'RAG Knowledge Bases', 'LLM Integrations']
    },
    {
      slug: 'automation',
      badge: 'BUSINESS AUTOMATION',
      eyebrow: 'N8N • MAKE • WORKFLOWS • CRMS',
      title: 'Workflow Automation & System Integrations',
      description: 'Practical guides on connecting CRMs, automated lead follow-ups, invoice parsing, and eliminating manual business bottlenecks.',
      chips: ['CRM Pipelines', 'API Orchestration', 'Zero Manual Entry']
    },
    {
      slug: 'web',
      badge: 'MODERN WEB ENGINEERING',
      eyebrow: 'NEXT.JS • ASTRO • PERFORMANCE',
      title: 'High-Performance Web & Full-Stack Development',
      description: 'Architecture guides on Next.js, Astro, Core Web Vitals, mobile app development, and high-conversion frontend engineering.',
      chips: ['Core Web Vitals', 'Next.js & Astro', 'Mobile Engineering']
    },
    {
      slug: 'cloud',
      badge: 'CLOUD & DEVOPS',
      eyebrow: 'AWS • GCP • CI/CD • SECURITY',
      title: 'Cloud Architecture, DevOps & Zero-Downtime CI/CD',
      description: 'Best practices for scalable cloud hosting, automated deployment pipelines, infrastructure as code, and security hardening.',
      chips: ['CI/CD Pipelines', 'Cloud Security', 'Zero-Downtime']
    }
  ];

  for (const cat of categoryCards) {
    const outBase = `public/og/blogs/${cat.slug}`;
    await renderCardToFile(cat, outBase, brandLogoBuffer);
    console.log(`✓ Generated Light Category Card: ${outBase} (.webp)`);
  }

  console.log('\n🎉 All Light Theme 1200x630 OG Cards (WebP only) successfully generated!');
}

main().catch(err => {
  console.error('Fatal error in generate-og:', err);
  process.exit(1);
});
