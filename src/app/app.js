class App {

	constructor(data, tableId, formName) {
		this._tableId = tableId;
		this._formName = formName;

		this._store = new Store(data);
		this._store.subscribe(this._changeData.bind(this));
		
		this._store.notifyListeners();
		this._bindEventListeners();
	}

	run() {
		this._store.addRecord({
			first: 'Name',
			last: 'LastName',
			action: 'Some action'
		});
		
		console.log('Ok');
	}

	_getTable() {
		return document.getElementById(this._tableId);
	}

	_changeData = () => {
		const newData = this._store.getRecords();
		const parentTable = this._getTable();

		parentTable.innerHTML = '';	
	
		newData.forEach(rowData => {
			const row = this._renderRowData(rowData);
			row.setAttribute('id', rowData.__innerId);
			parentTable.appendChild(row);
		});

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

	_handleClick(event) {

		if(event.ctrlKey) {
			return;
		}

		const targetRow = event.target.parentElement;
		const recordId = targetRow.getAttribute('id');
		const rowData = this._store.getRecordById(recordId);
		debugger;
	}

	_handleDbClick(event) {

		if(event.ctrlKey) {
			const parentTable = this._getTable();
			parentTable.removeChild(event.target.parentElement);
		}

	}

	_populateToForm(rowData) {
		const form = document.forms[this._formName];
		const fields = Object.keys(rowData);
		
		fields.forEach((itemName) => {

		});

	}

	_bindEventListeners(event) {
		const parentTable = this._getTable();

		parentTable.addEventListener('dblclick', this._handleDbClick.bind(this));

		parentTable.addEventListener('dblclick', this._handleClick.bind(this));
	}
}