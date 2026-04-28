// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL || 'https://aurummi-diamant-site.pages.dev';

export default defineConfig({
  site,
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
