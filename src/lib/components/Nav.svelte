<script lang="ts">
	import { page } from '$app/stores';

	const navLogo = '/images/icon-white.png';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav class="nav">
	<div class="nav-container">
		<a href="/" class="logo">
			<img src={navLogo} alt="Day III Digital logo" class="logo-icon" />
			<span>DAY III DIGITAL</span>
		</a>

		<button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu">
			<span class="hamburger"></span>
			<span class="hamburger"></span>
			<span class="hamburger"></span>
		</button>

		<ul class="nav-links" class:open={isMenuOpen}>
			<li><a href="/" onclick={closeMenu} class:active={$page.url.pathname === '/'}>Home</a></li>
			<li><a href="/#projects" onclick={closeMenu}>Projects</a></li>
			<li><a href="/#testimonials" onclick={closeMenu}>Testimonials</a></li>
			<li><a href="/careers" onclick={closeMenu} class:active={$page.url.pathname === '/careers'}>Careers</a></li>
			<li><a href="/#contact" onclick={closeMenu}>Contact</a></li>
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(18, 12, 32, 0.82);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid #3a2f52;
		z-index: 50;
		font-family: 'Gabarito', sans-serif;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 14px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-size: 17px;
		font-weight: 900;
		color: #ffffff;
		text-decoration: none;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.logo-icon {
		height: 34px;
		width: auto;
		display: block;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		gap: 0.4rem;
	}

	.hamburger {
		width: 25px;
		height: 3px;
		background: #ffcb63;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: clamp(18px, 2.4vw, 32px);
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		color: #ffffff;
		text-decoration: none;
		font-weight: 700;
		font-size: 13px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		white-space: nowrap;
		transition: color 0.2s ease;
	}

	.nav-links a:hover {
		color: #ffcb63;
	}

	.nav-links a.active {
		color: #ffcb63;
	}

	@media (max-width: 768px) {
		.menu-toggle {
			display: flex;
		}

		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background: rgba(18, 12, 32, 0.97);
			padding: 2rem;
			gap: 1.5rem;
			transform: translateY(-100%);
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
			border-bottom: 1px solid #3a2f52;
		}

		.nav-links.open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.nav-links a {
			font-size: 1.1rem;
		}
	}
</style>
