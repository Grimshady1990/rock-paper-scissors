# Introduction

This document will act as the first step in the planning stage,  
providing a high-level view of the problems the project faces.

# The Project

This program will be designed to simulate a game of Rock, Paper, Scissors between a human user and a computer.  
It will also keep scores and complete the game after five rounds.

Below is a list of vital functions we will need for the project:

1. A function that can generate three random items.  
   (This will be how the computer makes its moves.)

2. Input for our users so they can make their moves.

3. Create global variables that keep score.

4. A function that can determine who won the round (Rock beats Scissors, etc.) and add their scores to the global variables.

5. A function that ends the game after five rounds.

Next, we will look a little deeper at each step to determine how we can better implement them.

## Step 1

The first step is to create a function that can randomly switch between three strings.  
To do this, we will need to use a random number generator,  
then assign each number to a string (e.g., 2 = "Scissors").  
Finally, we will store the result in a variable to be used by other functions.

## Step 2

Inputting the user data should be the easiest part of this project.  
All we need to do is create a variable that stores user input.  
(We will assume that the user always inputs the correct data, meaning we do not have to account for errors.)  
However, we do have to make sure the input is **not case-sensitive**, which can easily be achieved with string methods.

## Step 3

Create two global variables that will keep scores for both players.

## Step 4

To figure out who won the round, we must know all the different combinations that can be produced.  
For example:
- Paper beats Rock
- Scissors beats Paper

This can be achieved using `if/else` statements.  
For example:

if human = Scissors and computer = Paper print: "Scissors beats Paper!" add one point to human score 

else if human = Rock and computer = Paper print: "Paper beats Rock!" add one point to computer's score

etc...  
etc...  
etc...

This approach is probably not the quickest or most readable.

Another approach could be to use comparison operators (e.g., Scissors > Paper, Scissors === Scissors, etc.).  
For this to work, I would need to establish the comparisons and find a way to link those comparisons to the moves of the players.  
As of now, I don't know the answer to this riddle.

This approach would be more readable and save time coding but will take me longer to solve.

Finally, add one point to the global variable attached to the winner.

## Step 5

This step will turn the matches into a full game of five rounds.  
Scores will be counted, and the highest score after five rounds wins.

I would like to implement this using a counter that is triggered once it has been incremented five times,  
then declares the winner of the game and resets the game back to zero.

# Conclusion

This plan seems like a solid starting point.  
Sure, it doesn't completely cover the entire scope, but it is a great beginning.  
Moving forward, I will tackle each function individually using the system below:

- Write pseudocode for the function
- Write the code
- Test and debug the code

Once all the steps are complete, I will move on to the next function and repeat the process.