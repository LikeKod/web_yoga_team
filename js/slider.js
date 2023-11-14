// находим блок слайдер по id
const slider = document.querySelector("#slider");
const moveLeft = document.querySelector("#left")
const moveRight = document.querySelector("#right")
const firstSlide = slider.querySelector(".slider__content")

console.log(firstSlide)

let firstSlideWidth = firstSlide.clientWidth + 58;

console.log(firstSlideWidth)

moveLeft.addEventListener("click", () => {
    console.log("left")
    slider.scrollLeft -= firstSlideWidth;
})

moveRight.addEventListener("click", () => {
    console.log("right")
    slider.scrollLeft += firstSlideWidth;
})

// преобразуем в массив дочерние элементы
const sliderItems = Array.from(slider.children);

const dragging = (e) => {
    slider.scrollLeft = e.pageX;
}

// slider.addEventListener("mousemove", dragging);




// проходим в цикле слайды
// sliderItems.forEach((slide, index) => {
//     console.log(slide);

//     // Уменьшим все слайды, второго
//     if (index != 1) {
//         slide.classList.add("slider__content--small");
//     }

//     // Задаем интексы слайдам
//     slide.dataset.index = index;

//     // Клик по сладу
//     slide.addEventListener("click", function () {
//         // уменьшаем текущий слад
//         slide.classList.add("slider__content--small");

//         // расчитываем индекс следующего слайда
//         let nextSlideIndex =index + 1 === sliderItems.length ? 0 : index + 1;

//         // находим следующий слайд
//         const nextSlide = slider.querySelector(
//             `[data-index="${nextSlideIndex}"]`
//         );

//         // отображаем следующий слайд
//         nextSlide.classList.remove("slider__content--small");
//     });
// });
