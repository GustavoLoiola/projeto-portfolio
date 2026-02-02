const flag = document.getElementById('flag');
const menuFlag = document.getElementById('menu_flag');
const flags = menuFlag.querySelectorAll('img');

// ================== MENU ==================
flag.addEventListener('click', (e) => {
  e.stopPropagation();
  menuFlag.classList.toggle('active');
});

document.addEventListener('click', () => {
  menuFlag.classList.remove('active');
});

// TRADUÇÕES
const translations = {
  pt: {
    title: 'Gustavo Loiola | Desenvolvedor Full Stack',
    portfolio: 'Portfólio',
    welcome: 'Bem-vindo ao meu Portfólio!',
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contatos',
    hello: 'Olá, eu sou o',
    role: 'Desenvolvedor full-stack',
    contact_btn: 'Entrar em contato',
    download_cv: 'Download CV',
    about_me_title: 'Sobre mim',
    about_me_text:
      'Desenvolvedor Fullstack em formação e estudante de Ciência da Computação, possuo experiência com JavaScript (Node.js), HTML, CSS, Tailwind CSS, Python e MySQL, com foco na criação de aplicações web modernas, funcionais e bem estruturadas. Estou em constante evolução, sempre buscando aprender novas tecnologias e boas práticas, e procuro uma oportunidade para aplicar meus conhecimentos, crescer profissionalmente e contribuir com projetos reais.',
    all_projects: 'Todos os projetos',
    dalia:'Dalia Modas',
    login_project: 'Tela de Login',
    android_project: 'Projeto Android',
    social_project: 'Projeto Redes Sociais',
    cordel_project: 'Projeto Cordel',
    date_den_2025: "Em Desenvolvimento",
    date_oct_2025: 'Outubro 2025',
    date_may_2025: "Maio 2025",
    date_apr_2025: "Abril 2025",
    date_mar_2025: "Março 2025",
    date_feb_2025: "Fevereiro 2025",
    see_more: 'ver mais',
    contacts: 'Contatos',
    phone: 'Telefone',
    view_repository:'Ver repositório',
    view_project:'Ver projeto'
  },

  en: {
    title: 'Gustavo Loiola | Full Stack Developer',
    portfolio: 'Portfolio',
    welcome: 'Welcome to my Portfolio!',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    hello: 'Hi, I am',
    role: 'Full Stack Developer',
    contact_btn: 'Contact me',
    download_cv: 'Download Resume',
    about_me_title: 'About me',
    about_me_text:
      'Fullstack developer in training and Computer Science student, I have experience with JavaScript (Node.js), HTML, CSS, Tailwind CSS, Python, and MySQL, focusing on creating modern, functional, and well-structured web applications. I am constantly evolving, always seeking to learn new technologies and best practices, and I am looking for an opportunity to apply my knowledge, grow professionally, and contribute to real projects.',
    all_projects: 'All projects',
    dalia:'Dalia Fashion',
    login_project: 'Login Screen',
    android_project: 'Android Project',
    social_project: 'Social Media Project',
    cordel_project: 'Cordel Project',
    date_den_2025: "In Development",
    date_oct_2025: 'October 2025',
    date_may_2025: "May 2025",
    date_apr_2025: "April 2025",
    date_mar_2025: "March 2025",
    date_feb_2025: "February 2025",
    see_more: 'see more',
    contacts: 'Contacts',
    phone: 'Phone',
    view_repository:'view repository',
    view_project:' view project'
  }
};

// ================== FUNÇÃO ==================
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.title = translations[lang].title;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  flag.src =
    lang === 'en'
      ? 'imagens/Flag_of_the_United_States.svg'
      : 'imagens/Flag_of_Brazil.svg.png';

  localStorage.setItem('language', lang);
  menuFlag.classList.remove('active');
}

// ================== CLIQUE NAS BANDEIRAS ==================
flags.forEach(img => {
  img.addEventListener('click', () => {
    const lang = img.src.includes('United_States') ? 'en' : 'pt';
    setLanguage(lang);
  });
});

if (window.updateOpenModal) {
  window.updateOpenModal();
}
