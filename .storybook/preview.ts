import type { Preview } from '@storybook/svelte';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#F2E9D8'
				},
				{
					name: 'dark',
					value: '#1a1a1a'
				},
				{
					name: 'white',
					value: '#FAFAF7'
				}
			]
		}
	},
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', title: 'Light', icon: 'sun' },
					{ value: 'dark', title: 'Dark', icon: 'moon' }
				],
				dynamicTitle: true
			}
		}
	},
	decorators: [
		(Story, context) => {
			// Svelte 5 decorator pattern - return Story() directly
			const theme = context.globals.theme || 'light';
			if (typeof document !== 'undefined') {
				document.documentElement.setAttribute('data-theme', theme);
			}
			return Story();
		}
	]
};

export default preview;
