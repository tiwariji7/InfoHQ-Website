// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

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
