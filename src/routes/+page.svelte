<script lang="ts">
	import { onMount } from 'svelte';

let email = 'contact@dayiii.com';
	// Colors
	let purpleColor = '#774dd1';
	let yellowColor = '#FFD84D';
	let blueColor = '#3b82f6';
	let bgBaseColor = '#150e41';
	let textColor = '#e0e0e0';
	let whiteColor = '#ffffff';
	// Sizes
	let backgroundDarkness = 21;
	let cardTransparency = 42;
	let aboutFontSize = 0.96;
	let marmotIconSize = 120;
	let heroTitleSize = 3.4;
	let heroSubtitleSize = 1.9;
	let heroMarmotSize = 114;
	// Spacing
	let aboutPadding = 2.2;
	let sectionSpacing = 1.5; // em for between sections
	let devPanelOpen = false;

	function updatePurpleColor(event: Event) {
		const input = event.target as HTMLInputElement;
		purpleColor = input.value;
		document.documentElement.style.setProperty('--purple-accent', purpleColor);
	}

	function updateYellowColor(event: Event) {
		const input = event.target as HTMLInputElement;
		yellowColor = input.value;
		document.documentElement.style.setProperty('--yellow-accent', yellowColor);
	}

	function updateBlueColor(event: Event) {
		const input = event.target as HTMLInputElement;
		blueColor = input.value;
		document.documentElement.style.setProperty('--blue-accent', blueColor);
	}

	function updateBgBaseColor(event: Event) {
		const input = event.target as HTMLInputElement;
		bgBaseColor = input.value;
		document.documentElement.style.setProperty('--bg-color', bgBaseColor);
	}

	function updateTextColor(event: Event) {
		const input = event.target as HTMLInputElement;
		textColor = input.value;
		document.documentElement.style.setProperty('--text-color', textColor);
	}

	function updateWhiteColor(event: Event) {
		const input = event.target as HTMLInputElement;
		whiteColor = input.value;
		document.documentElement.style.setProperty('--white-color', whiteColor);
	}

	function updateBackgroundDarkness(event: Event) {
		const input = event.target as HTMLInputElement;
		backgroundDarkness = parseInt(input.value);
		const r = backgroundDarkness;
		const g = Math.round(backgroundDarkness * 0.67);
		const b = Math.round(backgroundDarkness * 3.1);
		document.documentElement.style.setProperty('--bg-color', `rgb(${r}, ${g}, ${b})`);
	}

function updateCardTransparency(event: Event) {
		const input = event.target as HTMLInputElement;
		cardTransparency = parseInt(input.value);
		document.documentElement.style.setProperty('--card-opacity', (cardTransparency / 100).toString());
	}

