<script lang="ts">
	import type { option } from "../types";

	export let label: string;
	export let options: option[];
</script>

<main>
	<p>What strategies did the robot use to defend?</p>

	<label><input type="checkbox" value="Did not defend"/> did not defend</label>
	{#each options as opt}
	<label>
		<input type="checkbox" value={opt.value} />
		{opt.value}
	</label>
	{/each}
</main>

<style></style>
