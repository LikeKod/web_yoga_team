new Swiper('.image-slider', {
  initialSlide: 2,

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
$(document).ready(function() {
    $('.header_burger').click(function() {
    $('.header_burger,.header_nav-list').toggleClass('active');;
  });

});
