<script lang="ts">
    export let prompt: string
    export const label: string = "text"
</script>

<main>
    <p>{prompt}</p>
    <textarea></textarea>
</main>

<style>
    textarea {
        width: 350px;
        height: 100px;
    }
</style>