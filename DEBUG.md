## Debugging

This debugging document is designed to help me mentally work through bugs I encounter.

### BUG: `computerScore` not updating

The computer score is not updating for some reason.  
My first guess is that it is being updated **after** it has been announced.  
I will Google to see how I can change that.

Okay, so this is not the problem.  
It seems that the value is **not being updated at all**.  
Next, I will check how to increment inside an `if` statement.

This is turning out to be tricky.  
I am wondering if the problem lies in my `console.log` returns, which were the cause of my last bug.

#### FIX

Okay, I got it!!  
It was not the `console.log`.  
The issue was that I was trying to declare the increment **after** the `return` statement.  
Rookie mistake. :p

---

### BUG: `for` loop repeating same choices

When I run the loop, it sticks to the first decision and loops without changing each time.

The problem is that when a value is assigned, it keeps the value until the loop is finished.  
I need to find a way to make the value reset on each iteration.

Okay, I am on the right track.  
I created a function that deletes the variable `humanSelection` and then reassigns it to `getHumanChoice()`,  
which resets the variable.

#### FIX

I fixed the bug by creating a function that deletes the variable's value and then reassigns it.  
Check the function `resetChoice()` for more details.

---

### BUG: `resetChoice` triggers prompt one extra time

I am at the very end of this project.  
Everything is working properly, which is great, but I have a small problem where the prompt box is being triggered **one extra time** by the `resetChoice()` function.  
It does not output anything, which makes it unique, and it only happens the first time it's called.

I moved the function from the end of the loop to the start, and the extra prompt moved with it,  
confirming that this function call is causing the problem.

I think the answer to this problem may be to place the prompt feature into its own function.  
This should stop it from being retriggered.

#### FIX

The bug was fixed by triggering the last round inside the `if` statement of `playGame()`.  
This canceled out the final `resetChoice()` that was causing the problem.
