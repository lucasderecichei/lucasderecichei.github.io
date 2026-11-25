// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Replace `site` (and optionally `base`) with your GitHub Pages URL before deploying.
// - For https://<username>.github.io/ -> set site: 'https://<username>.github.io', leave base unset.
// - For https://<username>.github.io/<repo>/ -> set site: 'https://<username>.github.io', base: '/<repo>'.
export default defineConfig({
  site: 'https://username.github.io',
  // base: '/portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
