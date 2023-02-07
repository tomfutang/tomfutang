<script>
	import { BASE_URL } from "../consts";

	export let currentURL;
	let current = 'foo';
</script>

<header>
	<div class="corner">
		<a href="{BASE_URL}/"> {currentURL} </a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="{BASE_URL}/" class:active="{currentURL === "/tomfutang/"}">home</a>
			</li>
			<li>
				<a href="{BASE_URL}/about" class:active="{currentURL === "/tomfutang/about"}">about</a>
			</li>
			<li>
				<a href="{BASE_URL}/portfolio" class:active="{currentURL === "/tomfutang/portfolio"}">portfolio</a>
			</li>
			<li>
				<a href="{BASE_URL}/contact" class:active="{currentURL === "/tomfutang/contact"}">contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		--header-height: 4em;
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 10em;
		height: var(--header-height);
	}
	.corner a {
		justify-content: center;
		width: 100%;
		color: var(--acc-color);
	}
	.corner:hover a {
		color: var(--color-text);
	}
	nav {
		display: flex;
		margin-right: 3em;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: var(--header-height);
		display: flex;
		gap: 3em;
		justify-content: center;
		align-items: center;
		list-style: none;
	}
	li {
		position: relative;
		height: 100%;
	}
	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	a:hover {
		color: var(--acc-color);
	}
	a.active {
		color: red;
	}
</style>
