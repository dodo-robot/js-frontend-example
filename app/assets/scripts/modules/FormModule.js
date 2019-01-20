import axios from 'axios';

class FormModule {
    constructor(){
        this.submitBtn = document.getElementsByClassName('form__btn'); 
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
        let firstName = document.getElementById('fname').value,
            lastName = document.getElementById('lname').value; 

        if(this._validate(firstName, lastName)){
            let person = {
                    firstName: firstName,
                    lastName: lastName
                }
            axios.post('http://localhost:8080/api/v1/persons', person)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
        }else{
            console.log("segnala errore");
        }
  

        // this.menuContent[0].classList.toggle("site-header__menu-content--is-visible"); 
        // this.siteHeader[0].classList.toggle("site-header--is-expanded"); 
        // this.menuIcon[0].classList.toggle("site-header__menu-icon--close-x");
    }
}

export default FormModule;