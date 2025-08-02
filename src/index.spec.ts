import { createSolution } from "./create-solution"
import { pinColors } from "./pin"
import { resetGameState } from "./resetGameState"
import { compareGuessAndSolution } from "./compareGuessAndSolution"

let gameState = resetGameState()

describe("solution ", () => {
    test("has lenght 4", () => {
        expect(createSolution().length).toEqual(4);
    })

    test("consists of colors", () => {
        expect(createSolution().every(maybeColor => pinColors.includes(maybeColor))).toEqual(true);
    })
})
describe("feedback function gives correct feedback with ", () => {

    // first array is the guess, second one the solution

    test("duplicate colors in the solution and only 1 in guess", () => {
        expect(compareGuessAndSolution(["white", "yellow", "yellow", "yellow"], ["white", "white", "green", "blue"])).toEqual([1, 3, 0])
    })

    test("three of the same color in the solution and only once in the wrong place in guess", () => {
        expect(compareGuessAndSolution(["green", "yellow", "yellow", "white"], ["white", "white", "white", "blue"])).toEqual([0, 3, 1])
    })

    test("4 duplicates of one of the colors in the solution in the guess", () => {
        expect(compareGuessAndSolution(["green", "green", "green", "green"], ["green", "white", "blue", "black"])).toEqual([1, 0, 3])
    })

})
