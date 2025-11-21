<script lang="ts">
	interface Props {
		variant?: 'primary' | 'secondary' | 'cta' | 'link';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		children?: any;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		disabled = false,
		children,
		onclick
	}: Props = $props();

	let className = $derived(`btn btn--${variant} btn--${size}`);
</script>

{#if href}
	<a {href} class={className} role="button" tabindex={disabled ? -1 : 0}>
		{@render children?.()}
	</a>
{:else}
	<button class={className} {type} {disabled} {onclick}>
		{@render children?.()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-family-heading);
		font-weight: 600;
		text-align: center;
		text-decoration: none;
		border: none;
		border-radius: var(--radius);
		cursor: pointer;
		transition: all var(--transition-fast);
		white-space: nowrap;
	}

	.btn:focus-visible {
		outline: 2px solid var(--color-coral-blue);
		outline-offset: 2px;
	}

	/* Sizes */
	.btn--sm {
		padding: var(--spacing-sm) var(--spacing-md);
		font-size: var(--font-size-sm);
	}

	.btn--md {
		padding: var(--spacing-md) calc(var(--spacing-xl) + var(--spacing-sm));
		font-size: var(--font-size-base);
	}

	.btn--lg {
		padding: calc(var(--spacing-md) + var(--spacing-xs)) calc(var(--spacing-2xl) + var(--spacing-sm));
		font-size: var(--font-size-lg);
	}

	/* Variants */
	.btn--primary {
		background: var(--color-primary);
		color: var(--color-off-white);
	}

	.btn--primary:hover:not(:disabled) {
		background: #3d4429;
	}

	.btn--secondary {
		background: transparent;
		color: var(--color-off-white);
		border: 1px solid var(--color-off-white);
	}

	.btn--secondary:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--color-off-white);
	}

	.btn--cta {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
	}

	.btn--cta:hover:not(:disabled) {
		background: #b8580c;
	}

	.btn--link {
		background: transparent;
		color: var(--color-link);
		padding: 0;
	}

	.btn--link:hover:not(:disabled) {
		color: var(--color-link-hover);
		text-decoration: underline;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn:active:not(:disabled) {
		transform: translateY(0);
	}
</style>
