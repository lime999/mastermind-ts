"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_solution_1 = require("./create-solution");
const pin_1 = require("./pin");
describe("solution", () => {
    test("has lenght 4", () => {
        expect((0, create_solution_1.createSolution)().length).toEqual(4);
    });
    test("consists of colors", () => {
        expect((0, create_solution_1.createSolution)().every(maybeColor => pin_1.pinColors.includes(maybeColor))).toEqual(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQWtEO0FBQ2xELCtCQUFpQztBQUNqQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUN0QixNQUFNLENBQUMsSUFBQSxnQ0FBYyxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtRQUM1QixNQUFNLENBQUMsSUFBQSxnQ0FBYyxHQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsZUFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9GLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==