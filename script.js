let slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    // Name animation for index.html
    const nameContainer = document.getElementById('nameContainer');
    if (nameContainer) {
        const name = "Katelynn";
        name.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.className = 'letter';
            nameContainer.appendChild(span);
        });

        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('visible');
            }, 200 * (index + 1));
        });
    }

    // Initialize slideshow if slideshow-container exists
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        showSlides(slideIndex);
    }
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; // Exit if no slides found

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}