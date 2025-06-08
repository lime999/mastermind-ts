import * as readline from 'readline'
import { createSolution } from './create-solution';
import { pinColors } from './pin';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let currentGuess: Array<string>
let numberOfCorrect: number = 0
let numberOfFalse: number = 0
let numberOfInCombination: number = 0
let solvedOrLost: boolean = false
let numberOfTries: number = 0
let loopRunning = false;
let completelyCorrect: Array<string> = []
console.log("The allowed colors are: " + pinColors)
if (numberOfTries > 11) {
  solvedOrLost = true
}


let solution = createSolution()

// while not solved:
loopRunning = true
if (loopRunning == true && solvedOrLost == false) {
  loop()
  loopRunning = false
}
function loop() {
  loopRunning = false;

  // get input(guess) from user

  rl.question('Guess the solution, e.g. "red,white,red,orange":\n', (answer) => {
    currentGuess = answer.split(",")

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
        numberOfCorrect += 1
        completelyCorrect.push(currentGuess[i])
      }

      // checking for false colors

      else if (solution.includes(currentGuess[i]) !== true) {
        numberOfFalse += 1
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
    // if solved stop 
    if (numberOfCorrect < 4) {
      console.log("Your Guess had " + (numberOfCorrect < 1 ? "no" : numberOfCorrect) + " completely correct color(s), " + (numberOfFalse < 1 ? "no" : numberOfFalse) + " false color(s), and " + (numberOfInCombination < 1 ? "no" : numberOfInCombination) + " color(s) that were correct but in the wrong place")
      numberOfTries + 1
      loopRunning = true
    } else if (numberOfCorrect == 4) {
      console.log("Congratulations,\nyou have won the game!")
      solvedOrLost = true
      rl.close()
    }
  })


}






