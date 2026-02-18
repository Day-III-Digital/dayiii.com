<script lang="ts">
	import { getAllPosts } from '$lib/data/blog-posts';

	const posts = getAllPosts();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}
</script>

<svelte:head>
	<title>Blog - Day III Digital</title>
	<meta name="description" content="Technical articles and insights on Unreal Engine development, technical art, and game optimization." />
</svelte:head>

<div class="blog-container">
	<section class="blog-hero">
		<h1>BLOG</h1>
		<p>Technical insights, best practices, and lessons from the field</p>
	</section>

	<section class="blog-posts">
		<div class="posts-grid">
			{#each posts as post}
				<a href="/blog/{post.slug}" class="post-card">
					<div class="post-content">
						<div class="post-date">{formatDate(post.date)}</div>
						<h2>{post.title}</h2>
						<p class="post-excerpt">{post.excerpt}</p>
						<div class="tags">
							{#each post.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
						<span class="read-more">READ MORE →</span>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.blog-container {
		min-height: 100vh;
		background: #0a0e27;
	}

	.blog-hero {
		padding: 6rem 2rem 4rem;
		text-align: center;
		background: #0d1129;
		border-bottom: 2px solid #1a1f3a;
	}

	.blog-hero h1 {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 900;
		color: #FFD84D;
		margin: 0 0 1rem 0;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
	}

	.blog-hero p {
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		color: #6B8FFF;
		font-weight: 600;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.blog-posts {
		max-width: 1200px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: #0d1129;
		border: 2px solid #1a1f3a;
		border-radius: 8px;
		overflow: hidden;
		transition: all 0.3s ease;
		text-decoration: none;
		display: block;
	}

	.post-card:hover {
		transform: translateY(-5px);
		border-color: #6B8FFF;
		box-shadow: 0 8px 25px rgba(107, 143, 255, 0.3);
	}

	.post-content {
		padding: 2rem;
	}

	.post-date {
		font-size: 0.85rem;
		color: #6B8FFF;
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 1rem;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
	}

	.post-card h2 {
		font-size: 1.5rem;
		color: #FFD84D;
		margin: 0 0 1rem 0;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		line-height: 1.2;
	}

	.post-excerpt {
		color: #b0b0b0;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		font-size: 1rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		background: rgba(107, 143, 255, 0.2);
		color: #6B8FFF;
		padding: 0.3rem 0.8rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.03em;
	}

	.read-more {
		color: #6B8FFF;
		font-weight: 900;
		font-size: 0.9rem;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
		transition: color 0.3s ease;
	}

	.post-card:hover .read-more {
		color: #FFD84D;
	}

	@media (max-width: 768px) {
		.posts-grid {
			grid-template-columns: 1fr;
		}

		.blog-hero {
			padding: 5rem 1.5rem 3rem;
		}

		.blog-posts {
			padding: 3rem 1.5rem;
		}
	}
</style>
