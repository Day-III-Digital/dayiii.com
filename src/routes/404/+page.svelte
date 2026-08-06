<div class="page">
	<!-- Hero -->
	<section id="top" class="hero">
		<div class="hero-radial"></div>
		<img src="/images/mountains.png" alt="" class="hero-mountains" />
		<div class="hero-inner">
			<div class="hero-icon-wrap">
				<img src="/images/icon-white.png" alt="Day III Digital" class="hero-icon" />
			</div>
			<div class="notfound-code">404</div>
			<h1 class="notfound-title">Page not found</h1>
			<p class="notfound-text">
				The page you're looking for doesn't exist or may have been moved.
			</p>
			<div class="hero-actions">
				<a href="/" class="cta-button">Back to home</a>
				<a href="/#contact" class="secondary-button">Get in touch</a>
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
		min-height: calc(100vh - 63px);
		display: flex;
		align-items: center;
		padding: 96px 32px 120px;
		overflow: hidden;
	}

	.hero-radial {
		position: absolute;
		inset: 0;
		background: radial-gradient(60% 55% at 50% 30%, rgba(113, 74, 186, 0.35) 0%, rgba(25, 18, 43, 0) 70%);
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
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 22px;
		animation: fadeUp 0.7s ease-out both;
	}

	.hero-icon-wrap {
		display: flex;
		justify-content: center;
		animation: dayFloat 6s ease-in-out infinite;
	}

	.hero-icon {
		width: 120px;
		height: auto;
		display: block;
	}

	.notfound-code {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(4rem, 14vw, 7.5rem);
		line-height: 0.9;
		letter-spacing: -0.02em;
		color: var(--gold);
	}

	.notfound-title {
		margin: 0;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: clamp(1.8rem, 5vw, 3rem);
		line-height: 1;
		text-transform: uppercase;
		color: #ffffff;
	}

	.notfound-text {
		margin: 0;
		max-width: 480px;
		font-size: 1.15rem;
		line-height: 1.6;
		color: var(--fog);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		margin-top: 10px;
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

	.secondary-button {
		display: inline-flex;
		align-items: center;
		padding: 14px 26px;
		border-radius: var(--radius);
		background: linear-gradient(var(--aubergine), var(--aubergine)) padding-box, var(--border-stroke) border-box;
		border: 1.5px solid transparent;
		color: #ffffff;
		font-family: 'Gabarito', sans-serif;
		font-weight: 900;
		font-size: 0.8rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		text-decoration: none;
		transition: filter 0.2s ease;
	}

	.secondary-button:hover {
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
	@media (max-width: 640px) {
		.hero {
			padding: 64px 24px 96px;
		}

		.footer-content {
			justify-content: center;
			text-align: center;
		}
	}
</style>
