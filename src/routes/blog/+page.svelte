<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();

	// ISO date -> DD-MM-YYYY
	const displayDate = (date: string) => date.split('-').reverse().join('-');
</script>

<svelte:head>
	<title>Blog | Day III Digital</title>
	<meta name="description" content="News and technical articles from the Day III team." />
</svelte:head>

<div class="blog-page">
	<div class="blog-container">
		<h1 class="page-title"><span class="title-prefix">OUR</span> <span class="title-highlight">BLOG</span></h1>
		<p class="page-intro">News and technical articles from the Day III team.</p>

		<div class="post-list">
			{#each data.posts as post (post.slug)}
				<article class="post-card" class:no-thumbnail={!post.thumbnail}>
					<div class="post-body">
						<div class="post-text">
							<h2><a class="post-link" href="{base}/blog/{post.slug}">{post.title}</a></h2>
							{#if post.summary}<p class="summary">{post.summary}</p>{/if}
						</div>
						<div class="post-footer">
							<div class="author">
								<div class="avatar">
									{#if post.authorPicture}
										<img src={post.authorPicture} alt="" loading="lazy" />
									{:else}
										<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path></svg>
									{/if}
								</div>
								<div class="author-meta">
									<span class="author-name">{post.author}</span>
									<time datetime={post.date}>{displayDate(post.date)}</time>
								</div>
							</div>
							<span class="read-more" aria-hidden="true">Read more →</span>
						</div>
					</div>
					{#if post.thumbnail}
						<div class="post-image">
							<img src={post.thumbnail} alt="" loading="lazy" />
						</div>
					{/if}
				</article>
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
		max-width: 1120px;
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
		color: white;
	}

	.title-highlight {
		color: var(--gold);
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
		gap: 2rem;
	}

	.post-card {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1fr) 40%;
		border: 1.33px solid transparent;
		border-radius: var(--radius);
		background:
			linear-gradient(var(--ink), var(--ink)) padding-box,
			var(--border-stroke) border-box;
		overflow: hidden;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.post-card.no-thumbnail {
		grid-template-columns: minmax(0, 1fr);
		min-height: 0;
	}

	.post-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(113, 74, 186, 0.3);
	}

	.post-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 32px 40px 28px;
		min-width: 0;
	}

	.post-text {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	h2 {
		margin: 0;
		font-weight: 900;
		font-size: clamp(1.5rem, 2.6vw, 2rem);
		line-height: 1.05;
		text-transform: uppercase;
	}

	/* The title link covers the whole card so the entire card is clickable */
	.post-link {
		color: var(--lavender);
		text-decoration: none;
	}

	.post-link::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
	}

	.post-link:focus-visible {
		outline: none;
	}

	.post-card:has(.post-link:focus-visible) {
		outline: 2px solid var(--gold);
		outline-offset: 2px;
	}

	.summary {
		margin: 0;
		font-size: 1.05rem;
		line-height: 1.5;
		color: var(--fog);
	}

	.post-footer {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
	}

	.author {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.avatar {
		width: 44px;
		height: 44px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border: 1.33px solid transparent;
		border-radius: 999px;
		color: var(--fog);
		background:
			linear-gradient(#221b31, #221b31) padding-box,
			var(--border-stroke) border-box;
	}

	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.author-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.author-name {
		font-size: 1rem;
		font-weight: 700;
		color: white;
	}

	time {
		font-size: 0.875rem;
		letter-spacing: 0.18em;
		color: var(--fog);
	}

	.read-more {
		color: var(--gold);
		font-weight: 900;
		font-size: 0.95rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		padding: 12px 8px;
		transition: color 0.2s ease;
	}

	.post-card:hover .read-more {
		color: var(--lavender);
	}

	.post-image {
		min-width: 0;
		aspect-ratio: 16 / 10;
	}

	.post-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.empty {
		text-align: center;
	}

	@media (max-width: 860px) {
		.blog-page {
			padding: 3rem 1.25rem;
		}

		.post-card {
			grid-template-columns: minmax(0, 1fr);
		}

		.post-image {
			order: -1;
		}

		.post-body {
			padding: 28px 24px 24px;
		}
	}
</style>
