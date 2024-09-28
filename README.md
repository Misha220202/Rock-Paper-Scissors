# Rock-Paper-Scissors

# Overview
* This is a simple web-based Rock-Paper-Scissors game where players compete against the computer. The game continues until either the player or the computer wins 5 rounds. The app features a dynamic result display and a reset functionality to start a new game.

# Features
* User vs. Computer Gameplay: The player selects rock, paper, or scissors, and the computer randomly generates its choice.
* Score Tracking: The game tracks the scores of both the player and the computer. The first to reach 5 points wins.
* Result Display: After each round, the result (Win, Lose, or Tie) is displayed along with the updated scores.
* Reset Functionality: Start a new game by resetting the scores and clearing previous results.

# Code Explanation
* Computer's Choice (getCompuerChoice): Randomly generates the computer's move (rock, paper, or scissors) using a random number between 1 and 3.
* Round Logic (playRound): Determines the result of the round based on the player's and computer's choices.
* Result Display (showresult): Dynamically displays the result of each round, including current scores. Declares the winner when one side reaches 5 points.
* Callback Wrapper (callBackFuncWrapper): A utility function to manage event listeners for the player's move buttons.
* Reset Game: The "Start" button resets the game state by clearing the scores and removing all results from the display.
