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
const create_solution_1 = require("./create-solution");
const pin_1 = require("./pin");
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
let completelyCorrect = [];
console.log("The allowed colors are: " + pin_1.pinColors);
if (numberOfTries > 11) {
    solvedOrLost = true;
}
let solution = (0, create_solution_1.createSolution)();
// while not solved:
// get input(guess) from user
rl.question('Guess the solution, e.g. "red,white,red,orange":\n', (answer) => {
    currentGuess = answer.split(",");
    // stop if invalid answer
    if (currentGuess.every(color => pin_1.pinColors.includes(color)) !== true) {
        console.log("Invalid Answer!");
        rl.close();
        return;
    }
    console.log(currentGuess);
    // compare guess and solution
    checkSolution();
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
        numberOfTries++;
        loopRunning = true;
    }
    else if (numberOfCorrect == 4) {
        console.log("Congratulations,\nyou have won the game!");
        solvedOrLost = true;
        rl.close();
    }
});
function checkSolution() {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBb0M7QUFDcEMsdURBQW1EO0FBQ25ELCtCQUFrQztBQUNsQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ2xDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztJQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Q0FDdkIsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxZQUEyQixDQUFBO0FBQy9CLElBQUksZUFBZSxHQUFXLENBQUMsQ0FBQTtBQUMvQixJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUE7QUFDN0IsSUFBSSxxQkFBcUIsR0FBVyxDQUFDLENBQUE7QUFDckMsSUFBSSxZQUFZLEdBQVksS0FBSyxDQUFBO0FBQ2pDLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQTtBQUM3QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxpQkFBaUIsR0FBa0IsRUFBRSxDQUFBO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsZUFBUyxDQUFDLENBQUE7QUFDbkQsSUFBSSxhQUFhLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQTtBQUNyQixDQUFDO0FBRUQsSUFBSSxRQUFRLEdBQUcsSUFBQSxnQ0FBYyxHQUFFLENBQUE7QUFFL0Isb0JBQW9CO0FBRXBCLDZCQUE2QjtBQUU3QixFQUFFLENBQUMsUUFBUSxDQUFDLG9EQUFvRCxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDM0UsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFaEMseUJBQXlCO0lBRXpCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFD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