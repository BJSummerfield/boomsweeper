class Grid {
	constructor({ element, board }) {
		this.element = element
		this.model = board
		this.addListeners()
	}

	addListeners() {
		if (this.element.classList[0] == 'cell-container'){
			this.element.addEventListener('click', () => {this.leftEvent()
			})
		} else{
			this.element.addEventListener('click', () => {
				console.log(event.target.value)
			})
		}
	}

	leftEvent() {
		var index = event.target.classList[0]
		var i = Math.floor(index / this.model.columns)
		var j = index % this.model.rows
		
		this.model.reveal(i, j)
		this.model.checkWin()
		if(this.model.cells[i][j].value == 'X') {
			this.gameLose() //-add gameLose fluff here
		}
		if (this.model.win == true) {
			this.gameWin()
		}
		this.render()
	}

	boardSetup () {
		var counter = 0
		var element = this.element
		this.model.cells.forEach(function(cell) {
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
		this.model.cells.forEach(function(cells) {
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
		var newNode = document.querySelector('h2')
		newNode.innerHTML = 'GameOver'
		this.model.gameOver()
	}

	gameWin() {
		var newNode = document.querySelector('h2')
		newNode.innerHTML = 'You Win!'
		this.model.gameOver()
	}
}					
export default Grid