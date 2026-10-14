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
    name: 'AI',
    tagline: 'Architectures, RAG systems, and practical LLM engineering for production applications.',
    title: 'AI & Machine Learning Blog — Technical Notes & Guides | InfoHQ',
    description: 'In-depth technical guides on RAG pipelines, LLM integration, vector databases, and real-world AI engineering from the InfoHQ team.',
    icon: 'Brain'
  },
  web: {
    id: 'web',
    name: 'Web',
    tagline: 'Modern frontend, performance optimization, and scalable web architecture.',
    title: 'Web Engineering Blog — Architecture, Performance & Standards | InfoHQ',
    description: 'Practical guides on web performance, zero layout shift, modern frameworks, and responsive frontend architecture.',
    icon: 'Globe'
  },
  automation: {
    id: 'automation',
    name: 'Automation',
    tagline: 'Workflow automation, lead management, and connecting business tools.',
    title: 'Business Automation Blog — Workflows, Integrations & Systems | InfoHQ',
    description: 'Practical guides on automating business workflows, lead routing, n8n, API integrations, and internal tooling.',
    icon: 'Workflow'
  },
  cloud: {
    id: 'cloud',
    name: 'Cloud',
    tagline: 'Cloud infrastructure, serverless deployments, CI/CD, and DevOps practices.',
    title: 'Cloud & DevOps Blog — Infrastructure, CI/CD & Deployments | InfoHQ',
    description: 'Technical notes on Cloudflare edge delivery, AWS, containerization, zero-downtime deployments, and cloud architecture.',
    icon: 'Cloud'
  },
  design: {
    id: 'design',
    name: 'Design',
    tagline: 'Product design, UI/UX systems, and practical usability for digital products.',
    title: 'Product Design & UI/UX Blog — Design Systems & Usability | InfoHQ',
    description: 'Insights on design systems, accessible UI engineering, user research, and crafting functional product interfaces.',
    icon: 'PenTool'
  }
};

export const CATEGORY_KEYS: BlogCategory[] = ['ai', 'web', 'automation', 'cloud', 'design'];

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
