

// Looping through arrays.

let a = [1, 2, 3, 4, 10];

for (let i = 0; i<a.length; i++){
    console.log(a[i]);
}

// ForEach loop on arrays.
a.forEach((element) => {
    console.log(element * element)
})

let name = "anant";
console.log(Array.from(name));


// For in. on array.

for (let i in a){
    console.log(a[i]);
}

// For of. on array.
for (let i of a){
    console.log(i);
}
