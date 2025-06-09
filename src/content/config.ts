import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    banner: z.string().optional(),
    tags: z.string().array().optional(),
    vimeo: z.string().optional(),
    background: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
