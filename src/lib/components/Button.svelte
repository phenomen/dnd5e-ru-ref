<script>
	export let style = 'primary';
	export let rounded = false;
</script>

<button
	type="button"
	class="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
	class:primary={style === 'primary'}
	class:secondary={style === 'secondary'}
	class:rounded
>
	<slot />
</button>

<style>
	.primary {
		@apply bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500;
	}
	.secondary {
		@apply border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500;
	}
	.rounded {
		@apply rounded-full;
	}
</style>
