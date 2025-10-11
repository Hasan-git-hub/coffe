
document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.burger-box');
    const dropdown = document.querySelector('.drop-down');
    const closeBtn = document.querySelector('.drop-down-x');

        // Открытие меню при клике на бургер
    burgerBtn.addEventListener('click', function () {
        dropdown.classList.add('show');
        document.body.style.overflow = 'hidden'; // блокируем прокрутку
    });

        // Закрытие меню при клике на крестик
     closeBtn.addEventListener('click', function () {
        dropdown.classList.remove('show');
        document.body.style.overflow = 'scroll'; // возвращаем прокрутку
    });
     
});
