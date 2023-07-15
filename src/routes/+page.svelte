<script>
	import sky from '$lib/images/sky.jpg';
	import grass from '$lib/images/grass.png';
	let y = 0;
	let h = 0;
	$: hStart = h - 150;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="hero-wrapper">
	<div class="sky-wrapper">
		<img class="sky hero" alt="sky banner" src={sky} />
		<h5 class="hero-text intro">you are cordially invited to...</h5>
	</div>
	<div class="title-wrapper">
		<h5 class:spaced={y > hStart && y < hStart + 120} class="hero-text title matthew">Matthew’s</h5>
		<div class="hero-text title birthday">
			<span class:jump={y > hStart + 40 && y < hStart + 140}>B</span>
			<span class:jump={y > hStart + 60 && y < hStart + 160}>i</span>
			<span class:jump={y > hStart + 80 && y < hStart + 180}>r</span>
			<span class:jump={y > hStart + 100 && y < hStart + 200}>t</span>
			<span class:jump={y > hStart + 120 && y < hStart + 220}>h</span>
			<span class:jump={y > hStart + 140 && y < hStart + 240}>d</span>
			<span class:jump={y > hStart + 160 && y < hStart + 260}>a</span>
			<span class:jump={y > hStart + 180 && y < hStart + 280}>y</span>
		</div>
		<h5 class:wobble={y > hStart + 280 && y < hStart + 380} class="hero-text title in-the">
			at the
		</h5>
		<h1 class:grow={y > hStart + 400 && y < hStart + 500} class="hero-text title park">Park</h1>
	</div>
	<div class="spacer" />
	<div class="grass-wrapper">
		<img class="grass hero" alt="grass banner" src={grass} />
	</div>
</div>
<div class="poster">hey hey some content here</div>

<style>
	@font-face {
		font-family: 'Orange Squash';
		font-style: normal;
		font-weight: normal;
		font-display: swap;
		src: url('/fonts/orange-squash/orange-squash.otf');
	}

	@font-face {
		font-family: 'Nanum Myeongjo';
		font-style: normal;
		font-weight: normal;
		font-display: swap;
		src: url('/fonts/nanum-myeongjo/NanumMyeongjo-Regular.ttf');
	}

	:root {
		--color-cream: #fdd9b5;
	}
	:global(body) {
		margin: 0;
		overscroll-behavior: none;
		font-family: 'Nanum Myeongjo';
	}

	.hero-wrapper {
		max-width: 100%;
	}

	.sky-wrapper {
		top: 0;
		height: 100vh;
		position: sticky;
	}

	.sky {
		top: 0;
		height: 100vh;
	}

	.hero {
		width: 100vw;
		object-fit: cover;
		max-width: 100%;
	}

	.hero-text {
		color: var(--color-cream);
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
	}

	.intro {
		top: 15vh;
		position: absolute;
	}

	.title-wrapper {
		position: sticky;
		top: 25vh;
		margin-bottom: -100vh;
		max-width: 100%;
		padding: 1.6rem;
		overflow: hidden;
	}

	.title {
		font-family: 'Orange Squash';
		letter-spacing: 1px;
		position: relative;
		transition: letter-spacing 0.4s ease-in-out;
		margin: 0;
	}

	.matthew {
		font-size: 30px;
		font-family: 'Nanum Myeongjo';
	}

	.birthday {
		font-size: 0px;
	}

	.birthday span {
		font-size: 80px;
		margin: 0 -1px;
		display: inline-block;
		transition: translate 0.1s ease-in-out;
	}

	.in-the {
		margin-top: -18px;
		font-family: 'Nanum Myeongjo';
		margin-bottom: -10px;
		transform-origin: top left;
		transition: rotate 0.4s ease-in-out;
	}

	.park {
		font-size: 60px;
		transition: scale 0.2s ease-out;
		transform-origin: top left;
	}

	.spaced {
		letter-spacing: 4px;
	}

	.jump {
		translate: 0 -15px;
	}

	.wobble {
		rotate: -20deg;
	}

	.grow {
		scale: 1.2;
	}
	.spacer {
		height: 200vh;
	}

	.grass {
		position: relative;
		bottom: -10px;
	}
	.grass-wrapper {
		position: sticky;
		bottom: -12px;
	}

	.poster {
		min-height: 100vh;
		background-color: var(--color-cream);
		position: relative;
	}
</style>
