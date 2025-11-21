<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ PROJECT OVERVIEW ]</div>
		<h1 class="page-hero__title">Community-Led Marine Protected Area</h1>
		<p class="page-hero__subtitle">
			Establishing a 250 km² no-take zone in Misool, Raja Ampat through traditional governance and modern conservation science
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="content-grid">
			<div class="content-main">
				<h2>The Vision</h2>
				<p>
					West Papua Care is establishing a groundbreaking community-led Marine Protected Area in Misool, Raja Ampat, Indonesia—the heart of the Coral Triangle and the most biodiverse marine ecosystem on Earth. This 250 km² no-take zone covers the islands and archipelagos of Damu, Canpade, Balbulol, Sagof, Efpian, Kasiah, and surrounding waters—an area twice the size of Paris city.
				</p>

				<h2>Why Misool, Raja Ampat</h2>
				<p>
					Misool is a biodiversity hotspot within Raja Ampat, home to 75% of the world's coral species and over 1,600 fish species. Its fringing reefs, reef walls, atolls, off-shore reefs, caves and underwater rock formations host huge marine biodiversity including endemic and key species. It is an important spawning ground for corals and fishes.
				</p>
				<p>
					The area faces serious threats from cyanide fishing, illegal fishers from as far as Sulawesi, sea turtle harvesting, shark finning, and past bomb fishing damage. With strong community consensus already secured and traditional leaders endorsing the project, we have a unique window of opportunity to protect this marine treasure before it's too late.
				</p>

				<h2>Project Goals</h2>
				<ul class="styled-list">
					<li>Establish 250 km² no-take zone Marine Protected Area with 10km buffer zone</li>
					<li>Restore traditional governance systems (adat/sasi) for marine management</li>
					<li>Target 50% increase in fish biomass within 5 years based on regional MPA performance data</li>
					<li>Protect key species: Napoleon wrasse, Hawksbill and Green sea turtles, Bumphead Parrotfish, and shark species</li>
					<li>Create sustainable livelihoods through ecotourism and resource management</li>
					<li>Conduct GPS-marked scientific surveys of coral health and ecosystem dynamics</li>
					<li>IUCN Red List species identification and conservation status tracking</li>
					<li>Establish base camp operations on Cempedak Island with ranger patrols</li>
				</ul>

				<h2>Timeline</h2>
				<div class="timeline-simple">
					<div class="timeline-item">
						<strong>2023-2024:</strong> Community consultations, baseline surveys, and governance framework establishment
					</div>
					<div class="timeline-item">
						<strong>2024-2025:</strong> MPA Committee formation, patrol systems, and monitoring protocols
					</div>
					<div class="timeline-item">
						<strong>2025+:</strong> Official designation, ongoing monitoring, and benefit sharing programs
					</div>
				</div>

				<h2>Impact to Date</h2>
				<div class="impact-highlights">
					<div class="highlight-stat">
						<div class="stat-value">250 km²</div>
						<div class="stat-label">Marine area under community protection</div>
					</div>
					<div class="highlight-stat">
						<div class="stat-value">10+</div>
						<div class="stat-label">Villages with strong consensus</div>
					</div>
					<div class="highlight-stat">
						<div class="stat-value">15</div>
						<div class="stat-label">Monitoring sites established</div>
					</div>
					<div class="highlight-stat">
						<div class="stat-value">12</div>
						<div class="stat-label">Community members Reef Check certified</div>
					</div>
				</div>

				<div class="cta-box">
					<h3>Get Involved</h3>
					<p>Join us in protecting the Amazon of the Seas through community-led conservation.</p>
					<Button variant="cta" size="md" href="/get-involved">Support This Project</Button>
				</div>
			</div>

			<aside class="content-sidebar">
				<div class="info-card">
					<h3>Quick Facts</h3>
					<dl class="fact-list">
						<dt>Location</dt>
						<dd>Misool, Raja Ampat, West Papua, Indonesia</dd>

						<dt>Specific Islands</dt>
						<dd>Damu, Canpade, Balbulol, Sagof, Efpian, Kasiah</dd>

						<dt>Area</dt>
						<dd>250 km² (no-take zone with 10km buffer)</dd>

						<dt>Base Camp</dt>
						<dd>Cempedak Island</dd>

						<dt>Communities</dt>
						<dd>10+ villages engaged</dd>

						<dt>Biodiversity</dt>
						<dd>75% of world's coral species<br>1,600+ fish species</dd>

						<dt>Governance</dt>
						<dd>Community-led with traditional leaders</dd>

						<dt>Status</dt>
						<dd>Implementation phase (October 2025)</dd>
					</dl>
				</div>
			</aside>
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
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
		font-size: 1.5em;
	}

	.timeline-simple {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.timeline-item {
		padding: var(--spacing-lg);
		background: var(--color-cream);
		border-left: 4px solid var(--color-burnt-orange);
		border-radius: 4px;
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
	}

	.timeline-item strong {
		color: var(--color-charcoal);
		display: block;
		margin-bottom: var(--spacing-xs);
	}

	.impact-highlights {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.highlight-stat {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		text-align: center;
		border: 2px solid var(--color-burnt-orange);
	}

	.stat-value {
		font-family: var(--font-family-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		color: var(--color-burnt-orange);
		margin-bottom: var(--spacing-sm);
	}

	.stat-label {
		font-size: var(--font-size-base);
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
		.impact-highlights {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.content-grid {
			grid-template-columns: 2fr 1fr;
		}

		.impact-highlights {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
