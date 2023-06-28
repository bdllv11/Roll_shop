// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
  // Объявляем переменную для счетчика (если не обьяить то она будет существовать только в своих функиях и выдавать ошибку)
// Объявляем переменную для счетчика
  let counter;

  // Проверяем клик строго по плюс или минус (если это не написать то при клике на другом месте на странице будет выдваватся ошибка в консоле)
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    // Находим обертку счётчика (всю линию где + число и -)
    const counterWrapper = event.target.closest('.counter-wrapper');
    // Находим див с числом из счетчика чтобы менять его значение при клике
    counter = counterWrapper.querySelector('[data-counter]');
  }

  // Проверяем является ли элемент по которому был совершен коик кнопкой плюс
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент по которому был совершен коик кнопкой минус
  if (event.target.dataset.action === 'minus') {
    //Проверяем чтобы счетчик был больше 1
    // Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      //Перевод единицы из строчного вида в число (parseInt)
      // К числу которое уже записано изначально отнимается -1 единица
      counter.innerText = --counter.innerText;
      // Проверка на товар который находится в корзине
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
      console.log('in cart!!!');
      //Удаляем товар из корзины
      event.target.closest('.cart-item').remove();

      // Отображение статуса товара в корзине (корзина пуста и удаление при добавлении товара)
      toggleCartStatus();

      // Пересчет товаров в корзине
      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на + и на - именно внутри корзины
  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    // Пересчет товаров в корзине
    calcCartPriceAndDelivery();
  }
});
