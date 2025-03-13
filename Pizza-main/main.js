let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Atualiza o índice do slide atual com o valor de step
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    const carousel = document.querySelector('.carousel');
    // Movendo o carousel com base no índice atual
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para rodar o carousel automaticamente
function autoMoveSlide() {
    moveSlide(1); // Move para o próximo slide
}

// Inicializa a rotação automática a cada 3 segundos (3000ms)
setInterval(autoMoveSlide, 3000); // 3 segundos de intervalo

// Ajuste para garantir que o carousel funcione ao clicar nos botões de navegação
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
