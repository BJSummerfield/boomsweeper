import Grid from './views/grid.js'
import Board from './models/board.js'

const GRID_SIZE = 16
const board = new Board(GRID_SIZE);
const cells = document.querySelector('.cell-container');
const grid = new Grid({ element: cells, board })

grid.boardSetup()
console.log(board)





// get board to render the full board
