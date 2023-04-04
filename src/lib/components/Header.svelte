<script>
	import { toggleAll } from '$lib/components/store';

	import LucideSun from '~icons/lucide/sun';
	import LucideMoon from '~icons/lucide/moon';
	import LucideChevronsUpDown from '~icons/lucide/chevrons-up-down';
	import LucideChevronsDownUp from '~icons/lucide/chevrons-down-up';

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

	function disclosureToggle() {
		$toggleAll === true ? ($toggleAll = false) : ($toggleAll = true);
	}
</script>

<div class="my-4 flex items-center space-x-2 dark:text-slate-100 sm:space-x-4">
	<h1 class="flex-1 text-sm font-bold uppercase">D&D 5e - Справочник на русском языке</h1>

	<button class="flex cursor-pointer" on:click={() => disclosureToggle()}>
		{#if $toggleAll === false}
			<LucideChevronsUpDown class="h-6 w-6" />
		{:else}
			<LucideChevronsDownUp class="h-6 w-6" />
		{/if}
	</button>

	<button class="flex cursor-pointer" on:click={() => themeToggle()}>
		{#if theme === 'dark'}
			<LucideSun class="h-6 w-6 text-yellow-400 " />
		{:else}
			<LucideMoon class="h-6 w-6 text-slate-700" />
		{/if}
	</button>
</div>
