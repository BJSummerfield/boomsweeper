import Cell from './models/cell.js'
import Grid from './views/grid.js'
import Board from './models/board.js'
import Booms from './views/booms.js'

const GRID_SIZE = 2
const board = new Board(GRID_SIZE);
const cells = document.querySelector('.cell-container');
const grid = new Grid({ element: cells, board })

grid.boardSetup()
console.log(board)




// get board to render the full board
