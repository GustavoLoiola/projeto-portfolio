const toggle = document.querySelector('.toggle input');
const html = document.documentElement;

// Carrega tema salvo
const temaSalvo = localStorage.getItem('theme');
if (temaSalvo) {
  html.setAttribute('data-theme', temaSalvo);
  toggle.checked = temaSalvo === 'light';
}

// Alterna tema
toggle.addEventListener('change', () => {
  const novoTema = toggle.checked ? 'light' : 'dark';
  html.setAttribute('data-theme', novoTema);
  localStorage.setItem('theme', novoTema);
});