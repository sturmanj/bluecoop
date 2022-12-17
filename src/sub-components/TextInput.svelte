<script lang="ts">
    import { data } from "../stores";

    export let prompt: string
    export let label: string

    data[label] = ""
</script>

<main>
    <p>{prompt}</p>
    <textarea bind:value={data[label]}></textarea>
</main>

<style>
    textarea {
        width: 80vw;
        height: 100px
    }
</style>