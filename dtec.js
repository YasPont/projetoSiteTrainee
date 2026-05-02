
// Menu mobile
const btnMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

if (btnMobile) {
  btnMobile.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    btnMobile.classList.toggle('ativo');
  });

  // Fecha menu ao clicar no link
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('ativo');
      btnMobile.classList.remove('ativo');
    });
  });

  // Fecha menu clicando fora
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btnMobile.contains(e.target)) {
      menu.classList.remove('ativo');
      btnMobile.classList.remove('ativo');
    }
  });
}