class Cell {
	constructor(value, reveal) {
		this.value = value;
		this.reveal = reveal;

		this._on = {
			change: []
		}
	}

  increment () {
    this.value++

    this.trigger('change')
  }

  on (event, callback) {
    this._on[event].push(callback)
  }

  trigger (event) {
    this._on[event].map(callback => callback(this))
  }
}
	

export default Cell