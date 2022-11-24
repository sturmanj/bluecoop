export type layout = {
    pages: page[]
}

export type page = {
    title: string,
    components: generalComponent[]
}

export type option = {
    value: string,
}

export type component = {
    type: string
}

export type input = component & {
    prompt: string,
    label: string,
}

//actual input types:
export type numberInput = input & {
    min: number,
    max: number,
}

export type textInput = input

export type multiChoice = input & {
    options: option[]
}

export type defenseToggle = input & {
    options: option[]
}

export type robotView = component

export type generalComponent = numberInput & textInput & multiChoice & defenseToggle