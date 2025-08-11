// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const site = process.env.ASTRO_SITE ?? "https://oliverpooples.vercel.app";

// https://astro.build/config
export default defineConfig({
  site: site,
  vite: {
    plugins: [tailwindcss()],
  },
});
