<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ GET INVOLVED ]</div>
		<h1 class="page-hero__title">Join the Movement</h1>
		<p class="page-hero__subtitle">
			Protect the Coral Triangle's most biodiverse waters through community-led conservation
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="intro-text">
			<p>
				Whether you're a funding partner, researcher, organization partner, individual supporter, or community member, there are meaningful ways to contribute to community-led marine protection in Raja Ampat. Every form of support helps build lasting conservation that empowers local communities and protects irreplaceable marine biodiversity.
			</p>
		</div>

		<!-- Funding Partners -->
		<div id="funders" class="involvement-section">
			<div class="section-header">
				<div class="section-number">01</div>
				<h2>Funding Partners</h2>
			</div>
			<div class="involvement-grid">
				<div class="involvement-content">
					<p>
						Institutional funders and foundations enable us to scale community-led conservation and build long-term sustainability. We seek partnerships that align with our values of community ownership, evidence-based practice, and transparency.
					</p>

					<h3>Funding Opportunities</h3>
					<div class="help-options">
						<div class="option-card">
							<h4>🏛️ Foundations & Grantmakers</h4>
							<ul>
								<li>Multi-year core operating support</li>
								<li>Project-specific grants for scaling or innovation</li>
								<li>Capacity building and organizational development</li>
								<li>Learning and evaluation partnerships</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>🏢 Corporate Funders</h4>
							<ul>
								<li>Mission-aligned corporate sponsorships</li>
								<li>Employee engagement programs</li>
								<li>In-kind support (equipment, technology, services)</li>
								<li>Sustainable supply chain initiatives</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>🌍 Impact Investors</h4>
							<ul>
								<li>Blue bonds and conservation finance</li>
								<li>Payment for ecosystem services</li>
								<li>Sustainable financing mechanisms</li>
								<li>Results-based financing</li>
							</ul>
						</div>
					</div>

					<h3>Why Fund Us</h3>
					<ul class="styled-list">
						<li><strong>Proven Model:</strong> Community-led MPAs show 400%+ increase in fish biomass</li>
						<li><strong>Strong Local Buy-in:</strong> Consensus across 10+ villages ensures sustainability</li>
						<li><strong>Rigorous Monitoring:</strong> Quarterly Reef Check surveys track tangible impact</li>
						<li><strong>Transparent Operations:</strong> Public reporting on finances and outcomes</li>
						<li><strong>Scalable Approach:</strong> Model can be replicated across Coral Triangle</li>
					</ul>

					<Button variant="primary" size="md" href="/contact">Explore Funding Partnership</Button>
				</div>
			</div>
		</div>

		<!-- Researchers & Scientists -->
		<div id="researchers" class="involvement-section">
			<div class="section-header">
				<div class="section-number">02</div>
				<h2>Researchers & Scientists</h2>
			</div>
			<div class="involvement-grid">
				<div class="involvement-content">
					<p>
						The scientific community plays a vital role in strengthening our evidence-based approach and contributing to global conservation knowledge. We welcome collaboration with marine biologists, social scientists, and conservation researchers.
					</p>

					<h3>Research Opportunities</h3>
					<div class="help-options">
						<div class="option-card">
							<h4>🔬 Field Research</h4>
							<ul>
								<li>Conduct surveys and data collection in the MPA</li>
								<li>Collaborate on monitoring protocol development</li>
								<li>Study ecosystem recovery and spillover effects</li>
								<li>Assess community-led governance effectiveness</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>📊 Data Analysis</h4>
							<ul>
								<li>Analyze our quarterly monitoring datasets</li>
								<li>Develop models for ecosystem recovery trajectories</li>
								<li>Evaluate socio-economic impacts</li>
								<li>Contribute to peer-reviewed publications</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>🎓 Capacity Building</h4>
							<ul>
								<li>Train community members in survey methods</li>
								<li>Mentor local researchers and students</li>
								<li>Develop educational materials</li>
								<li>Share technical expertise with MPA Committee</li>
							</ul>
						</div>
					</div>

					<p>
						We provide logistical support, local partnerships, and access to baseline data. All research must follow ethical protocols and benefit local communities.
					</p>

					<Button variant="primary" size="md" href="/contact">Propose Research Collaboration</Button>
				</div>
			</div>
		</div>

		<!-- NGOs and Organisational Partners -->
		<div id="partners" class="involvement-section">
			<div class="section-header">
				<div class="section-number">03</div>
				<h2>NGOs and Organisational Partners</h2>
			</div>
			<div class="involvement-grid">
				<div class="involvement-content">
					<p>
						We collaborate with conservation organizations, academic institutions, and mission-aligned partners to strengthen community-led marine protection. Strategic partnerships amplify our impact and contribute to broader conservation goals.
					</p>

					<h3>Partnership Opportunities</h3>
					<div class="help-options">
						<div class="option-card">
							<h4>🌍 Conservation Organizations</h4>
							<ul>
								<li>Technical assistance and knowledge sharing</li>
								<li>Joint advocacy for community-led approaches</li>
								<li>Network building and peer learning</li>
								<li>Co-implementation of complementary programs</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>🎓 Academic Institutions</h4>
							<ul>
								<li>Research collaborations and data sharing</li>
								<li>Student fieldwork and internship programs</li>
								<li>Capacity building for local researchers</li>
								<li>Joint publications and knowledge dissemination</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>🤝 Strategic Partners</h4>
							<ul>
								<li>Technology and innovation partnerships</li>
								<li>Communication and media support</li>
								<li>Policy and advocacy collaboration</li>
								<li>Cross-sector learning initiatives</li>
							</ul>
						</div>
					</div>

					<h3>Why Partner With Us</h3>
					<ul class="styled-list">
						<li><strong>Community-First Approach:</strong> All partnerships respect local ownership and decision-making</li>
						<li><strong>Evidence-Based:</strong> Rigorous monitoring provides solid data for learning and adaptation</li>
						<li><strong>Collaborative Spirit:</strong> We value knowledge sharing and mutual learning</li>
						<li><strong>Transparent Operations:</strong> Open communication and public reporting</li>
						<li><strong>Replicable Model:</strong> Learnings can inform conservation across the Coral Triangle</li>
					</ul>

					<Button variant="primary" size="md" href="/contact">Explore Partnership</Button>
				</div>
			</div>
		</div>

		<!-- Individual Supporters -->
		<div id="supporters" class="involvement-section">
			<div class="section-header">
				<div class="section-number">04</div>
				<h2>Individual Supporters</h2>
			</div>
			<div class="involvement-grid">
				<div class="involvement-content">
					<p>
						Individual supporters are the backbone of our work. Your contributions directly fund community patrols, scientific monitoring, and capacity building that makes community-led conservation possible.
					</p>

					<h3>How You Can Help</h3>
					<div class="help-options">
						<div class="option-card">
							<h4>💰 Financial Support</h4>
							<p>Make a donation to support:</p>
							<ul>
								<li>Quarterly reef monitoring (Reef Check surveys)</li>
								<li>Community patrol operations and equipment</li>
								<li>Training programs for local surveyors and rangers</li>
								<li>MPA Committee capacity building</li>
							</ul>
							<div class="button-group">
								<Button variant="primary" size="md" href="/contact">Donate Now</Button>
							</div>
						</div>

						<div class="option-card">
							<h4>📢 Amplify Our Message</h4>
							<ul>
								<li>Follow us on social media and share our updates</li>
								<li>Tell friends and family about community-led conservation</li>
								<li>Host a fundraiser or awareness event</li>
								<li>Write about our work on your blog or platform</li>
							</ul>
						</div>

						<div class="option-card">
							<h4>🤿 Visit Responsibly</h4>
							<ul>
								<li>Plan a dive trip to Raja Ampat with responsible operators</li>
								<li>Pay the MPA conservation fee that supports local communities</li>
								<li>Follow local guidelines and respect protected areas</li>
								<li>Share your experience to inspire others</li>
							</ul>
						</div>
					</div>
				</div>
				<aside class="involvement-sidebar">
					<div class="stat-box">
						<div class="stat-number">$50</div>
						<p>Funds one day of community reef monitoring</p>
					</div>
					<div class="stat-box">
						<div class="stat-number">$200</div>
						<p>Trains one community member as a certified Reef Check surveyor</p>
					</div>
					<div class="stat-box">
						<div class="stat-number">$500</div>
						<p>Supports one month of regular patrol operations</p>
					</div>
				</aside>
			</div>
		</div>

		<!-- Final CTA -->
		<div class="final-cta">
			<h2>Ready to Make an Impact?</h2>
			<p>
				Every contribution—whether financial, scientific, organizational, or community-based—helps protect the Coral Triangle's most biodiverse waters while empowering local communities.
			</p>
			<div class="button-group">
				<Button variant="cta" size="lg" href="#">Donate Now</Button>
				<Button variant="secondary" size="lg" href="/contact">Get in Touch</Button>
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

	.involvement-section {
		margin-bottom: clamp(4rem, 8vh, 6rem);
		padding-bottom: clamp(4rem, 8vh, 6rem);
		border-bottom: 1px solid var(--color-light-gray);
	}

	.involvement-section:last-of-type {
		border-bottom: none;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-2xl);
	}

	.section-number {
		flex-shrink: 0;
		width: 64px;
		height: 64px;
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-2xl);
		font-weight: 700;
	}

	.section-header h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin: 0;
	}

	.involvement-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
	}

	.involvement-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.involvement-content h3 {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-top: var(--spacing-2xl);
		margin-bottom: var(--spacing-lg);
	}

	.involvement-content h4 {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-sm);
	}

	.involvement-content p {
		font-size: var(--font-size-base);
		line-height: 1.7;
		color: var(--color-gray);
		margin-bottom: var(--spacing-lg);
	}

	.help-options {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin: var(--spacing-xl) 0;
	}

	.option-card {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		border-left: 4px solid var(--color-burnt-orange);
	}

	.option-card h4 {
		margin-bottom: var(--spacing-md);
	}

	.option-card p {
		margin-bottom: var(--spacing-md);
	}

	.option-card ul {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--spacing-md) 0;
	}

	.option-card li {
		padding: var(--spacing-xs) 0;
		padding-left: var(--spacing-md);
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		position: relative;
		line-height: 1.6;
	}

	.option-card li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
	}

	.button-group {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-md);
		margin-top: var(--spacing-lg);
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

	.involvement-sidebar {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.stat-box {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		text-align: center;
		border: 2px solid var(--color-burnt-orange);
	}

	.stat-number {
		font-family: var(--font-family-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		color: var(--color-burnt-orange);
		margin-bottom: var(--spacing-sm);
	}

	.stat-box p {
		margin: 0;
		font-size: var(--font-size-base);
		color: var(--color-gray);
		line-height: 1.5;
	}

	.info-box {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
	}

	.info-box h4 {
		font-size: var(--font-size-base);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.info-box ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.info-box li {
		padding: var(--spacing-xs) 0;
		padding-left: var(--spacing-md);
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		position: relative;
		line-height: 1.5;
	}

	.info-box li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-burnt-orange);
		font-weight: 700;
	}

	.final-cta {
		background: var(--color-cream);
		padding: clamp(3rem, 6vh, 5rem) var(--spacing-2xl);
		border-radius: 12px;
		text-align: center;
		margin-top: clamp(4rem, 8vh, 6rem);
	}

	.final-cta h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-lg);
	}

	.final-cta p {
		font-size: var(--font-size-lg);
		line-height: 1.7;
		color: var(--color-gray);
		max-width: 700px;
		margin: 0 auto var(--spacing-2xl);
	}

	.final-cta .button-group {
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 768px) {
		.help-options {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.involvement-grid {
			grid-template-columns: 1fr;
		}

		.help-options {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
