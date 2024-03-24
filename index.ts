#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number.
// 2) user input for guessing number.
// 3) compare user input number with computer generate number and then show results.

console.log("Welcome to number guessing game");

const randomNumber = Math.floor(Math.random() * 6 +1);

const answers = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6 =",
}
]);

if( answers.userGuessedNumber == randomNumber)
{
    console.log("Congratulations! You guessed a right number");
}
else{
    console.log("You guessed wrong number, Better luck next time.");
}