<script>
	import { BASE_URL } from "../consts";

	export let currentURL;
</script>

<header>
	<div class="corner">
		<a href="{BASE_URL}/"> {currentURL} </a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="{BASE_URL}/" class:active={currentURL === BASE_URL + "/"}>home</a>
			</li>
			<li>
				<a
					href="{BASE_URL}/about/aa"
					class:active={currentURL === BASE_URL + "/about/"}>about</a
				>
			</li>
			<li>
				<a
					href="{BASE_URL}/portfolio/"
					class:active={currentURL === BASE_URL + "/portfolio/"}>portfolio</a
				>
			</li>
			<li>
				<a
					href="{BASE_URL}/contact/"
					class:active={currentURL === BASE_URL + "/contact/"}>contact</a
				>
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
		width: fit-content;
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
		align-items: center;
		align-items: flex-end;
		height: 100%;
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
		font-weight: 800;
	}
	a.active::before {
		--dot-size: 7px;
		transform: translateX(-50%);
		border-radius: 100%;
		position: absolute;
		background: var(--black-color);
		left: 50%;
		bottom: -1em;
		content: "";
		height: var(--dot-size);
		width: var(--dot-size);
	}
</style>
