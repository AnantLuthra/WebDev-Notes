console.log("here we start arrays in javascript..")

let marks = [1, 2, 3, 4, 5, false, "not present"]

console.log(marks);

// for (let i = 0; i < marks.length+1; i++){
//     console.log(marks[i]);
// }

console.log(marks[0]);
marks[0] = 100;
console.log(marks[0]);
console.log(marks);

console.log(marks.toString())
console.log(marks.join(","))