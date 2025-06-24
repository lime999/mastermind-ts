import { createSolution } from './create-solution';

createSolution()

export function checkSolution() {
    for (let i = 0; i !== 4; i++) {

        // checking for completely correct colors
        if (currentGuess[i] == solution[i]) {
            numberOfCorrect += 1;
            completelyCorrect.push(currentGuess[i]);
        }



        // checking for false colors
        else if (solution.includes(currentGuess[i]) !== true) {
            numberOfFalse += 1;
        }
    }

    // checking for colors in the wrong position

    for (let i = 0; i !== 4; i++) {
        let hasMatched = false
        for (let a = 0; a !== 4; a++) {
            if (currentGuess[i] == solution[a] && completelyCorrect[i] !== solution[a] && hasMatched == false) {
                numberOfInCombination += 1
                hasMatched = true
            }
        }
        hasMatched = false
    }
}
