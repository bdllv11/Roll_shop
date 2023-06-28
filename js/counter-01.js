// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]'); // Находится минус
const btnPlus = document.querySelector('[data-action="plus"]');  // находится +
const counter = document.querySelector('[data-counter]'); // Находится число которое находится между + и -

// Отслеживаем клик на кнопку минус
btnMinus.addEventListener('click', function () {

    //Проверяем чтобы счетчик был больше 1
    if ( parseInt(counter.innerText) > 1 ) { //Перевод единицы из строчного вида в число (parseInt)
        // К числу которое уже записано изначально отнимается -1 единица
        counter.innerText = --counter.innerText; 
    };
});

// Отслеживаем клик на кнопку плюс
btnPlus.addEventListener('click', function (){
    // К числу которое уже записано изначально прибавляется +1 единица
    counter.innerText = ++counter.innerText;
});