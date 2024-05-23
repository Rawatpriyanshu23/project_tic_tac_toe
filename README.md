# project_tic_tac_toe

querySelectorAll: This function selects all elements in the HTML document that match a specified CSS selector and returns them as a NodeList object. In this code, it's used to select all elements with the class .box to represent the individual squares of the Tic-Tac-Toe grid.

getElementById: This function selects an element from the HTML document based on its ID attribute. In this code, it's used to select the reset button element with the ID reset-btn.

addEventListener: This method attaches an event listener to each box element and the reset button. It listens for a 'click' event on each box and the reset button, triggering the respective event handler function.

checkWinner Function: This function checks if there is a winner by examining the current state of the game board. It iterates through all possible winning combinations (rows, columns, and diagonals) and compares the inner text of the box elements to determine if a player has won.

handleBoxClick Function: This function handles the click event on each box element. It checks if the clicked box is empty, updates the box with the current player's symbol ('X' or 'O'), and then checks if there is a winner or if the game is a draw.

resetGame Function: This function resets the game board to its initial state. It clears the inner text of all box elements, resets the current player to 'X', and sets the number of moves to 0.
