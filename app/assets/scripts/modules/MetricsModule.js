import axios from 'axios';

class MetricsModule {
    constructor(){
        this.submitBtn = document.getElementsByClassName('form__btn'); 
        this.events();
    }

    events() {  
        this.submitBtn[0].onclick = this.onClick.bind(this);
    }

    _validate(firstName, lastName){
        console.log(firstName);
        console.log(lastName);
         return  (firstName!=null && firstName !== '' &&
                    lastName!=null && lastName!== '') ?  true : false;
    }

    onClick(e) {
        e.preventDefault();

        console.log(e);
         
        axios.get('http://localhost:8080/api/v1/metrics/1')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
  

        // this.menuContent[0].classList.toggle("site-header__menu-content--is-visible"); 
        // this.siteHeader[0].classList.toggle("site-header--is-expanded"); 
        // this.menuIcon[0].classList.toggle("site-header__menu-icon--close-x");
    }
}

export default MetricsModule;