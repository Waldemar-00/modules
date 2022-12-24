

window.addEventListener('DOMContentLoaded', () => 
sliderStart(...selectors));
function sliderStart(prevSelector, currentSlector, totalSelector, nextSelector, slideSelector, classShow, classHide) {
    const sliderPrev = document.querySelector(prevSelector);
    const current = document.querySelector(currentSlector);
    const total = document.querySelector(totalSelector);
    const sliderNext = document.querySelector(nextSelector);
    const offerSlides = document.querySelectorAll(slideSelector);
    
    slider(sliderPrev, current, total, sliderNext, offerSlides);
    function slider(sliderPrev, current, total, sliderNext, offerSlides) {
    offerSlides.forEach((slide, index) => {
        if(index === 2) slide.classList.add(classShow.slice(1));
        else slide.classList.add(classHide.slice(1));
    });
    sliderPrev.addEventListener('click', () => {
        if(current.innerHTML == 1)return;
        else {
            current.innerHTML -= 1;
            offerSlides.forEach((slide, index) => {
                if(current.innerHTML == index + 1) {
                    slide.classList.add(classShow.slice(1));
                    slide.classList.remove(classHide.slice(1));
                } else {
                    slide.classList.add(classHide.slice(1));
                    slide.classList.remove(classShow.slice(1));
                }
            });
        }
    });
    sliderNext.addEventListener('click', () => {
    if(+current.innerHTML == total.innerHTML)return;
    else {
        current.innerHTML = +current.innerHTML + 1;
        offerSlides.forEach((slide, index) => {
            if(current.innerHTML == index + 1) {
                slide.classList.add(classShow.slice(1));
                slide.classList.remove(classHide.slice(1));
                } else {
                    slide.classList.add(classHide.slice(1));
                    slide.classList.remove(classShow.slice(1));
                    }
        });
    }
});
}
}
