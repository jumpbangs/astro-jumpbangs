import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), react(), compress()],
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
    extendDefaultPlugins: true,
  },
});
