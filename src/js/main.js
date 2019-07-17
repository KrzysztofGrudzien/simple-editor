// "use strict";
const btnReload = document.querySelector('.message__btn--reload-js');
const btnAdd = document.querySelector('.form__btn--js');
const textMessage = document.querySelector('.form__textarea--js');

const messages = [];

function addMessage(e) {
    e.preventDefault();
    messages.push(textMessage.value);
    textMessage.value = "";
    console.log(messages.length);
}

console.log(messages)

function reloadServer() {
    location.reload(true);
}

btnReload.addEventListener('click', reloadServer);
btnAdd.addEventListener('click', addMessage);