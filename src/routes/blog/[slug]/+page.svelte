<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/blog';

	let { data } = $props();
	let post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} | Day III Digital</title>
	<meta name="description" content={post.summary} />
</svelte:head>

<div class="post-page">
	<article class="post-container">
		<a href="{base}/blog" class="back">← All posts</a>
		<div class="content">
			{@html post.html}
		</div>
	</article>
</div>

<style>
	.post-page {
		min-height: 100vh;
		padding: 3rem 2rem 4rem;
	}

	.post-container {
		max-width: 780px;
		margin: 0 auto;
	}

	.back {
		color: #ffd84d;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.back:hover {
		color: #ffffff;
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		font-weight: 900;
		color: #ffffff;
		margin: 1.5rem 0 0.5rem;
		line-height: 1.15;
	}

	.meta {
		color: var(--fog);
		margin: 0 0 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 3px solid;
		border-image: linear-gradient(90deg, #774dd1, #ffd84d) 1;
	}

	.content {
		color: #e0e0e0;
		font-size: 1.05rem;
		line-height: 1.8;
	}

	.content :global(h2),
	.content :global(h3) {
		color: #774dd1;
		font-weight: 900;
		text-transform: uppercase;
		margin: 2.2rem 0 0.8rem;
		line-height: 1.25;
	}

	.content :global(h2) {
		font-size: 1.6rem;
	}

	.content :global(h3) {
		font-size: 1.25rem;
		color: var(--lavender);
	}

	.content :global(a) {
		color: #ffd84d;
	}

	.content :global(a:hover) {
		color: #ffffff;
	}

	.content :global(strong) {
		color: #ffffff;
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

	@media (max-width: 768px) {
		.post-page {
			padding: 3rem 1.25rem;
		}
	}
</style>
