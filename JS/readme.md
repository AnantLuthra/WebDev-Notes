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
    - [Ternary operator](#ternary-operator)
  - [Input, Alert, typecasting into number](#input-alert-typecasting-into-number)
  - [Conditional expressions](#conditional-expressions)
  - [Loops](#loops)
    - [For Loop](#for-loop)
    - [For In Loop](#for-in-loop)
    - [For Of Loop](#for-of-loop)
    - [While loop](#while-loop)
    - [Do while loops](#do-while-loops)
  - [Functions](#functions)
  - [Strings](#strings)
  - [Template literals](#template-literals)
  - [Escape sequence characters](#escape-sequence-characters)
  - [String methods](#string-methods)
  - [Arrays](#arrays)
    - [Array methods](#array-methods)
  - [Using loops with arrays.](#using-loops-with-arrays)
  - [Map, Filter \& Reduce](#map-filter--reduce)
  - [Using javascript with html, css](#using-javascript-with-html-css)
  - [Console object methods.](#console-object-methods)
  - [Alert, prompt, confirm](#alert-prompt-confirm)
  - [Window object, BOM \& DOM](#window-object-bom--dom)
  - [Walking the DOM](#walking-the-dom)
    - [Children of an element.](#children-of-an-element)
    - [firstChild, lastChild \& childNodes](#firstchild-lastchild--childnodes)
    - [DOM collections](#dom-collections)
    - [Siblings and parents](#siblings-and-parents)
    - [Element Only Navigation](#element-only-navigation)
    - [Table Navigation](#table-navigation)
    - [Searching the DOM](#searching-the-dom)
    - [Matches, Closest \& Contains methods](#matches-closest--contains-methods)
  - [Events \& other DOM properties](#events--other-dom-properties)

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

### Ternary operator

- It is basically a shorthand if else statement which uses this - `?`
- syntax `condition? expression1: expression2`, if condition is true then `expression1` will run otherwise `expression2` will get executed.

***Eg -***
```js
let a = 18;
console.log("You can", age>18? "vote": "not vote")
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
- You can see a proper example of above things in this [FILE](./conditionals.js)

## Loops

### For Loop

- The syntax for `for loop` is same as it is in `C` language, which is this - 

```
for (assignment; condition; increment){
  code...
}
```

- So when program is executed first it will assign the variable as you gave in first statement of for loop which runs only 1 time in a loop.
- Secondly it will check the condition provided as second statment in the for loop, if condition is true then the code present in for loop will be executed.
- After execution the incremention of variable will be done.
- Then again the condition will be checked if true code executed else program will end.

***Eg -***
```js
for (let i = 0; i < 5; i++){
  console.log("Your current level is -", i);
}

// OUPUT
/*
Your current level is - 0
Your current level is - 1
Your current level is - 2
Your current level is - 3
Your current level is - 4
*/
```
- More example given in this [FILE](./for-loop.js)

### For In Loop

- It's syntax is little bit same as of for loop here is the actual syntax of for in loop.

```
for (let variable in object){
  code...
}
```

- These for in loops are generally used for interating over objects. But we can also use for in loops for in case of arrays.
- Example given in this [FILE](./forin-loop.js) in line number 1 - 10.

### For Of Loop

- These loops are for iterating over ***Iterable objects*** for eg - strings, arrays.

**Syntax of for in loop**

```js
for (let a of iterable){
  code...
}
```

***Eg -***

```js
for (let b of "dance"){
    console.log(b);
}

/* OUPUT
d
a
n
c
e
*/
```

- Also we can use arrays in place of this string.

### While loop

- It runs until condition given in while is true.
- First it checks the condition is true or not then run if it's true, and repeats this process until the given condition is false.

***Syntax -***
```js
while(condition){
  code...;
}
```

***Eg -*** given in this [FILE](./while-do.js) from line 7-15

### Do while loops

- Only difference it has from normal while loop is that this `do while loop` first run once then check the condition for running further.

***Syntax -***
```js
do {
  code...
}while (condition)
```

- More example in thie [FILE](./while-do.js) from line 18-35 in which i've made a slapping game, it's very funny please check it out once. 

## Functions

- Block of code which we can use many times as we want, it increases reusablity of code, and more managed code.
  
***Syntax -***

```js
function SayHi(name){
    console.log("hi", name, "bro..");
    return "How are you bro?";
}

console.log(SayHi("anant"));

/* OUTPUT
hi anant bro..
How are you bro? */
```

- Modern way of writing function in JS, in this we use `const` and little bit different syntax.
- It is known as Arrow function.

***# Recommended way***
```js
const SayHi = (name) => {
    console.log("hi", name, "bro..");
    return "How are you bro?";
}

console.log(SayHi("anant"));

/* OUTPUT
hi anant bro..
How are you bro? */
```

- More example of function in this [FILE](./functions.js)

## Strings

- strings can be made through double quotes and single as well.

***Ex -***
```js
let name = "anant";
let name1 = 'anant';
```

## Template literals

- It is like f strings in python, we are able to insert variables into a string by writing variable's name.
- Also we can put single and double quotes in template literals

***Example of making template literals***
```js
let name = "anant";
let greet = `Hey "${name}" why didn't you come yesterday?`;
console.log(greet);
// OUTPUT - Hey "anant" why didn't you come yesterday?
```

## Escape sequence characters

- Same as it works in python,
- Use `\` for putting single quote in a string which is made by single quotes.
- `\n` - for new line.
- `\t` - for tab.

## String methods

- `.length` - for length of string. **it is a property of strings**
- `.toUpperCase()` - Makes capital, **it is a method of strings**
- `.toLowerCase()` - Makes lowercase to whole string, **it is a method of strings**
- `.slice()` - same as string slicing in python, only difference is - we put `,` instead of `:` as we used in python.
- `.replace()` - for replacing one word with another in a string.
- `.concat()` - used for adding many strings into a string, example below.
- `.includes()` - return true if the word provided as argument is present in the string on which this method is put.
- 

```js
let name = "anant";
let further = " what are you doing their?";
console.log(name.concat(" is that you?", further));

// OUTPUT - anant is that you? what are you doing their?
```

- `.trim()` - removes extra whitespaces from left and right side of a string.
- String is immutable.

## Arrays

- It is like list in python. Storing value of any datatype in this.
- create it like this `let data = [1, 2, 3, 10, "hello", undefined, true, false]`
- access the elements like this - `data[1]`.
- Also accessing element with such a index where any element is not present it will not throw an error it will just return `undefined`.
- `.length` - For getting length of array.
- Arrays are mutable.

### Array methods

- `.toString()` - convert whole array into a string.
- `.join()` - join all the array elements using a separator.
- `.pop()` - It removes the last element an array. It updates the original array.
- `.push()` - adds a new element at the end of the array.
- `.shift()` - removes first element of array and return it.
- `.unshift()` - adds element to the beginning, and returns new length of array.
- `delete` - it is an operator it deletes element provided of a array and puts this `<1 empty item>` on the place of that element in that array. - Example -

```js
let num = [1,2,3];
delete num[0];
console.log(num);

// OUTPUT - [ <1 empty item>, 2, 3 ]
```

- `.concat()` - same works as we used it in strings to merge many strings into one, it returns a new array. Ex - `console.log(nums.concat(num1, num2, num3))`
- `.sort()` - It changes the original array, It by default sorts the array alphabatically. like in digits also, it will put numbers starting from 1 before and after that numbers starting from 2 and so on.., But if we want to make it proper sort function we can make a function and use it like this -

```js
let compare = (a, b) =>{
    return a - b
} 

let num = [1,2,3, 0.1, 22];

num.sort(compare)
console.log(num)
```

- `.reverse()` - it reverses, changes the original array.
- `.splilce()` - This method helps us to delete and add elements at index of our choice, arguments `(index, deleteNumber, values)`, also it returns the deleted elments.
- Explanation of arguments
- index - from what index you want insert your elements.
- deleteNumber - how many elements you want to delete from that index, and insert elements from that place, also even if deleted elemends are 0 or are less than number of elements you want to insert this `.splice()` will push other elements further and insert elements you provide.
- values - list all values you want to insert seperating with a comma.
***Example***
```js
let num = [1,2,5,6];
let deleted = num.splice(2, 0, 3, 4);
console.log(num, deleted);
// above i'm deleting no element and entering 3 and 4 at index 4.
// OUTPUT - [ 1, 2, 3, 4, 5, 6 ] []
// Above deleted is empty because i deleted no elements.
```
- `.slice()` - it is same as we did in string slicing case in js, also same as list slicing in `python` just sytax is different.

## Using loops with arrays.

- Looping through arrays.

```js
let a = [1, 2, 3, 4, 10];

for (let i = 0; i<a.length; i++){
    console.log(a[i]);
}
```

- Using ForEach loop on array - It calls a function, once for each array element. And we can do whatever we want to do with every element. It's arguments are as follows - 
```js
const a = ["anant", "shiv", "kush"];
a.forEach((value, index, array) =>{
  console.log(`On ${index}'th index ${value} is present.`);
})
/* OUTPUT 
On 0'th index anant is present.
On 1'th index shiv is present.
On 2'th index kush is present.  */
```

***Example*** - We are looping through each element and printing it's square..
```js
// ForEach loop on arrays.
a.forEach((element) => {
    console.log(element * element)
})
```

- Array.from - Used to create an array from any other object. It is like typecasting any other iterable datatype into list - as to say in python.. we could do this in python as - 
```py
a = "anant"
print(list(a))
# OUTPUT - ['a', 'n', 'a', 'n', 't']
```

But we can do this in javascript like this.. 
```js
let a = "anant";
console.log(Array.from(a));
// OUTPUT - [ 'a', 'n', 'a', 'n', 't' ]
```

- `For in` - This loop prints the keys of arrays or say index of elements.
- `For of` - this loop simply prints the elments of arrays.. 
- Example of above two are in this [FILE](./loopin-array.js) in line `20-29`.

## Map, Filter & Reduce

- `map()` - It works same as `.forEach()`, only difference is it returns new array which we make and return.
***Example -***
```js
let arr = [5, 6, 7];
let new_arr = arr.map((value, index, array) => {
  return value + (2*index);
})
console.log(new_arr);
/* OUTPUT 
[ 5, 8, 11 ] */
```

- `.filter()` - Use to filter elements from our array using a function - so those elements on which this function returns true come into the new created array. So this function also returns new array, doesn't modify original one. Example of this present in thie [FILE](./mp-ft-rd.js) in line `7-13`

- `.reduce()` - It takes a function as argument and it run this function on two consecutive elements of arrays each time and do same it with others and return the result. Example of this present in thie [FILE](./mp-ft-rd.js) in line `15-23`


## Using javascript with html, css

- We can include javascript in our html either by using script tag or by including seperate javascript file ...

- Advantages of using separate script file using src attribute of script tag.
1. Separation of concerns
2. Browser Caching - If a file is downloaded in a computer when we first opened a website -> then if we reload it won't be downloaded again.

## Console object methods.

- The console object has several methods, log being one of them. And more are listed below ->

- `assert()` - used to check a condition.
- `clear()` - to clear console.
- `log()` - to print
- `table()` - represents data of an object very nicely in a table. (very useful)
- `warn()` - give warning.
- `error()` - gives error.
- `info()` - to give some info. Works similar to `console.log()`.
- `time()` & `timeEnd()` - use to measure time taken of doing some task, put `time()` on starting of that code and `timeEnd()` on ending of the code. and put any same string - which we say tag inside that .. ***Example*** in this [FILE](./console-objs.js) in line `16-20`

## Alert, prompt, confirm

- `alert()` - simply used to give alert.
- `prompt()` - arguments `prompt(message, default_value)` .. in default value you put that value which you want to be shown by default, and this argument is optional.
- `confirm()` - it is like alert but it has `ok` and `cancel` buttons on it. return `true` if pressed `ok` and `false` on `cancel`.

## Window object, BOM & DOM

- Window consists of these three things .. 
1. DOM - (Document object model), It represents the page content of HTML, for eg- `document.body` - page body is represented as javascript object. eg no.2 - `document.body.background = "green"` - changing background color.
2. BOM - (Browser Object Model), it provides additional objects provided by the browser(host environment) - `alert/confirm/prompt` are also a part of the BOM.
3. Javascript Core 

- ***Everything comes under window object in javascript***
- Window object is global - So if we write `window.console.log("hi")` or only `console.log("hi")` these both will work identically.

## Walking the DOM

DOM tree referes to the HTML page where all the nodes are objects. There can be 3 main types of nodes in the DOM tree - 

1. Text nodes
2. element nodes
3. Comment nodes
  
- In HTML page, `<html>` is at the root and `<head>` and `<body>` are its children, etc. 
- A text node is always a leaf of the tree. It is because - if `<title>` this tag had text in it then we can extract text from it.. but we can't extract anything from text.. In text we can't save HTML tags.

- **Walking the DOM**

- We can get document head by this - `document.head`, similarly get body by - `document.body`
- `document.documentElement` - It gives whole HTML of page.. so if we use `document.documentElement.firstElementChild` then we will get head.

### Children of an element.

- This concept is same as our family relations, with our relatives... siblings.. parents... etc..
- `Child nodes` - Those elements that are direct children of a element.. for eg - `title` is direct children of `head`
- `Descendents nodes` - All elements of further kids.. like my son's - son.. 

### firstChild, lastChild & childNodes

- `element.firstChild` -> first child element - it can be text because of space between body tag and first tag which you think..
- `element.lastChild` -> last child element
- `element.childNodes` -> All child nodes.

- The thing which `element.childNodes` returns is a node list to make it an array we have to do `let arr = Array.from(document.body.childNodes)`.

### DOM collections

- The thing which `element.childNodes` return is also called DOM collections. Their properties are as follows.
- They are live, element added -> then this collection will be updated.
- They are iterable using for .. of loop.


### Siblings and parents

```
<div>
  <h1></h1>
  <p></p>
</div>
```

- in above html code.. - `p` is next and right sibling of `h1`
- and `h1` is left sibling of `p`.

- We can get next sibling of a element by following way. `element.nextSibling`.
- `element.parentNode` - For checking parent of a element.
- `element.parentElement` - It will return the parent only if it's parent is an element, otherwise it will return `null`.

### Element Only Navigation

If we try to get first child of a parent then we get text because of space present between tags.. so for getting first element child.. we use following thing..

- `element.firstElementChild` - First element child of an element in HTML
- `document.previousElementSibling`
- `document.nextElementSibling`
- `document.lastElementChild`
- `element.children` - it is their for usage in place of `element.childNodes` - for getting only all element childs.

### Table Navigation

- The table DOM element provides more properties which are as follows - 

- `table.rows` - collection of `tr` elements.
- `table.caption` - reference of caption.
- `table.tHead` - reference to `thead`
- `table.tFoot` - reference to `tfoot`
- `table.tbodies` - collection of tbody elements.
- `tbody.rows` - Collection of tr inside.
- `tr.cells` - collection of td and th
- `tr.SectionRowIndex` - Index of tr inside enclosing element.
- `tr.rowIndex` - Row number starting from 0.
  
- `tr.cellIndex` - no. of cells inside enclosing tr.

### Searching the DOM

- `document.getElementById()` - We can get element using it's id giving it as argument to this function.

```js
let heading = document.getElementById("heading1");
// Though this we are changing background.
heading.style.background = "grey";
```

- `document.querySelectorAll()` - Return all elements inside an element matching the given CSS selector or say class name. Argument given like this - `(".heading1")`
- `document.querySelector()` - We use this in case we have only one element having that class name in the DOM, so in return we get only one element through this function.
- `document.getElementsByTagName()` - Returns all elements of same tag, eg - `h1`, or `p`
- `document.getElementsByClassName()` - returns elements that have the given CSS class.
- `document.getElementsByName()` - Searches elements by the name of attribute.

### Matches, Closest & Contains methods

- `element.matches(class)` - To check if element matches the given CSS selector, or say given class. Returns true and false. below is example.

```js
para1 = document.getElementById("para1")

/* Checking if element whos id is para1 does 
belongs to test class or not.  */
console.log(para1.matches(".test"))    
```

- `element.closest(class)` - It is used to check the closest element who have the given css selector, present in ancestor elements, it also checks itself.
- `element.contains(elementB)` - returns true if elementB is inside element(a descendant of element) or when `element == elementB`.

## Events & other DOM properties

- `console.dir()` - It shows an element with its properties whereas `.log()` shows the element DOM tree.
  
- Below are used to read tag name of an element.
- `tagName` - only exists for element nodes.
- `nodeName` - defined for any node (text, comments etc.)

- `element.innerHTML` - It gives the html present inside the tag as text.
- `element.outerHTML` - It gives the html present inside the tag as text + the tag itself is present in the string.
- innerhtml is only valid for elment nodes. For other node types we can use nodeValue or data.
Example - `document.body.firstChild.nodeValue`.

- `element.textContent` - It prints only text inside a tag. All child tag's text will also be printed.

- **The Hidden Property** - if we put hidden property in a html tag, it will be hidden. And we can make it visible through javascript as follows - `element.hidden = false;` - this will work.

