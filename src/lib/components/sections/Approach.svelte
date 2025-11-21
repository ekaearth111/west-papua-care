<script lang="ts">
	let hoveredIndex: number | null = null;

	const pillars = [
		{
			icon: 'community',
			title: 'Community Ownership',
			points: [
				'Free, Prior, and Informed Consent protocols',
				'MPA Committee with traditional leaders',
				'30% women/youth representation',
				'Integration of customary law (adat)'
			]
		},
		{
			icon: 'science',
			title: 'Science-Based Protection',
			points: [
				'250 km² no-take zone',
				'Quarterly Reef Check monitoring',
				'GPS-marked survey sites',
				'IUCN Red List species tracking'
			]
		},
		{
			icon: 'benefits',
			title: 'Community Benefits',
			points: [
				'Spillover effects for fishing',
				'Sustainable tourism opportunities',
				'Alternative livelihoods',
				'Strengthened traditional governance'
			]
		}
	];

	const icons = {
		community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
		science: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v7.535a3 3 0 0 1-.879 2.122l-4.24 4.243a2 2 0 0 0 1.415 3.414h12.408a2 2 0 0 0 1.415-3.414l-4.24-4.243A3 3 0 0 1 14 9.535V2"/><path d="M6 2h12"/><path d="M10 2v6.535a3 3 0 0 0 .879 2.122l4.24 4.243"/></svg>',
		benefits: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>'
	};
</script>

<section class="approach">
	<div class="approach__container">
		<div class="approach__header">
			<div class="section-label" style="color: rgba(255, 255, 255, 0.7);">[ OUR APPROACH ]</div>
			<h2 class="approach__title">Community-Led Conservation</h2>
			<h3 class="approach__subtitle">Traditional Governance Meets Modern Science</h3>
		</div>

		<div class="approach__grid">
			{#each pillars as pillar, index}
				<div
					class="pillar"
					on:mouseenter={() => hoveredIndex = index}
					on:mouseleave={() => hoveredIndex = null}
					role="article"
				>
					<div class="pillar__icon" aria-hidden="true">
						{@html icons[pillar.icon]}
					</div>
					<h4 class="pillar__title">{pillar.title}</h4>
					<ul class="pillar__list">
						{#each pillar.points as point}
							<li class="pillar__item">{point}</li>
						{/each}
					</ul>

					<!-- Bottom accent line -->
					<div class="pillar__accent {hoveredIndex === index ? 'active' : ''}"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.approach {
		background: var(--color-forest-green-deep);
		padding: clamp(4rem, 8vh, 6rem) 0;
		position: relative;
	}

	/* Dot pattern background */
	.approach::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.05;
		background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.approach__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
		position: relative;
		z-index: 1;
	}

	.approach__header {
		text-align: center;
		margin-bottom: clamp(3rem, 6vh, 4rem);
	}

	.approach__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-md);
	}

	.approach__subtitle {
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		font-weight: 400;
		font-family: var(--font-family-sans);
		color: rgba(255, 255, 255, 0.8);
	}

	.approach__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-2xl);
	}

	.pillar {
		position: relative;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1rem;
		padding: var(--spacing-2xl);
		transition: all 0.5s ease;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--spacing-md);
		overflow: hidden;
		cursor: pointer;
	}

	.pillar:hover {
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.08);
	}

	.pillar__icon {
		width: 56px;
		height: 56px;
		padding: var(--spacing-md);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		margin-bottom: var(--spacing-sm);
		transition: transform var(--transition);
	}

	.pillar:hover .pillar__icon {
		transform: scale(1.1);
	}

	.pillar__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.pillar__accent {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: var(--color-burnt-orange);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.5s ease;
	}

	.pillar__accent.active {
		transform: scaleX(1);
	}

	.pillar__title {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-off-white);
		margin: 0;
	}

	.pillar__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		width: 100%;
	}

	.pillar__item {
		font-size: var(--font-size-sm);
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.75);
		padding-left: var(--spacing-lg);
		position: relative;
	}

	.pillar__item::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
	}

	/* Tablet */
	@media (min-width: 768px) {
		.approach__grid {
			gap: var(--spacing-xl);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.approach {
			padding: var(--spacing-5xl) 0;
		}

		.approach__container {
			padding: 0 var(--spacing-xl);
		}

		.approach__grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.pillar {
			padding: var(--spacing-2xl);
		}
	}
</style>
