document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const resetButton = document.getElementById('reset-btn');
    let currentPlayer = 'X';
    let moves = 0;
    
    // Function to check for a winner
    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          boxes[a].innerText !== '' &&
          boxes[a].innerText === boxes[b].innerText &&
          boxes[a].innerText === boxes[c].innerText
        ) {
          return boxes[a].innerText;
        }
      }
  
      if (moves === 9) {
        return 'draw';
      }
  
      return null;
    };
    
    // Function to handle box click
    const handleBoxClick = (index) => {
      if (boxes[index].innerText === '') {
        boxes[index].innerText = currentPlayer;
        moves++;
  
        const winner = checkWinner();
        if (winner) {
          if (winner === 'draw') {
            alert('It\'s a draw!');
          } else {
            alert(`Player ${winner} wins!`);
          }
          resetGame();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    };
  
    // Function to reset the game
    const resetGame = () => {
      boxes.forEach(box => box.innerText = '');
      currentPlayer = 'X';
      moves = 0;
    };
    
    // Event listeners for box clicks
    boxes.forEach((box, index) => {
      box.addEventListener('click', () => handleBoxClick(index));
    });
  
    // Event listener for reset button
    resetButton.addEventListener('click', resetGame);
  });
  