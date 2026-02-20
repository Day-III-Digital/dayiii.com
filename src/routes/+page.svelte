<script lang="ts">
	import { onMount } from 'svelte';

	let email = 'contact@dayiii.com';

	onMount(() => {
		const sections = document.querySelectorAll('section:not(.hero)');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				} else {
					entry.target.classList.remove('visible');
				}
			});
		}, {
			threshold: 0.15
		});

		// Small delay to ensure CSS is ready, then add animation class and observe
		requestAnimationFrame(() => {
			sections.forEach(section => {
				section.classList.add('scroll-animate');
				observer.observe(section);
			});
		});

		return () => observer.disconnect();
	});

	const clientProjects = [
		{ name: 'Hangar 13', logo: '/images/hanger13_logo.png', members: 3 },
		{ name: '2K Games', logo: '/images/2k_logo.svg', members: 2 },
		{ name: 'Epic Games', logo: '/images/unreal_icon.png', members: 1 },
		{ name: 'Ubisoft', logo: '/images/unreal_icon.png', members: 2 },
		{ name: 'EA', logo: '/images/unreal_icon.png', members: 1 },
		{ name: 'Rockstar', logo: '/images/unreal_icon.png', members: 2 },
		{ name: 'CD Projekt', logo: '/images/unreal_icon.png', members: 1 },
		{ name: 'Bethesda', logo: '/images/unreal_icon.png', members: 2 }
	];

	const featuredProject = {
		title: 'Mafia: The Old Country',
		description: 'Full-spectrum technical art and engineering support for Hangar 13\'s open-world AAA title. Our team delivered deep performance optimization across CPU, GPU, and memory, custom shader development for stylized rendering and environmental effects, procedural environment tools for large-scale world building, automated reporting pipelines for performance tracking and asset validation, and core gameplay engineering using C++ and Blueprints. We worked closely with the Hangar 13 team to hit performance targets on all platforms while maintaining the visual quality expected from a next-gen AAA experience.',
		tags: ['Performance Optimization', 'Shader Tech Art', 'Environment Art', 'Engineering', 'Tools & Reporting'],
		images: [
			'/images/mafia_the_old_country.jpg',
			'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1941540/ss_8c5af3a1b47337fe9d2f4f48d21975964eb23ccb.1920x1080.jpg',
			'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1941540/ss_44047e62744c4a7201a0238994d23f3ca72649cb.1920x1080.jpg'
		],
		companyLogos: [
			{ src: '/images/2k_logo.svg', alt: '2K Games' },
			{ src: '/images/hanger13_logo.png', alt: 'Hangar 13' },
		]
	};

	let currentImageIndex = 0;

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % featuredProject.images.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + featuredProject.images.length) % featuredProject.images.length;
	}
</script>

<div class="page-bg">
	<div class="bubble bubble-1"></div>
	<div class="bubble bubble-2"></div>
	<div class="bubble bubble-3"></div>
	<div class="bubble bubble-4"></div>
	<div class="bubble bubble-5"></div>
	<div class="bubble bubble-6"></div>
	<div class="bubble bubble-7"></div>
	<div class="bubble bubble-8"></div>
	<div class="bubble bubble-9"></div>
	<div class="bubble bubble-10"></div>
	<div class="bubble bubble-11"></div>
	<div class="bubble bubble-12"></div>
	<div class="bg-glow"></div>
</div>
<div class="container">
	<!-- Hero Section - Split Layout -->
	<section class="hero">
		<div class="hero-split">
			<div class="hero-left">
				<h1 class="title sr-only">Day III Digital</h1>
				<img src="/images/logo_horizontal_rounded.png" alt="Day III Digital" class="hero-logo" />
				<div class="hero-taglines">
<p class="subtitle"><span class="full-spectrum">Full Spectrum</span> <span class="subtitle-highlight">Technical Art</span></p>
				</div>
				<span class="partner-badge"><img src="/images/unreal_icon.png" alt="Unreal Engine" class="partner-icon" /> Official Unreal Engine Service Partner</span>
				<a href="#contact" class="cta-button">Get in Touch</a>
			</div>
			<div class="hero-right">
				<div class="hero-about">
