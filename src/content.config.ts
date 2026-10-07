import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const BLOG_CATEGORIES = ['ai', 'web', 'automation', 'cloud', 'design'] as const;
export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number];

export const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(BLOG_CATEGORIES),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.array(z.string()).default([]),
    author: z.string().default('InfoHQ Team'),
    heroImage: z.union([
      z.string(),
      z.object({
        src: z.string(),
        alt: z.string(),
      }),
    ]).optional(),
    heroImageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
