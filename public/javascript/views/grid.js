class Grid {
	constructor({ element, board }) {
		this.element = element
		this.board = board
		this.addListeners()
	}

	addListeners() {
		this.element.addEventListener('click', () => {
			this.reveal(event.target.classList[0])
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
		this.render()
	}

	render () {
		var counter = 0
		var element = this.element
		var template = this.template
		this.board.forEach(function(cell) {
			if (cell.reveal == false) {
				element.childNodes[counter].className = counter + ' hidden'
			}
			if (cell.reveal == true) { 
				element.childNodes[counter].className = counter + ' reveal'
				element.childNodes[counter].innerHTML = template(cell.value)
			}
			counter++
		})
	}
}

export default Grid