const data = import.meta.glob('$lib/data/*.json', {
	import: 'default',
	eager: true,
});

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		data,
	};
}
