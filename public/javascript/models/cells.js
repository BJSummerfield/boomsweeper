class Cells {
	constructor() {
	}
	
	setup(size) {
		var board = []
		var rows = []
		var counter = 1
		for (var i = 0; i < size; i++){
			for (var j = 0; j < size; j++){
				rows.push(counter)
				counter = counter + 1
			}
			board.push(rows)
			rows = []
		}
	 	return console.log(board)
	}
}

export default Cells
