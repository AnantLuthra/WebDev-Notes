# Javascript Notes

- [Javascript Notes](#javascript-notes)
  - [Ecmascript](#ecmascript)
  - [Ways of executing Javascript](#ways-of-executing-javascript)
  - [Variable in JS](#variable-in-js)
    - [Through `Var`](#through-var)
    - [Through `let`](#through-let)
    - [Through `const`](#through-const)
  - [Primitive \& None primitive datatypes](#primitive--none-primitive-datatypes)
    - [Primitives datatypes](#primitives-datatypes)
    - [Non-primitive datatypes](#non-primitive-datatypes)
      - [Objects](#objects)
  - [Expressions and operators](#expressions-and-operators)
    - [Arithmetic operators](#arithmetic-operators)
    - [Assignment Operators](#assignment-operators)
    - [Comparison operator](#comparison-operator)
    - [Logical operators](#logical-operators)
  - [Input, Alert, typecasting into number](#input-alert-typecasting-into-number)
  - [Conditional expressions](#conditional-expressions)

## Ecmascript
- It is a standard on which javascript is based.
- Javascript & ECMA script can almost always be used interchangably, Javascript is very liberal in what it allows.

## Ways of executing Javascript 

- Javascript can be executed in browser, in `Inspect` -> `console`.
- Another way is to use a runtime like `node.js` which we can install and use.
- Adding `<script>` tag in html document, and writing javascript code inside it.

## Variable in JS

- dynamically typed languages - in between program running we can change type of a variable. eg - JS
- Statically typed language - can't change in program runtime - eg - HTML

- ***Ways of declaring varibles in JS***
- *Through these three ways.*

### Through `Var`

- First thing is that this is old way of creating a variable.
- This is not preferred now to use because the variable created by using var can be changed in a block, also we can use many times var with same name of variable which is not good.

More explained in this JS [file](./variable-let-const.js).

### Through `let`

- Using let is very much preferred because it works like as variables are created in python.
- If we create a varibale using `let` - after that we can't make another variable with same name which we could do in case of `var`
- If we create a variable of same name in a block it will be different from the one which is present outside of the block.

### Through `const`

- As the name suggest we use it to make constant variables which will remain same throughout the code.
- Also we have to define the value at the time of declaring the variable name. for eg - 

```js
const a = 5;
```
***More clearly demostrated in [this file](./variable-let-const.js) about `var`,`let` and `const`***

## Primitive & None primitive datatypes

### Primitives datatypes
- Their are 7 types of primitive datatypes
***Remembering technique - `nn bb ss u`***
- N - Null
- N - Number
- B - Boolean
- B - Bigint
- S - Symbol
- S - String
- U - Undefined

```js
// Way to know the datatype of a variable.
let a = BigInt("55");
console.log(typeof a);

// OUPUT
// bigint
```
### Non-primitive datatypes

- Object, Array, Function these are also their.

#### Objects

- It is like dictionary in python, as simple as that.
- One thing which is good in JS is that if you try to get an value from a key which is not present in a Object so it will print - `undefined` whereas in python if you do such thing it will throw an amazing error 😂

Clear example given in this [FILE](./primitive-objects.js)

- We can access values of keys in object in these two ways.

```js
const data = {
  "work": 1,
  "non-work": 2
}

console.log(data['work'])
console.log(data.work)

// these above two will work in a same way.
```

- Also you can write key of string in object without putting colon also, this works in a same way, eg - 

```js
const data = {
  work: 1,
  "non-work": 2
}
```

- You can also change/add keys or values in object even if you made your object through `const`, because you're not putting different object the address is same, only new data is added. JS code that does the thing is in this [FILE](ps1.js) in line number `11-20`

## Expressions and operators

- An expression is a combination of values, variables, operators, and functions that results in a value. Expressions can be as simple as a single variable or as complex as a combination of multiple operators and operands.

Eg - 
```js
5;         // Numeric literal expression
"Hello";   // String literal expression
true;      // Boolean literal expression

var x = 10;
x + 5;     // Variable expression
```

### Arithmetic operators

- `+` = Adding
- `-` = Subtracting
- `*` = Multiply
- `**` = Exponentiation `a ^ b`
eg - 
```js
console.log(2 ** 3)
// OUTPUT - 8
```
- `/` - Divide
- `%` - Modulo - It gives out remainder after dividing
- `++` = It increments the value of number by 1, in this order matters, in case of `console.log(a++)` first it will print existing value of a then increment it, and from next time it will print the incremented value, and if you did this `console.log(++a)` then as you can see it will first increment it then print the incremented value.
- `--` - same as `++`, only difference is - it decrement value by 1.

### Assignment Operators

In below operators we're doing the operation and assigning back the result value to it.
- `+=` - Increment by the value you put after `+=`, same as it was in python.
- `-=` - same as plus, it just `-`
- `*=` - Multiply the number with original value of it and store into it.
- `/=` - divide and update value.
- `%=` - set the remainder value after dividing.
- `**=` - Exponentiate and update.

Example given in this [FILE](./exp-operators.js) in line number `10-21`

### Comparison operator

- `==` - value is same, even if datatype is different it will return true.
- `!=` - in this if value is same but datatype is different so it will return false for eg - `console.log(5 != "5")` it is because 5 and "5" are same in the way in which JS `==`  use to check so now we are saying 5 is not equal to "5" but that is not true.. so `5!="5"` will return false, because they are equal.

- `===` - same value and dataype
- `!==` - in this datatype will also be considered.

All are described below -

| **Operator** | **Description**          | **Example**                  |
|:------------:|:------------------------:|:-----------------------------:|
| `==`           | Equal to                 | `5 == 5` evaluates to `true`      |
| `===`          | Strict equal to          | `5 === "5"` evaluates to `false`  |
| `!= `          | Not equal to             | `5 != 4` evaluates to `true`      |
| `!==`          | Strict not equal to      | `5 !== "5"` evaluates to `true`   |
| `>`            | Greater than             | `6 > 4` evaluates to `true`       |
| `<`            | Less than                | `6 < 4` evaluates to `false`      |
| `>=`           | Greater than or equal to | `6 >= 6` evaluates to `true`      |
| `<=`           | Less than or equal to    | `6 <= 4` evaluates to `false`     |

Here are some examples of comparison operators in action:

```js
console.log(5 > 2); // true
console.log(5 == "5"); // true (type coercion is performed)
console.log(5 === "5"); // false (different types)
console.log(5 != "6"); // true
console.log(5 !== "5"); // true (different types)
```

### Logical operators 

- `&&` - and operator same as `and` in python
- `||` - OR operator same as `or` in python
- `!` - Logical not operator, same as python.

exmaple - 

```js
const a = 10;
const b = 20;
const c = 30;

console.log(a < b && b < c); // true
console.log(a < b && b > c); // false
```

## Input, Alert, typecasting into number

- `input` - We can take input in JS through `prompt()` function as `input()` in python.

- `Alert` - It shows an elert in browser window. Giving some info.

- Typecasting string into number - We typecaste string value got in `prompt()` through this - 

```js
let a = prompt("enter your age");
a = Number.parseInt(a);
```

## Conditional expressions

- `if` - First check
- `else if` - another must check with a check statement, if true code under this block is exucuted.
- `else` - if any condition above is not true then this block will execute.