<script lang="ts">
	import type { CategoryType, DatasetType } from '$lib/types';

	import { toggleAll } from '$lib/components/store';
	import { createEventDispatcher } from 'svelte';
	import { createDisclosure } from 'svelte-headlessui';
	import RuleIcon from '$lib/components/RuleIcon.svelte';

	import LucideChevronRight from '~icons/lucide/chevron-right';

	export let category: CategoryType;
	export let dataset: DatasetType[];

	const dispatch = createEventDispatcher();
	const categoryDisclosure = createDisclosure({ label: category.title, expanded: false });

	function sendItem(title: string, subtitle: string, description: string, reference: string) {
		dispatch('message', {
			title: title,
			subtitle: subtitle,
			description: description,
			reference: reference
		});
	}

	$: $toggleAll ? categoryDisclosure.open() : categoryDisclosure.close();
</script>

<div class="my-1 md:my-2">
	<button
		use:categoryDisclosure.button
		class="{category.color} flex w-full items-center rounded border-2 p-2 text-left dark:bg-slate-900 md:p-4"
	>
		<div class="flex-1 items-center text-slate-900 dark:text-slate-100">
			<span class="mr-2 text-sm font-medium md:text-base">{category.title}</span>
			{#if category.subtitle}
				<span class="border-l-2 px-2 text-xs md:text-sm">{category.subtitle}</span>
			{/if}
		</div>
		<LucideChevronRight
			class="h-5 w-5 dark:text-slate-100 {$categoryDisclosure.expanded
				? 'rotate-90 transform'
				: ''}"
		/>
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
							class="flex rounded bg-white fill-white p-2 text-left shadow hover:cursor-pointer hover:bg-slate-100 dark:bg-slate-800 hover:dark:bg-slate-700"
							on:click={() => sendItem(rule.title, rule.subtitle, rule.description, rule.reference)}
						>
							<div class="mr-2 flex-shrink-0 {category.color} rounded border-2">
								<RuleIcon icon={rule.icon} />
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
