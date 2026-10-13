import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { APP_REDIRECTS } from './src/redirects.js';

// Optional sub-folder the site is served from while testing, e.g. BASE_PATH=/test
// (no trailing slash). Set it in a git-ignored .env file or as an environment variable.
try {
	process.loadEnvFile('.env');
} catch {
	// no .env file
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		prerender: {
			entries: [
				'*',
				...Object.keys(APP_REDIRECTS)
			]
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
