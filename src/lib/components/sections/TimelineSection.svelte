<script lang="ts">
	const milestones = [
		{
			date: '2023',
			quarter: 'Q1',
			title: 'Community Engagement Initiated',
			description: 'First consultations with traditional leaders and community members to establish project vision and governance framework.',
			status: 'completed'
		},
		{
			date: '2023',
			quarter: 'Q3',
			title: 'Marine Survey Completed',
			description: 'Comprehensive baseline reef surveys conducted across 250 km² proposed protected area, documenting exceptional biodiversity.',
			status: 'completed'
		},
		{
			date: '2023',
			quarter: 'Q4',
			title: 'MPA Committee Formed',
			description: 'Official establishment of community-led governance committee with representation from all stakeholder groups.',
			status: 'completed'
		},
		{
			date: '2024',
			quarter: 'Q1',
			title: 'Community Benefits Framework',
			description: 'Development of sustainable livelihood programs and tourism opportunities for local communities.',
			status: 'in-progress'
		},
		{
			date: '2024',
			quarter: 'Q3',
			title: 'Official MPA Designation',
			description: 'Formal recognition and legal designation of the Marine Protected Area by Indonesian government.',
			status: 'upcoming'
		},
		{
			date: '2025',
			quarter: 'Q1',
			title: 'Long-term Monitoring Program',
			description: 'Launch of ongoing ecological monitoring and community benefit assessment framework.',
			status: 'upcoming'
		}
	];

	const statusConfig = {
		completed: {
			label: 'Completed',
			color: 'var(--color-forest-green)',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
		},
		'in-progress': {
			label: 'In Progress',
			color: 'var(--color-burnt-orange)',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"></polyline></svg>'
		},
		upcoming: {
			label: 'Upcoming',
			color: 'var(--color-gray)',
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
		}
	};
</script>

<section class="timeline">
	<div class="timeline__container">
		<div class="timeline__header">
			<div class="section-label">[ OUR JOURNEY ]</div>
			<h2 class="timeline__title">Project Timeline</h2>
			<p class="timeline__subtitle">
				From community consultation to long-term conservation - tracking our milestones toward establishing a thriving Marine Protected Area
			</p>
		</div>

		<div class="timeline__track">
			<div class="timeline__line"></div>

			{#each milestones as milestone, index}
				<article class="milestone milestone--{milestone.status}">
					<div class="milestone__marker">
						<div class="milestone__icon" style="background: {statusConfig[milestone.status].color}">
							{@html statusConfig[milestone.status].icon}
						</div>
					</div>

					<div class="milestone__content">
						<div class="milestone__meta">
							<time class="milestone__date">{milestone.quarter} {milestone.date}</time>
							<span class="milestone__status" style="color: {statusConfig[milestone.status].color}">
								{statusConfig[milestone.status].label}
							</span>
						</div>
						<h3 class="milestone__title">{milestone.title}</h3>
						<p class="milestone__description">{milestone.description}</p>
					</div>
				</article>
			{/each}
		</div>

		<div class="timeline__legend">
			{#each Object.entries(statusConfig) as [key, config]}
				<div class="legend-item">
					<div class="legend-item__dot" style="background: {config.color}"></div>
					<span class="legend-item__label">{config.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.timeline {
		background: var(--color-cream);
		padding: clamp(5rem, 10vh, 8rem) 0;
	}

	.timeline__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.timeline__header {
		text-align: center;
		margin-bottom: clamp(3rem, 6vh, 5rem);
	}

	.timeline__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-lg);
	}

	.timeline__subtitle {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.7;
		color: var(--color-gray);
		max-width: 800px;
		margin: 0 auto;
	}

	.timeline__track {
		position: relative;
		padding-left: var(--spacing-2xl);
	}

	.timeline__line {
		position: absolute;
		left: 23px;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--color-light-gray);
	}

	.milestone {
		position: relative;
		margin-bottom: var(--spacing-3xl);
		display: flex;
		gap: var(--spacing-xl);
	}

	.milestone:last-child {
		margin-bottom: 0;
	}

	.milestone__marker {
		position: absolute;
		left: calc(-1 * var(--spacing-2xl));
		top: 0;
		z-index: 2;
	}

	.milestone__icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-off-white);
		box-shadow: 0 0 0 4px var(--color-cream);
		transition: transform var(--transition);
	}

	.milestone:hover .milestone__icon {
		transform: scale(1.15);
	}

	.milestone__icon :global(svg) {
		width: 24px;
		height: 24px;
	}

	.milestone__content {
		flex: 1;
		background: var(--color-off-white);
		border: 1px solid var(--color-light-gray);
		border-radius: 1rem;
		padding: var(--spacing-xl);
		transition: all var(--transition);
	}

	.milestone:hover .milestone__content {
		transform: translateX(4px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-burnt-orange);
	}

	.milestone__meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-md);
		align-items: center;
		margin-bottom: var(--spacing-sm);
	}

	.milestone__date {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-charcoal);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.milestone__status {
		font-size: var(--font-size-sm);
		font-weight: 500;
		padding: 0.25rem 0.75rem;
		background: currentColor;
		color: var(--color-off-white);
		border-radius: 1rem;
		opacity: 0.15;
		position: relative;
	}

	.milestone__status::before {
		content: attr(style);
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 1;
		background: transparent;
		color: inherit;
		content: '';
	}

	.milestone__status::after {
		content: attr(data-label);
	}

	.milestone__title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-sm);
		line-height: 1.3;
	}

	.milestone__description {
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
		margin: 0;
	}

	/* Status-specific styling */
	.milestone--completed .milestone__content {
		border-left: 4px solid var(--color-forest-green);
	}

	.milestone--in-progress .milestone__content {
		border-left: 4px solid var(--color-burnt-orange);
	}

	.milestone--upcoming .milestone__content {
		border-left: 4px solid var(--color-gray);
		opacity: 0.85;
	}

	.timeline__legend {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xl);
		justify-content: center;
		margin-top: clamp(3rem, 6vh, 4rem);
		padding-top: var(--spacing-2xl);
		border-top: 1px solid var(--color-light-gray);
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.legend-item__dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.legend-item__label {
		font-size: var(--font-size-sm);
		font-weight: 500;
		color: var(--color-gray);
	}

	/* Tablet */
	@media (min-width: 768px) {
		.timeline__track {
			padding-left: var(--spacing-3xl);
		}

		.milestone__marker {
			left: calc(-1 * var(--spacing-3xl));
		}

		.milestone__icon {
			width: 56px;
			height: 56px;
		}

		.milestone__icon :global(svg) {
			width: 28px;
			height: 28px;
		}

		.milestone__content {
			padding: var(--spacing-2xl);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.timeline__container {
			padding: 0 var(--spacing-2xl);
		}
	}
</style>
