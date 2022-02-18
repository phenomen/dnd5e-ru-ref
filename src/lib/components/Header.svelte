<script>
	import { localStorageStore } from '@babichjacob/svelte-localstorage/svelte-kit';
	import { onMount } from 'svelte';

	import { MoonIcon } from '@rgossiaux/svelte-heroicons/solid';

	const theme = localStorageStore('theme', 'light');

	function switchTheme() {
		if ($theme == 'light') {
			$theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			$theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	}

	onMount(async () => {
		if ($theme == 'light') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}
	});
</script>

<div class="my-4 flex space-x-2 dark:text-slate-100">
	<h1 class="flex-1 text-sm font-bold uppercase ">D&D 5e - Справочник на русском языке</h1>
	<MoonIcon class="h-6 w-6 hover:cursor-pointer" on:click={switchTheme} />
</div>
