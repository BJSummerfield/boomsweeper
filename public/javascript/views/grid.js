class Grid {
	constructor({ element, board }) {
		this.element = element
		this.board = board
	}

template(value) {
	return `${value}`
}

render () {
	var element = this.element
	var template = this.template
	this.board.forEach(function(cells) {
		cells.forEach(function(cell) {
			var newNode = document.createElement('div')
			newNode.className = 'cell'
			newNode.innerHTML = template(cell.value)
			element.appendChild(newNode)
		})
	})
	}
}

export default Grid