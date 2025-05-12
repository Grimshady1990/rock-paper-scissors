

let humanScore = 0;
let computerScore = 0;

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice);   
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice);
});

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice);
});

function getComputerChoice() {

    let num = Math.floor(Math.random() * 3);
    if (num === 1) {
        console.log("Computer returns SCISSORS");
        return "SCISSORS";
    }
    else if (num === 2) {
        console.log("Computer returns ROCK");
        return "ROCK";
    }
    else if (num === 0) {
        console.log("Computer returns PAPER");
        return "PAPER";
    }
    else {
        console.log("Error");
    }

}
 
function getHumanChoice(choice) {
    console.log(`Human returns ${choice}`)
    return choice;
}

function playRound(choice, computerChoice) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice(choice);

    if ((computerSelection === "SCISSORS" && humanSelection === "PAPER") || 
        (computerSelection === "PAPER" && humanSelection === "ROCK") || 
        (computerSelection === "ROCK" && humanSelection === "SCISSORS")) {

        roundResult.textContent = `Human: ${humanSelection} Computer: ${computerSelection}`;
        roundWinner.textContent = "Computer wins the round!";
        computerScore++;
        computerDetails.textContent = `Computer Score ${computerScore}`;
        endGame();

    }
    else if ((humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
             (humanSelection === "PAPER" && computerSelection === "ROCK") ||
             (humanSelection === "ROCK" && computerSelection === "SCISSORS")) {
                
        roundResult.textContent = `Human: ${humanSelection} Computer: ${computerSelection}`;
        roundWinner.textContent = "Human wins the round!";      
        humanScore++;
        humanDetails.textContent = `Human Score ${humanScore}`;
        endGame();
    }
    else if ((humanSelection === "SCISSORS" && computerSelection === "SCISSORS") ||
             (humanSelection === "ROCK" && computerSelection === "ROCK") ||
             (humanSelection === "PAPER" && computerSelection === "PAPER")) {

        roundResult.textContent = `Human: ${humanSelection} Computer: ${computerSelection}`;
        roundWinner.textContent = "It's a draw!";
        endGame();
    }
    else {
        console.log("Error");
    }
}

//ScoreCard Elements
const scoreCard = document.createElement("div");
document.body.appendChild(scoreCard);

const scoreCardTitle = document.createElement("h1");
scoreCardTitle.textContent = "ScoreCard";
scoreCard.appendChild(scoreCardTitle);

const scoreList = document.createElement("ul")
scoreCard.appendChild(scoreList);

const humanItem = document.createElement("li");
const computerItem = document.createElement("li");
scoreList.appendChild(humanItem);
scoreList.appendChild(computerItem);

const humanDetails = document.createElement("span");
humanDetails.textContent = `Human Score: ${humanScore}`;

const computerDetails = document.createElement("span");
computerDetails.textContent = `Computer Score ${computerScore}`

const roundResult = document.createElement("p");
scoreCard.appendChild(roundResult);

const roundWinner = document.createElement("h3");
scoreCard.appendChild(roundWinner)

const winner = document.createElement("h2");
scoreCard.appendChild(winner);




humanItem.appendChild(humanDetails);
computerItem.appendChild(computerDetails);

function endGame(){
    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        winner.textContent = "Human Wins The Game!"
        computerDetails.textContent = `Computer Score ${computerScore}`;
        humanDetails.textContent = `Human Score ${humanScore}`;
    }
    else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        winner.textContent = "Computer Wins The Game!"
        computerDetails.textContent = `Computer Score ${computerScore}`;
        humanDetails.textContent = `Human Score ${humanScore}`;
    }
    else {
        winner.textContent = "";
    }
}

