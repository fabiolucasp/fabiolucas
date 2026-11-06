/**
 * Serviço de Monitoramento de Tendências e Inteligência de Conteúdo
 * Integra dados de Google Trends / Insights, Google Search Real-Time e X (Twitter) Trends.
 */

export interface TrendItem {
  id: string;
  topic: string;
  category: 'Mobile' | 'Flutter' | 'Inteligência Artificial' | 'Cloud' | 'Negócios';
  volumeIndex: number; // 0 a 100
  growthRate: string; // Ex: "+340%"
  source: 'Google Insights' | 'Google Search' | 'X Trends';
  context: string;
  suggestedAngle: string;
  viralScore: number; // 0 a 100
}

export interface RealTimeSearchQuery {
  id: string;
  query: string;
  intent: 'Dúvida Técnica' | 'Orçamento de App' | 'Comparativo de Stack' | 'Carreira';
  searchCountEstimate: string;
  risingTime: string;
  suggestedFormat: 'Carrossel' | 'Reels' | 'Post Único' | 'Stories';
}

export interface XTrendTopic {
  id: string;
  hashtagOrTerm: string;
  tweetVolume: string;
  sentiment: 'Positivo' | 'Em Alta Discussão' | 'Técnico';
  relevanceToPortfolio: string;
}

export interface TrendToContentSuggestion {
  id: string;
  headline: string;
  hook: string;
  format: 'Carrossel' | 'Reels' | 'Stories' | 'Post Único';
  sourceTrends: string[];
  targetAudience: string;
  viralScore: number;
  callToAction: string;
  suggestedSlidesOrScript: string[];
}

export const MOCK_GOOGLE_INSIGHTS: TrendItem[] = [
  {
    id: 'gi-1',
    topic: 'Flutter 3.x vs React Native em 2025/2026',
    category: 'Flutter',
    volumeIndex: 96,
    growthRate: '+240%',
    source: 'Google Insights',
    context: 'Empresas e desenvolvedores comparando performance gráfica do Impeller e custos de manutenção.',
    suggestedAngle: 'Por que o Flutter com Impeller se tornou a melhor escolha para apps de alta performance como GynMove e Bicho Mimado.',
    viralScore: 95
  },
  {
    id: 'gi-2',
    topic: 'Biometria Facial e Prova de Vida em Apps Mobile',
    category: 'Mobile',
    volumeIndex: 88,
    growthRate: '+310%',
    source: 'Google Insights',
    context: 'Crescimento de fraudes em mobilidade e fintechs impulsionando a busca por biometria em etapas no celular.',
    suggestedAngle: 'Como desenhamos o pipeline biométrico em 7 etapas no GynMove sem travar smartphones de entrada.',
    viralScore: 92
  },
  {
    id: 'gi-3',
    topic: 'Micro SaaS com Flutter e Firebase',
    category: 'Negócios',
    volumeIndex: 91,
    growthRate: '+420%',
    source: 'Google Insights',
    context: 'Desenvolvedores solos buscando criar e monetizar produtos próprios com custo quase zero de infraestrutura.',
    suggestedAngle: 'A arquitetura solo que utilizei para manter 8 aplicativos no ar com Firebase e Cloud Functions.',
    viralScore: 98
  },
  {
    id: 'gi-4',
    topic: 'TaxiDog e Rastreamento GPS Turn-by-Turn',
    category: 'Mobile',
    volumeIndex: 79,
    growthRate: '+190%',
    source: 'Google Insights',
    context: 'Mercado Pet em franca expansão exigindo telemetria e segurança no transporte de animais.',
    suggestedAngle: 'Integração nativa do Google Navigation SDK com Flutter: o segredo técnico do Bicho Mimado.',
    viralScore: 89
  },
  {
    id: 'gi-5',
    topic: 'Clean Architecture e Injeção de Dependência no Dart',
    category: 'Flutter',
    volumeIndex: 85,
    growthRate: '+160%',
    source: 'Google Insights',
    context: 'Equipes refatorando código macarrônico para estruturas desacopladas e testáveis.',
    suggestedAngle: 'Os 3 patterns essenciais para desacoplar controllers e views em projetos Flutter escaláveis.',
    viralScore: 87
  }
];

