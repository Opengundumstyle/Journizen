import {surpriseMePrompts} from '../constants'


export function getRandomPrompt(prompt){
        const randomIndex = Math.floor(Math.random() * surpriseMePrompts.legnth)
        const randomPrompt = surpriseMePrompts[randomIndex]

        if(randomPrompt === prompt) return getRandomPrompt(prompt)

        return randomPrompt
}