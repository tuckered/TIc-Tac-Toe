# Yay, Tic Tac Toe!

Here is a console version of the beloved classic, Tic Tac Toe.

## How To Install

 - Start by downloading both the files. Open your browser and navigate to the console. This can be done by pressing OPTION + COMMAND + I on Mac and Ctrl + Shift + J on PC
 - Once the console is open, drag the index.HTML file into the browser tab and the game will initiate. (The game uses a prompt box which is why you'll want to open the console before loading).
 - There are some instructions of how to play and a prompt box which is where you will enter your commands for the game. 

 ## How To Play
 - Player X always starts the game and each player will take it in turns to enter their co-ordinates of where they want to place their shape. 
 - Moves are entered in with the format of row comma column (1,3). This example would be the 3rd column on the top row. 
 - To win a game a player must get 3 of their shapes in a line horizontally, vertically or diagonally. 
 - If no player wins, then it is a draw and you are given the option to play again. 
 - You are also given the option to Quit at anytime by typing 'q' into the input box. 

## Assumptions

 - The biggest factor on making the game came from how users would input their moves. It didn't feel very seamless to enter a function in the console, playerTurn(1,2) for example, so I made the assumption that I should be using the prompt box. 
 - This caused more problems than I thought because once it's running, you don't want it to stop unless the player quits the game. 
 - I also made the assumption that the prompt box should be open at all times to keep the game flowing. I think I have managed this, with the exception of when a player decides to quit or presses cancel on the prompt box.
 
 ## Further Work
 
 - I am aware that the checkForWinner() is not very elegant and does not adhere to DRY principles. Given how I set up my gameBoard, with an x and y coordinate I found it difficult to apply a solution that would work for all 8 conditions for winning, and be less code or easier to read. Any feedback on this or how I could go about it better would be much appreciated. 
