// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aurummi-diamant.de',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/labordiamant-ring/') &&
        !page.includes('/labordiamant-verlobungsring/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
