const plays = ["rock", "paper", "scissors"];
const humanScoreTextElement = document.querySelector("#human-score");
const computerScoreTextElement = document.querySelector("#computer-score");
const resultTextElement = document.querySelector("#result");
const buttons = document.querySelectorAll(".emoji");
const winnerScore = 5;

let [humanScore, computerScore] = [0, 0];
let state = "running";

buttons.forEach((button) => button.onclick = () => {
    let humanPlay = button.id;
    let computerPlay = plays[Math.floor(Math.random() * plays.length)];

    if (state === "restart") {
		[humanScore, computerScore] = [0, 0];
		humanScoreTextElement.textContent = `You: ${humanScore}`;
		computerScoreTextElement.textContent = `Computer: ${computerScore}`;
		[humanPlay, computerPlay] = ["rock", "rock"];
		state = "restarted";
    }

    console.log(`Human: ${humanPlay} - Computer: ${computerPlay}`);
    let roundWinner = roundResult(humanPlay, computerPlay);
    console.log(roundWinner);

    // Updates html texts according to winner
    if (roundWinner === "human") {
		humanScore++;
		resultTextElement.textContent = `You win! ${humanPlay} beats ${computerPlay}`;
		humanScoreTextElement.textContent = `You: ${humanScore}`;
    } else if (roundWinner === "computer") {
		computerScore++;
		resultTextElement.textContent = `You lost! ${computerPlay} beats ${humanPlay}`;
		computerScoreTextElement.textContent = `Computer: ${computerScore}`;
    } else {
		resultTextElement.textContent = `It's a tie! No one scores`
    }

    if (humanScore === winnerScore || computerScore === winnerScore) {
		state = "ended";
    }

    if (state === "ended") {
		if (humanScore === winnerScore) {
			resultTextElement.textContent = `Congratulation, you won!`
			humanScoreTextElement.textContent = `You where the first one to score 5 points.`;
		} else {
			resultTextElement.textContent = `You lost! Better luck next time.`
			humanScoreTextElement.textContent = `The computer where the first one to score 5 points.`;
		}
		computerScoreTextElement.textContent = `Click rock, paper or scissors to restart.`;
		state = "restart";
    }

	if (state === "restarted") {
		resultTextElement.textContent = `Result...`;
		state = "running";
	}
});

function roundResult(p1, p2) {
    if (p1 === p2) { // If it's a tie
		return "tied";
    }else if (p1 === "rock" && p2 === "scissors" || // Else if human won round
        p1 === "paper" && p2 === "rock"    ||
        p1 === "scissors" && p2 === "paper") {
		return "human";
    } else { // Else computer won round
		return "computer";
    }
}