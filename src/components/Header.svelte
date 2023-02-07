<script>
	// import { page } from '$app/stores';
	// import logo from '../asset/svg/logo_fill_mono.svg';
	import { BASE_URL } from "../consts";
</script>

<header>
	<div class="corner">
		<a href="{BASE_URL}/">
			TOM
		</a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="{BASE_URL}/portfolio">PORTFOLIO</a>
			</li>
			<li>
				<a href="{BASE_URL}/about">ABOUT</a>
			</li>
			<li>
				<a href="{BASE_URL}/contact">CONTACT</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<!-- <img src={github} alt="GitHub" /> -->
		</a>
	</div>
</header>

<style>
	header {
		--header-height: 4em;
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 35em;
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
		width: 100%;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: var(--header-height);
		display: flex;
		gap: 8em;
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
</style>
