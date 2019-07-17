"use strict";
const btnReload = document.querySelector('.message__btn--reload-js');

function reloadServer() {
    location.reload(true);
}

btnReload.addEventListener('click', reloadServer);