let position = "head";

console.log(position.toUpperCase());
console.log(position.toLowerCase());
console.log(position.length);


console.log(position.slice(2, 5))


let name = "anant";
let further = " what are you doing their?";
console.log(name.concat(" is that you?", further));


let friend = "param";

let new1 = "";

for (let i = 0; i < friend.length; i++){
    new1 = new1.concat(friend[i]);
}

console.log(new1);

// OUTPUT - param