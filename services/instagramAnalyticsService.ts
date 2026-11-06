/**
 * Serviço de Inteligência e Rastreamento de Audiência do Instagram
 * Monitora interações por perfil de usuário, horários de pico e gerador multiformato.
 */

export type UserProfileType = 'dev_junior' | 'dev_senior' | 'lead_b2b' | 'tech_recruiter';

export interface FollowerInteraction {
  id: string;
  username: string;
  userProfile: UserProfileType;
  profileLabel: string;
  avatarUrl: string;
  contentType: 'Carrossel' | 'Reels' | 'Stories' | 'Post Único';
  postTitle: string;
  interactionType: 'like' | 'comment' | 'save' | 'share';
  commentText?: string;
  engagementTime: string; // Ex: '18:42'
  engagementDay: string; // Ex: 'Quarta-feira'
  recommendedAction: string;
  status: 'Pendente' | 'Respondido' | 'Convertido';
}

export interface PostingScheduleSlot {
  day: string;
  bestHour: string;
  format: 'Carrossel' | 'Reels' | 'Stories' | 'Post Único';
  recommendedTopic: string;
  targetAudience: string;
  algorithmReason: string;
}

export interface StorySlide {
  step: number;
  type: 'Enquete' | 'Bastidor com Código' | 'Caixa de Perguntas' | 'Link Sticker' | 'Depoimento';
  headline: string;
  visualCue: string;
  interactiveElement: string;
}

export interface CarouselSlide {
  slideNumber: number;
  badge: string;
  title: string;
  content: string[];
  codeSnippet?: string;
  visualNote: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  coverIcon: string;
  purpose: string;
  storiesCount: number;
  curatedTopics: string[];
}

export const MOCK_INTERACTIONS: FollowerInteraction[] = [
  {
    id: 'int-1',
    username: 'rodrigo.techfounder',
    userProfile: 'lead_b2b',
    profileLabel: 'Empresário / Dono de Frotas',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    contentType: 'Carrossel',
    postTitle: 'Como estruturamos a Prova de Vida Biométrica no GynMove',
    interactionType: 'save',
    engagementTime: '19:15',
    engagementDay: 'Segunda-feira',
    recommendedAction: 'Enviar mensagem direta no Instagram apresentando o case do GynMove com proposta de consultoria de escopo.',
    status: 'Pendente'
  },
  {
    id: 'int-2',
    username: 'camila.flutterdev',
    userProfile: 'dev_senior',
    profileLabel: 'Engenheira de Software Mobile',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    contentType: 'Carrossel',
    postTitle: '5 Erros clássicos ao gerenciar estado no Flutter',
    interactionType: 'comment',
    commentText: 'Sensacional Fábio! Como você lida com a reatividade do Streams no Flutter 3.24 com o Impeller ativado?',
    engagementTime: '12:35',
    engagementDay: 'Terça-feira',
    recommendedAction: 'Responder com explicação técnica aprofundada nos comentários para gerar autoridade pública e direcionar para o e-book.',
    status: 'Respondido'
  },
  {
    id: 'int-3',
    username: 'marcos.canaa.pecas',
    userProfile: 'lead_b2b',
    profileLabel: 'Lojista de Autopeças (Goiânia)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    contentType: 'Stories',
    postTitle: 'Demonstração do Catálogo por Modal no AutoParts Guide',
    interactionType: 'share',
    commentText: 'Enviou via direct para um sócio com o emoji 🚀',
    engagementTime: '17:50',
    engagementDay: 'Quarta-feira',
    recommendedAction: 'Lead quente! Iniciar contato no WhatsApp com o pitch pronto de autopeças e link do portfólio.',
    status: 'Convertido'
  },
  {
    id: 'int-4',
    username: 'lucas.dev.iniciante',
    userProfile: 'dev_junior',
    profileLabel: 'Estudante de Análise e Desenvolvimento',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    contentType: 'Reels',
    postTitle: 'Um dia na rotina de um Desenvolvedor Full-Stack Solo',
    interactionType: 'like',
    engagementTime: '21:05',
    engagementDay: 'Quinta-feira',
    recommendedAction: 'Oferecer cupom de desconto do E-book "Do Zero à Publicação na Google Play" nos stories.',
    status: 'Respondido'
  },
  {
    id: 'int-5',
    username: 'juliana.head.hunting',
    userProfile: 'tech_recruiter',
    profileLabel: 'Recrutadora Tech Internacional',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    contentType: 'Post Único',
    postTitle: 'TaxiDog com Navegação Turn-by-Turn nativa no Flutter',
    interactionType: 'save',
    engagementTime: '10:45',
    engagementDay: 'Sexta-feira',
    recommendedAction: 'Manter LinkedIn e GitHub sincronizados; o portfólio oficial já disponibiliza os repositórios reais e cases.',
    status: 'Pendente'
  }
];

