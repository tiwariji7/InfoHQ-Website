export interface ServiceSchemaConfig {
  serviceType: string;
  category: string;
  description: string;
  subFeatures: string[];
  price?: string; // Omitted entirely if Custom Quote
  priceDescription: string;
}

export const serviceSchemasRecord: Record<string, ServiceSchemaConfig> = {
  'ai-intelligent-systems': {
    serviceType: 'AI & Intelligent Systems',
    category: 'AI & Software Engineering',
    description: 'Practical AI systems: autonomous AI agents & assistants, Retrieval-Augmented Generation (RAG) connecting your internal docs/wikis to LLMs, document & data intelligence for unstructured PDFs/invoices, and custom AI model/API integrations (OpenAI, Gemini, Claude).',
    subFeatures: [
      'Practical AI systems, autonomous AI agents & assistants',
      'Retrieval-Augmented Generation (RAG) connecting internal docs/wikis to LLMs',
      'Document & data intelligence (unstructured PDF/invoice extraction)',
      'Custom AI model/API integrations (OpenAI, Gemini, Claude)'
    ],
    price: '19999',
    priceDescription: 'Starting price for a one-time AI Solution project (₹19,999). Monthly retainer plans also available.'
  },
  'custom-software': {
    serviceType: 'Custom Software Development',
    category: 'AI & Software Engineering',
    description: 'Purpose-built business software: end-to-end multi-tenant SaaS platforms, robust REST/GraphQL APIs, background job architectures, and specialized internal admin portals/dashboards.',
    subFeatures: [
      'Purpose-built business software',
      'End-to-end multi-tenant SaaS platforms',
      'Robust REST/GraphQL APIs',
      'Background job architectures',
      'Specialized internal admin portals/dashboards'
    ],
    // price omitted for Custom Quote
    priceDescription: 'Custom quote based on project scope. SaaS Platform MVP available from ₹49,999 as a related one-time option.'
  },
  'web-development': {
    serviceType: 'Modern Web Development',
    category: 'Web & Mobile App Development',
    description: 'High-converting business websites, interactive client portals & dashboards, headless CMS platforms, sub-second page performance, and full SEO optimization.',
    subFeatures: [
      'High-converting business websites',
      'Interactive client portals & dashboards',
      'Headless CMS platforms',
      'Sub-second page performance + full SEO optimization'
    ],
    price: '14999',
    priceDescription: 'Starting price for a Business Website (₹14,999). E-Commerce Website available from ₹29,999 as a variant.'
  },
  'mobile-app-development': {
    serviceType: 'Mobile App Development (iOS & Android)',
    category: 'Web & Mobile App Development',
    description: 'Cross-platform and native mobile apps with offline-first local database caching, background sync, biometric security, real-time geolocation/push notifications, and end-to-end App Store & Google Play submission.',
    subFeatures: [
      'Cross-platform and native mobile apps',
      'Offline-first local database caching, background sync',
      'Biometric security, real-time geolocation/push notifications',
      'End-to-end App Store & Google Play submission'
    ],
    price: '39999',
    priceDescription: 'Starting price for a one-time Mobile Application project (₹39,999).'
  },
  'business-automation': {
    serviceType: 'Business Automation',
    category: 'Automation & System Integrations',
    description: 'Custom workflow automation, bi-directional tool/app synchronization (CRMs, payments, email, accounting), automated invoice/document processing pipelines, scheduled data synchronization, and automated lead routing.',
    subFeatures: [
      'Custom workflow automation',
      'Bi-directional tool/app synchronization (CRMs, payments, email, accounting)',
      'Automated invoice/document processing pipelines',
      'Scheduled data synchronization, automated lead routing'
    ],
    // price omitted for Custom Quote
    priceDescription: 'Custom quote for one-time automation workflows. Ongoing support available via Business Growth retainer at ₹24,999/month.'
  },
  'cloud-devops': {
    serviceType: 'Cloud & DevOps',
    category: 'Cloud, DevOps & Security',
    description: 'Cloud architecture (AWS, GCP, Cloudflare), zero-downtime automated CI/CD pipelines via GitHub Actions, Docker containerization, proactive health/uptime monitoring, and disaster recovery/backup automation.',
    subFeatures: [
      'Cloud architecture (AWS, GCP, Cloudflare)',
      'Zero-downtime automated CI/CD pipelines via GitHub Actions',
      'Docker containerization',
      'Proactive health/uptime monitoring, disaster recovery/backup automation'
    ],
    price: '49999',
    priceDescription: 'Retainer-based: Technology Partner plan ₹49,999/month (covers AWS/GCP, CI/CD); one-time setup: Custom Quote.'
  },
  'cybersecurity': {
    serviceType: 'Cybersecurity',
    category: 'Cloud, DevOps & Security',
    description: 'OWASP Top 10 application security audits, secure authentication systems (JWT, MFA, RBAC), server and firewall hardening, TLS encryption, and automated CI/CD dependency vulnerability scanning.',
    subFeatures: [
      'OWASP Top 10 application security audits',
      'Secure authentication systems (JWT, MFA, RBAC)',
      'Server and firewall hardening, TLS encryption',
      'Automated CI/CD dependency vulnerability scanning'
    ],
    price: '49999',
    priceDescription: 'Retainer-based: Technology Partner plan ₹49,999/month (security hardening); one-time audit: Custom Quote.'
  },
  'website-maintenance': {
    serviceType: 'Website Maintenance & Support',
    category: 'Cloud, DevOps & Security',
    description: 'Routine security and plugin updates, automated daily backups with 1-click restore, ongoing Core Web Vitals speed optimization, uptime checks, and fast turnaround bug/content fixes.',
    subFeatures: [
      'Routine security and plugin updates',
      'Automated daily backups with 1-click restore',
      'Ongoing Core Web Vitals speed optimization',
      'Uptime checks, fast turnaround bug/content fixes'
    ],
    price: '9999',
    priceDescription: 'Digital Starter retainer ₹9,999/month for routine maintenance and essential digital care.'
  },
  'ui-ux-design': {
    serviceType: 'UI/UX Design',
    category: 'Design & Digital Marketing',
    description: 'User journey mapping, wireframing, high-fidelity responsive UI design, interactive Figma prototypes, and scalable component design systems.',
    subFeatures: [
      'User journey mapping, wireframing',
      'High-fidelity responsive UI design',
      'Interactive Figma prototypes, scalable component design systems'
    ],
    // price omitted for Custom Quote
    priceDescription: 'Custom quote based on project scope and design deliverables.'
  },
  'brand-design': {
    serviceType: 'Graphic & Brand Design',
    category: 'Design & Digital Marketing',
    description: 'Modern logos and visual identities, complete brand style guidelines, investor pitch decks & presentation decks, and marketing/social asset kits.',
    subFeatures: [
      'Modern logos and visual identities',
      'Complete brand style guidelines',
      'Investor pitch decks & presentation decks',
      'Marketing/social asset kits'
    ],
    // price omitted for Custom Quote
    priceDescription: 'Custom quote based on brand identity and visual asset requirements.'
  },
  'social-media-management': {
    serviceType: 'Social Media Management',
    category: 'Design & Digital Marketing',
    description: 'Monthly content calendar planning, custom branded post/carousel design for LinkedIn, X/Twitter, and Instagram, technical copywriting & thought leadership, and performance analytics reporting.',
    subFeatures: [
      'Monthly content calendar planning',
      'Custom branded post/carousel design for LinkedIn, X/Twitter, Instagram',
      'Technical copywriting & thought leadership',
      'Performance analytics reporting'
    ],
    price: '24999',
    priceDescription: 'Business Growth retainer ₹24,999/month for dedicated organic social media management.'
  },
  'digital-marketing': {
    serviceType: 'Digital Marketing',
    category: 'Design & Digital Marketing',
    description: 'Search Engine Optimization (SEO), high-intent Google Search and LinkedIn paid ad campaigns, conversion funnel tracking with GA4, and landing page conversion optimization.',
    subFeatures: [
      'Search Engine Optimization (SEO)',
      'High-intent Google Search and LinkedIn paid ad campaigns',
      'Conversion funnel tracking with GA4',
      'Landing page conversion optimization'
    ],
    price: '24999',
    priceDescription: 'Business Growth retainer ₹24,999/month (or Custom Quote for one-off campaigns).'
  }
};
