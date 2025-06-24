import * as readline from 'readline'
import { createSolution } from './create-solution';
import { pinColors } from './pin';
import { getInputAndCompare } from './getInputAndCompare';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let solution = createSolution()
let solvedOrLost: boolean = false
let numberOfTries: number = 0
console.log("The allowed colors are: " + pinColors)
if (numberOfTries > 11) {
  solvedOrLost = true
}

getInputAndCompare()


// while not solved:

// get input(guess) from user








