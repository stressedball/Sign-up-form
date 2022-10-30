'use strict';

const introduction = document.getElementById('introduction');
const banner = document.getElementById('banner'); 
const forms = document.getElementById('form');
const inputBoxes = document.querySelectorAll('input');
const submit = document.querySelector('button');
let inputTarget;

document.addEventListener('input', whichInput);
window.addEventListener('load', first);
submit.addEventListener('click', buttonSubmit);

function first(){
    let introBottom = introduction.getBoundingClientRect().bottom;
    banner.style.top = introBottom + 'px';
}


function whichInput(e) {

    inputTarget = document.querySelector(`input#${e.target.id} + span`);

    if (e.target.id === 'firstName' || e.target.id === 'lastName') {
        if (!e.target.value.match(/^[A-Za-z]+$/)) {
            inputTarget.classList.remove('typeAgain')
            inputTarget.classList.add('message');
        } else {
            inputTarget.classList.remove('message')
            inputTarget.classList.add('typeAgain');
        }
        return;
    }

    if (e.target.id === 'email') {
        if (!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            inputTarget.classList.remove('typeAgain')
            inputTarget.classList.add('message');
        } else {
            inputTarget.classList.remove('message')
            inputTarget.classList.add('typeAgain');
        }
    }

    if (e.target.id === 'phoneNumber') {
        if (!e.target.value.match(/[0-9]/)) {
            inputTarget.classList.remove('typeAgain')
            inputTarget.classList.add('message');
        } else {
            inputTarget.classList.remove('message')
            inputTarget.classList.add('typeAgain');
        }
    }


}

function buttonSubmit() {
    
    let allInputs = document.querySelectorAll('input');
    for (let eachInput of allInputs) {
        if (eachInput.value.length === 0) {
            alert('Please fill all informations');
            return;
        }
    }

    let password = document.querySelector('input#password');
    let confirmPassword = document.querySelector('input#validPassword'); 
    if (password.value !== confirmPassword.value) {
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        alert('Passwords don\'t match');
        return;
    } else {
        password.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');
    }

    let firstName = document.querySelector('input#firstName');
    let lastName = document.querySelector('input#lastName');
    let email = document.querySelector('input#email');
    let phoneNumber = document.querySelector('input#phoneNumber');
    alert('Thanks for subscribing!\n');
    alert(`Greetings ${firstName.value} ${lastName.value}.\nYour email adress is ${email.value} and phone number is ${phoneNumber.value}`);
}