const header = document.querySelector('header');
const hamburguer = document.getElementById('hamburguer');
const menu = document.querySelector('.menu_principal');
const links = menu.querySelectorAll('a');

hamburguer.addEventListener('click', () => {
  const aberto = header.classList.toggle('menu-open');
  hamburguer.textContent = aberto ? 'close' : 'menu';

  // trava/destrava scroll
  document.body.classList.toggle('no-scroll', aberto);
});

// fecha o menu ao clicar em qualquer link
links.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    hamburguer.textContent = 'menu';
    document.body.classList.remove('no-scroll');
  });
});
