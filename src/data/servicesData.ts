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
  faqs?: Array<{ q: string; a: string }>;
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
    faqs: [
      {
        q: 'How do you connect LLMs to our private company documents safely?',
        a: 'We use Retrieval-Augmented Generation (RAG) with secure vector databases like pgvector or Pinecone. Your documents are never used to train public foundation models, and all queries and data transmissions remain strictly private and encrypted.'
      },
      {
        q: 'Which AI models do you work with?',
        a: 'We integrate OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), Google (Gemini 1.5/2.0), and open-source models like Llama 3, selecting the optimal model based on latency, accuracy, and operational cost.'
      },
      {
        q: 'What is the typical timeline and cost for an AI project?',
        a: 'A functional custom RAG pipeline or AI agent prototype is typically delivered in 2 to 4 weeks. One-time project scopes start from ₹19,999, with monthly engineering retainers available for ongoing enhancement.'
      }
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
    faqs: [
      {
        q: 'Do we own the source code and intellectual property (IP)?',
        a: 'Yes, 100%. All source code, Git repositories, database schemas, and architectural assets belong entirely to your company from day one.'
      },
      {
        q: 'How do you ensure the software scales under high traffic?',
        a: 'We build with stateless microservices/modular monoliths, distributed background job queues (Redis/BullMQ), relational database indexing, and containerized deployments.'
      },
      {
        q: 'Can you take over and modernize existing legacy software?',
        a: 'Yes. We perform a code and security audit first, identify performance bottlenecks, and refactor or migrate modules incrementally with zero business disruption.'
      }
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
    faqs: [
      {
        q: 'How fast will our website load?',
        a: 'We engineer websites with modern static generation and edge caching (Astro / Next.js) to guarantee sub-second load times and 95+ Core Web Vitals scores on Google PageSpeed.'
      },
      {
        q: 'Is technical SEO built into the website from scratch?',
        a: 'Yes. We include full technical SEO: semantic HTML5 tags, canonical URLs, structured JSON-LD Schema markup, OpenGraph social meta tags, and automated XML sitemaps.'
      },
      {
        q: 'How much does a custom business website cost in India?',
        a: 'Our business website packages start from ₹14,999 for static high-converting business sites, with typical delivery within 1 to 2 weeks.'
      }
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
    faqs: [
      {
        q: 'Do you build native or cross-platform apps?',
        a: 'We build both. For most business use cases, React Native allows a single high-performance codebase across iOS and Android, saving 40%+ on development costs while maintaining 60fps native feel.'
      },
      {
        q: 'Do you handle App Store and Google Play publishing?',
        a: 'Yes. We manage the entire store preparation, screenshot generation, privacy policy compliance, and review submission process until your app is live.'
      },
      {
        q: 'Will the mobile app work offline?',
        a: 'Yes. We implement offline-first database caching (SQLite / WatermelonDB) so users can view data and queue actions even with intermittent or zero internet connection.'
      }
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
    faqs: [
      {
        q: 'What platforms and tools can you integrate?',
        a: 'We integrate any tool with a REST API or webhook: CRMs (Zoho, HubSpot, Salesforce), payment gateways (Razorpay, Stripe), WhatsApp Cloud API, Google Workspace, and accounting systems.'
      },
      {
        q: 'What tools do you use for automation?',
        a: 'We use robust platforms like n8n, Make, and Zapier alongside custom Python/Node.js microservices for complex logic that no-code tools cannot handle.'
      },
      {
        q: 'What happens if a third-party API fails or goes down?',
        a: 'We build automated retry queues, fallback logic, and instant error alerts (Slack/WhatsApp/email) so no transaction or lead is ever lost.'
      }
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
    faqs: [
      {
        q: 'Which cloud providers and infrastructure do you support?',
        a: 'We primarily architect on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Cloudflare, matching the provider to your workload and budget.'
      },
      {
        q: 'How do you ensure zero-downtime deployments?',
        a: 'We set up automated CI/CD pipelines via GitHub Actions with blue-green or rolling container deployments and automatic health checks.'
      },
      {
        q: 'Can you help reduce our existing cloud bills?',
        a: 'Yes. Our cloud audit frequently identifies idle instances, oversized databases, and unoptimized egress costs, cutting monthly bills by 20% to 50%.'
      }
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
    faqs: [
      {
        q: 'What is included in an application security audit?',
        a: 'We test against OWASP Top 10 vulnerabilities including SQL injection, cross-site scripting (XSS), insecure authentication, broken access control, and dependency vulnerabilities.'
      },
      {
        q: 'Do you provide an actionable remediation report?',
        a: 'Yes, you receive an executive summary for leadership and an engineering-level remediation report with exact code patches and configuration changes.'
      }
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
    faqs: [
      {
        q: 'What does monthly website maintenance include?',
        a: 'Automated daily cloud backups, core and plugin security patches, uptime and SSL monitoring, monthly speed tuning, and allocated hours for content updates and bug fixes.'
      },
      {
        q: 'How quickly do you respond to urgent website issues?',
        a: 'For critical downtime or security emergencies, our dedicated engineering team responds within 1 to 2 hours.'
      }
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
    faqs: [
      {
        q: 'What deliverables do we receive from the UI/UX design phase?',
        a: 'You receive interactive Figma prototypes, complete component design systems with typography/colors, user flow diagrams, and developer-ready CSS/design tokens.'
      },
      {
        q: 'How do you validate the design before coding begins?',
        a: 'We conduct user journey mapping and click-through prototype testing to identify friction points before any engineering resources are spent.'
      }
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
    faqs: [
      {
        q: 'What is included in a complete brand identity package?',
        a: 'Primary and secondary logo variations, brand guideline book (colors, fonts, rules), social media asset templates, and investor pitch deck designs.'
      }
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
    faqs: [
      {
        q: 'Which social media platforms do you specialize in?',
        a: 'We specialize in LinkedIn, X (Twitter), and Instagram, focusing on B2B thought leadership, tech storytelling, and high-converting visual carousels.'
      }
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
    faqs: [
      {
        q: 'How do you measure digital marketing ROI?',
        a: 'We set up end-to-end conversion tracking in Google Analytics 4 (GA4) and Google Search Console, measuring exact cost per qualified lead (CPL) and conversion rates rather than vanity impressions.'
      }
    ],
    icon: 'TrendingUp'
  }
];