function updateAboutFontSize(event: Event) {
		const input = event.target as HTMLInputElement;
		aboutFontSize = parseFloat(input.value);
		document.documentElement.style.setProperty('--about-font-size', aboutFontSize + 'rem');
	}

	function updateMarmotIconSize(event: Event) {
		const input = event.target as HTMLInputElement;
		marmotIconSize = parseInt(input.value);
		document.documentElement.style.setProperty('--marmot-icon-size', marmotIconSize + 'px');
	}

	function updateHeroTitleSize(event: Event) {
		const input = event.target as HTMLInputElement;
		heroTitleSize = parseFloat(input.value);
		document.documentElement.style.setProperty('--hero-title-size', heroTitleSize + 'rem');
	}

	function updateHeroSubtitleSize(event: Event) {
		const input = event.target as HTMLInputElement;
		heroSubtitleSize = parseFloat(input.value);
		document.documentElement.style.setProperty('--hero-subtitle-size', heroSubtitleSize + 'rem');
	}

	function updateHeroMarmotSize(event: Event) {
		const input = event.target as HTMLInputElement;
		heroMarmotSize = parseInt(input.value);
		document.documentElement.style.setProperty('--hero-marmot-size', heroMarmotSize + 'px');
	}

	function updateAboutPadding(event: Event) {
		const input = event.target as HTMLInputElement;
		aboutPadding = parseFloat(input.value);
		document.documentElement.style.setProperty('--about-padding', aboutPadding + 'rem');
	}

	function updateSectionSpacing(event: Event) {
		const input = event.target as HTMLInputElement;
		sectionSpacing = parseFloat(input.value);
		document.documentElement.style.setProperty('--section-spacing', sectionSpacing + 'em');
	}

	function copySliderValues() {
		const values = `// Colors
purpleColor: ${purpleColor}
yellowColor: ${yellowColor}
blueColor: ${blueColor}
bgBaseColor: ${bgBaseColor}
textColor: ${textColor}
whiteColor: ${whiteColor}
// Sizes
backgroundDarkness: ${backgroundDarkness}
cardTransparency: ${cardTransparency}%
aboutFontSize: ${aboutFontSize}rem
marmotIconSize: ${marmotIconSize}px
heroTitleSize: ${heroTitleSize}rem
heroSubtitleSize: ${heroSubtitleSize}rem
heroMarmotSize: ${heroMarmotSize}px
// Spacing
aboutPadding: ${aboutPadding}rem
sectionSpacing: ${sectionSpacing}em`;
		navigator.clipboard.writeText(values);
	}

	onMount(() => {
		// Colors
		document.documentElement.style.setProperty('--purple-accent', purpleColor);
		document.documentElement.style.setProperty('--yellow-accent', yellowColor);
		document.documentElement.style.setProperty('--blue-accent', blueColor);
		document.documentElement.style.setProperty('--bg-color', bgBaseColor);
		document.documentElement.style.setProperty('--text-color', textColor);
		document.documentElement.style.setProperty('--white-color', whiteColor);
		// Sizes
		document.documentElement.style.setProperty('--bg-color', 'rgb(15, 10, 46)');
		document.documentElement.style.setProperty('--card-opacity', (cardTransparency / 100).toString());
		document.documentElement.style.setProperty('--about-font-size', aboutFontSize + 'rem');
		document.documentElement.style.setProperty('--marmot-icon-size', marmotIconSize + 'px');
		document.documentElement.style.setProperty('--hero-title-size', heroTitleSize + 'rem');
		document.documentElement.style.setProperty('--hero-subtitle-size', heroSubtitleSize + 'rem');
		document.documentElement.style.setProperty('--hero-marmot-size', heroMarmotSize + 'px');
		// Spacing
		document.documentElement.style.setProperty('--about-padding', aboutPadding + 'rem');
		document.documentElement.style.setProperty('--section-spacing', sectionSpacing + 'em');
	});

	onMount(() => {
		const sections = document.querySelectorAll('section:not(.hero)');
		const cards = document.querySelectorAll('.service-card, .expertise-card, .pillar-card, .client-card, .featured-project-card');

		const sectionObserver = new IntersectionObserver((entries) => {
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

		const cardObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('card-visible');
				} else {
					entry.target.classList.remove('card-visible');
				}
			});
		}, {
			threshold: 0.1
		});

		// Index cards within their parent container for staggered animation
		const containers = document.querySelectorAll('.services-grid, .expertise-grid, .pillars-grid, .experience-track');
		containers.forEach(container => {
			const containerCards = container.querySelectorAll('.service-card, .expertise-card, .pillar-card, .client-card');
			containerCards.forEach((card, index) => {
				(card as HTMLElement).style.setProperty('--card-index', index.toString());
			});
		});

		// Small delay to ensure CSS is ready, then add animation class and observe
		requestAnimationFrame(() => {
			sections.forEach(section => {
				section.classList.add('scroll-animate');
				sectionObserver.observe(section);
			});
			cards.forEach(card => {
				card.classList.add('card-animate');
				cardObserver.observe(card);
			});
		});

		return () => {
			sectionObserver.disconnect();
			cardObserver.disconnect();
		};
	});

	const clientProjects = [
		// Console
		{ members: 3, name: 'Hogwarts Legacy', logo: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg' },
		{ members: 5, name: 'LEGO Horizon Adventures', logo: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2428810/library_600x900.jpg' },
		{ members: 1, name: 'Watch Dogs: Legion', logo: 'https://cdn.mobygames.com/covers/9328358-watch-dogs-legion-playstation-4-front-cover.jpg' },
		{ members: 1, name: 'For Honor', logo: 'https://cdn.mobygames.com/covers/1784962-for-honor-playstation-4-front-cover.jpg' },
		{ members: 1, name: "Tom Clancy's Ghost Recon Wildlands", logo: 'https://cdn.mobygames.com/covers/2153415-tom-clancys-ghost-recon-wildlands-playstation-4-front-cover.jpg' },
		{ members: 1, name: "Tom Clancy's Rainbow Six Siege", logo: 'https://cdn.mobygames.com/covers/1131178-tom-clancys-rainbow-six-siege-xbox-one-front-cover.png' },
		// Mobile
		{ members: 1, name: 'Star Wars: Hunters', logo: 'https://cdn.mobygames.com/covers/10937779-star-wars-hunters-android-front-cover.jpg' },
		{ members: 1, name: 'CSR 2', logo: 'https://cdn.mobygames.com/covers/8385924-csr-racing-2-android-front-cover.png' },
		{ members: 2, name: 'CSR Racing', logo: 'https://cdn.mobygames.com/covers/9313786-csr-racing-iphone-front-cover.jpg' },
	];

	const featuredProject = {
		title: 'Mafia: The Old Country',
		years: '2024-2025',
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

	let experienceTrack: HTMLDivElement | null = null;
	let experienceHasOverflow = false;

	function updateExperienceNav() {
		if (!experienceTrack) return;
		const maxScrollLeft = experienceTrack.scrollWidth - experienceTrack.clientWidth;
		experienceHasOverflow = maxScrollLeft > 5;
	}

	function scrollExperience(direction: -1 | 1) {
		if (!experienceTrack) return;

		const maxScrollLeft = experienceTrack.scrollWidth - experienceTrack.clientWidth;
		if (maxScrollLeft <= 5) return;

		const nearStart = experienceTrack.scrollLeft <= 5;
		const nearEnd = experienceTrack.scrollLeft >= maxScrollLeft - 5;

		if (direction === 1 && nearEnd) {
			experienceTrack.scrollTo({ left: 0, behavior: 'smooth' });
			return;
		}

		if (direction === -1 && nearStart) {
			experienceTrack.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
			return;
		}

		experienceTrack.scrollBy({
			left: direction * experienceTrack.clientWidth * 0.9,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		const el = experienceTrack;
		if (!el) return;

		const onScroll = () => updateExperienceNav();
		const onResize = () => updateExperienceNav();

		updateExperienceNav();

		el.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize);

		// Handles late-loading images changing scrollWidth.
		const ro = new ResizeObserver(() => updateExperienceNav());
		ro.observe(el);

		return () => {
			el.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			ro.disconnect();
		};
	});
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
				<div class="hero-branding">
<img src="/images/marmot_logo_round.png" alt="Day III Digital" class="hero-marmot" />
					<div class="hero-titles">
<h1 class="title">DAY III <span class="title-digital">DIGITAL</span></h1>
						<p class="subtitle"><span class="full-spectrum">FULL SPECTRUM</span> <span class="subtitle-highlight">TECH ART</span></p>
					</div>
				</div>
				<span class="partner-badge"><img src="/images/unreal_icon.png" alt="Unreal Engine" class="partner-icon" /> Official Unreal Engine Service Partner</span>
				<a href="#contact" class="cta-button">Get in Touch</a>
			</div>
			<div class="hero-right">
				<div class="hero-about">
<h2 class="about-heading"><span class="about-highlight">HI</span> <span class="about-prefix">THERE !!!</span></h2>
<p class="about-text">A <span class="keyword">veteran-led</span> development studio for <span class="keyword">Unreal Engine</span> and open-world AAA games, specializing in <span class="keyword">technical art</span>, <span class="keyword">rendering</span>, and <span class="keyword">deep learning</span>.</p>
					<p class="about-text">Our custom tools and streamlined workflows help studios overcome <span class="keyword">technical challenges</span> and exceed player expectations.</p>
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
					<h3>Shaders and Mesh Workflows</h3>
					<p>Shaders and materials bridging art and engineering.</p>
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
					<img src="/images/unreal_partner_2025.png" alt="Unreal Engine Partner 2025" class="unreal-logo" />
					<img src="/images/unreal_partner_2026.png" alt="Unreal Engine Partner 2026" class="unreal-logo" />
				</div>
				<div class="unreal-content">
					<h3>Official Unreal Engine Service Partner</h3>
					<p>Certified by Epic Games as a trusted partner for Unreal Engine development. This recognition means we meet Epic's highest standards for technical expertise, project delivery, and professional service.</p>
				</div>
			</a>
		</div>
	</section>

	<section class="services">
		<div class="section-content">
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
					<span class="featured-years">{featuredProject.years}</span>
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
		</div>
	</section>

	<section class="projects">
		<div class="section-content">
			<h2 class="projects-heading experience-heading"><span class="projects-prefix">OUR</span> <span class="projects-highlight">LEGACY</span></h2>
			<p class="projects-notice experience-notice">Our team members have built <span class="notice-highlight-blue">experience working on industry defining projects</span></p>

			<div class="experience-carousel" role="region" aria-roledescription="carousel" aria-label="Past experience projects">
				<button
					class="experience-nav experience-prev"
					on:click={() => scrollExperience(-1)}
					disabled={!experienceHasOverflow}
					aria-label="Scroll past experience left"
				>
					‹
				</button>

				<div
					class="experience-track"
					bind:this={experienceTrack}
				>
					{#each clientProjects as client}
						<div class="client-card">
							<div class="client-logo-wrapper">
								<img src={client.logo} alt={client.name} class="client-logo" />
							</div>
							<div class="client-title">{client.name}</div>
						</div>
					{/each}
				</div>

				<button
					class="experience-nav experience-next"
					on:click={() => scrollExperience(1)}
					disabled={!experienceHasOverflow}
					aria-label="Scroll past experience right"
				>
					›
				</button>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact">
		<div class="section-content">
			<h2 class="contact-heading"><span class="contact-prefix">GET IN</span> <span class="contact-highlight">TOUCH</span></h2>

			<div class="contact-box">
<p class="contact-intro">Looking for technical art help? Let's talk.</p>
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

<!-- Dev Panel (sliding drawer) - outside container for proper z-index -->
<button class="dev-panel-tab" on:click={() => devPanelOpen = !devPanelOpen}>
	🛠️
</button>
<div class="dev-panel" class:open={devPanelOpen}>
	<button class="dev-panel-close" on:click={() => devPanelOpen = false}>✕</button>
	<div class="dev-panel-content">
		<div class="dev-section">
			<h4 class="dev-section-title">🎨 Colors</h4>
			<label class="color-picker-label">
				<span>Accent 1:</span>
				<input type="color" value={purpleColor} on:input={updatePurpleColor} class="color-picker-input" />
				<span class="color-picker-value">{purpleColor}</span>
			</label>
			<label class="color-picker-label">
				<span>Accent 2:</span>
				<input type="color" value={yellowColor} on:input={updateYellowColor} class="color-picker-input" />
				<span class="color-picker-value">{yellowColor}</span>
			</label>
			<label class="color-picker-label">
				<span>Accent 3:</span>
				<input type="color" value={blueColor} on:input={updateBlueColor} class="color-picker-input" />
				<span class="color-picker-value">{blueColor}</span>
			</label>
			<label class="color-picker-label">
				<span>White:</span>
				<input type="color" value={whiteColor} on:input={updateWhiteColor} class="color-picker-input" />
				<span class="color-picker-value">{whiteColor}</span>
			</label>
			<label class="color-picker-label">
				<span>Text:</span>
				<input type="color" value={textColor} on:input={updateTextColor} class="color-picker-input" />
				<span class="color-picker-value">{textColor}</span>
			</label>
			<label class="color-picker-label">
				<span>BG base:</span>
				<input type="color" value={bgBaseColor} on:input={updateBgBaseColor} class="color-picker-input" />
				<span class="color-picker-value">{bgBaseColor}</span>
			</label>
			<label class="color-picker-label">
				<span>BG darkness:</span>
				<input type="range" min="0" max="30" value={backgroundDarkness} on:input={updateBackgroundDarkness} class="slider-input" />
				<span class="slider-value">{backgroundDarkness}</span>
			</label>
			<label class="color-picker-label">
				<span>Card opacity:</span>
				<input type="range" min="20" max="100" value={cardTransparency} on:input={updateCardTransparency} class="slider-input" />
				<span class="slider-value">{cardTransparency}%</span>
			</label>
		</div>
		<div class="dev-section">
			<h4 class="dev-section-title">📏 Sizes</h4>
			<label class="color-picker-label">
				<span>HI THERE font:</span>
				<input type="range" min="0.8" max="1.4" step="0.02" value={aboutFontSize} on:input={updateAboutFontSize} class="slider-input" />
				<span class="slider-value">{aboutFontSize}rem</span>
			</label>
			<label class="color-picker-label">
				<span>Marmot icon:</span>
				<input type="range" min="60" max="180" value={marmotIconSize} on:input={updateMarmotIconSize} class="slider-input" />
				<span class="slider-value">{marmotIconSize}px</span>
			</label>
			<label class="color-picker-label">
				<span>DAY III DIGITAL:</span>
				<input type="range" min="2" max="5" step="0.1" value={heroTitleSize} on:input={updateHeroTitleSize} class="slider-input" />
				<span class="slider-value">{heroTitleSize}rem</span>
			</label>
			<label class="color-picker-label">
				<span>FULL SPECTRUM:</span>
				<input type="range" min="1" max="3" step="0.1" value={heroSubtitleSize} on:input={updateHeroSubtitleSize} class="slider-input" />
				<span class="slider-value">{heroSubtitleSize}rem</span>
			</label>
			<label class="color-picker-label">
				<span>Hero marmot:</span>
				<input type="range" min="60" max="200" value={heroMarmotSize} on:input={updateHeroMarmotSize} class="slider-input" />
				<span class="slider-value">{heroMarmotSize}px</span>
			</label>
		</div>
		<div class="dev-section">
			<h4 class="dev-section-title">↔️ Spacing</h4>
			<label class="color-picker-label">
				<span>HI THERE padding:</span>
				<input type="range" min="1" max="4" step="0.1" value={aboutPadding} on:input={updateAboutPadding} class="slider-input" />
				<span class="slider-value">{aboutPadding}rem</span>
			</label>
			<label class="color-picker-label">
				<span>Section gap:</span>
				<input type="range" min="1" max="8" step="0.5" value={sectionSpacing} on:input={updateSectionSpacing} class="slider-input" />
				<span class="slider-value">{sectionSpacing}em</span>
			</label>
		</div>
		<button class="copy-values-btn" on:click={copySliderValues}>📋 Copy Values</button>
	</div>
</div>

<style>
:global(:root) {
		--purple-accent: #774dd1;
		--yellow-accent: #FFD84D;
		--blue-accent: #3b82f6;
		--white-color: #ffffff;
		--text-color: #e0e0e0;
		--bg-color: rgb(21, 14, 65);
		--card-opacity: 0.42;
		--about-font-size: 0.96rem;
		--marmot-icon-size: 120px;
		--hero-title-size: 3.4rem;
		--hero-subtitle-size: 1.9rem;
		--hero-marmot-size: 114px;
		--about-padding: 2.2rem;
		--section-spacing: 1.5em;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: 'Gabarito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: var(--bg-color);
		color: var(--text-color);
		line-height: 1.6;
		overflow-x: hidden;
	}

	.color-picker-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
		margin-top: 0.5rem;
	}

	.dev-section {
		margin-bottom: 1rem;
	}

	.dev-section-title {
		color: var(--yellow-accent);
		font-size: 0.7rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.color-picker-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(15, 10, 46, var(--card-opacity));
		padding: 0.4rem 0.75rem;
		border-radius: 6px;
		border: 1px solid rgba(107, 143, 255, 0.2);
		color: var(--white-color);
		font-family: 'Gabarito', sans-serif;
		font-size: 0.75rem;
	}

	.color-picker-input {
		width: 28px;
		height: 28px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		background: transparent;
	}

	.color-picker-input::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	.color-picker-input::-webkit-color-swatch {
		border-radius: 6px;
		border: 2px solid rgba(255, 255, 255, 0.3);
	}

.color-picker-value {
		font-family: monospace;
		color: var(--purple-accent);
		font-weight: 600;
	}

	.slider-input {
		width: 70px;
		cursor: pointer;
		accent-color: var(--purple-accent);
	}

	.slider-value {
		font-family: monospace;
		color: var(--purple-accent);
		font-weight: 600;
		min-width: 50px;
		font-size: 0.7rem;
	}

	.copy-values-btn {
		background: var(--purple-accent);
		color: #fff;
		border: none;
		padding: 0.4rem 0.75rem;
		border-radius: 6px;
		cursor: pointer;
		font-family: 'Gabarito', sans-serif;
		font-size: 0.75rem;
		font-weight: 600;
		transition: opacity 0.2s;
	}

	.copy-values-btn:hover {
		opacity: 0.85;
	}

	.copy-values-btn:active {
		opacity: 0.7;
	}

	.dev-panel-tab {
		position: fixed;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		z-index: 10001;
		background: rgba(15, 10, 46, 0.95);
		border: 1px solid rgba(107, 143, 255, 0.3);
		border-right: none;
		padding: 0.75rem 0.5rem;
		border-radius: 8px 0 0 8px;
		cursor: pointer;
		font-size: 1rem;
		transition: all 0.2s;
	}

	.dev-panel-tab:hover {
		background: rgba(107, 143, 255, 0.2);
	}

	.dev-panel {
		position: fixed;
		top: 0;
		right: -240px;
		bottom: 0;
		width: 240px;
		z-index: 10002;
		background: rgba(15, 10, 46, 0.98);
		border-left: 1px solid rgba(107, 143, 255, 0.3);
		backdrop-filter: blur(10px);
		transition: right 0.3s ease;
	}

	.dev-panel.open {
		right: 0;
	}

	.dev-panel-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		color: #888;
		font-size: 1rem;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
	}

	.dev-panel-close:hover {
		color: #fff;
	}

	.dev-panel-content {
		padding: 2rem 0.5rem 0.5rem;
		height: 100%;
		overflow-y: auto;
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

section + section {
		margin-top: var(--section-spacing);
	}

	section.scroll-animate {
		opacity: 0;
		transform: translateY(30px);
	}

	section.scroll-animate.visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Card scroll animations */
	.card-animate {
		opacity: 0;
		transform: translateY(40px);
		transition: opacity 0.5s ease-out, transform 0.5s ease-out;
		transition-delay: calc(var(--card-index, 0) * 0.08s);
	}

	.card-animate.card-visible {
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
		background: var(--purple-accent);
		opacity: 0.5;
		animation: float1 70s ease-in-out infinite;
	}

	.bubble-2 {
		width: 8vmin;
		height: 8vmin;
		background: var(--purple-accent);
		opacity: 0.5;
		animation: float2 55s ease-in-out infinite;
	}

	.bubble-3 {
		width: 20vmin;
		height: 20vmin;
		background: var(--blue-accent);
		opacity: 0.45;
		animation: float3 75s ease-in-out infinite;
	}

	.bubble-4 {
		width: 10vmin;
		height: 10vmin;
		background: var(--blue-accent);
		opacity: 0.5;
		animation: float4 50s ease-in-out infinite;
	}

	.bubble-5 {
		width: 28vmin;
		height: 28vmin;
		background: var(--purple-accent);
		opacity: 0.35;
		animation: float5 100s ease-in-out infinite;
	}

	.bubble-6 {
		width: 7vmin;
		height: 7vmin;
		background: var(--purple-accent);
		opacity: 0.55;
		animation: float6 45s ease-in-out infinite;
	}

	.bubble-7 {
		width: 22vmin;
		height: 22vmin;
		background: var(--blue-accent);
		opacity: 0.4;
		animation: float7 90s ease-in-out infinite;
	}

	.bubble-8 {
		width: 9vmin;
		height: 9vmin;
		background: var(--purple-accent);
		opacity: 0.5;
		animation: float8 52s ease-in-out infinite;
	}

	.bubble-9 {
		width: 16vmin;
		height: 16vmin;
		background: var(--purple-accent);
		opacity: 0.4;
		animation: float9 80s ease-in-out infinite;
	}

	.bubble-10 {
		width: 6vmin;
		height: 6vmin;
		background: var(--blue-accent);
		opacity: 0.55;
		animation: float10 40s ease-in-out infinite;
	}

	.bubble-11 {
		width: 30vmin;
		height: 30vmin;
		background: var(--purple-accent);
		opacity: 0.3;
		animation: float11 110s ease-in-out infinite;
	}

	.bubble-12 {
		width: 11vmin;
		height: 11vmin;
		background: var(--blue-accent);
		opacity: 0.45;
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

.hero-branding {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

.hero-marmot {
		width: var(--hero-marmot-size);
		height: var(--hero-marmot-size);
		filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
	}

	.hero-titles {
		display: flex;
		flex-direction: column;
	}

.title {
		font-size: var(--hero-title-size);
		font-weight: 900;
		margin: 0;
		color: var(--yellow-accent);
		text-transform: uppercase;
		letter-spacing: 0.02em;
		font-family: 'Gabarito', sans-serif;
		line-height: 1.1;
		white-space: nowrap;
	}

	.title-digital {
		color: var(--purple-accent);
	}

.subtitle {
		font-size: var(--hero-subtitle-size);
		color: var(--white-color);
		margin: 0;
		line-height: 1.1;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		white-space: nowrap;
	}

	.subtitle-accent {
		font-size: 2rem;
		color: var(--yellow-accent);
		margin: 0.2rem 0 0 0;
		line-height: 1.1;
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.studio-text {
		color: var(--white-color);
	}

	.amp-text {
		color: var(--yellow-accent);
	}

	.subtitle-highlight {
		color: var(--yellow-accent);
	}

	/* Full Spectrum Rainbow Shimmer Effect */
	.full-spectrum {
		position: relative;
		display: inline-block;
	}

.full-spectrum::before {
		content: 'FULL SPECTRUM';
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
		color: var(--white-color);
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
		background: var(--yellow-accent) !important; /* force default yellow */
		color: #0f0a2e;
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
		background: var(--purple-accent) !important; /* blue on hover */
	}

	/* Section Styles */
	.section-content {
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin-top: 0; /* kill default top margin to avoid gaps between sections */
		margin-bottom: 0.5rem;
		color: var(--yellow-accent);
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
		min-height: 250px;
		background: rgba(15, 10, 46, var(--card-opacity));
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		padding: 1.75rem var(--about-padding) var(--about-padding) var(--about-padding);
		border-radius: 20px;
		border: 1px solid rgba(107, 143, 255, 0.2);
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
		background: linear-gradient(90deg, var(--purple-accent), var(--yellow-accent));
		border-radius: 20px 20px 0 0;
	}


.about-heading {
		font-size: 1.6rem;
		margin: 0 0 1rem 0;
		text-align: left;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
	}

	.about-highlight {
		color: var(--yellow-accent);
	}

	.about-prefix {
		color: var(--white-color);
	}

.about-text {
		font-size: var(--about-font-size);
		line-height: 1.75;
		color: var(--white-color);
		margin: 0 0 1rem;
		text-align: justify;
	}

	.about-text:last-child {
		margin-bottom: 0;
	}

	.about-list {
		margin: 0 0 1rem 0;
		padding-left: 1.5rem;
		color: var(--white-color);
		font-size: 1.02rem;
		line-height: 1.75;
	}

	.about-list li {
		margin-bottom: 0.25rem;
	}

	.keyword {
		color: var(--yellow-accent);
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
		background: rgba(15, 10, 46, var(--card-opacity));
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
		background: linear-gradient(90deg, var(--purple-accent), var(--yellow-accent));
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
color: var(--yellow-accent);
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
		width: var(--marmot-icon-size);
		height: var(--marmot-icon-size);
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
		color: var(--white-color); /* "Explore our" in white */
	}

	.services-highlight {
		color: var(--yellow-accent);
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
		color: var(--white-color);
	}

	.expertise-highlight {
		color: var(--yellow-accent);
	}

	/* Pillars Section */
	.pillars-heading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		text-transform: none !important;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		animation: fadeIn 0.6s ease-out both;
		text-align: left !important;
	}

	.pillars-prefix {
		color: var(--white-color);
	}

	.pillars-highlight {
		color: var(--yellow-accent);
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 0.5rem;
	}

	.pillar-card {
		background: rgba(15, 10, 46, var(--card-opacity));
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
		border-color: var(--purple-accent);
		box-shadow: 0 12px 30px rgba(107, 143, 255, 0.25);
	}

	.pillar-card h3 {
		font-size: 1.5rem;
		margin: 0 0 0.75rem 0;
		color: var(--purple-accent);
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		text-align: center;
	}

	.pillar-card p {
		color: var(--white-color);
		line-height: 1.7;
		margin: 0;
		text-align: center;
	}

	.projects h2 {
		text-align: right;
	}

	.projects h2.experience-heading {
		text-align: left;
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
		color: var(--white-color);
	}

	.projects-highlight {
		color: var(--yellow-accent);
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
		color: var(--white-color);
		font-family: 'Gabarito', sans-serif;
		text-align: center;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}

	.projects-notice::before {
		display: none;
	}

	.notice-highlight {
		color: var(--yellow-accent);
		font-weight: 900;
	}

.experience-notice {
		background: rgba(15, 10, 46, var(--card-opacity));
		border: 1px solid rgba(117, 31, 252, 0.4);
	}

	.notice-highlight-blue {
		color: var(--yellow-accent);
		font-weight: 900;
	}

	/* Featured Project Card */
	.featured-project-card {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1.4fr auto;
		gap: 2rem;
		background: rgba(15, 10, 46, var(--card-opacity));
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
		background: linear-gradient(90deg, var(--purple-accent), var(--yellow-accent));
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
		color: var(--purple-accent);
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
		color: var(--white-color);
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
		background: var(--purple-accent);
		transform: scale(1.2);
	}

	.featured-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.featured-title {
		font-size: 1.8rem;
		margin: 0 0 0.25rem 0;
		color: var(--yellow-accent);
		font-weight: 900;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
	}

	.featured-years {
		display: block;
		font-size: 0.9rem;
		color: var(--purple-accent);
		font-weight: 700;
		margin-bottom: 0.75rem;
		font-family: 'Gabarito', sans-serif;
	}

	.featured-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

.featured-tag {
		background: transparent;
		color: var(--purple-accent);
		padding: 0.35rem 0.75rem;
		border-radius: 4px;
border: 1px solid rgba(153, 69, 255, 0.5);
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

	/* Past Experience Carousel */
	.experience-carousel {
		position: relative;
		margin-top: 1.25rem;
	}

	.experience-track {
		--experience-card-width: clamp(180px, 18vw, 220px);

		display: flex;
		gap: 1rem;
		overflow-x: auto;
		padding: 0.5rem 3rem;
		scroll-snap-type: x mandatory;
		scroll-padding: 3rem;
		overscroll-behavior-x: contain;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
	}

	.experience-track::-webkit-scrollbar {
		display: none;
	}

	.experience-track .client-card {
		flex: 0 0 var(--experience-card-width);
		scroll-snap-align: start;
	}

	.experience-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 5;

		background: rgba(15, 10, 46, var(--card-opacity));
		border: 1px solid rgba(107, 143, 255, 0.3);
		color: var(--purple-accent);
		width: 42px;
		height: 42px;
		border-radius: 50%;
		font-size: 1.4rem;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.experience-nav:hover {
		background: rgba(107, 143, 255, 0.35);
		color: var(--white-color);
	}

	.experience-nav:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.experience-prev {
		left: 0.25rem;
	}

	.experience-next {
		right: 0.25rem;
	}

	.client-card {
		background: rgba(15, 10, 46, var(--card-opacity));
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 1rem;
		border-radius: 12px;
		border: 1px solid rgba(107, 143, 255, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		transition: all 0.3s ease;
	}

	.client-card:hover {
		border-color: rgba(107, 143, 255, 0.4);
		transform: translateY(-4px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	}

	.client-logo-wrapper {
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 8px;
		overflow: hidden;
		background: rgba(5, 10, 30, 0.95);
		border: 1px solid rgba(107, 143, 255, 0.2);
		position: relative;
	}

	.client-logo {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.client-title {
		font-size: 0.75rem;
		font-weight: 700;
		color: #c5c5d0;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		text-align: center;
		line-height: 1.3;
		padding-bottom: 0.7rem;
	}

	.client-members {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;
		margin-top: auto;
	}

	.members-count {
		font-size: 1rem;
		font-weight: 900;
		color: var(--yellow-accent);
		font-family: 'Gabarito', sans-serif;
		line-height: 1;
	}

	.members-icon {
		width: 14px;
		height: 14px;
		color: var(--yellow-accent);
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
		color: var(--white-color);
	}

	.team-highlight {
		color: var(--yellow-accent);
	}

	.expertise-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		margin-bottom: 2.5rem;
	}

	.expertise-card {
		background: rgba(15, 10, 46, var(--card-opacity));
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
		color: var(--purple-accent);
		margin: 0 0 0.5rem 0;
		font-weight: 700;
		text-transform: uppercase;
		font-family: 'Gabarito', sans-serif;
		letter-spacing: 0.02em;
		line-height: 1.1;
	}

	.expertise-card p {
		color: var(--white-color);
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
		background: var(--yellow-accent);
		border-radius: 16px 16px 0 0;
	}

	.unreal-partner:hover {
		border-color: rgba(255, 216, 77, 0.7);
		box-shadow: 0 10px 30px rgba(255, 216, 77, 0.2);
	}

	.unreal-logos {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.unreal-logo {
		width: 150px;
		height: 150px;
		flex-shrink: 0;
		transition: transform 0.3s ease;
		background: rgba(0, 0, 0, 0);
		border-radius: 20px;
		padding: 0.5rem;
		object-fit: contain;
	}

	.unreal-partner:hover .unreal-logo {
		transform: scale(1.1);
	}

.unreal-content h3 {
		font-size: 1.4rem;
		color: var(--yellow-accent);
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
		text-align: center;
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
		color: var(--white-color);
	}

	.contact-highlight {
		color: var(--yellow-accent);
	}

	.contact-box {
		padding: 2.5rem;
		background: rgba(15, 10, 46, var(--card-opacity));
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
		color: var(--yellow-accent);
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
		background: var(--yellow-accent);
		transition: all 0.3s ease;
		transform: translateX(-50%);
	}

	.contact-cta:hover {
		color: var(--white-color);
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
		color: var(--purple-accent);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.85rem;
		font-family: 'Gabarito', sans-serif;
		transition: color 0.3s ease;
	}

	.contact-careers:hover {
		color: var(--yellow-accent);
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

		.experience-track {
			--experience-card-width: clamp(170px, 70vw, 240px);
			padding: 0.5rem 2.25rem;
			scroll-padding: 2.25rem;
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
