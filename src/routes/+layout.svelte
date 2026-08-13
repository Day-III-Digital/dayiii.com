<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<Nav />

{@render children()}

<style>
	:global(:root) {
		--aubergine: #19122b;
		--ink: #120c20;
		--purple: #714aba;
		--lavender: #9d80f7;
		--gold: #ffcb63;
		--mist: #e8e8e8;
		--fog: #b4aac6;
		--line: #3a2f52;
		--radius: 6px;
		--border-stroke: conic-gradient(
			from 135deg,
			#bfa6ff,
			#764dae,
			#343867,
			#764dae,
			#bfa6ff,
			#764dae,
			#343867,
			#764dae,
			#bfa6ff
		);
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: 'Gabarito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: var(--aubergine);
		color: var(--mist);
		line-height: 1.6;
		overflow-x: hidden;
	}
</style>
