console.log("Welcom to insurance plan consultant")
console.log("Enter 1 for yes and 2 for no in yes no questions.")

const plans = {
    married: "Sanchay Plus",
    kids: "Sanchay Plus Par Advantage",
    senior: "Pension Plan",
    young: "Click 2 Achieve",
    long_term: "Sanchay Plus Par Advantage"
}

let married;
let age = prompt("Enter your age: ");
age = Number.parseInt(age);

if (age<18) {
    console.log("You can't take you insurance policy on your own you've to ask your parents to do so..")
}

else if (age>=18){
    if (age >= 24 && age < 40){
        married = prompt("Are you married? ");
        if (married == 1){
            if (prompt("Do you have kids") == 1){
                console.log("Then you can take following insurance plans: ", plans.married, plans.kids, plans.young);
            }
            else{
                console.log("You can take the following insurance plans: ", plans.married, plans.young)
            }
        }
        else{
            console.log("Then the best plans for you to take are: ", plans.young, plans.long_term)
        }
    }
    else if(age >= 40 && age < 50){
        console.log("Then best plans for you to take are: ", plans.married, plans.young, plans.kids)
    }
    else{
        console.log("Then the only plan you should take is this: ", plans.senior)
    }
}