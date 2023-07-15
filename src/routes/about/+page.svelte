<div class="bg">
	<div class="content">
		this site was hand-programmed using <a href="https://kit.svelte.dev/" target="_blank"
			>sveltekit</a
		>. the webpage is deployed via <a href="https://vercel.com/" target="_blank">vercel</a>, and the
		database storing RSVPs is hosted by <a href="https://railway.app/" target="_blank">railway</a>.
		<br />
		<br />
		you can view the source code
		<a href="https://github.com/matthewlee01/bday2023" target="_blank">here</a>.
		<br />
		<br />
		i know it's a little silly, but i had a lot of fun making this website. i hope you enjoyed it too,
		and i'm excited to see you at the party!
		<br />
		<br />
		- matthew
		<br/>
		<br/>
		<a href='/'>back</a>
	</div>
</div>

<style>
	.bg {
		background-color: var(--color-dark-brown);
		color: var(--color-cream);
		padding: 4rem;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}

	.content {
		max-width: 640px;
		width: auto;
		height: auto;
	}

	a, a:visited {
		color: var(--color-cream);
	}
</style>
