const skills = document.getElementById('skills');

function revealSkills() {
  const windowHeight = window.innerHeight;
  const skillsTop = skills.getBoundingClientRect().top;

  
  if (skillsTop < windowHeight - 150) {
    skills.classList.add('active');
  } else {
    skills.classList.remove('active');
  }
}

window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);







const span = document.getElementById('hi')
const textoCompleto = span.textContent
const letras = textoCompleto.split('')

span.textContent = '' // limpa o texto antes de começar

let index = 0

const typingEffect = setInterval(() => {
  span.textContent += letras[index]
  index++

  if (index === letras.length) {
    clearInterval(typingEffect)
  }
}, 90)
