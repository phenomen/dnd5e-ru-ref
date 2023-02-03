<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createDisclosure } from 'svelte-headlessui';
	import { IconChevronRight } from '$lib/components/icons';

	export let categoryTitle: string;
	export let categorySubtitle: string;
	export let categoryColor: string;
	export let categoryDataset: string;

	const dispatch = createEventDispatcher();
	const category = createDisclosure({ label: categoryDataset, expanded: false });

	function sendItem(title: string, subtitle: string, description: string, reference: string) {
		dispatch('message', {
			title: title,
			subtitle: subtitle,
			description: description,
			reference: reference,
		});
	}
</script>

<div class="my-1 md:my-2">
	<button
		use:category.button
		class="{categoryColor} flex w-full items-center rounded p-2 text-left text-white md:p-4"
	>
		<div class="flex-1">
			<span class="mr-2 text-sm font-medium md:text-base">{categoryTitle}</span>
			{#if categorySubtitle}
				<span class="rounded bg-white bg-opacity-20 px-2 py-1 text-xs md:text-sm">{categorySubtitle}</span>
			{/if}
		</div>
		<IconChevronRight class="h-5 w-5 {$category.expanded ? 'rotate-90 transform' : ''}" />
	</button>

	{#await fetch(`https://5e.ruleplaying.com/data/${categoryDataset}.json`).then((res) => res.json()) then categoryItems}
		{#if $category.expanded}
			<div use:category.panel>
				{#each categoryItems as item}
					<h2 class="mt-4 font-semibold dark:text-slate-100">{item.title}</h2>
					<p class="pt-0 mt-0 dark:text-slate-100 text-sm md:text-base">{item.subtitle}</p>
					<div class="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 dark:text-slate-100">
						{#each item.rules as rule}
							<button
								class="flex rounded p-2 text-left shadow hover:cursor-pointer dark:bg-slate-800 hover:dark:bg-slate-700 bg-white hover:bg-slate-100 "
								on:click={() => sendItem(rule.title, rule.subtitle, rule.description, rule.reference)}
							>
								<div class="mr-2 flex-shrink-0 {categoryColor} rounded">
									<img
										src="/icons/{rule.icon}.svg"
										alt={rule.title}
										class="h-14 w-14 p-1 ring-2 ring-inset ring-white/50"
									/>
								</div>
								<div>
									<h3 class="font-medium">{rule.title}</h3>
									{#if rule.subtitle}
										<span class="mt-1 text-sm">
											{rule.subtitle}
										</span>
									{/if}
								</div>
							</button>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
	{/await}
</div>
