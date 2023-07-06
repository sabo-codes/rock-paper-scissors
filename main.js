function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

playerSelection = prompt("Player Choice: ").toLowerCase();
computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
            
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win with ${playerSelection}! Rock beats scissors`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win with ${playerSelection}! Paper beats rock`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win with ${playerSelection}! Scissors beats paper`
    }  if (computerSelection === "rock" && playerSelection === "scissors") {
        return `You lose with ${playerSelection}! Rock beats scissors`
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return `You lose with ${playerSelection}! Paper beats rock`
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `You lose with ${playerSelection}! Scissors beats paper`
    } else {
        return "It's a draw"
    }
}
console.log(playRound(playerSelection, computerSelection))
