  // Menu mobile
const btnMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

btnMobile.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  btnMobile.classList.toggle('ativo');
});

// Marca link ativo 
const links = document.querySelectorAll('.menu a');
const urlAtual = window.location.pathname;

links.forEach(link => {
  if (urlAtual.includes(link.getAttribute('href'))) {
    link.classList.add('ativo');
  }
});

  // Fecha clicando fora
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) &&!btnMobile.contains(e.target)) {
      menu.classList.remove('ativo');
      btnMobile.classList.remove('ativo');
    }
  });

  // Carrossel
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function mudarSlide(n) {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  // Auto-play + swipe no mobile
  setInterval(() => mudarSlide(1), 5000);

  // Swipe pro carrossel no mobile
  let startX = 0;
  const carrossel = document.querySelector('.carrossel');

  carrossel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  carrossel.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) mudarSlide(1); // Swipe esquerda
    if (endX - startX > 50) mudarSlide(-1); // Swipe direita
  });