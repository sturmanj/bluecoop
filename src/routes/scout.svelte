<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";
	import Siema from "siema";
	import type { Seima as seima } from "siema";
	import { onMount } from "svelte";
	import Submit from "../components/Submit.svelte";
	import { data, state } from "../stores";

	let pages: page[];
	let carousel: seima;

	if (typeof window != "undefined") {
		const layout: layout = JSON.parse(localStorage.getItem("layout"));
		pages = layout.pages;

		onMount(() => {
			carousel = new Siema({
				selector: ".carousel",
				duration: 200,
				easing: "ease-in-out",
				perPage: 1,
				startIndex: 0,
				draggable: true,
				multipleDrag: false,
				threshold: 20,
				loop: false,
				rtl: false,
			});
		});
	}

	function reset() {
		for (let key in data) {
			// console.log(data[key])
			// switch (typeof data[key]) {
			// 	default: 
			// }
		}

		carousel.goTo(0)
	}

</script>

<svelte:head>
	<title>Scouting</title>
</svelte:head>

<main>
	{#if typeof window != "undefined"}
		<div class="carousel">
			{#each pages as p}
				<Page title={p.title} components={p.components} />
			{/each}
			<Submit on:reset={reset}/>
		</div>
	{/if}
</main>

<style>
	main {
		text-align: center;
	}

	.carousel {
		width: 100%;
		height: 100vh;
	}
</style>
