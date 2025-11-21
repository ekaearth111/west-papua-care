<script lang="ts">
	const team = [
		{
			name: 'Kaspar Elias Anderegg',
			role: 'Founder',
			bio: 'West Papua Care\'s founder has lived in Indonesia for 10 years. As an expedition leader, he regularly visits the tribes and wilderness of West Papua, deeply connecting with their cultures. Motivated initially by adventure, Elias has since dedicated himself to humanitarian and conservation efforts to support these communities and ecosystems.',
			image: '/images/team/elias.jpg'
		},
		{
			name: 'Syarif Loji',
			role: 'Regional Manager',
			bio: 'Born in Misool with both his love for nature and his desire to protect it for future generations. His decade-long partnership with Elias Anderegg and his work as a ranger for the Misool Baseftin MPA has further raised his awareness about global ecological issues and protecting crucial ecosystems.',
			image: '/images/team/syarif.jpg'
		}
	];

	const advisors = [];
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ OUR PEOPLE ]</div>
		<h1 class="page-hero__title">Meet the People Behind the Mission</h1>
		<p class="page-hero__subtitle">
			Combining marine science, community organizing, and traditional knowledge
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="intro-text">
			<p>
				Our team combines on-the-ground conservation experience with deep cultural connections to West Papua. We work in close partnership with traditional leaders, community members, and the 15-person MPA Committee to establish community-led marine protection areas in Misool, Raja Ampat.
			</p>
		</div>

		<h2 class="section-title">Core Team</h2>
		<div class="team-grid">
			{#each team as member}
				<div class="team-card">
					<div class="team-photo">
						<div class="photo-placeholder"></div>
					</div>
					<div class="team-info">
						<h3 class="member-name">{member.name}</h3>
						<div class="member-role">{member.role}</div>
						<p class="member-bio">{member.bio}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="join-box">
			<div class="section-label">[ GET INVOLVED ]</div>
			<h2>Join Us in Protecting the Amazon of the Seas</h2>
			<p>
				Traditional indigenous governance meets conservation science to safeguard the world's most biodiverse marine ecosystem for generations to come
			</p>
			<a href="/get-involved" class="join-link">Support Our Mission</a>
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

	.team-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-2xl);
		margin-bottom: clamp(4rem, 8vh, 6rem);
	}

	.team-card {
		background: var(--color-cream);
		border-radius: 8px;
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr;
		transition: all 0.3s ease;
	}

	.team-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.team-photo {
		background: linear-gradient(135deg, var(--color-forest-green-deep) 0%, var(--color-forest-green) 100%);
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.photo-placeholder {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		border: 4px solid var(--color-off-white);
	}

	.team-info {
		padding: var(--spacing-xl);
	}

	.member-name {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-xs);
	}

	.member-role {
		font-size: var(--font-size-base);
		font-weight: 600;
		color: var(--color-burnt-orange);
		margin-bottom: var(--spacing-md);
	}

	.member-bio {
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
		margin: 0;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin-bottom: clamp(4rem, 8vh, 6rem);
	}

	.advisor-card {
		background: var(--color-cream);
		padding: var(--spacing-xl);
		border-radius: 8px;
		border-left: 4px solid var(--color-burnt-orange);
	}

	.advisor-card h4 {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-xs);
	}

	.advisor-role {
		font-size: var(--font-size-base);
		font-weight: 500;
		color: var(--color-burnt-orange);
		margin-bottom: var(--spacing-xs);
	}

	.advisor-affiliation {
		font-size: var(--font-size-sm);
		color: var(--color-gray);
	}

	.join-box {
		background: var(--color-cream);
		padding: clamp(3rem, 6vh, 5rem) var(--spacing-2xl);
		border-radius: 12px;
		text-align: center;
	}

	.join-box h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.join-box p {
		font-size: var(--font-size-lg);
		line-height: 1.6;
		color: var(--color-gray);
		max-width: 600px;
		margin: 0 auto var(--spacing-xl);
	}

	.join-link {
		display: inline-block;
		padding: var(--spacing-md) var(--spacing-2xl);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		text-decoration: none;
		font-family: var(--font-family-heading);
		font-weight: 600;
		font-size: var(--font-size-lg);
		border-radius: 4px;
		transition: all 0.2s ease;
	}

	.join-link:hover {
		background: #b8580c;
	}

	@media (min-width: 768px) {
		.team-card {
			grid-template-columns: 250px 1fr;
		}

		.team-photo {
			height: auto;
		}

		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.team-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.team-card {
			grid-template-columns: 1fr;
		}

		.team-photo {
			height: 300px;
		}

		.advisors-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
