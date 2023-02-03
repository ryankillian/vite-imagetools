<script lang="ts">
	import '@picocss/pico';
	import 'iconify-icon';
	import './styles.css';
	import { page } from '$app/stores';
	$: p = $page.params;

	function toggleDarkMode() {
		let mode = document.querySelector('html')?.getAttribute('data-theme');
		document.querySelector('html')?.setAttribute('data-theme', mode == 'dark' ? 'light' : 'dark');
	}
</script>

<div class="stretch">
	<header>
		<nav>
			<ul>
				<li>
					<a href="/">
						<iconify-icon icon="material-symbols:menu" />
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/"><b>{p.book ? `Book ${p.book}` : 'The Iliad'}</b></a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/info">
						<iconify-icon icon="mdi:information" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="container sticky">
		<slot />
	</main>
	<footer>
		<nav>
			<ul>
				<li>
					<a href="/contact">
						<iconify-icon icon="material-symbols:mail-outline-rounded" />
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="#top">
						<iconify-icon icon="material-symbols:arrow-circle-up-outline-rounded" />
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/" on:click|preventDefault={toggleDarkMode}
						><iconify-icon icon="mdi:yin-yang" /></a
					>
				</li>
			</ul>
		</nav>
	</footer>
</div>

<style>
	.stretch {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.sticky {
		flex: 1;
	}
	iconify-icon {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		font-size: 2rem;
	}
</style>
