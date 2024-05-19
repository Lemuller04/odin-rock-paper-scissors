let CHOICES = ["Rock", "Paper", "Scissor"]

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}