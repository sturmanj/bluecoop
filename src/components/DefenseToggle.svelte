<script lang="ts">
	import type { option } from "../types";
	import { data } from "../stores";

	export let label: string;
	export let options: option[];

	data[label] = []

</script>

<main>
	<p>What strategies did the robot use to defend?</p>

	<label><input type="checkbox" value="Did not defend"/> did not defend</label><br>
	{#each options as opt}
	<label>
		<input type="checkbox" bind:group={data[label]} value={opt.value} />
		{opt.value}
	</label>
	<br>
	{/each}
</main>

<style></style>
