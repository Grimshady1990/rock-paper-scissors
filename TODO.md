# Introduction

This document will act as the first step in the planning stage. 
A high level view of the problems the project faces.

# The Project

This program will be designed to simulate a game of rock, paper, scissors between a human user and a computer.
It will also keep scores, and complete the game after 5 rounds.

Below is a list of vital functions we will need for the project

1. A function that can generate 3 random items. 
    (This will be how the computer makes it's moves)

2. Input for our users so they can make their moves

3. Create global variables that keep score

4. A function that can determine who won the round (Rock beats Scissors etc...), And add there scores to global variables

5. A function that that ends the game after 5 rounds.

Next we will look a little deeper at each step to determine how we can better implement them.

## Step 1

First step is to create a function that can randomly switch between 3 strings.
To do this we will need to use a random number generator, 
then assign each number to a string (2 = "Scissors" etc...).
Finally storing the result in a variable to be used for other functions.

## Step 2

Inputting the user data should be the easiest part of this project.
All we need to do is create variable that stores user input. (We will be assuming that the user always inputs the correct data, meaning we do not have too account for errors). But we do have to make sure the input is NOT case sensitive, which can easily be achieved with string methods.

## Step 3

Create 2 global variables that will keep scores for both players

## Step 4

To figure out who won the round we must know all the different combinations that can be produced for example (Paper beats Rock and Scissors beats Paper) this can be achieved using if/else statements.
For example:
if human = Scissors and computer = paper
    print: Scissors beats paper!
    add one point to human score
else if human = Rock and computer = Paper
    print: Paper beats Rock!
    add one point to computers score

etc...
etc...
etc...

This approach is probably not the quickest or the most readable.

Another approach could be to use comparison operators (Scissors > Paper, Scissors === Scissors, etc...).
For this to work I would need to establish the comparisons then find a way to link those comparisons to the moves of the players. As of now I don't know the answer to this riddle.

This approach will be more readable and save time coding but will take me longer to solve

And finally add one point to the global variable attached to the winner

## Step 5

This step will turn the matches into a game of 5 rounds. scores will be counted and the highest score after 5 rounds wins.

I would like to implement this using a counter that is triggered once it has been added to 5 times and then declares the winner of the game and resets the game back to zero.

# Conclusion

This plan seems like a solid starting point, sure it doesn't completely cover the entire scope but it is a great starting point. Moving forward I will tackle each function individually, using the system below:

- Write Pseudo code for the function
- Write the code
- Test and Debug the code

Once all the steps are complete I will move on to the next function and repeat the process.

## Debugging

I am adding a debugging section to this doc to help me mentally work through bugs I encounter.

### BUG: computerScore NOT updating

the computer score is not updating for some reason. My first guess is it is being updated after it has been announced I will google to see how I can change that. 

Okay so this is not the problem it seems that that the value is not being updated at all. Next I will check how to increment when inside a if statement.

This is turning out to be tricky. I am wondering if the problem lies in my console.log returns which were the cause of my last bug.

#### FIX

Okay we got it!! it was not the console.log. It was failing because we were trying to declare the the increment after the return statement. Rookie mistake :p

### BUG: FOR loop repeating same choices

When i run the loop it sticks to the first decision and loops without changing each time.

So the problem is when a value is assigned it keeps the value till the loop is finished. I need to find a way to make the value reset on each iteration.

Okay we are on the right track We created a function that deletes the variable humanSelection and then reassigns to the getHumanChoice() which resets the variable.

### FIX

We fixed the bug by creating a function that deletes the variables value and then resigns it