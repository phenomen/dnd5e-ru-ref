<script>
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(async () => {
		inject();
	});
</script>

<div class="mx-auto max-w-7xl p-2 sm:p-4 lg:p-6">
	<Header />
	<slot />
	<Footer />
</div>
