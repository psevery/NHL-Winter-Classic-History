var table

function getTable(){
	table = document.getElementById('table');
}

function populateTable(data){
	while(table.hasChildNodes()){
   		table.removeChild(table.firstChild);
	}
	var row = document.createElement("TR");
	for (var key in data[0]) {
		if (data[0].hasOwnProperty(key)) {
			var cell = document.createElement("TD")
			cell.appendChild(document.createTextNode(key));
			row.appendChild(cell);
		}
	}
	table.appendChild(row)
	//make the other rows
	for(var i = 0; i < data.length; i++) {
		row = document.createElement("TR");
		for (var key in data[i]) {
			if (data[i].hasOwnProperty(key)) {
			    console.log(data[i][key])
			    var cell = document.createElement("TD")
				cell.appendChild(document.createTextNode(data[i][key]));
				row.appendChild(cell);
		 	}
		table.appendChild(row)
		}
	}
}

