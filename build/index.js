"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let currentGuess;
let numberOfCorrect = 0;
let numberOfFalse = 0;
let numberOfInCombination = 0;
let solvedOrLost = false;
let numberOfTries = 0;
let loopRunning = false;
let colors = ["blue", "white", "red", "black", "orange", "green", "yellow", "grey"];
console.log("The allowed colors are: " + colors);
if (numberOfTries > 11) {
    solvedOrLost = true;
}
// create solution
let solution = [];
let completelyCorrect = [];
for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 8);
    solution.push(colors[randomNumber]);
}
console.log(solution);
// while not solved:
loopRunning = true;
if (loopRunning == true && solvedOrLost == false) {
    loop();
    loopRunning = false;
}
function loop() {
    loopRunning = false;
    // get input(guess) from user
    rl.question('Guess the solution, e.g. "red,white,red,orange":\n', (answer) => {
        currentGuess = answer.split(",");
        // stop if invalid answer
        if (currentGuess.every(color => colors.includes(color)) !== true) {
            console.log("Invalid Answer!");
            rl.close();
            return;
        }
        console.log(currentGuess);
        // compare guess and solution
        for (let i = 0; i !== 4; i++) {
            // checking for completely correct colors
            if (currentGuess[i] == solution[i]) {
                numberOfCorrect += 1;
                completelyCorrect.push(currentGuess[i]);
            }
            // checking for false colors
            else if (solution.includes(currentGuess[i]) !== true) {
                numberOfFalse += 1;
            }
        }
        // checking for colors in the wrong position
        for (let i = 0; i !== 4; i++) {
            let hasMatched = false;
            for (let a = 0; a !== 4; a++) {
                if (currentGuess[i] == solution[a] && completelyCorrect[i] !== solution[a] && hasMatched == false) {
                    numberOfInCombination += 1;
                    hasMatched = true;
                }
            }
            hasMatched = false;
        }
        // give feedback
        // if solved stop 
        if (numberOfCorrect < 4) {
            console.log("Your Guess had " + (numberOfCorrect < 1 ? "no" : numberOfCorrect) + " completely correct color(s), " + (numberOfFalse < 1 ? "no" : numberOfFalse) + " false color(s), and " + (numberOfInCombination < 1 ? "no" : numberOfInCombination) + " color(s) that were correct but in the wrong place");
            numberOfTries + 1;
            loopRunning = true;
        }
        else if (numberOfCorrect == 4) {
            console.log("Congratulations,\nyou have won the game!");
            solvedOrLost = true;
            rl.close();
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVybWluZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXN0ZXJtaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW9DO0FBQ3BDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtDQUN2QixDQUFDLENBQUM7QUFDSCxJQUFJLFlBQTJCLENBQUE7QUFDL0IsSUFBSSxlQUFlLEdBQVcsQ0FBQyxDQUFBO0FBQy9CLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQTtBQUM3QixJQUFJLHFCQUFxQixHQUFXLENBQUMsQ0FBQTtBQUNyQyxJQUFJLFlBQVksR0FBWSxLQUFLLENBQUE7QUFDakMsSUFBSSxhQUFhLEdBQVcsQ0FBQyxDQUFBO0FBQzdCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLE1BQU0sR0FBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUNoRCxJQUFJLGFBQWEsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFBO0FBQ3JCLENBQUM7QUFHRCxrQkFBa0I7QUFFbEIsSUFBSSxRQUFRLEdBQWtCLEVBQUUsQ0FBQTtBQUNoQyxJQUFJLGlCQUFpQixHQUFrQixFQUFFLENBQUE7QUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzNCLElBQUksWUFBWSxHQUFXLElB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