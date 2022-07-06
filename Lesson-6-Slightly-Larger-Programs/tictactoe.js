const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

const INITIAL_MARKER = ' '; // Unchosen square
const HUMAN_MARKER = 'X'; // Human plays 'X'
const COMPUTER_MARKER = 'O'; // Computer plays 'O'

function joinOr(array, spacing = ', ', otherOr = 'or') {
  let string;
  if (array.length <= 1) {
    string = array.join();
  } else if (array.length === 2) {
    string = array.join(` ${otherOr} `);
  } else {
    string = array.slice(0, array.length - 1).join(spacing) + 
    `${spacing}${otherOr} ${array[array.length - 1]}`;
  } 
  return string;
};

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
};

function chooseSquare(board) {
  let human = Object.values(board).filter(value => value === HUMAN_MARKER);
  let comp = Object.values(board).filter(value => value === COMPUTER_MARKER);
  if (comp.length < human.length) {
    computerChoosesSquare(board);
  } else {
    playerChoosesSquare(board);
  }
}

function someoneWon(board) {
  return !!detectWinner(board);
};

function boardFull(board) {
  return emptySquares(board).length === 0;
};

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    chooseSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt(`It's a tie!`);
  }

  prompt(`Play again? (y or n)`);
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt(`Please enter either 'y' only or 'n' only.`);
    answer = readline.question().toLowerCase();
  }
  if (answer === 'n') break;
};

prompt(`Thank you for playing Tic Tac Toe!`);
