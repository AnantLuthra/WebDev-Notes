console.log("here we start arrays in javascript..")

let marks = [1, 2, 3, 4, 5, false, "not present"]

// console.log(marks);

// for (let i = 0; i < marks.length+1; i++){
//     console.log(marks[i]);
// }

// console.log(marks[0]);
// marks[0] = 100;
// console.log(marks[0]);
// console.log(marks);

// console.log(marks.toString())
// console.log(marks.join(","))
// console.log(marks.push(12))
// console.log(marks)

// marks.unshift()

// console.log(marks)
// console.log(marks.push(10))
// console.log(marks)
// console.log(marks.unshift(11))
// console.log(marks)
// delete num[0];


// let compare = (a, b) =>{
//     return a - b;
// } 


// // console.log(num)

// // num.reverse()
// // console.log(num)

// let num = [1,2,3, 0.1, 22];

// num.sort(compare);
// num.splice(1, 0, 100, 101, 102);
// console.log(num);

let num = [1,2,5,6];
let deleted = num.splice(2, 0, 3, 4);
console.log(num, deleted);