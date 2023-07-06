//randomly selects rock, paper, scissor for computer
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

//capitalizes first letter and lowercase rest of letters (to be used for playerSelection)
function capitalizeFirst(str) {
    const capitalize = str[0].toUpperCase() + str.slice(1);
    return capitalize;
}

//user prompt for rock, paper, scissors choice while choices are spelled correctly, and then compares against computer's choice to find winner
do {
    playerSelection = prompt("Player Choice: ").toLowerCase();
} while (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper")
document.querySelector(".player").textContent += playerSelection

computerSelection = getComputerChoice();
document.querySelector(".computer").textContent += computerSelection

function shoot(playerSelection, computerSelection) {
            
    if (playerSelection === computerSelection) {
        return "It's a draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `Player wins! ${capitalizeFirst(playerSelection)} beats ${computerSelection}`;
    } else {
        return `Computer wins! ${capitalizeFirst(computerSelection)} beats ${playerSelection}`;
    }
}
console.log(shoot(playerSelection, computerSelection));
document.querySelector(".result").textContent += shoot(playerSelection, computerSelection)


