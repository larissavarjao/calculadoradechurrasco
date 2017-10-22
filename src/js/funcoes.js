(function(){
    function app(){
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
        var backIcon = document.querySelector('#back-icon');
        var meatIcon = document.querySelector('#meat-icon');
        var beerIcon = document.querySelector('#beer-icon');
        var pizzaIcon = document.querySelector('#pizza-icon');
        var optionAnswer = document.querySelector('.options-answer');
        var total = 0;
        var carne = 0;
        var frango = 0;
        var aperetivo = 0;
        var pizzaQtd = 0;
        var refrigerante = 0;
        var cerveja = 0;

        Array.prototype.forEach.call(capa, function(item, index, array) {
            item.addEventListener('click', function(){
                
                hiddenCoverItemCalc();
                showOptionAll();
                if(index === 0 ){
                    showMeat();
                } else if(index === 1){
                    showBeer();
                } else if (index === 2){
                    showPizza();
                }
            })
        })

        Array.prototype.forEach.call(optionsBottons, function(item, index, array){
            item.addEventListener('click', function(){
                if(index === 0){
                    showCoverItemCalc();
                    hiddenOptionAll();
                } else if(index === 1){
                    showMeat();
                } else if (index === 2){
                    showBeer();
                } else if(index === 3){
                    showPizza();
                }
            })
        })

        calculateID.addEventListener('click', function(){
            if(optionTitle.innerHTML == 'Churrasco'){
                calculate('meat');
            } else if(optionTitle.innerHTML == 'Bebidas'){
                calculate('beer');
            } else if(optionTitle.innerHTML == 'Pizza'){
                calculate('pizza');
            }
        })

        function hiddenCoverItemCalc(){
            pageTitle.style.display = 'none';
            subtitle.style.display = 'none';
            churrasco.style.display = 'none';
            bebidas.style.display = 'none';
            pizza.style.display = 'none';
        }

        function showOptionAll(){
            Array.prototype.forEach.call(optionAll, function(item, index, array){
                item.style.opacity = 1;
                item.style.zIndex = 9;
            });
        }
        function showCoverItemCalc(){
            pageTitle.style.display = 'flex';
            subtitle.style.display = 'flex';
            churrasco.style.display = 'flex';
            bebidas.style.display = 'flex';
            pizza.style.display = 'flex';
        }

        function hiddenOptionAll(){
            Array.prototype.forEach.call(optionAll, function(item, index, array){
                item.style.opacity = 0;
                item.style.zIndex = 3;
            });
        }

        function showMeat(){
            changeIcon('meat');
            optionTitle.innerHTML = 'Churrasco';
            meatTitle.innerHTML = 'Quantidade de carne:';
            meatNumber.innerHTML = 'XXX g';
            chickenTitle.innerHTML = 'Quantidade de frango:';
            chickenTitle.style.display = 'flex';
            chickenNumber.innerHTML = 'XXX g';
            chickenNumber.style.display = 'flex';
            otherTitle.style.display = 'flex';
            otherNumber.style.display = 'flex';
            optionAnswer.style.height = '50vh';
        }
        
        function showBeer(){
            changeIcon('beer');
            optionTitle.innerHTML = 'Bebidas';
            meatTitle.innerHTML = 'Quantidade de refrigerante:';
            meatNumber.innerHTML = 'XXX L';
            chickenTitle.style.display = 'flex';
            chickenTitle.innerHTML = 'Quantidade de cerveja:';
            chickenNumber.style.display = 'flex';
            chickenNumber.innerHTML = 'XXX L';
            otherTitle.style.display = 'none';
            otherNumber.style.display = 'none';
            optionAnswer.style.height = '28vh';
        }
        
        function showPizza(){
            changeIcon('pizza');
            optionTitle.innerHTML = 'Pizza';
            meatTitle.innerHTML = 'Quantidade de pizza:';
            meatNumber.innerHTML = 'XXX pizzas';
            chickenTitle.style.display = 'none';
            chickenNumber.style.display = 'none';
            otherTitle.style.display = 'none';
            otherNumber.style.display = 'none';
            optionAnswer.style.height = '15vh';
        }
        
        function calculate(option){
            total = Number(valueAdult.value) + Number(valueChild.value/2);
            if(option === 'meat'){
                carne = String(total * 0.4);
                meatNumber.innerHTML = carne.match(/\d.\d\d/) + ' kg';
                frango = String(total * 0.05);
                chickenNumber.innerHTML = frango.match(/\d.\d\d/) + ' kg';
                aperetivo = total * 1;
                otherNumber.innerHTML = aperetivo + ' pães de alho';
            } else if(option === 'beer'){
                refrigerante = total * 1.5;
                meatNumber.innerHTML = refrigerante + ' L';
                cerveja = total * 4;
                chickenNumber.innerHTML = cerveja + ' latas de 350ml';
            } else if(option === 'pizza'){
                pizzaQtd = Math.ceil(total * 0.5);
                meatNumber.innerHTML = pizzaQtd + ' pizzas de 8 fatias';
            }
        }
        function changeIcon(icon){
            meatIcon.style.width = '70%';
            meatIcon.style.border = 'none';
            beerIcon.style.width = '70%';
            beerIcon.style.border = 'none';
            pizzaIcon.style.width = '70%';
            pizzaIcon.style.border = 'none';
            if(icon === 'meat'){
                meatIcon.style.width = '100%';
                meatIcon.style.borderBottom = 'solid #B92D00';
            } else if(icon === 'beer'){
                beerIcon.style.width = '100%';
                beerIcon.style.borderBottom = 'solid #B92D00';
            } else if(icon === 'pizza'){
                pizzaIcon.style.width = '100%';
                pizzaIcon.style.borderBottom = 'solid #B92D00';
            }

        }                                       
    }
    app();
}());