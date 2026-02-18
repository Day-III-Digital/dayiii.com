<script lang="ts">
	const navLogo = '/images/logo_square.png';

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
			<li><a href="/" onclick={closeMenu}>HOME</a></li>
			<li><a href="/#projects" onclick={closeMenu}>PROJECTS</a></li>
			<li><a href="/#contact" onclick={closeMenu}>CONTACT</a></li>
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(10, 14, 39, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 2px solid #1a1f3a;
		z-index: 1000;
		font-family: 'Gabarito', sans-serif;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.5rem;
		font-weight: 900;
		color: #ffffff !important; /* force nav Day III Digital text to white */
		text-decoration: none;
		letter-spacing: 0.05em;
	}

	.logo-icon {
		width: 28px;
		height: 28px;
		border-radius: 4px;
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
		background: #FFD84D;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 2.5rem;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		color: #e0e0e0;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.95rem;
		letter-spacing: 0.05em;
		transition: color 0.3s ease;
		position: relative;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: #6B8FFF;
		transition: width 0.3s ease;
	}

	.nav-links a:hover {
		color: #6B8FFF;
	}

	.nav-links a:hover::after {
		width: 100%;
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
			background: rgba(10, 14, 39, 0.98);
			padding: 2rem;
			gap: 1.5rem;
			transform: translateY(-100%);
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
			border-bottom: 2px solid #1a1f3a;
		}

		.nav-links.open {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		.nav-links a {
			font-size: 1.2rem;
		}
	}
</style>