export const MOCK_REALTIME_SEARCHES: RealTimeSearchQuery[] = [
  {
    id: 'search-1',
    query: 'Como publicar app na Google Play Store sem ser rejeitado pelo teste fechado de 20 pessoas?',
    intent: 'Dúvida Técnica',
    searchCountEstimate: '18.4k buscas/mês',
    risingTime: 'Pico nas últimas 6 horas',
    suggestedFormat: 'Carrossel'
  },
  {
    id: 'search-2',
    query: 'Quanto custa criar um aplicativo próprio estilo Uber ou iFood?',
    intent: 'Orçamento de App',
    searchCountEstimate: '32.1k buscas/mês',
    risingTime: 'Pico em horário comercial',
    suggestedFormat: 'Reels'
  },
  {
    id: 'search-3',
    query: 'Como integrar pagamento Pix instantâneo no Flutter com Webhooks seguros?',
    intent: 'Dúvida Técnica',
    searchCountEstimate: '12.8k buscas/mês',
    risingTime: 'Crescimento de +180% esta semana',
    suggestedFormat: 'Carrossel'
  },
  {
    id: 'search-4',
    query: 'Como separar finanças de pessoa física e custos do veículo para motoristas?',
    intent: 'Comparativo de Stack',
    searchCountEstimate: '9.6k buscas/mês',
    risingTime: 'Constante',
    suggestedFormat: 'Post Único'
  },
  {
    id: 'search-5',
    query: 'Qual banco de dados usar para chat e geolocalização em tempo real: Firebase Firestore ou Supabase?',
    intent: 'Comparativo de Stack',
    searchCountEstimate: '22.3k buscas/mês',
    risingTime: 'Pico noturno entre desenvolvedores',
    suggestedFormat: 'Carrossel'
  }
];

export const MOCK_X_TRENDS: XTrendTopic[] = [
  {
    id: 'x-1',
    hashtagOrTerm: '#FlutterDev',
    tweetVolume: '48.2k posts',
    sentiment: 'Técnico',
    relevanceToPortfolio: 'Altíssima — maior comunidade global de desenvolvedores Flutter compartilhando novidades do ecossistema.'
  },
  {
    id: 'x-2',
    hashtagOrTerm: '#BuildInPublic',
    tweetVolume: '64.5k posts',
    sentiment: 'Em Alta Discussão',
    relevanceToPortfolio: 'Excelente para divulgar bastidores de código, prints de telas e progresso dos 8 aplicativos.'
  },
  {
    id: 'x-3',
    hashtagOrTerm: '#MobileSecurity',
    tweetVolume: '19.8k posts',
    sentiment: 'Técnico',
    relevanceToPortfolio: 'Perfeita para destacar a prova de vida biométrica e proteção contra engenharia reversa.'
  },
  {
    id: 'x-4',
    hashtagOrTerm: '#IndieHacker',
    tweetVolume: '33.1k posts',
    sentiment: 'Positivo',
    relevanceToPortfolio: 'Alinhada à venda de e-books, cursos e autonomia técnica do desenvolvedor solo.'
  },
  {
    id: 'x-5',
    hashtagOrTerm: '#CleanCode',
    tweetVolume: '15.7k posts',
    sentiment: 'Técnico',
    relevanceToPortfolio: 'Reforça autoridade profissional, padrões SOLID e separação de camadas.'
  }
];

