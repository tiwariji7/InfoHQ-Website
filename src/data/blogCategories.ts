export interface BlogCategoryInfo {
  slug: 'ai' | 'web' | 'automation' | 'cloud' | 'startups';
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
    label: 'AI & Software Engineering',
    title: 'AI & Software Engineering Articles | InfoHQ Blog',
    description: 'Practical writing on AI agents, RAG, LLM integrations and custom software, from the InfoHQ team.',
    heroHeading: 'AI & Software Engineering',
    heroSubtitle: 'Intelligent automation, autonomous LLM agents, and mission-critical business platforms.',
    emptyMessage: 'More AI & Software Engineering articles coming soon. Our senior engineers are writing production teardowns from real deployments.'
  },
  web: {
    slug: 'web',
    label: 'Web & Mobile App Development',
    title: 'Web & Mobile App Development Insights | InfoHQ Blog',
    description: 'Guides on websites and iOS and Android apps, including what they cost to build and how to plan them.',
    heroHeading: 'Web & Mobile App Development',
    heroSubtitle: 'Performant web platforms and native iOS/Android mobile applications built to launch.',
    emptyMessage: 'More Web & Mobile App Development articles coming soon. Our engineers are preparing code-first guides and performance teardowns.'
  },
  automation: {
    slug: 'automation',
    label: 'Automation & System Integrations',
    title: 'Automation & System Integrations Guides | InfoHQ Blog',
    description: 'Practical guides on workflow automation, system integrations and WhatsApp Business automation for businesses.',
    heroHeading: 'Automation & System Integrations',
    heroSubtitle: 'Automate manual bottlenecks, sync your enterprise tools, and orchestrate data flows.',
    emptyMessage: 'More Automation & System Integrations articles coming soon. Case studies and integration blueprints will be published shortly.'
  },
  cloud: {
    slug: 'cloud',
    label: 'Cloud, DevOps & Security',
    title: 'Cloud, DevOps & Security Guides | InfoHQ Blog',
    description: 'Guides on cloud infrastructure, DevOps, cybersecurity and website maintenance, from the InfoHQ team.',
    heroHeading: 'Cloud, DevOps & Security',
    heroSubtitle: 'Resilient cloud infrastructure, continuous deployment, and proactive security auditing.',
    emptyMessage: 'More Cloud, DevOps & Security articles coming soon. Architectural teardowns and cloud optimization guides are currently in review.'
  },
  startups: {
    slug: 'startups',
    label: 'Startups & Business Growth',
    title: 'Startups & Business Growth Articles | InfoHQ Blog',
    description: 'Practical guides on getting clients, startup customer acquisition, founder-led sales, and business growth.',
    heroHeading: 'Startups & Business Growth',
    heroSubtitle: 'Practical customer acquisition, founder-led sales, unit economics, and scaling playbooks.',
    emptyMessage: 'More Startups & Business Growth articles coming soon. Practical playbooks from real customer acquisitions are being published.'
  }
};

export const BLOG_CATEGORY_LIST = [
  BLOG_CATEGORIES_DATA.ai,
  BLOG_CATEGORIES_DATA.web,
  BLOG_CATEGORIES_DATA.automation,
  BLOG_CATEGORIES_DATA.cloud,
  BLOG_CATEGORIES_DATA.startups
];
