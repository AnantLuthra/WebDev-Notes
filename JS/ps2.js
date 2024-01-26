let prompt = require("prompt-sync")()


// demonstrating the use of switch case in js
/*
let name = prompt("Enter your name: ");
switch (name){
    case "anant":
        console.log("Welcome admin");
        break;
    case "shiv":
        console.log("Welcome co-admin");
        break;
    case "param":
        console.log("Welcome CEO");
        break;
    default:
        console.log("You're not a member of our team");
        break;
}
*/

// number is divisible by 2 or 3 or not?

let num = prompt("Enter the number: ");
num = Number.parseInt(num);

let case1 = num%2 == 0;
let case2 = num%3 == 0;

if (case1 && case2){
     console.log("It is divisible by 2 & 3 both");
}
else {
    console.log("No it is not divible by 2 & 3");
}