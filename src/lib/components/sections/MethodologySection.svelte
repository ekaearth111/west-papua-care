<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Community-First Engagement',
			description: 'We begin with Free, Prior, and Informed Consent protocols, ensuring every decision is made with full community participation and traditional leadership guidance.',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
		},
		{
			number: '02',
			title: 'Scientific Baseline Assessment',
			description: 'Comprehensive marine surveys using Reef Check protocols document biodiversity, establish monitoring sites, and create data-driven protection boundaries.',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v7.535a3 3 0 0 1-.879 2.122l-4.24 4.243a2 2 0 0 0 1.415 3.414h12.408a2 2 0 0 0 1.415-3.414l-4.24-4.243A3 3 0 0 1 14 9.535V2"/><path d="M6 2h12"/></svg>'
		},
		{
			number: '03',
			title: 'Co-Governance Structure',
			description: 'Establish MPA Committee integrating traditional adat law with modern conservation practices, ensuring diverse representation and inclusive decision-making.',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
		},
		{
			number: '04',
			title: 'Implementation & Protection',
			description: 'Launch no-take zones, community patrols, and sustainable tourism initiatives while developing alternative livelihood programs that benefit local communities.',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
		},
		{
			number: '05',
			title: 'Monitoring & Adaptation',
			description: 'Quarterly ecological assessments track reef health, fish populations, and spillover effects, while community feedback shapes ongoing program improvements.',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
		},
		{
			number: '06',
			title: 'Knowledge Sharing',
			description: 'Document and share learnings with regional partners, contribute to conservation science, and support replication of community-led models across Indonesia.',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
		}
	];
</script>

<section class="methodology">
	<div class="methodology__container">
		<div class="methodology__header">
			<div class="section-label" style="color: rgba(255, 255, 255, 0.7);">[ HOW WE WORK ]</div>
			<h2 class="methodology__title">Our Methodology</h2>
			<p class="methodology__subtitle">
				A proven six-step approach that combines indigenous knowledge, cutting-edge science, and community empowerment to achieve lasting conservation impact
			</p>
		</div>

		<div class="methodology__grid">
			{#each steps as step, index}
				<article class="step-card">
					<div class="step-card__number">{step.number}</div>

					<div class="step-card__icon" aria-hidden="true">
						{@html step.icon}
					</div>

					<h3 class="step-card__title">{step.title}</h3>
					<p class="step-card__description">{step.description}</p>

					{#if index < steps.length - 1}
						<div class="step-card__arrow">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</div>
					{/if}
				</article>
			{/each}
		</div>

		<div class="methodology__note">
			<div class="note-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
					<line x1="12" y1="9" x2="12" y2="13"/>
					<line x1="12" y1="17" x2="12.01" y2="17"/>
				</svg>
			</div>
			<div>
				<h4 class="note-title">Adaptive & Iterative</h4>
				<p class="note-text">
					Our methodology is designed to be flexible and responsive. We continuously learn from community feedback and ecological monitoring data, adapting our approach to maximize conservation outcomes and community benefits.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.methodology {
		background: var(--color-forest-green-deep);
		padding: clamp(5rem, 10vh, 8rem) 0;
		position: relative;
	}

	/* Dot pattern background */
	.methodology::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.05;
		background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.methodology__container {
		max-width: var(--max-width-wide);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
		position: relative;
		z-index: 1;
	}

	.methodology__header {
		text-align: center;
		margin-bottom: clamp(3rem, 6vh, 5rem);
	}

	.methodology__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-lg);
	}

	.methodology__subtitle {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.8);
		max-width: 900px;
		margin: 0 auto;
	}

	.methodology__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
	}

	.step-card {
		position: relative;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1rem;
		padding: var(--spacing-2xl);
		transition: all 0.5s ease;
	}

	.step-card:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-4px);
	}

	.step-card__number {
		font-family: var(--font-family-heading);
		font-size: clamp(3rem, 6vw, 4rem);
		font-weight: 700;
		color: var(--color-burnt-orange);
		opacity: 0.5;
		line-height: 1;
		margin-bottom: var(--spacing-md);
	}

	.step-card__icon {
		width: 56px;
		height: 56px;
		padding: var(--spacing-md);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		margin-bottom: var(--spacing-lg);
		transition: transform var(--transition);
	}

	.step-card:hover .step-card__icon {
		transform: scale(1.1);
	}

	.step-card__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.step-card__title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-md);
		line-height: 1.3;
	}

	.step-card__description {
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.75);
		margin: 0;
	}

	.step-card__arrow {
		display: none;
	}

	.methodology__note {
		margin-top: clamp(3rem, 6vh, 5rem);
		padding: var(--spacing-2xl);
		background: rgba(211, 100, 15, 0.1);
		border: 1px solid rgba(211, 100, 15, 0.3);
		border-radius: 1rem;
		display: flex;
		gap: var(--spacing-lg);
		align-items: flex-start;
	}

	.note-icon {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		color: var(--color-burnt-orange);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.note-icon svg {
		width: 100%;
		height: 100%;
	}

	.note-title {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-sm);
	}

	.note-text {
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.methodology__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-2xl);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.methodology__container {
			padding: 0 var(--spacing-2xl);
		}

		.methodology__grid {
			grid-template-columns: repeat(3, 1fr);
			gap: var(--spacing-xl);
		}

		.step-card {
			padding: var(--spacing-2xl);
		}

		/* Show connecting arrows on desktop in flow layout */
		@media (min-width: 1280px) {
			.methodology__grid {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
