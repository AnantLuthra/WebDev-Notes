

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
