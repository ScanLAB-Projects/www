import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Keep in sync with `noindex: true` in project frontmatter.
const NOINDEX_PROJECTS = [
  "buildings",
  "landscapes",
  "objects",
  "portraits",
  "second",
  "third",
];

// https://astro.build/config
export default defineConfig({
  site: "https://scanlabprojects.co.uk",
  trailingSlash: "always",
  redirects: {
    "/work": "/projects/",
    "/work/framerate": "/projects/pulse-of-the-earth/",
    "/work/desert-pulse": "/projects/desert-pulse/",
    "/work/rhythms-around-us": "/projects/rhythms-around-us/",
    "/work/italys-invisible-cities": "/projects/italys-invisible-cities/",
    "/work/ancient-invisible-cities": "/projects/ancient-invisible-cities/",
    "/work/romes-invisible-city": "/projects/romes-invisible-city/",
    "/work/crime-scene": "/projects/crime-scene/",
    "/work/mary-rose": "/projects/mary-rose/",
    "/work/limbo": "/projects/guardian-limbo/",
    "/work/displaced-witness": "/projects/displaced-witness/",
    "/work/phantom": "/projects/phantom/",
    "/work/dreamlife-of-driverless-cars":
      "/projects/dreamlife-of-driverless-cars/",
  },
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
