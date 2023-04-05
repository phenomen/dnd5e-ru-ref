import type { PageLoad } from './$types';
import type { DatasetsType } from '$lib/types';

export const prerender = true;

export const load = (async () => {
	const psData: DatasetsType = import.meta.glob('$lib/data/ps/*.json', {
		import: 'default',
		eager: true
	});

	return { psData };
}) satisfies PageLoad;