export const MOCK_TREND_SUGGESTIONS: TrendToContentSuggestion[] = [
  {
    id: 'sug-1',
    headline: 'O Guia Definitivo: Como Superar a Política de 20 Testadores da Google Play',
    hook: 'Seu app Flutter foi rejeitado pela nova regra de testes fechados? Veja a estratégia exata que usei para aprovar 8 apps.',
    format: 'Carrossel',
    sourceTrends: ['Google Search ("Rejeição 20 testadores")', '#FlutterDev (X Trends)', 'Google Insights (+240%)'],
    targetAudience: 'Desenvolvedores mobile, fundadores de startups e alunos de programação',
    viralScore: 98,
    callToAction: 'Salva este carrossel e comente "PLAYSTORE" para receber meu checklist completo em PDF no direct!',
    suggestedSlidesOrScript: [
      'Slide 1 (Capa): Como aprovei 8 aplicativos na Google Play sem dor de cabeça com os 20 testadores.',
      'Slide 2: Por que a Google implementou a regra e quais são os 3 erros que reprovam de primeira.',
      'Slide 3: Criando um grupo de teste fechado engajado usando links de convite e formulários rápidos.',
      'Slide 4: O checklist técnico obrigatório: permissões no AndroidManifest, política de privacidade e API Level.',
      'Slide 5: Como responder o questionário final de 14 dias de teste com evidências concretas.',
      'Slide 6 (CTA): Quer aprender a publicar do zero à loja? Link do meu E-book completo na bio!'
    ]
  },
  {
    id: 'sug-2',
    headline: 'Como Desenvolver Biometria Facial em 7 Etapas no Celular',
    hook: 'Não coloque biometria no seu app antes de ver essa arquitetura. 90% dos devs travam o celular do usuário!',
    format: 'Reels',
    sourceTrends: ['Google Insights ("Biometria Facial")', '#MobileSecurity (X Trends)'],
    targetAudience: 'Tech Leads, Devs Plenos e Fundadores de Startups',
    viralScore: 94,
    callToAction: 'Qual a sua maior dificuldade com câmera e visão computacional no Flutter? Me conta nos comentários!',
    suggestedSlidesOrScript: [
      '00-03s: Gancho visual mostrando a animação do rosto sendo escaneado em tempo real no emulador.',
      '04-20s: Explicação da esteira: enquadramento -> detecção de piscar de olhos -> sorriso -> validação com backend seguro.',
      '21-40s: Demonstração rápida de como evitar vazamento de memória isolando o camera controller no Dispose.',
      '41-60s: Convite: "Quer ver o case study completo com diagramas de telas? Acesse fabiolucas.com".'
    ]
  },
  {
    id: 'sug-3',
    headline: 'Quanto Custa Desenvolver um App do Zero em 2026? (A Verdade Sem Filtro)',
    hook: 'Quer lançar um app para o seu negócio? Cuidado para não cair em orçamentos milagrosos que nunca saem do papel.',
    format: 'Carrossel',
    sourceTrends: ['Google Search ("Quanto custa criar app")', '#BuildInPublic (X Trends)'],
    targetAudience: 'Empresários, Lojistas B2B e Empreendedores',
    viralScore: 96,
    callToAction: 'Quer estimar o escopo do seu projeto? Me mande uma mensagem no WhatsApp com o menu de triagem rápida!',
    suggestedSlidesOrScript: [
      'Slide 1 (Capa): Quanto realmente custa construir um app de verdade (como GynMove ou AutoParts)?',
      'Slide 2: A diferença entre um template pronto cheio de bugs e uma arquitetura sob medida em Flutter.',
      'Slide 3: Custos invisíveis: Servidores Cloud, Google Maps API, Gateways de Pagamento e Contas de Desenvolvedor.',
      'Slide 4: Prazos realistas: de 4 a 12 semanas para um MVP profissional testado.',
      'Slide 5: Como estruturar seu briefing para economizar tempo e dinheiro na contratação.',
      'Slide 6 (CTA): Precisa de um orçamento detalhado? Use a calculadora no site fabiolucas.com ou chame no WhatsApp!'
    ]
  },
  {
    id: 'sug-4',
    headline: 'TaxiDog em Tempo Real: Como Sincronizar GPS Sem Drenar a Bateria',
    hook: 'Como manter motorista, passageiro e clínica atualizados a cada 2 segundos no mapa sem esquentar o celular.',
    format: 'Carrossel',
    sourceTrends: ['Google Insights ("TaxiDog")', '#CleanCode (X Trends)'],
    targetAudience: 'Desenvolvedores Flutter e Donos de Pet Shops',
    viralScore: 91,
    callToAction: 'Arraste para o lado e veja o fluxo de mensageria com Firebase Realtime Database!',
    suggestedSlidesOrScript: [
      'Slide 1: Arquitetura de telemetria veicular do Bicho Mimado.',
      'Slide 2: Por que polling HTTP convencional drena bateria e consome plano de dados 4G.',
      'Slide 3: Uso de WebSockets e Firestore listeners otimizados por bounding box de geolocalização.',
      'Slide 4: Interpolação suave de marcadores no mapa com rotação fluida do veículo.',
      'Slide 5: Notificações push automáticas de "Seu pet está a 5 minutos da sua casa".',
      'Slide 6 (CTA): Confira a landing page interativa do Bicho Mimado no meu portfólio!'
    ]
  }
];
