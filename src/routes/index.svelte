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
	<h1>BlueCoop</h1>

	<p>
		<button on:click={() => goto("/scout")}>Scout</button>
		<button on:click={() => goto("/pit")}>Pit Scout</button>
		<button on:click={() => goto("/foul")}>Foul</button>
		<button on:click={getLayout}>Refresh Layout</button>
		<button on:click={() => goto("/analyst")}>Analyst</button>
	</p>
</main>

<style>
</style>
