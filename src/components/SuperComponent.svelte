<script lang="ts">
    import MultiChoiceInput from "../sub-components/MultiChoiceInput.svelte";
    import NumberInput from "../sub-components/NumberInput.svelte";
    import RobotView from "../sub-components/RobotView.svelte";
    import TextInput from "../sub-components/TextInput.svelte";

    import type { generalComponent } from "../types";

    export let comp: generalComponent;
</script>

<main>
    {#if comp.type == "MultiChoice"}
        <MultiChoiceInput prompt={comp.prompt} label={comp.label} options={comp.options}/>
    {:else if comp.type == "Number"}
        <NumberInput prompt={comp.prompt} label={comp.label} min={comp.min} max={comp.max}/>
    {:else if comp.type == "RobotView"}
        <RobotView/>
    {:else if comp.type == "Text"}
        <TextInput prompt={comp.prompt} label={comp.label}/>
    {/if}
</main>

<style></style>
