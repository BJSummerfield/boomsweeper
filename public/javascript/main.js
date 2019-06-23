import Grid from './views/grid.js'
import Board from './models/board.js'

const GRID_SIZE = 8
const board = new Board(GRID_SIZE, 10);
const cells = document.querySelector('.cell-container');
const grid = new Grid({ element: cells, board })
grid.boardSetup()







// get board to render the full board
