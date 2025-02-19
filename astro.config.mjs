import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), sitemap(), react(), compress(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
    shikiConfig: {
      theme: 'ayu-dark',
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
