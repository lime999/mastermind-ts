import { resetGameState } from './resetGameState';


export function compareGuessAndSolution(currentGuess: string[], solution: string[], gameState = resetGameState()): number[] {

    for (let i = 0; i !== 4; i++) {

        // checking for completely correct colors

        if (currentGuess[i] == solution[i]) {
            gameState.numberOfCorrect++;
            gameState.positionOfCompletelyCorrect[i] = true;
        }


        // checking for false colors

        else if (solution.includes(currentGuess[i]) == false) {
            gameState.numberOfFalse++;
        }
    }
    console.log(gameState.positionOfCompletelyCorrect)

    // checking for colors in the wrong position

    let hasMatched = false
    for (let i = 0; i !== 4; i++) {
        if (!gameState.positionOfCompletelyCorrect[i]) {
            for (let a = 0; a !== 4; a++) {
                if (currentGuess[i] == solution[a] && !gameState.positionOfCompletelyCorrect[i] && !hasMatched) {
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