<script lang="ts">
	let email = 'contact@dayiii.com';

	let careers = $state([
		{
			id: 1,
			title: 'Open Application',
			shortDescription: null,
			fullDescription: "We're always on the lookout for exceptional talent! If you believe you'd be a great addition to our team but can’t find a role that fits your expertise, we encourage you to take a moment to submit an open application.",
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
							{#if career.shortDescription != null}
								<p class="career-short">{career.shortDescription}</p>
							{/if}
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
		background: #0a0e27;
		padding: 6rem 2rem 4rem;
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
		color: #ffffff;
	}

	.title-highlight {
		color: #FFD84D;
	}

	.page-intro {
		text-align: center;
		color: #b0b0b0;
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
		background: linear-gradient(to bottom, #131a36 0%, #1e274a 100%);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		overflow: hidden;
		transition: border-color 0.3s ease;
	}

	.career-card:hover {
		border-color: rgba(107, 143, 255, 0.3);
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
		color: #6B8FFF;
		margin: 0 0 0.5rem 0;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.career-short {
		color: #b0b0b0;
		margin: 0;
		font-size: 1rem;
		line-height: 1.5;
	}

	.career-toggle {
		font-size: 2rem;
		color: #6B8FFF;
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
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.career-details p {
		color: #e0e5ff;
		line-height: 1.7;
		margin: 1rem 0;
		font-size: 1rem;
	}

	.apply-button {
		display: inline-block;
		padding: 0.7rem 1.8rem;
		background: #FFD84D;
		color: #0a0e27;
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
		background: #6B8FFF;
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
