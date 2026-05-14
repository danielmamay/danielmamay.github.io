import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://danielmamay.github.io',
  integrations: [tailwind()],
});
