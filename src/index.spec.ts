import { createSolution } from "./create-solution"
import { pinColors } from "./pin"
describe("solution", () => {
    test("has lenght 4", () => {
        expect(createSolution().length).toEqual(4);
    })

    test("consists of colors", () => {
        expect(createSolution().every(maybeColor => pinColors.includes(maybeColor))).toEqual(true);
    })
})