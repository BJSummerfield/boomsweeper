import Grid from './views/grid.js'
import Board from './models/board.js'

const banner = document.querySelector('.difficulty');
var rows = 9
var columns = 9
var booms = 10
const board = new Board(columns, rows, booms);
var cells = document.querySelector('.cell-container');
const grid = new Grid({ element: cells, board });
grid.boardSetup();

banner.addEventListener('click', () => {
	if (event.target.value) {
		var cells = document.querySelector('.cell-container')
		var difficulty = 'beginner'
		while (cells.firstChild) {
			cells.removeChild(cells.firstChild)
		}

		if (event.target.value == 'Beginner') {
			rows = 9
			columns = 9
			booms = 10
			difficulty = 'beginner'
		} 

		if (event.target.value == 'Intermediate') {
			rows = 16
			columns = 16
			booms = 40
			difficulty = 'intermediate'
		}	

		if (event.target.value == 'Expert') {
			rows = 16
			columns = 30
			booms = 99
			difficulty = 'expert'
		}
		var newNode = document.querySelector('h1')
		newNode.innerHTML = 'BoomSweeper'
		cells.setAttribute('class', `cell-container ${event.target.value.toLowerCase()}`)
		board.setup(columns, rows, booms)
		grid.boardSetup();
	}


})
