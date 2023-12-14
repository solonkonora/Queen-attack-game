// Function to check if two queens can attack each other
function canQueensAttack(q1r, q2r, q1c, q2c ) {
    // Check if queens are in the same row or column
    if (q1r === q2r) return true;
    if (q1c === q2c) return true;
    
    }
  
    // Check if queens are on the same diagonal
    if (Math.abs(q1r - q1c) === Math.abs(q2r - q2c)) {
      return true;
    }
    return false;

