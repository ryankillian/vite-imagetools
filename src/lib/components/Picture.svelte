<script lang="ts">
	export let image: Array<{ src: string; w: number }>;
	export let index: number;
	export let height: number;
	export let width: number;
	export let bookNumber: number;
</script>

<picture>
	<source media="(min-width: 1140px)" type="image/avif" srcset={image[9].src} />
	<source media="(min-width: 960px)" type="image/avif" srcset={image[6].src} />
	<source media="(min-width: 720px)" type="image/avif" srcset={image[3].src} />
	<source media="(min-width: 540px)" type="image/avif" srcset={image[0].src} />

	<source media="(min-width: 1140px)" type="image/webp" srcset={image[10].src} />
	<source media="(min-width: 960px)" type="image/webp" srcset={image[7].src} />
	<source media="(min-width: 720px)" type="image/webp" srcset={image[4].src} />
	<source media="(min-width: 540px)" type="image/webp" srcset={image[1].src} />

	<source media="(min-width: 1140px)" type="image/jpeg" srcset={image[11].src} />
	<source media="(min-width: 960px)" type="image/jpeg" srcset={image[8].src} />
	<source media="(min-width: 720px)" type="image/jpeg" srcset={image[5].src} />
	<source media="(min-width: 540px)" type="image/jpeg" srcset={image[2].src} />

	<img
		src={image[0].src}
		{height}
		{width}
		loading={index < 3 ? 'eager' : 'lazy'}
		fetchpriority={index < 2 ? 'high' : 'low'}
		sizes="(max-width: 539px) 100vw, (min-width: 540px) 540px, (min-width: 720px) 720px, (min-width: 960px) 960px, (min-width: 1140px) 1140px"
		alt={`Iliad Book ${bookNumber} Page ${index + 1} `}
	/>
</picture>
