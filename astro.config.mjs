import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://Sansanto2000.github.io',
  base: '/Sansanto2000.github.io/',
  integrations: [react()],
})
