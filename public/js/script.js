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
var optionsBottons = document.querySelectorAll('.options-bottons');
var meatTitle = document.querySelector('.meat-title');
var meatNumber = document.querySelector('.meat-number');
var chickenTitle = document.querySelector('.chicken-title');
var chickenNumber = document.querySelector('.chicken-number');
var otherTitle = document.querySelector('.other-title');
var otherNumber = document.querySelector('.other-number');

Array.prototype.forEach.call(capa, function (item, index, array) {
    item.addEventListener('click', function () {
        hiddenCoverItemCalc();
        showOptionAll();
        if (index === 0) {
            showMeat();
        } else if (index === 1) {
            showBeer();
        } else if (index === 2) {
            showPizza();
        }
    });
});

Array.prototype.forEach.call(optionsBottons, function (item, index, array) {
    item.addEventListener('click', function () {
        if (index === 0) {
            showCoverItemCalc();
            hiddenOptionAll();
        } else if (index === 1) {
            showMeat();
        } else if (index === 2) {
            showBeer();
        } else if (index === 3) {
            showPizza();
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
        item.style.zIndex = 9;
    });
}
function showCoverItemCalc() {
    subtitle.style.display = 'flex';
    churrasco.style.display = 'flex';
    bebidas.style.display = 'flex';
    pizza.style.display = 'flex';
}

function hiddenOptionAll() {
    Array.prototype.forEach.call(optionAll, function (item, index, array) {
        item.style.opacity = 0;
        item.style.zIndex = 3;
    });
}

function showMeat() {
    optionTitle.innerHTML = 'Churrasco';
    meatTitle.innerHTML = 'Quantidade de carne:';
    meatNumber.innerHTML = 'XXX g';
    chickenTitle.style.display = 'flex';
    chickenNumber.style.display = 'flex';
    otherTitle.style.display = 'flex';
    otherNumber.style.display = 'flex';
}

function showBeer() {
    optionTitle.innerHTML = 'Bebidas';
    meatTitle.innerHTML = 'Quantidade de refrigerante:';
    meatNumber.innerHTML = 'XXX L';
    chickenTitle.style.display = 'flex';
    chickenTitle.innerHTML = 'Quantidade de cerveja:';
    chickenNumber.style.display = 'flex';
    chickenNumber.innerHTML = 'XXX L';
    otherTitle.style.display = 'none';
    otherNumber.style.display = 'none';
}

function showPizza() {
    optionTitle.innerHTML = 'Pizza';
    meatTitle.innerHTML = 'Quantidade de pizza:';
    meatNumber.innerHTML = 'XXX g';
    chickenTitle.style.display = 'none';
    chickenNumber.style.display = 'none';
    otherTitle.style.display = 'none';
    otherNumber.style.display = 'none';
}
"use strict";