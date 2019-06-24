import Grid from './views/grid.js'
import Board from './models/board.js'

const GRID_SIZE = 16
const board = new Board(GRID_SIZE, GRID_SIZE, 3);
console.log(board)
const cells = document.querySelector('.cell-container');
const grid = new Grid({ element: cells, board, GRID_SIZE })
grid.boardSetup()