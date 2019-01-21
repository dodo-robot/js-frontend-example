import axios from 'axios';
import EventListener from './EventListener';

class FormModule {
    constructor(){
        this.submitBtn = document.getElementsByClassName('form__btn'); 
        this.listener = EventListener.getInstance();
        this.events();
    }

    events() {  
        this.submitBtn[0].onclick = this.onSubmit.bind(this);
    }

    _validate(firstName, lastName){
        console.log(firstName);
        console.log(lastName);
        return  (firstName!=null && firstName !== '' &&
                lastName!=null && lastName!== '') ?  true : false;
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("response");
        let firstName = document.getElementById('fname').value,
            lastName = document.getElementById('lname').value; 

        if(this._validate(firstName, lastName)){
            let person = {
                    firstName: firstName,
                    lastName: lastName
                }
            let that = this;
            axios.post('http://localhost:8080/api/v1/persons', person)
            .then(function (response) {
                console.log(response);
                that.listener.dispatchEvent({type:'update'});
            })
            .catch(function (response) {
                console.log(response);
            });
        }else{
            console.log("segnala errore");
        }
    }
}

export default FormModule;