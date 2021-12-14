class App {

	constructor(data, tableId) {
		this._store = new Store(data);
		this._tableId = tableId;

		this._store.subscribe(this._changeData.bind(this));
		
		// this._initData(data);
		this._store.notifyListeners();
	}

	/*
	_initData(data) {
		data.forEach((record) => {
			this._store.addRecord(record);
		});
	}
	*/

	run() {
		this._store.addRecord({
			first: 'Name',
			last: 'LastName',
			action: 'Some action'
		});
		
		console.log('Ok');
	}

	_changeData = () => {
		const newData = this._store.getRecords();
		const parentTable = document.getElementById(this._tableId);

		parentTable.innerHTML = '';	
	
		newData.forEach(rowData => {
			const row = this._renderRowData(rowData);
			parentTable.appendChild(row);
		});

		// debugger;

	}

	_renderRowData(rowData) {
		const row = document.createElement('tr');
		row.appendChild(this._generateTd(rowData.id));
		row.appendChild(this._generateTd(rowData.first));
		row.appendChild(this._generateTd(rowData.last));
		row.appendChild(this._generateTd(rowData.action));
		
		return row;

	}

	_generateTd(tdData) {
		const td = document.createElement('td');
		td.appendChild(document.createTextNode('tdData'));

		return td;

	}
}