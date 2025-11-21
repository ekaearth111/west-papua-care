<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ IMPACT & MONITORING ]</div>
		<h1 class="page-hero__title">Measuring What Matters</h1>
		<p class="page-hero__subtitle">
			Tracking ecological recovery, community benefits, and long-term sustainability through rigorous monitoring
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="content-grid">
			<div class="content-main">
				<h2>Our Impact Framework</h2>
				<p>
					Conservation impact extends beyond protecting coral reefs—it includes improving community livelihoods, strengthening traditional governance, and building local capacity for long-term stewardship. We track progress across three interconnected dimensions: ecological health, community wellbeing, and institutional sustainability.
				</p>

				<h2>Ecological Impact</h2>
				<p>
					Through quarterly Reef Check surveys at 15 monitoring sites, we track key indicators of ecosystem recovery and health. While our MPA is still in early implementation, baseline data establishes benchmarks for measuring future progress.
				</p>

				<div class="impact-metrics">
					<div class="metric-card">
						<div class="metric-label">Coral Cover (Baseline)</div>
						<div class="metric-value">42%</div>
						<div class="metric-target">Target: 55%+ by 2030</div>
						<div class="metric-note">Current cover is good but shows declining trend from historical highs</div>
					</div>
					<div class="metric-card">
						<div class="metric-label">Fish Biomass (Baseline)</div>
						<div class="metric-value">185 g/m²</div>
						<div class="metric-target">Target: 350+ g/m² by 2030</div>
						<div class="metric-note">Well below healthy reef levels; significant room for recovery</div>
					</div>
					<div class="metric-card">
						<div class="metric-label">Indicator Species</div>
						<div class="metric-value">67%</div>
						<div class="metric-target">Target: 90%+ by 2030</div>
						<div class="metric-note">Key species present but at reduced abundance; recruitment ongoing</div>
					</div>
				</div>

				<h3>Expected Recovery Timeline</h3>
				<p>
					Based on successful MPAs in similar contexts, we anticipate:
				</p>
				<ul class="styled-list">
					<li><strong>Years 1-2:</strong> Fish populations begin recovering, especially fast-growing species</li>
					<li><strong>Years 3-5:</strong> Visible biomass increase, larger fish return, spillover effects measurable</li>
					<li><strong>Years 5-10:</strong> Coral cover increases, ecosystem complexity restored, threatened species return</li>
					<li><strong>Years 10+:</strong> Ecosystem reaches new equilibrium, resilience to disturbances enhanced</li>
				</ul>

				<h2>Community Impact</h2>
				<p>
					Marine protection succeeds when communities benefit tangibly from conservation. We track multiple indicators of community wellbeing and livelihood improvement.
				</p>

				<div class="community-impacts">
					<div class="impact-item">
						<h4>💰 Economic Benefits</h4>
						<ul>
							<li>10+ villages engaged in MPA governance</li>
							<li>Ecotourism revenue sharing framework established</li>
							<li>15 community members trained as paid Reef Check surveyors</li>
							<li>Sustainable financing mechanism in development</li>
						</ul>
					</div>
					<div class="impact-item">
						<h4>🎓 Capacity Building</h4>
						<ul>
							<li>12 community members certified in Reef Check methodology</li>
							<li>6 traditional leaders trained in MPA governance</li>
							<li>15-person MPA Committee functioning and making decisions</li>
							<li>Community patrol teams operational</li>
						</ul>
					</div>
					<div class="impact-item">
						<h4>🤝 Social Cohesion</h4>
						<ul>
							<li>Strong consensus across 10+ villages</li>
							<li>Women's representation at 30% on MPA Committee</li>
							<li>Inter-village cooperation strengthened</li>
							<li>Traditional governance systems revitalized</li>
						</ul>
					</div>
					<div class="impact-item">
						<h4>🐟 Food Security</h4>
						<ul>
							<li>Spillover effects expected to increase catches by 50%</li>
							<li>Long-term protein supply secured for future generations</li>
							<li>Traditional fishing grounds protected from destructive practices</li>
							<li>Sustainable harvest rules developed collaboratively</li>
						</ul>
					</div>
				</div>

				<h2>Long-Term Sustainability Indicators</h2>
				<p>
					The true test of conservation success is whether protection continues after external support ends. We track institutional indicators that predict long-term sustainability:
				</p>

				<div class="sustainability-grid">
					<div class="sustain-card">
						<div class="sustain-icon">✓</div>
						<h4>Local Ownership</h4>
						<p>MPA Committee making autonomous decisions; communities identify as MPA stewards</p>
					</div>
					<div class="sustain-card">
						<div class="sustain-icon">✓</div>
						<h4>Financial Independence</h4>
						<p>Revenue streams from diving/tourism being developed; budget managed locally</p>
					</div>
					<div class="sustain-card">
						<div class="sustain-icon">⏳</div>
						<h4>Government Recognition</h4>
						<p>Working toward official designation; district government supportive</p>
					</div>
					<div class="sustain-card">
						<div class="sustain-icon">✓</div>
						<h4>Community Buy-in</h4>
						<p>Strong consensus; voluntary compliance high; pride in conservation leadership</p>
					</div>
					<div class="sustain-card">
						<div class="sustain-icon">✓</div>
						<h4>Technical Capacity</h4>
						<p>Local team can conduct monitoring; data analysis support from partners</p>
					</div>
					<div class="sustain-card">
						<div class="sustain-icon">⏳</div>
						<h4>Enforcement Functioning</h4>
						<p>Community patrols active; escalation protocols established; early compliance signals positive</p>
					</div>
				</div>

				<h2>Transparency and Reporting</h2>
				<p>
					We believe in radical transparency. Monitoring data, financial reports, and governance meeting minutes are shared publicly. This accountability builds trust with communities and donors while contributing to the global evidence base for community-led conservation.
				</p>
				<p>
					Quarterly monitoring reports are available below, and we publish annual impact summaries that honestly assess progress and challenges.
				</p>

				<div class="cta-box">
					<h3>Support Measurable Impact</h3>
					<p>Help us scale proven conservation that delivers real results for reefs and communities.</p>
					<Button variant="cta" size="md" href="/get-involved">Get Involved</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.page-hero {
		background: var(--color-forest-green-deep);
		padding: clamp(8rem, 15vh, 12rem) 0 clamp(3rem, 6vh, 5rem);
		position: relative;
	}

	.page-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.03;
		background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.page-hero__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
		position: relative;
		z-index: 1;
		text-align: center;
	}

	.page-hero__title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		line-height: 1.2;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-lg);
	}

	.page-hero__subtitle {
		font-size: clamp(1.125rem, 2vw, 1.5rem);
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		max-width: 800px;
		margin: 0 auto;
	}

	.content-section {
		padding: clamp(4rem, 8vh, 6rem) 0;
		background: var(--color-off-white);
	}

	.content-container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
	}

	.content-main {
		max-width: 900px;
		margin: 0 auto;
	}

	.content-main h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-top: var(--spacing-3xl);
		margin-bottom: var(--spacing-lg);
	}

	.content-main h2:first-child {
		margin-top: 0;
	}

	.content-main h3 {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-top: var(--spacing-2xl);
		margin-bottom: var(--spacing-md);
	}

	.content-main h4 {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-sm);
	}

	.content-main p {
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: var(--color-gray);
		margin-bottom: var(--spacing-lg);
	}

	.styled-list {
		list-style: none;
		padding: 0;
		margin: var(--spacing-lg) 0;
	}

	.styled-list li {
		padding-left: var(--spacing-xl);
		margin-bottom: var(--spacing-md);
		position: relative;
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
	}

	.styled-list li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
		font-size: 1.2em;
	}

	.impact-metrics {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.metric-card {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		border-left: 4px solid var(--color-burnt-orange);
	}

	.metric-label {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-gray);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--spacing-sm);
	}

	.metric-value {
		font-family: var(--font-family-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-xs);
	}

	.metric-target {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-burnt-orange);
		margin-bottom: var(--spacing-sm);
	}

	.metric-note {
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		line-height: 1.5;
		font-style: italic;
	}

	.community-impacts {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.impact-item {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
	}

	.impact-item h4 {
		margin-bottom: var(--spacing-md);
		font-size: var(--font-size-lg);
	}

	.impact-item ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.impact-item li {
		padding: var(--spacing-xs) 0;
		padding-left: var(--spacing-md);
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		position: relative;
		line-height: 1.6;
	}

	.impact-item li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
	}

	.sustainability-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.sustain-card {
		background: var(--color-cream);
		padding: var(--spacing-lg);
		border-radius: 8px;
		display: flex;
		gap: var(--spacing-md);
		align-items: flex-start;
	}

	.sustain-icon {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.125rem;
	}

	.sustain-card h4 {
		margin: 0 0 var(--spacing-xs) 0;
		font-size: var(--font-size-base);
	}

	.sustain-card p {
		margin: 0;
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		line-height: 1.5;
	}

	.cta-box {
		background: var(--color-cream);
		padding: var(--spacing-2xl);
		border-radius: 8px;
		text-align: center;
		margin-top: var(--spacing-3xl);
	}

	.cta-box h3 {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.cta-box p {
		margin-bottom: var(--spacing-lg);
	}

	.content-sidebar {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.info-card {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
	}

	.info-card h3 {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-lg);
	}

	.fact-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.fact-list dt {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-burnt-orange);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.fact-list dd {
		font-size: var(--font-size-base);
		color: var(--color-gray);
		margin: 0 0 var(--spacing-md) 0;
		line-height: 1.5;
	}

	.reports-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.report-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-sm) var(--spacing-md);
		color: var(--color-charcoal);
		text-decoration: none;
		border-radius: 4px;
		transition: all 0.2s ease;
		font-size: var(--font-size-sm);
	}

	.report-link:hover:not(.disabled) {
		background: var(--color-off-white);
		color: var(--color-burnt-orange);
	}

	.report-link.disabled {
		color: var(--color-gray);
		opacity: 0.6;
		cursor: not-allowed;
	}

	.badge {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		padding: 2px 8px;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.link-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.link-list a {
		display: block;
		padding: var(--spacing-sm) var(--spacing-md);
		color: var(--color-charcoal);
		text-decoration: none;
		border-radius: 4px;
		transition: all 0.2s ease;
		font-size: var(--font-size-base);
	}

	.link-list a:hover {
		background: var(--color-off-white);
		color: var(--color-burnt-orange);
	}

	@media (min-width: 768px) {
		.impact-metrics {
			grid-template-columns: repeat(3, 1fr);
		}

		.community-impacts {
			grid-template-columns: repeat(2, 1fr);
		}

		.sustainability-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.sustainability-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
