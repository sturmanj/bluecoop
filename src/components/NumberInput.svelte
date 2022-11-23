<script lang="ts">
    export let prompt: string
    export const label: string = "number"
    export let min: number
    export let max: number
</script>

<main>
    <p>{prompt}</p>
    <div>
        <button class="inline">-</button>
        <p class="inline">{min} - {max}</p>
        <button class="inline">+</button>
    </div>
</main>

<style>
    .inline {
        display: inline-block;
    }
</style>