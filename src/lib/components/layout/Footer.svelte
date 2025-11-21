<script lang="ts">
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ href: '/about', label: 'Our Story' },
		{ href: '/project', label: 'Project Overview' },
		{ href: '/impact', label: 'Impact Framework' },
		{ href: '/news', label: 'Blog' },
		{ href: 'mailto:westpapuacare@gmail.com', label: 'Contact' }
	];

	const getInvolvedLinks = [
		{ href: '/get-involved#funders', label: 'For Funding Partners' },
		{ href: '/get-involved#researchers', label: 'For Researchers' },
		{ href: '/get-involved#partners', label: 'For Organisations' },
		{ href: '/get-involved#supporters', label: 'For Individuals' }
	];

	const socialLinks = [
		{
			href: 'mailto:westpapuacare@gmail.com',
			label: 'Email',
			icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
		},
		{
			href: 'https://www.instagram.com/westpapuacareorg',
			label: 'Instagram',
			icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
		},
		{
			href: 'https://www.youtube.com/@WestPapuaCare',
			label: 'YouTube',
			icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
		}
	];

	let email = $state('');
	let isSubmitting = $state(false);
	let submitMessage = $state('');

	async function handleNewsletterSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));

		submitMessage = 'Thank you for subscribing!';
		email = '';
		isSubmitting = false;

		setTimeout(() => {
			submitMessage = '';
		}, 3000);
	}
</script>

<footer class="footer">
	<div class="footer__container">
		<div class="footer__grid">
			<div class="footer__column">
				<div class="footer__logo">
					<img src="/logo.png" alt="West Papua Care" class="logo" />
				</div>
				<p class="footer__tagline">
					Traditional indigenous governance meets conservation science
				</p>
				<div class="footer__social">
					{#each socialLinks as social}
						<a
							href={social.href}
							class="social-link"
							aria-label={social.label}
							target="_blank"
							rel="noopener noreferrer"
						>
							{@html social.icon}
						</a>
					{/each}
				</div>
			</div>

			<div class="footer__column">
				<h4 class="footer__heading">Quick Links</h4>
				<ul class="footer__list">
					{#each quickLinks as link}
						<li class="footer__item">
							<a href={link.href} class="footer__link">{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="footer__column">
				<h4 class="footer__heading">Get Involved</h4>
				<ul class="footer__list">
					{#each getInvolvedLinks as link}
						<li class="footer__item">
							<a href={link.href} class="footer__link">{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="footer__column">
				<a href="/contact" class="footer__donate-button">Donate</a>
				<div class="footer__newsletter">
					<h5 class="newsletter__heading">Newsletter</h5>
					<form class="newsletter__form" onsubmit={handleNewsletterSubmit}>
						<input
							type="email"
							class="newsletter__input"
							placeholder="Enter your email"
							bind:value={email}
							required
							disabled={isSubmitting}
						/>
						<button type="submit" class="newsletter__button" disabled={isSubmitting}>
							{isSubmitting ? 'Subscribing...' : 'Subscribe'}
						</button>
					</form>
					{#if submitMessage}
						<p class="newsletter__message">{submitMessage}</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="footer__bottom">
			<p class="footer__copyright">
				© {currentYear} West Papua Care. All rights reserved.
			</p>
			<div class="footer__legal">
				<a href="/privacy" class="footer__link">Privacy Policy</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-forest-green);
		color: rgba(255, 255, 255, 0.8);
		padding: clamp(4rem, 8vh, 6rem) 0 var(--spacing-xl);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.footer__container {
		max-width: var(--max-width-wide);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.footer__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
		margin-bottom: var(--spacing-3xl);
	}

	.footer__column {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.footer__logo {
		margin-bottom: var(--spacing-sm);
	}

	.logo {
		height: 40px;
		width: auto;
		display: block;
		filter: brightness(0) invert(1);
	}

	.footer__tagline {
		font-size: var(--font-size-sm);
		line-height: 1.6;
		color: var(--color-off-white);
		max-width: 320px;
	}

	.footer__social {
		display: flex;
		gap: var(--spacing-md);
		margin-top: var(--spacing-sm);
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		color: var(--color-off-white);
		text-decoration: none;
		transition: all var(--transition);
	}

	.social-link:hover {
		background: var(--color-burnt-orange);
		border-color: var(--color-burnt-orange);
		transform: translateY(-2px);
	}

	.social-link :global(svg) {
		width: 20px;
		height: 20px;
	}

	.footer__heading {
		font-size: var(--font-size-base);
		font-weight: 600;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-md);
	}

	.footer__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.footer__item {
		margin: 0;
	}

	.footer__link {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		transition: color var(--transition-fast);
		font-size: var(--font-size-sm);
	}

	.footer__link:hover {
		color: var(--color-off-white);
	}

	.footer__contact {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		font-size: var(--font-size-sm);
	}

	.footer__contact p {
		margin: 0;
		line-height: 1.6;
	}

	.footer__contact strong {
		color: var(--color-off-white);
	}

	.footer__donate-button {
		display: inline-block;
		padding: var(--spacing-md) var(--spacing-2xl);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		font-family: var(--font-family-heading);
		font-size: var(--font-size-base);
		font-weight: 600;
		text-decoration: none;
		border-radius: 4px;
		transition: all var(--transition-fast);
		text-align: center;
	}

	.footer__donate-button:hover {
		background: #b8580c;
		transform: translateY(-2px);
	}

	.footer__newsletter {
		margin-top: var(--spacing-xl);
	}

	.newsletter__heading {
		font-size: var(--font-size-base);
		font-weight: 600;
		color: var(--color-off-white);
		margin-bottom: var(--spacing-md);
	}

	.newsletter__form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.newsletter__input {
		padding: var(--spacing-sm) var(--spacing-md);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		font-family: var(--font-family-sans);
		font-size: var(--font-size-sm);
		background: rgba(255, 255, 255, 0.05);
		color: var(--color-off-white);
	}

	.newsletter__input::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	.newsletter__input:focus {
		outline: none;
		border-color: var(--color-burnt-orange);
		background: rgba(255, 255, 255, 0.08);
	}

	.newsletter__button {
		padding: var(--spacing-sm) var(--spacing-md);
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		border: none;
		border-radius: 4px;
		font-family: var(--font-family-heading);
		font-size: var(--font-size-sm);
		font-weight: 600;
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.newsletter__button:hover:not(:disabled) {
		background: #b8580c;
	}

	.newsletter__button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.newsletter__message {
		margin-top: var(--spacing-sm);
		font-size: var(--font-size-sm);
		color: var(--color-burnt-orange);
	}

	.footer__bottom {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		padding-top: var(--spacing-xl);
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		text-align: center;
		font-size: var(--font-size-sm);
	}

	.footer__copyright {
		margin: 0;
		color: var(--color-off-white);
	}

	.footer__legal {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-sm);
	}

	.footer__separator {
		color: var(--color-off-white);
		opacity: 0.5;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.footer__grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.newsletter__form {
			flex-direction: row;
		}

		.newsletter__input {
			flex: 1;
		}

		.footer__bottom {
			flex-direction: row;
			justify-content: space-between;
			text-align: left;
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.footer__grid {
			grid-template-columns: 2fr repeat(3, 1fr);
		}

		.footer__container {
			padding: 0 var(--spacing-xl);
		}
	}
</style>
