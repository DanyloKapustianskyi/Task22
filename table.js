var run = document.getElementById("run");
var rows = document.getElementById("row");
var column = document.getElementById("column");
var table = document.getElementById("table");

run.addEventListener("click", createTable);
run.addEventListener("click", fillTable);
table.addEventListener("click", clickTable);

function createTable() {
    document.getElementById("table").innerHTML = "";
    var _table = document.createElement("table");
    _table.id = "tableAuto";
    var rowCount= parseInt(rows.value, 10);
    var columnCount = parseInt(column.value, 10);
    for (var i = 0; i < rowCount; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < columnCount; j++) {
            var td = document.createElement("td");
            td.id = "td-" + i + "-" + j;
            tr.appendChild(td);
        }
        _table.appendChild(tr);
    }
    table.appendChild(_table);
}

function fillTable() {
    var _table = document.getElementById("tableAuto");
    var rowCount = _table.rows.length;
    var colCount = _table.rows[0].cells.length;
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var td = document.getElementById(`td-${i}-${j}`);
            td.innerText = `${i+1}.${j+1}`;
        }
    }
}

function clickTable(event) {
    if (event.target.id.startsWith("td")) {
        if (event.target.style.background === 'rgb(255, 255, 255)' || event.target.style.background === '') {
            event.target.style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        } else {
            event.target.style.background = '';
        }
    }
}