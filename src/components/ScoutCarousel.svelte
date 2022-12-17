<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";
	import Siema from "siema";
	import { onMount } from "svelte";
	import Submit from "../components/Submit.svelte";
	import { data } from "../stores";

	let pages: page[];
	let carousel

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
            onInit: () => {},
            onChange: () => {},
        });
    });

	function reset() {
		carousel.goTo(0)
	}
</script>

<main>
    <div class="carousel">
        {#each pages as p}
            <Page title={p.title} components={p.components} />
        {/each}
        <Submit on:reset={reset}/>
    </div>
</main>

<style>
	.carousel {
		height: 100vh;
	}
</style>
