const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
}

// Next button
document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.length; // quay về đầu khi hết
    showSlide(index);
});

// Prev button
document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length; // quay về cuối khi lùi
    showSlide(index);
});