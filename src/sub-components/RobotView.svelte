<script lang="ts">
	import { data } from "../stores";


    let robotId: string;

    // robotId = (Math.random() * 1E4).toFixed().toString()
    robotId = "1540B"

    data["robotId"] = robotId.toString();
</script>

<main>
    <p>You are scouting team {robotId}</p>
</main>

<style></style>