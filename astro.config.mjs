import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

import { remarkReadingTime } from './remark-reading-time.mjs';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.amitchongbang.com.np/',
  integrations: [
    sitemap(),
    react(),
    mdx(),
    sitemap({ changefreq: 'weekly', priority: 0.7 }),
    playformCompress(),
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
  adapter: vercel(),
});