<script>
	import { Dialog } from '@rgossiaux/svelte-headlessui';
	import { DialogOverlay } from '@rgossiaux/svelte-headlessui';
	import { DialogTitle } from '@rgossiaux/svelte-headlessui';
	import { DialogDescription } from '@rgossiaux/svelte-headlessui';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<Header />

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
		<DialogOverlay class="fixed inset-0 bg-black opacity-20" on:click={() => (modalOpen = false)} />

		<div
			class="my-4 inline-block w-full max-w-xl transform overflow-hidden rounded bg-white p-4 text-left align-middle shadow-xl"
		>
			<DialogTitle class="mb-2">
				<div class="flex space-x-2">
					<h2 class="text-lg font-medium">{modalTitle}</h2>
					<span class="badge-gray">{modalReference}</span>
				</div>
				{#if modalSubtitle}
					<span class="my-2 text-sm text-gray-600">{modalSubtitle}</span>
				{/if}
			</DialogTitle>

			<DialogDescription class="mt-4 text-base">
				{@html modalDescription}
			</DialogDescription>

			<div class="mt-4">
				<button
					type="button"
					class="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
					on:click={() => (modalOpen = false)}
				>
					Закрыть
				</button>
			</div>
		</div>
	</div>
</Dialog>

<Footer />
