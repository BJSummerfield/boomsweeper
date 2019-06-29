class Grid {
	constructor({ element, board }) {
		this.element = element
		this.board = board
		this.addListeners()
	}

	addListeners() {
			this.element.addEventListener('click', () => {this.leftEvent()
	 })
	}

	leftEvent() {
		try {
			var index = event.target.classList[0]
			var i = Math.floor(index / this.board.columns)
			var j = index - (i * this.board.columns)
			if (this.board.win == null) {
				this.board.reveal(i, j)
				this.board.checkWin()
				if(this.board.win === false) {
					this.gameLose()
				}
				if (this.board.win === true) {
					this.gameWin()
				}
				this.render()
			}
		}
		catch(err) {
		}
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
					element[counter].className = counter + ' reveal' +' value'+cell.value
					element[counter].innerHTML = cell.value
				}
				counter++
			})
		})
	}

	gameLose() {
		var newNode = document.querySelector('h1')
		newNode.innerHTML = 'GameOver'
	}

	gameWin() {
		var newNode = document.querySelector('h1')
		newNode.innerHTML = 'You Win!'
	}
}					
export default Grid