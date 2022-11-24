<script lang="ts">
	import type { option } from "../types";
	import { data } from "../stores";

	export let prompt: string;
	export let label: string;
	export let options: option[];

	data[label] = []
</script>

<main>
	<p>{prompt}</p>

    {#each options as opt}
	<label>
		<input type=checkbox bind:group={data[label]} value={opt.value}>
		{opt.value}
	</label>
	<br>
    {/each}

</main>

<style>

</style>
