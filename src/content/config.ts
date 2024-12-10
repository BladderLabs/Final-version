import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    category: z.enum(['learn', 'books']),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Muhammad Umar Naveed'),
    readingTime: z.number(),
    bookAuthor: z.string().optional(),
    rating: z.number().optional(),
    recommended: z.boolean().optional(),
    affiliateLinks: z.object({
      amazon: z.string().optional(),
      bookshop: z.string().optional(),
    }).optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

export const collections = {
  posts,
};