window.addEventListener('DOMContentLoaded', () => slipySlider(...selectors)); 
function slipySlider(prevSelector, currentSlector, totalSelector, nextSelector, slideSelector, wrapper, inner, offerSlider, carouselIndicators, classDot) {
    const sliderPrev = document.querySelector(prevSelector);
    const current = document.querySelector(currentSlector);
    const total = document.querySelector(totalSelector);
    const sliderNext = document.querySelector(nextSelector);
    const offerSlides = document.querySelectorAll(slideSelector);
    const slidersWrapper = document.querySelector(wrapper);
    const slidersInner = document.querySelector(inner);
    const width = window.getComputedStyle(slidersWrapper).width;

    const parentSlides = document.querySelector(offerSlider);
    const dots = [];
    
    slidersInner.style.width = 100 * offerSlides.length + '%';
    slidersInner.style.display = 'flex';
    slidersInner.style.transition = 'all 0.6s';
    offerSlides.forEach(slide => { slide.style.width = width; });

    parentSlides.style.position ='relative';

    slidersWrapper.style.overflow = 'hidden';
    const wrapperDots = document.createElement('ol');
    wrapperDots.classList.add(carouselIndicators.slice(1));
    parentSlides.append(wrapperDots);

    for(let i = 0; i < offerSlides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add(classDot.slice(1));
        if(i === 2)dot.style.opacity = 1;
        dots.push(dot);
        wrapperDots.append(dot);
    }


    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[current.innerHTML.slice(1) - 1].style.opacity = 1;
    }

    let offset = 0;
    function increment() {
        if(current.innerHTML < total.innerHTML)current.innerHTML = '0' + (+current.innerHTML + 1);
        else current.innerHTML = '01';
        dotsOpacity();
    }
    function decrement() {
        if(current.innerHTML > 1)current.innerHTML = '0' + (current.innerHTML - 1);
        else current.innerHTML = total.innerHTML;
        dotsOpacity();
    }
    function replaceToNumber(str) {
        return +str.replace(/\D/g, '');
    }
    function next() {
        if(offset == replaceToNumber(width) * (offerSlides.length - 1)) offset = 0;
        else offset += replaceToNumber(width);
        slidersInner.style.transform = `translateX(-${offset}px)`;
        increment();
        }
    function prev() {
        if(offset == 0) offset += replaceToNumber(width) * (offerSlides.length - 1);
        else offset -= replaceToNumber(width);
        slidersInner.style.transform = `translateX(-${offset}px)`;
        decrement();
        }
    sliderNext.addEventListener('click', next);
    sliderPrev.addEventListener('click', prev);

    dots.forEach(dot => { 
        dot.addEventListener('click', (e) => {
            const valueAttribute = e.target.getAttribute('data-slide-to');
            let index;
            switch(+valueAttribute) {
                case 3: index = 0;
                    break;
                case 4: index = 1;
                    break;
                case 1: index = 2; 
                    break;
                case 2: index = 3;
            }
            offset = replaceToNumber(width) * index;
            slidersInner.style.transform = `translateX(-${offset}px)`;
            current.innerHTML = '0' + valueAttribute;
            dots.forEach(dot => dot.style.opacity = 0.5);
            dots[valueAttribute - 1].style.opacity = 1;
        });
    });
});