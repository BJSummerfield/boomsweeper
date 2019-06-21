var i;
var j;
var board = [1,2,3]
		var rows = []
		var counter = 1
		for (i = 1; i < 2; i++){
			for (j = 1; j < 2; j++){
				rows.push(counter)
				counter = counter + 1
				console.log(rows)
			}
			board.push(rows)
			rows = []
			console.log(board)
		}
	 	return console.log(board)

