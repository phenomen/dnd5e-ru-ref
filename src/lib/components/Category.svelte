<script>
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import { IconChevronRight, IconCircleLoading } from '$lib/components/icons';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let categoryTitle = '';
	export let categorySubtitle = '';
	export let categoryColor = 'gblue';
	export let categoryDataset;

	function sendItem(title, subtitle, description, reference) {
		dispatch('message', {
			title: title,
			subtitle: subtitle,
			description: description,
			reference: reference,
		});
	}

	const sortBy = (key) => {
		return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
	};
</script>

{#await fetch(`data/${categoryDataset}.json`).then((res) => res.json())}
	<div class="my-2 w-full rounded bg-slate-100 dark:bg-slate-800 p-4 text-left font-medium text-slate-400 flex items-center">
		<IconCircleLoading /><span> Загрузка...</span>
	</div>
{:then data}
	<Disclosure class="my-2">
		<DisclosureButton class="w-full rounded {categoryColor} p-4 text-white flex items-center text-left" let:open>
			<div class="flex flex-1 items-center ">
				<h2 class="font-medium mr-2 small-caps flex-0">{categoryTitle}</h2>

				{#if categorySubtitle.length > 0}
					<span class="px-2 py-1 rounded text-xs md:text-sm bg-white bg-opacity-20 text-center">{categorySubtitle} </span>
				{/if}
			</div>
			<div class:open class="flex-0 h-5 w-5 flex-end">
				<IconChevronRight />
			</div>
		</DisclosureButton>

		<DisclosurePanel>
			{#each data as block}
				<h2 class="mt-4 font-semibold dark:text-slate-100">{block.title}</h2>
				<p class="pt-0 mt-0 dark:text-slate-100">{block.subtitle}</p>
				<div class="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 dark:text-slate-100">
					{#each block.rules as item}
						<button
							class="flex rounded p-2 text-left shadow hover:cursor-pointer dark:bg-slate-800 hover:dark:bg-slate-700 bg-white hover:bg-gray-100 "
							on:click={() => sendItem(item.title, item.subtitle, item.description, item.reference)}
						>
							<div class="mr-2 flex-shrink-0">
								<img src="icons/{item.icon}.svg" alt={item.title} class="h-14 w-14 p-1 {categoryColor} rounded" />
							</div>
							<div>
								<h3 class="font-medium">{item.title}</h3>
								{#if item.subtitle}
									<span class="mt-1 text-sm">
										{item.subtitle}
									</span>
								{/if}
							</div>
						</button>
					{/each}
				</div>
			{/each}
		</DisclosurePanel>
	</Disclosure>
{/await}
