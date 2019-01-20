import axios from 'axios';

class TableModule {
    constructor(){
        this.tableBody = document.getElementsByClassName("blueTable")[0].getElementsByTagName("tbody")[0];
        // this.submitBtn = document.getElementsByClassName('form__btn'); 
        this.onUpdate();
    }

    events() {  
    }

    _createTableRow(newRow, value, index){
        var newCell  = newRow.insertCell(index);
        var newText  = document.createTextNode(value);
        newCell.appendChild(newText);
    }

    _insertData(firstName, lastName){
        var newRow   = this.tableBody.insertRow(this.tableBody.rows.length);
        // Insert a cell in the row at index 0
        this._createTableRow(newRow, firstName, 0);
        this._createTableRow(newRow, lastName, 1);
        this._createTableRow(newRow, firstName, 2);
    }

    onUpdate(e) {
        if(e) e.preventDefault();
        let that = this;
        axios.get('http://localhost:8080/api/v1/persons')
        .then(function (response) {
          
            response.data.forEach(element => {
                that._insertData(element.firstName, element.lastName);
            });
            
        })
        .catch(function (response) {
            console.log(response);
        });
  
    }
}

export default TableModule;