// create solution
let colors: Array<string> = ["blue", "white", "red", "white", "orange", "green", "yellow", "grey"]
let solution: Array<string> = []
for (let i=0; i<4; i++) {
let randomNumber: number =  Math.floor(Math.random() * 8)
    solution.push(colors[randomNumber])
}

// while not solved:

  // get input(guess) from user
  // compare guess and solution
  // give feedback 
  // if solved stop 