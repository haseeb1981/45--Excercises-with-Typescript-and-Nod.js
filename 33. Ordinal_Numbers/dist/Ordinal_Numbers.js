"use strict";
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let oridinalEnding;
    if (num === 1) {
        oridinalEnding = "st";
    }
    else if (num === 2) {
        oridinalEnding = "nd";
    }
    else if (num === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log(`${num}${oridinalEnding}`);
}
