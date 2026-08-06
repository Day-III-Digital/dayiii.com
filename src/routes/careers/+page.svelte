<script lang="ts">
	import { onMount } from 'svelte';

	let email = 'contact@dayiii.com';

	let careers = $state([
		{
			id: 1,
			title: 'Technical Art',
			shortDescription: 'Shaders, procedural systems, materials, rigging, VFX, and tools development.',
			fullDescription:
				"We're building a world-class team of Technical Artists. If you have a strong portfolio and passion for real-time graphics, procedural systems, shaders, materials, rigging, or tools development, we'd love to hear from you. Whether you're a generalist who bridges art and code, or a specialist in rendering, VFX, or animation, there may be a place for you at Day III Digital. Send us your resume, portfolio, and a brief note about what excites you most about technical art. We review all applications and will reach out if there's a potential fit.",
			expanded: false
		},
		{
			id: 2,
			title: 'Unreal Engine Engineering',
			shortDescription: 'C++, Blueprints, gameplay systems, tools, and performance optimization.',
			fullDescription:
				"We're building a world-class team of Unreal Engine engineers. If you have strong C++ and Blueprints skills with a passion for gameplay systems, tools development, performance optimization, or graphics programming, we'd love to hear from you. Whether you specialize in core engine work, multiplayer systems, or custom tooling, there may be a place for you at Day III Digital. Send us your resume, portfolio or code samples, and a brief note about what excites you most about Unreal Engine development. We review all applications and will reach out if there's a potential fit.",
			expanded: false
		}
	]);

	function toggleCareer(id: number) {
		careers = careers.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c));
	}

	onMount(() => {
		const sections = document.querySelectorAll('section');
		const cards = document.querySelectorAll('.career-card');

		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.12 }
		);

		const cardObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('card-visible');
					}
				});
			},
			{ threshold: 0.08 }
		);

		cards.forEach((card, index) => {
			(card as HTMLElement).style.setProperty('--card-index', index.toString());
		});

		requestAnimationFrame(() => {
			sections.forEach((section) => {
				section.classList.add('scroll-animate');
				sectionObserver.observe(section);
			});
			cards.forEach((card) => {
				card.classList.add('card-animate');
				cardObserver.observe(card);
			});
		});

		return () => {
			sectionObserver.disconnect();
			cardObserver.disconnect();
		};
	});
</script>

<div class="page">
	<!-- Hero -->
	<section class="careers-hero">
		<div class="hero-radial"></div>
		<div class="section-inner">
			<div class="eyebrow">Careers</div>
			<h1 class="careers-title">Join <span class="text-lavender">our team.</span></h1>
			<p class="careers-intro">
				We're always looking for talented individuals to join Day III Digital. Check out our open
				positions below.
			</p>
		</div>
	</section>

	<!-- Open roles -->
	<section class="careers-list-section">
		<div class="section-inner">
			<div class="careers-list">
				{#each careers as career}
					<div class="career-card">
						<button
							type="button"
							class="career-header"
							onclick={() => toggleCareer(career.id)}
							aria-expanded={career.expanded}
						>
							<div class="career-info">
								<h2>{career.title}</h2>
								<p class="career-short">{career.shortDescription}</p>
							</div>
							<span class="career-toggle">{career.expanded ? '−' : '+'}</span>
						</button>
						{#if career.expanded}
							<div class="career-details">
								<p>{career.fullDescription}</p>
								<a href="mailto:{email}?subject=Application: {career.title}" class="apply-button">
									Apply now
								</a>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<div class="footer-content">
			<img src="/images/logo-white-text.png" alt="Day III Digital" class="footer-logo" />
			<span class="footer-text">&copy; {new Date().getFullYear()} Day III Digital. All rights reserved.</span>
		</div>
	</footer>
</div>

<style>
	.page {
		position: relative;
	}

	section {
		position: relative;
	}

	.section-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 88px 32px;
	}

	@keyframes fadeUp {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.scroll-animate {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	.scroll-animate.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.card-animate {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
		transition-delay: calc(var(--card-index, 0) * 0.06s);
	}

	.card-animate.card-visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Hero */
	.careers-hero {
		padding-top: 96px;
		padding-bottom: 24px;
		overflow: hidden;
		border-bottom: 1px solid var(--line);
	}

	.hero-radial {
		position: absolute;
		inset: 0;
		background: radial-gradient(60% 55% at 50% 30%, rgba(113, 74, 186, 0.35) 0%, rgba(25, 18, 43, 0) 70%);
		pointer-events: none;
	}

	.eyebrow {
		margin-bottom: 12px;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--gold);
	}

	.careers-title {
		position: relative;
		margin: 0 0 20px 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(2.2rem, 6vw, 4rem);
		line-height: 1;
		letter-spacing: -0.01em;
		text-transform: uppercase;
		color: #ffffff;
	}

	.text-lavender {
		color: var(--lavender);
	}

	.careers-intro {
		position: relative;
		margin: 0;
		max-width: 640px;
		font-size: 1.15rem;
		line-height: 1.6;
		color: var(--fog);
	}

	/* Open roles */
	.careers-list-section {
		background: var(--ink);
	}

	.careers-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.career-card {
		border: 1.5px solid transparent;
		border-radius: var(--radius);
		background: linear-gradient(var(--aubergine), var(--aubergine)) padding-box, var(--border-stroke) border-box;
		overflow: hidden;
		transition: filter 0.2s ease;
	}

	.career-card:hover {
		filter: brightness(1.08);
	}

	.career-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 28px 30px;
		background: none;
		border: none;
		text-align: left;
		font-family: inherit;
		color: inherit;
		cursor: pointer;
	}

	.career-info h2 {
		margin: 0 0 8px 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.3rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--lavender);
	}

	.career-short {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
		color: var(--fog);
	}

	.career-toggle {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.6rem;
		color: var(--gold);
	}

	.career-details {
		padding: 0 30px 30px;
		border-top: 1px solid var(--line);
	}

	.career-details p {
		margin: 18px 0;
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--mist);
	}

	.apply-button {
		display: inline-flex;
		align-items: center;
		padding: 14px 26px;
		border-radius: var(--radius);
		background: var(--gold);
		color: var(--aubergine);
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.8rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		text-decoration: none;
		transition: filter 0.2s ease;
	}

	.apply-button:hover {
		filter: brightness(1.08);
	}

	/* Footer */
	footer {
		border-top: 1px solid var(--line);
		padding: 34px 32px 44px;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		flex-wrap: wrap;
	}

	.footer-logo {
		height: 40px;
		width: auto;
		display: block;
	}

	.footer-text {
		font-size: 0.8rem;
		letter-spacing: 0.06em;
		color: var(--fog);
	}

	/* Responsive */
	@media (max-width: 900px) {
		.section-inner {
			padding: 64px 24px;
		}
	}

	@media (max-width: 640px) {
		.career-header {
			padding: 22px 20px;
		}

		.career-details {
			padding: 0 20px 24px;
		}

		.footer-content {
			justify-content: center;
			text-align: center;
		}
	}
</style>
