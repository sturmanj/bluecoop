import { writable } from "svelte/store";


export let data: object = writable({ "key": "value" })
export let state: object = writable("waiting")