"use strict";

// get elements which use JS 
const btnReload = document.querySelector('.message__btn--reload-js');
const btnAdd = document.querySelector('.form__btn--js');
const btnSizeDown = document.querySelector('.editor__btn--size-down-js');
const btnSizeUp = document.querySelector('.editor__btn--size-up-js');
const btnBold = document.querySelector('.editor__btn--bold-js');
const btnUnderline = document.querySelector('.editor__btn--underline-js');
const btnItalic = document.querySelector('.editor__btn--italic-js');
const settingsCounter = document.querySelector('.messages__settings-input--js');
const counterMessages = document.querySelector('.messages__counter--js');
const textMessage = document.querySelector('.form__textarea--js');
const allTextMessages = document.querySelector('.editor__textarea-edit--js');

// default settings
const messages = [];
let size = 16;

btnReload.setAttribute("disabled", true);

// functions which perform individual tasks
function addMessage(e) {
    e.preventDefault();
    if (textMessage.value === '') {
        setTimeout(function () { alert("Empty filed") }, 2000);
    } else {
        messages.push(textMessage.value);
        textMessage.value = '';
        counterMessages.textContent = messages.length;
    }

    if (messages.length > 0) {
        btnReload.removeAttribute("disabled");
    }
}

function fontSizeDown() {
    allTextMessages.style.fontSize = `${size - 1}px`;
    size = size - 1;
}

function fontSizeUp() {
    allTextMessages.style.fontSize = `${size + 1}px`;
    size = size + 1;
}

function fontStyleBold() {
    allTextMessages.classList.toggle('bold');
}

function fontStyleUnderline() {
    allTextMessages.classList.toggle('underline');
}

function fontStyleItalic() {
    allTextMessages.classList.toggle('italic');
}

function reloadServer() {
    location.reload(true);
}

btnReload.addEventListener('click', reloadServer);
btnAdd.addEventListener('click', addMessage);
btnSizeDown.addEventListener('click', fontSizeDown);
btnSizeUp.addEventListener('click', fontSizeUp);
btnBold.addEventListener('click', fontStyleBold);
btnUnderline.addEventListener('click', fontStyleUnderline);
btnItalic.addEventListener('click', fontStyleItalic);
