<script lang="ts">
	let email = 'contact@dayiii.com';

	let careers = $state([
		{
			id: 1,
			title: 'Technical Art',
			shortDescription: 'Shaders, procedural systems, materials, rigging, VFX, and tools development.',
			fullDescription: "We're building a world-class team of Technical Artists. If you have a strong portfolio and passion for real-time graphics, procedural systems, shaders, materials, rigging, or tools development, we'd love to hear from you. Whether you're a generalist who bridges art and code, or a specialist in rendering, VFX, or animation, there may be a place for you at Day III Digital. Send us your resume, portfolio, and a brief note about what excites you most about technical art. We review all applications and will reach out if there's a potential fit.",
			expanded: false
		},
		{
			id: 2,
			title: 'Unreal Engine Engineering',
			shortDescription: 'C++, Blueprints, gameplay systems, tools, and performance optimization.',
			fullDescription: "We're building a world-class team of Unreal Engine engineers. If you have strong C++ and Blueprints skills with a passion for gameplay systems, tools development, performance optimization, or graphics programming, we'd love to hear from you. Whether you specialize in core engine work, multiplayer systems, or custom tooling, there may be a place for you at Day III Digital. Send us your resume, portfolio or code samples, and a brief note about what excites you most about Unreal Engine development. We review all applications and will reach out if there's a potential fit.",
			expanded: false
		}
	]);

	function toggleCareer(id: number) {
		careers = careers.map(c =>
			c.id === id ? { ...c, expanded: !c.expanded } : c
		);
	}
</script>

<div class="careers-page">
	<div class="careers-container">
		<h1 class="page-title"><span class="title-prefix">JOIN OUR</span> <span class="title-highlight">TEAM</span></h1>
		<p class="page-intro">We're always looking for talented individuals to join Day III Digital. Check out our open positions below.</p>

		<div class="careers-list">
			{#each careers as career}
				<div class="career-card">
					<div class="career-header" on:click={() => toggleCareer(career.id)} on:keypress={() => toggleCareer(career.id)} role="button" tabindex="0">
						<div class="career-info">
							<h2>{career.title}</h2>
							<p class="career-short">{career.shortDescription}</p>
						</div>
						<span class="career-toggle">{career.expanded ? '−' : '+'}</span>
					</div>
					{#if career.expanded}
						<div class="career-details">
							<p>{career.fullDescription}</p>
							<a href="mailto:{email}?subject=Application: {career.title}" class="apply-button">Apply Now</a>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.careers-page {
		min-height: 100vh;
		background: transparent;
		padding: 6rem 2rem 4rem;
		position: relative;
		z-index: 1;
	}

	.careers-container {
		max-width: 900px;
		margin: 0 auto;
	}

	.page-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 900;
		text-align: center;
		margin: 0 0 1rem 0;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	.title-prefix {
		color: var(--white-color);
	}

	.title-highlight {
		color: var(--yellow-accent);
	}

	.page-intro {
		text-align: center;
		color: var(--text-color);
		font-size: 1.1rem;
		margin-bottom: 3rem;
		line-height: 1.6;
	}

	.careers-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.career-card {
		position: relative;
		background: rgba(15, 10, 46, var(--card-opacity, 0.42));
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-radius: 16px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		overflow: hidden;
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
	}

	.career-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--purple-accent), var(--yellow-accent));
	}

	.career-card:hover {
		border-color: rgba(107, 143, 255, 0.4);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(107, 143, 255, 0.15);
	}

	.career-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem;
		cursor: pointer;
		gap: 1rem;
	}

	.career-info {
		flex: 1;
	}

	.career-card h2 {
		font-size: 1.4rem;
		color: var(--purple-accent);
		margin: 0 0 0.5rem 0;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.career-short {
		color: var(--text-color);
		margin: 0;
		font-size: 1rem;
		line-height: 1.5;
	}

	.career-toggle {
		font-size: 2rem;
		color: var(--purple-accent);
		font-weight: 300;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.career-details {
		padding: 0 1.5rem 1.5rem;
		border-top: 1px solid rgba(107, 143, 255, 0.1);
	}

	.career-details p {
		color: var(--white-color);
		line-height: 1.7;
		margin: 1rem 0;
		font-size: 1rem;
	}

	.apply-button {
		display: inline-block;
		padding: 0.7rem 1.8rem;
		background: var(--yellow-accent);
		color: #0f0a2e;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
		font-size: 0.95rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(255, 216, 77, 0.35);
	}

	.apply-button:hover {
		background: var(--purple-accent);
		color: var(--white-color);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(107, 143, 255, 0.5);
	}

	@media (max-width: 768px) {
		.careers-page {
			padding: 5rem 1.25rem 3rem;
		}

		.career-header {
			padding: 1.25rem;
		}
	}
</style>
