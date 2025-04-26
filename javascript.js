
/* ---------------STEP 1-----------------
   -------Create a computer that--------- 
   ---------can play the game------------ */

// CREATE a Function
function getComputerChoice() {

// ADD a variable that accepts 3 random numbers
let num = Math.floor(Math.random() * 3);
// ASSIGN string values to the numbers
if (num === 1) {
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

}

console.log(getComputerChoice());

