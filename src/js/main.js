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
const btnDelete = document.querySelector('.editor__btn--delete-js');
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
// delete content of textarea
function deleteContent() {
    allTextMessages.value = '';
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
        formLable.style.backgroundColor = "#2D9CDB";
        formLable.style.color = "#ffffff";
        btnAdd.style.backgroundColor = "#2D9CDB";
        btnAdd.style.color = "#ffffff";
        formLable.style.color = "#ffffff";
        counterMessages.style.backgroundColor = "#2D9CDB";
        counterMessages.style.color = "#ffffff";
        btnBold.style.color = "#2D9CDB";
        btnClear.style.backgroundColor = "#2D9CDB";
        btnClear.style.color = "#ffffff";
        btnDelete.style.backgroundColor = "#2D9CDB";
        btnDelete.style.color = "#ffffff";
        btnItalic.style.color = "#2D9CDB";
        btnUnderline.style.color = "#2D9CDB";
        btnClear.style.backgroundColor = "#2D9CDB";
        btnClear.style.color = "#ffffff";
        btnLoad.style.backgroundColor = "#2D9CDB";
        btnLoad.style.color = "#ffffff";
        btnReload.style.backgroundColor = "#2D9CDB";
        btnReload.style.color = "#ffffff";
        btnSave.style.backgroundColor = "#2D9CDB";
        btnSave.style.color = "#ffffff";
        btnSelectFont.style.color = "#2D9CDB";
        btnSizeDown.style.color = "#2D9CDB";
        btnSizeUp.style.color = "#2D9CDB";
        footer.style.backgroundColor = "#2D9CDB";
        footer.style.color = "#ffffff";
        headerSettings.style.color = "#2D9CDB";
        headerCleaning.style.color = "#2D9CDB";
    }
}
// set color olive
function themeSwitcherOlive() {
    if ("input[id='olive'][checked=true]") {
        formLable.style.backgroundColor = "#7BAE53";
        formLable.style.color = "#ffffff";
        btnAdd.style.backgroundColor = "#7BAE53";
        btnAdd.style.color = "#ffffff";
        counterMessages.style.backgroundColor = "#7BAE53";
        counterMessages.style.color = "#ffffff";
        btnBold.style.color = "#7BAE53";
        btnClear.style.backgroundColor = "#7BAE53";
        btnClear.style.color = "#ffffff";
        btnDelete.style.backgroundColor = "#7BAE53";
        btnDelete.style.color = "#ffffff";
        btnItalic.style.color = "#7BAE53";
        btnUnderline.style.color = "#7BAE53";
        btnClear.style.backgroundColor = "#7BAE53";
        btnClear.style.color = "#ffffff";
        btnLoad.style.backgroundColor = "#7BAE53";
        btnLoad.style.color = "#ffffff";
        btnReload.style.backgroundColor = "#7BAE53";
        btnReload.style.color = "#ffffff";
        btnSave.style.backgroundColor = "#7BAE53";
        btnSave.style.color = "#ffffff";
        btnSelectFont.style.color = "#7BAE53";
        btnSizeDown.style.color = "#7BAE53";
        btnSizeUp.style.color = "#7BAE53";
        footer.style.backgroundColor = "#7BAE53";
        footer.style.color = "#ffffff";
        headerSettings.style.color = "#7BAE53";
        headerCleaning.style.color = "#7BAE53";
    }
}
// set color yellow
function themeSwitcherYellow() {
    if ("input[id='yellow'][checked=true]") {
        formLable.style.backgroundColor = "#F2C94C";
        formLable.style.color = "#000000";
        btnAdd.style.backgroundColor = "#F2C94C";
        btnAdd.style.color = "#000000";
        counterMessages.style.backgroundColor = "#F2C94C";
        counterMessages.style.color = "#000000";
        btnBold.style.color = "#F2C94C";
        btnClear.style.backgroundColor = "#F2C94C";
        btnClear.style.color = "#000000";
        btnDelete.style.backgroundColor = "#F2C94C";
        btnDelete.style.color = "#000000";
        btnItalic.style.color = "#F2C94C";
        btnUnderline.style.color = "#F2C94C";
        btnClear.style.backgroundColor = "#F2C94C";
        btnClear.style.color = "#000000";
        btnLoad.style.backgroundColor = "#F2C94C";
        btnLoad.style.color = "#000000";
        btnReload.style.backgroundColor = "#F2C94C";
        btnReload.style.color = "#000000";
        btnSave.style.backgroundColor = "#F2C94C";
        btnSave.style.color = "#000000";
        btnSelectFont.style.color = "#F2C94C";
        btnSizeDown.style.color = "#F2C94C";
        btnSizeUp.style.color = "#F2C94C";
        footer.style.backgroundColor = "#F2C94C";
        footer.style.color = "#000000";
        headerSettings.style.color = "#F2C94C";
        headerCleaning.style.color = "#F2C94C";
    }
}
switchThemeBlue.addEventListener('click', themeSwitcherBlue);
switchThemeOlive.addEventListener('click', themeSwitcherOlive);
switchThemeYellow.addEventListener('click', themeSwitcherYellow);

btnReload.addEventListener('click', reloadServer);
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


