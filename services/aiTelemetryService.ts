export interface ProjectTokenStats {
  projectId: string;
  projectName: string;
  totalTokensPurchased: number;
  tokensConsumed: number;
  tokensRemaining: number;
  screensCompleted: number;
  screensPlanned: number;
  tokensPerScreen: number;
  aiWorkingHours: number;
  estimatedCostPerToken: number; // Em R$ por 100k tokens
  status: 'Otimizado' | 'Normal' | 'Alerta de Recarga';
  efficiencyMessage: string;
}

export interface AiInterventionLog {
  id: string;
  projectId: string;
  timestamp: string;
  phase: string;
  aiAgent: string;
  reason: string;
  interventionBy: string;
  solutionApplied: string;
  tokensSavedOrSpent: number;
  status: 'Resolvido' | 'Em Validação';
}

export interface GithubLiveCommit {
  id: string;
  projectId: string;
  hash: string;
  message: string;
  author: string;
  timestamp: string;
  filesChanged: number;
  screenTarget: string;
  tokensUsed: number;
  verifiedByLeadDev: boolean;
}

export const MOCK_TOKEN_STATS: Record<string, ProjectTokenStats> = {
  autoparts: {
    projectId: 'autoparts',
    projectName: 'AutoParts Guide (Cliente & Lojista)',
    totalTokensPurchased: 50000000,
    tokensConsumed: 38450000,
    tokensRemaining: 11550000,
    screensCompleted: 35,
    screensPlanned: 35,
    tokensPerScreen: 1098571,
    aiWorkingHours: 124.5,
    estimatedCostPerToken: 0.08,
    status: 'Otimizado',
    efficiencyMessage: 'Alta produtividade de IA: 35 telas nativas homologadas com consumo dentro da margem planejada.',
  },
  pineapplepay: {
    projectId: 'pineapplepay',
    projectName: 'Pineapple Pay (Fintech & Maquininhas)',
    totalTokensPurchased: 40000000,
    tokensConsumed: 34200000,
    tokensRemaining: 5800000,
    screensCompleted: 15,
    screensPlanned: 15,
    tokensPerScreen: 2280000,
    aiWorkingHours: 98.2,
    estimatedCostPerToken: 0.08,
    status: 'Otimizado',
    efficiencyMessage: 'Módulo de split de pagamentos e conciliação Pix concluídos com testes unitários em 100%.',
  },
  'gynmove-passenger': {
    projectId: 'gynmove-passenger',
    projectName: 'GynMove (App do Passageiro)',
    totalTokensPurchased: 30000000,
    tokensConsumed: 24800000,
    tokensRemaining: 5200000,
    screensCompleted: 10,
    screensPlanned: 12,
    tokensPerScreen: 2480000,
    aiWorkingHours: 76.0,
    estimatedCostPerToken: 0.08,
    status: 'Normal',
    efficiencyMessage: 'Restam 2 telas de telemetria 3D. Saldo de tokens suficiente para a conclusão da fase QA.',
  },
  brigaelo: {
    projectId: 'brigaelo',
    projectName: 'BrigaElo (Confeitaria & Encomendas)',
    totalTokensPurchased: 20000000,
    tokensConsumed: 14500000,
    tokensRemaining: 5500000,
    screensCompleted: 10,
    screensPlanned: 10,
    tokensPerScreen: 1450000,
    aiWorkingHours: 46.8,
    estimatedCostPerToken: 0.08,
    status: 'Otimizado',
    efficiencyMessage: 'Catálogo de doces e checkout com integração WhatsApp e cálculo de demanda finalizados.',
  },
};

