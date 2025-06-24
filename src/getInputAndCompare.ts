import * as readline from 'readline'
import { pinColors } from './pin';
import { createSolution } from './create-solution';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let numberOfCorrect: number = 0
let numberOfFalse: number = 0
let numberOfInCombination: number = 0
let solvedOrLost: boolean = false
let numberOfTries: number = 0
let completelyCorrect: Array<string> = []
let solution = createSolution()
export function getInputAndCompare() {

    rl.question('Guess the solution, e.g. "red,white,red,orange":\n', (answer) => {
        var currentGuess: Array<string> = answer.split(",")

        // stop if invalid answer

        if (currentGuess.every(color => pinColors.includes(color)) !== true) {
            console.log("Invalid Answer!")
            rl.close()
            return
        }
        console.log(currentGuess)

        // compare guess and solution


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

        // give feedback
    if (numberOfCorrect < 4) {
        console.log("Your Guess had " + (numberOfCorrect < 1 ? "no" : numberOfCorrect) + " completely correct color(s), " + (numberOfFalse < 1 ? "no" : numberOfFalse) + " false color(s), and " + (numberOfInCombination < 1 ? "no" : numberOfInCombination) + " color(s) that were correct but in the wrong place")
        numberOfTries++
    } else if (numberOfCorrect == 4) {
        console.log("Congratulations,\nyou have won the game!")
        solvedOrLost = true
    }

    })
}
