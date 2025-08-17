type gamestate = {
numberOfCorrect: number,
    numberOfFalse: number,
    numberOfInCombination: number,
    positionOfCompletelyCorrect: Array<boolean>,
    numberOfTries: number,
}


export function resetGameState(): gamestate {
  return {
    numberOfCorrect: 0,
    numberOfFalse: 0,
    numberOfInCombination: 0,
    positionOfCompletelyCorrect: [] as Array<boolean>,
    numberOfTries: 0,
  }
}