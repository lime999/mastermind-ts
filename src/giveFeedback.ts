import { createSolution } from "./create-solution";
import { resetGameState } from "./resetGameState"
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function giveFeedback(gameState = resetGameState()) {
  if (gameState.numberOfCorrect < 4) {
    console.log(
      "Your Guess had " +
      (gameState.numberOfCorrect < 1 ? "no" : gameState.numberOfCorrect) + " completely correct " +
      (gameState.numberOfCorrect == 1 ? "color" : "colors") + ", " +
      (gameState.numberOfFalse < 1 ? "no" : gameState.numberOfFalse) + " false " +
      (gameState.numberOfFalse == 1 ? "color" : "colors") + ", and " +
      (gameState.numberOfInCombination < 1 ? "no" : gameState.numberOfInCombination) + " " +
      (gameState.numberOfInCombination == 1 ? "color" : "colors") + " that " +
      (gameState.numberOfInCombination == 1 ? "was" : "were") + " correct but in the wrong place:"
    )
    gameState.numberOfTries++
    if (gameState.numberOfTries < 11) {
      console.log("You have " + (11 - gameState.numberOfTries) + " tries left.")
    }else if (gameState.numberOfTries > 10) {
      console.log("You have lost the game!\nthe correct solution was: " + createSolution())
      rl.close()
    }
  }
  else if (gameState.numberOfCorrect == 4) {
    console.log("Congratulations,\nyou have won the game!")
    rl.close()
  }
}