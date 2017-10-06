"use strict";
"use strict";
'use strict';

var capa = document.querySelectorAll('.cover-item-calc');
var churrasco = document.querySelector('.churrasco');
var bebidas = document.querySelector('.bebidas');
var pizza = document.querySelector('.pizza');
var subtitle = document.querySelector('.cover-subtitle');
var optionAll = document.querySelectorAll('.options-all');
var optionTitle = document.querySelector('.options-title');

Array.prototype.forEach.call(capa, function (item, index, array) {
    item.addEventListener('click', function () {
        hiddenCoverItemCalc();
        showOptionAll();
        if (index == 0) {
            showMeat();
        } else if (index === 1) {
            aparecendoBebida();
        } else if (index === 2) {
            aparecendoPizza();
        }
    });
});

function hiddenCoverItemCalc() {
    subtitle.style.display = 'none';
    churrasco.style.display = 'none';
    bebidas.style.display = 'none';
    pizza.style.display = 'none';
}

function showOptionAll() {
    Array.prototype.forEach.call(optionAll, function (item, index, array) {
        item.style.opacity = 1;
    });
}

function showMeat() {
    optionTitle = 'Churrasco';
}
"use strict";