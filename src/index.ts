import * as readline from 'readline'
import { createSolution } from './create-solution';
import { pinColors } from './pin';
import { resetGameState } from './resetGameState';
import { giveFeedback } from './giveFeedback';
import { compareGuessAndSolution } from './compareGuessAndSolution';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution = ["white", "yellow", "yellow", "yellow"]
let gameState = resetGameState()

console.log("The allowed colors are:")
for (let i = 0; i < pinColors.length; i++) {
  console.log("%c" + pinColors[i] + ",", "color: " + pinColors[i]);
}

if (gameState.numberOfTries > 11) {
  gameState.solvedOrLost = true
}

rl.question('Guess the solution, e.g. "red,white,red,orange"\n(duplicate colors are alowed):\n', (answer) => {
  let currentGuess: Array<string> = answer.split(",")

  // stop if invalid answer

  if (currentGuess.every(color => pinColors.includes(color)) !== true) {
    console.log("Invalid Answer!")
    rl.close()
    return
  }
  console.log(currentGuess)

  // compare guess and solution

  gameState.numberOfCorrect = compareGuessAndSolution(currentGuess, solution)[0]
  gameState.numberOfFalse = compareGuessAndSolution(currentGuess, solution)[1]
  gameState.numberOfInCombination = compareGuessAndSolution(currentGuess, solution)[2]

  // give feedback

  giveFeedback()

})











