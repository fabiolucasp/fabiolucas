import { Profile, Experience, Project } from './types';

export const PROFILE: Profile = {
  name: "Fábio Lucas Pereira Ferreira",
  title: "Desenvolvedor Flutter | Full-Stack",
  phone: "(62) 9 9874-8910",
  email: "fabio@fabiolucas.com",
  location: "Goiânia, GO",
  summary: "Desenvolvedor Full-Stack com sólida experiência em criação de soluções escaláveis e eficientes. Proficiente na otimização de processos e na concepção de soluções personalizadas utilizando Flutter, Firebase, WhatsApp Business API, Cloud Functions e GCP. Foco em alta disponibilidade, otimização de infraestrutura e automação.",
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
    role: "Fundador e Desenvolvedor",
    period: "2021 – Atual",
    description: "Desenvolvimento de soluções mobile e web complexas com foco em e-commerce e automação.",
    projects: [
      { name: "GynMove", details: "Planejamento de viagens, fila de solicitações e consulta de registros de corridas." },
      { name: "AutoPartsGuide", details: "Projeto de marketplace de autopeças descrito no portfólio; código e escala ainda não verificados." },
      { name: "PineapplePay", details: "Projeto de experiência de pagamentos mobile; integrações ainda não verificadas nesta revisão." },
      { name: "44GYN", details: "E-Commerce para a região da 44 em Goiânia com chat integrado ao WhatsApp e rotas de entrega." }
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
    id: "bicho-mimado",
    title: "Bicho Mimado",
    description: "Agende cuidados, organize compras e, nas clínicas habilitadas, solicite a busca do pet e acompanhe o caminho até a clínica.",
    tags: ["Flutter", "Agenda", "TaxiDog", "Firebase"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gynmove",
    title: "GynMove",
    description: "Compare trajetos e estimativas antes da viagem. Para motoristas, organize solicitações e consulte os registros financeiros das corridas.",
    tags: ["Flutter", "Rotas", "Fila de solicitações", "Firebase"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
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
    id: "autoparts",
    title: "AutoPartsGuide",
    description: "Proposta de marketplace para encontrar autopeças por catálogo e filtros. Código-fonte ainda não disponível nesta revisão; funcionalidades e escala não verificadas.",
    tags: ["Autopeças", "Catálogo", "Apresentação"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
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
    id: "pineapple",
    title: "PineapplePay",
    description: "Apresentação de uma experiência de pagamentos mobile. Fluxos, integrações e disponibilidade operacional aguardam validação técnica.",
    tags: ["Pagamentos", "UX/UI", "Apresentação"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "44gyn",
    title: "44GYN",
    description: "Proposta de e-commerce para o polo de moda 44, aproximando catálogo e jornada de compra. Integrações e operação ainda não verificadas.",
    tags: ["E-commerce", "Moda", "Apresentação"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cfc-focus",
    title: "CFC Focus",
    description: "Apresentação de uma jornada digital para alunos de autoescolas. Gamificação, aulas e integrações aguardam validação técnica.",
    tags: ["Educação", "UI/UX", "Apresentação"],
    role: "UI/UX Designer & Dev",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "voltfinance", title: "VoltFinance",
    description: "Visualize entradas, despesas e categorias em painéis pessoais e da operação. Metas e telemetria incluem áreas demonstrativas.",
    tags: ["Flutter", "Finanças", "Painéis"], role: "Projeto de aplicativo",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "multasipva", title: "MultasIPVA",
    description: "Organize veículos, referências de documentos e roteiros de acesso a portais oficiais. Sem promessa de auditoria ou defesa automática.",
    tags: ["Flutter", "Veículos", "Organização"], role: "Projeto de aplicativo",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "brigaelo", title: "Brigaelo",
    description: "Protótipo que reúne pedido, entrega ou retirada e etapas de preparação para uma doceria. Sincronização operacional ainda a completar.",
    tags: ["Flutter", "Pedidos", "Protótipo"], role: "Projeto de aplicativo",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop"
  },

];