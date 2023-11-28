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


let offset = 0;
const sliderList = document.querySelector('.traning__slider-list');

document.querySelector('.next').addEventListener('click', function() {
  offset += 900 ;
  if (offset > 2700) {
    offset = 0;
  }
  sliderList.style.left = -offset +'px';
});
document.querySelector('.prev').addEventListener('click', function() {
  offset -= 900 ;
  if (offset < 0) {
    offset = 2700;
  }
  sliderList.style.left = -offset +'px';
});


$(document).ready(function() {
    $('.header_burger').click(function() {
    $('.header_burger,.header_nav-list').toggleClass('active');;
  });

});