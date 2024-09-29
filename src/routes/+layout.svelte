<script>
	import './styles.css';
</script>

<div class="root">
	<main>
		<slot />
	</main>

	<footer>
		<div>
			Hussam Khatib
			<a href="https://twitter.com/hussamkhatib3">(@hussamkhatib3)</a>
		</div>
		<div><a href="https://github.com/hussamkhatib">Github</a></div>
	</footer>
</div>

<style>
	.root {
		display: grid;
		grid-template-rows: 1fr auto;
		padding: 2rem;
		box-sizing: border-box;
		height: 100dvh;
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: space-between;
		color: #6b7280;
		font-size: 0.8rem;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
