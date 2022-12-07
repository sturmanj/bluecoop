<script lang="ts">
	import { onMount } from "svelte";
	import { data } from "../stores";
	import type { robot } from "../types";

	let team: robot;

	onMount(() => {
		fetch("/api/assign", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => (team = data.robot));
	});

	if (team) data["robotId"] = team.id.toString();
</script>

<main>
	{#if team}
		<p style="color: {team.color}">You are scouting team {team.id}</p>
	{:else}
		<p>Waiting...<p>
	{/if}
</main>


<style></style>
