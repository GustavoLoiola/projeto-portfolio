const projects = {
 dalia: {
    title: "Dalia Modas",
    description:"Ainda em Desenvolvimento.",
    date: "Em Desenvolvimento",
    image: "imagens/prints/cordel.jpeg",
    repo: "https://github.com/GustavoLoiola/projeto-cordel",
    demo: "https://gustavoloiola.github.io/projeto-cordel/"
  },

  mario: {
    title: "Mario Galaxy: O filme",
    description: "Projeto desenvolvido com foco em testar e aprimorar a responsividade e o uso de bibliotecas externas de JavaScript. O site foi construído utilizando HTML, CSS e JavaScript, explorando boas práticas de front-end e organização de layout. Durante o desenvolvimento, foram aplicadas técnicas para garantir uma experiência consistente em diferentes tamanhos de tela, desde dispositivos móveis até desktops. O projeto também serviu como experimento para a implementação de vídeo em background, buscando maior impacto visual sem comprometer a usabilidade. Ao longo do processo, foram exploradas novas abordagens de estilização, interatividade e controle de elementos multimídia, contribuindo para o aprendizado de novas técnicas e para o amadurecimento no desenvolvimento de interfaces responsivas e modernas.",
  date: "Outubro / 2025",
  image: "imagens/prints/mario.jpeg",
  repo: "https://github.com/GustavoLoiola/projeto-mario",
  demo: "https://gustavoloiola.github.io/projeto-mario/",
    date: "Em Desenvolvimento",
    image: "imagens/prints/cordel.jpeg",
    repo: "https://github.com/GustavoLoiola/projeto-cordel",
    demo: "https://gustavoloiola.github.io/projeto-cordel/",
    date: "Outubro / 2025",
    image: "imagens/prints/mario.jpeg",
    repo: "https://github.com/GustavoLoiola/projeto-mario",
    demo: "https://gustavoloiola.github.io/projeto-mario/"
  },

  login: {
    title: "Tela de Login",
    description: "Este projeto de tela de login foi um dos mais importantes para o meu desenvolvimento técnico, pois marcou um período em que aprofundei significativamente meus conhecimentos em CSS Flexbox. Foi através dele que consolidei conceitos essenciais como alinhamento, distribuição de espaço, responsividade e organização de layouts de forma mais eficiente e consistente.Durante o desenvolvimento, utilizei o Flexbox de forma intensiva para estruturar todos os elementos da interface, o que me permitiu compreender melhor seu funcionamento na prática e ganhar segurança na construção de layouts modernos.  Esse projeto teve um papel fundamental na minha evolução, já que grande parte do domínio que tenho hoje sobre Flexbox foi adquirido e refinado a partir desse estudo Além do aprendizado técnico, a tela de login representa um avanço claro na minha maturidade como desenvolvedor front-end, unindo organização visual, atenção aos detalhes e boas práticas de CSS. É um projeto simples em escopo, mas de grande valor no meu processo de aprendizado e crescimento contínuo.",
    date: "Maio / 2025",
    image: "imagens/prints/login.jpeg",
    repo: "https://github.com/GustavoLoiola/projeto-login",
    demo: "https://gustavoloiola.github.io/projeto-login/"
  },

  android: {
    title: "Projeto Android",
    description: "Este projeto Android foi o meu primeiro projeto pessoal desenvolvido com HTML e CSS, e representa um marco muito importante na minha trajetória como desenvolvedor. Foi a primeira vez que transformei estudos em algo concreto, idealizado e construído por mim do início ao fim. Mesmo sendo um projeto inicial, já tive a preocupação de aplicar conceitos básicos de responsividade, ainda que de forma simples e sem o uso das técnicas mais adequadas que conheço hoje, como Flexbox ou abordagens mais profissionais de layout. Esse processo foi essencial para o meu aprendizado, pois me permitiu errar, testar e entender, na prática, os desafios do desenvolvimento front-end. Tenho um carinho especial por esse projeto justamente por ele simbolizar o primeiro passo da minha evolução técnica. Reconheço que há diversos pontos que podem ser melhorados, e encaro isso de forma positiva, como um reflexo claro do quanto evoluí desde então. É um projeto que pretendo revisitar no futuro, aplicando os conhecimentos e boas práticas que adquiri ao longo do tempo, como forma de consolidar essa evolução.",
    date: "Fevereiro / 2025",
    image: "imagens/prints/android.png",
    repo: "https://github.com/GustavoLoiola/projeto-android",
    demo: "https://gustavoloiola.github.io/projeto-android/"
  },

  social: {
    title: "Projeto Redes Sociais",
    description: "O projeto Redes Sociais foi uma experiência especialmente interessante por fugir um pouco do padrão dos meus projetos anteriores, tanto em proposta quanto em implementação. Nele, consegui consolidar de forma prática o uso de iframes, explorando diferentes possibilidades de navegação e interação entre conteúdos. Mesmo sem a utilização de JavaScript, o projeto consegue oferecer uma boa sensação de interatividade, o que reforçou meu entendimento sobre como recursos nativos do HTML e do CSS podem ser bem aproveitados para criar experiências dinâmicas. É um projeto pelo qual tenho bastante apreço justamente por se diferenciar dos demais e por ter contribuído significativamente para ampliar minha visão sobre estrutura e organização de interfaces web.",
    date: "Abril / 2025",
    image: "imagens/prints/social.jpeg",
    repo: "https://github.com/GustavoLoiola/projeto-social",
    demo: "https://gustavoloiola.github.io/projeto-social/"
  },

  cordel: {
    title: "Projeto Cordel",
    description: "O projeto Cordel foi o meu segundo projeto desenvolvido com HTML e CSS e teve um papel importante no meu processo de aprendizado, mesmo sendo um site de estrutura simples. Ele foi fundamental para que eu pudesse estudar e compreender melhor o efeito parallax, especialmente no uso e comportamento de imagens durante a rolagem da página.                                                            Através desse projeto, explorei conceitos visuais e de posicionamento que contribuíram para ampliar minha percepção sobre design e experiência do usuário, entendendo como pequenos detalhes podem enriquecer a apresentação de um site. O Cordel representa um passo importante na minha evolução inicial como desenvolvedor, servindo como base para projetos mais complexos que desenvolvi posteriormente.",
    date: "Março / 2025",
    image: "imagens/prints/cordel.jpeg",
    repo: "https://github.com/GustavoLoiola/projeto-cordel",
    demo: "https://gustavoloiola.github.io/projeto-cordel/"
  },

}


const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

const modalImg = document.querySelector('#project_img img');
const modalTitle = document.getElementById('project_title');
const modalDesc = document.getElementById('project_description');
const modalDate = document.getElementById('project_data');

const repoLink = document.querySelector('#project_links a:nth-child(1)');
const demoLink = document.querySelector('#project_links a:nth-child(2)');

document.querySelectorAll('.project .more a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const projectKey = link.dataset.project;
    const project = projects[projectKey];

    if (!project) return;

    modalImg.src = project.image;
    modalImg.alt = project.title;

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalDate.textContent = project.date;

    repoLink.href = project.repo;
    demoLink.href = project.demo;

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









