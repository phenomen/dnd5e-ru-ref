<script lang="ts">
	import { toggleAll } from '$lib/components/store';
	import { createEventDispatcher } from 'svelte';
	import { createDisclosure } from 'svelte-headlessui';

	import LucideChevronRight from '~icons/lucide/chevron-right';

	type Category = {
		dataset: string;
		title: string;
		subtitle: string;
		color: string;
	};

	export let category: Category;
	export let dataset;

	const dispatch = createEventDispatcher();
	const categoryDisclosure = createDisclosure({ label: category.title, expanded: false });

	function sendItem(title: string, subtitle: string, description: string, reference: string) {
		dispatch('message', {
			title: title,
			subtitle: subtitle,
			description: description,
			reference: reference,
		});
	}

	$: $toggleAll ? categoryDisclosure.open() : categoryDisclosure.close();
</script>

<div class="my-1 md:my-2">
	<button
		use:categoryDisclosure.button
		class="{category.color} flex w-full items-center rounded p-2 text-left text-white md:p-4"
	>
		<div class="flex-1">
			<span class="mr-2 text-sm font-medium md:text-base">{category.title}</span>
			{#if category.subtitle}
				<span class="rounded bg-white bg-opacity-20 px-2 py-1 text-xs md:text-sm">{category.subtitle}</span>
			{/if}
		</div>
		<LucideChevronRight class="h-5 w-5 {$categoryDisclosure.expanded ? 'rotate-90 transform' : ''}" />
	</button>

	{#if $categoryDisclosure.expanded}
		<div use:categoryDisclosure.panel>
			{#each dataset as item}
				<h2 class="mt-4 text-lg font-semibold dark:text-slate-100">
					{item.title}
				</h2>
				<p class="mt-0 max-w-4xl pt-0 text-sm dark:text-slate-100 md:text-base">
					{item.subtitle}
				</p>
				<div class="grid grid-cols-1 gap-2 dark:text-slate-100 md:grid-cols-2 lg:grid-cols-3">
					{#each item.rules as rule}
						<button
							class="flex items-center rounded bg-white p-2 text-left shadow hover:cursor-pointer hover:bg-slate-100 dark:bg-slate-800 hover:dark:bg-slate-700"
							on:click={() => sendItem(rule.title, rule.subtitle, rule.description, rule.reference)}
						>
							<div class="mr-2 flex-shrink-0 {category.color} rounded">
								<img
									src="/icons/{rule.icon}.svg"
									alt={rule.title}
									class="h-14 w-14 rounded p-1 ring-2 ring-inset ring-white/50"
								/>
							</div>
							<div>
								<h3 class="font-medium">{rule.title}</h3>
								{#if rule.subtitle}
									<p class="mt-1 text-sm leading-5">
										{rule.subtitle}
									</p>
								{/if}
							</div>
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
