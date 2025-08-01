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
    test("duplicate colors in the solution and only 1 in guess", () => {
        expect(compareGuessAndSolution(["white", "yellow", "yellow", "yellow"], ["white", "white", "green", "blue"])).toEqual([1, 3, 0])
    })

})
