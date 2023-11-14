const slider = document.querySelector(".slider");
const wrapper = document.querySelector(".slider__wrapper");
const slides = document.querySelectorAll(".slide");
const playBtn = document.querySelector(".play-button");
const navigations = document.querySelectorAll(".slider__navigation")

let activeOrder = 0;

init();

function init() {
    // проходим в цикле слайды
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        // присваиваем дата атрибут с индексом
        slide.dataset.order = i;
        slide.style.transform = "translateX(-50%)";
        slide.addEventListener('click', clickHandler)
    }

    for (const navigation of navigations) {
        navigation.addEventListener("click", navHandler);
    }


    // выбираем активным средний слайд
    activeOrder = Math.floor(slides.length / 2);
    console.log(activeOrder)

    update();
}

function update() {
    const {width} = wrapper.getBoundingClientRect(); // ширина контейнера
    const img = document.querySelector(".slide").getBoundingClientRect(); // ширина слайда
    const gap = 60; // отступ между слайдами

    for (let i = 0; i < slides.length; i++){

       

        const leftSlide = document.querySelector(
            `.slide[data-order = "${activeOrder - i}"]`
        );

        if (leftSlide && i != 0) {
            leftSlide.classList.add('slide--small')
        } else if (leftSlide && i == 0) {
            leftSlide.classList.remove('slide--small')
        }

        // смещение влево от центрального
        if (leftSlide) {
            leftSlide.style.left=`${width/2 - i * (img.width + gap)}px`
        }

        const rightSlide = document.querySelector(
            `.slide[data-order = "${activeOrder + i}"]`
        );

        if (rightSlide != null && i !== 0) {
            rightSlide.classList.add('slide--small')
        } else if (rightSlide && i == 0) {
            rightSlide.classList.remove('slide--small')
        }

        // смещение вправо от центрального 
        if (rightSlide) {
            rightSlide.style.left=`${width/2 + i * (img.width + gap)}px`
        }
    }

    
}

function clickHandler () {
    const order = parseInt(this.dataset.order, 10);
    activeOrder = order;
    update();
}


function navHandler (e) {
    e.preventDefault();
    const {dir} = this.dataset;

    if (dir === 'prev') {
        activeOrder = Math.max(0, activeOrder - 1);
    } else if (dir === 'next')  {
        activeOrder = Math.min(slides.length, activeOrder + 1);
    }
    update();
}



