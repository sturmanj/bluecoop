<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";

	let pages2: page[]

	// import pages from "../../static/layout.json"
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
								max: 8,
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
	}
</script>

<main>
	{#if typeof window !== "undefined"}
		{#each pages2 as p}
			<Page title={p.title} components={p.components} />
		{/each}
	{/if}
</main>

<style>
	main {
		text-align: center;
	}
</style>
