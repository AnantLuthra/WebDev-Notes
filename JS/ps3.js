let prompt = require("prompt-sync")()

// p1 - print marks object's data in nice way.
const marks = {
    carry: 98,
    rohan: 70,
    soham: 100
}

// Using plan for loop

for (let i = 0; i < Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i]+"'s marks is -", marks[Object.keys(marks)[i]])
}

console.log();

// q2 - print it with for in loop.
// Using for in loop
for (let i in marks){
    console.log(i+"'s marks is -" , marks[i]);
}


console.log();

// q3 - program will run until user enters correct number.

const correct_num = 5;

let reply = prompt("Enter value: ");

while (reply != correct_num){
    reply = prompt("Try again... ");
}
console.log("Correct answer :)")