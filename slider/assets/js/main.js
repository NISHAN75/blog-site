(function ($) {
   $(document).ready(function () {
      let swiper = new Swiper(".bl-slider-wrapper", {
         slidesPerView: 5,
         spaceBetween: 10,
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            // when window width is >= 320px
            1200: {
              slidesPerView: 5,
              spaceBetween: 10
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 10
            },
          }
       });
   });
})(jQuery);

