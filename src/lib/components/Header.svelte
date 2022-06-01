<script>
	import { localStorageStore } from '@babichjacob/svelte-localstorage/svelte-kit';
	import { onMount } from 'svelte';
	import { MoonIcon, SunIcon } from '@rgossiaux/svelte-heroicons/solid';

	const dark = localStorageStore('dark', false);

	function switchTheme() {
		if (!$dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		$dark = !$dark;
	}

	onMount(async () => {
		if ($dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div class="my-4 flex space-x-2 dark:text-slate-100">
	<h1 class="flex-1 text-sm font-bold uppercase ">D&D 5e - Справочник на русском языке</h1>
	<div class="cursor-pointer" on:click={() => switchTheme()}>
		{#if $dark}
			<SunIcon class="h-6 w-6" />
		{:else}
			<MoonIcon class="h-6 w-6" />
		{/if}
	</div>
</div>
