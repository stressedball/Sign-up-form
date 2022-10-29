'use strict';

const introduction = document.getElementById('introduction');
const banner = document.getElementById('banner'); 
const forms = document.getElementById('form');
const inputBoxes = document.querySelectorAll('input');
const submit = document.querySelector('button');
let inputTarget;

document.addEventListener('keydown', checkInput);
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
            inputTarget.style.visibility = 'visible';
            return;
        } else {
            inputTarget.style.visibility = 'hidden';
            return;
        }
    }


}

function checkInput(input) {

}

function buttonSubmit() {
    console.log('ok')
}