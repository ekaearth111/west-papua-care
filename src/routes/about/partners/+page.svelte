<script lang="ts">
	const partners = [
		{
			name: 'Conservation International',
			type: 'Technical Partner',
			description: 'Provides scientific expertise and regional network support through their Coral Triangle Program.',
			logo: '/images/partners/ci.png'
		},
		{
			name: 'Reef Check Foundation',
			type: 'Monitoring Partner',
			description: 'Training and certification in standardized reef monitoring protocols; global data network access.',
			logo: '/images/partners/reef-check.png'
		},
		{
			name: 'The Nature Conservancy',
			type: 'Strategic Partner',
			description: 'Knowledge sharing on MPA design and community engagement through Asia Pacific Division.',
			logo: '/images/partners/tnc.png'
		},
		{
			name: 'University of Papua',
			type: 'Research Partner',
			description: 'Collaboration on marine biology research; student training and capacity building.',
			logo: '/images/partners/unipa.png'
		},
		{
			name: 'James Cook University',
			type: 'Academic Partner',
			description: 'Scientific advisory support through ARC Centre of Excellence for Coral Reef Studies.',
			logo: '/images/partners/jcu.png'
		},
		{
			name: 'Raja Ampat Traditional Council',
			type: 'Community Partner',
			description: 'Guidance on traditional governance integration and cultural protocols.',
			logo: '/images/partners/council.png'
		}
	];

	const funders = [
		'Packard Foundation',
		'Marisla Foundation',
		'Ocean Conservation Fund',
		'Individual Donors'
	];
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ PARTNERS & FUNDERS ]</div>
		<h1 class="page-hero__title">Building Conservation Through Collaboration</h1>
		<p class="page-hero__subtitle">
			Working with leading organizations and communities to protect the Coral Triangle
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="intro-text">
			<p>
				Community-led conservation requires strong partnerships across scientific institutions, conservation organizations, traditional leadership, and philanthropic support. Our partners provide technical expertise, funding, and networks that amplify local community efforts.
			</p>
		</div>

		<h2 class="section-title">Strategic Partners</h2>
		<div class="partners-grid">
			{#each partners as partner}
				<div class="partner-card">
					<div class="partner-logo">
						<div class="logo-placeholder"></div>
					</div>
					<div class="partner-info">
						<h3>{partner.name}</h3>
						<div class="partner-type">{partner.type}</div>
						<p>{partner.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<h2 class="section-title">Funders</h2>
		<div class="funders-section">
			<p class="funders-intro">
				We are grateful to the foundations and individual donors who make our work possible through multi-year grants and flexible funding.
			</p>
			<div class="funders-grid">
				{#each funders as funder}
					<div class="funder-card">
						<div class="funder-logo-placeholder"></div>
						<div class="funder-name">{funder}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="partnership-cta">
			<h2>Interested in Partnering?</h2>
			<p>
				We seek partnerships that align with our values of community ownership, evidence-based practice, and transparency. Whether you're a research institution, conservation organization, or funder, we'd love to explore collaboration.
			</p>
			<a href="/contact" class="cta-button">Get in Touch</a>
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

	.intro-text {
		max-width: 800px;
		margin: 0 auto var(--spacing-3xl);
		text-align: center;
	}

	.intro-text p {
		font-size: var(--font-size-lg);
		line-height: 1.7;
		color: var(--color-gray);
	}

	.section-title {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-2xl);
		text-align: center;
	}

	.partners-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		margin-bottom: clamp(4rem, 8vh, 6rem);
	}

	.partner-card {
		background: var(--color-cream);
		border-radius: 8px;
		padding: var(--spacing-xl);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
		transition: all 0.3s ease;
	}

	.partner-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.partner-logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo-placeholder {
		width: 120px;
		height: 80px;
		background: rgba(211, 100, 15, 0.1);
		border-radius: 8px;
		border: 2px dashed var(--color-burnt-orange);
	}

	.partner-info h3 {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-xs);
	}

	.partner-type {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-burnt-orange);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--spacing-md);
	}

	.partner-info p {
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
		margin: 0;
	}

	.funders-section {
		margin-bottom: clamp(4rem, 8vh, 6rem);
	}

	.funders-intro {
		max-width: 700px;
		margin: 0 auto var(--spacing-2xl);
		text-align: center;
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: var(--color-gray);
	}

	.funders-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
	}

	.funder-card {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-md);
		text-align: center;
	}

	.funder-logo-placeholder {
		width: 100px;
		height: 100px;
		background: rgba(211, 100, 15, 0.1);
		border-radius: 50%;
		border: 2px dashed var(--color-burnt-orange);
	}

	.funder-name {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-charcoal);
	}

	.partnership-cta {
		background: var(--color-cream);
		padding: clamp(3rem, 6vh, 5rem) var(--spacing-2xl);
		border-radius: 12px;
		text-align: center;
	}

	.partnership-cta h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.partnership-cta p {
		font-size: var(--font-size-lg);
		line-height: 1.7;
		color: var(--color-gray);
		max-width: 700px;
		margin: 0 auto var(--spacing-xl);
	}

	.cta-button {
		display: inline-block;
		padding: var(--spacing-md) var(--spacing-2xl);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: var(--font-size-base);
		transition: all 0.2s ease;
	}

	.cta-button:hover {
		background: var(--color-charcoal);
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	@media (min-width: 768px) {
		.partners-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.funders-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.partner-card {
			flex-direction: row;
			align-items: center;
		}

		.partner-logo {
			flex-shrink: 0;
			width: 150px;
		}
	}

	@media (min-width: 1024px) {
		.funders-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
