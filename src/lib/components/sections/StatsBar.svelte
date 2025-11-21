<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const stats = [
		{
			icon: 'fish',
			number: '75%',
			label: 'of World\'s Coral Species Present',
			highlight: true
		},
		{
			icon: 'species',
			number: '1,600+',
			label: 'Fish Species at Risk',
			highlight: true
		},
		{
			icon: 'waves',
			number: '250',
			unit: 'km²',
			label: 'Area for Protection',
			highlight: true
		},
		{
			icon: 'community',
			number: '10+',
			label: 'Communities Ready to Act',
			highlight: false
		},
		{
			icon: 'target',
			number: '76%',
			label: 'Decline in Reef Health Without Action',
			highlight: false
		},
		{
			icon: 'biodiversity',
			number: '#1',
			label: 'Global Marine Biodiversity Hotspot',
			highlight: false
		}
	];

	const icons = {
		waves: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c.6-2.5 1.4-4.5 2-5.5 1-1.6 2.2-2.5 3.5-2.5s2.5.9 3.5 2.5c1 1.5 2 3.5 2 5.5s-1 4-2 5.5c-1 1.6-2.2 2.5-3.5 2.5s-2.5-.9-3.5-2.5c-.6-1-1.4-3-2-5.5z"/><path d="M12 12c.6-2.5 1.4-4.5 2-5.5 1-1.6 2.2-2.5 3.5-2.5s2.5.9 3.5 2.5c.6 1 1.4 3 2 5.5-.6 2.5-1.4 4.5-2 5.5-1 1.6-2.2 2.5-3.5 2.5s-2.5-.9-3.5-2.5c-.6-1-1.4-3-2-5.5z"/></svg>',
		fish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 9.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6-4.56 0-8.56-2.53-9.5-6z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/></svg>',
		community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
		target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
		species: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.93-7.07l-2.83 2.83m0 8.48l2.83 2.83M4.93 4.93l2.83 2.83m8.48 0l2.83-2.83"/></svg>',
		biodiversity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v12M6 12h12"/><circle cx="12" cy="8" r="1"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="12" cy="16" r="1"/></svg>'
	};
</script>

<section class="stats-bar">
	<div class="stats-bar__container">
		<div class="stats-bar__header">
			<div class="section-label">[ BY THE NUMBERS ]</div>
			<h2 class="stats-bar__title">Opportunity for Marine Conservation Impact</h2>
			<p class="stats-bar__subtitle">
				The Coral Triangle's richest biodiversity hotspot faces urgent threats—with community leadership, we can protect it before it's too late
			</p>
		</div>

		<div class="stats-bar__grid">
			{#each stats as stat, index}
				<div class="stat {stat.highlight ? 'stat--highlight' : ''} {mounted ? 'animate-fade-in' : ''}" style="animation-delay: {index * 0.1}s">
					<div class="stat__icon" aria-hidden="true">
						{@html icons[stat.icon]}
					</div>
					<div class="stat__value">
						<div class="stat__number">{stat.number}</div>
						{#if stat.unit}
							<div class="stat__unit">{stat.unit}</div>
						{/if}
					</div>
					<div class="stat__label">{stat.label}</div>

					{#if stat.progress}
						<div class="stat__progress">
							<div class="stat__progress-bar" style="width: {mounted ? stat.progress : 0}%"></div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.stats-bar {
		background: var(--color-cream);
		padding: clamp(5rem, 10vh, 8rem) 0;
		border-top: 1px solid var(--color-light-gray);
		border-bottom: 1px solid var(--color-light-gray);
	}

	.stats-bar__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.stats-bar__header {
		text-align: center;
		margin-bottom: clamp(3rem, 6vh, 5rem);
	}

	.stats-bar__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-lg);
	}

	.stats-bar__subtitle {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.7;
		color: var(--color-gray);
		max-width: 700px;
		margin: 0 auto;
	}

	.stats-bar__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-2xl);
	}

	.stat {
		position: relative;
		background: var(--color-off-white);
		border: 1px solid var(--color-light-gray);
		border-radius: 1rem;
		padding: var(--spacing-2xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--spacing-md);
		transition: all var(--transition);
	}

	.stat:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-burnt-orange);
	}

	.stat--highlight {
		background: linear-gradient(135deg, rgba(211, 100, 15, 0.03) 0%, rgba(211, 100, 15, 0.06) 100%);
		border-color: rgba(211, 100, 15, 0.2);
	}

	.stat__icon {
		width: 64px;
		height: 64px;
		padding: var(--spacing-md);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		transition: transform var(--transition);
	}

	.stat:hover .stat__icon {
		transform: scale(1.1);
	}

	.stat__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.stat__value {
		display: flex;
		align-items: baseline;
		gap: var(--spacing-xs);
		justify-content: center;
	}

	.stat__number {
		font-family: var(--font-family-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		color: var(--color-charcoal);
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.stat__unit {
		font-family: var(--font-family-heading);
		font-size: clamp(1.125rem, 2vw, 1.5rem);
		font-weight: 500;
		color: var(--color-burnt-orange);
	}

	.stat__label {
		font-size: var(--font-size-base);
		color: var(--color-gray);
		line-height: 1.5;
		max-width: 200px;
	}

	.stat__progress {
		width: 100%;
		height: 6px;
		background: var(--color-light-gray);
		border-radius: 3px;
		overflow: hidden;
		margin-top: var(--spacing-sm);
	}

	.stat__progress-bar {
		height: 100%;
		background: linear-gradient(90deg, var(--color-burnt-orange) 0%, var(--color-burnt-orange-dark) 100%);
		border-radius: 3px;
		transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
		transition-delay: 0.3s;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out;
		animation-fill-mode: backwards;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.stats-bar__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-xl);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.stats-bar__grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.stat {
			padding: var(--spacing-2xl);
		}
	}
</style>
