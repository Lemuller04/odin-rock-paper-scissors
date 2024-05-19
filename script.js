let CHOICES = ["Rock", "Paper", "Scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getHumanChoice() {
    let userInputIsValid = 0;
    let userInputFormatted = "";

    // Prompts the user for a input until he enters a valid one
    while (!userInputIsValid) {
        let userInput = prompt("Rock, paper or scissors?");

        userInputFormatted = formatUserInput(userInput);

        // Compares formatted user input to every valid choice
        for (let i = 0; i < CHOICES.length; i++) {

            // If formatted user input matches one valid choice, breaks the loop
            if (userInputFormatted === CHOICES[i]) {
                userInputIsValid=1;
            }
        }
    }

    return userInputFormatted;
}

// Returns the user input trimmed and capitalized
function formatUserInput(input) {
    return (input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase()).trim();
}