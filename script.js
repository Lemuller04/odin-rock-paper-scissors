const CHOICES = ["Rock", "Paper", "Scissor"];
let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
let scores = document.querySelector(".score-container");
let computerChoice;
let winnerText = document.createElement("p");
let scoresText = document.createElement("p");

buttons.forEach((button) => button.onclick = () => {
    playRound(button.textContent);
});

function playRound(humanChoice) {
    computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    
    console.log(`H: ${humanChoice}\nC: ${computerChoice}`);

    if (humanChoice === computerChoice) { // CHECK IF IT'S A TIE
        winnerText.textContent = "It's a tie!";
    } else if ((humanChoice == "Rock" && computerChoice == "Scissor") // CHECK IF HUMAN WINS
        || (humanChoice == "Scissor" && computerChoice == "Paper")
        || (humanChoice == "Paper" && computerChoice == "Rock")) {
            winnerText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
    } else {
        winnerText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`; // COMPUTER WINS
        computerScore++;
    }

    scoresText.textContent = `Your score: ${humanScore} --- computer score: ${computerScore}`;

    scores.appendChild(winnerText);
    scores.appendChild(scoresText);

    if (humanScore == 5 || computerScore == 5) {
        scoresText.textContent = "";
        winnerText.textContent = `You ${((humanScore > computerScore ? "win" : "lose"))}`;
        humanScore = 0;
        computerScore = 0;
    }
}