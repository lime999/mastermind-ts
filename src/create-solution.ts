import { pinColors } from './pin'
export function createSolution(): Array<string> {
  let solution: Array<string> = []
  for (let i = 0; i < 4; i++) {
    let randomNumber: number = Math.floor(Math.random() * 8)
    solution.push(pinColors[randomNumber])
  }
  console.log(solution)
  return solution
}



