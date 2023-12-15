// Function to check if two queens can attack each other
// function canQueensAttack(q1r, q2r, q1c, q2c) {
// 	// Check if queens are in the same row or column
// 	if (q1r === q2r) return true;
// 	if (q1c === q2c) return true;

// }

// // Check if queens are on the same diagonal
// if (Math.abs(q1r - q1c) === Math.abs(q2r - q2c)) {
// 	return true;
// }
// return false;


// // Function to check if two queens can attack each other
// function canQueensAttack(queen1, queen2) {
//   // Check if queens are in the same row or column
//   if (queen1.row === queen2.row || queen1.column === queen2.column) {
//     return true;
//   }

//   // Check if queens are on the same diagonal
//   if (Math.abs(queen1.row - queen2.row) === Math.abs(queen1.column - queen2.column)) {
//     return true;
//   }

//   return false;
// }

// Initialize an empty array to store the selected queen buttons
let selectedQueens = [];

// Function to handle button selection
function handleButtonSelection(event) {
  const button = event.target;

  // Check if the button is already selected
  if (button.classList.contains('selected')) {
    // Deselect the button
    button.classList.remove('selected');
    // Remove it from the selectedQueens array
    selectedQueens = selectedQueens.filter((queen) => queen.button !== button);
  } else {
    // Check if 2 buttons are already selected
    if (selectedQueens.length === 2) {
      // Deselect the first button and remove it from the array
      const firstButton = selectedQueens.shift().button
      firstButton.classList.remove('selected');
    }

    // Select the current button
    button.classList.add('selected');
    // Add it to the selectedQueens array
    selectedQueens.push({
      button,
      row: parseInt(button.dataset.row),
      column: parseInt(button.dataset.column),
    });

    // Check if 2 queens are selected and perform the attack check
    if (selectedQueens.length === 2) {
      const queen1 = selectedQueens[0];
      const queen2 = selectedQueens[1];
      const canAttack = canQueensAttack(queen1, queen2);
      console.log(`Can queens attack each other? ${canAttack}`);
    }
  }
}

// Generate the chessboard grid
const board = document.querySelector('.board');
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const button = document.createElement('button');
    button.dataset.row = row;
    button.dataset.column = col;
    button.addEventListener('click', handleButtonSelection);
    board.appendChild(button);
  }
}

// // Generate the chessboard grid
// const board = document.querySelector('.board');
// for (let r = 0; r < 8; r++) {
//  for (let c = 0; c < 8; c++) {
//    const button = document.createElement('button');
//    button.dataset.r = r;
//    button.dataset.c = c;
//    button.addEventListener('click', handleButtonSelection);
//    board.appendChild(button);
//  }
// }

// // Initialize an empty array to store the selected queen buttons
// let selectedQins = [];

// // Function to handle button selection
// function handleButtonSelection(event) {
// 	const button = event.target;

// 	// Check if the button is already selected
// 	if (button.classList.contains('selected')) {
// 		// Deselect the button
// 		button.classList.remove('selected');
// 		// Remove it from the selectedQins array
// 		selectedQins = selectedQins.filter((queen) => queen.button !== button);
// 	} else {
// 		// Check if 2 buttons are already selected
// 		if (selectedQins.length === 2) {
// 			// Deselect the first button and remove it from the array
// 			const firstButton = selectedQins.shift().button;
// 			firstButton.classList.remove('selected');
// 		}
// 		// Select the current button
// 		button.classList.add('selected');
// 		// Add it to the selectedQins array
// 		selectedQins.push({
// 			button,
// 			row: parseInt(button.dataset.row),
// 			column: parseInt(button.dataset.column),
// 		});

// 		// Check if 2 queens are selected and perform the attack check
// 		if (selectedQins.length === 2) {
// 			const queen1 = selectedQins[0];
// 			const queen2 = selectedQins[1];
// 			const canAttack = canQueensAttack(queen1, queen2);
// 			console.log(`Can queens attack each other? ${canAttack}`);
// 		}
// 	}
// }
