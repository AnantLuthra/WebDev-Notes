
// Function for printing table of given number.

function PrintTable(a){
    
    console.log("Table of", a, "is..");
    for (let i = 1; i < 11; i++){
        console.log(a, "*", i, "=", a*i);
    }
}

PrintTable(5);

// Modern way of making a function, using Arrow function.

const printtable = (a) => {
    
    console.log("Table of", a, "is..");
    for (let i = 1; i < 11; i++){
        console.log(a, "*", i, "=", a*i);
    }
    return "Thankyou";
}

console.log();
console.log(printtable(13));

function SayHi(name){
    console.log("hi", name, "bro..");
    return "How are you bro";
}

console.log(SayHi("anant"));