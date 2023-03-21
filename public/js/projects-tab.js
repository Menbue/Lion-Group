const projectsHeaders = document.querySelectorAll('[data-projects]');
const contentBoxes = document.querySelectorAll('[data-projects-content]');

projectsHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.projects);
        contentBox.classList.remove('hidden');

        projectsHeaders.forEach(function (item) {
            item.classList.remove('active');
        });
        
        item.classList.add('active');
    })
})