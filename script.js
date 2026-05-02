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