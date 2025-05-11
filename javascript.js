
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    
    playRound("SCISSORS", getComputerChoice);
    
    
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    //alert("paper test");
    playRound("PAPER", getComputerChoice);
});

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice);
});

/* ---------------STEP 1-----------------
   -------Create a computer that--------- 
   ---------can play the game------------ */

// CREATE a Function
function getComputerChoice() {

// ADD a variable that accepts 3 random numbers
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

// ASSIGN string values to the numbers


}

/* ----------STEP 2---------------
   -----Create input for----------
   -------a human user------------ */

// CREATE function 
function getHumanChoice(choice) {
    console.log(`Human returns ${choice}`)
    return choice;
}

/* ------------STEP 3-------------
   -----Add global variables------
   -------for both players-------- */

// CREATE two variables that initiate at zero
let humanScore = 0;
let computerScore = 0;

/* ------------STEP 4-------------
   ------Add logic to play--------
   -------a single round---------- */

// CREATE a function with 2 parameters
//let humanSelection = getHumanChoice;


function playRound(choice, computerChoice) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice(choice);
// CREATE comparisons between choices to determine a winner
    if ((computerSelection === "SCISSORS" && humanSelection === "PAPER") || 
        (computerSelection === "PAPER" && humanSelection === "ROCK") || 
        (computerSelection === "ROCK" && humanSelection === "SCISSORS")) {
        
            // ADD score to winner
            computerScore++;
            

            // RETURN win or lose message
            console.log("Computer Wins!")
            return "You Lose!";

        // Repeat process for the other scenarios
    }
    else if ((humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
             (humanSelection === "PAPER" && computerSelection === "ROCK") ||
             (humanSelection === "ROCK" && computerSelection === "SCISSORS")) {
                
        humanScore++; 
        
              
        console.log("Human Wins!");
        return "You Win!";
    }
    else if ((humanSelection === "SCISSORS" && computerSelection === "SCISSORS") ||
             (humanSelection === "ROCK" && computerSelection === "ROCK") ||
             (humanSelection === "PAPER" && computerSelection === "PAPER")) {
        console.log("It's a draw!");        
        return "Its a draw!";
    }
    else {
        console.log("Error");
    }
}

// CREATE variables that store the players choice functions


/* -----------STEP 5----------- 
   -----Logic to play the------
   --------entire game--------- 

// CREATE a function
function playGame() {
    
// CREATE a for loop:
// This loop will end after the forth round
// so the finalRound function can act as the fifth.
    for (let i = 1; i <= 4; i++) {
    
// LOOP entire round.
    humanSelection;
    computerSelection;
    console.log("Round: " + i);
    console.log("computerSelection: " + computerSelection);
    console.log("humanSelection: " + humanSelection);
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer's score: " + computerScore);
    console.log("Human Score: " + humanScore);
    resetChoice();
    }

    // EXIT loop and execute the final round.
    // This removes bugs made by the loop.
    finalRound();

    // IF/ELSE statements to close the game
    if (humanScore > computerScore) {
        return "You Won The Game!";
    }
    else if (humanScore < computerScore) {
        return "You Lost The Game!";
    } 
    else if (humanScore === computerScore) {
        return "It's a Draw Play Again!";
    } else {
        return "ERROR";
    }
} */

// CREATE reset function:
// This function resets the variables stored
// in the players selection so we can achieve 
// different outcomes each round.
//function resetChoice() {
    //delete computerSelection;
    //computerSelection = getComputerChoice();
//}

// CREATE function for final round which breaks the
// loop, and allows the game to end as desired
/* function finalRound() {
    let lastRound = 5;
    humanSelection;
    computerSelection;
    console.log("Round: " + lastRound);
    console.log("computerSelection: " + computerSelection);
    console.log("humanSelection: " + humanSelection);
    console.log(playRound(humanSelection, computerSelection));
    console.log("Computer's score: " + computerScore);
    console.log("Human Score: " + humanScore);        
}

// CALL function to start the game
console.log(playGame());*/


