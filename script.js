const CHOICES = ["Rock", "Paper", "Scissor"];
let humanScore = 0;
let computerScore = 0;
const rounds = 5;

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

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {

    // Check if it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "Tie";
    } else if (humanChoice === "Rock") {
        if (computerChoice == "Paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
            return "Computer wins";
        } else {
            console.log("You win! Rock beats Scissor");
            humanScore++;
            return "Human wins";
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice == "Scissor") {
            console.log("You lose! Scissor beats Paper");
            computerScore++;
            return "Computer wins";
        } else {
            console.log("You win! Paper beats Rock");
            humanScore++;
            return "Human wins";
        }
    } else {
        if (computerChoice == "Rock") {
            console.log("You lose! Rock beats Scissor");
            computerScore++;
            return "Computer wins";
        } else {
            console.log("You win! Scissor beats Rock");
            humanScore++;
            return "Human wins";
        }
    }
}