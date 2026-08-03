<script lang="ts">
	import { onMount } from 'svelte';

	let email = 'contact@dayiii.com';

	onMount(() => {
		const sections = document.querySelectorAll('section');
		const cards = document.querySelectorAll(
			'.service-card, .discipline-item, .pillar-card, .client-figure, .featured-card'
		);

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

		const containers = document.querySelectorAll(
			'.services-grid, .disciplines-grid, .pillars-grid, .legacy-grid'
		);
		containers.forEach((container) => {
			const items = container.querySelectorAll(
				'.service-card, .discipline-item, .pillar-card, .client-figure'
			);
			items.forEach((item, index) => {
				(item as HTMLElement).style.setProperty('--card-index', index.toString());
			});
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

	const legacyProjects = [
		{ name: "Hogwarts Legacy", caption: 'Hogwarts Legacy', poster: '/images/poster-hogwarts_legacy_600x900.png' },
		{ name: 'LEGO Horizon Adventures', caption: 'LEGO Horizon Adventures', poster: '/images/poster-lego_ha_600x900.png' },
		{ name: "Watch Dogs: Legion", caption: 'Watch Dogs: Legion', poster: '/images/poster-watch-dogs-legion.png' },
		{ name: 'For Honor', caption: 'For Honor', poster: '/images/poster-for-honor.png' },
		{ name: "Tom Clancy's Ghost Recon Wildlands", caption: 'Ghost Recon Wildlands', poster: '/images/poster-tom-clancys-ghost-recon-wildlands.png' },
		{ name: "Tom Clancy's Rainbow Six Siege", caption: 'Rainbow Six Siege', poster: '/images/poster-tom-clancys-rainbow-six-siege.png' },
		{ name: 'Star Wars: Hunters', caption: 'Star Wars: Hunters', poster: '/images/poster-star-wars-hunters.png' },
		{ name: 'CSR Racing', caption: 'CSR Racing', poster: '/images/poster-csr-racing.png' }
	];

	const featuredProject = {
		title: 'Mafia: The Old Country',
		years: '2024–2025',
		image: '/images/poster-mafia_the_old_country.png',
		tags: ['Performance Optimization', 'Shader Tech Art', 'Environment Art', 'Engineering', 'Tools & Reporting'],
		description:
			"Full-spectrum technical art and engineering support for Hangar 13's open-world AAA title. Deep performance optimization across CPU, GPU and memory; custom shaders for stylized rendering and environmental effects; procedural environment tools for large-scale world building; automated reporting pipelines for performance tracking and asset validation; and core gameplay engineering in C++ and Blueprints — hitting performance targets on every platform without giving up next-gen visual quality.",
		companies: ['2K Games', 'Hangar 13']
	};
</script>

<div class="page">
	<!-- Hero -->
	<section id="top" class="hero">
		<div class="hero-radial"></div>
		<img src="/images/mountains.png" alt="" class="hero-mountains" />
		<div class="hero-inner">
			<div class="hero-icon-wrap">
				<img src="/images/icon-white.png" alt="Day III Digital" class="hero-icon" />
			</div>
			<h1 class="hero-title">Day III Digital</h1>
			<div class="hero-subtitle">Full spectrum tech art</div>
			<div class="hero-actions">
				<a
					href="https://partners.unrealengine.com/s/partner-detail?partnerAccountId=001QP00001C00VKYAZ"
					class="ue-badge"
				>
					<span class="ue-badge-icon">UE</span>
					Official Unreal Engine Service Partner
				</a>
				<a href="#contact" class="cta-button">Get in touch</a>
			</div>
		</div>
	</section>

	<!-- Statement -->
	<section class="statement">
		<div class="section-inner">
			<h2 class="statement-heading">
				Veteran-led <span class="text-white">Unreal Engine</span> studio
				<span class="text-lavender">for AAA open-world games</span>.
			</h2>
			<p class="statement-text">
				Our custom tools and streamlined workflows help studios overcome technical challenges and
				exceed player expectations.
			</p>
			<p class="statement-text">
				We specialize in technical art, rendering, and deep learning — bringing AAA polish to
				ambitious open-world experiences.
			</p>
		</div>
	</section>

	<!-- Services + Disciplines -->
	<section id="services" class="services">
		<div class="section-inner">
			<div class="section-heading-row">
				<h2>Our services</h2>
				<span class="hairline"></span>
			</div>

			<div class="services-grid">
				<div class="service-card">
					<img src="/images/trim-marmot-paint.png" alt="" class="service-icon" />
					<h3>Technical Art</h3>
					<p>Shader development, procedural content generation, and optimization for real-time rendering.</p>
				</div>
				<div class="service-card">
					<img src="/images/trim-marmot-sword.png" alt="" class="service-icon" />
					<h3>Unreal Engine Development</h3>
					<p>Full-stack Unreal development, from prototyping to production-ready solutions.</p>
				</div>
				<div class="service-card">
					<img src="/images/trim-marmot-cog.png" alt="" class="service-icon" />
					<h3>Performance Optimization</h3>
					<p>Profiling and performance tuning so your project runs smoothly on every target platform.</p>
				</div>
				<div class="service-card">
					<img src="/images/trim-marmot-buddies.png" alt="" class="service-icon" />
					<h3>Co-Development</h3>
					<p>Collaborative partnerships that augment your team with specialized expertise.</p>
				</div>
			</div>

			<div class="eyebrow">Disciplines</div>
			<div class="disciplines-grid">
				<div class="discipline-item">
					<h4>Environment Art &amp; Proceduralism</h4>
					<p>World building, procedural generation, and environmental storytelling at scale.</p>
				</div>
				<div class="discipline-item">
					<h4>Lighting Art</h4>
					<p>Dynamic and baked lighting solutions for mood, atmosphere, and performance.</p>
				</div>
				<div class="discipline-item">
					<h4>Shaders &amp; Mesh Workflows</h4>
					<p>Shaders and materials bridging art and engineering.</p>
				</div>
				<div class="discipline-item">
					<h4>Tech Animation</h4>
					<p>Rigging, animation systems, and real-time character pipelines.</p>
				</div>
				<div class="discipline-item">
					<h4>Engineering</h4>
					<p>C++ and Blueprints development for gameplay, tools, and optimization.</p>
				</div>
				<div class="discipline-item">
					<h4>Tools &amp; Pipeline</h4>
					<p>Custom tools, automation, and production pipelines for efficient workflows.</p>
				</div>
				<div class="discipline-item">
					<h4>Graphics Programming</h4>
					<p>Low-level rendering, GPU optimization, and custom graphics solutions.</p>
				</div>
				<div class="discipline-item">
					<h4>AI Solutions</h4>
					<p>Machine learning and deep learning solutions for games and real-time applications.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Unreal Partner Badge -->
	<section class="partner-section">
		<a
			href="https://partners.unrealengine.com/s/partner-detail?partnerAccountId=001QP00001C00VKYAZ"
			class="partner-card"
		>
			<div class="partner-badges">
				<div class="partner-badge-box">
					<span class="partner-badge-label">Partner</span>
					<span class="partner-badge-year">2025</span>
				</div>
				<div class="partner-badge-box">
					<span class="partner-badge-label">Partner</span>
					<span class="partner-badge-year">2026</span>
				</div>
			</div>
			<div class="partner-content">
				<h3>Official Unreal Engine Service Partner</h3>
				<p>
					Certified by Epic Games as a trusted partner for Unreal Engine development — meeting
					Epic's highest standards for technical expertise, project delivery, and professional
					service.
				</p>
			</div>
		</a>
	</section>

	<!-- Pillars -->
	<section class="pillars">
		<div class="section-inner">
			<div class="section-heading-row">
				<h2>Our pillars</h2>
				<span class="hairline"></span>
			</div>
			<div class="pillars-grid">
				<div class="pillar-card">
					<div class="pillar-number">01</div>
					<h3>Peak</h3>
					<p>
						Technical excellence and creative ambition are at the heart of everything we build. We
						stay sharp, stay curious, and set the bar high — for our tools, our pipelines, and our
						craft.
					</p>
				</div>
				<div class="pillar-card">
					<div class="pillar-number">02</div>
					<h3>Flow</h3>
					<p>
						We work smart, not hard. Efficient pipelines, sustainable practices and innovative
						tooling mean we deliver next-gen quality without burning out. Great work happens when
						the process gets out of the way.
					</p>
				</div>
				<div class="pillar-card">
					<div class="pillar-number">03</div>
					<h3>Grounded</h3>
					<p>
						We rise together. Our studio culture is shaped by our structure. Transparency, shared
						decision-making, and deep roots in our craft keep us stable and focused.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Projects -->
	<section id="projects" class="projects">
		<div class="section-inner">
			<div class="section-heading-row tight">
				<h2>Featured projects</h2>
				<span class="hairline"></span>
			</div>
			<p class="projects-notice">Currently working on <span class="gold-strong">4+</span> unannounced Unreal Engine projects</p>

			<div class="featured-card">
				<img src={featuredProject.image} alt={featuredProject.title} class="featured-image" />
				<div class="featured-content">
					<div class="featured-title-row">
						<h3>{featuredProject.title}</h3>
						<span class="featured-years">{featuredProject.years}</span>
					</div>
					<div class="featured-tags">
						{#each featuredProject.tags as tag}
							<span class="featured-tag">{tag}</span>
						{/each}
					</div>
					<p class="featured-description">{featuredProject.description}</p>
					<div class="featured-footer">
						<span class="featured-with">With</span>
						{#each featuredProject.companies as company, i}
							{#if i > 0}<span class="featured-divider"></span>{/if}
							<span class="featured-company">{company}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Legacy -->
	<section class="legacy">
		<div class="section-inner">
			<div class="section-heading-row tight">
				<h2>Our legacy</h2>
				<span class="hairline"></span>
			</div>
			<p class="legacy-notice">Our team members have built experience working on industry-defining projects</p>

			<div class="legacy-grid">
				{#each legacyProjects as project}
					<figure class="client-figure">
						<img src={project.poster} alt={project.name} class="client-poster" />
						<figcaption>{project.caption}</figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="contact">
		<img src="/images/mountain-div.png" alt="" class="contact-mountains" />
		<div class="section-inner contact-inner">
			<h2 class="contact-heading">Get in touch</h2>
			<p class="contact-text">Looking for technical art help? Let's talk.</p>
			<div class="contact-actions">
				<a href="mailto:{email}" class="contact-cta">
					<img src="/images/icon-mail.png" alt="" class="contact-cta-icon" />
					{email}
				</a>
				<a href="/careers" class="contact-hiring">We're hiring →</a>
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

	:global(*, *::before, *::after) {
		box-sizing: border-box;
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

	.section-heading-row {
		display: flex;
		align-items: baseline;
		gap: 20px;
		margin-bottom: 40px;
	}

	.section-heading-row.tight {
		margin-bottom: 14px;
	}

	.section-heading-row h2 {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(1.8rem, 4vw, 2.75rem);
		line-height: 1;
		text-transform: uppercase;
		color: #ffffff;
		white-space: nowrap;
	}

	.hairline {
		flex: 1;
		height: 1px;
		background: var(--line);
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
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	.scroll-animate.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.card-animate {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.5s ease-out, transform 0.5s ease-out;
		transition-delay: calc(var(--card-index, 0) * 0.06s);
	}

	.card-animate.card-visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Hero */
	@keyframes dayFloat {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.hero {
		padding: 96px 32px 120px;
		overflow: hidden;
	}

	.hero-radial {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			60% 55% at 50% 30%,
			rgba(113, 74, 186, 0.35) 0%,
			rgba(25, 18, 43, 0) 70%
		);
		pointer-events: none;
	}

	.hero-mountains {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		filter: invert(1);
		opacity: 0.13;
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		max-width: 980px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 26px;
	}

	.hero-icon-wrap {
		display: flex;
		justify-content: center;
		animation: dayFloat 6s ease-in-out infinite;
	}

	.hero-icon {
		width: 190px;
		height: auto;
		display: block;
	}

	.hero-title {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(2.6rem, 8vw, 5.5rem);
		line-height: 0.92;
		letter-spacing: -0.01em;
		text-transform: uppercase;
		color: #ffffff;
	}

	.hero-subtitle {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.25rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--gold);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		margin-top: 10px;
	}

	.ue-badge {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 14px 22px;
		border-radius: var(--radius);
		background: linear-gradient(var(--aubergine), var(--aubergine)) padding-box, var(--border-stroke) border-box;
		border: 1.5px solid transparent;
		color: #ffffff;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-decoration: none;
		transition: filter 0.2s ease;
	}

	.ue-badge:hover {
		filter: brightness(1.15);
	}

	.ue-badge-icon {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: #ffffff;
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.65rem;
		flex-shrink: 0;
	}

	.cta-button {
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

	.cta-button:hover {
		filter: brightness(1.08);
	}

	/* Statement */
	.statement {
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}

	.statement-heading {
		margin: 0 0 24px 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(1.6rem, 4vw, 2.5rem);
		line-height: 1.08;
		letter-spacing: -0.005em;
		text-transform: uppercase;
		color: #ffffff;
		text-wrap: balance;
	}

	.text-white {
		color: #ffffff;
	}

	.text-lavender {
		color: var(--lavender);
	}

	.statement-text {
		margin: 0 0 12px 0;
		font-size: 1.25rem;
		line-height: 1.55;
		color: var(--fog);
		max-width: 900px;
	}

	.statement-text:last-child {
		margin-bottom: 0;
	}

	/* Services */
	.services {
		background: var(--ink);
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 24px;
	}

	.service-card {
		border: 1.5px solid transparent;
		border-radius: var(--radius);
		background: linear-gradient(var(--aubergine), var(--aubergine)) padding-box, var(--border-stroke) border-box;
		padding: 28px 24px 30px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		transition: filter 0.2s ease;
	}

	.service-card:hover {
		filter: brightness(1.08);
	}

	.service-icon {
		width: 100%;
		height: 140px;
		object-fit: contain;
		align-self: center;
	}

	.service-card h3 {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.15rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--lavender);
	}

	.service-card p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--mist);
	}

	.eyebrow {
		margin-top: 64px;
		margin-bottom: 8px;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--gold);
	}

	.disciplines-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 36px 32px;
	}

	.discipline-item {
		border-top: 1px solid var(--line);
		padding: 20px 0 4px;
		transition: border-color 0.2s ease;
	}

	.discipline-item:hover {
		border-top-color: var(--gold);
	}

	.discipline-item h4 {
		margin: 0 0 8px 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.9rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: #ffffff;
	}

	.discipline-item p {
		margin: 0;
		font-size: 0.85rem;
		line-height: 1.5;
		color: var(--fog);
	}

	/* Partner badge */
	.partner-section {
		padding: 24px 32px 88px;
		background: var(--ink);
		border-bottom: 1px solid var(--line);
	}

	.partner-card {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 40px;
		align-items: center;
		border: 1.5px solid transparent;
		border-radius: var(--radius);
		background: linear-gradient(var(--aubergine), var(--aubergine)) padding-box, var(--border-stroke) border-box;
		padding: 34px 40px;
		color: inherit;
		text-decoration: none;
		transition: filter 0.2s ease;
	}

	.partner-card:hover {
		filter: brightness(1.1);
	}

	.partner-badges {
		display: flex;
		gap: 16px;
	}

	.partner-badge-box {
		width: 90px;
		height: 90px;
		border-radius: var(--radius);
		border: 1px solid var(--line);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.partner-badge-label {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		color: var(--fog);
	}

	.partner-badge-year {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.6rem;
		color: var(--gold);
	}

	.partner-content h3 {
		margin: 0 0 10px 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.4rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #ffffff;
	}

	.partner-content p {
		margin: 0;
		max-width: 720px;
		font-size: 0.95rem;
		line-height: 1.55;
		color: var(--fog);
	}

	/* Pillars */
	.pillars {
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
	}

	.pillar-card {
		border: 1.5px solid transparent;
		border-radius: var(--radius);
		background: linear-gradient(var(--ink), var(--ink)) padding-box, var(--border-stroke) border-box;
		padding: 34px 30px 36px;
	}

	.pillar-number {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 2.5rem;
		line-height: 1;
		color: var(--gold);
		margin-bottom: 18px;
	}

	.pillar-card h3 {
		margin: 0 0 14px 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.6rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--lavender);
	}

	.pillar-card p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--mist);
	}

	/* Projects */
	.projects {
		background: var(--ink);
	}

	.projects-notice {
		margin: 0 0 36px 0;
		font-size: 0.95rem;
		color: var(--fog);
	}

	.gold-strong {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		color: var(--gold);
	}

	.featured-card {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
		gap: 0;
		border: 1.5px solid transparent;
		border-radius: var(--radius);
		background: linear-gradient(var(--aubergine), var(--aubergine)) padding-box, var(--border-stroke) border-box;
		overflow: hidden;
	}

	.featured-image {
		width: 100%;
		height: 100%;
		min-height: 320px;
		object-fit: cover;
		display: block;
		background: #5c2a44;
	}

	.featured-content {
		padding: 40px 40px 44px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.featured-title-row {
		display: flex;
		align-items: baseline;
		gap: 14px;
		flex-wrap: wrap;
	}

	.featured-title-row h3 {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 1.75rem;
		line-height: 1.05;
		text-transform: uppercase;
		color: #ffffff;
	}

	.featured-years {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		color: var(--gold);
	}

	.featured-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.featured-tag {
		padding: 6px 12px;
		border-radius: 999px;
		border: 1px solid var(--purple);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--lavender);
	}

	.featured-description {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--mist);
	}

	.featured-footer {
		margin-top: auto;
		display: flex;
		align-items: center;
		gap: 14px;
		padding-top: 16px;
		border-top: 1px solid var(--line);
	}

	.featured-with {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--fog);
	}

	.featured-divider {
		width: 1px;
		height: 16px;
		background: var(--line);
	}

	.featured-company {
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		color: #ffffff;
	}

	/* Legacy */
	.legacy {
		border-top: 1px solid var(--line);
	}

	.legacy-notice {
		margin: 0 0 36px 0;
		font-size: 0.95rem;
		color: var(--fog);
	}

	.legacy-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 20px;
	}

	.client-figure {
		margin: 0;
		border-radius: var(--radius);
		overflow: hidden;
		border: 1px solid var(--line);
		background: var(--ink);
		transition: filter 0.2s ease;
	}

	.client-figure:hover {
		filter: brightness(1.12);
	}

	.client-poster {
		width: 100%;
		aspect-ratio: 2 / 3;
		object-fit: cover;
		display: block;
	}

	.client-figure figcaption {
		padding: 14px 16px;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #ffffff;
	}

	/* Contact */
	.contact {
		background: var(--ink);
		border-top: 1px solid var(--line);
		overflow: hidden;
	}

	.contact-mountains {
		position: absolute;
		left: -3px;
		top: 40%;
		width: 100%;
		filter: invert(1);
		opacity: 0.25;
		pointer-events: none;
	}

	.contact-inner {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-top: 100px;
		padding-bottom: 90px;
	}

	.contact-heading {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(2rem, 5vw, 3.5rem);
		line-height: 0.95;
		text-transform: uppercase;
		color: #ffffff;
	}

	.contact-text {
		margin: 0;
		font-size: 1.25rem;
		color: var(--fog);
	}

	.contact-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 6px;
	}

	.contact-cta {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 14px 24px;
		border-radius: var(--radius);
		background: var(--gold);
		color: var(--aubergine);
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.85rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		transition: filter 0.2s ease;
	}

	.contact-cta:hover {
		filter: brightness(1.08);
	}

	.contact-cta-icon {
		width: 22px;
		height: 22px;
	}

	.contact-hiring {
		display: inline-flex;
		align-items: center;
		padding: 14px 24px;
		border-radius: var(--radius);
		border: 1.5px solid transparent;
		background: linear-gradient(var(--ink), var(--ink)) padding-box, var(--border-stroke) border-box;
		color: #ffffff;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.85rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		transition: filter 0.2s ease;
	}

	.contact-hiring:hover {
		filter: brightness(1.15);
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

		.services-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.disciplines-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.pillars-grid {
			grid-template-columns: 1fr;
		}

		.legacy-grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.featured-card {
			grid-template-columns: 1fr;
		}

		.featured-image {
			min-height: 260px;
		}

		.partner-card {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		.section-heading-row h2 {
			white-space: normal;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.disciplines-grid {
			grid-template-columns: 1fr;
		}

		.legacy-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.partner-badges {
			justify-content: center;
		}

		.footer-content {
			justify-content: center;
			text-align: center;
		}
	}
</style>
