# Connect 4 Game


## Overview

Connect 4 is a two-player connection game in which the players first choose a color and then take turns dropping colored tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens.


## Features

Interactive game board with a 7x6 grid.

Two-player gameplay: Player 1 (Red) vs. Player 2 (Yellow).

Visual indication of the players' tokens and the game status.

A restart button to reset the game at any time.


## Development

### Game Logic (script.js)

**Initialization:** The game starts by randomly selecting which player (Player 1 or Player 2) will make the first move. This is done to ensure fairness and unpredictability in gameplay.

**Player Moves:** The core gameplay function makeMove(col) is triggered whenever a player clicks on a column in the game board. It determines if a move is valid (i.e., if the column clicked has free space) and then updates the board by adding the player's token to the lowest available row in that column.

**Winning Logic:** The function checkBoard() checks after each move if there are four consecutive tokens of the same color horizontally, vertically, or diagonally. If such a line is found, the game declares the current player as the winner.

**Draw Detection:** The game also checks for a draw situation with the checkDraw() function. A draw is declared if all spaces on the board are filled without any player achieving a connect four.

**Game Restart:** The restart() function resets the game to its initial state, clearing the board and re-initializing player turns.
