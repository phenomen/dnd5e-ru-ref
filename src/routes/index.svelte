<script>
	import { Dialog } from '@rgossiaux/svelte-headlessui';
	import { DialogOverlay } from '@rgossiaux/svelte-headlessui';
	import { DialogTitle } from '@rgossiaux/svelte-headlessui';
	import { DialogDescription } from '@rgossiaux/svelte-headlessui';

	import Category from '$lib/components/Category.svelte';

	import categories from '$lib/data/categories.json';

	let modalOpen = false;
	let modalTitle = '';
	let modalSubtitle = '';
	let modalDescription = '';
	let modalReference = '';

	function showModal(event) {
		modalTitle = event.detail.title;
		modalSubtitle = event.detail.subtitle;
		modalDescription = event.detail.description;
		modalReference = event.detail.reference;
		modalOpen = true;
	}
</script>

<svelte:head>
	<title>D&D 5e | Справочник на русском языке</title>
</svelte:head>

{#each categories as category}
	<Category
		categoryDataset={category.dataset}
		categoryTitle={category.title}
		categorySubtitle={category.subtitle}
		categoryColor={category.color}
		on:message={showModal}
	/>
{/each}

<Dialog class="fixed inset-0 z-10 overflow-y-auto" open={modalOpen}>
	<div class="min-h-screen px-2 text-center">
		<DialogOverlay class="fixed inset-0 bg-black opacity-30" on:click={() => (modalOpen = false)} />

		<div
			class="my-4 inline-block w-full max-w-xl transform overflow-hidden rounded bg-white p-4 text-left align-middle shadow-xl dark:bg-slate-900"
		>
			<DialogTitle class="mb-2">
				<div class="flex space-x-2">
					<h2 class="text-lg font-medium dark:text-slate-100">{modalTitle}</h2>
					<span class="badge-slate dark:bg-slate-800 dark:text-slate-100">{modalReference}</span>
				</div>
				{#if modalSubtitle}
					<span class="my-2 text-sm text-slate-600 dark:text-slate-300">{modalSubtitle}</span>
				{/if}
			</DialogTitle>

			<DialogDescription class="mt-4 text-base dark:text-slate-100">
				{@html modalDescription}
			</DialogDescription>

			<div class="mt-4">
				<button
					type="button"
					class="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
					on:click={() => (modalOpen = false)}
				>
					Закрыть
				</button>
			</div>
		</div>
	</div>
</Dialog>
