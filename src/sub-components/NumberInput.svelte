<script lang="ts">
    import { data } from "../stores";

    export let prompt: string
    export let label: string
    export let min: number
    export let max: number

    data[label] = 0;

    function inc(): void {
        if (data[label] < max) data[label] += 1;
    }

    function dec(): void {
        if (data[label] > min) data[label] -= 1;
    }

    function input(event) {
		if (event.target.value > max) event.target.value = max
        if (event.target.value < min) event.target.value = min
    }

</script>

<main>
    <p>{prompt}</p>
    <div>
        <button class="inline" on:click={dec}>-</button>
        <input class="inline" type=number bind:value={data[label]} on:change={input} 
        min={min} max={max}>
        <button class="inline" on:click={inc}>+</button>
    </div>
</main>

<style>
    .inline {
        display: inline-block;
    }

    button, input {
        font-size: 3em;
        text-align: center;
        width: 1em;
        height: 1em;
    }

    input {
        font-size: 3em;
        text-align: center;
        width: 1em;
        height: 1em;
        margin-left: 0.3em;
        margin-right: 0.3em;
    }
</style>