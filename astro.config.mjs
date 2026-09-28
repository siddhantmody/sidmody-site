import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// When you get sidmody.tech (or similar), update `site` to that URL.
// If deploying to https://<username>.github.io/<repo>/, set `base` to '/<repo>/'.
// If using a custom domain on GitHub Pages, leave `base` as '/'.

export default defineConfig({
  site: 'https://sidmody.com',
  base: '/',

  build: {
    format: 'directory',
  },

  output: "hybrid",
  adapter: cloudflare(),
  integrations: [sitemap()]
});