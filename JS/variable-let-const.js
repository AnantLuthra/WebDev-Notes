
// Var //

var a = 5;
var a = 5;

{
    var a = 6;
}

console.log(a)
// using var for creating variable of same name doesn't give an error which is the problem.

// Let

let b = 5;
// let b = 5;

{
    let b = 6;
}

console.log(b)
// but in case of let we get an error if we use let for two times for varible of same name.
// OUPUT
// SyntaxError: Identifier 'b' has already been declared
// also new varibale is created inside a block.


// Const

const c = 7;

console.log(c)

// Const is as simple as that.