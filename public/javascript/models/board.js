import Cell from "./cell.js"
class Board {
	constructor(size){
		var board = []
		var rows = []
		var counter = 1
		for (var i = 0; i < size*size; i++){
			board.push(new Cell(counter, false))
				counter++
		}
	return board
	}
}
export default Board
