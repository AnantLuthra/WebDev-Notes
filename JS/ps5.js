const prompt = require("prompt-sync")({sigint:true})

// get input and add them to array

const inp = () => {
    let values = [];
    let value;
    do{
        value = prompt("enter value: ");
        console.log(value)
        values.push(Number.parseInt(prompt(value)));
    } while(value != 0);

    console.log(`Final output is - ${values}`);
}

let numbers = [1, 2, 3, 4, 5, 6];
// inp()

const p3 = (numbers) => {
    
    return numbers.map((element) =>{
        return element ** 2;
    })
}

// p4
const p4 = (numbers) => {
    return numbers.reduce((el1, el2) =>{
        return el1 * el2;
    })
}

console.log(p4(numbers))
