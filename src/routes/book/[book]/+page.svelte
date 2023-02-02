<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Picture from '$lib/components/Picture.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let images = data.pages;

	let height = 3113;
	let width = 2305;

	onMount(async () => {
		if (browser) {
			if (window.innerWidth <= 540) {
				width = 540;
				height = 743;
			} else if (window.innerWidth <= 720) {
				width = 720;
				height = 979;
			} else if (window.innerWidth <= 960) {
				width = 960;
				height = 1305;
			} else {
				width = 1140;
				height = 1550;
			}
		}
	});
</script>

<svelte:head>
	<title>The Iliad | Book {$page.params.book}</title>
	<meta
		name="description"
		content="Book {$page.params.book} of The Iliad of Homer, Alexander Pope translation"
	/>
</svelte:head>

<section>
	{#each images as image, index}
		<div>
			<Picture {image} {index} {height} {width} bookNumber={parseInt($page.params.book)} />
		</div>
	{/each}
</section>
