export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
	const data = import.meta.glob('$lib/data/*.json', {
		import: 'default',
		eager: true
	});

	return {
		data
	}
}
