// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import fs from 'node:fs';
import path from 'node:path';

function getEmptyBlogCategories() {
  const contentDir = path.resolve('src/content/blog');
  const allCategories = ['ai', 'web', 'automation', 'cloud', 'design'];
  if (!fs.existsSync(contentDir)) return allCategories;

  const files = fs.readdirSync(contentDir);
  const activeCategories = new Set();

  for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const draftMatch = content.match(/^draft:\s*(true|false)/m);
    if (draftMatch && draftMatch[1] === 'true') continue;
    const catMatch = content.match(/^category:\s*["']?(.*?)["']?$/m);
    if (catMatch) activeCategories.add(catMatch[1].trim());
  }

  return allCategories.filter((cat) => !activeCategories.has(cat));
}

const emptyCategories = getEmptyBlogCategories();
export default defineConfig({
  site: 'https://infohq.in',
  trailingSlash: 'always',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  output: 'static',
  // @ts-ignore
  session: false,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        if (
          page.includes('/api/') ||
          page.includes('/og/') ||
          page.includes('/privacy-policy') ||
          page.includes('/terms-of-service')
        ) {
          return false;
        }
        for (const emptyCat of emptyCategories) {
          if (page.includes(`/blogs/${emptyCat}/`)) {
            return false;
          }
        }
        return true;
      }
    })
  ],
  vite: {
    optimizeDeps: {
      exclude: ['lucide-astro', 'lenis']
    },
    server: {
      allowedHosts: [
        'monkhood-nag-landfall.ngrok-free.dev',
        '.ngrok-free.dev',
        '.ngrok-free.app',
        '.ngrok.io'
      ]
    }
  }
});
