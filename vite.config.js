import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['svu', 'svu/*'],
	},
	ssr: {
		noExternal: ['svu', 'svu/*'],
	},
};

export default config;