export const POSTING_SCHEDULE_MATRIX: PostingScheduleSlot[] = [
  {
    day: 'Segunda-feira',
    bestHour: '08:30 & 18:45',
    format: 'Carrossel',
    recommendedTopic: 'Arquitetura de Software & Engenharia de Telas (GynMove / AutoParts)',
    targetAudience: 'Engenheiros Mobile e Fundadores de Startups',
    algorithmReason: 'Início de semana tem o maior índice de salvamento de carrosséis educativos para estudo ao longo dos dias.'
  },
  {
    day: 'Terça-feira',
    bestHour: '12:15 & 20:00',
    format: 'Reels',
    recommendedTopic: 'Dica Prática de Dart / Truque de Performance no Flutter',
    targetAudience: 'Desenvolvedores Flutter e Estudantes',
    algorithmReason: 'Horário de almoço e pós-expediente registram pico de consumo de vídeos curtos no feed do Reels.'
  },
  {
    day: 'Quarta-feira',
    bestHour: '19:30',
    format: 'Carrossel',
    recommendedTopic: 'Case Study Real de Negócios (Bicho Mimado com TaxiDog / PineapplePay)',
    targetAudience: 'Empresários, Lojistas B2B e Clientes Potenciais',
    algorithmReason: 'Meio de semana registra o maior tempo de tela qualificado para conteúdos com prova social e resultados.'
  },
  {
    day: 'Quinta-feira',
    bestHour: '11:30 & 17:30',
    format: 'Stories',
    recommendedTopic: 'Sequência Interativa: Enquetes de Código + Caixa de Perguntas "Pergunte ao Arquiteto"',
    targetAudience: 'Audiência Ativa e Alunos',
    algorithmReason: 'Quintas-feiras aumentam em 40% a taxa de resposta a figurinhas interativas nos Stories da Meta.'
  },
  {
    day: 'Sexta-feira',
    bestHour: '16:30 & 19:00',
    format: 'Carrossel',
    recommendedTopic: 'Lançamento & Oferta de E-books / Cursos Práticos de Programação',
    targetAudience: 'Devs querendo estudar no final de semana',
    algorithmReason: 'Pico de conversão e compras de infoprodutos antes do final de semana.'
  },
  {
    day: 'Sábado',
    bestHour: '10:15',
    format: 'Reels',
    recommendedTopic: 'Bastidores: Como organizo a bancada e gerencio 8 apps sozinho',
    targetAudience: 'Comunidade Geral e Conexão Humana',
    algorithmReason: 'Conteúdos de lifestyle dev e rotina geram alto volume de compartilhamentos aos fins de semana.'
  },
  {
    day: 'Domingo',
    bestHour: '20:00',
    format: 'Post Único',
    recommendedTopic: 'Tendências Tech para a Nova Semana + Reflexão de Carreira',
    targetAudience: 'Toda a audiência se preparando para a semana',
    algorithmReason: 'Domingo à noite é o horário de maior leitura e engajamento reflexivo antes da semana de trabalho.'
  }
];

export const CURATED_HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'hl-1',
    title: '🚀 Nossos Apps',
    coverIcon: 'Smartphone',
    purpose: 'Exibir os 8 apps reais funcionando em vídeo com gravação de tela e prints homologados.',
    storiesCount: 16,
    curatedTopics: ['GynMove em corrida teste', 'AutoParts busca por modal', 'Bicho Mimado rota TaxiDog', 'VoltFinance controle de custos']
  },
  {
    id: 'hl-2',
    title: '🛠️ Arquitetura',
    coverIcon: 'Layers',
    purpose: 'Comprovar domínio técnico em Clean Architecture, Firebase Cloud Functions e Design System.',
    storiesCount: 12,
    curatedTopics: ['Diagrama de camadas', 'Prova de vida em 7 etapas', 'Consumo de memória otimizado', 'CI/CD no GitHub Actions']
  },
  {
    id: 'hl-3',
    title: '📚 E-books',
    coverIcon: 'BookOpen',
    purpose: 'Vitrine direta dos livros técnicos com depoimentos de leitores e link de compra rápida.',
    storiesCount: 8,
    curatedTopics: ['Do Zero à Play Store', 'Clean Architecture na Prática', 'Checklist de 20 passos', 'Depoimentos de aprovação']
  },
  {
    id: 'hl-4',
    title: '⭐ Clientes',
    coverIcon: 'Star',
    purpose: 'Prova social corporativa de lojistas, motoristas e empresas atendidas com software sob medida.',
    storiesCount: 10,
    curatedTopics: ['Depoimento lojista AutoParts', 'Motoristas GynMove elogiando estabilidade', 'Feedback de clínicas pet']
  },
  {
    id: 'hl-5',
    title: '💡 Dicas Rápidas',
    coverIcon: 'Lightbulb',
    purpose: 'Garantir retenção contínua de programadores que visitam o perfil buscando aprender.',
    storiesCount: 20,
    curatedTopics: ['Extensões do VS Code', 'Truques de Dart 3', 'Otimização de imagens', 'State Management com Provider/Bloc']
  }
];
