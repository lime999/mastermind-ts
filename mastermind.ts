import * as readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let currentGuess: Array<string>
let numberOfCorrect: number = 0
let numberOfFalse: number = 0
let numberOfInCombination: number = 0
let solvedOrLost: boolean = false
// create solution
let colors: Array<string> = ["blue", "white", "red", "black", "orange", "green", "yellow", "grey"]
let solution: Array<string> = []
for (let i = 0; i < 4; i++) {
  let randomNumber: number = Math.floor(Math.random() * 8)
  solution.push(colors[randomNumber])
}
console.log(solution)

// while not solved:

// get input(guess) from user
rl.question('Guess the solution, e.g. "blue,white,red,orange":\n', (answer) => {
  currentGuess = answer.split(",")
  console.log(currentGuess)
  // compare guess and solution
  for (let i = 0; i !== 4; i++) {
    if (currentGuess[i] == solution[i]) {
      numberOfCorrect += 1
    } for (let a = 0; a !== 4; a++) {
      if (currentGuess[i] !== solution[0 || 1 || 2 || 3]) {
        numberOfFalse += 0.25
      }
    }

  }
  for (let i = 0, a = 0, b = 0; a !== 16; i++, a++) {
    for (let a = 0; a !== 4; a++) {
      if (currentGuess[i] == solution[a]) {
        numberOfInCombination += 1
      }
    }

  }
  // give feedback
  console.log("Your Guess had " + (numberOfCorrect<1 ? "no" : numberOfCorrect) + " completely correct color(s), " + numberOfFalse + " false color(s), and " + numberOfInCombination + " color(s) that were correct but in the wrong place")
  rl.close();
})



// if solved stop 