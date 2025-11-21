<script lang="ts">
	import { onMount } from 'svelte';

	let menuOpen = $state(false);
	let scrolled = $state(false);
	let activeDropdown = $state<string | null>(null);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.overflow = 'auto';
	}

	function toggleDropdown(dropdown: string) {
		activeDropdown = activeDropdown === dropdown ? null : dropdown;
	}

	const navigation = [
		{ href: '/', label: 'HOME' },
		{
			label: 'ABOUT',
			dropdown: [
				{ href: '/about', label: 'Our Story' },
				{ href: '/about/team', label: 'Our People' }
			]
		},
		{
			label: 'PROJECT',
			dropdown: [
				{ href: '/project', label: 'Project Overview' },
				{ href: '/approach', label: 'Our Approach' },
				{ href: '/impact', label: 'Impact Framework' }
			]
		},
		{ href: '/news', label: 'BLOG' },
		{ href: '/get-involved', label: 'GET INVOLVED' },
		{ href: '/contact', label: 'DONATE', isDonate: true }
	];
</script>

<header class="header {scrolled ? 'scrolled' : ''}">
	<div class="header__container">
		<!-- Logo -->
		<a href="/" class="header__logo" aria-label="West Papua Care Home">
			<img src="/logo.png" alt="West Papua Care" class="logo" />
		</a>

		<!-- Desktop Navigation -->
		<nav class="desktop-nav" aria-label="Main navigation">
			{#each navigation as item}
				{#if item.dropdown}
					<div class="nav-item nav-item--dropdown">
						<button
							class="nav-link"
							onclick={() => toggleDropdown(item.label)}
							aria-expanded={activeDropdown === item.label}
						>
							{item.label}
							<svg class="dropdown-icon {activeDropdown === item.label ? 'open' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</button>
						{#if activeDropdown === item.label}
							<div class="dropdown-menu">
								{#each item.dropdown as subItem}
									<a href={subItem.href} class="dropdown-link">{subItem.label}</a>
								{/each}
							</div>
						{/if}
					</div>
				{:else}
					<a href={item.href} class="nav-link {item.isDonate ? 'nav-link--donate' : ''}">{item.label}</a>
				{/if}
			{/each}
		</nav>

		<!-- Mobile Menu Toggle -->
		<button
			class="mobile-toggle"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
			onclick={toggleMenu}
		>
			<span class="hamburger-line {menuOpen ? 'open' : ''}"></span>
			<span class="hamburger-line {menuOpen ? 'open' : ''}"></span>
			<span class="hamburger-line {menuOpen ? 'open' : ''}"></span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<div class="mobile-menu">
			<nav class="mobile-nav" aria-label="Mobile navigation">
				{#each navigation as item, index}
					{#if item.dropdown}
						<div class="mobile-nav-group">
							<div class="mobile-nav-label">{item.label}</div>
							{#each item.dropdown as subItem}
								<a href={subItem.href} class="mobile-nav-link" onclick={closeMenu}>
									{subItem.label}
								</a>
							{/each}
						</div>
					{:else}
						<a href={item.href} class="mobile-nav-link {item.isDonate ? 'mobile-nav-link--donate' : ''}" onclick={closeMenu}>
							{item.label}
						</a>
					{/if}
				{/each}
			</nav>
		</div>
	{/if}
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		background: var(--color-forest-green-deep);
		transition: all 0.3s ease;
		z-index: var(--z-sticky);
	}

	.header.scrolled {
		background: rgba(31, 39, 32, 0.98);
		backdrop-filter: blur(12px);
		box-shadow: var(--shadow-md);
	}

	.header__container {
		max-width: var(--max-width-wide);
		margin: 0 auto;
		padding: var(--spacing-md) var(--spacing-xl);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-2xl);
	}

	.header__logo {
		text-decoration: none;
		display: flex;
		align-items: center;
		z-index: 10;
	}

	.logo {
		height: 36px;
		width: auto;
		filter: brightness(0) invert(1);
	}

	/* Desktop Navigation */
	.desktop-nav {
		display: none;
		flex: 1;
		justify-content: flex-end;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.nav-item {
		position: relative;
	}

	.nav-link {
		font-family: var(--font-family-heading);
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: var(--color-off-white);
		text-decoration: none;
		background: none;
		border: none;
		padding: var(--spacing-sm) var(--spacing-md);
		cursor: pointer;
		transition: color 0.3s ease;
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		white-space: nowrap;
	}

	.nav-link:hover {
		color: var(--color-burnt-orange);
	}

	.nav-link--donate {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		border-radius: 4px;
		padding: var(--spacing-sm) var(--spacing-lg);
		font-weight: 600;
	}

	.nav-link--donate:hover {
		background: #b8580c;
		color: var(--color-off-white);
	}

	.dropdown-icon {
		width: 16px;
		height: 16px;
		transition: transform 0.3s ease;
	}

	.dropdown-icon.open {
		transform: rotate(180deg);
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 0;
		min-width: 200px;
		background: var(--color-off-white);
		border-radius: 8px;
		box-shadow: var(--shadow-lg);
		padding: var(--spacing-sm);
		margin-top: var(--spacing-sm);
		animation: dropdown-appear 0.2s ease-out;
	}

	.dropdown-link {
		display: block;
		padding: var(--spacing-sm) var(--spacing-md);
		font-size: 0.875rem;
		color: var(--color-charcoal);
		text-decoration: none;
		border-radius: 4px;
		transition: all 0.2s ease;
	}

	.dropdown-link:hover {
		background: var(--color-cream);
		color: var(--color-burnt-orange);
	}

	/* Mobile Toggle */
	.mobile-toggle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 32px;
		height: 32px;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 10;
	}

	.hamburger-line {
		width: 100%;
		height: 2px;
		background: var(--color-off-white);
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	.hamburger-line.open:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger-line.open:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}

	/* Mobile Menu */
	.mobile-menu {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--color-off-white);
		padding: var(--spacing-xl);
		overflow-y: auto;
		animation: slide-down 0.3s ease-out;
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.mobile-nav-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.mobile-nav-label {
		font-family: var(--font-family-heading);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--color-gray);
		padding: var(--spacing-sm) 0;
	}

	.mobile-nav-link {
		display: block;
		padding: var(--spacing-md);
		font-size: var(--font-size-base);
		color: var(--color-charcoal);
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.mobile-nav-link:hover {
		background: var(--color-cream);
		color: var(--color-burnt-orange);
	}

	.mobile-nav-link--donate {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		font-weight: 600;
		text-align: center;
	}

	.mobile-nav-link--donate:hover {
		background: #b8580c;
		color: var(--color-off-white);
	}

	/* Animations */
	@keyframes dropdown-appear {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.desktop-nav {
			display: flex;
		}

		.mobile-toggle {
			display: none;
		}

		.header__container {
			padding: var(--spacing-lg) var(--spacing-2xl);
		}
	}
</style>
