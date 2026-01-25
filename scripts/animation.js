const skills = document.getElementById('skills');

function revealSkills() {
  const windowHeight = window.innerHeight;
  const skillsTop = skills.getBoundingClientRect().top;

  if (skillsTop < windowHeight - 150) {
    skills.classList.add('active');
  }
}

window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);
