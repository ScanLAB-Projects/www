import { defineCollection, z } from "astro:content";

const projects = defineCollection({
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

const exhibitions = defineCollection({
  schema: z.object({
    showing: z.enum(["PAST", "NOW", "SOON"]).optional(),
    slug: z.string().optional(),
    active: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    project: z.string().optional(),
    tickets: z.string().optional(),
    title: z.string().optional(),
    client: z.string().optional(),
    location: z.string().optional(),
    venue: z.string().optional(),
    // venue: z.string().array().optional(),
    description: z.string().optional(),
    cite: z.string().optional(),
  }),
});

export const collections = {
  projects,
  exhibitions,
};
