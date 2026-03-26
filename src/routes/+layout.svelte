<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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

<Nav />

{@render children()}

<style>
	:global(body) {
		padding-top: 0px;
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
</style>
