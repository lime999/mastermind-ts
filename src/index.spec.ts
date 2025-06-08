import { createSolution } from "./create-solution"
import { pinColors } from "./pin"
test("solution has lenght 4", () => {
    expect(createSolution().length).toEqual(4);
});

test("solution consists of colors", () => {
expect(createSolution().every(maybeColor => pinColors.includes(maybeColor))).toEqual(true);
});