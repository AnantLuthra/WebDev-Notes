const prompt = require("prompt-sync")()


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


const main = () => {
    let number = getRandomInt(1, 100);
    let guess;
    let chances = 0;
    console.log("Welcome to guess the number game. Guess between 1 - 100\nThe more faster you guess the number the more points you get.. \n")

    while (true){
        guess = prompt("Guess: ");
        guess = Number.parseInt(guess);
        console.log(typeof guess, guess)
        if (guess != NaN){
            chances++;

            if (guess == number){
                console.log(`\nCorrect !!\nCongratulation you won with ${100-chances} points`);
                break;
            }
            else if(guess > number){
                console.log(`The number is smaller than ${guess}\t\tChances taken - ${chances}\n`);
            }
            else{
                console.log(`The number is bigger than ${guess}\t\tChances taken - ${chances}\n`);
            }
        }
        else {
            console.log("Enter a number.... ")
        }
    }
}

main()