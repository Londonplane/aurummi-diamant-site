import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ratgeber = defineCollection({
  loader: glob({ base: './src/content/ratgeber', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    targetKeyword: z.string(),
    funnelStage: z.enum(['top', 'mid', 'bottom']),
    relatedArticles: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    schema: z.enum(['article', 'faq', 'howto']),
    noindex: z.boolean().default(false),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    steps: z
      .array(
        z.object({
          name: z.string(),
          text: z.string(),
        }),
      )
      .optional(),
  }),
});

const produkte = defineCollection({
  loader: glob({ base: './src/content/produkte', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    targetKeyword: z.string(),
    publishDate: z.coerce.date(),
    noindex: z.boolean().default(true),
  }),
});

export const collections = { ratgeber, produkte };
