const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 1500; // 2 segundos

// Função que atualiza o carousel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula a posição do próximo slide
  track.style.transform = `translateX(${offset}%)`;
}

// Função para passar para o próximo slide
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Volta ao primeiro slide após o último
  updateCarousel();
}

// Função para passar para o slide anterior
function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Evento de clique nos botões de navegação
nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

// Passa automaticamente para o próximo slide a cada 2 segundos
setInterval(goToNextSlide, intervalTime);