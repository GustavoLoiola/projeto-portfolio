/* ===============================
   SISTEMA DE IDIOMAS
================================ */

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contatos"
    },
    hero: {
      title: "Olá, eu sou o Gustavo Loiola!",
      subtitle: "Desenvolvedor Full Stack"
    },
    sections: {
      about: "Sobre mim",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contatos"
    }
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      title: "Hi, I'm Gustavo Loiola!",
      subtitle: "Full Stack Developer"
    },
    sections: {
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    }
  }
};

// Aplica idioma
function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.dataset.i18n.split('.');
    let text = translations[lang];

    keys.forEach(k => {
      if (text) text = text[k];
    });

    if (text) el.textContent = text;
  });

  updateCurrentFlag(lang);
  localStorage.setItem('language', lang);
}

// Idioma inicial
const savedLang = localStorage.getItem('language') || 'pt';
setLanguage(savedLang);


/* ===============================
   SELETOR DE IDIOMA (FLAGS)
================================ */

const languageSelector = document.querySelector('.language-selector');
const currentLangBtn = languageSelector.querySelector('.language-current');
const languageOptions = languageSelector.querySelector('.language-options');

// Abrir / fechar dropdown
currentLangBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  languageOptions.classList.toggle('active');
});

// Clicar em uma bandeira
languageOptions.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
    languageOptions.classList.remove('active');
  });
});

// Fechar ao clicar fora
document.addEventListener('click', () => {
  languageOptions.classList.remove('active');
});

// Atualiza bandeira principal
function updateCurrentFlag(lang) {
  const img = currentLangBtn.querySelector('img');
  img.src =
    lang === 'pt'
      ? 'imagens/Flag_of_Brazil.svg.png'
      : 'imagens/Flag_of_the_United_States.svg';
  img.alt = lang === 'pt' ? 'Português' : 'English';
}
