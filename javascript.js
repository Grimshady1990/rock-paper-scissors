
/* ---------------STEP 1-----------------
   -------Create a computer that--------- 
   ---------can play the game------------ */

// CREATE a Function
function getComputerChoice() {

// ADD a variable that accepts 3 random numbers
let num = Math.floor(Math.random() * 3);

// ASSIGN string values to the numbers
if (num === 1) {
    return "SCISSORS";
}
else if (num === 2) {
    return "PAPER";
} else {
    return "ROCK";
}

}

/* ----------STEP 2---------------
   -----Create input for----------
   -------a human user------------ */

// CREATE function 
function getHumanChoice() {

// CREATE a variable that accepts external input
let choice = prompt("ROCK, PAPER, or SCISSORS");

// CREATE a method that makes all characters uppercase
let result = choice.toUpperCase();

// RETURN the results
return result;
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
function playRound(humanChoice, computerChoice) {
    
// CREATE comparisons between choices to determine a winner
    if ((computerSelection === "SCISSORS" && humanSelection === "PAPER") || 
        (computerSelection === "PAPER" && humanSelection === "ROCK") || 
        (computerSelection === "ROCK" && humanSelection === "SCISSORS")) {
        
            // ADD score to winner
            computerScore++;

            // RETURN win or lose message
            return "You Lose!";

        // Repeat process for the other scenarios
    }
    else if ((humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
             (humanSelection === "PAPER" && computerSelection === "ROCK") ||
             (humanSelection === "ROCK" && computerSelection === "SCISSORS")) {
                
        humanScore++;    
        return "You Win!";
    }
    else if (humanSelection === computerSelection) {
                
        return "Its a draw!";
    }
    else {
        return "Error";
    }
}

// CREATE variables that store the players choice functions
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

/* -----------STEP 5----------- 
   -----Logic to play the------
   --------entire game--------- */

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
}

// CREATE reset function:
// This function resets the variables stored
// in the players selection so we can achieve 
// different outcomes each round.
function resetChoice() {
    delete humanSelection;
    humanSelection = getHumanChoice();
    delete computerSelection;
    computerSelection = getComputerChoice();
}

// CREATE function for final round which breaks the
// loop, and allows the game to end as desired
function finalRound() {
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
console.log(playGame());


