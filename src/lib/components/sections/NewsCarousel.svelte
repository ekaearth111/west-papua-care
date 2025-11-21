<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let scrollContainer: HTMLElement;
	let autoScrollInterval: number;

	const news = [
		{
			date: 'March 2024',
			title: 'Community Consultation Series Completes Successfully',
			excerpt: 'Over 200 community members from 12 villages participated in our comprehensive consultation process, establishing the foundation for community-led governance.',
			image: '/news/consultation.jpg',
			href: '/news/consultation-2024'
		},
		{
			date: 'February 2024',
			title: 'Reef Check Monitoring Shows Promising Results',
			excerpt: 'Our first quarterly survey revealed 85% live coral cover in designated protection zones, exceeding regional averages and demonstrating the area\'s exceptional health.',
			image: '/news/reef-check.jpg',
			href: '/news/reef-check-feb-2024'
		},
		{
			date: 'January 2024',
			title: 'MPA Committee Formed with Traditional Leaders',
			excerpt: 'The newly formed Marine Protected Area Committee brings together traditional leaders, youth representatives, and women\'s groups to guide conservation efforts.',
			image: '/news/committee.jpg',
			href: '/news/committee-formation'
		},
		{
			date: 'December 2023',
			title: 'Partnership with UNSW Sydney Established',
			excerpt: 'Academic collaboration brings cutting-edge marine science research to support community-led conservation initiatives in Raja Ampat.',
			image: '/news/unsw-partnership.jpg',
			href: '/news/unsw-partnership'
		}
	];

	function scrollLeft() {
		if (scrollContainer) {
			scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
		}
	}

	function scrollRight() {
		if (scrollContainer) {
			scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
		}
	}

	onMount(() => {
		// Auto-scroll every 5 seconds
		autoScrollInterval = window.setInterval(() => {
			if (scrollContainer) {
				const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
				if (scrollContainer.scrollLeft >= maxScroll) {
					scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
				} else {
					scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
				}
			}
		}, 5000);
	});

	onDestroy(() => {
		if (autoScrollInterval) {
			clearInterval(autoScrollInterval);
		}
	});
</script>

<section class="news-carousel">
	<div class="news-carousel__container">
		<div class="news-carousel__header">
			<div>
				<div class="section-label">[ LATEST NEWS ]</div>
				<h2 class="news-carousel__title">Project Updates</h2>
				<p class="news-carousel__subtitle">
					Stay informed about our conservation milestones and community achievements
				</p>
			</div>

			<div class="news-carousel__controls">
				<button
					class="carousel-control"
					onclick={scrollLeft}
					aria-label="Scroll left"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</button>
				<button
					class="carousel-control"
					onclick={scrollRight}
					aria-label="Scroll right"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</button>
			</div>
		</div>

		<div class="news-carousel__track" bind:this={scrollContainer}>
			{#each news as item}
				<article class="news-card">
					<div class="news-card__image">
						<img src={item.image} alt={item.title} />
					</div>
					<div class="news-card__content">
						<time class="news-card__date">{item.date}</time>
						<h3 class="news-card__title">{item.title}</h3>
						<p class="news-card__excerpt">{item.excerpt}</p>
						<div class="news-card__action">
							<Button variant="text" size="sm" href={item.href}>
								Read More
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</Button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.news-carousel {
		background: var(--color-off-white);
		padding: clamp(5rem, 10vh, 8rem) 0;
	}

	.news-carousel__container {
		max-width: var(--max-width-wide);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.news-carousel__header {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
		margin-bottom: clamp(2rem, 4vh, 3rem);
	}

	.news-carousel__title {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.news-carousel__subtitle {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.7;
		color: var(--color-gray);
		max-width: 600px;
	}

	.news-carousel__controls {
		display: flex;
		gap: var(--spacing-md);
	}

	.carousel-control {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: 2px solid var(--color-burnt-orange);
		background: transparent;
		color: var(--color-burnt-orange);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all var(--transition);
	}

	.carousel-control:hover {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		transform: scale(1.05);
	}

	.carousel-control svg {
		width: 24px;
		height: 24px;
	}

	.news-carousel__track {
		display: flex;
		gap: var(--spacing-xl);
		overflow-x: auto;
		scroll-behavior: smooth;
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding-bottom: var(--spacing-lg);
	}

	.news-carousel__track::-webkit-scrollbar {
		display: none;
	}

	.news-carousel__track:hover {
		cursor: grab;
	}

	.news-carousel__track:active {
		cursor: grabbing;
	}

	.news-card {
		flex: 0 0 auto;
		width: 100%;
		max-width: 380px;
		background: var(--color-cream);
		border: 1px solid var(--color-light-gray);
		border-radius: 1rem;
		overflow: hidden;
		transition: all var(--transition);
		display: flex;
		flex-direction: column;
	}

	.news-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-burnt-orange);
	}

	.news-card__image {
		width: 100%;
		height: 220px;
		overflow: hidden;
		background: var(--color-light-gray);
		position: relative;
	}

	.news-card__image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.news-card:hover .news-card__image img {
		transform: scale(1.05);
	}

	/* Placeholder styling for missing images */
	.news-card__image img[src*='.jpg']:not([src*='http']) {
		background: linear-gradient(135deg, var(--color-sage-light) 0%, var(--color-forest-green) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.news-card__content {
		padding: var(--spacing-xl);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		flex-grow: 1;
	}

	.news-card__date {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-sm);
		font-weight: 500;
		color: var(--color-burnt-orange);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.news-card__title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		line-height: 1.3;
		margin: 0;
	}

	.news-card__excerpt {
		font-size: var(--font-size-base);
		line-height: 1.6;
		color: var(--color-gray);
		margin: 0;
		flex-grow: 1;
	}

	.news-card__action {
		margin-top: var(--spacing-sm);
	}

	.news-card__action :global(button),
	.news-card__action :global(a) {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-xs);
	}

	.news-card__action :global(svg) {
		width: 16px;
		height: 16px;
		transition: transform var(--transition);
	}

	.news-card__action :global(button:hover svg),
	.news-card__action :global(a:hover svg) {
		transform: translateX(4px);
	}

	/* Tablet */
	@media (min-width: 768px) {
		.news-carousel__header {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}

		.news-card {
			max-width: 360px;
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.news-carousel__container {
			padding: 0 var(--spacing-2xl);
		}

		.news-card {
			max-width: 380px;
		}
	}
</style>
