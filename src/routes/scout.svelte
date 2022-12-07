<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";
	import Siema from "siema";
	import { onMount } from "svelte";
	import Submit from "../components/Submit.svelte";
	import { state } from "../stores";

	let pages: page[];

	if (typeof window != "undefined") {
		const layout: layout = JSON.parse(localStorage.getItem("layout"));
		pages = layout.pages;

		onMount(() => {
			new Siema({
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
				onInit: () => {},
				onChange: () => {},
			});
		});
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
			<Submit />
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
