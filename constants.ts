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
      { name: "GynMove", details: "App de mobilidade com cálculo de lucro real baseado em relevo e manutenção veicular." },
      { name: "AutoPartsGuide", details: "Marketplace de autopeças com busca em tempo real, filtros complexos e mais de 400 mil itens testados." },
      { name: "PineapplePay", details: "Sistema de pagamento mobile com integração Pagar.me, mais de 20 fluxos de login e 600 telas." },
      { name: "44GYN", details: "E-Commerce para a região da 44 em Goiânia com chat integrado ao WhatsApp e rotas de entrega." }
    ]
  },
  {
    id: "2",
    company: "Machado & Pereira",
    role: "Analista de TI",
    period: "2021 – 2022",
    description: "Desenvolvimento de App de gestão de contratos (ConPer) e automação de atendimento via WhatsApp Business API com Cloud Functions (+110k linhas de código).",
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
    description: "Ecossistema completo para Clínica Veterinária. ERP de gestão, App do Cliente com Taxi Dog (Rastreamento em Tempo Real) e Automação de Agendamentos via WhatsApp.",
    tags: ["Flutter", "Maps Tracking", "WhatsApp API", "ERP Completo"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gynmove",
    title: "GynMove",
    description: "Mobilidade Urbana com inteligência financeira. Algoritmos de geolocalização que calculam consumo de combustível baseado em relevo e custos de manutenção.",
    tags: ["Flutter", "Maps Routes API", "Elevation API", "Cloud Functions"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "conper",
    title: "CONPER",
    description: "Sistema completo de Gestão de Contratos e Automação Jurídica. Multiplataforma (Web, iOS, Android, MacOS) com integrações profundas.",
    tags: ["Flutter", "Firebase", "DocuSign", "WhatsApp API", "Google Maps"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "autoparts",
    title: "AutoPartsGuide",
    description: "Marketplace robusto para indústria de autopeças. Sistema complexo de filtros em tempo real e busca avançada.",
    tags: ["Flutter", "Firebase", "Node.js", "GCP"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "smartdrop",
    title: "SmartDrop",
    description: "Dropshipping automatizado com Scraper diário via Cloud Functions e parcelamento nacional para compras internacionais.",
    tags: ["Flutter", "Cloud Functions", "Scraping", "Fintech"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pineapple",
    title: "PineapplePay",
    description: "Fintech mobile com mais de 600 telas. Integração completa de pagamentos e segurança.",
    tags: ["Flutter", "Pagar.me", "Security", "UX/UI"],
    role: "Lead Developer",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "44gyn",
    title: "44GYN",
    description: "Solução de E-commerce para o polo de moda 44. Geolocalização e Chatbot WhatsApp integrado.",
    tags: ["Flutter", "WhatsApp API", "Maps API"],
    role: "Full-Stack",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cfc-focus",
    title: "CFC Focus",
    description: "Plataforma gamificada para autoescolas. Onboarding engajador, acompanhamento de aulas e foco na aprovação do aluno.",
    tags: ["Flutter", "Gamification", "Detran API", "UI/UX"],
    role: "UI/UX Designer & Dev",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  }
];