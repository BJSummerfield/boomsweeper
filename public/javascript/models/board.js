import Cell from "./cell.js"
class Board {
	constructor(size, booms){
		// creates array with the number of booms
		
		var board = []
		for (var i = 0; i < size*size; i++){
			board.push(new Cell('', false))
		}
		for (var i = 0; i < booms; i++) {
			board[i].value = 'X'
		}
		
		// shuffles the array to randomize the booms
  	var i = 0
    var j = 0
    var temp = null
		for (i = board.length - 1; i > 0; i -= 1) {
    	j = Math.floor(Math.random() * (i + 1))
    	temp = board[i]
    	board[i] = board[j]
    	board[j] = temp
  	}

  	// turns board into a grid
  	var cells = []
  	while (board.length > 0) {
  		cells.push(board.splice(0, size))
  	}
  	
  	// loop through each cell checking neighbors
  	for (var i = 0; i < size; i++) {
  		for (var j = 0; j < size; j++) {
  			var start = cells[i][j]

  			if (start.value !== 'X') {
  				var total = 0

  				// X axis offsets
  				for (var xoff = -1; xoff <=1; xoff++) {
  					var x = i + xoff
  					if (x < 0 || x >= size) continue
  						
  					// Y axis offsets
  					for (var yoff = -1; yoff <=1; yoff++) {
  						var y = j + yoff
  						if (y < 0 || y >= size) continue
  							
  						var neighbor = cells[x][y]
  						if (neighbor.value == 'X') {
  							total++
  						}
  					}
  				}
				}
				// replace value with total neighboring booms
				if (cells[i][j].value !== 'X') {
					if (total == 0) {
					} else {
						cells[i][j].value = total
					}
				}
  		}
		}
  	board = cells.flat()
		return board
	}
}
export default Board
