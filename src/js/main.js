"use strict";

// get elements which use JS 
const btnReload = document.querySelector('.message__btn--reload-js');
const btnAdd = document.querySelector('.form__btn--js');
const btnSizeDown = document.querySelector('.editor__btn--size-down-js');
const btnSizeUp = document.querySelector('.editor__btn--size-up-js');
const btnBold = document.querySelector('.editor__btn--bold-js');
const btnUnderline = document.querySelector('.editor__btn--underline-js');
const btnItalic = document.querySelector('.editor__btn--italic-js');
const btnSelectFont = document.querySelector('.editor__select--js');
const boxAlert = document.querySelector('.alert-description--js');
const settingsCounter = document.querySelector('.messages__settings-input--js');
const counterMessages = document.querySelector('.messages__counter--js');
const textMessage = document.querySelector('.form__textarea--js');
const allTextMessages = document.querySelector('.editor__textarea-edit--js');
const btnDelete = document.querySelector('.editor__btn--delete-js');
const btnClear = document.querySelector('.message__btn--remove-js');
const btnLoad = document.querySelector('.editor__btn--load-js');
const btnSave = document.querySelector('.editor__btn--save-js');
const switchThemeBlue = document.querySelector('.sidebar__input--blue-js');
const switchThemeOlive = document.querySelector('.sidebar__input--olive-js');
const switchThemeYellow = document.querySelector('.sidebar__input--yellow-js');

// default settings
const messages = [];
let size = 16;

btnReload.setAttribute("disabled", true);

// functions which perform individual tasks
function addMessage(e) {
    e.preventDefault();
    if (textMessage.value.trim() !== '') {
        // add messages to the array
        messages.push(textMessage.value);
        // clear value of textarea field
        textMessage.value = '';
        // how many messages were added to the array
        counterMessages.textContent = messages.length;
        // add class when message was added correct
        boxAlert.classList.add('alert-description--success');
        // add alert text message
        boxAlert.textContent = "Success - message was sent correctly";
        setTimeout(() => {
            // remove class after 3s
            boxAlert.classList.remove('alert-description--success');
            // clear text content
            boxAlert.textContent = '';
        }, 5000);
    } else {
        // add class when input field is empty
        boxAlert.classList.add('alert-description--error');
        // add alert text message
        boxAlert.textContent = "Error - the message wasn't sent. Fill up the input field and try again.";
        setTimeout(() => {
            // remove class after 3s
            boxAlert.classList.remove('alert-description--error');
            // clear text content
            boxAlert.textContent = '';
        }, 5000);
    }
    // remove attribute when number of messages is greater then 0
    if (messages.length > 0) {
        btnReload.removeAttribute("disabled");
    }

    // deactivate button when the number of messages equal length of messages array
    if (settingsCounter.value == messages.length) {
        btnAdd.setAttribute("disabled", true);
    }
}

// font size is of one size less
function fontSizeDown() {
    allTextMessages.style.fontSize = `${size - 1}px`;
    size = size - 1;
}
// font size is of one size greater
function fontSizeUp() {
    allTextMessages.style.fontSize = `${size + 1}px`;
    size = size + 1;
}
// thickness of font
function fontStyleBold() {
    allTextMessages.classList.toggle('bold');
}
// text messages is underline
function fontStyleUnderline() {
    allTextMessages.classList.toggle('underline');
}
// text messages has style italic
function fontStyleItalic() {
    allTextMessages.classList.toggle('italic');
}
// select font-family
function selectFont() {
    const selector = document.getElementById('select');
    const value = selector[selector.selectedIndex].value;
    allTextMessages.style.fontFamily = value;
}
// reload page
function reloadServer() {
    location.reload(true);
}
// delete content of textarea
function deleteContent() {
    allTextMessages.value = '';
}
// load data from array
function loadData() {
    allTextMessages.value = messages.join("\n\n");
}
// save data in the localStorage
function saveData() {
    if (localStorage.getItem('message')) {
        allTextMessages.value = localStorage.getItem('message');
    }
    localStorage.setItem('message', allTextMessages.value);
}
// remove data of localStorage
function clearMemory() {
    localStorage.removeItem('message');
}

function themeSwitcherBlue() {
    if ("input[id='blue'][checked=true]") {
        const formLable = document.querySelector('.form__label');
        formLable.style.backgroundColor = "blue";
    }
}

function themeSwitcherOlive() {
    if ("input[id='olive'][checked=true]") {
        const formLable = document.querySelector('.form__label');
        formLable.style.backgroundColor = "olive";
    }
}

function themeSwitcherYellow() {
    if ("input[id='yellow'][checked=true]") {
        const formLable = document.querySelector('.form__label');
        formLable.style.backgroundColor = "yellow";
    }
}
switchThemeBlue.addEventListener('click', themeSwitcherBlue);
switchThemeOlive.addEventListener('click', themeSwitcherOlive);
switchThemeYellow.addEventListener('click', themeSwitcherYellow);

btnReload.addEventListener('click', reloadServer);
btnAdd.addEventListener('click', addMessage);
btnDelete.addEventListener('click', deleteContent);
btnSizeDown.addEventListener('click', fontSizeDown);
btnSizeUp.addEventListener('click', fontSizeUp);
btnBold.addEventListener('click', fontStyleBold);
btnUnderline.addEventListener('click', fontStyleUnderline);
btnItalic.addEventListener('click', fontStyleItalic);
btnSelectFont.addEventListener('click', selectFont);
btnLoad.addEventListener('click', loadData);
btnSave.addEventListener('click', saveData);
btnClear.addEventListener('click', clearMemory);


