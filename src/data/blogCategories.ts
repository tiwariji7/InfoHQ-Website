export interface BlogCategoryInfo {
  slug: 'ai' | 'web' | 'automation' | 'cloud' | 'design';
  label: string;
  title: string;
  description: string;
  heroHeading: string;
  heroSubtitle: string;
  emptyMessage: string;
}

export const BLOG_CATEGORIES_DATA: Record<string, BlogCategoryInfo> = {
  ai: {
    slug: 'ai',
    label: 'AI',
    title: 'AI Engineering & Intelligent Systems Articles | InfoHQ Blog',
    description: 'Deep-dive articles and production insights on AI architectures, RAG pipelines, autonomous agents, and LLMs from the InfoHQ engineering team in India.',
    heroHeading: 'AI & Intelligent Systems',
    heroSubtitle: 'Deep dives into RAG architectures, LLM orchestration, vector search, and production autonomous agents.',
    emptyMessage: 'More AI articles coming soon. Our senior engineers are writing production teardowns from real deployments.'
  },
  web: {
    slug: 'web',
    label: 'Web',
    title: 'Web & Mobile App Development Articles | InfoHQ Blog',
    description: 'Technical guides on high-performance web engineering, modern front-end architectures, sub-second latency, and scalable mobile apps by InfoHQ.',
    heroHeading: 'Web & Mobile Engineering',
    heroSubtitle: 'Modern front-end engineering, sub-second latency, offline-first mobile architecture, and scalable full-stack apps.',
    emptyMessage: 'More Web articles coming soon. Our engineers are preparing code-first guides and performance teardowns.'
  },
  automation: {
    slug: 'automation',
    label: 'Automation',
    title: 'Business Automation & Workflow Engineering | InfoHQ Blog',
    description: 'Practical teardowns on enterprise workflow automation, API orchestration, event-driven pipelines, and operational efficiency from InfoHQ.',
    heroHeading: 'Business Automation',
    heroSubtitle: 'Event-driven workflow engines, custom API connectors, ERP synchronization, and enterprise task automation.',
    emptyMessage: 'More Automation articles coming soon. Case studies and integration blueprints will be published shortly.'
  },
  cloud: {
    slug: 'cloud',
    label: 'Cloud',
    title: 'Cloud Architecture & DevOps Insights | InfoHQ Blog',
    description: 'Expert articles on resilient cloud infrastructure, zero-downtime CI/CD pipelines, containerization, and Cloudflare serverless engineering by InfoHQ.',
    heroHeading: 'Cloud & DevOps Architecture',
    heroSubtitle: 'Zero-downtime deployment pipelines, container orchestration, edge computing, and Cloudflare serverless workflows.',
    emptyMessage: 'More Cloud articles coming soon. Architectural teardowns and cloud optimization guides are currently in review.'
  },
  design: {
    slug: 'design',
    label: 'Design',
    title: 'UI/UX & Product Design Architecture | InfoHQ Blog',
    description: 'Strategic insights on design systems, user experience architecture, conversion-focused interfaces, and digital brand design from InfoHQ.',
    heroHeading: 'UI/UX & Product Design',
    heroSubtitle: 'Design systems, conversion-driven UX architecture, interactive micro-animations, and responsive product design.',
    emptyMessage: 'More Design articles coming soon. Deep dives into design tokens, accessibility, and UI engineering are on the way.'
  }
};

export const BLOG_CATEGORY_LIST = [
  BLOG_CATEGORIES_DATA.ai,
  BLOG_CATEGORIES_DATA.web,
  BLOG_CATEGORIES_DATA.automation,
  BLOG_CATEGORIES_DATA.cloud,
  BLOG_CATEGORIES_DATA.design
];
