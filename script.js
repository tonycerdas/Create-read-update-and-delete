var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewPerson(formData);
    } else {
        updatePerson(formData);
    }

}

function readFormData() {
    var formData = {};
    formData['fullName'] = document.getElementById('fullname').value;
    formData['Id'] = document.getElementById('id').value;
    formData['City'] = document.getElementById('city').value;
    formData['Age'] = document.getElementById('age').value;
    return formData;
}

function insertNewPerson(object) {
    var table = document.getElementById('personList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = object.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = object.Id;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = object.City;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = object.Age;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a onclick = "onEdit(this)">Edit</a> <a onclick = "onDelete(this)">Delete</a>';
    resetForm();
}

function resetForm() {
    document.getElementById('fullname').value = ' ';
    document.getElementById('id').value = ' ';
    document.getElementById('city').value = ' ';
    document.getElementById('age').value = ' ';
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('id').value = selectedRow.cells[1].innerHTML;
    document.getElementById('city').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
}

function updatePerson(object) {
    selectedRow.cells[0].innerHTML = object.fullName;
    selectedRow.cells[1].innerHTML = object.Id;
    selectedRow.cells[2].innerHTML = object.City;
    selectedRow.cells[3].innerHTML = object.Age;
    resetForm()
}

function onDelete(td) {
    var row = td.parentElement.parentElement;
    document.getElementById('personList').deleteRow(row.rowIndex);
    resetForm()
}