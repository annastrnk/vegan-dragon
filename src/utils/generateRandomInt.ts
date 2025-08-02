import { generateRandomNumber } from "./generateRandomNumber";

export function generateRandomInt(min:number, max:number):number{
    return Math.floor(generateRandomNumber(min, max))
}