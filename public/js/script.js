<<<<<<< HEAD
function hiddenCoverItemCalc(){pageTitle.style.display="none",subtitle.style.display="none",churrasco.style.display="none",bebidas.style.display="none",pizza.style.display="none"}function showOptionAll(){Array.prototype.forEach.call(optionAll,function(e,t,l){e.style.opacity=1,e.style.zIndex=9})}function showCoverItemCalc(){pageTitle.style.display="flex",subtitle.style.display="flex",churrasco.style.display="flex",bebidas.style.display="flex",pizza.style.display="flex"}function hiddenOptionAll(){Array.prototype.forEach.call(optionAll,function(e,t,l){e.style.opacity=0,e.style.zIndex=3})}function showMeat(){optionTitle.innerHTML="Churrasco",meatTitle.innerHTML="Quantidade de carne:",meatNumber.innerHTML="XXX g",chickenTitle.innerHTML="Quantidade de frango:",chickenTitle.style.display="flex",chickenNumber.style.display="flex",otherTitle.style.display="flex",otherNumber.style.display="flex"}function showBeer(){optionTitle.innerHTML="Bebidas",meatTitle.innerHTML="Quantidade de refrigerante:",meatNumber.innerHTML="XXX L",chickenTitle.style.display="flex",chickenTitle.innerHTML="Quantidade de cerveja:",chickenNumber.innerHTML="XXX g",chickenNumber.style.display="flex",chickenNumber.innerHTML="XXX L",otherTitle.style.display="none",otherNumber.style.display="none"}function showPizza(){optionTitle.innerHTML="Pizza",meatTitle.innerHTML="Quantidade de pizza:",meatNumber.innerHTML="XXX pizzas",chickenTitle.style.display="none",chickenNumber.style.display="none",otherTitle.style.display="none",otherNumber.style.display="none"}function calculate(e){total=Number(valueAdult.value)+Number(valueChild.value/2),"meat"===e?(carne=.4*total,meatNumber.innerHTML=carne+" kg",frango=.05*total,chickenNumber.innerHTML=frango+" kg",aperetivo=1*total,otherNumber.innerHTML=aperetivo+" pães de alho"):"beer"===e?(refrigerante=1.5*total,meatNumber.innerHTML=refrigerante+" L",cerveja=4*total,chickenNumber.innerHTML=cerveja+" latas"):"pizza"===e&&(pizzaQtd=Math.ceil(.5*total),meatNumber.innerHTML=pizzaQtd+" pizzas")}var capa=document.querySelectorAll(".cover-item-calc"),churrasco=document.querySelector(".churrasco"),bebidas=document.querySelector(".bebidas"),pizza=document.querySelector(".pizza"),subtitle=document.querySelector(".cover-subtitle"),optionAll=document.querySelectorAll(".options-all"),optionTitle=document.querySelector(".options-title"),optionsBottons=document.querySelectorAll(".options-bottons"),meatTitle=document.querySelector(".meat-title"),meatNumber=document.querySelector(".meat-number"),chickenTitle=document.querySelector(".chicken-title"),chickenNumber=document.querySelector(".chicken-number"),otherTitle=document.querySelector(".other-title"),otherNumber=document.querySelector(".other-number"),valueAdult=document.querySelector("#value-adult"),valueChild=document.querySelector("#value-child"),calculateID=document.querySelector(".calculate"),pageTitle=document.querySelector(".cover-title"),total=0,carne=0,frango=0,aperetivo=0,pizzaQtd=0,refrigerante=0,cerveja=0;Array.prototype.forEach.call(capa,function(e,t,l){e.addEventListener("click",function(){hiddenCoverItemCalc(),showOptionAll(),0===t?showMeat():1===t?showBeer():2===t&&showPizza()})}),Array.prototype.forEach.call(optionsBottons,function(e,t,l){e.addEventListener("click",function(){0===t?(showCoverItemCalc(),hiddenOptionAll()):1===t?showMeat():2===t?showBeer():3===t&&showPizza()})}),calculateID.addEventListener("click",function(){"Churrasco"==optionTitle.innerHTML?calculate("meat"):"Bebidas"==optionTitle.innerHTML?calculate("beer"):"Pizza"==optionTitle.innerHTML&&calculate("pizza")});var carne=0,frango=0,aperetivo=0,pizzaQtd=0,refrigerante=0,cerveja=0;
=======
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
var valueAdult = document.querySelector('#value-adult');
var valueChild = document.querySelector('#value-child');
var calculateID = document.querySelector('.calculate');
var pageTitle = document.querySelector('.cover-title');
var total = 0;
var carne = 0;
var frango = 0;
var aperetivo = 0;
var pizzaQtd = 0;
var refrigerante = 0;
var cerveja = 0;

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

calculateID.addEventListener('click', function () {
    if (optionTitle.innerHTML == 'Churrasco') {
        calculate('meat');
    } else if (optionTitle.innerHTML == 'Bebidas') {
        calculate('beer');
    } else if (optionTitle.innerHTML == 'Pizza') {
        calculate('pizza');
    }
});

function hiddenCoverItemCalc() {
    pageTitle.style.display = 'none';
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
    pageTitle.style.display = 'flex';
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
    chickenTitle.innerHTML = 'Quantidade de frango:';
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
    chickenNumber.innerHTML = 'XXX g';
    chickenNumber.style.display = 'flex';
    chickenNumber.innerHTML = 'XXX L';
    otherTitle.style.display = 'none';
    otherNumber.style.display = 'none';
}

function showPizza() {
    optionTitle.innerHTML = 'Pizza';
    meatTitle.innerHTML = 'Quantidade de pizza:';
    meatNumber.innerHTML = 'XXX pizzas';
    chickenTitle.style.display = 'none';
    chickenNumber.style.display = 'none';
    otherTitle.style.display = 'none';
    otherNumber.style.display = 'none';
}

var carne = 0;
var frango = 0;
var aperetivo = 0;
var pizzaQtd = 0;
var refrigerante = 0;
var cerveja = 0;

function calculate(option) {
    total = Number(valueAdult.value) + Number(valueChild.value / 2);
    if (option === 'meat') {
        carne = total * 0.4;
        meatNumber.innerHTML = carne + ' kg';
        frango = total * 0.05;
        chickenNumber.innerHTML = frango + ' kg';
        aperetivo = total * 1;
        otherNumber.innerHTML = aperetivo + ' pães de alho';
    } else if (option === 'beer') {
        refrigerante = total * 1.5;
        meatNumber.innerHTML = refrigerante + ' L';
        cerveja = total * 4;
        chickenNumber.innerHTML = cerveja + ' latas';
    } else if (option === 'pizza') {
        pizzaQtd = Math.ceil(total * 0.5);
        meatNumber.innerHTML = pizzaQtd + ' pizzas';
    }
}
"use strict";
>>>>>>> Site versao 1.0
