class Store {
	constructor(initState) {
		this._id = 0;
		this._state = {};
	}

	addRecord(data) {
		this._state[this._generateId()] = data;
	}

	_generateId() {
		return 'my_id_' + this._id++;
	}
}