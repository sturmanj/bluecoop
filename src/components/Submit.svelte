<script lang="ts">
	import { data } from "../stores";

	let finalData = [];

	function submit() {
		finalData = [];

		for (let key in data) {
			if (typeof data[key] == "object") {
				finalData.push(data[key].join(","));
			} else {
				finalData.push(data[key]);
			}
		}

		finalData = finalData.splice(3);
        finalData.unshift(timestamp())

		console.log(JSON.stringify({ data: finalData }));

		fetch("/api/submit", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data: finalData }),
		});
	}

    
function timestamp() {
    const date = new Date()

    const normalize = (num: number) => num.toString().padStart(2, "0")

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
