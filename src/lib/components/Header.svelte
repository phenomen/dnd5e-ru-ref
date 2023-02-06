<script>
	import { toggleAll } from '$lib/components/store';
	import { IconSun, IconMoon, IconExpand, IconCollapse } from '$lib/components/icons';

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

<div class="my-4 flex items-center space-x-4 dark:text-slate-100">
	<h1 class="flex-1 text-sm font-bold uppercase ">D&D 5e - Справочник на русском языке</h1>

	<button
		class="flex cursor-pointer"
		on:click={() => disclosureToggle()}
	>
		{#if $toggleAll === false}
			<IconExpand class="h-6 w-6" />
		{:else}
			<IconCollapse class="h-6 w-6" />
		{/if}
	</button>

	<button
		class="flex cursor-pointer"
		on:click={() => themeToggle()}
	>
		{#if theme === 'dark'}
			<IconSun class="h-6 w-6 text-yellow-400 " />
		{:else}
			<IconMoon class="h-6 w-6 text-slate-700" />
		{/if}
	</button>
</div>
