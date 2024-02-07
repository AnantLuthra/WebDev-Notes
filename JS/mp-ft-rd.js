let arr = [5, 6, 7];
let new_arr = arr.map((value, index, array) => {
  return value + (2*index);
})
console.log(new_arr);

// Filter

let new1 = [1, 2, 3, 4, 5, 10, 11, 15, 100];

console.log(new1.filter((i) => {
    return i>5;
}));

// reduce 

let hehe1 = [5, 5, 5];

const do_thing = (a, b) => {
    return a * b
}

console.log(`Cube of ${hehe1[0]} is ${hehe1.reduce(do_thing)}`);