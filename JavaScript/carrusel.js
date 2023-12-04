let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const slideWidth = document.querySelector('.carousel-item').clientWidth;
    carouselInner.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}