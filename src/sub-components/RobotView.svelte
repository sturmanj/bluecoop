<script lang="ts">
	import { onMount } from "svelte";
	import { data } from "../stores";
	import type { robot } from "../types";

	let team: robot;

	$: team = data["robot"];
</script>

<main>
	{#if team}
		<p style="color: {team.color}">You are scouting team {team.id}</p>
	{:else}
		<p>Waiting...</p>
	{/if}
</main>

<style></style>
