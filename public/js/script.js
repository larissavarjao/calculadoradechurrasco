<<<<<<< HEAD
<<<<<<< HEAD
!function(){!function(){function e(){x.style.display="none",p.style.display="none",d.style.display="none",s.style.display="none",u.style.display="none"}function t(){Array.prototype.forEach.call(m,function(e,t,n){e.style.opacity=1,e.style.zIndex=9})}function n(){x.style.display="flex",p.style.display="flex",d.style.display="flex",s.style.display="flex",u.style.display="flex"}function l(){Array.prototype.forEach.call(m,function(e,t,n){e.style.opacity=0,e.style.zIndex=3})}function o(){a("meat"),f.innerHTML="Churrasco",z.innerHTML="Quantidade de carne:",b.innerHTML="XXX g",M.innerHTML="Quantidade de frango:",M.style.display="flex",q.innerHTML="XXX g",q.style.display="flex",H.style.display="flex",S.style.display="flex"}function r(){a("beer"),f.innerHTML="Bebidas",z.innerHTML="Quantidade de refrigerante:",b.innerHTML="XXX L",M.style.display="flex",M.innerHTML="Quantidade de cerveja:",q.style.display="flex",q.innerHTML="XXX L",H.style.display="none",S.style.display="none"}function i(){a("pizza"),f.innerHTML="Pizza",z.innerHTML="Quantidade de pizza:",b.innerHTML="XXX pizzas",M.style.display="none",q.style.display="none",H.style.display="none",S.style.display="none"}function c(e){A=Number(T.value)+Number(h.value/2),"meat"===e?(E=.4*A,b.innerHTML=E+" kg",g=.05*A,q.innerHTML=g+" kg",w=1*A,S.innerHTML=w+" pães de alho"):"beer"===e?(D=1.5*A,b.innerHTML=D+" L",C=4*A,q.innerHTML=C+" latas de 350ml"):"pizza"===e&&(Q=Math.ceil(.5*A),b.innerHTML=Q+" pizzas de 8 fatias")}function a(e){v.style.width="70%",v.style.border="none",k.style.width="70%",k.style.border="none",B.style.width="70%",B.style.border="none","meat"===e?(v.style.width="100%",v.style.borderBottom="solid #B92D00"):"beer"===e?(k.style.width="100%",k.style.borderBottom="solid #B92D00"):"pizza"===e&&(B.style.width="100%",B.style.borderBottom="solid #B92D00")}var y=document.querySelectorAll(".cover-item-calc"),d=document.querySelector(".churrasco"),s=document.querySelector(".bebidas"),u=document.querySelector(".pizza"),p=document.querySelector(".cover-subtitle"),m=document.querySelectorAll(".options-all"),f=document.querySelector(".options-title"),L=document.querySelectorAll(".options-bottons"),z=document.querySelector(".meat-title"),b=document.querySelector(".meat-number"),M=document.querySelector(".chicken-title"),q=document.querySelector(".chicken-number"),H=document.querySelector(".other-title"),S=document.querySelector(".other-number"),T=document.querySelector("#value-adult"),h=document.querySelector("#value-child"),X=document.querySelector(".calculate"),x=document.querySelector(".cover-title"),v=(document.querySelector("#back-icon"),document.querySelector("#meat-icon")),k=document.querySelector("#beer-icon"),B=document.querySelector("#pizza-icon"),A=0,E=0,g=0,w=0,Q=0,D=0,C=0;Array.prototype.forEach.call(y,function(n,l,c){n.addEventListener("click",function(){e(),t(),0===l?o():1===l?r():2===l&&i()})}),Array.prototype.forEach.call(L,function(e,t,c){e.addEventListener("click",function(){0===t?(n(),l()):1===t?o():2===t?r():3===t&&i()})}),X.addEventListener("click",function(){"Churrasco"==f.innerHTML?c("meat"):"Bebidas"==f.innerHTML?c("beer"):"Pizza"==f.innerHTML&&c("pizza")})}()}();
=======
<<<<<<< HEAD
=======
>>>>>>> master
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
=======
!function(){!function(){function e(){x.style.display="none",p.style.display="none",d.style.display="none",s.style.display="none",u.style.display="none"}function t(){Array.prototype.forEach.call(m,function(e,t,n){e.style.opacity=1,e.style.zIndex=9})}function n(){x.style.display="flex",p.style.display="flex",d.style.display="flex",s.style.display="flex",u.style.display="flex"}function l(){Array.prototype.forEach.call(m,function(e,t,n){e.style.opacity=0,e.style.zIndex=3})}function o(){a("meat"),f.innerHTML="Churrasco",z.innerHTML="Quantidade de carne:",b.innerHTML="XXX g",M.innerHTML="Quantidade de frango:",M.style.display="flex",q.innerHTML="XXX g",q.style.display="flex",H.style.display="flex",S.style.display="flex"}function r(){a("beer"),f.innerHTML="Bebidas",z.innerHTML="Quantidade de refrigerante:",b.innerHTML="XXX L",M.style.display="flex",M.innerHTML="Quantidade de cerveja:",q.style.display="flex",q.innerHTML="XXX L",H.style.display="none",S.style.display="none"}function i(){a("pizza"),f.innerHTML="Pizza",z.innerHTML="Quantidade de pizza:",b.innerHTML="XXX pizzas",M.style.display="none",q.style.display="none",H.style.display="none",S.style.display="none"}function c(e){A=Number(T.value)+Number(h.value/2),"meat"===e?(E=.4*A,b.innerHTML=E+" kg",g=.05*A,q.innerHTML=g+" kg",w=1*A,S.innerHTML=w+" pães de alho"):"beer"===e?(D=1.5*A,b.innerHTML=D+" L",C=4*A,q.innerHTML=C+" latas de 350ml"):"pizza"===e&&(Q=Math.ceil(.5*A),b.innerHTML=Q+" pizzas de 8 fatias")}function a(e){v.style.width="70%",v.style.border="none",k.style.width="70%",k.style.border="none",B.style.width="70%",B.style.border="none","meat"===e?(v.style.width="100%",v.style.borderBottom="solid #B92D00"):"beer"===e?(k.style.width="100%",k.style.borderBottom="solid #B92D00"):"pizza"===e&&(B.style.width="100%",B.style.borderBottom="solid #B92D00")}var y=document.querySelectorAll(".cover-item-calc"),d=document.querySelector(".churrasco"),s=document.querySelector(".bebidas"),u=document.querySelector(".pizza"),p=document.querySelector(".cover-subtitle"),m=document.querySelectorAll(".options-all"),f=document.querySelector(".options-title"),L=document.querySelectorAll(".options-bottons"),z=document.querySelector(".meat-title"),b=document.querySelector(".meat-number"),M=document.querySelector(".chicken-title"),q=document.querySelector(".chicken-number"),H=document.querySelector(".other-title"),S=document.querySelector(".other-number"),T=document.querySelector("#value-adult"),h=document.querySelector("#value-child"),X=document.querySelector(".calculate"),x=document.querySelector(".cover-title"),v=(document.querySelector("#back-icon"),document.querySelector("#meat-icon")),k=document.querySelector("#beer-icon"),B=document.querySelector("#pizza-icon"),A=0,E=0,g=0,w=0,Q=0,D=0,C=0;Array.prototype.forEach.call(y,function(n,l,c){n.addEventListener("click",function(){e(),t(),0===l?o():1===l?r():2===l&&i()})}),Array.prototype.forEach.call(L,function(e,t,c){e.addEventListener("click",function(){0===t?(n(),l()):1===t?o():2===t?r():3===t&&i()})}),X.addEventListener("click",function(){"Churrasco"==f.innerHTML?c("meat"):"Bebidas"==f.innerHTML?c("beer"):"Pizza"==f.innerHTML&&c("pizza")})}()}();
>>>>>>> Pendente resolver flebox auto-prefixer
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
