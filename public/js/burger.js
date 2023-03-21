const btnBurger = document.querySelector('#burger');
const body = document.querySelector('#body');
btnBurger.addEventListener('click', function () {
    body.classList.toggle('menu-open');
});