import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.amitchongbang.com.np/',
  integrations: [
    sitemap(),
    react(),
    compress(),
    mdx(),
    sitemap({ changefreq: 'weekly', priority: 0.7 }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
      remarkReadingTime,
    ],
    shikiConfig: {
      theme: 'ayu-dark',
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});