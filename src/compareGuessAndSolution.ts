import { resetGameState } from './resetGameState';


export function compareGuessAndSolution(currentGuess: string[], solution: string[], gameState = resetGameState()): number[] {

    for (let i = 0; i !== 4; i++) {

        // checking for completely correct colors
        if (currentGuess[i] == solution[i]) {
            gameState.numberOfCorrect++;
            gameState.positionOfCompletelyCorrect[i] = currentGuess[i];
        }



        // checking for false colors
        else if (solution.includes(currentGuess[i]) !== true) {
            gameState.numberOfFalse++;
        }
    }
    console.log(gameState.positionOfCompletelyCorrect)

    // checking for colors in the wrong position

    for (let i = 0; i !== 4; i++) {
        if (gameState.positionOfCompletelyCorrect[i] !== undefined) {
            let hasMatched = false
            for (let a = 0; a !== 4; a++) {
                if (currentGuess[i] == solution[a] && solution[a] !== gameState.positionOfCompletelyCorrect[i] && hasMatched == false) {
                    gameState.numberOfInCombination++
                    hasMatched = true
                }
            }
            hasMatched = false
        }
    }
    return [gameState.numberOfCorrect,
    gameState.numberOfFalse,
    gameState.numberOfInCombination]

}