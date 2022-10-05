const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ( { target } ) =>{
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled','');
}

const handleSubmite = (event) =>{
    event.preventDefault();

    localStorage.setItem('player',input.value);
    window.location = 'Pages/Game.html';
}

input.addEventListener('input',validateInput);
form.addEventListener('submit',handleSubmite);