<script lang="ts">
	const partners = [
		{ name: 'UNSW Sydney', logo: '/partners/unsw.svg' },
		{ name: 'Conservation International', logo: '/partners/conservation-intl.svg' },
		{ name: 'The Nature Conservancy', logo: '/partners/tnc.svg' },
		{ name: 'World Wildlife Fund', logo: '/partners/wwf.svg' },
		{ name: 'University of Papua', logo: '/partners/unipa.svg' },
		{ name: 'Indonesian Ministry of Marine Affairs', logo: '/partners/ministry.svg' }
	];
</script>

<section class="partners">
	<div class="partners__container">
		<div class="section-label" style="text-align: center;">[ OUR PARTNERS ]</div>
		<h2 class="partners__title">Working Together for Marine Conservation</h2>

		<div class="partners__carousel">
			<div class="partners__track">
				{#each [...partners, ...partners] as partner}
					<div class="partner-logo">
						<img src={partner.logo} alt={partner.name} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.partners {
		background: var(--color-off-white);
		padding: clamp(3rem, 6vh, 4rem) 0;
		overflow: hidden;
	}

	.partners__container {
		max-width: var(--max-width-wide);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.partners__title {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 600;
		text-align: center;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-3xl);
	}

	.partners__carousel {
		position: relative;
		width: 100%;
		overflow: hidden;
		mask-image: linear-gradient(
			to right,
			transparent,
			black 10%,
			black 90%,
			transparent
		);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent,
			black 10%,
			black 90%,
			transparent
		);
	}

	.partners__track {
		display: flex;
		gap: var(--spacing-3xl);
		animation: scroll 30s linear infinite;
		will-change: transform;
	}

	.partner-logo {
		flex-shrink: 0;
		width: 160px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-md);
	}

	.partner-logo img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
		filter: grayscale(100%) opacity(0.6);
		transition: filter 0.3s ease;
	}

	.partner-logo:hover img {
		filter: grayscale(0%) opacity(1);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.partners__track:hover {
		animation-play-state: paused;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.partner-logo {
			width: 180px;
			height: 90px;
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.partners {
			padding: clamp(4rem, 8vh, 5rem) 0;
		}

		.partner-logo {
			width: 200px;
			height: 100px;
		}
	}
</style>
