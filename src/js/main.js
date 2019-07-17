// "use strict";
const btnReload = document.querySelector('.message__btn--reload-js');
const btnAdd = document.querySelector('.form__btn--js');
const btnSizeDown = document.querySelector('.editor__btn--size-down-js');
const btnSizeUp = document.querySelector('.editor__btn--size-up-js');
const textMessage = document.querySelector('.form__textarea--js');
const allTextMessages = document.querySelector('.editor__textarea-edit--js');

const messages = [];
let size = 16;

function addMessage(e) {
    e.preventDefault();
    messages.push(textMessage.value);
    textMessage.value = "";
    console.log(messages.length);
}
console.log(messages);

function fontSizeDown() {
    allTextMessages.style.fontSize = `${size - 1}px`;
    size = size - 1;
}

function fontSizeUp() {
    allTextMessages.style.fontSize = `${size + 1}px`;
    size = size + 1;
}

function reloadServer() {
    location.reload(true);
}

btnReload.addEventListener('click', reloadServer);
btnAdd.addEventListener('click', addMessage);
btnSizeDown.addEventListener('click', fontSizeDown);
btnSizeUp.addEventListener('click', fontSizeUp);
