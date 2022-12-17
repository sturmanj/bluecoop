<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";
	import ScoutCarousel from "../components/ScoutCarousel.svelte";
	import Siema from "siema";
	import { onMount } from "svelte";
	import Submit from "../components/Submit.svelte";
	import { data } from "../stores";

	let controller;

	let promise;

	async function err() {
		throw new Error();
	}

	async function reqTeam() {
		controller = new AbortController()
		await fetch("/api/assign", { "signal": controller.signal })
			.then((res) => res.json())
			.then((team) => data["robot"] = team)
	}

	onMount(() => {
		promise = err();
	});
</script>

<svelte:head>
	<title>Scouting</title>
</svelte:head>

<main>
	<!-- {#if typeof window != "undefined"} -->
		{#await promise}
			<button style="background-color: Tomato" on:click={controller.abort()}>Log Out</button>
		{:then}
			<ScoutCarousel />
		{:catch}
			<button style="background-color: SpringGreen" on:click={() => (promise = reqTeam())}>Log In</button>
		{/await}
	<!-- {/if} -->
</main>

<style>
	main {
		text-align: center;
		width: 100%;
		height: 100vh;
	}

	button {
		font-size: 3em;
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
	}
</style>
