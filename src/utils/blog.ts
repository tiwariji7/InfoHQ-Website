import type { CollectionEntry } from 'astro:content';

export type BlogCategory = 'ai' | 'web' | 'automation' | 'cloud' | 'design';

export interface CategoryInfo {
  id: BlogCategory;
  name: string;
  tagline: string;
  title: string;
  description: string;
  icon: string;
}

export const BLOG_CATEGORIES: Record<BlogCategory, CategoryInfo> = {
  ai: {
    id: 'ai',
    name: 'AI & Software Engineering',
    tagline: 'Intelligent automation, autonomous LLM agents, and mission-critical business platforms.',
    title: 'AI & Software Engineering Articles | InfoHQ Blog',
    description: 'Practical writing on AI agents, RAG, LLM integrations and custom software, from the InfoHQ team.',
    icon: 'Brain'
  },
  web: {
    id: 'web',
    name: 'Web & Mobile App Development',
    tagline: 'Performant web platforms and native iOS/Android mobile applications built to launch.',
    title: 'Web & Mobile App Development Insights | InfoHQ Blog',
    description: 'Guides on websites and iOS and Android apps, including what they cost to build and how to plan them.',
    icon: 'Globe'
  },
  automation: {
    id: 'automation',
    name: 'Automation & System Integrations',
    tagline: 'Automate manual bottlenecks, sync your enterprise tools, and orchestrate data flows.',
    title: 'Automation & System Integrations Guides | InfoHQ Blog',
    description: 'Practical guides on workflow automation, system integrations and WhatsApp Business automation for businesses.',
    icon: 'Workflow'
  },
  cloud: {
    id: 'cloud',
    name: 'Cloud, DevOps & Security',
    tagline: 'Resilient cloud infrastructure, continuous deployment, and proactive security auditing.',
    title: 'Cloud, DevOps & Security Guides | InfoHQ Blog',
    description: 'Guides on cloud infrastructure, DevOps, cybersecurity and website maintenance, from the InfoHQ team.',
    icon: 'Cloud'
  },
  design: {
    id: 'design',
    name: 'Design & Digital Marketing',
    tagline: 'High-fidelity Figma prototypes, modern brand identity systems, and high-intent growth.',
    title: 'Design & Digital Marketing Articles | InfoHQ Blog',
    description: 'Guides on UI/UX design, brand identity, social media management and digital marketing.',
    icon: 'PenTool'
  }
};

export const CATEGORY_KEYS: BlogCategory[] = ['ai', 'web', 'automation', 'cloud', 'design'];

/**
 * Number of posts per paginated page across the blog.
 */
export const POSTS_PER_PAGE = 6;

/**
 * Computes build-time reading time: words / 200, minimum 1 min.
 */
export function calculateReadingTime(body: string = ''): string {
  const cleanText = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_~`\[\]()]/g, '');
  const words = cleanText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Formats date into exact "14 Oct 2026" style.
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  const day = d.getUTCDate();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Filter for published posts (drafts hidden in production).
 */
export function filterPublishedPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts.filter((post) => {
    if (import.meta.env.PROD && post.data.draft) return false;
    return true;
  });
}

/**
 * Sort posts by publication date descending.
 */
export function sortPostsByDateDesc(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return [...posts].sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
}

/**
 * Generates the canonical URL for a blog post using the required trailing-slash convention:
 * /blogs/[category]/[slug]/
 */
export function getPostUrl(category: string, id: string): string {
  return `/blogs/${category}/${id}/`;
}

/**
 * Extracts FAQ question/answer pairs from post body if an FAQ section is present.
 */
export function extractFaqsFromBody(body: string = ''): { q: string; a: string }[] {
  const faqHeaderIndex = body.indexOf('## Frequently Asked Questions');
  if (faqHeaderIndex === -1) return [];
  const faqSection = body.slice(faqHeaderIndex + '## Frequently Asked Questions'.length);
  const nextHeaderIndex = faqSection.search(/\n##\s/);
  const cleanSection = nextHeaderIndex !== -1 ? faqSection.slice(0, nextHeaderIndex) : faqSection;

  const faqs: { q: string; a: string }[] = [];
  const regex = /\*\*(.*?)\*\*\s*\n([\s\S]*?)(?=(\n\*\*|$))/g;
  let match;
  while ((match = regex.exec(cleanSection)) !== null) {
    const q = match[1].trim();
    const a = match[2].trim();
    if (q && a) {
      faqs.push({ q, a });
    }
  }
  return faqs;
}

