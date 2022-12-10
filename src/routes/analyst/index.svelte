<svelte:head>
	<title>Main Page</title>
</svelte:head>

<script lang="ts">
	import { goto } from "@sapper/app";

	function getLayout() {
		fetch("/api/layout", {
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((layout) => localStorage.setItem("layout", JSON.stringify(layout)))
	}
</script>

<main>
	<h1>Analyst Homepage</h1>

	<p>
		<button on:click={() => goto("./analyst/assign")}>Assign</button>
	</p>
</main>

<style>
</style>
