<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	const audiences = [
		{
			icon: 'donate',
			title: 'Individual Supporters',
			description: 'Help protect coral reefs and support local communities through direct contributions',
			cta: 'Support Our Mission',
			href: '/get-involved#donate'
		},
		{
			icon: 'research',
			title: 'Researchers & Scientists',
			description: 'Access conservation data, collaborate on research, and contribute to marine science',
			cta: 'Access Resources',
			href: '/impact#research'
		},
		{
			icon: 'partnership',
			title: 'Organizations & Funders',
			description: 'Partner with us on marine conservation and community development initiatives',
			cta: 'Explore Partnerships',
			href: '/contact#partnerships'
		},
		{
			icon: 'community',
			title: 'Local Communities',
			description: 'Learn about livelihood opportunities, sustainable tourism, and community benefits',
			cta: 'Community Info',
			href: '/project#community'
		}
	];

	const icons = {
		donate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
		research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
		partnership: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
		community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
	};
</script>

<section class="audience-ctas">
	<div class="audience-ctas__container">
		<div class="audience-ctas__header">
			<div class="section-label">[ GET INVOLVED ]</div>
			<h2 class="audience-ctas__title">How You Can Make a Difference</h2>
			<p class="audience-ctas__subtitle">
				Whether you're an individual, researcher, organization, or community member, there's a way for you to contribute to protecting the Amazon of the Seas
			</p>
		</div>

		<div class="audience-ctas__grid">
			{#each audiences as audience}
				<div class="audience-card">
					<div class="audience-card__icon" aria-hidden="true">
						{@html icons[audience.icon]}
					</div>
					<h3 class="audience-card__title">{audience.title}</h3>
					<p class="audience-card__description">{audience.description}</p>
					<div class="audience-card__cta">
						<Button variant="primary" size="md" href={audience.href}>
							{audience.cta}
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.audience-ctas {
		background: var(--color-cream);
		padding: clamp(5rem, 10vh, 8rem) 0;
	}

	.audience-ctas__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.audience-ctas__header {
		text-align: center;
		margin-bottom: clamp(3rem, 6vh, 5rem);
	}

	.audience-ctas__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-lg);
	}

	.audience-ctas__subtitle {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.7;
		color: var(--color-gray);
		max-width: 800px;
		margin: 0 auto;
	}

	.audience-ctas__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
	}

	.audience-card {
		background: var(--color-off-white);
		border: 1px solid var(--color-light-gray);
		border-radius: 8px;
		padding: var(--spacing-2xl);
		transition: all var(--transition);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--spacing-lg);
	}

	.audience-card:hover {
		border-color: var(--color-burnt-orange);
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.audience-card__icon {
		width: 64px;
		height: 64px;
		padding: var(--spacing-md);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform var(--transition);
	}

	.audience-card:hover .audience-card__icon {
		transform: scale(1.1);
	}

	.audience-card__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.audience-card__title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin: 0;
	}

	.audience-card__description {
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: var(--color-gray);
		margin: 0;
		flex-grow: 1;
	}

	.audience-card__cta {
		width: 100%;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.audience-ctas__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-2xl);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.audience-ctas__grid {
			grid-template-columns: repeat(4, 1fr);
			gap: var(--spacing-xl);
		}

		.audience-card {
			padding: var(--spacing-2xl) var(--spacing-lg);
		}
	}
</style>
