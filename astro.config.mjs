import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel"; // Import the 'vercel' module

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  adapter: vercel(),
  output: "hybrid",
});
