
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
    return "SCISSORS";
}
else if (num === 2) {
    return "PAPER";
} else {
    return "ROCK";
}


}

// PRINT results
//console.log(getComputerChoice());

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
//return result;
return result;

}

// PRINT results
//console.log(getHumanChoice());

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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



// TEST if values are being caught
//console.log("computerSelection: " + computerSelection);
//console.log("humanSelection: " + humanSelection);

// CALL function
//playRound(humanSelection, computerSelection);

// TEST if score is being updated
//console.log("Computer's score: " + computerScore);
//console.log("Human Score: " + humanScore);

/* -----------STEP 5----------- 
   -----Logic to play the------
   --------entire game--------- */

// CREATE a function
function playGame() {

// CREATE a for loop FOR integer greater than 5 end game
// Increment a counter ever time playRound is called
    for (let i = 1; i <= 5; i++) {
// LOOP entire game using the functions
    getHumanChoice()
    getComputerChoice()
    playRound(humanSelection, computerSelection);
    console.log("computerSelection: " + computerSelection);
    console.log("humanSelection: " + humanSelection);
    console.log("Computer's score: " + computerScore);
    console.log("Human Score: " + humanScore);
    console.log("Round: " + i);
    }
}
playGame();



