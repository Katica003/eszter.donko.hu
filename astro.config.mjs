// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://eszter.donko.hu',
  // TODO: Maybe use `vite-tsconfig-paths` instead?
  vite: { resolve: { alias: { '@': '/src' } } },
})
