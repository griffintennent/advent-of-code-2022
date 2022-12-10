import { input } from "./input"

export function getCalorieTotals(): number[] {
    return input.split('\n\n').map((stringGroup) => {
    return stringGroup.split('\n').map((str) => parseInt(str)).reduce((accum, total) => accum + total)
}).sort((a, b)  => a < b ? 1 : -1)

}

console.log(`Solution A: ${getCalorieTotals()[0]}`)