<script lang="ts">
	import { data } from "../stores";
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher()

	async function submit() {

		await fetch("/api/submit", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data: compileData() }),
		}).then(() => {
			dispatch("reset")
		})
	}

	function compileData(): Array<any> {
		let finalData = [];

		for (let key in data) {
			if (typeof data[key] == "object") {
				finalData.push(data[key].join(", "));
			} else {
				finalData.push(data[key]);
			}
		}

		finalData = finalData.splice(3);
		finalData.unshift(timestamp());

		return finalData;
	}

	function timestamp() {
		const date = new Date();

		const normalize = (num: number) => num.toString().padStart(2, "0");

		return (
			[
				normalize(date.getMonth() + 1),
				normalize(date.getDate()),
				date.getFullYear(),
			].join("/") +
			" " +
			[
				normalize(date.getHours()),
				normalize(date.getMinutes()),
				normalize(date.getSeconds()),
			].join(":")
		);
	}
</script>

<main>
	<h1>Submit</h1>
	<button on:click={submit}>submit</button>
</main>

<style>
	button {
		font-size: 20px;
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
	}
</style>