<h2 class="about-heading"><span class="about-highlight">HI</span> <span class="about-prefix">THERE!</span></h2>
					<p class="about-text">A veteran-led development studio for Unreal Engine and open-world AAA games, specializing in <span class="keyword">technical art</span>, <span class="keyword">rendering</span>, and <span class="keyword">deep learning</span>.</p>
					<p class="about-text">Our custom tools and streamlined workflows help studios overcome technical challenges, control budgets, and exceed player expectations.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="services">
		<div class="section-content">
			<h2 class="services-heading"><span class="services-prefix">OUR</span> <span class="services-highlight">SERVICES</span></h2>
			<div class="services-grid">
				<div class="service-card">
					<div class="service-icon"><img src="/images/marmot_painting_icon.png" alt="Technical Art" /></div>
					<h3>Technical Art</h3>
					<p>
						Expert technical art solutions including shader development, procedural content
						generation, and optimization for real-time rendering.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon"><img src="/images/marmot_unreal_icon.png" alt="Unreal Engine Development" /></div>
					<h3>Unreal Engine Development</h3>
					<p>
						Full-stack Unreal Engine development services, from prototyping to production-ready
						solutions.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon"><img src="/images/marmot_performance_icon.png" alt="Performance Optimization" /></div>
					<h3>Performance Optimization</h3>
					<p>
						Profiling, optimization, and performance tuning to ensure your project runs smoothly
						across all target platforms.
					</p>
				</div>
				<div class="service-card">
					<div class="service-icon"><img src="/images/marmot_codev_icon.png" alt="Co-Development" /></div>
					<h3>Co-Development</h3>
					<p>
						Collaborative partnerships to augment your team with specialized technical art and
						Unreal Engine expertise.
					</p>
				</div>
			</div>

			<div class="section-divider"></div>

			<div class="expertise-grid">
				<div class="expertise-card">
					<h3>Environment Art & Proceduralism</h3>
					<p>World building, procedural generation, and environmental storytelling at scale.</p>
				</div>
				<div class="expertise-card">
					<h3>Lighting Art</h3>
					<p>Dynamic and baked lighting solutions for mood, atmosphere, and performance.</p>
				</div>
				<div class="expertise-card">
					<h3>Tech Art</h3>
					<p>Shaders, materials, and procedural systems bridging art and engineering.</p>
				</div>
				<div class="expertise-card">
					<h3>Tech Animation</h3>
					<p>Rigging, animation systems, and real-time character pipelines.</p>
				</div>
				<div class="expertise-card">
					<h3>Engineering</h3>
					<p>C++ and Blueprints development for gameplay, tools, and optimization.</p>
				</div>
				<div class="expertise-card">
					<h3>Tools & Pipeline</h3>
					<p>Custom tools, automation, and production pipelines for efficient workflows.</p>
				</div>
				<div class="expertise-card">
					<h3>Graphics Programming</h3>
					<p>Low-level rendering, GPU optimization, and custom graphics solutions.</p>
				</div>
				<div class="expertise-card">
					<h3>AI Solutions</h3>
					<p>Machine learning and deep learning solutions for games and real-time applications.</p>
				</div>
			</div>

<a href="https://partners.unrealengine.com/s/partner-detail?partnerAccountId=001QP00001C00VKYAZ" target="_blank" rel="noopener noreferrer" class="unreal-partner">
				<div class="unreal-logos">
					<img src="/images/unreal_icon.png" alt="Unreal Engine" class="unreal-logo" />
					<img src="/images/unreal_icon.png" alt="Epic Games" class="unreal-logo" />
				</div>
				<div class="unreal-content">
					<h3>Official Unreal Engine Service Partner</h3>
					<p>Certified by Epic Games as a trusted partner for Unreal Engine development. This recognition means we meet Epic's highest standards for technical expertise, project delivery, and professional service.</p>
				</div>
			</a>

			<h2 class="pillars-heading"><span class="pillars-prefix">OUR</span> <span class="pillars-highlight">PILLARS</span></h2>
			<div class="pillars-grid">
				<div class="pillar-card">
					<h3>Peak</h3>
					<p>We push what's possible. <span class="keyword">Technical excellence</span> and <span class="keyword">creative ambition</span> are at the heart of everything we build. We stay sharp, stay curious, and set the bar high — for our tools, our pipelines, and our craft.</p>
				</div>
				<div class="pillar-card">
					<h3>Flow</h3>
					<p>We work smart, not hard. <span class="keyword">Efficient pipelines</span>, <span class="keyword">sustainable practices</span> and <span class="keyword">innovative tooling</span> mean we deliver next-gen quality without burning out. Great work happens when the process gets out of the way.</p>
				</div>
				<div class="pillar-card">
					<h3>Grounded</h3>
					<p>We rise together. Our studio culture is shaped by our structure. <span class="keyword">Transparency</span>, <span class="keyword">shared decision-making</span>, and <span class="keyword">deep roots</span> in our craft keep us stable and focused.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="projects">
		<div class="section-content">
			<h2 class="projects-heading"><span class="projects-prefix">FEATURED</span> <span class="projects-highlight">PROJECTS</span></h2>
