import axios from 'axios';
import MetricsModule from './MetricsModule'; 

class TableModule {
    constructor(){
        this.tableBody = document.getElementsByClassName("blueTable")[0].getElementsByTagName("tbody")[0];
        // this.submitBtn = document.getElementsByClassName('form__btn'); 
        this.onUpdate();
    }

    _createTableCell(newRow, value, index){
        var newCell  = newRow.insertCell(index);
        var newText  = document.createTextNode(value);
        newCell.appendChild(newText);
    }

    _createTableButton(newRow, id, index){
        var newCell  = newRow.insertCell(index);
        var button = document.createElement("button");
        button.innerHTML = "get metrics";
        button.id = id;
        newCell.appendChild(button);
    }

    _insertData(element){
        var newRow   = this.tableBody.insertRow(this.tableBody.rows.length);
        // Insert a cell in the row at index 0
        this._createTableCell(newRow, element.id, 0);
        this._createTableCell(newRow, element.firstName, 1);
        this._createTableCell(newRow, element.lastName, 2);
        this._createTableButton(newRow, element.id, 3);
        
    }

    onUpdate(e) {
        if(e) e.preventDefault();
        let that = this;
        axios.get('http://localhost:8080/api/v1/persons')
        .then(function (response) {
          
            response.data.forEach(element => {
                that._insertData(element);
            })
            
            var metricsModule = new MetricsModule();
        })
        .catch(function (response) {
            console.log(response);
        });
  
    }
}

export default TableModule;