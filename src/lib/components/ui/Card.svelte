<script lang="ts">
	interface Props {
		padding?: 'sm' | 'md' | 'lg';
		hover?: boolean;
		children?: any;
	}

	let { padding = 'md', hover = false, children }: Props = $props();

	let className = $derived(`card card--${padding} ${hover ? 'card--hover' : ''}`);
</script>

<div class={className}>
	{@render children?.()}
</div>

<style>
	.card {
		background: var(--color-surface);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow);
		transition: all var(--transition);
	}

	.card--sm {
		padding: var(--spacing-md);
	}

	.card--md {
		padding: var(--spacing-lg);
	}

	.card--lg {
		padding: var(--spacing-xl);
	}

	.card--hover:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}
</style>
