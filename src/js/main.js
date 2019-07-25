"use strict";

// get elements which use JS 
const btnReload = document.querySelector('.sidebar__btn--reload-js');
const btnSizeDown = document.querySelector('.editor__btn--size-down-js');
const btnSizeUp = document.querySelector('.editor__btn--size-up-js');
const btnBold = document.querySelector('.editor__btn--bold-js');
const btnUnderline = document.querySelector('.editor__btn--underline-js');
const btnItalic = document.querySelector('.editor__btn--italic-js');
const btnSelectFont = document.querySelector('.editor__select--js');
const boxAlert = document.querySelector('.alert-description--js');
const allTextMessages = document.querySelector('.editor__textarea-edit--js');
const btnClear = document.querySelector('.sidebar__btn--remove-js');
const btnLoad = document.querySelector('.editor__btn--load-js');
const btnSave = document.querySelector('.editor__btn--save-js');
const formLable = document.querySelector('.form__label--js');
const footer = document.querySelector('.footer--js');
const switchThemeBlue = document.querySelector('.sidebar__input--blue-js');
const switchThemeOlive = document.querySelector('.sidebar__input--olive-js');
const switchThemeYellow = document.querySelector('.sidebar__input--yellow-js');

// default settings
let size = 16;

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
// load data from array
function loadData() {
    // if message is in the memory load data from localStorage
    if (localStorage.getItem('message')) {
        allTextMessages.value = localStorage.getItem('message');
    }
}
// save data in the localStorage
function saveData(e) {
    e.preventDefault();
    if (allTextMessages.value.trim() !== '') {
        boxAlert.classList.add('alert-description--success');
        // add alert text message
        boxAlert.textContent = "Success - message was saved correctly";
        setTimeout(() => {
            // remove class after 3s
            boxAlert.classList.remove('alert-description--success');
            // clear text content
            boxAlert.textContent = '';
        }, 5000);
        // rember message in the memory of browser
        localStorage.setItem('message', allTextMessages.value);
        allTextMessages.value = '';
    } else {
        //add class when input field is empty
        boxAlert.classList.add('alert-description--error');
        // add alert text message
        boxAlert.textContent = "Error - the message wasn't saved. Fill up the input field and try again.";
        setTimeout(() => {
            // remove class after 3s
            boxAlert.classList.remove('alert-description--error');
            // clear text content
            boxAlert.textContent = '';
        }, 5000);
    }
}
// remove data of localStorage
function clearMemory() {
    localStorage.removeItem('message');
}
// set color blue
function themeSwitcherBlue() {
    if ("input[id='blue'][checked=true]") {
        document.body.classList.toggle('theme-blue');
        document.body.classList.remove('theme-yellow');
        document.body.classList.remove('theme-olive');
    }
}
// set color olive
function themeSwitcherOlive() {
    if ("input[id='olive'][checked=true]") {
        document.body.classList.toggle('theme-olive');
        document.body.classList.remove('theme-yellow');
        document.body.classList.remove('theme-blue');
    }
}
// set color yellow
function themeSwitcherYellow() {
    if ("input[id='yellow'][checked=true]") {
        document.body.classList.toggle('theme-yellow');
        document.body.classList.remove('theme-olive');
        document.body.classList.remove('theme-blue');
    }
}
switchThemeBlue.addEventListener('click', themeSwitcherBlue);
switchThemeOlive.addEventListener('click', themeSwitcherOlive);
switchThemeYellow.addEventListener('click', themeSwitcherYellow);

btnReload.addEventListener('click', reloadServer);
btnSizeDown.addEventListener('click', fontSizeDown);
btnSizeUp.addEventListener('click', fontSizeUp);
btnBold.addEventListener('click', fontStyleBold);
btnUnderline.addEventListener('click', fontStyleUnderline);
btnItalic.addEventListener('click', fontStyleItalic);
btnSelectFont.addEventListener('click', selectFont);
btnLoad.addEventListener('click', loadData);
btnSave.addEventListener('click', saveData);
btnClear.addEventListener('click', clearMemory);


