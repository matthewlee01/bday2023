<script>
	import sky from '$lib/images/sky.jpg';
	import grass from '$lib/images/grass.png';
</script>

<div class="hero-wrapper">
	<div class="sky-wrapper">
		<img class="sky hero" alt="sky banner" src={sky} />
		<h5 class="hero-text intro">you are cordially invited to...</h5>
	</div>
	<div class="title-wrapper">
		<h5 class="hero-text title matthew">Matthew’s</h5>
		<h1 class="hero-text title birthday">Birthday</h1>
		<h5 class="hero-text title in-the">at the</h5>
		<h1 class="hero-text title park">Park</h1>
	</div>
	<div class="spacer">
	</div>
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
		padding: 2rem;
		overflow: hidden;
	}

	.title {
		font-family: 'Orange Squash';
		letter-spacing: 1px;
		position: relative;
		margin: 0;
	}

	.matthew {
		font-size: 30px;
		font-family: 'Nanum Myeongjo'
	}

	.birthday {
		font-size: 80px;
	}

	.in-the {
		margin-top: -16px;
		font-family: 'Nanum Myeongjo';
		margin-bottom: -10px;
	}
	
	.park {
		font-size: 60px;
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
