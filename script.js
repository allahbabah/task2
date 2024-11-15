let timer;
let currentSlide = 0;

function showSlide(slideIndex) {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function updateImageSize(imageSize) {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.width = imageSize + 'px';
    });
}

function startSlideshow(delay, imageSize, loop) {
    let slidesCount = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slidesCount;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    updateImageSize(imageSize);

    if (loop) {
        timer = setInterval(showNextSlide, delay * 1000);
    }
}

function stopSlideshow() {
    clearInterval(timer);
}

function applySettings() {
    let delay = parseInt(document.getElementById('delay').value);
    let imageSize = parseInt(document.getElementById('imageSize').value);
    let loop = document.getElementById('loop').checked;

    stopSlideshow();
    startSlideshow(delay, imageSize, loop);
}

applySettings();