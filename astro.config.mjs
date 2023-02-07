import { defineConfig } from 'astro/config';
import { vitePreprocess } from '@astrojs/svelte';
import svelte from '@astrojs/svelte';
import image from '@astrojs/image';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	preprocess: vitePreprocess(),
	// Enable Svelte to support Svelte components.
	integrations: [
		svelte(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		})
	],
	site: 'https://tomfutang.github.io/',
	base: '/tomfutang'
});