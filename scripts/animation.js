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






function typingText(element, speed = 80) {
  return new Promise(resolve => {
    const text = element.textContent.trim()
    element.textContent = ''
    element.style.visibility = 'visible'

    let index = 0

    const typing = setInterval(() => {
      element.textContent += text[index]
      index++

      if (index === text.length) {
        clearInterval(typing)
        resolve()
      }
    }, speed)
  })
}

async function startTyping() {
  const hi = document.getElementById('hi')
  const name = document.getElementById('name')
  const role = document.querySelector('[data-i18n="role"]')

  await typingText(hi, 90)
  await typingText(name, 90)
  await typingText(role, 90)
}

startTyping()
