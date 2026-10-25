import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://scanlabprojects.co.uk",
  trailingSlash: "always",
  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: "/src",
      },
    },
  },
});
