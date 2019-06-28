import Grid from './views/grid.js'
import Board from './models/board.js'

const banner = document.querySelector('.difficulty');

var rows = 8
var columns = 8
var booms = 10
var board
var grid

board = new Board(columns, rows, booms);
const cells = document.querySelector('.cell-container');
console.log(cells.classList)
grid = new Grid({ element: cells, board });
grid.boardSetup();

banner.addEventListener('click', () => {
	var difficulty = 'beginner'
	console.log(event.target.value)
	// if (event.target.value = 'Beginner') {
	// 	rows = 8
	// 	columns = 8
	// 	booms = 10
	// 	difficulty = 'beginner'
	// } 

	// if (event.target.value = 'Intermediate') {
	// 	rows = 16
	// 	columns = 16
	// 	booms = 30
	// 	difficulty = 'intermediate'
	// }
	// cells.classList.remove(difficulty)
	// console.log(cells.classList)
	// cells.classList.add(event.target.value.toLowerCase())
	// console.log(cells.classList[1])
	while (cells.firstChild) {
		cells.removeChild(cells.firstChild)
	}
	board = new Board(columns, rows, booms);
	grid = new Grid({ element: cells, board });
grid.boardSetup();

})
