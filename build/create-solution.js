"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSolution = createSolution;
const pin_1 = require("./pin");
function createSolution() {
    let solution = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 8);
        solution.push(pin_1.pinColors[randomNumber]);
    }
    console.log(solution);
    return solution;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNvbHV0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZS1zb2x1dGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHdDQVFDO0FBVkQsK0JBQWlDO0FBRWpDLFNBQWdCLGNBQWM7SUFDNUIsSUFBSSxRQUFRLEdBQWtCLEVBQUUsQ0FBQTtJQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDM0IsSUFBSSxZQUFZLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyQixPQUFPLFFBQVEsQ0FBQTtBQUNqQixDQUFDIn0=