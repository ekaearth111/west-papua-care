<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	const newsItems = [
		{
			slug: 'mpa-committee-first-quarter',
			date: '2024-12-15',
			category: 'Project Update',
			title: 'MPA Committee Successfully Completes First Quarter',
			excerpt: '15-member committee meets monthly, makes key decisions on patrol protocols and benefit-sharing mechanisms. Strong consensus across participating villages.',
			image: '/images/news/committee.jpg'
		},
		{
			slug: 'baseline-survey-results',
			date: '2024-11-20',
			category: 'Science',
			title: 'Baseline Survey Results Published',
			excerpt: 'Comprehensive reef health assessment across 15 monitoring sites reveals 42% coral cover and establishes benchmarks for measuring recovery.',
			image: '/images/news/survey.jpg'
		},
		{
			slug: 'reef-check-training',
			date: '2024-10-08',
			category: 'Community',
			title: '12 Community Members Complete Reef Check Training',
			excerpt: 'First cohort of local surveyors certified in international monitoring protocols, building local capacity for long-term reef assessment.',
			image: '/images/news/training.jpg'
		},
		{
			slug: 'community-consensus',
			date: '2024-09-15',
			category: 'Milestone',
			title: 'Strong Community Consensus Achieved',
			excerpt: 'After extensive FPIC consultations across 10+ villages, traditional leaders and community members endorse MPA establishment.',
			image: '/images/news/consensus.jpg'
		},
		{
			slug: 'conservation-international-partnership',
			date: '2024-08-01',
			category: 'Partnership',
			title: 'Research Collaboration with Conservation International',
			excerpt: 'New partnership brings technical expertise and regional network to strengthen community-led conservation approach.',
			image: '/images/news/partnership.jpg'
		},
		{
			slug: 'district-government-support',
			date: '2024-07-10',
			category: 'Policy',
			title: 'District Government Expresses Support for MPA',
			excerpt: 'Local government officials visit project sites, meet with communities, and commit to supporting official designation process.',
			image: '/images/news/government.jpg'
		}
	];

	const ITEMS_PER_PAGE = 4;
	let currentPage = $state(1);

	$effect(() => {
		// Scroll to top when page changes
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const displayedItems = newsItems.slice(startIndex, endIndex);

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ NEWS & UPDATES ]</div>
		<h1 class="page-hero__title">Latest from the Field</h1>
		<p class="page-hero__subtitle">
			Project updates, conservation milestones, and stories from Raja Ampat's communities
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="news-grid">
			{#each displayedItems as item}
				<article class="news-card">
					<div class="news-image">
						<div class="news-category">{item.category}</div>
					</div>
					<div class="news-content">
						<div class="news-meta">
							<time datetime={item.date}>{formatDate(item.date)}</time>
						</div>
						<h2 class="news-title">{item.title}</h2>
						<p class="news-excerpt">{item.excerpt}</p>
						<a href="/news/{item.slug}" class="news-link">Read More →</a>
					</div>
				</article>
			{/each}
		</div>

		{#if totalPages > 1}
			<div class="pagination">
				<button
					class="pagination-btn"
					onclick={prevPage}
					disabled={currentPage === 1}
				>
					← Previous
				</button>
				<div class="pagination-info">
					Page {currentPage} of {totalPages}
				</div>
				<button
					class="pagination-btn"
					onclick={nextPage}
					disabled={currentPage === totalPages}
				>
					Next →
				</button>
			</div>
		{/if}

		<div class="newsletter-signup">
			<div class="newsletter-content">
				<h2>Stay Updated</h2>
				<p>Receive quarterly updates on our conservation work, reef monitoring results, and community impact stories.</p>
				<form class="newsletter-form">
					<input type="email" placeholder="Enter your email" class="email-input" required />
					<Button variant="primary" size="md">Subscribe</Button>
				</form>
				<p class="newsletter-note">We respect your privacy. Unsubscribe anytime.</p>
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

	.news-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-2xl);
		margin-bottom: clamp(4rem, 8vh, 6rem);
	}

	.news-card {
		background: var(--color-cream);
		border-radius: 8px;
		overflow: hidden;
		transition: all 0.3s ease;
		display: grid;
		grid-template-columns: 1fr;
	}

	.news-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.news-image {
		background: linear-gradient(135deg, var(--color-forest-green-deep) 0%, var(--color-forest-green) 100%);
		height: 200px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.news-category {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		padding: var(--spacing-xs) var(--spacing-md);
		border-radius: 4px;
		font-size: var(--font-size-sm);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.news-content {
		padding: var(--spacing-xl);
	}

	.news-meta {
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		margin-bottom: var(--spacing-sm);
	}

	.news-title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
		line-height: 1.3;
	}

	.news-excerpt {
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
		margin-bottom: var(--spacing-md);
	}

	.news-link {
		display: inline-flex;
		align-items: center;
		color: var(--color-burnt-orange);
		text-decoration: none;
		font-weight: 500;
		font-size: var(--font-size-base);
		transition: color 0.2s ease;
	}

	.news-link:hover {
		color: var(--color-charcoal);
	}

	.newsletter-signup {
		background: var(--color-cream);
		padding: clamp(3rem, 6vh, 5rem) var(--spacing-2xl);
		border-radius: 12px;
		text-align: center;
	}

	.newsletter-content h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.newsletter-content > p {
		font-size: var(--font-size-lg);
		line-height: 1.6;
		color: var(--color-gray);
		max-width: 600px;
		margin: 0 auto var(--spacing-xl);
	}

	.newsletter-form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		max-width: 500px;
		margin: 0 auto var(--spacing-md);
	}

	.email-input {
		padding: var(--spacing-md) var(--spacing-lg);
		border: 2px solid var(--color-light-gray);
		border-radius: 8px;
		font-size: var(--font-size-base);
		transition: border-color 0.2s ease;
	}

	.email-input:focus {
		outline: none;
		border-color: var(--color-burnt-orange);
	}

	.newsletter-note {
		font-size: var(--font-size-sm);
		color: var(--color-gray);
		font-style: italic;
	}

	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-3xl);
		padding: var(--spacing-xl) 0;
	}

	.pagination-btn {
		padding: var(--spacing-sm) var(--spacing-lg);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		border: none;
		border-radius: 4px;
		font-family: var(--font-family-heading);
		font-size: var(--font-size-base);
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.pagination-btn:hover:not(:disabled) {
		background: #b8580c;
		transform: translateY(-2px);
	}

	.pagination-btn:disabled {
		background: var(--color-light-gray);
		color: var(--color-gray);
		cursor: not-allowed;
		transform: none;
	}

	.pagination-info {
		font-size: var(--font-size-base);
		color: var(--color-charcoal);
		font-weight: 500;
		min-width: 120px;
		text-align: center;
	}

	@media (min-width: 768px) {
		.news-card {
			grid-template-columns: 300px 1fr;
		}

		.news-image {
			height: auto;
		}

		.newsletter-form {
			flex-direction: row;
		}

		.email-input {
			flex: 1;
		}
	}

	@media (min-width: 1024px) {
		.news-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.news-card {
			grid-template-columns: 1fr;
		}

		.news-image {
			height: 200px;
		}
	}
</style>
