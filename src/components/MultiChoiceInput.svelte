<script lang="ts">
	import type { option } from "../types";

	export let prompt: string;
	export const label: string = "multi";
	export let options: option[];
</script>

<main>
	<p>{prompt}</p>

    {#each options as opt}
	<label>
		<input type=checkbox value={opt.value}>
		{opt.value}
	</label>
    {/each}

</main>

<style></style>
