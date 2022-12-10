<script lang="ts">
	import { onMount } from "svelte";
	import { data } from "../stores";
	import type { robot } from "../types";

	let team: robot;

	onMount(() => {
		fetch("/api/assign", {
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((teamObj) => {
				data["robotId"] = teamObj.id;
			});
	});

	$: team = data["robotId"];
</script>

<main>
	{#if team}
		<p style="color: {team.color}">You are scouting team {team.id}</p>
	{:else}
		<p>Waiting...</p>
		<p />{/if}
</main>

<style></style>
