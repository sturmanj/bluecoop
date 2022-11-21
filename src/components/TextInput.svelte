<script lang="ts">
    export let prompt: string
    export let label: string
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