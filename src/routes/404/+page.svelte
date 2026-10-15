<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

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
</script>

<div class="container">
    <!-- Hero Section - Split Layout -->
    <section class="hero">
	    <div class="hero-split">
            <div class="hero-left">
			    <div class="hero-branding">
                    <img src="{base}/images/marmot_logo_round.png" alt="Day III Digital" class="hero-marmot" />
				    <div class="hero-titles">
                        <h1 class="title">DAY III <span class="title-digital">DIGITAL</span></h1>
					    <p class="subtitle"><span class="full-spectrum">FULL SPECTRUM</span> <span class="subtitle-highlight">TECH ART</span></p>
				    </div>
			    </div>
			    <span class="partner-badge"><img src="{base}/images/unreal_icon.png" alt="Unreal Engine" class="partner-icon" /> Official Unreal Engine Service Partner</span>
		    </div>
			<div class="hero-right">
    			<div class="hero-about">
                    <h2 class="about-heading"><span class="about-highlight">404</span> <span class="about-prefix">PAGE NOT FOUND!</span></h2>
                    <p class="about-text">The <span class="keyword">page</span> you are looking for could not be found.</p>
			    </div>
		    </div>
	    </div>
    </section>

	<!-- Footer -->
    <footer>
	    <div class="footer-content">
			<img src="{base}/images/logo-white-text.png" alt="Day III Digital" class="footer-logo" />
			<span class="footer-text">&copy; {new Date().getFullYear()} Day III Digital. All rights reserved.</span>
	    </div>
    </footer>
</div>

<style>
:global(:root) {
		--purple-accent: #774dd1;
		--yellow-accent: #FFD84D;
		--white-color: #ffffff;
		--text-color: #e0e0e0;
		--bg-color: rgb(21, 14, 65);
		--card-opacity: 0.42;
		--about-font-size: 0.96rem;
		--hero-title-size: 3.4rem;
		--hero-subtitle-size: 1.9rem;
		--hero-marmot-size: 114px;
		--about-padding: 2.2rem;
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






















	.container {
		max-width: 1200px;
		margin: 0 auto;
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
	}




	/* Card scroll animations */


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



	/* Section Styles */

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



	.keyword {
		color: var(--yellow-accent);
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.keyword:hover {
		text-shadow: 0 0 8px rgba(255, 216, 77, 0.5);
	}

	/* Services Section */










	/* Projects Section */

	/* Heading alignment overrides for section titles */





	/* Expertise Subsection */



	/* Pillars Section */



















	/* Featured Project Card */




















	/* Past Experience Carousel */

















	/* Team & Partner Section */





















	/* Contact Section */

















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















	}
</style>
