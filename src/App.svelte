<script lang="ts">
	import type { layout, page } from "./types"
	import Page from "./Page.svelte";
	
	import pages from './layout.json'

	localStorage.setItem("layout", JSON.stringify(pages))

	const layout: layout = JSON.parse(localStorage.getItem("layout"))
	const pages2: page[] = layout.pages;
</script>

<main>
	{#each pages2 as p}
        <Page title={p.title} components={p.components}/>
    {/each}
</main>

<style>
	main {
		text-align: center;
	}
</style>