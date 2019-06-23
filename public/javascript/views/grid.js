class Grid {
	constructor({ element, board }) {
		this.element = element
		this.board = board
		this.addListeners()
	}

	addListeners() {
		this.element.addEventListener('click', () => {
			if(this.board[event.target.classList[0]].value == 'X') {
				this.gameOver(event.target.classList[0])
			} else {
				this.reveal(event.target.classList[0])
			}
			this.render()
		})
	}

	template(value) {
		return `${value}`
	}

	boardSetup () {
		var counter = 0
		var element = this.element
		var template = this.template
		this.board.forEach(function(cell) {
			var newNode = document.createElement('div')
			newNode.className = counter + ' hidden'	
			element.appendChild(newNode)
			counter++
		})
	}

	// reveal needs to be expanded to rest of game
	reveal(index) {
		this.board[index].reveal = true
		if (this.board[index].value == '') {
			this.floodFill(index)
		}
	}

	render () {
		console.log('render')
		var counter = 0
		var element = this.element
		var template = this.template
		this.board.forEach(function(cell) {
			if (cell.reveal == true) { 
				element.childNodes[counter].className = counter + ' reveal'
				element.childNodes[counter].innerHTML = template(cell.value)
			}
			counter++
		})
	}

	gameOver(index) {
		console.log('go')
		this.board.forEach(function(cell) {
			cell.reveal = true
		})
	}
	
	floodFill(index) {
		var i = Math.floor(index / 8)
		var j = index % 8
		var size = 8
		var cells = []
  	
  	// splice board into coordinates
  	while (this.board.length > 0) {
  		cells.push(this.board.splice(0, 8))
  	}
  	this.board = cells.flat()	
			// X axis offsets
			for (var xoff = -1; xoff <=1; xoff++) {
				var x = i + xoff
				if (x < 0 || x >= size) continue
					
				// Y axis offsets
				for (var yoff = -1; yoff <=1; yoff++) {
					var y = j + yoff
					if (y < 0 || y >= size) continue
					
				if (cells[x][y].reveal == false) {
					var flatten = (x * 8) + y
					this.reveal(flatten)
				}
			}
		}			
	}
}					
export default Grid