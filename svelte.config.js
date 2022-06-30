import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		vite: {
			optimizeDeps: {
				exclude: ['@babichjacob/svelte-localstorage']
			},
			ssr: {
				noExternal: ['@babichjacob/svelte-localstorage']
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
