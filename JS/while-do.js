let prompt = require("prompt-sync")()

// While loops

// print numbers from 1 to n

/*
let n = prompt("Enter number: ");
n = Number.parseInt(n);


let i = 1;
while(i <= n){
    console.log(i);
    i++;
}
*/

// do while loop

// slapping game

let age = prompt("What's your age: ");
age = Number.parseInt(age)
if (age > 18){
    age = age - 18;
}
else{
    age = 0;
}

do {
    console.log("Slapped you once 👋")
    age--;
}while (age >= 0)