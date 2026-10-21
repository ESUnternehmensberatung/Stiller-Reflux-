import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: echte Domain eintragen, sobald sie registriert ist.
export default defineConfig({
  site: 'https://www.halsklar.de',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
