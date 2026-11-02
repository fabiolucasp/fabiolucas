import { Profile, Experience, Education, Project } from './types';

export const PROFILE: Profile = {
  name: "Fábio Lucas Pereira Ferreira",
  title: "Desenvolvedor Flutter | Full-Stack",
  phone: "(62) 9 9874-8910",
  email: "fabio@fabiolucas.com",
  location: "Goiânia, GO",
  summary: "Desenvolvedor Flutter e Full-Stack com sólida experiência na criação de aplicativos mobile escaláveis e arquiteturas em nuvem de alta disponibilidade. Especialista em Flutter, Dart, Firebase, Cloud Functions, Google Maps Platform / Navigation SDK, APIs em tempo real e automações.",
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/fábio-lucas-pereira-ferreira-71988b35/", icon: "linkedin" },
    { platform: "GitHub", url: "https://github.com/fabiolucasp", icon: "github" },
    { platform: "Instagram", url: "https://www.instagram.com/fabiolucasdev/", icon: "instagram" },
    { platform: "Stack Overflow", url: "https://stackoverflow.com/users/15344910/fábio-lucas", icon: "code" }
  ]
};

export const SKILLS = [
  { name: "Flutter", icon: "px-device-mobile" },
  { name: "Dart", icon: "px-code" },
  { name: "Firebase", icon: "px-zap" },
  { name: "Google Cloud Platform", icon: "px-cloud" },
  { name: "Node.js", icon: "px-server" },
  { name: "PHP", icon: "px-code" },
  { name: "Python", icon: "px-code" },
  { name: "Java", icon: "px-code" },
  { name: "JavaScript", icon: "px-code" },
  { name: "TypeScript", icon: "px-script" },
  { name: "React", icon: "px-monitor" },
  { name: "WhatsApp Business API", icon: "px-chat" },
  { name: "Pagar.me API", icon: "px-credit-card" },
  { name: "DocuSign API", icon: "px-note" },
  { name: "Google Maps API", icon: "px-map" },
  { name: "Geolocalização (GPS)", icon: "px-map-pin-line" },
  { name: "API's Tempo Real", icon: "px-time" },
  { name: "SQL/NoSQL", icon: "px-database" },
  { name: "Material Design", icon: "px-palette" },
  { name: "Cupertino Design", icon: "px-apple" },
  { name: "Fluent Design", icon: "px-monitor" },
  { name: "Design System", icon: "px-layout-grid" }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Fábio Lucas Dev",
    role: "Fundador e Desenvolvedor Flutter / Full-Stack",
    period: "2021 – Atual",
    description: "Desenvolvimento de ecossistemas mobile e web de ponta a ponta, arquiteturas escaláveis em nuvem com Firebase e GCP, engenharia reversa de APIs, automação de fluxos corporativos e design systems modernos.",
    projects: [
      { name: "AutoParts Guide (Clientes & Lojistas)", details: "Dois aplicativos Flutter sobre o Design System Figma New-Style-APG, checkout de planos (Cartão até 12x / Pix), chat em tempo real, controle de despachos e módulo My Car para manutenções veiculares preventivas." },
      { name: "GynMove & GynMove Motorista", details: "Aplicativos de mobilidade urbana em Flutter com prova de vida biométrica em 7 etapas, roteamento dinâmico, telemetria veicular contínua e rastreamento em tempo real." },
      { name: "Bicho Mimado", details: "Super app de Pet Care com mais de 100 telas em Flutter, motor exclusivo de TaxiDog com navegação turn-by-turn nativa via Google Navigation SDK e agendamento veterinário." },
      { name: "Pineapple Pay", details: "Ecossistema multi-perfil de pagamentos digitais e cashback para comissões de formatura, eventos e rede de comércios parceiros." },
      { name: "VoltFinance & Multas IPVA", details: "Soluções mobile Flutter voltadas para inteligência financeira com telemetria automotiva e auditoria de débitos veiculares e trânsito." },
      { name: "44GYN & CFC Focus", details: "Plataformas digitais para comércio atacadista da Região da 44 e modernização da jornada de aprendizagem para centros de formação de condutores." }
    ]
  },
  {
    id: "2",
    company: "Machado & Pereira",
    role: "Analista de TI & Desenvolvedor Full-Stack",
    period: "2021 – 2022",
    description: "Desenvolvimento de soluções tecnológicas corporativas de alta disponibilidade para área jurídica, arquitetura em nuvem (GCP/Firebase), integração com APIs globais de pagamento e assinaturas digitais, além de automação avançada de mensageria.",
    projects: [
      { name: "Projeto ConPer", details: "Aplicativo mobile em Flutter (arquitetura Provider) e backend serverless na Google Cloud Platform com Cloud Functions (TypeScript/Node.js) e Cloud Firestore. Integração completa com DocuSign API para assinaturas de contratos com validade jurídica e Pagar.me para split de pagamentos e checkout seguro." },
      { name: "Automação de Atendimento WhatsApp Business", details: "Arquitetura de microserviços e webhooks escaláveis com mais de 110.000 linhas de código desenvolvidas em Cloud Functions e Cloud Firestore, conectada à API oficial do WhatsApp Business Cloud API. Sistema com 10 níveis de navegação e autoatendimento, triagem inteligente de processos e roteamento direto para advogados especialistas." }
    ]
  },
  {
    id: "3",
    company: "RedCake",
    role: "Estagiário de Desenvolvimento Web & UI/UX",
    period: "2020 – 2021",
    description: "Desenvolvimento e manutenção de websites corporativos de alta performance, e-commerces e landing pages institucionais com foco em responsividade, SEO técnico e experiência do usuário.",
    projects: [
      { name: "Desenvolvimento Web & Temas Customizados", details: "Criação de temas e plugins personalizados utilizando WordPress, PHP, HTML5 semântico, Sass/CSS3 e JavaScript (ES6+), garantindo fidelidade visual e tempo de carregamento otimizado." },
      { name: "Prototipagem UI/UX no Figma", details: "Concepção de interfaces modernas, wireframes navegáveis e design systems para validação com clientes antes da implementação em código." }
    ]
  },
  {
    id: "4",
    company: "Controladoria Geral do Estado de Goiás (CGE-GO)",
    role: "Funcionário Público / Estagiário de Desenvolvimento de Sistemas",
    period: "2018 – 2020",
    description: "Atuação na Assessoria de Tecnologia da Informação do órgão central de controle interno estadual. Desenvolvimento de sistemas corporativos governamentais de grande escala, pesquisa e aplicação de Inteligência Artificial para auditoria pública e gestão de infraestrutura de TI.",
    projects: [
      { name: "Projeto Estudantes de Atitude", details: "Sistema web com mais de 10.000 linhas de código em PHP, MySQL e Bootstrap, integrado aos sistemas da Secretaria da Economia (SEFAZ-GO). Responsável pelo gerenciamento de tarefas cívicas, auditoria de pontuações e emissão automatizada de certificados para milhares de alunos e professores da rede estadual de ensino." },
      { name: "Projeto CORA (Inteligência Artificial)", details: "Pesquisa e implementação de modelos de Machine Learning e Visão Computacional com Python, TensorFlow e OpenCV para detecção de anomalias em folhas de pagamento do funcionalismo público e suporte à conformidade com a Lei de Acesso à Informação." },
      { name: "Infraestrutura & Suporte Corporativo", details: "Gerenciamento de servidores corporativos Windows Server, Active Directory (AD), políticas de rede e suporte técnico a auditores fiscais e equipes da Controladoria." }
    ]
  },
  {
    id: "5",
    company: "PrimeSoftware",
    role: "Estagiário de Suporte Técnico & Qualidade de Software",
    period: "2018 – 2019",
    description: "Suporte técnico especializado e garantia de qualidade de software de gestão (ERP) voltado para o setor farmacêutico, farmácias de manipulação e drogarias.",
    projects: [
      { name: "Suporte & Homologação de ERP Farmacêutico", details: "Atendimento especializado a clientes de farmácias de manipulação e drogarias, validação de regras de negócio de manipulação de fórmulas, controle de estoque crítico, tributações e homologação de novos builds do sistema." }
    ]
  },
  {
    id: "6",
    company: "SgSystem",
    role: "Estagiário de Desenvolvimento de Software",
    period: "2017 – 2018",
    description: "Desenvolvimento e manutenção contínua de ERP comercial voltado para grandes atacadistas, distribuidores e logística de transporte rodoviário de cargas.",
    projects: [
      { name: "Desenvolvimento em Delphi & Integração SEFAZ", details: "Programação em Delphi / Object Pascal, bancos de dados relacionais SQL e versionamento de código com Git. Manutenção e atualização contínua de rotinas críticas de emissão de Nota Fiscal Eletrônica (NF-e) integradas à SEFAZ para liberação de carregamento e trânsito de caminhões." }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    institution: "UNIFASAM – Centro Universitário Sul-Americano",
    degree: "Bacharelado em Sistemas de Informação",
    period: "2017 – 2021",
    description: "Graduação com sólida formação em Engenharia de Software, Arquitetura de Sistemas, Estruturas de Dados Avançadas, Banco de Dados Relacional e NoSQL, Redes e Inteligência Artificial.",
    highlights: [
      "Engenharia de Software e Padrões de Projeto (Design Patterns)",
      "Desenvolvimento de Aplicações Distribuídas e Microsserviços",
      "Modelagem e Otimização de Bancos de Dados (SQL & NoSQL)"
    ]
  },
  {
    id: "edu-2",
    institution: "Universidade Federal de Goiás (UFG) / PIBIC-CNPq",
    degree: "Projeto de Extensão & Iniciação Científica",
    period: "2017 – 2018",
    description: "Pesquisa acadêmica aplicada com bolsa institucional PIBIC/CNPq, desenvolvendo modelos matemáticos e analíticos para tratamento de dados complexos.",
    highlights: [
      "Estatística Aplicada e Probabilidade Avançada",
      "Modelagem Matemática e Algoritmos de Otimização",
      "Análise Quantitativa e Tratamento de Dados"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "gynmove",
    title: "GynMove (Passageiro)",
    description: "Aplicativo Flutter de mobilidade para passageiros com estimativa de corridas, escolha de rotas, acompanhamento do motorista em tempo real e prova de vida biométrica em 7 etapas.",
    tags: ["Flutter", "Passageiro", "Biometria", "Firebase", "Google Maps"],
    role: "Lead Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gynmovemotorista",
    title: "GynMove Motorista",
    description: "Aplicativo Flutter para motoristas parceiros com fila dinâmica de solicitações em tempo real, validação periódica de identidade e rastreamento contínuo em segundo plano.",
    tags: ["Flutter", "Motorista", "Telemetria", "Background Geolocation", "Firebase"],
    role: "Lead Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "voltfinance",
    title: "VoltFinance",
    description: "Plataforma de gestão financeira pessoal e empresarial em Flutter com arquitetura reativa MVC, categorização automática, controle de fluxo de caixa e módulo IoT para custos veiculares.",
    tags: ["Flutter", "Finanças", "Dashboard Reativo", "IoT Automotivo", "MVC"],
    role: "Mobile Developer & Architect",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "multasipva",
    title: "Multas & IPVA Brasil",
    description: "Aplicativo Flutter e suíte de auditoria em Python para centralização de frotas, consulta a roteiros oficiais de débitos veiculares, calendários de licenciamento e organização de autuações.",
    tags: ["Flutter", "Dart", "Python", "Auditoria Veicular", "Trânsito"],
    role: "Mobile & Backend Developer",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pineapplepay",
    title: "Pineapple Pay",
    description: "Ecossistema multi-perfil de pagamentos e fidelização em Flutter: estudantes gerenciam cashback para formaturas, lojistas operam marketing pré-pago e apoiadores participam de sorteios.",
    tags: ["Flutter", "Cashback", "Multi-Perfil", "Firebase", "Fintech"],
    role: "Lead Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "autoparts",
    title: "AutoParts Guide",
    description: "Marketplace automotivo completo em Flutter unificando a experiência de compra do cliente e a gestão do lojista (App do Cliente e Painel do Lojista). Conecta motoristas e autopeças na Vila Canaã com validação cadastral rigorosa, busca por modal veicular, controle de estoque, checkout integrado (Cartão até 12x/Pix) e módulo My Car de revisões preventivas. Código-fonte ainda não disponível nesta revisão; funcionalidades e escala não verificadas.",
    tags: ["Flutter", "Marketplace", "Design System Figma", "App Cliente & Lojista", "Vila Canaã", "My Car"],
    role: "Lead Mobile Developer & UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bicho-mimado",
    title: "Bicho Mimado",
    description: "Super app de Pet Care e marketplace veterinário em Flutter com mais de 100 telas e motor exclusivo de TaxiDog com navegação Turn-by-Turn nativa via Google Navigation SDK.",
    tags: ["Flutter", "TaxiDog", "Google Navigation SDK", "Firebase Functions", "Stitch"],
    role: "Lead Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "brigaelo",
    title: "Brigaelo",
    description: "Protótipo em Flutter que reúne seleção de doces artesanais, modalidade de entrega ou retirada e acompanhamento das etapas de produção para docerias.",
    tags: ["Flutter", "Pedidos", "Doceria", "Protótipo"],
    role: "Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "44gyn",
    title: "44GYN",
    description: "Proposta de e-commerce para o polo de moda 44 em Goiânia, aproximando catálogo, lojistas e jornada de compra com integração de atendimento via WhatsApp.",
    tags: ["E-commerce", "Moda", "Apresentação"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "conper",
    title: "CONPER",
    description: "Apresentação de uma proposta de gestão de contratos e organização do atendimento jurídico. Implementação e integrações aguardam validação técnica.",
    tags: ["Gestão de contratos", "Apresentação"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "smartdrop",
    title: "SmartDrop",
    description: "Apresentação de uma proposta de organização de catálogo e compras internacionais. Automação, pagamentos e operação ainda não verificados.",
    tags: ["E-commerce", "Apresentação"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cfc-focus",
    title: "CFC Focus",
    description: "Apresentação de uma jornada digital para alunos de autoescolas. Gamificação, aulas e integrações aguardam validação técnica.",
    tags: ["Educação", "UI/UX", "Apresentação"],
    role: "UI/UX Designer & Dev",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  }
];
