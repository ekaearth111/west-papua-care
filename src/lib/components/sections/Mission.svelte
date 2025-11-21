<section class="mission">
	<div class="mission__container">
		<div class="mission__grid">
			<div class="mission__image">
				<!-- Placeholder for community meeting photo -->
				<div class="placeholder-image">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
						<circle cx="8.5" cy="8.5" r="1.5"/>
						<polyline points="21 15 16 10 5 21"/>
					</svg>
					<span>Community Photo</span>
				</div>
			</div>

			<div class="mission__content">
				<div class="section-label">[ OUR MISSION ]</div>
				<div class="mission__quote">
					<div class="quote-mark">
						<svg viewBox="0 0 24 24" fill="currentColor">
							<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
						</svg>
					</div>
					<blockquote>
						Our mission is to combine conservation work with real community collaboration and development in the provinces of Papua. Our ecosystems can only thrive in the long-term, if people have a chance to prosper too.
					</blockquote>
					<cite>— West Papua Care</cite>
				</div>

				<p class="mission__text">
					We're establishing a community-led No-Take Zone Marine Protected Area that benefits both marine ecosystems and neighboring fishing communities by boosting fish populations through spillover, securing food resources, enhancing ecotourism potential, and strengthening climate resilience through healthy habitats.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.mission {
		background: var(--color-off-white);
		padding: clamp(4rem, 8vh, 6rem) 0;
	}

	.mission__container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.mission__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
		align-items: center;
	}

	.mission__image {
		width: 100%;
		height: 100%;
		min-height: 400px;
		border-radius: 4px;
		overflow: hidden;
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		background: var(--color-cream);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-md);
		color: var(--color-gray);
	}

	.placeholder-image svg {
		width: 48px;
		height: 48px;
		opacity: 0.3;
	}

	.placeholder-image span {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-sm);
		opacity: 0.5;
	}

	.mission__content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.mission__quote {
		position: relative;
	}

	.quote-mark {
		width: 48px;
		height: 48px;
		color: var(--color-burnt-orange);
		margin-bottom: var(--spacing-md);
		opacity: 0.7;
	}

	.quote-mark svg {
		width: 100%;
		height: 100%;
	}

	blockquote {
		font-family: var(--font-family-sans);
		font-size: clamp(1.375rem, 2.5vw, 1.625rem);
		font-style: normal;
		line-height: 1.7;
		color: var(--color-charcoal);
		margin: 0;
		padding: 0;
		font-weight: 400;
	}

	cite {
		display: block;
		margin-top: var(--spacing-lg);
		font-family: var(--font-family-heading);
		font-size: var(--font-size-base);
		font-style: normal;
		font-weight: 500;
		color: var(--color-gray);
	}

	.mission__text {
		font-size: clamp(1.125rem, 2vw, 1.25rem);
		line-height: 1.7;
		color: var(--color-gray);
	}

	/* Tablet and above */
	@media (min-width: 768px) {
		.mission__grid {
			grid-template-columns: 1fr 1fr;
			gap: clamp(3rem, 6vw, 5rem);
		}

		.mission__image {
			min-height: 450px;
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.mission {
			padding: clamp(5rem, 10vh, 8rem) 0;
		}

		.mission__container {
			padding: 0 var(--spacing-2xl);
		}

		.mission__image {
			min-height: 500px;
		}
	}
</style>
