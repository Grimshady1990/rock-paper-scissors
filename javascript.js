
/* ---------------STEP 1-----------------
   -------Create a computer that--------- 
   ---------can play the game------------ */

// CREATE a Function
function getComputerChoice() {

// ADD a variable that accepts 3 random numbers
let num = Math.floor(Math.random() * 3);
// ASSIGN string values to the numbers
/* if (num === 1) {

    return "Scissors"
}
if (num === 2) {
    return "Paper"
}
if (num === 0) {
    return "Rock"
}

// RETURN the results
    return num

} */
/* The code below achieves the same results
   as the one commented out above but is more 
   readable  */
if (num === 1) {
    return "SCISSORS"
}
else if (num === 2) {
    return "PAPER"
} else {
    return "ROCK"
}

return num;

}

// PRINT results
console.log(getComputerChoice());

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

// PRINT results
console.log(getHumanChoice());

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
    if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {

        // RETURN win or lose message
        console.log("You Lose! Rock beats Scissors");

        // ADD score to winner
        computerScore++;
    }
}

// CREATE variables that store the players choice functions
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// CALL function
playRound(humanSelection, computerSelection);


