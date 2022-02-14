<script>
	import { Disclosure } from '@rgossiaux/svelte-headlessui';
	import { DisclosureButton } from '@rgossiaux/svelte-headlessui';
	import { DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let categoryTitle = '';
	export let categorySubtitle = '';
	export let color = 'gblue';
	export let dataset;

	function sendItem(title, subtitle, description, reference) {
		dispatch('message', {
			title: title,
			subtitle: subtitle,
			description: description,
			reference: reference
		});
	}

	const sortBy = (key) => {
		return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
	};
</script>

{#await fetch(`data/${dataset}.json`).then((res) => res.json())}
	<div
		class="my-2 w-full rounded bg-gray-100 p-4 text-left font-medium text-gray-400 flex items-center"
	>
		<svg
			class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg><span> Загрузка...</span>
	</div>
{:then data}
	<Disclosure class="my-2">
		<DisclosureButton
			class="w-full rounded {color} p-4 text-white flex items-center text-left"
			let:open
		>
			<h2 class="font-medium mr-2 small-caps">{categoryTitle}</h2>

			<span class="px-2 rounded text-xs md:text-sm bg-white bg-opacity-20 text-center"
				>{categorySubtitle}</span
			>
		</DisclosureButton>

		<DisclosurePanel>
			{#each data as block}
				<h3 class="mt-4 font-semibold">{block.title}</h3>
				<p class="pt-0 mt-0">{block.subtitle}</p>
				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
					{#each block.rules.sort(sortBy('title')) as item}
						<div
							class="flex rounded p-2 shadow hover:cursor-pointer hover:shadow-lg"
							on:click={sendItem(item.title, item.subtitle, item.description, item.reference)}
						>
							<div class="mr-2 flex-shrink-0">
								<img
									src="icons/{item.icon}.svg"
									alt={item.title}
									class="h-14 w-14 rounded {color} p-1"
								/>
							</div>
							<div>
								<h4 class="font-medium">{item.title}</h4>
								<span class="mt-1 text-sm">{item.subtitle}</span>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</DisclosurePanel>
	</Disclosure>
{/await}
