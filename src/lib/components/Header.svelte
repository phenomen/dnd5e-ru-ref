<script>
	import { themetoggle } from 'svu/action';
	import { theme } from 'svu/client';
	import { IconSun, IconMoon } from '$lib/components/icons';
</script>

<div class="my-4 flex space-x-2 dark:text-slate-100">
	<h1 class="flex-1 text-sm font-bold uppercase ">D&D 5e - Справочник на русском языке</h1>
	<div class="flex justify-center">
		<span use:themetoggle={['light', 'dark']} class="flex cursor-pointer place-items-center">
			{#if $theme === 'dark'}
				<span class="h-6 w-6 text-yellow-400"><IconSun /></span>
			{:else}
				<span class="h-6 w-6 text-slate-700"><IconMoon /></span>
			{/if}
		</span>
	</div>
</div>
