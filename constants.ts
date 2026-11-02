import { Profile, Experience, Project } from './types';

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
    description: "Desenvolvimento de ecossistemas mobile completos em Flutter com backends em Firebase, Cloud Functions e integração com gateways de pagamento.",
    projects: [
      { name: "GynMove & GynMove Motorista", details: "Aplicativos de mobilidade em Flutter com prova de vida biométrica em 7 etapas, rotas dinâmicas e telemetria veicular." },
      { name: "AutoParts Guide (Clientes & Lojistas)", details: "Dois aplicativos Flutter sobre o Design System Figma New-Style-APG, checkout de planos (Cartão/Pix) e módulo My Car." },
      { name: "Bicho Mimado", details: "Super app de Pet Care com TaxiDog nativo via Google Navigation SDK turn-by-turn e agendamento veterinário." },
      { name: "Pineapple Pay", details: "Ecossistema multi-perfil de pagamentos e cashback para formaturas e comércio local." },
      { name: "VoltFinance & Multas IPVA", details: "Aplicativos Flutter de inteligência financeira com IoT automotivo e auditoria veicular de trânsito." }
    ]
  },
  {
    id: "2",
    company: "Machado & Pereira",
    role: "Analista de TI",
    period: "2021 – 2022",
    description: "Desenvolvimento de App de gestão de contratos (ConPer) e automação de atendimento; relato profissional preservado, com integrações ainda não verificadas nesta revisão.",
  },
  {
    id: "3",
    company: "RedCake",
    role: "Estagiário",
    period: "2020 – 2021",
    description: "Desenvolvimento de sites responsivos e personalizados utilizando WordPress, PHP e JavaScript.",
  },
  {
    id: "4",
    company: "Controladoria Geral do Estado de Goiás",
    role: "Funcionário Público / Estagiário",
    period: "2018 – 2020",
    description: "Desenvolvimento do sistema 'Estudantes de Atitude' (PHP/Bootstrap) e início do projeto CORA (IA para análise de folha de pagamento). Suporte técnico e infraestrutura.",
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
    id: "autopartsguide",
    title: "AutoParts Guide (Clientes)",
    description: "Marketplace automotivo em Flutter implementado sobre o Design System Figma New-Style-APG, com busca por modal veicular, carteira digital de cartões e módulo My Car de revisões preventivas.",
    tags: ["Flutter", "Marketplace", "Design System Figma", "My Car", "Firebase Spark"],
    role: "Mobile Developer & UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "autopartsguide_lojista",
    title: "AutoParts Guide (Lojistas)",
    description: "Aplicativo Flutter para administração de lojas de autopeças com publicação de stories e catálogo, chat em tempo real, controle de despachos e checkout de planos de assinatura (Cartão até 12x/Pix).",
    tags: ["Flutter", "Gestão de Loja", "Assinatura de Planos", "Checkout", "Stories"],
    role: "Mobile Developer",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop"
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
    id: "autoparts",
    title: "AutoPartsGuide (Conceito Original)",
    description: "Proposta de marketplace para encontrar autopeças por catálogo e filtros. Código-fonte ainda não disponível nesta revisão; funcionalidades e escala não verificadas.",
    tags: ["Autopeças", "Catálogo", "Apresentação"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
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
