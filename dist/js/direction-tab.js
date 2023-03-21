const cardHeaders = document.querySelectorAll('[data-card]');
const contentBoxes = document.querySelectorAll('[data-card-content]');

cardHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.card);
        contentBox.classList.remove('hidden');

        cardHeaders.forEach(function (item) {
            item.classList.remove('active');
        });
        
        item.classList.add('active');
    })
})