<p class="projects-notice">Currently working on <span class="notice-highlight">3+ unannounced</span> Unreal Engine projects</p>

			<div class="featured-project-card">
				<div class="featured-gallery">
					<div class="gallery-container">
						<img src={featuredProject.images[currentImageIndex]} alt="{featuredProject.title} screenshot" class="gallery-image" />
					</div>
					<div class="gallery-controls">
						<button class="gallery-btn" on:click={prevImage}>‹</button>
						<div class="gallery-dots">
							{#each featuredProject.images as _, i}
								<span class="gallery-dot" class:active={i === currentImageIndex}></span>
							{/each}
						</div>
						<button class="gallery-btn" on:click={nextImage}>›</button>
					</div>
				</div>

				<div class="featured-content">
					<h3 class="featured-title">{featuredProject.title}</h3>
					<div class="featured-tags">
						{#each featuredProject.tags as tag}
							<span class="featured-tag">{tag}</span>
						{/each}
					</div>
					<p class="featured-description">{featuredProject.description}</p>
				</div>

				<div class="featured-logos">
					{#each featuredProject.companyLogos as logo}
						<div class="company-logo-wrapper">
							<img src={logo.src} alt={logo.alt} class="company-logo" />
						</div>
					{/each}
				</div>
			</div>

<h2 class="projects-heading experience-heading"><span class="projects-prefix">OUR TEAM'S PAST</span> <span class="projects-highlight">EXPERIENCE</span></h2>
			<div class="clients-grid">
				{#each clientProjects as client}
					<div class="client-card">
						<div class="client-logo-wrapper">
							<img src={client.logo} alt={client.name} class="client-logo" />
						</div>
						<div class="client-members">
							<span class="members-count">{client.members}</span>
<span class="members-label">team members have worked on this</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>


	<!-- Contact Section -->
	<section id="contact" class="contact">
		<div class="section-content">
			<h2 class="contact-heading"><span class="contact-prefix">GET IN</span> <span class="contact-highlight">TOUCH</span></h2>

			<div class="contact-box">
				<p class="contact-intro">Ready to bring your project to life? Let's talk.</p>
				<a href="mailto:{email}" class="contact-cta">{email}</a>
				<div class="contact-footer">
					<a href="/careers" class="contact-careers">We're hiring →</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer>
		<div class="footer-content">
			<img src="/images/logo_square_rounded.png" alt="Day III Digital" class="footer-logo" />
			<p class="footer-text">&copy; {new Date().getFullYear()} Day III Digital. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: 'Gabarito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #0a0e27;
		color: #e0e0e0;
		line-height: 1.6;
		overflow-x: hidden;
	}

	.container {
		max-width: 1200px;
		margin: 4.5rem auto 0; /* add space below fixed top bar */
		position: relative;
		z-index: 1;
	}

	/* Let the hero card control its own spacing from the top bar */
	.container > section.hero:first-of-type {
		padding-top: 0;
	}

section {
		padding: 2rem;
		border-top: 1px solid rgba(107, 143, 255, 0.15);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	section.scroll-animate {
		opacity: 0;
		transform: translateY(30px);
	}

	section.scroll-animate.visible {
		opacity: 1;
		transform: translateY(0);
	}

	section.hero {
		border-top: none;
		padding: 0;
	}

	/* Hero Section - Split Layout */
	.hero {
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		margin: 0;
		padding: 0;
		background: transparent;
	}

	/* Animated Background - Full Page */
	.page-bg {
		position: fixed;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}

	.bubble {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
	}

	.bubble-1 {
		width: 25vmin;
		height: 25vmin;
		background: rgba(99, 102, 241, 0.5);
		animation: float1 70s ease-in-out infinite;
	}

	.bubble-2 {
		width: 8vmin;
		height: 8vmin;
		background: rgba(139, 92, 246, 0.5);
		animation: float2 55s ease-in-out infinite;
	}

	.bubble-3 {
		width: 20vmin;
		height: 20vmin;
		background: rgba(59, 130, 246, 0.45);
		animation: float3 75s ease-in-out infinite;
	}

	.bubble-4 {
		width: 10vmin;
		height: 10vmin;
		background: rgba(14, 165, 233, 0.5);
		animation: float4 50s ease-in-out infinite;
	}

	.bubble-5 {
		width: 28vmin;
		height: 28vmin;
		background: rgba(168, 85, 247, 0.35);
		animation: float5 100s ease-in-out infinite;
	}

	.bubble-6 {
		width: 7vmin;
		height: 7vmin;
		background: rgba(79, 70, 229, 0.55);
		animation: float6 45s ease-in-out infinite;
	}

	.bubble-7 {
		width: 22vmin;
		height: 22vmin;
		background: rgba(56, 189, 248, 0.4);
		animation: float7 90s ease-in-out infinite;
	}

	.bubble-8 {
		width: 9vmin;
		height: 9vmin;
		background: rgba(129, 140, 248, 0.5);
		animation: float8 52s ease-in-out infinite;
	}

	.bubble-9 {
		width: 16vmin;
		height: 16vmin;
		background: rgba(192, 132, 252, 0.4);
		animation: float9 80s ease-in-out infinite;
	}

	.bubble-10 {
		width: 6vmin;
		height: 6vmin;
		background: rgba(96, 165, 250, 0.55);
		animation: float10 40s ease-in-out infinite;
	}

	.bubble-11 {
		width: 30vmin;
		height: 30vmin;
		background: rgba(99, 102, 241, 0.3);
		animation: float11 110s ease-in-out infinite;
	}

	.bubble-12 {
		width: 11vmin;
		height: 11vmin;
		background: rgba(34, 211, 238, 0.45);
		animation: float12 60s ease-in-out infinite;
	}

	@keyframes float1 {
		0% { transform: translate(20vw, 30vh); }
		50% { transform: translate(70vw, 60vh); }
		100% { transform: translate(20vw, 30vh); }
	}

	@keyframes float2 {
		0% { transform: translate(80vw, 20vh); }
		50% { transform: translate(30vw, 70vh); }
		100% { transform: translate(80vw, 20vh); }
	}

	@keyframes float3 {
		0% { transform: translate(50vw, 50vh); }
		33% { transform: translate(10vw, 20vh); }
		66% { transform: translate(85vw, 80vh); }
		100% { transform: translate(50vw, 50vh); }
	}

	@keyframes float4 {
		0% { transform: translate(15vw, 70vh); }
		50% { transform: translate(60vw, 15vh); }
		100% { transform: translate(15vw, 70vh); }
	}

	@keyframes float5 {
		0% { transform: translate(70vw, 40vh); }
		33% { transform: translate(25vw, 80vh); }
		66% { transform: translate(40vw, 10vh); }
		100% { transform: translate(70vw, 40vh); }
	}

	@keyframes float6 {
		0% { transform: translate(35vw, 85vh); }
		50% { transform: translate(75vw, 25vh); }
		100% { transform: translate(35vw, 85vh); }
	}

	@keyframes float7 {
		0% { transform: translate(60vw, 10vh); }
		33% { transform: translate(20vw, 50vh); }
		66% { transform: translate(80vw, 75vh); }
		100% { transform: translate(60vw, 10vh); }
	}

	@keyframes float8 {
		0% { transform: translate(90vw, 55vh); }
		50% { transform: translate(40vw, 30vh); }
		100% { transform: translate(90vw, 55vh); }
	}

	@keyframes float9 {
		0% { transform: translate(5vw, 45vh); }
		33% { transform: translate(55vw, 85vh); }
		66% { transform: translate(85vw, 35vh); }
		100% { transform: translate(5vw, 45vh); }
	}

	@keyframes float10 {
		0% { transform: translate(45vw, 15vh); }
		50% { transform: translate(10vw, 65vh); }
		100% { transform: translate(45vw, 15vh); }
	}

	@keyframes float11 {
		0% { transform: translate(75vw, 75vh); }
		33% { transform: translate(30vw, 25vh); }
		66% { transform: translate(60vw, 50vh); }
		100% { transform: translate(75vw, 75vh); }
	}

	@keyframes float12 {
		0% { transform: translate(25vw, 55vh); }
		50% { transform: translate(65vw, 90vh); }
		100% { transform: translate(25vw, 55vh); }
	}

	.bg-glow {
		position: absolute;
		top: 30%;
		left: 50%;
		width: 150%;
		height: 150%;
		transform: translate(-50%, -50%);
		background: radial-gradient(ellipse at center, rgba(107, 143, 255, 0.1) 0%, rgba(255, 140, 50, 0.04) 30%, transparent 60%);
		animation: pulseGlow 6s ease-in-out infinite;
	}

	@keyframes pulseGlow {
		0%, 100% {
			opacity: 0.5;
			transform: translate(-50%, -50%) scale(1);
		}
		50% {
			opacity: 0.8;
			transform: translate(-50%, -50%) scale(1.1);
		}
	}

	/* Staggered grid animation */
	@keyframes fadeSlideUp {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	@keyframes slideInLeft {
		0% {
			opacity: 0;
			transform: translateX(-20px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideInRight {
		0% {
			opacity: 0;
			transform: translateX(20px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.hero-split {
		display: flex;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 2.5rem 3rem;
		gap: 3rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.hero-left {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		animation: slideInLeft 0.8s ease-out both;
	}

	.hero-right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: slideInRight 0.8s ease-out 0.2s both;
	}

	.hero-logo {
		display: block;
		max-width: 480px;
		width: 100%;
		height: auto;
		margin-bottom: 1.5rem;
		filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
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

	.title {
		font-size: clamp(4rem, 9vw, 5.75rem); /* slightly bigger hero title */
		font-weight: 1000;
		margin: 0;
		color: #ffffff; /* Day III Digital in white */
		text-transform: uppercase;
		letter-spacing: 0.02em;
		font-family: 'Gabarito', sans-serif;
	}

	.hero-taglines {
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 2rem;
		color: #6B8FFF;
		margin: 0;
		line-height: 1.1;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.subtitle-accent {
		font-size: 2rem;
		color: #FFD84D;
		margin: 0.2rem 0 0 0;
		line-height: 1.1;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.studio-text {
		color: #ffffff;
	}

	.amp-text {
		color: #FFD84D;
	}

	.subtitle-highlight {
		color: #FFD84D;
	}

	/* Full Spectrum Rainbow Shimmer Effect */
	.full-spectrum {
		position: relative;
		display: inline-block;
	}

	.full-spectrum::before {
		content: 'Full Spectrum';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			105deg,
			transparent 0%,
			rgba(255,80,80,0.9) 10%, rgba(255,160,0,0.9) 20%,
			rgba(255,255,0,0.9) 30%, rgba(0,255,120,0.9) 40%,
			rgba(0,200,255,0.9) 50%, rgba(100,80,255,0.9) 60%,
			rgba(255,0,200,0.9) 70%, rgba(255,80,80,0.9) 80%,
			transparent 100%
		);
		background-size: 300% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		opacity: 0;
		pointer-events: none;
		animation: spectrumTrigger 3s ease-in-out infinite;
	}

	.full-spectrum::after {
		content: '';
		position: absolute;
		inset: -6px;
		border-radius: 4px;
		background: linear-gradient(
			105deg,
			transparent 0%,
			rgba(255,80,80,0.25) 15%, rgba(255,200,0,0.25) 25%,
			rgba(0,255,150,0.25) 38%, rgba(0,180,255,0.25) 50%,
			rgba(140,60,255,0.25) 62%, rgba(255,0,180,0.25) 75%,
			transparent 100%
		);
		background-size: 300% 100%;
		filter: blur(8px);
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		animation: glowScan 3s ease-in-out infinite;
	}

	@keyframes spectrumTrigger {
		0%   { opacity: 0; background-position: -100% 0; }
		3%   { opacity: 0.9; }
		35%  { background-position: 200% 0; opacity: 0.9; }
		47%  { opacity: 0; }
		100% { opacity: 0; background-position: 200% 0; }
	}

	@keyframes glowScan {
		0%   { opacity: 0; background-position: -100% 0; }
		3%   { opacity: 1; }
		35%  { background-position: 200% 0; opacity: 1; }
		47%  { opacity: 0; }
		100% { opacity: 0; background-position: 200% 0; }
	}

	.partner-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: rgba(107, 143, 255, 0.15);
		border: 1px solid rgba(107, 143, 255, 0.3);
		border-radius: 6px;
		color: #6B8FFF;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.08em;
		margin-bottom: 1rem;
		transition: all 0.3s ease;
	}

	.partner-badge:hover {
		background: rgba(107, 143, 255, 0.25);
		border-color: rgba(107, 143, 255, 0.5);
	}

	.partner-icon {
		width: 28px;
		height: 28px;
		object-fit: contain;
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
		position: relative;
		z-index: 10;
	}

	/* About Section */
	.about {
		background: transparent;
	}

	.hero-about {
		position: relative;
		max-width: 560px;
		width: 100%;
		min-height: 280px;
		background: rgba(19, 26, 54, 0.92);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		padding: 1.75rem 2.5rem 2.5rem 2.5rem;
		border-radius: 20px;
		border: 1px solid rgba(107, 143, 255, 0.2);
		box-shadow:
			0 25px 60px rgba(0, 0, 0, 0.5),
			0 0 40px rgba(107, 143, 255, 0.08),
			inset 0 0 80px rgba(107, 143, 255, 0.03);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.hero-about::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #6B8FFF, #FFD84D);
		border-radius: 20px 20px 0 0;
	}


	.about-heading {
		font-size: 1.6rem;
		margin: 0 0 1rem 0;
		text-align: left;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 900;
	}

	.about-highlight {
		color: #FFD84D;
	}

	.about-prefix {
		color: #ffffff;
	}

	.about-text {
		font-size: 1.02rem;
		line-height: 1.75;
		color: #ffffff;
		margin: 0 0 1rem;
		text-align: justify;
	}

	.about-text:last-child {
		margin-bottom: 0;
	}

	.keyword {
		color: #FFD84D;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.keyword:hover {
		text-shadow: 0 0 8px rgba(255, 216, 77, 0.5);
	}

	/* Services Section */
	.services {
		background: transparent;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1.5rem;
		margin-top: 0.25rem;
	}

	.service-card {
		position: relative;
		background: rgba(19, 26, 54, 0.88);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 2rem 1.25rem 1.25rem 1.25rem;
		border-radius: 16px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
		text-align: center;
		overflow: hidden;
		animation: fadeSlideUp 0.6s ease-out both;
	}

	.service-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #6B8FFF, #FFD84D);
		border-radius: 16px 16px 0 0;
	}

	.service-card:nth-child(1) { animation-delay: 0s; }
	.service-card:nth-child(2) { animation-delay: 0.1s; }
	.service-card:nth-child(3) { animation-delay: 0.2s; }
	.service-card:nth-child(4) { animation-delay: 0.3s; }

	.service-card:hover {
		border-color: rgba(107, 143, 255, 0.4);
		transform: translateY(-4px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	}

	.service-card h3 {
		font-size: 1.5rem;
		margin: 0 0 0.25rem 0;
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

	.service-icon {
		font-size: 3rem;
		margin-bottom: -0.5rem;
	}

	.service-icon img {
		width: 120px;
		height: 120px;
		object-fit: contain;
	}

	/* Projects Section */
	.projects {
		background: transparent;
		scroll-margin-top: 5rem;
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
		animation: fadeIn 0.6s ease-out both;
	}

	.services-prefix {
		color: #ffffff; /* "Explore our" in white */
	}

	.services-highlight {
		color: #FFD84D;
	}

	.section-divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(107, 143, 255, 0.3), transparent);
		margin: 2.5rem 0;
	}

	/* Expertise Subsection */
	.expertise-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		animation: fadeIn 0.6s ease-out both;
		margin-top: 3rem;
		text-align: left;
	}

	.expertise-prefix {
		color: #ffffff;
	}

	.expertise-highlight {
		color: #FFD84D;
	}

	/* Pillars Section */
	.pillars-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		animation: fadeIn 0.6s ease-out both;
		margin-top: 3rem;
		text-align: left !important;
	}

	.pillars-prefix {
		color: #ffffff;
	}

	.pillars-highlight {
		color: #FFD84D;
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 0.5rem;
	}

	.pillar-card {
		background: rgba(19, 26, 54, 0.88);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 1.5rem;
		border-radius: 16px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		transition: all 0.3s ease;
		animation: fadeSlideUp 0.6s ease-out both;
	}

	.pillar-card:nth-child(1) { animation-delay: 0s; }
	.pillar-card:nth-child(2) { animation-delay: 0.1s; }
	.pillar-card:nth-child(3) { animation-delay: 0.2s; }

	.pillar-card:hover {
		transform: translateY(-6px);
		border-color: #6B8FFF;
		box-shadow: 0 12px 30px rgba(107, 143, 255, 0.25);
	}

	.pillar-card h3 {
		font-size: 1.5rem;
		margin: 0 0 0.75rem 0;
		color: #6B8FFF;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		text-align: center;
	}

	.pillar-card p {
		color: #ffffff;
		line-height: 1.7;
		margin: 0;
		text-align: center;
	}

	.projects h2 {
		text-align: right;
	}

	.projects h2.experience-heading {
		text-align: left;
		margin-top: 3rem;
		padding-top: 2.5rem;
		border-top: 1px solid rgba(107, 143, 255, 0.2);
	}

	.projects-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		animation: fadeIn 0.6s ease-out both;
	}

	.projects-prefix {
		color: #ffffff;
	}

	.projects-highlight {
		color: #FFD84D;
	}

	.projects-notice {
		position: relative;
		background: rgba(255, 216, 77, 0.25);
		border: 1px solid rgba(255, 216, 77, 0.3);
		border-radius: 12px;
		padding: 1.25rem 1.5rem;
		margin: 0 0 2rem 0;
		font-size: 1.25rem;
		font-weight: 700;
		color: #ffffff;
		font-family: 'Gabarito', sans-serif;
		text-align: center;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}

	.projects-notice::before {
		display: none;
	}

	.notice-highlight {
		color: #FFD84D;
		font-weight: 900;
	}

	/* Featured Project Card */
	.featured-project-card {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1.4fr auto;
		gap: 2rem;
		background: rgba(19, 26, 54, 0.88);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 2rem;
		border-radius: 16px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		animation: fadeSlideUp 0.6s ease-out both;
		overflow: hidden;
		min-height: 320px;
	}

	.featured-project-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #6B8FFF, #FFD84D);
		border-radius: 16px 16px 0 0;
	}

	.featured-gallery {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.gallery-container {
		width: 100%;
		aspect-ratio: 16 / 10;
		border-radius: 12px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 0.3s ease;
	}

	.gallery-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.gallery-btn {
		background: rgba(107, 143, 255, 0.2);
		border: 1px solid rgba(107, 143, 255, 0.3);
		color: #6B8FFF;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gallery-btn:hover {
		background: rgba(107, 143, 255, 0.4);
		color: #ffffff;
	}

	.gallery-dots {
		display: flex;
		gap: 0.5rem;
	}

	.gallery-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(107, 143, 255, 0.3);
		transition: all 0.2s ease;
	}

	.gallery-dot.active {
		background: #6B8FFF;
		transform: scale(1.2);
	}

	.featured-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.featured-title {
		font-size: 1.8rem;
		margin: 0 0 1rem 0;
		color: #FFD84D;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.featured-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.featured-tag {
		background: rgba(107, 143, 255, 0.2);
		color: #6B8FFF;
		padding: 0.35rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.03em;
	}

	.featured-description {
		color: #b0b0b0;
		line-height: 1.7;
		margin: 0;
		font-size: 1rem;
	}

	.featured-logos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		padding-left: 1.5rem;
		border-left: 1px solid rgba(107, 143, 255, 0.2);
	}

	.company-logo-wrapper {
		width: 70px;
		height: 70px;
		border-radius: 12px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
	}

	.company-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* Client Cards */
	.clients-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.client-card {
		background: rgba(19, 26, 54, 0.88);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 1.5rem;
		border-radius: 12px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		transition: all 0.3s ease;
	}

	.client-card:hover {
		border-color: rgba(107, 143, 255, 0.4);
		transform: translateY(-4px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	}

	.client-logo-wrapper {
		width: 80px;
		height: 80px;
		border-radius: 12px;
		overflow: hidden;
		background: #000;
		border: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem;
	}

	.client-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.client-members {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.members-count {
		font-size: 1.8rem;
		font-weight: 900;
		color: #FFD84D;
		font-family: 'Gabarito', sans-serif;
		line-height: 1;
	}

	.members-label {
		font-size: 0.75rem;
		color: #6a6a7a;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-align: center;
	}

	/* Team & Partner Section */
	.team-partner {
		background: transparent;
	}

	.team-partner h2 {
		text-align: right;
	}

	.team-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		animation: fadeIn 0.6s ease-out both;
	}

	.team-prefix {
		color: #ffffff;
	}

	.team-highlight {
		color: #FFD84D;
	}

	.expertise-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		margin-bottom: 2.5rem;
	}

	.expertise-card {
		background: rgba(19, 26, 54, 0.88);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 1.5rem 1rem;
		border-radius: 12px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		text-align: center;
		transition: all 0.3s ease;
		animation: fadeSlideUp 0.6s ease-out both;
	}

	.expertise-card:nth-child(1) { animation-delay: 0s; }
	.expertise-card:nth-child(2) { animation-delay: 0.08s; }
	.expertise-card:nth-child(3) { animation-delay: 0.16s; }
	.expertise-card:nth-child(4) { animation-delay: 0.24s; }
	.expertise-card:nth-child(5) { animation-delay: 0.32s; }
	.expertise-card:nth-child(6) { animation-delay: 0.4s; }
	.expertise-card:nth-child(7) { animation-delay: 0.48s; }
	.expertise-card:nth-child(8) { animation-delay: 0.56s; }

	.expertise-card:hover {
		border-color: rgba(107, 143, 255, 0.4);
		transform: translateY(-4px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	}

	.expertise-icon {
		font-size: 2.5rem;
		margin-bottom: 0.75rem;
		filter: grayscale(1) brightness(2);
		transition: transform 0.3s ease;
	}

	.expertise-card:hover .expertise-icon {
		transform: scale(1.15) rotate(5deg);
	}

	.expertise-card h3 {
		font-size: 1rem;
		color: #6B8FFF;
		margin: 0 0 0.5rem 0;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	.expertise-card p {
		color: #ffffff;
		font-size: 0.85rem;
		line-height: 1.5;
		margin: 0;
	}

	.unreal-partner {
		position: relative;
		background: rgba(255, 216, 77, 0.15);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 2rem;
		border-radius: 16px;
		border: 2px solid rgba(255, 216, 77, 0.4);
		display: flex;
		align-items: center;
		gap: 2rem;
		animation: fadeSlideUp 0.6s ease-out 0.6s both;
		transition: all 0.3s ease;
		text-decoration: none;
		cursor: pointer;
		overflow: hidden;
	}

	.unreal-partner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: #FFD84D;
		border-radius: 16px 16px 0 0;
	}

	.unreal-partner:hover {
		border-color: rgba(255, 216, 77, 0.7);
		box-shadow: 0 10px 30px rgba(255, 216, 77, 0.2);
	}

	.unreal-logos {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-shrink: 0;
	}

	.unreal-logo {
		width: 80px;
		height: 80px;
		flex-shrink: 0;
		transition: transform 0.3s ease;
		background: #000;
		border-radius: 12px;
		padding: 0.5rem;
		object-fit: contain;
	}

	.unreal-partner:hover .unreal-logo {
		transform: scale(1.1);
	}

	.unreal-content h3 {
		font-size: 1.4rem;
		color: #FFD84D;
		margin: 0 0 0.75rem 0;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.unreal-content p {
		color: #b0b0b0;
		line-height: 1.7;
		margin: 0;
		font-size: 1rem;
	}

	/* Contact Section */
	.contact {
		background: transparent;
		scroll-margin-top: 5rem;
	}

	.contact h2 {
		text-align: right;
	}

	.contact-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		animation: fadeIn 0.6s ease-out both;
	}

	.contact-prefix {
		color: #ffffff;
	}

	.contact-highlight {
		color: #FFD84D;
	}

	.contact-box {
		padding: 2.5rem;
		background: rgba(19, 26, 54, 0.88);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-radius: 16px;
		border: 1px solid rgba(107, 143, 255, 0.2);
		text-align: center;
		animation: fadeSlideUp 0.6s ease-out both;
		transition: all 0.3s ease;
	}

	.contact-box:hover {
		border-color: rgba(107, 143, 255, 0.4);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.contact-intro {
		font-size: 1.1rem;
		color: #b0b0b0;
		margin: 0 0 1rem 0;
	}

	.contact-cta {
		font-size: 1.6rem;
		color: #FFD84D;
		text-decoration: none;
		font-weight: 700;
		font-family: 'Gabarito', sans-serif;
		transition: all 0.3s ease;
		display: inline-block;
		margin-bottom: 1.5rem;
		position: relative;
	}

	.contact-cta::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0;
		height: 2px;
		background: #FFD84D;
		transition: all 0.3s ease;
		transform: translateX(-50%);
	}

	.contact-cta:hover {
		color: #ffffff;
		transform: scale(1.02);
	}

	.contact-cta:hover::after {
		width: 100%;
		background: #ffffff;
	}

	.contact-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.contact-meta {
		color: #6a6a7a;
		font-size: 0.85rem;
	}

	.contact-sep {
		color: #6a6a7a;
	}

	.contact-careers {
		color: #6B8FFF;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.85rem;
		font-family: 'Gabarito', sans-serif;
		transition: color 0.3s ease;
	}

	.contact-careers:hover {
		color: #FFD84D;
	}

	/* Footer */
	footer {
		position: relative;
		text-align: center;
		padding: 2rem;
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.footer-logo {
		width: 28px;
		height: 28px;
		border-radius: 4px;
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}

	.footer-logo:hover {
		opacity: 1;
	}

	.footer-text {
		color: #6a6a7a;
		font-size: 0.9rem;
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
	}

	/* Responsive Design */
	@media (max-width: 900px) {
		.hero-split {
			flex-direction: column;
			padding: 3rem 1.5rem;
			gap: 2rem;
		}

		.hero-left {
			align-items: center;
			text-align: center;
		}

		.hero-logo {
			max-width: 320px;
		}

		.subtitle {
			font-size: 1.6rem;
		}

		.hero-about {
			max-width: 100%;
		}

		.about-heading {
			text-align: center;
		}
	}

	@media (max-width: 768px) {
		section {
			padding: 1.75rem 1.25rem;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.featured-project-card {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.featured-content {
			text-align: center;
		}

		.featured-tags {
			justify-content: center;
		}

		.featured-logos {
			flex-direction: row;
			justify-content: center;
			border-left: none;
			padding-left: 0;
			padding-top: 1rem;
			border-top: 1px solid rgba(107, 143, 255, 0.2);
		}

		.company-logo-wrapper {
			width: 60px;
			height: 60px;
		}

		.expertise-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.clients-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.unreal-partner {
			flex-direction: column;
			text-align: center;
		}

		.unreal-logo {
			width: 80px;
			height: 80px;
		}

		.contact-box {
			padding: 2rem 1.5rem;
		}

		.contact-cta {
			font-size: 1.3rem;
		}

		.pillars-grid {
			grid-template-columns: 1fr;
		}

		.contact-footer {
			flex-direction: column;
			gap: 0.5rem;
		}

		.contact-sep {
			display: none;
		}
	}
</style>
