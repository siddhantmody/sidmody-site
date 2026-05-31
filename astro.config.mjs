import { defineConfig } from 'astro/config';

// When you get sidmody.tech (or similar), update `site` to that URL.
// If deploying to https://<username>.github.io/<repo>/, set `base` to '/<repo>/'.
// If using a custom domain on GitHub Pages, leave `base` as '/'.

export default defineConfig({
  site: 'https://sidmody.com',
  base: '/',
  build: {
    format: 'directory',
  },
});
