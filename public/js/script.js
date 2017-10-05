"use strict";
'use strict';

function aparecendoChurrasco() {
    bebidas.style.display = 'none';
    pizza.style.display = 'none';
}
'use strict';

var capa = document.querySelectorAll('.cover-item-calc');
var churrasco = document.querySelector('.churrasco');
var bebidas = document.querySelector('.bebidas');
var pizza = document.querySelector('#pizza');

console.log(capa);
Array.prototype.forEach.call(capa, function (item, index, array) {
    item.addEventListener('click', function () {
        console.log(index);
        if (index == 0) {
            aparecendoChurrasco();
            console.log('Cliquei churras!');
        } else if (index === 1) {
            aparecendoBebida();
            console.log('Cliquei bebidas!');
        } else if (index === 2) {
            aparecendoPizza();
            console.log('Cliquei pizza!');
        }
    });
});

function aparecendoChurrasco() {
    bebidas.style.display = 'none';
    pizza.style.display = 'none';
}
"use strict";