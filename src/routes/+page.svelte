<script lang="ts">
	import type { CategoryType, DatasetsType } from '$lib/types';
	import type { PageData } from './$types';

	import Transition from 'svelte-transition';
	import { createDialog } from 'svelte-headlessui';
	import Category from '$lib/components/Category.svelte';
	import categoriesData from '$lib/data/categories.json';

	export let data: PageData;

	const datasets: DatasetsType = data.psData;

	const categories: CategoryType[] = categoriesData;

	const dialog = createDialog({ label: '', expanded: false });

	let dialogTitle: string = '';
	let dialogSubtitle: string = '';
	let dialogDescription: string = '';
	let dialogReference: string = '';

	function showModal(event: CustomEvent<any>) {
		dialog.open();
		dialogTitle = event.detail.title;
		dialogSubtitle = event.detail.subtitle;
		dialogDescription = event.detail.description;
		dialogReference = event.detail.reference;
	}
</script>

{#each categories as category}
	<Category {category} dataset={datasets[category.dataset]} on:message={showModal} />
{/each}

<div class="relative z-10">
	<Transition show={$dialog.expanded}>
		<div
			class="fixed inset-0 bg-black bg-opacity-80"
			on:click={dialog.close}
			on:keypress={dialog.close}
		/>

		<div class="fixed inset-0 overflow-y-auto">
			<div class="flex min-h-full items-center justify-center p-2 text-center">
				<Transition enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100">
					<div
						class="w-full max-w-2xl transform overflow-hidden rounded-md bg-white p-4 text-left align-middle shadow-xl transition-all dark:bg-stone-800"
						use:dialog.modal
					>
						<div class="flex flex-col md:flex-row md:space-x-2">
							<input hidden />
							<h2 class="text-lg font-medium dark:text-stone-100">
								{dialogTitle}
							</h2>
							<span
								class="inline-flex items-center rounded bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-700 dark:text-stone-100"
								>{dialogReference}</span
							>
						</div>

						{#if dialogSubtitle}
							<span class="my-2 text-sm text-stone-600 dark:text-stone-300">{dialogSubtitle}</span>
						{/if}

						<div class="mt-4 text-sm dark:text-stone-100 md:text-base">
							{@html dialogDescription}
						</div>

						<div class="mt-4">
							<button
								type="button"
								class="inline-flex w-full justify-center rounded-md border border-transparent bg-stone-200 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-300 dark:bg-stone-700 dark:text-stone-100 dark:hover:bg-stone-600"
								on:click={dialog.close}
								>Закрыть
							</button>
						</div>
					</div></Transition
				>
			</div>
		</div>
	</Transition>
</div>
