import { checkSolution } from './checkSolution';
import * as readline from 'readline'
import { pinColors } from './pin';
import { giveFeedback } from './giveFeedback';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

        checkSolution();


        giveFeedback()
    })
}
