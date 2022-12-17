<script lang="ts">
	import type { layout, page } from "../types";
	import Page from "../components/Page.svelte";
	import Siema from "siema";
	import { onMount } from "svelte";
	import Submit from "../components/Submit.svelte";
	import { data } from "../stores";

	let pages: any[];
	let carousel

    // const layout: layout = JSON.parse(localStorage.getItem("layout"));
    
    //@ts-ignore
    pages = [
        {
            "title": "Pregame",
            "components": [
                {
                    "type": "RobotView"
                }
            ]
        },
        {
            "title": "Hybrid",
            "components": [
                {
                    "type": "Number",
                    "prompt": "How many unique totes did the robot place tubes in?",
                    "min": 0,
                    "max": 8,
                    "label": "hybridTotes"
                }
            ]
        },
        {
            "title": "Teleop",
            "components": [
                {
                    "type": "Number",
                    "prompt": "How many tubes did the robot place in the upper totes?",
                    "min": 0,
                    "max": 40,
                    "label": "upperTubes"
                },
                {
                    "type": "Number",
                    "prompt": "How many tubes did the robot place in the inner area?",
                    "min": 0,
                    "max": 40,
                    "label": "innerTubes"
                },
                {
                    "type": "Number",
                    "prompt": "How many tubes did the robot place in the outer area?",
                    "min": 0,
                    "max": 40,
                    "label": "outerTubes"
                }
            ]
        },
        {
            "title": "Endgame",
            "components": [
                {
                    "type": "MultiChoice",
                    "prompt": "Which areas did the robots place bunnies in?",
                    "options": [
                        {
                            "value": "upper"
                        },
                        {
                            "value": "inner"
                        },
                        {
                            "value": "outer"
                        }
                    ],
                    "label": "bunnyLocs"
                },
                {
                    "type": "MultiChoice",
                    "prompt": "What defense strategies did the robot use?",
                    "options": [
                        {
                            "value": "pushed robots"
                        },
                        {
                            "value": "stole bunnies"
                        },
                        {
                            "value": "hogged tubes"
                        },
                        {
                            "value": "removed upper tubes"
                        },
                        {
                            "value": "removed inner tubes"
                        },
                        {
                            "value": "removed outer tubes"
                        }
                    ],
                    "label": "defense"
                },
                {
                    "type": "Text",
                    "prompt": "Any other notes?",
                    "label": "notes"
                }
            ]
        }
    ]

    onMount(() => {
        carousel = new Siema({
            selector: ".carousel",
            duration: 200,
            easing: "ease-in-out",
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: false,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        });
    });

	function reset() {
		carousel.goTo(0)
	}
</script>

<main>
    <div class="carousel" id="car">
        {#each pages as p}
            <Page title={p.title} components={p.components} />
        {/each}
        <Submit on:reset={reset}/>
    </div>
</main>

<style>
	.carousel {
        width: 90%;
		height: 100vh;
	}
</style>
