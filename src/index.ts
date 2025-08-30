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

type anyPin = "blue" | "white" | "red" | "black" | "orange" | "green" | "yellow" | "grey"
let solution = createSolution()
console.log(solution)
let gameState = resetGameState()

console.log("The allowed colors are:")
for (let i = 0; i < pinColors.length; i++) {
  console.log("%c" + pinColors[i] + ",", "color: " + pinColors[i]);
}

// prompt user for guess
rl.setPrompt('Guess the solution, e.g. "red,white,red,orange"\n(duplicate colors are allowed):\n')
rl.prompt()
rl.on('line', (answer) => {
  let currentGuess: Array<string> = answer.split(",")

  // stop if invalid answer
  // doesn't work right now, because it still executes everything afterwards
  if (currentGuess.every(color => pinColors.includes(color)) !== true && currentGuess[4]) {
    console.log(`Invalid Answer!`)
    console.log(`${(11 - gameState.numberOfTries)} Tries remaining,\nTry again:`)
    return

  }

  console.log(currentGuess)

  // compare guess and solution
  const result = compareGuessAndSolution(currentGuess, solution, gameState)
  gameState.numberOfCorrect = result[0]
  gameState.numberOfFalse = result[1]
  gameState.numberOfInCombination = result[2]

  // give feedback

  giveFeedback(gameState)

})











