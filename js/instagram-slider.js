var swiper = new Swiper(".instagram__swiper", {
    slidesPerView: "1.5",
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        767: {
            slidesPerView: 4,
        }
    }
});