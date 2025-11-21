<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="cta">
	<div class="cta__container">
		<div class="section-label">[ GET INVOLVED ]</div>
		<h2 class="cta__title">
			Join Us in Protecting the Amazon of the Seas
		</h2>
		<p class="cta__text">
			Traditional indigenous governance meets conservation science to safeguard the world's most biodiverse marine ecosystem for generations to come
		</p>
		<div class="cta__actions">
			<Button variant="cta" size="lg" href="/get-involved">
				Support Our Mission
			</Button>
		</div>
	</div>
</section>

<style>
	.cta {
		background: var(--color-off-white);
		padding: clamp(5rem, 10vh, 8rem) 0;
	}

	.cta__container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
		text-align: center;
	}

	.cta__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-lg);
	}

	.cta__text {
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		line-height: 1.7;
		color: var(--color-gray);
		margin-bottom: var(--spacing-3xl);
	}

	.cta__actions {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		align-items: center;
		justify-content: center;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.cta__actions {
			flex-direction: row;
			gap: var(--spacing-lg);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.cta__container {
			padding: 0 var(--spacing-2xl);
		}
	}
</style>
