<script>
	import { IconSun, IconMoon } from '$lib/components/icons';

	let theme = 'light';

	function themeToggle() {
		if (theme != 'dark') {
			document.documentElement.classList.add('dark');
			theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			theme = 'light';
		}
	}
</script>

<div class="my-4 flex space-x-2 dark:text-slate-100">
	<h1 class="flex-1 text-sm font-bold uppercase ">D&D 5e - Справочник на русском языке</h1>
	<button
		class="flex cursor-pointer place-items-center"
		on:click={() => themeToggle()}
	>
		{#if theme === 'dark'}
			<span class="h-6 w-6 text-yellow-400"><IconSun /></span>
		{:else}
			<span class="h-6 w-6 text-slate-700"><IconMoon /></span>
		{/if}
	</button>
</div>
