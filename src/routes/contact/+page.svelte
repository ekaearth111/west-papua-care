<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="page-hero">
	<div class="page-hero__container">
		<div class="section-label">[ CONTACT US ]</div>
		<h1 class="page-hero__title">Get in Touch</h1>
		<p class="page-hero__subtitle">
			Questions, partnership inquiries, or just want to learn more? We'd love to hear from you.
		</p>
	</div>
</section>

<section class="content-section">
	<div class="content-container">
		<div class="contact-grid">
			<div class="contact-form-section">
				<h2>Send Us a Message</h2>
				<form class="contact-form">
					<div class="form-group">
						<label for="name">Name *</label>
						<input type="text" id="name" name="name" required />
					</div>

					<div class="form-group">
						<label for="email">Email *</label>
						<input type="email" id="email" name="email" required />
					</div>

					<div class="form-group">
						<label for="subject">Subject *</label>
						<select id="subject" name="subject" required>
							<option value="">Select a subject</option>
							<option value="general">General Inquiry</option>
							<option value="partnership">Partnership Opportunity</option>
							<option value="research">Research Collaboration</option>
							<option value="donation">Donation Questions</option>
							<option value="volunteer">Volunteer Opportunities</option>
							<option value="media">Media Inquiry</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div class="form-group">
						<label for="message">Message *</label>
						<textarea id="message" name="message" rows="6" required></textarea>
					</div>

					<Button variant="primary" size="lg">Send Message</Button>
				</form>
			</div>

			<aside class="contact-info-section">
				<div class="info-card">
					<h3>Contact Information</h3>
					<div class="contact-details">
						<div class="contact-item">
							<div class="contact-icon">📧</div>
							<div>
								<div class="contact-label">Email</div>
								<a href="mailto:westpapuacare@gmail.com" class="contact-link">westpapuacare@gmail.com</a>
							</div>
						</div>
						<div class="contact-item">
							<div class="contact-icon">💬</div>
							<div>
								<div class="contact-label">WhatsApp</div>
								<a href="https://wa.me/6282266608012" class="contact-link">+62 822 6660 8012</a>
							</div>
						</div>
						<div class="contact-item">
							<div class="contact-icon">📍</div>
							<div>
								<div class="contact-label">Location</div>
								<div class="contact-text">Misool, Raja Ampat, West Papua<br />Indonesia</div>
							</div>
						</div>
						<div class="contact-item">
							<div class="contact-icon">🕐</div>
							<div>
								<div class="contact-label">Response Time</div>
								<div class="contact-text">Within 48 hours</div>
							</div>
						</div>
					</div>
				</div>

				<div class="info-card">
					<h3>Quick Links</h3>
					<ul class="quick-links">
						<li><a href="/get-involved">Ways to Get Involved</a></li>
						<li><a href="/about/team">Meet Our Team</a></li>
						<li><a href="/about/partners">Partner Organizations</a></li>
						<li><a href="/news">Latest News & Updates</a></li>
					</ul>
				</div>

				<div class="info-card">
					<h3>Donation Information</h3>
					<div class="specific-contacts">
						<div class="specific-item">
							<strong>Account Name:</strong>
							<div class="contact-text">Elias Anderegg</div>
						</div>
						<div class="specific-item">
							<strong>IBAN:</strong>
							<div class="contact-text">GB48 REVO 00 9970 2069 3677</div>
						</div>
						<div class="specific-item">
							<strong>BIC/SWIFT Code:</strong>
							<div class="contact-text">REVOGB21</div>
						</div>
						<div class="specific-item">
							<strong>For questions:</strong>
							<a href="mailto:westpapuacare@gmail.com">westpapuacare@gmail.com</a>
						</div>
					</div>
				</div>

				<div class="info-card social-card">
					<h3>Follow Our Work</h3>
					<p>Stay updated on our conservation efforts and community impact stories.</p>
					<div class="social-links">
						<a href="#" class="social-button" aria-label="Facebook">Facebook</a>
						<a href="#" class="social-button" aria-label="Instagram">Instagram</a>
						<a href="#" class="social-button" aria-label="Twitter">Twitter</a>
					</div>
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

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-3xl);
	}

	.contact-form-section h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-xl);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.form-group label {
		font-size: var(--font-size-base);
		font-weight: 500;
		color: var(--color-charcoal);
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		padding: var(--spacing-md);
		border: 2px solid var(--color-light-gray);
		border-radius: 8px;
		font-size: var(--font-size-base);
		font-family: inherit;
		transition: border-color 0.2s ease;
		background: var(--color-cream);
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--color-burnt-orange);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 150px;
	}

	.contact-info-section {
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

	.contact-details {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.contact-item {
		display: flex;
		gap: var(--spacing-md);
		align-items: flex-start;
	}

	.contact-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.contact-label {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-burnt-orange);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--spacing-xs);
	}

	.contact-link {
		color: var(--color-charcoal);
		text-decoration: none;
		font-size: var(--font-size-base);
		transition: color 0.2s ease;
	}

	.contact-link:hover {
		color: var(--color-burnt-orange);
	}

	.contact-text {
		font-size: var(--font-size-base);
		color: var(--color-gray);
		line-height: 1.5;
	}

	.quick-links {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.quick-links a {
		display: block;
		padding: var(--spacing-sm) var(--spacing-md);
		color: var(--color-charcoal);
		text-decoration: none;
		border-radius: 4px;
		transition: all 0.2s ease;
		font-size: var(--font-size-base);
	}

	.quick-links a:hover {
		background: var(--color-off-white);
		color: var(--color-burnt-orange);
	}

	.specific-contacts {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.specific-item {
		font-size: var(--font-size-sm);
		line-height: 1.6;
	}

	.specific-item strong {
		display: block;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-xs);
	}

	.specific-item a {
		color: var(--color-burnt-orange);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.specific-item a:hover {
		color: var(--color-charcoal);
	}

	.social-card p {
		font-size: var(--font-size-base);
		color: var(--color-gray);
		line-height: 1.6;
		margin-bottom: var(--spacing-lg);
	}

	.social-links {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.social-button {
		padding: var(--spacing-sm) var(--spacing-lg);
		background: var(--color-off-white);
		color: var(--color-charcoal);
		text-decoration: none;
		border-radius: 8px;
		font-size: var(--font-size-sm);
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.social-button:hover {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		transform: translateY(-2px);
	}

	@media (min-width: 1024px) {
		.contact-grid {
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
