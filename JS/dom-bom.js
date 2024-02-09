
let age;
let permission = true;
let search;

while (permission) {
    age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Please enter a valid range")
        break
    }
    else if (age > 18 && age < 80) {
        alert("Yes you can drive. ")
    }
    else if (age >= 80) {
        search = prompt("What is your name? First we wanna check your identity.")
        location.href = `https://google.com/search?q=${search}`
        break
    }
    else {
        alert("No bro you can't drive")
    }
    if (age < 80) {
        permission = confirm("Do you want to play again?");
    }
}