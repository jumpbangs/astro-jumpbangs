import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkCollapse from 'remark-collapse';
import react from '@astrojs/react';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), react(), compress()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: 'Table of contents'
    }]],
    extendDefaultPlugins: true
  }
});