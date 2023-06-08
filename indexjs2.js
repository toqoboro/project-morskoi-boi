import prompt from 'prompt';
import readlineSync from 'readline-sync';

let boardP1 = [];
let boardP2 = [];
let player1ShotsTaken = 0;
let player2ShotsTaken = 0;
let player1ShipsRemaining = 5;
let player2ShipsRemaining = 5;
let isAgainstBot;

function initBoard(board) {
  for (let row = 0; row < 10; row++) {
    board[row] = [];
    for (let col = 0; col < 10; col++) {
      board[row][col] = '~';
    }
  }
}

function printBoard(board) {
  console.log('  0 1 2 3 4 5 6 7 8 9');
  for (let row = 0; row < 10; row++) {
    console.log(`${row} ${board[row].join(' ')}`);
  }
}
