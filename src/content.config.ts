import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const post = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
  schema: z.object({
    author: z.string().optional(),
    pubDate: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    heroImg: z.string().optional(),
    description: z.string().optional(),
    postImages: z.string().optional(),
  }),
});

export const collections = {
  post,
};
