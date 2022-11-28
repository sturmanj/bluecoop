<script lang="ts">
    import SuperComponent from "./SuperComponent.svelte";
	import type { generalComponent } from "../types";

    export let title: string;
    export let components: generalComponent[];
</script>

<main>
    <h1>{title}</h1>
    {#each components as comp}
        <SuperComponent comp={comp}/>
    {/each}
</main>

<style>
    main {
        widows: 100vw;
        height: 100vw;
    }
</style>