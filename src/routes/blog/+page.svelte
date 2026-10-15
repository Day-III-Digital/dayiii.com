<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/blog';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | Day III Digital</title>
	<meta name="description" content="News and technical write-ups from Day III Digital." />
</svelte:head>

<div class="blog-page">
	<div class="blog-container">
		<h1 class="page-title"><span class="title-prefix">OUR</span> <span class="title-highlight">BLOG</span></h1>
		<p class="page-intro">News and technical write-ups from the Day III Digital studio.</p>

		<div class="post-list">
			{#each data.posts as post (post.slug)}
				<a class="post-card" href="{base}/blog/{post.slug}">
					<time datetime={post.date}>{formatDate(post.date)}</time>
					<h2>{post.title}</h2>
					{#if post.summary}<p>{post.summary}</p>{/if}
					<span class="read-more">Read more →</span>
				</a>
			{:else}
				<p class="empty">No posts yet — check back soon.</p>
			{/each}
		</div>
	</div>
</div>

<style>
	.blog-page {
		min-height: 100vh;
		padding: 3rem 2rem 4rem;
	}

	.blog-container {
		max-width: 900px;
		margin: 0 auto;
	}

	.page-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 900;
		text-align: center;
		margin: 0 0 1rem 0;
		letter-spacing: 0.02em;
	}

	.title-prefix {
		color: #ffffff;
	}

	.title-highlight {
		color: #ffd84d;
	}

	.page-intro {
		text-align: center;
		color: #e0e0e0;
		font-size: 1.1rem;
		margin-bottom: 3rem;
	}

	.post-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.post-card {
		position: relative;
		display: block;
		padding: 1.5rem;
		background: rgba(15, 10, 46, 0.42);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-radius: 16px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
	}

	.post-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, #774dd1, #ffd84d);
	}

	.post-card:hover {
		border-color: rgba(107, 143, 255, 0.4);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(107, 143, 255, 0.15);
	}

	time {
		font-size: 0.85rem;
		color: var(--fog);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h2 {
		font-size: 1.4rem;
		color: #774dd1;
		margin: 0.4rem 0 0.5rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	p {
		margin: 0 0 1rem;
		color: #e0e0e0;
	}

	.read-more {
		color: #ffd84d;
		font-weight: 700;
		font-size: 0.9rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.empty {
		text-align: center;
	}

	@media (max-width: 768px) {
		.blog-page {
			padding: 3rem 1.25rem;
		}
	}
</style>
