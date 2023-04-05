import { sveltekit } from '@sveltejs/kit/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			scale: 1.5
		}),
		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: 'Icon',
					extension: 'svelte',
					enabledCollections: ['game-icons']
				})
			]
		})
	]
};

export default config;
