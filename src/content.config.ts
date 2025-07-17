import { defineCollection, z } from "astro:content";
// import { glob, file } from "astro/loaders";
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    subtitle: z.string().array().optional(),
    description: z.string().optional(),
    banner: z.string().optional(),
    tags: z.string().array().optional(),
    vimeo: z.string().optional(),
    background: z.string().optional(),
    date: z.string().optional(),
  }),
});

const exhibitions = defineCollection({
  // loader: glob({ pattern: ["*.md"], base: "src/content/exhibitions" }),
  schema: z.object({
    showing: z.enum(["PAST", "NOW", "SOON"]).optional(),
    url: z.string().optional(),
    active: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    date: z.string().optional(),
    // project: z.string().optional(),
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
