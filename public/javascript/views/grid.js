class Grid {
	constructor({ element, board, GRID_SIZE }) {
		this.element = element
		this.board = board
		this.size = GRID_SIZE
		this.addListeners()
	}

	addListeners() {
		this.element.addEventListener('click', () => {
			
			// convert single array index into grid coordinates
			var index = event.target.classList[0]
			var i = Math.floor(index / this.size)
			var j = index % this.size
			
			if(this.board.cells[i][j].value == 'X') {
				this.gameOver(). //-add gameover fluff here
			} else {
				this.board.reveal(i, j)
			}
			this.render()
			this.board.checkWin()
		})
	}

	boardSetup () {
		var counter = 0
		var element = this.element
		this.board.cells.forEach(function(cell) {
			cell.forEach(function(cell) {
				var newNode = document.createElement('div')
				newNode.className = counter + ' hidden'	
				element.appendChild(newNode)
				counter++
			})
		})
	}

	render () {
		var counter = 0
		var element = this.element.childNodes
		this.board.cells.forEach(function(cells) {
			cells.forEach(function(cell) {
				if (cell.reveal == true) { 
					element[counter].className = counter + ' reveal'
					element[counter].innerHTML = cell.value
				}
				counter++
			})
		})
	}

	gameOver() {
		this.board.gameOver()
	}
	

}					
export default Grid