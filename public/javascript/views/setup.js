import Grid from './grid.js'
import Board from '../models/board.js'

class Setup {
	constructor({ element }) {
		this.element = element
		this.rows = 8
		this.columns = 8
		this.booms = 10
		this.board = null
		this.grid = null
		this.cells = document.querySelector('.cell-container');
		this.addListeners()
	}

	addListeners() {
		var board
		this.element.addEventListener('click', () => {
				console.log(event.target.value)
				if ( event.target.value == 'Beginner') {
					this.begSetup()
					board = new Board(this.columns, this.rows, this.booms)
					this.grid = new Grid({ element: this.cells, board })
					this.grid.boardsetup

				} else if ( event.target.value == 'Intermediate') {
					this.interSetup()
				}
			})
		}

	begSetup() {
		this.rows = 8
		this.columns = 8
		this.booms = 10
	}
	interSetup() {
		this.rows = 16
		this.columns = 16
		this.booms = 30
	}
}

export default Setup
