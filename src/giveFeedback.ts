import { resetGameState } from "./resetGameState"

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
      console.log("You have " + (11 - gameState.numberOfTries) + " tries left.")
    }
    else if (gameState.numberOfCorrect == 4) {
      console.log("Congratulations,\nyou have won the game!")
      gameState.solvedOrLost = true
    }
  }