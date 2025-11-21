<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';

	let hoveredIndex: number | null = null;

	const threats = [
		{
			icon: 'destructive-fishing',
			title: 'Cyanide & Blast Fishing',
			description: 'Coral reef destruction from cyanide fishing and past bomb fishing leaving big areas already destroyed'
		},
		{
			icon: 'illegal-harvest',
			title: 'Illegal Harvesting',
			description: 'Sea turtle and egg harvesting, shark finning, and harvest of protected species including Napoleon wrasse and Bumphead Parrotfish'
		},
		{
			icon: 'increasing-pressure',
			title: 'External Illegal Fishing',
			description: 'Illegal fishers from other islands as far as Sulawesi frequently visiting the area, threatening local marine resources'
		},
		{
			icon: 'weakening-systems',
			title: 'Key Species Under Threat',
			description: 'Decline of endangered species including Hawksbill and Green sea turtles, Napoleon wrasse, Bumphead Parrotfish, and various shark species'
		}
	];

	const icons = {
		'destructive-fishing': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8m-4-4h8"/><path d="m15 9-6 6m0-6l6 6"/></svg>',
		'illegal-harvest': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
		'increasing-pressure': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
		'weakening-systems': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
	};
</script>

<section class="challenge">
	<div class="challenge__container">
		<div class="challenge__header">
			<div class="section-label">[ THE CHALLENGE ]</div>
			<h2 class="challenge__title">Why This Matters</h2>
			<h3 class="challenge__subtitle">Critical Threats</h3>
		</div>

		<div class="challenge__grid">
			{#each threats as threat, index}
				<div
					class="threat-card"
					on:mouseenter={() => hoveredIndex = index}
					on:mouseleave={() => hoveredIndex = null}
					role="article"
				>
					<div class="threat-card__icon" aria-hidden="true">
						{@html icons[threat.icon]}
					</div>
					<h4 class="threat-card__title">{threat.title}</h4>
					<p class="threat-card__description">{threat.description}</p>

					<!-- Bottom accent line -->
					<div class="threat-card__accent {hoveredIndex === index ? 'active' : ''}"></div>
				</div>
			{/each}
		</div>

		<div class="challenge__opportunity">
			<p class="opportunity__text">
				Misool, located in the heart of the Coral Triangle—the global epicenter of marine biodiversity—faces mounting threats but offers a unique opportunity. With strong community consensus and traditional leader endorsement already secured, we can act now to protect this irreplaceable ecosystem before it's too late.
			</p>
		</div>
	</div>
</section>

<style>
	.challenge {
		background: var(--color-cream);
		padding: clamp(4rem, 8vh, 6rem) 0;
	}

	.challenge__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.challenge__header {
		text-align: center;
		margin-bottom: clamp(3rem, 6vh, 4rem);
	}

	.challenge__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.challenge__subtitle {
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		font-weight: 400;
		color: var(--color-gray);
	}

	.challenge__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		margin-bottom: var(--spacing-3xl);
	}

	.threat-card {
		position: relative;
		background: var(--color-off-white);
		border: 1px solid var(--color-light-gray);
		border-radius: 4px;
		padding: var(--spacing-xl);
		transition: all var(--transition);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--spacing-md);
		overflow: hidden;
		cursor: pointer;
	}

	.threat-card:hover {
		border-color: var(--color-burnt-orange);
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
	}

	.threat-card__icon {
		width: 48px;
		height: 48px;
		padding: var(--spacing-sm);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.75rem;
		transition: transform var(--transition);
	}

	.threat-card:hover .threat-card__icon {
		transform: scale(1.1);
	}

	.threat-card__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.threat-card__accent {
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

	.threat-card__accent.active {
		transform: scaleX(1);
	}

	.threat-card__title {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-charcoal);
		margin: 0;
	}

	.threat-card__description {
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
		margin: 0;
	}

	.challenge__opportunity {
		background: var(--color-off-white);
		border: 1px solid var(--color-light-gray);
		border-radius: 4px;
		padding: var(--spacing-2xl);
		text-align: center;
	}

	.opportunity__text {
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: var(--color-gray);
		margin: 0;
		max-width: 750px;
		margin: 0 auto;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.challenge__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-2xl);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.challenge {
			padding: var(--spacing-5xl) 0;
		}

		.challenge__container {
			padding: 0 var(--spacing-xl);
		}

		.challenge__opportunity {
			padding: var(--spacing-2xl) var(--spacing-3xl);
		}
	}
</style>
