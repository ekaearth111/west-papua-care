<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const keyPoints = [
		'Community-led Marine Protected Area in Misool in Raja Ampat covering 250 km²',
		'At the heart of the Coral Triangle - the most biodiverse reefs on earth',
		'Empower coastal communities and build local resilience',
		'Traditional indigenous governance meets conservation science'
	];
</script>

<section class="hero">
	<div class="hero__container">
		<div class="hero__content {mounted ? 'animate-fade-in' : ''}">
			<h1 class="hero__title">
				Community-Led Marine Conservation in <span class="hero__accent">Raja Ampat</span>
			</h1>

			<ul class="hero__points">
				{#each keyPoints as point}
					<li class="hero__point">{point}</li>
				{/each}
			</ul>

			<div class="hero__actions">
				<Button variant="cta" size="lg" href="/get-involved">
					Support Our Mission
				</Button>
				<Button variant="secondary" size="lg" href="/project">
					Learn More
				</Button>
			</div>
		</div>

		<div class="hero__image {mounted ? 'animate-slide-in' : ''}">
			<img src="/hero-community.jpg" alt="Local communities protecting coral reefs in Raja Ampat" />
		</div>
	</div>
</section>

<style>
	.hero {
		background: var(--color-forest-green-deep);
		padding: clamp(8rem, 15vh, 12rem) 0 clamp(4rem, 8vh, 6rem);
		position: relative;
		overflow: hidden;
	}

	/* Dot pattern background */
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.03;
		background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.hero__container {
		max-width: var(--max-width-wide);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2xl);
	}

	.hero__title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--color-off-white);
	}

	.hero__accent {
		color: var(--color-burnt-orange);
	}

	.hero__points {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.hero__point {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		padding-left: var(--spacing-xl);
		position: relative;
	}

	.hero__point::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
		font-size: 1.5em;
		line-height: 1;
	}

	.hero__actions {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		align-items: flex-start;
	}

	.hero__image {
		width: 100%;
		height: 400px;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: var(--shadow-xl);
	}

	.hero__image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.hero__container {
			grid-template-columns: 1fr 1fr;
			gap: clamp(3rem, 6vw, 6rem);
		}

		.hero__image {
			height: 500px;
		}

		.hero__actions {
			flex-direction: row;
			gap: var(--spacing-lg);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.hero__container {
			padding: 0 var(--spacing-2xl);
		}

		.hero__image {
			height: 600px;
		}
	}

	/* Animations */
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateX(-30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}

	.animate-slide-in {
		animation: slide-in 1s ease-out;
		animation-delay: 0.2s;
		animation-fill-mode: backwards;
	}
</style>
