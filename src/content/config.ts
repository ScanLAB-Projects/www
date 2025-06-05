import { defineCollection, z } from 'astro:content'

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
    hero: z.object({
      image: z.string(),
      vimeo: z.string(),
      link: z.object({
        label: z.string(),
        url: z.string()
      }).optional(),
    }).optional(),
  })
})

export const collections = {
  projects: projectsCollection
}