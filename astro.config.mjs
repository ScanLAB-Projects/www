import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Keep in sync with `noindex: true` in project frontmatter.
const NOINDEX_PROJECTS = ["buildings", "landscapes", "objects", "portraits"];

// https://astro.build/config
export default defineConfig({
  site: "https://scanlabprojects.co.uk",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !NOINDEX_PROJECTS.some((slug) => page.endsWith(`/projects/${slug}/`)),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: "/src",
      },
    },
  },
});
