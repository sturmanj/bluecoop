<script lang="ts">
	import DefenseToggle from "./DefenseToggle.svelte";
    import MultiChoiceInput from "./MultiChoiceInput.svelte";
    import NumberInput from "./NumberInput.svelte";
    import RobotView from "./RobotView.svelte";
    import TextInput from "./TextInput.svelte";

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
    {:else if comp.type == "DefenseToggle"}
        <DefenseToggle label={comp.label} options={comp.options}/>
    {/if}
</main>

<style></style>
