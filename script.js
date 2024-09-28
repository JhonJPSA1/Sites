let currentSlide = 0;
let slideInterval;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].classList.remove('active');

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Volta para o último slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Volta para o primeiro slide
    }

    slides[currentSlide].classList.add('active');
    const offset = -currentSlide * 100; // Calcula o deslocamento
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Função para iniciar o autoplay
function startSlideInterval() {
    slideInterval = setInterval(() => {
        changeSlide(1); // Muda para o próximo slide
    }, 3000); // Troca a imagem a cada 3 segundos
}

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});

// Inicia o autoplay ao carregar a página
window.onload = startSlideInterval;

