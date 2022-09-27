import path, { dirname } from 'path'
import SITE from './src/config/setting'
import { fileURLToPath } from 'url'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
// import tailwind from '@astrojs/tailwind' // Full Astro Configuration API Documentation:
import sitemap from '@astrojs/sitemap'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  // root: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // outDir: './dist',       // When running `astro build`, path to final static output
  // publicDir: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: SITE.url,
  server: {
    // port: 3000,
  },
  integrations: [
    react(),
    // tailwind({
    //   config: {
    //     applyBaseStyles: false
    //   }
    // }),
    sitemap()
  ],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@components': path.resolve(__dirname, './src/components')
      }
    }
  },
  optimizeDeps: {
    allowNodeBuiltins: true
  }
})
