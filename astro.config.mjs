import path, { dirname } from 'path';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import myRehypePlugin from './my-rehype-plugin';
import SITE from './src/config/setting';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Full Astro Configuration API Documentation:

import { h } from 'hastscript';
import { toString } from 'hast-util-to-string';
import { escape } from 'html-escaper';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
// import { tokens, foregroundPrimary, backgroundPrimary } from './syntax-highlighting-theme';
import mdx from "@astrojs/mdx";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename); // https://docs.astro.build/reference/configuration-reference


const AnchorLinkIcon = h('svg', {
  width: 16,
  height: 16,
  version: 1.1,
  viewBox: '0 0 16 16',
  xlmns: 'http://www.w3.org/2000/svg'
}, h('path', {
  fillRule: 'evenodd',
  fill: 'currentcolor',
  d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
}));

const createSROnlyLabel = text => {
  const node = h('span.sr-only', `Section titled ${escape(text)}`);
  node.properties['is:raw'] = true;
  return node;
};


// https://astro.build/config
export default defineConfig({
  // root: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // outDir: './dist',       // When running `astro build`, path to final static output
  // publicDir: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: SITE.url,
  server: {// port: 3000,
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false}}), 
    sitemap(), 
    preact(), 
    mdx({
      rehypePlugins: [
        rehypeSlug, 
        [rehypeAutolinkHeadings, {
					properties: {
						class: 'anchor-link',
					},
					behavior: 'after',
					group: ({ tagName }) =>
						h(`div.heading-wrapper.level-${tagName}`, {
							tabIndex: -1,
						}),
					content: (heading) => [
						h(
							`span.anchor-icon`,
							{
								ariaHidden: 'true',
							},
							AnchorLinkIcon
						),
						createSROnlyLabel(toString(heading)),
					],
        }]
      ],
      extendPlugins: 'astroDefaults'
    })
  ],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@components': path.resolve(__dirname, './src/components')
      }
    }
  },
  optimizeDeps: {
    allowNodeBuiltins: true
  }
});
