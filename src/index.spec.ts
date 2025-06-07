import { createSolution } from "./index"

test("Initial test", () => {
    expect(createSolution().length).toEqual(4);
});