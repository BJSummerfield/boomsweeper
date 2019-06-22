import Cell from "./cell.js"
class Board {
	constructor(size){
		var board = []
		var rows = []
		var counter = 1
		for (var i = 0; i < size; i++){
			for (var j = 0; j < size; j++){
				rows.push(new Cell(counter, false))
				counter++
			}
			board.push(rows)
			rows = []
		}
	 	return board
	}
}
export default Board
