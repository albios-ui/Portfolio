let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    moveSlide(1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
    moveSlide(-1);
});

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}
