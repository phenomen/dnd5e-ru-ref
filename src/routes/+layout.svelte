<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '../app.css';
	import '@fontsource/dm-sans';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="mx-auto max-w-7xl p-2 md:p-4">
	<Header />
	<slot />
	<Footer />
</div>
