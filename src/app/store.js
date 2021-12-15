class Store {
	constructor(initState = []) {
		this._id = 0;
		this._state = {};

		initState.forEach((data) => {
			this._addDataRecord(data);
		});

		this._handlers = [];
	}

	_addDataRecord(data) {
		data.id = this._id;
		this._state[this._generateId()] = data;
	}

	addRecord(data) {
		this._addDataRecord(data);
		this.notifyListeners();
	}

	getRecordById(recordId) {
		return { ...this._state[recordId], __innerId:  recordId};
	}

	getRecords() {
		const fields = Object.keys(this._state);

		return fields.map(fieldId => {
			return this.getRecordById(fieldId);
		});
	}

	_generateId() {
		return 'my_id_' + this._id++;
	}

	subscribe(callback) {
		this._handlers.push(callback);
	}

	notifyListeners() {
		this._handlers.forEach((call_Back) => call_Back());
	}
}