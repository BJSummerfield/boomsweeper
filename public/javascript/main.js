import Grid from './views/grid.js'
import Board from './models/board.js'

const banner = document.querySelector('.difficulty');
const GRID_SIZE = 8;
const difficulty = new Grid({ element: banner, GRID_SIZE });

const board = new Board(GRID_SIZE, GRID_SIZE, 10);
const cells = document.querySelector('.cell-container');

const grid = new Grid({ element: cells, board });

grid.boardSetup();
