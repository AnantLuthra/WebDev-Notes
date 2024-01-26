let prompt = require("prompt-sync")()
// Program to find total premium to be paid

let premium = prompt("Enter the premium for one year: ");
premium = Number.parseInt(premium);
let total_sum = 0;

for (let i = 0; i < 12; i++){
    total_sum += premium;
}

console.log("Total money you'll give as premium is -", total_sum);

for (let i = 0; i < 5; i++){
    console.log("Your current level is -", i);
}