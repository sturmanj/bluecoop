<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";
	import Siema from "siema";
	import { onMount } from "svelte";
	import Submit from "../components/Submit.svelte";

	let pages2: page[];

	if (typeof window !== "undefined") {
		localStorage.setItem(
			"layout",
			JSON.stringify({
				pages: [
					{
						title: "Pregame",
						components: [
							{
								type: "RobotView",
							},
						],
					},
					{
						title: "Hybrid",
						components: [
							{
								type: "Number",
								prompt: "How many unique totes did the robot place tubes in?",
								min: 0,
								max: 12,
								label: "hybridTotes",
							},
						],
					},
					{
						title: "Teleop",
						components: [
							{
								type: "Number",
								prompt: "How many tubes did the robot place in the upper totes?",
								min: 0,
								max: 40,
								label: "upperTubes",
							},
							{
								type: "Number",
								prompt: "How many tubes did the robot place in the inner area?",
								min: 0,
								max: 40,
								label: "innerTubes",
							},
							{
								type: "Number",
								prompt: "How many tubes did the robot place in the outer area?",
								min: 0,
								max: 40,
								label: "outerTubes",
							},
						],
					},
					{
						title: "Endgame",
						components: [
							{
								type: "MultiChoice",
								prompt: "Which areas did the robots place bunnies in?",
								options: [
									{
										value: "upper",
									},
									{
										value: "inner",
									},
									{
										value: "outer",
									},
								],
								label: "bunnyLocs",
							},
							{
								type: "DefenseToggle",
								options: [
									{
										value: "pushed robots",
									},
									{
										value: "stole bunnies",
									},
									{
										value: "hogged tubes",
									},
									{
										value: "removed upper tubes",
									},
									{
										value: "removed inner tubes",
									},
									{
										value: "removed outer tubes",
									},
								],
								label: "defense",
							},
							{
								type: "Text",
								prompt: "Any other notes?",
								label: "notes",
							},
						],
					},
				],
			})
		);

		const layout: layout = JSON.parse(localStorage.getItem("layout"));
		pages2 = layout.pages;

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
	{#if typeof window !== "undefined"}
		<div class="carousel">
			{#each pages2 as p}
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
