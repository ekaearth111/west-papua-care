<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>West Papua Care - Protecting the Amazon of the Seas</title>
	<meta name="description" content="Community-led marine conservation in Raja Ampat, Indonesia. Establishing a 250 km² Marine Protected Area to protect the world's most biodiverse coral reefs." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<a href="#main-content" class="skip-to-main">Skip to main content</a>

<Header />

<main id="main-content">
	{@render children()}
</main>

<Footer />
