<script>
	import sky from '$lib/images/sky.jpg';
	import grass from '$lib/images/grass.png';
	import { enhance } from '$app/forms';

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
		<span class="hint" class:hidden={y > 20}>scroll down!<br />&#10623</span>
		<img class="grass hero" alt="grass banner" src={grass} />
	</div>
</div>
<div class="poster">
	<div class="centered-container">
		<h1>...Details</h1>
		who<span class="right">you and me</span><br />
		what<span class="right">chilling on the grass</span><br />
		where<span class="right">at central park</span><br />
		when<span class="right">on july 30th</span><br />
		why<span class="right">because it will be nice</span><br />
	</div>
	<br />
	<div class="centered-container">
		<h1 style:text-align="right">the Plan...</h1>
		<div class="justifier">
			i'll be sitting out at [LOCATION] from 1:00pm-6:00pm with a couple of picnic blankets and a
			supply of snacks and drinks. feel free to drop by or leave whenever is most convenient for
			you! we'll chat, have music, share snacks, and maybe play some games if the conditions permit
			it.
		</div>
	</div>
	<div class="rsvp">
		<h1>...RSVP</h1>
		<form method="POST" use:enhance>
			name<input type="text" placeholder="first & last..." name="note" required /><br />
			<br />email <span class="small">(optional)</span><input
				type="email"
				placeholder="friend@mail.com..."
				name="email"
			/><br />
			<br />note <span class="small">(optional)</span><input
				type="text"
				placeholder="your comments/concerns..."
				name="note"
			/><br />
			<br />ETA <span class="small">(optional)</span><input
				type="time"
				value="06:00"
				min="01:00"
				max="06:00"
				step="900"
			/><br />
			<br /><br />
			<br /><span style:font-family="NanumMyeongjo Bold">save the date (july 30th)...</span><button
				>...i'll be there!</button
			>
		</form>
		<div />
	</div>
	<div class="centered-container">
		<h1 style:text-align="right">Gifts...</h1>
		<div class="justifier">
			please do not feel obligated to bring any gifts! i sleep on a mattress on the floor in a dusty
			20 year old apartment with no lights and i really don't have much capacity for material
			possessions at the moment. if you really have extra time & money on your hands, consider
			donating to a charity that's meaningful to you, treating yourself to a yummy meal, or bringing
			extra snacks/drinks to the picnic!
		</div>
	</div>
	<div class="centered-container">
		<h1>...Quotes</h1>
		<div class="grid">
			<div>
				i hope everything goes well! one time i went to a birthday party in a park and it was
				reaaaaaally bad.<br />
				<br />
				- friend
			</div>
			<div />
			<div />
			<div>
				it's going to be a great time! i'm looking forward to it.<br />
				<br />
				- another guy
			</div>
			<div>
				i've got a good feeling about this one. hopefully this one is better than the last!<br />
				<br />
				- some friend
			</div>
			<div />
			<div />
			<div>
				be there or be square or not. it doesn't really matter much to me since it's not my party.<br
				/>
				<br />
				- alleged friend
			</div>
		</div>
	</div>
</div>

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

	@font-face {
		font-family: 'Nanum Myeongjo Bold';
		font-style: normal;
		font-weight: normal;
		font-display: swap;
		src: url('/fonts/nanum-myeongjo/NanumMyeongjo-Bold.ttf');
	}

	:root {
		--color-cream: #fdd9b5;
		--color-dark-brown: #23120b;
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
		letter-spacing: 0px;
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
		letter-spacing: 2px;
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

	.hint {
		position: absolute;
		top: -24px;
		text-align: center;
		color: var(--color-cream);
		display: block;
		left: 50%;
		translate: -50%;
		-webkit-animation: fadein 5s ease-in; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 5s ease-in; /* Firefox < 16 */
		-ms-animation: fadein 5s ease-in; /* Internet Explorer */
		-o-animation: fadein 5s ease-in; /* Opera < 12.1 */
		animation: fadein 5s ease-in;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.grass-wrapper {
		position: sticky;
		bottom: 0px;
	}

	.poster {
		min-height: 100vh;
		background-color: var(--color-cream);
		position: relative;
		padding: 3rem;
		color: var(--color-dark-brown);
		line-height: 1.4rem;
	}

	.centered-container {
		margin: 0 auto;
		max-width: 640px;
	}

	.justifier {
		text-align: justify;
	}

	.poster h1 {
		color: inherit;
		font-family: 'Nanum Myeongjo Bold';
	}

	.poster span.right {
		float: right;
	}

	.rsvp {
		position: sticky;
		top: 0;
		padding: 2rem 0 2rem 0;
		max-width: 640px;
		margin: 0 auto 3rem auto;
		background-color: var(--color-cream);
		border-bottom: 3px solid var(--color-dark-brown);
	}

	.small {
		font-size: 0.6rem;
	}

	input {
		border: none;
		border-bottom: 1px dotted var(--color-dark-brown);
		background: none;
		float: right;
		color: var(--color-dark-brown);
		font-family: 'Nanum Myeongjo';
		width: 150px;
	}

	input:focus {
		outline: none;
	}

	button {
		background: none;
		font-family: 'Nanum Myeongjo Bold';
		border: 1px dotted var(--color-dark-brown);
		padding: 0.4rem 0.8rem;
		float: right;
		margin-top: -0.6rem;
	}

	button:hover {
		cursor: pointer;
	}

	.grid {
		display: grid;
		grid-template-rows: repeat(4, auto);
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 30px;
	}

	.hidden {
		display: none;
	}
</style>
