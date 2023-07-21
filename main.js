const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerChoice = document.querySelector(".player");
const computerChoice = document.querySelector(".computer");
const buttonsPressed = document.querySelectorAll('.rock, .paper, .scissors');
const anotherGame = document.querySelector('.play-again');
const result = document.querySelector(".result");
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.c-score')

// rock.addEventListener('click', playRound);
// paper.addEventListener('click', playRound);
// scissors.addEventListener('click', playRound);


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
// do {
//     playerSelection = prompt("Player Choice: ").toLowerCase();
// } while (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper")
// document.querySelector(".player").textContent += playerSelection

function playRound(playerSelection, computerSelection) {
            
    if (playerSelection === computerSelection) {
        result.textContent += "It's a draw.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent += `Player wins! ${capitalizeFirst(playerSelection)} beats ${computerSelection}.`;
        playerScore += 1;
        pScore.textContent = parseInt(playerScore);
    } else {
        result.textContent += `Computer wins! ${capitalizeFirst(computerSelection)} beats ${playerSelection}.`;
        computerScore += 1;
        cScore.textContent = computerScore;
    }

    if (playerScore === 5) {
        pScore.textContent = "Player wins!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computerScore === 5) {
        cScore.textContent = "Computer wins!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

buttonsPressed.forEach(button => {
    button.addEventListener('click', () => {
        playerChoice.textContent = "Player Selection: ";
        computerChoice.textContent = "Computer Selection: ";

        result.textContent = "Result: ";

        playerSelection = button.textContent.toLowerCase();
        playerChoice.textContent += playerSelection;

        computerSelection = getComputerChoice();
        computerChoice.textContent += computerSelection

        playRound(playerSelection, computerSelection)
    });
    
});

function playAgain() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    playerScore = 0;
    pScore.textContent = "";
    computerScore = 0;
    cScore.textContent = "";

    result.textContent = "";
}

anotherGame.addEventListener('click', playAgain)

// console.log(playRound(playerSelection, computerSelection));
// document.querySelector(".result").textContent += shoot(playerSelection, computerSelection)


