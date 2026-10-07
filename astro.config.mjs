// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://infohq.in',
  devToolbar: {
    enabled: false
  },
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/blogs') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms-of-service')
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
