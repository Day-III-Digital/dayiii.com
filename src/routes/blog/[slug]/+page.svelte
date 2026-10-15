<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/blog';

	let { data } = $props();
	let post = $derived(data.post);

	let content: HTMLElement | undefined = $state();
	let expanded: { src: string; alt: string } | null = $state(null);

	// Post images are rendered with {@html}, so make them keyboard-reachable here
	$effect(() => {
		post.html;
		content?.querySelectorAll('img').forEach((img) => {
			img.tabIndex = 0;
			img.setAttribute('role', 'button');
			img.setAttribute('aria-label', `Expand image${img.alt ? `: ${img.alt}` : ''}`);
		});
	});

	function expand(event: Event) {
		const img = event.target;
		if (!(img instanceof HTMLImageElement) || img.closest('a')) return;
		expanded = { src: img.currentSrc || img.src, alt: img.alt };
	}

	function onContentKeydown(event: KeyboardEvent) {
		if (event.key !== 'Enter' && event.key !== ' ') return;
		if (!(event.target instanceof HTMLImageElement)) return;
		event.preventDefault();
		expand(event);
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') expanded = null;
	}}
/>

<svelte:head>
	<title>{post.title} | Day III Digital</title>
	<meta name="description" content={post.summary} />
</svelte:head>

<div class="post-page">
	<article class="post-container">
		<a href="{base}/blog" class="back">← All posts</a>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="content" bind:this={content} onclick={expand} onkeydown={onContentKeydown}>
			{@html post.html}
		</div>
	</article>
</div>

{#if expanded}
	<div class="lightbox" role="dialog" aria-modal="true" aria-label="Expanded image">
		<button type="button" class="lightbox-backdrop" aria-label="Close image" onclick={() => (expanded = null)}
		></button>
		<img src={expanded.src} alt={expanded.alt} class="lightbox-image" />
		<button type="button" class="lightbox-close" aria-label="Close image" onclick={() => (expanded = null)}>
			&times;
		</button>
	</div>
{/if}

<style>
	.post-page {
		min-height: 100vh;
		padding: 3rem 2rem 4rem;
	}

	.post-container {
		max-width: 900px;
		margin: 0 auto;
	}

	.back {
		color: var(--gold);
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
	}

	.back:hover {
		color: #ffffff;
	}



	.content {
		color: #e0e0e0;
	}

	.content :global(h2),
	.content :global(h3) {
		color: #774dd1;
		font-weight: 900;
		text-transform: uppercase;
		margin: 2.2rem 0 0.8rem;
	}

	.content :global(h2) {
		font-size: 1.6rem;
	}

	.content :global(h3) {
		font-size: 1.25rem;
		color: var(--lavender);
	}

	.content :global(a) {
		color: var(--gold);
	}

	.content :global(a:hover) {
		color: white;
	}

	.content :global(strong) {
		color: white;
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 12px;
	}

	.content :global(figure.video) {
		margin: 1.5rem 0;
	}

	.content :global(video) {
		display: block;
		width: 100%;
		height: auto;
		background: #000;
		border-radius: 12px;
		border: 1px solid rgba(107, 143, 255, 0.15);
	}

	.content :global(figcaption) {
		margin-top: 0.5rem;
		text-align: center;
		font-size: 0.9rem;
		color: var(--fog);
	}

	.content :global(blockquote) {
		margin: 1.5rem 0;
		padding: 0.5rem 1.25rem;
		border-left: 3px solid #774dd1;
		background: rgba(15, 10, 46, 0.42);
		border-radius: 0 8px 8px 0;
	}

	.content :global(code) {
		background: rgba(15, 10, 46, 0.7);
		padding: 0.15em 0.4em;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.content :global(pre) {
		background: rgba(15, 10, 46, 0.7);
		border: 1px solid rgba(107, 143, 255, 0.15);
		border-radius: 12px;
		padding: 1rem 1.25rem;
		overflow-x: auto;
	}

	.content :global(pre code) {
		background: none;
		padding: 0;
	}

	.content :global(hr) {
		border: none;
		border-top: 1px solid var(--line);
		margin: 2rem 0;
	}

	.content :global(table) {
		border-collapse: collapse;
		width: 100%;
		display: block;
		overflow-x: auto;
	}

	.content :global(th),
	.content :global(td) {
		border: 1px solid var(--line);
		padding: 0.5rem 0.8rem;
	}

	.content :global(img) {
		cursor: zoom-in;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.lightbox-backdrop {
		position: absolute;
		inset: 0;
		border: none;
		padding: 0;
		background: rgba(10, 6, 20, 0.92);
		cursor: zoom-out;
	}

	.lightbox-image {
		position: relative;
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		border-radius: 8px;
		pointer-events: none;
	}

	.lightbox-close {
		position: absolute;
		top: 1rem;
		right: 1.25rem;
		background: none;
		border: none;
		color: white;
		font-size: 2.5rem;
		line-height: 1;
		cursor: pointer;
	}

	.lightbox-close:hover {
		color: var(--gold);
	}

	@media (max-width: 768px) {
		.post-page {
			padding: 3rem 1.25rem;
		}
	}
</style>
