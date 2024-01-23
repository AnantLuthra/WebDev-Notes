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

