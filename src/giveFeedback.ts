

export function giveFeedback() {
    if (numberOfCorrect < 4) {
        console.log("Your Guess had " + (numberOfCorrect < 1 ? "no" : numberOfCorrect) + " completely correct color(s), " + (numberOfFalse < 1 ? "no" : numberOfFalse) + " false color(s), and " + (numberOfInCombination < 1 ? "no" : numberOfInCombination) + " color(s) that were correct but in the wrong place")
        numberOfTries++
        loopRunning = true
    } else if (numberOfCorrect == 4) {
        console.log("Congratulations,\nyou have won the game!")
        solvedOrLost = true
    }
}
