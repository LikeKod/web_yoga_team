new Swiper('.image-slider', {
  loop: true,

  loopedSlides: 5,

  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  slidesPerView: 1,
  centeredSlides: true,
});