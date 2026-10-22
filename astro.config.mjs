import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stiller-reflux.de',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
