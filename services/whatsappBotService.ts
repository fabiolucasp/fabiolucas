/**
 * Serviço de Chatbot Interativo e Funil de Atendimento WhatsApp Business
 * Simula e automatiza a triagem de leads com opções de múltipla escolha.
 */

export interface ChatbotOption {
  key: string; // Ex: '1', '2', 'A', 'B'
  label: string;
  nextStepId?: string;
  finalMessagePayload?: string;
}

export interface ChatbotStep {
  id: string;
  botMessage: string;
  options: ChatbotOption[];
  isFinal?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: ChatbotOption[];
}

export interface QuickReply {
  shortcut: string; // Ex: '/portfolio'
  title: string;
  text: string;
  category: 'Comercial' | 'Técnico' | 'Produtos' | 'Pagamento';
}

export const WHATSAPP_PHONE_NUMBER = '5562981358986'; // +55 (62) 98135-8986

export const CHATBOT_STEPS: Record<string, ChatbotStep> = {
  start: {
    id: 'start',
    botMessage: 'Olá! Sou o assistente automático do Fábio Lucas Dev 🚀\nComo posso ajudar você hoje? Selecione uma das opções abaixo:',
    options: [
      { key: '1', label: '🚀 Orçar Aplicativo Sob Medida (Flutter & Backend)', nextStepId: 'app_niche' },
      { key: '2', label: '📚 Dúvidas sobre E-books & Cursos Práticos', nextStepId: 'ebooks_courses' },
      { key: '3', label: '💼 Consultoria de Arquitetura de Software / Code Review', nextStepId: 'consulting' },
      { key: '4', label: '🤝 Parcerias Comerciais, Palestras & Comunidade', nextStepId: 'partnership' }
    ]
  },
  app_niche: {
    id: 'app_niche',
    botMessage: 'Excelente! Desenvolvo aplicativos completos em Flutter com backends escaláveis em Firebase/GCP.\n\nQual é o nicho ou modelo do seu projeto?',
    options: [
      { key: 'A', label: '🚗 Mobilidade Urbana / Entregas (estilo GynMove)', nextStepId: 'app_stage_mobility' },
      { key: 'B', label: '⚙️ Marketplace / E-commerce Automotivo (estilo AutoParts)', nextStepId: 'app_stage_parts' },
      { key: 'C', label: '🐾 Pet Care / TaxiDog com GPS Turn-by-Turn (estilo Bicho Mimado)', nextStepId: 'app_stage_pet' },
      { key: 'D', label: '💳 Fintech / Carteira Digital / Cashback (estilo PineapplePay)', nextStepId: 'app_stage_fintech' },
      { key: 'E', label: '📱 Outro nicho ou sistema corporativo sob medida', nextStepId: 'app_stage_custom' }
    ]
  },
  app_stage_mobility: {
    id: 'app_stage_mobility',
    botMessage: 'Ótima escolha! Já homologamos sistemas com biometria facial em 7 etapas, telemetria veicular e cálculo dinâmico de tarifas.\n\nEm que estágio está o seu projeto?',
    options: [
      { key: '1', label: 'Ideia inicial (preciso de consultoria de escopo & design)', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Quero orçar um app de Mobilidade Urbana em estágio inicial de ideia. Gostaria de entender escopo e viabilidade.' },
      { key: '2', label: 'Protótipo pronto no Figma (pronto para codificar)', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Tenho protótipo no Figma de Mobilidade Urbana pronto e preciso do desenvolvimento em Flutter e backend.' },
      { key: '3', label: 'App existente que precisa de refatoração / modernização', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Possuo um app de mobilidade existente e preciso modernizar para Flutter e arquitetura escalável.' }
    ]
  },
  app_stage_parts: {
    id: 'app_stage_parts',
    botMessage: 'Perfeito! No AutoParts Guide estruturamos o Design System Figma para App do Cliente e Painel do Lojista com checkout Pix/Cartão.\n\nEm qual momento você se encontra?',
    options: [
      { key: '1', label: 'Quero lançar um marketplace próprio na minha cidade/região', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Quero desenvolver um Marketplace Automotivo na minha região com base no modelo AutoParts Guide.' },
      { key: '2', label: 'Sou lojista / empresário e quero aplicativo para minha rede', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Sou lojista e desejo um aplicativo personalizado para vendas e catálogo da minha loja.' }
    ]
  },
  app_stage_pet: {
    id: 'app_stage_pet',
    botMessage: 'Sensacional! O Bicho Mimado possui TaxiDog com Google Navigation SDK, agendamento de banho/consulta e prontuário digital.\n\nQual é o seu objetivo?',
    options: [
      { key: '1', label: 'Quero um app para minha clínica / pet shop com transporte', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Tenho pet shop/clínica e quero um aplicativo com agendamento e TaxiDog estilo Bicho Mimado.' },
      { key: '2', label: 'Quero criar uma startup / super app no mercado pet', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Quero lançar uma plataforma pet com transporte e agendamentos sob demanda.' }
    ]
  },
  app_stage_fintech: {
    id: 'app_stage_fintech',
    botMessage: 'Maravilha! Com o PineapplePay e VoltFinance integramos carteiras digitais, QR Code dinâmico, split de pagamentos e controle contábil.\n\nQual o escopo da sua solução financeira?',
    options: [
      { key: '1', label: 'Sistema de pagamentos para eventos / formaturas', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Quero uma solução de pagamento e controle financeiro estilo PineapplePay.' },
      { key: '2', label: 'Aplicativo de finanças com rateio e controle de custos veiculares', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Gostei do VoltFinance e quero uma solução de finanças e gestão de despesas.' }
    ]
  },
  app_stage_custom: {
    id: 'app_stage_custom',
    botMessage: 'Entendido! Construímos soluções robustas com Clean Architecture, APIs em tempo real e regras de negócio complexas.\n\nVocê já possui orçamento estimado ou data limite para entrega?',
    options: [
      { key: '1', label: 'Preciso de um MVP lançado em até 60 dias', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Preciso de um MVP em Flutter lançado com urgência em até 60 dias.' },
      { key: '2', label: 'Projeto corporativo de médio a grande porte', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Tenho um projeto corporativo para planejar com arquitetura completa e escalável.' }
    ]
  },
  ebooks_courses: {
    id: 'ebooks_courses',
    botMessage: 'Que ótimo! Meus materiais são 100% focados na prática de produção, sem teorias vazias.\n\nQual material você tem interesse?',
    options: [
      { key: 'A', label: 'E-book: Do Zero à Publicação na Google Play', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Gostaria de tirar dúvidas sobre o E-book Do Zero à Publicação na Google Play.' },
      { key: 'B', label: 'E-book: Arquitetura Limpa em Flutter & Firebase', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Gostaria de detalhes sobre o E-book de Arquitetura Limpa e Design Patterns em Flutter.' },
      { key: 'C', label: 'Acesso aos Cursos e Aulas Práticas', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Tenho interesse nos seus cursos práticos de desenvolvimento mobile e backend.' }
    ]
  },
  consulting: {
    id: 'consulting',
    botMessage: 'Excelente! A consultoria atende empresas e devs que precisam de:\n• Auditoria de segurança e código (Code Review)\n• Otimização de performance de render e consumo de memória\n• Estruturação de esteiras CI/CD e Cloud na GCP/Firebase\n\nQual o formato ideal para você?',
    options: [
      { key: '1', label: 'Sessão pontual de diagnóstico de 2 horas', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Gostaria de agendar uma Sessão Pontual de Consultoria/Diagnóstico de 2h para meu projeto.' },
      { key: '2', label: 'Acompanhamento contínuo / Tech Lead sob demanda', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Busco consultoria continuada como Tech Lead / Especialista para apoiar meu time técnico.' }
    ]
  },
  partnership: {
    id: 'partnership',
    botMessage: 'Muito bom! Estou sempre aberto a colaborações com a comunidade de tecnologia e eventos.\n\nQual é o assunto da parceria?',
    options: [
      { key: '1', label: 'Palestra, workshop ou live técnica', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Gostaria de convidá-lo para uma palestra/workshop sobre Flutter e arquitetura mobile.' },
      { key: '2', label: 'Parceria de conteúdo ou divulgação institucional', nextStepId: 'final_transfer', finalMessagePayload: 'Olá Fábio! Quero propor uma parceria de conteúdo/divulgação técnica.' }
    ]
  },
  final_transfer: {
    id: 'final_transfer',
    botMessage: 'Perfeito! Seus dados e escolhas foram organizados com sucesso.\n\nClique no botão abaixo para transferir a conversa diretamente para o WhatsApp pessoal do Fábio Lucas com todo o histórico preenchido:',
    options: [],
    isFinal: true
  }
};

export const QUICK_REPLIES: QuickReply[] = [
  {
    shortcut: '/portfolio',
    title: 'Portfólio Oficial & Apps no Ar',
    text: 'Olá! Você pode conferir os 8 aplicativos reais em produção, cases de arquitetura e código no meu portfólio oficial: https://fabiolucas.com/#/',
    category: 'Comercial'
  },
  {
    shortcut: '/briefing',
    title: 'Questionário de Briefing Rápido',
    text: 'Para elaborar uma proposta precisa com prazo e arquitetura recomendada, me diga:\n1. Qual o objetivo principal do seu aplicativo?\n2. Quais recursos são indispensáveis (GPS, Pagamentos, Biometria, Chat)?\n3. Já possui protótipo ou telas desenhadas?\n4. Qual seu prazo desejado de entrega?',
    category: 'Comercial'
  },
  {
    shortcut: '/ebooks',
    title: 'Link dos E-books & Conteúdos Práticos',
    text: 'Nossos e-books trazem o passo a passo exato usado para construir e aprovar mais de 8 aplicativos na Google Play e App Store. Veja a prévia dos capítulos: https://fabiolucas.com/#/ebooks',
    category: 'Produtos'
  },
  {
    shortcut: '/pix',
    title: 'Chave Pix para Reserva de Consultoria',
    text: 'Para confirmar o agendamento da sessão de diagnóstico técnico, envie o comprovante Pix aqui no chat e reservaremos imediatamente a data e horário no Google Meet.',
    category: 'Pagamento'
  },
  {
    shortcut: '/tecnologias',
    title: 'Stack & Filosofia de Engenharia',
    text: 'Trabalho com Flutter no frontend para entrega multiplataforma ultra rápida (iOS e Android nativos com 60/120 FPS) e backends escaláveis com Firebase, Google Cloud Platform, Node.js e bancos SQL/NoSQL.',
    category: 'Técnico'
  }
];

export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
