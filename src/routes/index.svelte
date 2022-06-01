<script context="module">
	export const prerender = true;
</script>

<script>
	import Category from '$lib/components/Category.svelte';
	import categories from '$lib/data/categories.json';

	import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@rgossiaux/svelte-headlessui';

	let modalOpen = false;
	let modalScroll = null;
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

<Dialog
	class="fixed inset-0 z-10 min-h-screen overflow-y-auto"
	open={modalOpen}
	on:close={() => (modalOpen = false)}
	initialFocus={modalScroll}
>
	<div class="flex min-h-screen items-center justify-center">
		<DialogOverlay class="fixed inset-0 bg-black opacity-30" on:click={() => (modalOpen = false)} />

		<div class="m-0 inline-block w-full max-w-2xl transform rounded bg-white p-4 text-left align-middle shadow-xl dark:bg-slate-800 md:m-4">
			<DialogTitle class="mb-2">
				<div class="flex space-x-2" bind:this={modalScroll}>
					<h2 class="text-lg font-medium dark:text-slate-100">{modalTitle}</h2>
					<span
						class="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-100"
						>{modalReference}</span
					>
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
					class="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
					on:click={() => (modalOpen = false)}
				>
					Закрыть
				</button>
			</div>
		</div>
	</div>
</Dialog>
