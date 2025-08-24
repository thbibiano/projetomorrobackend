"use strict";
const courses = [
  {
    name: "Programação C",
    description:
      "Curso avançado voltado para o domínio da linguagem C, com foco em estruturas de dados, ponteiros, alocação dinâmica de memória e desenvolvimento de sistemas embarcados.",
    teacher: "João Carlos Mendes",
    init_date: "2025-07-07",
    end_date: "2025-08-15",
    init_hour: "07",
    end_hour: "12",
    total_hours: 250,
    is_active: true,
  },
  {
    name: "Introdução à Inteligência Artificial",
    description:
      "Exploração dos fundamentos da IA, incluindo algoritmos de aprendizado de máquina, redes neurais, lógica fuzzy e aplicações práticas em visão computacional e processamento de linguagem natural.",
    teacher: "Mariana Lopes",
    init_date: "2025-09-01",
    end_date: "2025-11-30",
    init_hour: "08",
    end_hour: "11",
    total_hours: 180,
    is_active: true,
  },
  {
    name: "Desenvolvimento Web Full Stack",
    description:
      "Curso completo que abrange front-end com HTML, CSS, JavaScript e React, além de back-end com Node.js, Express e bancos de dados relacionais e não relacionais.",
    teacher: "Carlos Henrique Silva",
    init_date: "2025-08-10",
    end_date: "2025-12-10",
    init_hour: "13",
    end_hour: "17",
    total_hours: 300,
    is_active: true,
  },
  {
    name: "Banco de Dados Relacional",
    description:
      "Estudo aprofundado sobre modelagem de dados, normalização, linguagem SQL, administração de sistemas como MySQL e PostgreSQL, e práticas de segurança e backup.",
    teacher: "Fernanda Ribeiro",
    init_date: "2025-07-15",
    end_date: "2025-10-15",
    init_hour: "09",
    end_hour: "12",
    total_hours: 200,
    is_active: true,
  },
  {
    name: "Segurança da Informação",
    description:
      "Curso voltado para práticas de proteção de dados, criptografia, análise de vulnerabilidades, políticas de segurança e conformidade com LGPD e GDPR.",
    teacher: "Eduardo Tavares",
    init_date: "2025-08-01",
    end_date: "2025-10-30",
    init_hour: "18",
    end_hour: "21",
    total_hours: 180,
    is_active: true,
  },
  {
    name: "Design de Interfaces Digitais",
    description:
      "Foco em usabilidade, acessibilidade, prototipagem com Figma, princípios de design visual e testes de experiência do usuário (UX).",
    teacher: "Larissa Duarte",
    init_date: "2025-09-05",
    end_date: "2025-12-05",
    init_hour: "14",
    end_hour: "17",
    total_hours: 150,
    is_active: true,
  },
  {
    name: "Arquitetura de Computadores",
    description:
      "Estudo das estruturas internas de computadores, incluindo processadores, memória, barramentos, e conceitos de paralelismo e desempenho.",
    teacher: "Rodrigo Fonseca",
    init_date: "2025-07-20",
    end_date: "2025-10-20",
    init_hour: "10",
    end_hour: "13",
    total_hours: 210,
    is_active: true,
  },
  {
    name: "Algoritmos e Estruturas de Dados",
    description:
      "Curso essencial para programadores, abordando listas, pilhas, filas, árvores, grafos e técnicas de ordenação e busca com análise de complexidade.",
    teacher: "Isabela Martins",
    init_date: "2025-08-15",
    end_date: "2025-11-15",
    init_hour: "07",
    end_hour: "10",
    is_active: true,
    total_hours: 180,
  },
  {
    name: "Machine Learning com Python",
    description:
      "Aplicações práticas de aprendizado de máquina usando bibliotecas como Scikit-learn, Pandas e TensorFlow, com projetos reais e análise de dados.",
    teacher: "Thiago Leal",
    init_date: "2025-09-10",
    end_date: "2025-12-10",
    init_hour: "15",
    end_hour: "18",
    total_hours: 200,
    is_active: true,
  },
  {
    name: "Gestão de Projetos de TI",
    description:
      "Introdução às metodologias ágeis (Scrum, Kanban), ciclo de vida de projetos, ferramentas como Jira e Trello, e práticas de liderança e comunicação.",
    teacher: "Camila Nunes",
    init_date: "2025-07-25",
    end_date: "2025-10-25",
    init_hour: "08",
    end_hour: "11",
    total_hours: 160,
    is_active: true,
  },
  {
    name: "Computação em Nuvem",
    description:
      "Conceitos de cloud computing, serviços AWS, Azure e Google Cloud, com foco em infraestrutura como serviço (IaaS) e plataforma como serviço (PaaS).",
    teacher: "Bruno Teixeira",
    init_date: "2025-08-05",
    end_date: "2025-11-05",
    init_hour: "16",
    end_hour: "19",
    total_hours: 190,
    is_active: true,
  },
  {
    name: "Introdução à Robótica",
    description:
      "Curso prático com montagem de robôs, sensores, atuadores, programação com Arduino e fundamentos de automação.",
    teacher: "Natália Cunha",
    init_date: "2025-09-01",
    end_date: "2025-12-01",
    init_hour: "13",
    end_hour: "16",
    total_hours: 170,
    is_active: true,
  },
  {
    name: "Desenvolvimento de Aplicativos Móveis",
    description:
      "Criação de apps para Android e iOS usando Flutter e React Native, com foco em design responsivo, integração com APIs e publicação nas lojas.",
    teacher: "Rafael Almeida",
    init_date: "2025-08-20",
    end_date: "2025-11-20",
    init_hour: "09",
    end_hour: "12",
    total_hours: 200,
    is_active: true,
  },
  {
    name: "Ética e Privacidade Digital",
    description:
      "Discussão sobre os impactos sociais da tecnologia, privacidade de dados, ética na inteligência artificial e responsabilidade digital.",
    teacher: "Patrícia Nogueira",
    init_date: "2025-07-30",
    end_date: "2025-10-30",
    init_hour: "17",
    end_hour: "20",
    total_hours: 140,
    is_active: true,
  },
  {
    name: "Introdução à Ciência de Dados",
    description:
      "Fundamentos de estatística, análise exploratória, visualização de dados com Python e uso de ferramentas como Jupyter, Matplotlib e Seaborn.",
    teacher: "Diego Ramos",
    init_date: "2025-08-25",
    end_date: "2025-11-25",
    init_hour: "10",
    end_hour: "13",
    total_hours: 220,
    is_active: true,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("course", courses, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("course", null, {});
  },
};
