import axios from 'axios';

class MetricsModule {
    constructor(){
        this.buttons = document.getElementsByTagName('button'); 
        this.ascii = document.getElementsByClassName('metrics__value--ascii')[0]; 
        this.binary = document.getElementsByClassName('metrics__value--binary')[0]; 
        this.zeros = document.getElementsByClassName('metrics__value--zeros')[0]; 
        
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].onclick = this.onClick.bind(this);
        }
    }

    _setConsecutiveZero(value){
        this.zeros.textContent = value;
    }

    _setAsciiSum(value){
        this.ascii.textContent = value;
    }

    _setBinary(value){
        this.binary.textContent = value;
    }


    onClick(e) {
        e.preventDefault();
        var that = this;
        axios.get('http://localhost:8080/api/v1/metrics/'+e.target.id)
        .then(function (response) {
            console.log(response.data);
            that._setConsecutiveZero(response.data.consecutiveZeros);
            that._setAsciiSum(response.data.asciiSum);
            that._setBinary(response.data.binary);
        })
        .catch(function (response) {
            console.log(response);
        });
  
    }
}

export default MetricsModule;