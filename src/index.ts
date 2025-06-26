import * as readline from 'readline'
import { createSolution } from './create-solution';
import { pinColors } from './pin';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let numberOfCorrect: number = 0
let numberOfFalse: number = 0
let numberOfInCombination: number = 0
let solvedOrLost: boolean = false
let numberOfTries: number = 0
let positionOfCompletelyCorrect: Array<string> = []
let solution = createSolution()

console.log("The allowed colors are:")
for (let i = 0; i < pinColors.length; i++) {
  console.log("%c" + pinColors[i] + ",", "color: " + pinColors[i]);
}
if (numberOfTries > 11) {
  solvedOrLost = true
}

rl.question('Guess the solution, e.g. "red,white,red,orange"\n(duplicate colors are alowed):\n', (answer) => {
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
      numberOfCorrect++;
      positionOfCompletelyCorrect[i] = currentGuess[i];
    }



    // checking for false colors
    else if (solution.includes(currentGuess[i]) !== true) {
      numberOfFalse++;
    }
  }
  console.log(positionOfCompletelyCorrect)

  // checking for colors in the wrong position

  for (let i = 0; i !== 4; i++) {
    if (positionOfCompletelyCorrect[i] !== undefined) {
    let hasMatched = false
      for (let a = 0; a !== 4; a++) {
        if (currentGuess[i] == solution[a] && solution[a] !== positionOfCompletelyCorrect[i] && hasMatched == false) {
          numberOfInCombination++
          hasMatched = true
        }
      }
    hasMatched = false
    } 
  }

  // give feedback
  if (numberOfCorrect < 4) {
    console.log("Your Guess had " +
      (numberOfCorrect < 1 ? "no" : numberOfCorrect) + " completely correct " +
      (numberOfCorrect == 1 ? "color" : "colors") + ", " +
      (numberOfFalse < 1 ? "no" : numberOfFalse) + " false " +
      (numberOfFalse == 1 ? "color" : "colors") + ", and " +
      (numberOfInCombination < 1 ? "no" : numberOfInCombination) + " " +
      (numberOfInCombination == 1 ? "color" : "colors") + " that " + 
      (numberOfInCombination == 1 ? "was" : "were") + " correct but in the wrong place:"
    )
    numberOfTries++
    console.log("You have " + (11 - numberOfTries) + " tries left.")
  } else if (numberOfCorrect == 4) {
    console.log("Congratulations,\nyou have won the game!")
    solvedOrLost = true
  }

})











