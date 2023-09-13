import { z, defineCollection } from 'astro:content';
const post = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string().optional(),
    pubDate: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    heroImg: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  post,
};
