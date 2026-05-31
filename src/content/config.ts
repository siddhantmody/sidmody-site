import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    year: z.string(),
    role: z.string().optional(),
    org: z.string().optional(),
    order: z.number().optional().default(99),
    draft: z.boolean().optional().default(false),
    category: z.enum(['robotics', 'ml']).optional().default('robotics'),
    // Up to 3 short tags shown on the projects index. Mix of domain
    // (e.g. "manipulation", "controls") and tech (e.g. "c++", "esp32").
    tags: z.array(z.string()).max(3).optional().default([]),
  }),
});

export const collections = { blog, projects };