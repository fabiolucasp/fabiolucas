import React, { useState } from 'react';
import { 
  Cpu, GitCommit, Clock, AlertTriangle, CheckCircle, ShieldCheck, 
  TrendingUp, DollarSign, Layers, Sparkles, RefreshCw, Plus, 
  ExternalLink, Zap, Terminal, BarChart3, HelpCircle
} from 'lucide-react';
import { 
  ProjectTokenStats, 
  AiInterventionLog, 
  GithubLiveCommit,
  MOCK_TOKEN_STATS, 
  MOCK_AI_INTERVENTIONS, 
  MOCK_GITHUB_COMMITS,
  getStoredTokenStats,
  saveStoredTokenStats
} from '../services/aiTelemetryService';

interface AiTelemetryPanelProps {
  projectId: string;
  projectName?: string;
  userRole?: 'admin' | 'client';
}

export const AiTelemetryPanel: React.FC<AiTelemetryPanelProps> = ({ 
  projectId = 'autoparts', 
  projectName = 'AutoParts Guide',
  userRole = 'admin' 
}) => {
  const isAdmin = userRole === 'admin';
  const [stats, setStats] = useState<ProjectTokenStats>(() => getStoredTokenStats(projectId));
  const [interventions, setInterventions] = useState<AiInterventionLog[]>(MOCK_AI_INTERVENTIONS);
  const [commits, setCommits] = useState<GithubLiveCommit[]>(MOCK_GITHUB_COMMITS);
  
  // Modal for Admin to Credit Tokens / Adjust
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [additionalTokens, setAdditionalTokens] = useState('5000000');

  // Simulator State
  const [simScreensTarget, setSimScreensTarget] = useState(stats.screensPlanned);

  const percentUsed = Math.min(Math.round((stats.tokensConsumed / stats.totalTokensPurchased) * 100), 100);
  const screensEfficiency = stats.screensCompleted > 0 
    ? Math.round(stats.tokensConsumed / stats.screensCompleted)
    : 0;

  const estimatedTokensNeeded = Math.max(0, (simScreensTarget - stats.screensCompleted) * (screensEfficiency || 1500000));
  const hasTokenDeficit = estimatedTokensNeeded > stats.tokensRemaining;

  const handleAddTokens = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    const tokensToAdd = Number(additionalTokens) || 0;
    const updated: ProjectTokenStats = {
      ...stats,
      totalTokensPurchased: stats.totalTokensPurchased + tokensToAdd,
      tokensRemaining: stats.tokensRemaining + tokensToAdd,
    };
    setStats(updated);
    saveStoredTokenStats(updated);
    setShowTokenModal(false);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Header Card */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#44D62C]/10 border border-[#44D62C]/30 rounded-xl text-[#44D62C]">
            <Cpu size={26} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold font-mono text-white tracking-wide">
                Telemetria da Equipe de IA & Consumo de Tokens
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#44D62C]/15 text-[#44D62C] font-bold border border-[#44D62C]/30">
                TEMPO REAL
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              Projeto: <strong className="text-white">{stats.projectName}</strong> • Monitoramento de Tokens, Horas de Agente e Intervenções de Código
            </p>
          </div>
        </div>

        {isAdmin && (
          <button
            onClick={() => setShowTokenModal(true)}
            className="px-3.5 py-2 bg-[#44D62C] text-black font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 hover:bg-[#52f036] transition-all shadow-md shadow-[#44D62C]/20 shrink-0"
          >
            <Plus size={14} /> Adicionar Saldo de Tokens
          </button>
        )}
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Tokens Purchased */}
        <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Total de Tokens Contratados</span>
            <div className="p-1.5 bg-blue-500/10 text-blue-400 rounded-lg">
              <Sparkles size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-white mb-1">
            {(stats.totalTokensPurchased / 1000000).toFixed(1)}M
          </div>
          <p className="text-[11px] text-gray-400 font-mono">
            {stats.totalTokensPurchased.toLocaleString()} tokens adquiridos
          </p>
        </div>

        {/* Tokens Consumed */}
        <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Tokens Já Consumidos</span>
            <div className="p-1.5 bg-purple-500/10 text-purple-400 rounded-lg">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-purple-400 mb-1">
            {(stats.tokensConsumed / 1000000).toFixed(1)}M
          </div>
          <p className="text-[11px] text-gray-400 font-mono">
            {percentUsed}% do pacote total consumido
          </p>
        </div>

        {/* Tokens Remaining */}
        <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Tokens Restantes (Saldo)</span>
            <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <CheckCircle size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-[#44D62C] mb-1">
            {(stats.tokensRemaining / 1000000).toFixed(1)}M
          </div>
          <p className="text-[11px] text-gray-400 font-mono">
            {stats.tokensRemaining.toLocaleString()} disponíveis
          </p>
        </div>

        {/* AI Autonomous Working Hours */}
        <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Horas de Trabalho da IA</span>
            <div className="p-1.5 bg-amber-500/10 text-amber-400 rounded-lg">
              <Clock size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-amber-400 mb-1">
            {stats.aiWorkingHours}h
          </div>
          <p className="text-[11px] text-gray-400 font-mono">
            Equipe autônoma de agentes em paralelo
          </p>
        </div>
      </div>

      {/* Burn Rate & Screen Efficiency Diagnostic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Token Efficiency vs Screens Delivered */}
        <div className="lg:col-span-2 bg-[#0E131F] border border-[#1E2638] rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-mono font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
                <BarChart3 size={16} className="text-[#44D62C]" />
                Eficiência da IA: Tokens por Tela Entregue
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Avaliação direta entre investimento de tokens e código nativo gerado
              </p>
            </div>
            <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
              percentUsed > 85 ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
            }`}>
              {stats.status}
            </span>
          </div>

          {/* Progress Bar of Tokens */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-gray-400">Progresso do Consumo do Pacote de Tokens:</span>
              <span className="text-white font-bold">{percentUsed}%</span>
            </div>
            <div className="w-full h-3 bg-[#0A0D14] border border-[#1E2638] rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all ${
                  percentUsed > 85 
                    ? 'bg-gradient-to-r from-amber-500 to-red-500' 
                    : 'bg-gradient-to-r from-emerald-500 to-[#44D62C]'
                }`}
                style={{ width: `${percentUsed}%` }}
              />
            </div>
          </div>

          {/* Ratio Comparison Cards */}
          <div className="grid grid-cols-3 gap-3 bg-[#0A0D14] border border-[#161D2B] rounded-xl p-4 text-xs font-mono">
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Telas Concluídas</span>
              <strong className="text-xl font-bold text-white block mt-0.5">{stats.screensCompleted} de {stats.screensPlanned}</strong>
              <span className="text-gray-400 text-[10px]">Telas Nativas em Flutter</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Média de Tokens/Tela</span>
              <strong className="text-xl font-bold text-purple-400 block mt-0.5">
                {(screensEfficiency / 1000).toFixed(0)}k
              </strong>
              <span className="text-gray-400 text-[10px]">Por tela de ponta a ponta</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Custo Médio/Tela</span>
              <strong className="text-xl font-bold text-[#44D62C] block mt-0.5">
                R$ {((screensEfficiency / 100000) * stats.estimatedCostPerToken * 100).toFixed(2)}
              </strong>
              <span className="text-gray-400 text-[10px]">90% mais econômico que squad clássico</span>
            </div>
          </div>

          <p className="text-xs text-gray-300 font-mono bg-[#141A28] border border-[#1E2638] p-3 rounded-lg leading-relaxed">
            💡 <strong>Diagnóstico de Engenharia:</strong> {stats.efficiencyMessage}
          </p>
        </div>

        {/* Predictive Token Projection Simulator */}
        <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-mono font-bold text-white text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
              <Zap size={16} className="text-[#44D62C]" />
              Simulador Preditivo de Telas
            </h3>
            <p className="text-xs text-gray-400 font-mono mb-4">
              Planeje quantas telas adicionais a IA construirá com o saldo disponível:
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-gray-400 mb-1">META DE TELAS TOTAIS:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={stats.screensCompleted}
                    max={stats.screensCompleted + 20}
                    value={simScreensTarget}
                    onChange={(e) => setSimScreensTarget(Number(e.target.value))}
                    className="w-full accent-[#44D62C]"
                  />
                  <span className="text-white font-bold text-sm w-8 text-right">{simScreensTarget}</span>
                </div>
              </div>

              <div className="p-3 bg-[#0A0D14] border border-[#1E2638] rounded-lg space-y-1.5 text-[11px]">
                <div className="flex justify-between text-gray-400">
                  <span>Telas a Construir:</span>
                  <span className="text-white">{Math.max(0, simScreensTarget - stats.screensCompleted)} telas</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tokens Estimados:</span>
                  <span className="text-purple-400 font-bold">{(estimatedTokensNeeded / 1000000).toFixed(2)}M</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Saldo Atual:</span>
                  <span className="text-[#44D62C] font-bold">{(stats.tokensRemaining / 1000000).toFixed(2)}M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1E2638]">
            {hasTokenDeficit ? (
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 text-xs font-mono flex items-center gap-2">
                <AlertTriangle size={15} className="shrink-0" />
                <span>Saldo insuficiente para a meta de telas. Recarga recomendada.</span>
              </div>
            ) : (
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-mono flex items-center gap-2">
                <CheckCircle size={15} className="shrink-0" />
                <span>Saldo suficiente para construir as telas planejadas!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HUMAN INTERVENTIONS BY FÁBIO LUCAS (CRITICAL REQUIREMENT) */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1E2638]">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-white text-base">
                Registro de Intervenções Humanas (Fábio Lucas - Lead Dev)
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Pontos em que a IA precisou de refatoração, destravamento de regras de negócio ou validação de arquitetura sênior
              </p>
            </div>
          </div>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 font-bold">
            {interventions.length} Intervenções Registradas
          </span>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {interventions.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0A0D14] border border-[#1E2638] rounded-xl p-4 hover:border-blue-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold text-[10px]">
                    INTERVENÇÃO TÉCNICA
                  </span>
                  <strong className="text-white text-sm">{item.phase}</strong>
                </div>
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Clock size={12} /> {item.timestamp}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#121826] p-3 rounded-lg border border-[#1E2638] my-2">
                <div>
                  <span className="text-gray-500 text-[10px] block uppercase">Gargalo / Motivo da Parada da IA:</span>
                  <p className="text-gray-300 text-xs mt-0.5 leading-relaxed">{item.reason}</p>
                </div>
                <div>
                  <span className="text-emerald-400 text-[10px] block uppercase">Solução Aplicada por Fábio Lucas:</span>
                  <p className="text-gray-200 text-xs mt-0.5 leading-relaxed">{item.solutionApplied}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                <span>Agente Envolvido: <strong className="text-gray-300">{item.aiAgent}</strong></span>
                <span className="text-[#44D62C] font-bold">
                  Economia Gerada: ~{(item.tokensSavedOrSpent / 1000).toFixed(0)}k tokens evitados de looping
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GITHUB LIVE COMMITS STREAM */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1E2638]">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#161D2B] text-gray-200 rounded-lg">
              <GitCommit size={20} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-white text-base">
                Logs do Repositório GitHub em Tempo Real
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Transparência completa de cada commit, tela implementada e tokens empregados
              </p>
            </div>
          </div>

          <a 
            href="https://github.com/fabiolucasp/fabiolucas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1"
          >
            Ver Repositório Oficial <ExternalLink size={13} />
          </a>
        </div>

        <div className="space-y-2.5 font-mono text-xs">
          {commits.map((commit) => (
            <div 
              key={commit.id}
              className="p-3 bg-[#0A0D14] border border-[#161D2B] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:border-[#44D62C]/40 transition-all"
            >
              <div className="flex items-start gap-3 min-w-0">
                <span className="px-2 py-0.5 rounded bg-[#161D2B] text-[#44D62C] font-bold text-[11px] shrink-0">
                  {commit.hash}
                </span>
                <div className="min-w-0">
                  <p className="text-white text-xs font-medium truncate">{commit.message}</p>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1">
                    <span>Autor: <strong className="text-gray-300">{commit.author}</strong></span>
                    <span>•</span>
                    <span>Alvo: <strong className="text-blue-400">{commit.screenTarget}</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-right shrink-0">
                <div>
                  <span className="text-[#44D62C] font-bold block">{(commit.tokensUsed / 1000).toFixed(0)}k tokens</span>
                  <span className="text-gray-500 text-[10px]">{commit.timestamp}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verificado ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL: ADICIONAR TOKENS (ADMIN ONLY) */}
      {showTokenModal && isAdmin && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-[#1E2638] rounded-2xl max-w-md w-full p-6 text-xs font-mono shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Plus size={16} className="text-[#44D62C]" />
              Creditar Tokens no Projeto
            </h3>
            <p className="text-gray-300 mb-4">
              Adicione tokens para expansão de telas e novas funcionalidades pela equipe de IA:
            </p>

            <form onSubmit={handleAddTokens} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">QUANTIDADE DE TOKENS</label>
                <select
                  value={additionalTokens}
                  onChange={(e) => setAdditionalTokens(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                >
                  <option value="5000000">5.000.000 tokens (+ R$ 400,00)</option>
                  <option value="10000000">10.000.000 tokens (+ R$ 750,00)</option>
                  <option value="20000000">20.000.000 tokens (+ R$ 1.400,00)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#1E2638]">
                <button
                  type="button"
                  onClick={() => setShowTokenModal(false)}
                  className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-[#52f036]"
                >
                  Confirmar Recarga
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiTelemetryPanel;
