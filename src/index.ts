import * as readline from 'readline'
import { createSolution } from './create-solution';
import { pinColors } from './pin';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let numberOfCorrect: number = 0
let numberOfFalse: number = 0
let numberOfInCombination: number = 0
let solvedOrLost: boolean = false
let numberOfTries: number = 0
let loopRunning = false;
let completelyCorrect: Array<string> = []
console.log("The allowed colors are: " + pinColors)
if (numberOfTries > 11) {
  solvedOrLost = true
}

let solution = createSolution()

// while not solved:

// get input(guess) from user








