import { writable } from "svelte/store";
import type { appState } from "./types";


export let data: object = writable({ "key": "value" })
export let state: appState = "waiting"