const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.project .more a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// clicar fora fecha
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