export const MOCK_AI_INTERVENTIONS: AiInterventionLog[] = [
  {
    id: 'int-1',
    projectId: 'brigaelo',
    timestamp: 'Ontem, às 16:40',
    phase: 'Algoritmo de Remanejamento de Entregas & Estoque',
    aiAgent: 'Agent Logistics-Optimizer v4.2',
    reason: 'A IA gerou um loop infinito ao calcular custo de deslocamento para pedido único em dia útil.',
    interventionBy: 'Fábio Lucas (Lead Dev)',
    solutionApplied: 'Refatoração da regra de agrupamento por clusters geográficos e inclusão de gatilho de incentivo ao cliente.',
    tokensSavedOrSpent: 420000,
    status: 'Resolvido',
  },
  {
    id: 'int-2',
    projectId: 'gynmove-passenger',
    timestamp: 'Há 2 dias, às 11:15',
    phase: 'Renderização GPU skwasm WebAssembly',
    aiAgent: 'Agent Flutter-Core v3.8',
    reason: 'A IA tentou compilar biblioteca C++ legada incompatível com o WebAssembly do Flutter 3.29.',
    interventionBy: 'Fábio Lucas (Lead Dev)',
    solutionApplied: 'Migração do shader GLSL para o novo compilador Impeller com fallback SVG nativo.',
    tokensSavedOrSpent: 850000,
    status: 'Resolvido',
  },
  {
    id: 'int-3',
    projectId: 'pineapplepay',
    timestamp: 'Há 4 dias, às 20:30',
    phase: 'Geração de PDF do Comprovante com QR Pix',
    aiAgent: 'Agent Security-Gate v2.1',
    reason: 'A IA não tratou o timeout da API do Banco Central em horários de pico noturno.',
    interventionBy: 'Fábio Lucas (Lead Dev)',
    solutionApplied: 'Implementação de Circuit Breaker com retry exponencial e fila offline via Hive Local Storage.',
    tokensSavedOrSpent: 310000,
    status: 'Resolvido',
  },
  {
    id: 'int-4',
    projectId: 'autoparts',
    timestamp: 'Há 1 semana, às 14:00',
    phase: 'Catálogo Veicular com Filtro em Árvore',
    aiAgent: 'Agent UI-Builder v5.0',
    reason: 'Sobrecarga de renderização com mais de 12.000 peças automotivas na listagem.',
    interventionBy: 'Fábio Lucas (Lead Dev)',
    solutionApplied: 'Adição de ListView.builder virtualizado com debounce de busca e indexação local.',
    tokensSavedOrSpent: 1200000,
    status: 'Resolvido',
  },
];

export const MOCK_GITHUB_COMMITS: GithubLiveCommit[] = [
  {
    id: 'c-1',
    projectId: 'brigaelo',
    hash: '8f3a2c1',
    message: 'feat(demand): implementar motor preditivo de remanejamento de pedidos isolados e economia de frete',
    author: 'AI Agent (Autônomo) + Revisado por Fábio Lucas',
    timestamp: 'Hoje, 02:15',
    filesChanged: 4,
    screenTarget: 'Tela de Gestão de Entregas & Demanda',
    tokensUsed: 185000,
    verifiedByLeadDev: true,
  },
  {
    id: 'c-2',
    projectId: 'brigaelo',
    hash: 'e5b74a9',
    message: 'fix(checkout): cálculo de custo de insumos e ponto de equilíbrio de lote mínimo de produção',
    author: 'Fábio Lucas (Intervenção Manual)',
    timestamp: 'Ontem, 22:30',
    filesChanged: 2,
    screenTarget: 'Controle de Lotes & Estoque de Doces',
    tokensUsed: 92000,
    verifiedByLeadDev: true,
  },
  {
    id: 'c-3',
    projectId: 'gynmove-passenger',
    hash: '3a189f2',
    message: 'feat(telemetry): telemetria 3D Elevation API com suavização de aceleração veicular',
    author: 'AI Agent (Autônomo) + Revisado por Fábio Lucas',
    timestamp: 'Há 2 dias, 18:40',
    filesChanged: 6,
    screenTarget: 'Tela do Trajeto & Tarifa em Tempo Real',
    tokensUsed: 420000,
    verifiedByLeadDev: true,
  },
  {
    id: 'c-4',
    projectId: 'autoparts',
    hash: '9d44e1c',
    message: 'perf(catalog): virtualização de 35 telas com carregamento progressivo de fotos de autopeças',
    author: 'AI Agent (Autônomo) + Homologado por Fábio Lucas',
    timestamp: 'Há 3 dias, 14:10',
    filesChanged: 8,
    screenTarget: 'Catálogo de Peças & Modal Veicular',
    tokensUsed: 510000,
    verifiedByLeadDev: true,
  },
];

const STORAGE_KEY_TOKENS = 'founderos_tokens_stats';
const STORAGE_KEY_INTERVENTIONS = 'founderos_interventions';

export function getStoredTokenStats(projectId: string): ProjectTokenStats {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_TOKENS}_${projectId}`);
    if (raw) return JSON.parse(raw);
  } catch {}
  return MOCK_TOKEN_STATS[projectId] || {
    projectId,
    projectName: 'Projeto Ativo',
    totalTokensPurchased: 20000000,
    tokensConsumed: 12000000,
    tokensRemaining: 8000000,
    screensCompleted: 6,
    screensPlanned: 10,
    tokensPerScreen: 2000000,
    aiWorkingHours: 35.0,
    estimatedCostPerToken: 0.08,
    status: 'Normal',
    efficiencyMessage: 'Monitoramento de tokens ativo para o projeto.',
  };
}

export function saveStoredTokenStats(stats: ProjectTokenStats): void {
  try {
    localStorage.setItem(`${STORAGE_KEY_TOKENS}_${stats.projectId}`, JSON.stringify(stats));
  } catch {}
}
