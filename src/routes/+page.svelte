<script lang="ts">
	let email = 'contact@dayiii.com';

	const projects = [
		{
			id: 1,
			title: 'AAA Game Optimization',
			description: 'Performance optimization for next-gen console title, achieving 60fps target across all platforms.',
			tags: ['Unreal Engine 5', 'Optimization', 'Console']
		},
		{
			id: 2,
			title: 'Procedural Environment System',
			description: 'Custom procedural generation tools for large-scale open world environments with dynamic LOD systems.',
			tags: ['Technical Art', 'Blueprints', 'PCG']
		},
		{
			id: 3,
			title: 'Real-time Cinematics Pipeline',
			description: 'End-to-end cinematic pipeline using Sequencer and MetaHuman for interactive storytelling.',
			tags: ['Cinematics', 'MetaHuman', 'Sequencer']
		},
		{
			id: 4,
			title: 'Custom Shader Framework',
			description: 'Advanced material system with custom HLSL shaders for stylized rendering and VFX.',
			tags: ['Shaders', 'Materials', 'VFX']
		}
	];
</script>

<div class="container">
	<!-- Hero Section with About side-by-side -->
	<section class="hero">
		<div class="hero-inner">
			<div class="hero-title-block">
				<h1 class="title sr-only">Day III Digital</h1>
				<img src="/images/logo_horizontal.png" alt="Day III Digital" class="hero-logo" />
			</div>
			<div class="hero-columns">
				<div class="hero-content">
					<p class="subtitle"><strong>Technical Art <span class="hero-co-dev">Co-Development</span> Studio</strong></p>
					<p class="tagline">Official Unreal Engine Service Partner</p>
					<a href="#contact" class="cta-button">Get in Touch</a>
				</div>
				<div class="hero-about">
					<p>
						Day III Digital is a veteran-led development studio specializing in technical art, rendering, and deep learning for Unreal Engine and open-world AAA games.
					</p>
					<p>
					    As AAA game development grows more complex and costly, we empower studios with custom tools and streamlined workflows, helping developers overcome technical challenges, control budgets, and exceed player expectations.
					     </p>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="services">
		<div class="section-content">
			<h2 class="services-heading"><span class="services-prefix">Our</span> <span class="services-highlight">Services</span></h2>
			<div class="services-grid">
				<div class="service-card">
					<div class="service-icon">🎨</div>
					<h3>Technical Art</h3>
					<p>
						Expert technical art solutions including shader development, procedural content
						generation, and optimization for real-time rendering.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">⚙️</div>
					<h3>Unreal Engine Development</h3>
					<p>
						Full-stack Unreal Engine development services, from prototyping to production-ready
						solutions.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">🚀</div>
					<h3>Performance Optimization</h3>
					<p>
						Profiling, optimization, and performance tuning to ensure your project runs smoothly
						across all target platforms.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon">🤝</div>
					<h3>Co-Development</h3>
					<p>
						Collaborative partnerships to augment your team with specialized technical art and
						Unreal Engine expertise.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="projects">
		<div class="section-content">
			<h2>Featured Projects</h2>
			<div class="projects-grid">
				{#each projects as project}
					<div class="project-card">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div class="tags">
							{#each project.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Partner Badge Section -->
	<section class="partner">
		<div class="section-content">
			<div class="badge">
				<div class="badge-icon">🏆</div>
				<h3>Official Unreal Engine Service Partner</h3>
				<p>Certified and recognized by Epic Games for excellence in Unreal Engine services.</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact">
		<div class="section-content">
			<h2>Get in Touch</h2>
			<p class="contact-text">
				Ready to bring your project to life? Let's discuss how we can help.
			</p>
			<a href="mailto:{email}" class="email-link">{email}</a>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<p>&copy; {new Date().getFullYear()} Day III Digital. All rights reserved.</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Gabarito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #0a0e27;
		color: #e0e0e0;
		line-height: 1.6;
	}

	.container {
		max-width: 1200px;
		margin: 4.5rem auto 0; /* add space below fixed top bar */
	}

	/* Let the hero card control its own spacing from the top bar */
	.container > section.hero:first-of-type {
		padding-top: 0;
	}

	section {
		/* Minimal vertical padding between sections */
		padding: 0.75rem 2rem;
	}

	/* Hero Section - mountains background with title on top */
	.hero {
		min-height: 38vh; /* slightly shorter mountains hero */
		display: flex;
		align-items: center;
		justify-content: center;
		/* Blue-tinted overlay so the image is visible but matches site palette */
		background:
			linear-gradient(rgba(18, 32, 90, 0.55), rgba(5, 10, 40, 0.8)),
			url('/images/mountain_background.png') center top/cover no-repeat;
		text-align: center;
		position: relative;
		border-radius: 32px; /* more pronounced rounded corners */
		border: 1px solid #1a1f3a; /* subtle border to reveal the shape */
		overflow: hidden;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		margin: 5.5rem 1.5rem 2.5rem; /* clear top bar and give comfortable space */
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}

	.hero-title-block {
		text-align: left; /* align logo to the left */
		width: 100%;
		align-self: flex-start; /* override hero-inner center alignment */
	}

	.hero-logo {
		display: block;
		max-width: 720px;
		width: auto; /* don't center by percentage width */
		height: auto;
	}
	/* Visually hidden but accessible heading */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.hero-columns {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		text-align: left;
	}

	.hero-content,
	.hero-about {
		flex: 1;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at 50% 50%,
			rgba(255, 255, 255, 0.05) 0%,
			transparent 50%
		);
		animation: pulse 4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 0.6;
		}
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}

	.title {
		font-size: clamp(4rem, 9vw, 5.75rem); /* slightly bigger hero title */
		font-weight: 1000;
		margin: 0;
		color: #ffffff; /* Day III Digital in white */
		text-transform: uppercase;
		letter-spacing: 0.02em;
		font-family: 'Gabarito', sans-serif;
	}

	.subtitle {
		font-size: 2.3rem;
		color: #6B8FFF;
		margin: 0.1rem 0;
		line-height: 1.1; /* reduce space between lines */
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	/* Make just the "Co-Development" word in the hero subtitle yellow */
	.hero-co-dev {
		color: #FFD84D;
	}

	.tagline {
		font-size: clamp(1rem, 2vw, 1.3rem);
		color: #6B8FFF;
		margin: 0.4rem 0 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.cta-button {
		display: inline-block;
		padding: 0.7rem 1.8rem;
		background: #FFD84D !important; /* force default yellow */
		color: #0a0e27;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 900;
		text-transform: uppercase;
		margin-top: 0.5rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(255, 216, 77, 0.35);
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.05em;
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(107, 143, 255, 0.5);
		background: #6B8FFF !important; /* blue on hover */
	}

	/* Section Styles */
	.section-content {
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin-top: 0; /* kill default top margin to avoid gaps between sections */
		margin-bottom: 0.5rem;
		color: #FFD84D;
		text-align: center;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	/* About Section */
	.hero-about {
		max-width: 50rem; /* a bit wider while still readable */
		/* Exactly match service card background gradient and styling */
		background: linear-gradient(to bottom, #131a36 0%, #1e274a 100%) !important;
		padding: 1.25rem;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
}

	.hero-about p {
		font-size: 1.05rem; /* keep same font size */
		line-height: 1.5 !important;   /* balanced line spacing */
		color: #ffffff;
		margin: 0 0 1rem !important; /* force clear space between hero-about paragraphs */
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.9); /* clear edge against bright areas */
}

	.hero-about p:last-child {
		margin-bottom: 0 !important; /* avoid extra space after final paragraph */
}

	/* Services Section */
	.services {
		background: #0a0e27;
		/* No extra space above Our Services heading */
		padding-top: 0;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1.5rem;
		margin-top: 0.25rem;
	}

	.service-card {
		position: relative;
		/* Medium-dark vertical gradient: subtle blue (top) → deeper blue (bottom), no black */
		background: linear-gradient(to bottom, #131a36 0%, #1e274a 100%) !important;
		padding: 1.25rem;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
		text-align: center;
		overflow: hidden;
	}

	.service-card:hover {
		transform: translateY(-6px);
		border-color: #6B8FFF;
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
	}

	.service-card:hover {
		transform: translateY(-5px);
		border-color: #6B8FFF;
		box-shadow: 0 8px 25px rgba(107, 143, 255, 0.3);
	}

	.service-card h3 {
		font-size: 1.5rem;
		margin-bottom: 0.05rem; /* very tight space below title */
		line-height: 1 !important; /* force compact title line height */
		color: #6B8FFF; /* cooler blue to match site accent instead of yellow */
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.service-card p {
		color: #e0e5ff !important; /* lighter description text, forced over inherited styles */
		line-height: 1.6;
	}

	/* Projects Section */
	.projects {
		background: #0d1129;
	}

	/* Heading alignment overrides for section titles */
	.services h2 {
		text-align: right;
	}

	.services-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important; /* override global h2 uppercase */
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	.services-prefix {
		color: #ffffff; /* "Explore our" in white */
	}

	.services-highlight {
		color: #FFD84D; /* "Services" in yellow */
	}

	.projects h2 {
		text-align: left;
		color: #FF4D4D; /* red for Featured Projects heading */
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.project-card {
		background: #0a0e27;
		padding: 1.25rem;
		border-radius: 8px;
		border: 2px solid #1a1f3a;
		transition: all 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
		border-color: #FFD84D;
		box-shadow: 0 8px 25px rgba(255, 216, 77, 0.2);
	}

	.project-card h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: #6B8FFF; /* blue for Featured Projects card titles */
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.project-card p {
		color: #b0b0b0;
		line-height: 1.5;
		margin-bottom: 0.75rem;
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
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.03em;
	}

	/* Partner Section */
	.partner {
		background: #0d1129;
	}

	.badge {
		text-align: center;
		padding: 1.5rem;
		background: #0a0e27;
		border-radius: 8px;
		border: 3px solid #6B8FFF;
	}

	.badge-icon {
		font-size: 4rem;
		margin-bottom: 0.5rem;
	}

	.badge h3 {
		font-size: 2rem;
		color: #6B8FFF;
		margin: 0.5rem 0;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.badge p {
		font-size: 1.1rem;
		color: #b0b0b0;
	}

	/* Contact Section */
	.contact {
		background: #0a0e27;
		text-align: center;
	}

	.contact-text {
		font-size: 1.2rem;
		color: #b0b0b0;
		margin-bottom: 0.75rem;
	}

	.email-link {
		font-size: 1.5rem;
		color: #6B8FFF;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;
		font-weight: 700;
		font-family: 'Gabarito', sans-serif;
	}

	.email-link:hover {
		border-bottom-color: #FFD84D;
		color: #FFD84D;
	}

	/* Footer */
	footer {
		background: #050812;
		text-align: center;
		padding: 1.5rem;
		color: #666;
		border-top: 1px solid #1a1f3a;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		section {
			padding: 1.75rem 1.25rem;
		}

		.hero-columns {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 2rem;
		}

		.hero {
			text-align: center;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
