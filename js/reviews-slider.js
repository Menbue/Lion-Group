var swiper = new Swiper(".reviews__swiper", {
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
      767: {
          slidesPerView: 2
      }
  }
});