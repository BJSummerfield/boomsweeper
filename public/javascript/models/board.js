import Cell from "./cell.js"
class Board {
	constructor(columns, rows, booms){
    this.booms = booms
    this.rows = rows
    this.columns = columns
    this.cells = []
    this.win = false
    this.createBoard()
    this.shuffleBoard()
    this.gridTheBoard()
    this.valueLoop()
    
  }
		
    // creates array with the number of booms
		createBoard() {
  		for (var i = 0; i < this.rows*this.columns; i++) {
  			this.cells.push(new Cell('', false))
  		}
  		for (var i = 0; i < this.booms; i++) {
  			this.cells[i].value = 'X'
		  } 
    }
		
    // shuffles the board to randomize the booms
		shuffleBoard() {
    	var i = 0
      var j = 0
      var temp = null
  		for (i = this.cells.length - 1; i > 0; i -= 1) {
      	j = Math.floor(Math.random() * (i + 1))
      	temp = this.cells[i]
      	this.cells[i] = this.cells[j]
      	this.cells[j] = temp
    	}
    }

    // turns board into a grid
    gridTheBoard() {
    	var cells = []
    	while (this.cells.length > 0) {
    		cells.push(this.cells.splice(0, this.columns))
    	}
      this.cells = cells
    }

    reveal(i, j) {
      var cell = this.cells[i][j]
      cell.reveal = true
      if (cell.value == '') {
        this.floodFill(i, j)
      }
    }

    checkWin() {
      var i = 0
      this.cells.forEach(function(cells){
        cells.forEach(function(cell){
          if (cell.value !== 'X' && cell.reveal == true) {
            i++
          }
        })
      })
      if (i == (this.rows * this.columns) - this.booms) {
        this.win = true
      }
    }

    gameOver() {
      this.cells.forEach(function(cells){
        cells.forEach(function(cell){
          cell.reveal = true
        })
      })
    }

    floodFill(i, j) {
      // X axis offsets
      for (var xoff = -1; xoff <=1; xoff++) {
        var x = i + xoff
        if (x < 0 || x >= this.rows) continue
          
        // Y axis offsets
        for (var yoff = -1; yoff <=1; yoff++) {
          var y = j + yoff
          if (y < 0 || y >= this.columns) continue
          
        if (this.cells[x][y].reveal == false) {
          this.reveal(x, y)
        }
      }
    }     
  }
  	
  	// loop through each cell checking neighbors
    valueLoop() {
  	for (var i = 0; i < this.rows; i++) {
  		for (var j = 0; j < this.columns; j++) {
  			var start = this.cells[i][j]
        if (start.value !== 'X') {
  				var total = 0

  				// X axis offsets
  				for (var xoff = -1; xoff <=1; xoff++) {
  					var x = i + xoff
  					if (x < 0 || x >= this.rows) continue
  						
  					// Y axis offsets
  					for (var yoff = -1; yoff <=1; yoff++) {
  						var y = j + yoff
  						if (y < 0 || y >= this.columns) continue
  							 
  						if (this.cells[x][y].value == 'X') {
  							total++
  						}
  					}
  				}
				}
				// replace value with total neighboring booms
				if (this.cells[i][j].value !== 'X') {
					if (total == 0) {
					} else {
						this.cells[i][j].value = total
					}
				}
  		}
		}
	}
}
export default Board