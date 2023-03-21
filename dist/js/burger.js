const btnBurger = document.querySelector('#burger');
const body = document.querySelector('#header');
btnBurger.addEventListener('click', function () {
    body.classList.toggle('menu-open');
});