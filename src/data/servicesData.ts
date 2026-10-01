export interface ServiceItem {
  slug: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  techStack: string[];
  deliverables: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'ai-intelligent-systems',
    category: 'AI & Software Engineering',
    title: 'AI & Intelligent Systems',
    shortDesc: 'Practical AI agents, RAG systems, and custom LLM integrations.',
    fullDesc: 'Practical AI systems: autonomous AI agents & assistants, Retrieval-Augmented Generation (RAG) connecting your internal docs/wikis to LLMs, document & data intelligence for unstructured PDFs/invoices, and custom AI model/API integrations (OpenAI, Gemini, Claude).',
    metaTitle: 'AI & Intelligent Systems Development | InfoHQ',
    metaDesc: 'Build autonomous AI agents, RAG systems, and custom LLM integrations (OpenAI, Gemini, Claude) with InfoHQ\'s AI engineering team in India.',
    keywords: 'RAG development India, AI agent development company, LLM integration services, AI development company India',
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Gemini', 'pgvector', 'PostgreSQL'],
    deliverables: [
      'Autonomous AI agents tailored to business workflows',
      'Retrieval-Augmented Generation (RAG) for internal company data',
      'Automated extraction pipelines for unstructured PDFs and invoices',
      'Secure multi-model API integrations (OpenAI, Claude, Gemini)',
      'Vector database setup and telemetry logging'
    ],
    icon: 'Brain'
  },
  {
    slug: 'custom-software',
    category: 'AI & Software Engineering',
    title: 'Custom Software Development',
    shortDesc: 'Purpose-built business software, SaaS platforms, and APIs.',
    fullDesc: 'Purpose-built business software: end-to-end multi-tenant SaaS platforms, robust REST/GraphQL APIs, background job architectures, and specialized internal admin portals/dashboards.',
    metaTitle: 'Custom Software Development Company | InfoHQ',
    metaDesc: 'InfoHQ builds multi-tenant SaaS platforms, REST/GraphQL APIs, and custom business software for startups and enterprises across India.',
    keywords: 'custom software development company India, SaaS development company, enterprise software development India',
    techStack: ['TypeScript', 'Node.js', 'Python', 'React', 'Next.js', 'PostgreSQL', 'Redis'],
    deliverables: [
      'Multi-tenant SaaS platform architecture',
      'High-throughput REST and GraphQL APIs',
      'Background job queues and event-driven architectures',
      'Internal operations portals & admin dashboards',
      'Database modeling, migration, and query optimization'
    ],
    icon: 'Code2'
  },
  {
    slug: 'web-development',
    category: 'Web & Mobile App Development',
    title: 'Modern Web Development',
    shortDesc: 'High-converting business websites, client portals & headless CMS.',
    fullDesc: 'High-converting business websites, interactive client portals & dashboards, headless CMS platforms, sub-second page performance, and full SEO optimization.',
    metaTitle: 'Web Development Company in Pune | InfoHQ',
    metaDesc: 'High-converting business websites, client portals, and SEO-optimized web platforms built by InfoHQ — serving Pune, Prayagraj, and clients pan-India.',
    keywords: 'web development company Pune, website development company India, business website development',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'HTML5'],
    deliverables: [
      'High-converting responsive business websites',
      'Interactive client portals and customer dashboards',
      'Headless CMS integrations for frictionless content editing',
      'Sub-second load times & Green (95+) Core Web Vitals',
      'Technical SEO architecture & structured metadata'
    ],
    icon: 'Globe'
  },
  {
    slug: 'mobile-app-development',
    category: 'Web & Mobile App Development',
    title: 'Mobile App Development (iOS & Android)',
    shortDesc: 'Cross-platform and native mobile apps built to launch.',
    fullDesc: 'Cross-platform and native mobile apps with offline-first local database caching, background sync, biometric security, real-time geolocation/push notifications, and end-to-end App Store & Google Play submission.',
    metaTitle: 'Mobile App Development Company | InfoHQ',
    metaDesc: 'iOS & Android app development with offline-first architecture, push notifications, and App Store/Play Store submission — by InfoHQ, India.',
    keywords: 'mobile app development company India, iOS Android app developers Pune, React Native development company',
    techStack: ['React Native', 'Kotlin', 'Jetpack Compose', 'TypeScript', 'Firebase', 'REST APIs'],
    deliverables: [
      'iOS & Android native and cross-platform apps',
      'Offline-first architecture with background sync',
      'Biometric authentication (FaceID / Fingerprint)',
      'Push notification pipelines and geolocation features',
      'End-to-end App Store & Google Play Store publishing'
    ],
    icon: 'Smartphone'
  },
  {
    slug: 'business-automation',
    category: 'Automation & System Integrations',
    title: 'Business Automation',
    shortDesc: 'Connect your tools, automate workflows, eliminate manual work.',
    fullDesc: 'Custom workflow automation, bi-directional tool/app synchronization (CRMs, payments, email, accounting), automated invoice/document processing pipelines, scheduled data synchronization, and automated lead routing.',
    metaTitle: 'Business Process Automation Services | InfoHQ',
    metaDesc: 'Automate workflows, CRM sync, invoice processing and lead routing with InfoHQ\'s custom automation solutions for growing businesses in India.',
    keywords: 'business automation services India, workflow automation company, CRM integration services',
    techStack: ['Python', 'Node.js', 'REST APIs', 'Webhooks', 'n8n', 'Zapier', 'Make'],
    deliverables: [
      'Bi-directional tool sync across CRMs, ERPs, and billing tools',
      'Automated invoice and receipt extraction workflows',
      'Instant lead routing and omnichannel notification dispatch',
      'Scheduled background data transformations',
      'Custom webhook listener microservices'
    ],
    icon: 'Cpu'
  },
  {
    slug: 'cloud-devops',
    category: 'Cloud, DevOps & Security',
    title: 'Cloud & DevOps',
    shortDesc: 'Reliable cloud infrastructure, CI/CD, zero-downtime deploys.',
    fullDesc: 'Cloud architecture (AWS, GCP, Cloudflare), zero-downtime automated CI/CD pipelines via GitHub Actions, Docker containerization, proactive health/uptime monitoring, and disaster recovery/backup automation.',
    metaTitle: 'Cloud & DevOps Services | InfoHQ',
    metaDesc: 'AWS/GCP cloud architecture, CI/CD pipelines, and zero-downtime deployments — managed by InfoHQ\'s DevOps engineers in India.',
    keywords: 'cloud DevOps services India, AWS consulting company India, CI/CD services',
    techStack: ['AWS', 'Google Cloud', 'Docker', 'GitHub Actions', 'Cloudflare', 'Linux', 'PostgreSQL'],
    deliverables: [
      'Scalable AWS, GCP, and Cloudflare cloud architectures',
      'Zero-downtime CI/CD automation pipelines',
      'Docker containerization and orchestration',
      '24/7 automated uptime and anomaly alerting',
      'Automated disaster recovery and multi-region database backups'
    ],
    icon: 'Cloud'
  },
  {
    slug: 'cybersecurity',
    category: 'Cloud, DevOps & Security',
    title: 'Cybersecurity',
    shortDesc: 'OWASP security audits, authentication systems, and server hardening.',
    fullDesc: 'OWASP Top 10 application security audits, secure authentication systems (JWT, MFA, RBAC), server and firewall hardening, TLS encryption, and automated CI/CD dependency vulnerability scanning.',
    metaTitle: 'Cybersecurity & Application Security Audits | InfoHQ',
    metaDesc: 'OWASP security audits, secure authentication (JWT/MFA/RBAC), and server hardening — InfoHQ\'s cybersecurity services for Indian businesses.',
    keywords: 'cybersecurity company India, application security audit services, OWASP security testing',
    techStack: ['OWASP Standards', 'SSL/TLS', 'JWT', 'RBAC', 'Cloudflare WAF', 'Linux Security'],
    deliverables: [
      'OWASP Top 10 web and API security vulnerability audits',
      'Enterprise authentication implementation (MFA, RBAC, OAuth)',
      'Server, firewall, and Cloudflare WAF configuration',
      'Automated security vulnerability checks in CI/CD',
      'Actionable remediation report for stakeholders'
    ],
    icon: 'ShieldCheck'
  },
  {
    slug: 'website-maintenance',
    category: 'Cloud, DevOps & Security',
    title: 'Website Maintenance & Support',
    shortDesc: 'Continuous updates, daily backups, speed tuning, and bug fixes.',
    fullDesc: 'Routine security and plugin updates, automated daily backups with 1-click restore, ongoing Core Web Vitals speed optimization, uptime checks, and fast turnaround bug/content fixes.',
    metaTitle: 'Website Maintenance & Support Services | InfoHQ',
    metaDesc: 'Ongoing website updates, backups, security monitoring, and speed optimization — reliable maintenance plans from InfoHQ, starting ₹9,999/month.',
    keywords: 'website maintenance services India, website support plans, monthly website maintenance company',
    techStack: ['Monitoring Tools', 'Automated Backups', 'SSL/TLS', 'Performance Tuning', 'Git'],
    deliverables: [
      'Scheduled security and dependency patch cycles',
      'Automated daily backups with 1-click recovery point',
      'Continuous Core Web Vitals and speed optimization',
      'Fast turnaround bug fixes and content updates',
      'Monthly health report and proactive check-ins'
    ],
    icon: 'Wrench'
  },
  {
    slug: 'ui-ux-design',
    category: 'Design & Digital Marketing',
    title: 'UI/UX Design',
    shortDesc: 'User journeys, wireframes, Figma prototypes, and design systems.',
    fullDesc: 'User journey mapping, wireframing, high-fidelity responsive UI design, interactive Figma prototypes, and scalable component design systems.',
    metaTitle: 'UI/UX Design Services | InfoHQ',
    metaDesc: 'User research, wireframing, and high-fidelity UI design with Figma prototypes — InfoHQ\'s design team based in Pune, India.',
    keywords: 'UI UX design company India, UI UX design services Pune, product design agency India',
    techStack: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Design Tokens'],
    deliverables: [
      'User journey maps and UX information architectures',
      'Low and high-fidelity wireframe blueprints',
      'Interactive Figma prototypes for usability validation',
      'Scalable component design systems and design tokens',
      'Developer handoff specs with pixel-perfect assets'
    ],
    icon: 'Palette'
  },
  {
    slug: 'brand-design',
    category: 'Design & Digital Marketing',
    title: 'Graphic & Brand Design',
    shortDesc: 'Modern logos, complete brand guidelines, pitch decks & assets.',
    fullDesc: 'Modern logos and visual identities, complete brand style guidelines, investor pitch decks & presentation decks, and marketing/social asset kits.',
    metaTitle: 'Brand & Graphic Design Services | InfoHQ',
    metaDesc: 'Logo design, brand identity systems, pitch decks, and marketing assets — crafted by InfoHQ\'s design team for startups and enterprises.',
    keywords: 'brand design agency India, logo design company, pitch deck design services',
    techStack: ['Figma', 'Adobe Illustrator', 'Brand Systems', 'Vector Graphics'],
    deliverables: [
      'Distinctive modern logo and brand iconography',
      'Complete typography, color palette, and usage guidelines',
      'Investor-ready pitch decks and sales decks',
      'Social media and digital marketing visual asset kits',
      'Print and digital collaterals'
    ],
    icon: 'PenTool'
  },
  {
    slug: 'social-media-management',
    category: 'Design & Digital Marketing',
    title: 'Social Media Management',
    shortDesc: 'Content planning, branded posts for LinkedIn, X & Instagram.',
    fullDesc: 'Monthly content calendar planning, custom branded post/carousel design for LinkedIn, X/Twitter, and Instagram, technical copywriting & thought leadership, and performance analytics reporting.',
    metaTitle: 'Social Media Management Services | InfoHQ',
    metaDesc: 'Monthly content calendars, branded post design, and performance reporting for LinkedIn, Instagram, and X — managed by InfoHQ.',
    keywords: 'social media management agency India, social media marketing company',
    techStack: ['Figma', 'Buffer', 'Canva Pro', 'Social Analytics'],
    deliverables: [
      'Monthly strategic content calendars',
      'High-impact custom carousel and image graphics',
      'Technical copywriting and industry thought leadership',
      'Audience growth and post scheduling execution',
      'Monthly analytics and reach performance reporting'
    ],
    icon: 'Share2'
  },
  {
    slug: 'digital-marketing',
    category: 'Design & Digital Marketing',
    title: 'Digital Marketing',
    shortDesc: 'SEO, Google Ads, LinkedIn paid ads, and conversion optimization.',
    fullDesc: 'Search Engine Optimization (SEO), high-intent Google Search and LinkedIn paid ad campaigns, conversion funnel tracking with GA4, and landing page conversion optimization.',
    metaTitle: 'Digital Marketing & SEO Services | InfoHQ',
    metaDesc: 'SEO, Google Ads, LinkedIn Ads, and conversion funnel optimization with GA4 tracking — InfoHQ\'s digital marketing services for Indian businesses.',
    keywords: 'digital marketing agency India, SEO services company India, PPC management services',
    techStack: ['Google Analytics 4', 'Google Search Console', 'Google Ads', 'LinkedIn Ads', 'SEO Tools'],
    deliverables: [
      'Technical on-page, off-page, and local SEO execution',
      'High-intent Google Ads and LinkedIn ad campaign management',
      'Conversion funnel tracking setup via Google Analytics 4',
      'Landing page A/B testing and conversion rate optimization',
      'Transparent ROI and lead acquisition reporting'
    ],
    icon: 'TrendingUp'
  }
];
