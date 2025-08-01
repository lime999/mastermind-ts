export function resetGameState() {
  return {
    numberOfCorrect: 0,
    numberOfFalse: 0,
    numberOfInCombination: 0,
    positionOfCompletelyCorrect: [] as Array<string>,
    numberOfTries: 0,
    solvedOrLost: false
  }
}