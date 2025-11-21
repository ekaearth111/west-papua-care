<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ OUR STORY ]</div>
		<h1 class="page-hero__title">Rooted in Community, Driven by Science</h1>
		<p class="page-hero__subtitle">
			Building a new model for marine conservation that empowers local communities and protects the world's most biodiverse reefs
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="content-grid">
			<div class="content-main">
				<h2>Our Origin Story</h2>
				<p>
					West Papua Care was founded in 2024 by conservationists and community organizers who witnessed firsthand the failures of top-down marine protection. Time and again, we saw Marine Protected Areas established without genuine community consent, leading to conflict, poor compliance, and ultimately unsuccessful conservation.
				</p>
				<p>
					We knew there had to be a better way—one that respected traditional governance, secured authentic community ownership, and delivered measurable conservation outcomes. Raja Ampat, with its exceptional biodiversity and strong traditional leadership, provided the perfect opportunity to demonstrate this alternative model.
				</p>

				<h2>Our Mission</h2>
				<div class="mission-box">
					<p class="mission-statement">
						To protect marine biodiversity through community-led conservation that respects traditional governance, relies on rigorous science, and ensures lasting benefits for local communities.
					</p>
				</div>

				<h2>Our Vision</h2>
				<p>
					We envision a future where coastal communities across the Coral Triangle lead marine conservation efforts, managing thriving Marine Protected Areas that restore fish populations, protect coral reefs, and provide sustainable livelihoods for generations to come.
				</p>
				<p>
					By proving this model works in Raja Ampat, we aim to inspire and support communities throughout Indonesia and beyond to take control of their marine future.
				</p>

				<h2>Our Values</h2>
				<div class="values-grid">
					<div class="value-card">
						<div class="value-icon">🤝</div>
						<h3>Community Ownership</h3>
						<p>Local communities must have genuine decision-making power, not just consultation. We follow rigorous FPIC protocols and ensure community voices drive all major decisions.</p>
					</div>
					<div class="value-card">
						<div class="value-icon">🔬</div>
						<h3>Evidence-Based Practice</h3>
						<p>Science guides our approach. Quarterly monitoring tracks what's working and what isn't, allowing us to adapt and improve based on real data, not assumptions.</p>
					</div>
					<div class="value-card">
						<div class="value-icon">🌱</div>
						<h3>Long-Term Sustainability</h3>
						<p>We build local capacity and sustainable financing so conservation continues after external support ends. Our goal is to become unnecessary.</p>
					</div>
					<div class="value-card">
						<div class="value-icon">💎</div>
						<h3>Transparency & Accountability</h3>
						<p>We publicly share monitoring data, financial reports, and governance decisions. Transparency builds trust with communities and donors alike.</p>
					</div>
					<div class="value-card">
						<div class="value-icon">🎯</div>
						<h3>Cultural Respect</h3>
						<p>Traditional governance systems like adat and sasi aren't obstacles—they're foundations. We integrate customary law with modern MPA structures.</p>
					</div>
					<div class="value-card">
						<div class="value-icon">🌍</div>
						<h3>Scalable Impact</h3>
						<p>While focused on Raja Ampat, we're building a replicable model that communities across the Coral Triangle and beyond can adapt to their contexts.</p>
					</div>
				</div>

				<h2>Why Raja Ampat</h2>
				<p>
					Raja Ampat isn't just stunningly beautiful—it's irreplaceable. As the global epicenter of marine biodiversity, protecting these reefs protects the genetic library for the world's coral ecosystems. Yet this treasure faces mounting threats: destructive fishing, illegal harvesting, and weakening traditional management.
				</p>
				<p>
					What made Raja Ampat the right place to start was the combination of exceptional biodiversity, strong traditional governance structures, and communities ready to lead. After two years of relationship-building and consultations, we achieved strong consensus across 10+ villages to establish community-led protection.
				</p>

				<h2>Our Approach</h2>
				<p>
					We don't come with pre-made solutions. Instead, we facilitate a process where communities define their own vision for marine protection, informed by scientific evidence and successful examples from elsewhere. We provide:
				</p>
				<ul class="styled-list">
					<li>Technical expertise in reef monitoring and MPA design</li>
					<li>Facilitation of inclusive governance structures</li>
					<li>Training in Reef Check survey methods</li>
					<li>Support accessing funding and partnerships</li>
					<li>Documentation and sharing of lessons learned</li>
				</ul>
				<p>
					But communities make the decisions. They set boundaries, determine rules, manage budgets, and enforce compliance. Our role is to support, not direct.
				</p>

				<h2>Looking Forward</h2>
				<p>
					Our immediate priority is securing official government designation for the MPA while maintaining strong community buy-in and documenting early signs of ecosystem recovery. Over the next 5 years, we aim to:
				</p>
				<ul class="styled-list">
					<li>Achieve measurable increases in fish biomass and coral cover</li>
					<li>Establish sustainable financing through ecotourism revenue</li>
					<li>Support 3-5 additional communities in establishing their own MPAs</li>
					<li>Publish peer-reviewed research on community-led conservation effectiveness</li>
					<li>Build a regional network of community-managed MPAs</li>
				</ul>

				<div class="cta-box">
					<h3>Join Our Mission</h3>
					<p>Help us prove that community-led conservation can protect the world's most precious marine ecosystems.</p>
					<div class="button-group">
						<Button variant="cta" size="md" href="/get-involved">Get Involved</Button>
					</div>
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

	.mission-box {
		background: linear-gradient(135deg, rgba(211, 100, 15, 0.08) 0%, rgba(211, 100, 15, 0.12) 100%);
		border-left: 4px solid var(--color-burnt-orange);
		padding: var(--spacing-2xl);
		border-radius: 8px;
		margin: var(--spacing-xl) 0;
	}

	.mission-statement {
		font-size: var(--font-size-lg);
		line-height: 1.7;
		color: var(--color-charcoal);
		font-weight: 500;
		margin: 0;
	}

	.values-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.value-card {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		text-align: center;
	}

	.value-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-md);
	}

	.value-card h3 {
		margin-bottom: var(--spacing-md);
	}

	.value-card p {
		margin: 0;
		font-size: var(--font-size-sm);
		text-align: left;
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
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
		font-size: 1.5em;
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

	.button-group {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-md);
		justify-content: center;
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
		.values-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.values-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
