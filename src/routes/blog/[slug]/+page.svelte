<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}

	// Simple markdown-to-HTML converter for our content
	function renderMarkdown(markdown: string): string {
		return markdown
			// Headings
			.replace(/^### (.*$)/gim, '<h3>$1</h3>')
			.replace(/^## (.*$)/gim, '<h2>$1</h2>')
			.replace(/^# (.*$)/gim, '<h1>$1</h1>')
			// Bold
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			// Lists
			.replace(/^\d+\.\s(.*)$/gim, '<li>$1</li>')
			.replace(/^[-*]\s(.*)$/gim, '<li>$1</li>')
			// Code blocks
			.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
			// Inline code
			.replace(/`([^`]+)`/g, '<code>$1</code>')
			// Paragraphs
			.replace(/^(?!<[h|l|p|c])(.*$)/gim, '<p>$1</p>')
			// Clean up
			.replace(/<\/li>\n<li>/g, '</li><li>')
			.replace(/<li>/g, '<ul><li>')
			.replace(/<\/li>(?!\n<li>)/g, '</li></ul>')
			.replace(/<p><\/p>/g, '')
			.replace(/<p>(<h[1-3]>)/g, '$1')
			.replace(/(<\/h[1-3]>)<\/p>/g, '$1')
			.replace(/<p>(<ul>)/g, '$1')
			.replace(/(<\/ul>)<\/p>/g, '$1')
			.replace(/<p>(<pre>)/g, '$1')
			.replace(/(<\/pre>)<\/p>/g, '$1');
	}
</script>

<svelte:head>
	<title>{data.post.title} - Day III Digital Blog</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<div class="post-container">
	<article class="post">
		<header class="post-header">
			<a href="/blog" class="back-link">← BACK TO BLOG</a>
			<div class="post-meta">
				<time class="post-date">{formatDate(data.post.date)}</time>
				<div class="tags">
					{#each data.post.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</div>
			<h1>{data.post.title}</h1>
		</header>

		<div class="post-content">
			{@html renderMarkdown(data.post.content)}
		</div>

		<footer class="post-footer">
			<a href="/blog" class="back-button">← BACK TO BLOG</a>
		</footer>
	</article>
</div>

<style>
	.post-container {
		min-height: 100vh;
		background: #0a0e27;
		padding: 6rem 2rem 4rem;
	}

	.post {
		max-width: 800px;
		margin: 0 auto;
		background: #0d1129;
		border: 2px solid #1a1f3a;
		border-radius: 8px;
		padding: 3rem;
	}

	.post-header {
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid #1a1f3a;
	}

	.back-link {
		display: inline-block;
		color: #6B8FFF;
		text-decoration: none;
		font-weight: 700;
		font-family: 'Gabarito', sans-serif;
		font-size: 0.9rem;
		margin-bottom: 2rem;
		transition: color 0.3s ease;
		letter-spacing: 0.05em;
	}

	.back-link:hover {
		color: #FFD84D;
	}

	.post-meta {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.post-date {
		font-size: 0.9rem;
		color: #6B8FFF;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
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

	.post h1 {
		font-size: clamp(2rem, 5vw, 3rem);
		color: #FFD84D;
		margin: 0;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		line-height: 1.2;
		letter-spacing: 0.02em;
	}

	.post-content {
		color: #e0e0e0;
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.post-content :global(h1) {
		font-size: 2.5rem;
		color: #FFD84D;
		margin: 2.5rem 0 1.5rem;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	.post-content :global(h2) {
		font-size: 2rem;
		color: #FFD84D;
		margin: 2rem 0 1rem;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	.post-content :global(h3) {
		font-size: 1.5rem;
		color: #6B8FFF;
		margin: 1.5rem 0 1rem;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	.post-content :global(p) {
		margin: 1.2rem 0;
		color: #b0b0b0;
	}

	.post-content :global(ul) {
		margin: 1.2rem 0;
		padding-left: 2rem;
	}

	.post-content :global(li) {
		margin: 0.5rem 0;
		color: #b0b0b0;
	}

	.post-content :global(strong) {
		color: #e0e0e0;
		font-weight: 700;
	}

	.post-content :global(code) {
		background: rgba(107, 143, 255, 0.1);
		color: #6B8FFF;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.95em;
	}

	.post-content :global(pre) {
		background: #050812;
		border: 1px solid #1a1f3a;
		border-radius: 8px;
		padding: 1.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	.post-content :global(pre code) {
		background: none;
		padding: 0;
		color: #e0e0e0;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.post-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 2px solid #1a1f3a;
	}

	.back-button {
		display: inline-block;
		padding: 1rem 2rem;
		background: #6B8FFF;
		color: #0a0e27;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(107, 143, 255, 0.3);
	}

	.back-button:hover {
		background: #FFD84D;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(255, 216, 77, 0.3);
	}

	@media (max-width: 768px) {
		.post-container {
			padding: 5rem 1rem 3rem;
		}

		.post {
			padding: 2rem 1.5rem;
		}

		.post h1 {
			font-size: 1.8rem;
		}

		.post-content {
			font-size: 1rem;
		}
	}
</style>
