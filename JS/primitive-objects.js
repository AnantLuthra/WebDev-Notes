// nn ss bb u

/* 
n - null
n - number
s - symbol
s - string
b - boolean
b - bigint
u - undefined
*/

let a = null;
let b = 5;
let c = true;
let d = BigInt("50") + BigInt("5");
let e = Symbol("Hey bruv");
let f = "Shivang";
let g = undefined;

// console.log(a,b,c,d,e,f,g)
// console.log(typeof d)

// OBJECTS

const students = {
    "anant": 1, 
    "shivam": 2,
    "keyman": 3,
    "someone": undefined
}

console.log(students[1]) // No error just undefined as output.
console.log(students["anant"]) // OUTPUT - 1