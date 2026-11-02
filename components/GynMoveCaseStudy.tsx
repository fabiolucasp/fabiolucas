import React, { useEffect, useState } from 'react';
import { 
  X, Map, TrendingUp, Navigation, Database, CloudLightning, Wrench, 
  Droplet, Car, ShieldCheck, Zap, BarChart2, Coins, ArrowRight, 
  Layers, Code2, Cpu, Table, FileText, Layout, User, Eye, 
  Settings, Terminal, Network, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { PROJECT_EVIDENCE } from '../projectEvidence';

interface GynMoveCaseStudyProps {
  onClose: () => void;
}

const GynMoveCaseStudy: React.FC<GynMoveCaseStudyProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'produto' | 'arquitetura' | 'dados'>('produto');
  const [activeArchSubTab, setActiveArchSubTab] = useState<'init' | 'nav' | 'notif'>('init');
  const [activeDbSubTab, setActiveDbSubTab] = useState<'global' | 'motorista' | 'passageiro' | 'volt'>('global');
  const evidence = PROJECT_EVIDENCE.gynmove;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors for GynMove:
  // Primary Green: #13AC6F
  // Secondary Dark: #0E1412

  return (
    <div role="dialog" aria-modal="true" aria-label="Case GynMove" className="fixed inset-0 z-[100] bg-[#0E1412] overflow-y-auto font-sans selection:bg-[#13AC6F] selection:text-[#FFF] text-[#EEEEEE]">
      
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#0E1412]/95 backdrop-blur-md border-b border-[#13AC6F]/20 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#13AC6F] p-1.5 rounded-sm shadow-[0_0_10px_rgba(19,172,111,0.4)]">
              <Navigation size={18} className="text-white" />
            </div>
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-wide">
              Gyn<span className="text-[#13AC6F]">Move</span>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="hidden md:flex bg-[#16201D] p-1 rounded-lg border border-[#13AC6F]/10">
            <button 
              onClick={() => setActiveTab('produto')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs transition-all ${
                activeTab === 'produto' 
                  ? 'bg-[#13AC6F] text-white font-bold shadow-[0_0_10px_rgba(19,172,111,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1C2925]'
              }`}
            >
              <Car size={14} />
              Produto & Algoritmo
            </button>
            <button 
              onClick={() => setActiveTab('arquitetura')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs transition-all ${
                activeTab === 'arquitetura' 
                  ? 'bg-[#13AC6F] text-white font-bold shadow-[0_0_10px_rgba(19,172,111,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1C2925]'
              }`}
            >
              <Cpu size={14} />
              Arquitetura & Fluxos
            </button>
            <button 
              onClick={() => setActiveTab('dados')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs transition-all ${
                activeTab === 'dados' 
                  ? 'bg-[#13AC6F] text-white font-bold shadow-[0_0_10px_rgba(19,172,111,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-[#1C2925]'
              }`}
            >
              <Table size={14} />
              Modelagem de Dados
            </button>
          </div>
        </div>

        <button 
          aria-label="Fechar case GynMove"
          onClick={onClose}
          className="p-2 rounded-full bg-[#1A2522] text-[#13AC6F] hover:bg-[#13AC6F] hover:text-[#FFF] transition-all border border-[#13AC6F]/30"
          title="Fechar Case Study"
        >
          <X size={20} />
        </button>
      </div>

      {/* Mobile Navigation Tabs Bar */}
      <div className="md:hidden fixed top-[69px] left-0 right-0 z-[101] bg-[#121B18] border-b border-[#13AC6F]/20 flex justify-around p-2">
        <button 
          onClick={() => setActiveTab('produto')}
          className={`flex-1 flex flex-col items-center py-2 text-[10px] font-mono transition-colors ${
            activeTab === 'produto' ? 'text-[#13AC6F] font-bold' : 'text-gray-400'
          }`}
        >
          <Car size={16} className="mb-1" />
          Produto
        </button>
        <button 
          onClick={() => setActiveTab('arquitetura')}
          className={`flex-1 flex flex-col items-center py-2 text-[10px] font-mono transition-colors ${
            activeTab === 'arquitetura' ? 'text-[#13AC6F] font-bold' : 'text-gray-400'
          }`}
        >
          <Cpu size={16} className="mb-1" />
          Arquitetura
        </button>
        <button 
          onClick={() => setActiveTab('dados')}
          className={`flex-1 flex flex-col items-center py-2 text-[10px] font-mono transition-colors ${
            activeTab === 'dados' ? 'text-[#13AC6F] font-bold' : 'text-gray-400'
          }`}
        >
          <Table size={16} className="mb-1" />
          Modelagem
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto pt-48 md:pt-32 pb-24 px-6">
        {evidence && (
          <div className="mb-12 rounded-2xl border border-[#13AC6F]/30 bg-[#121B18] p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13AC6F]/15 text-[#13AC6F] text-xs font-mono uppercase tracking-wider">
                <CheckCircle2 size={14} /> {evidence.status}
              </span>
              <span className="text-xs font-mono text-gray-400">{evidence.headline}</span>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">{evidence.audience}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {evidence.benefits.map((b) => (
                <div key={b.title} className="bg-[#0E1412] border border-[#13AC6F]/15 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-[#EEEEEE] font-mono mb-1">{b.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 border-t border-[#13AC6F]/15 pt-4 font-mono">
              <strong className="text-[#13AC6F]">Status de produção e escopo:</strong> {evidence.limits}
            </p>
          </div>
        )}
        
        {/* ========================================== */}
        {/* TAB 1: PRODUTO & ALGORITMO */}
        {/* ========================================== */}
        {activeTab === 'produto' && (
          <div className="space-y-24 animate-fadeIn">
            {/* HERO SECTION */}
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh] relative">
              <div className="space-y-8 relative z-10">
                <div className="inline-block px-4 py-1 border border-[#13AC6F] text-[#13AC6F] rounded-full text-xs font-mono uppercase tracking-widest bg-[#13AC6F]/10">
                  Mobilidade & Fintech
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight font-mono">
                  Lucro Real <br />
                  <span className="text-[#13AC6F] shadow-sm">Ponto a Ponto</span>
                </h1>
                <p className="text-[#AAAAAA] text-lg max-w-xl leading-relaxed">
                  Mais que um app de corridas. Um sistema de inteligência financeira integrado de mobilidade urbana que calcula o custo exato de cada rota considerando relevo 3D, telemetria veicular em tempo real e depreciação física programada.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                   <FeatureTag icon={<Map size={14} />} label="Google Routes API" />
                   <FeatureTag icon={<CloudLightning size={14} />} label="Elevation API" />
                   <FeatureTag icon={<TrendingUp size={14} />} label="Custo Operacional" />
                </div>
              </div>
              
              <div className="relative h-[600px] flex items-center justify-center">
                {/* Background Map Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#13AC6F]/20 to-transparent rounded-full blur-[80px]"></div>
                
                {/* Phone Mockup */}
                <div className="relative w-[300px] h-[600px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#0a0a0a] overflow-hidden shadow-2xl z-10 border-slate-900 shadow-[#13AC6F]/10">
                    {/* App Header */}
                    <div className="bg-[#13AC6F] p-6 pb-8 rounded-b-3xl">
                        <div className="flex justify-between items-center text-white mb-4">
                            <span className="font-bold font-mono text-sm">Resumo da Corrida</span>
                            <span className="text-[10px] bg-white/20 px-2 py-1 rounded font-mono font-bold">Nível Ouro</span>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] text-white/80 uppercase tracking-widest">Lucro Líquido Real</p>
                            <h2 className="text-4xl font-bold text-white font-mono">R$ 65,79</h2>
                        </div>
                    </div>
    
                    {/* Route Elevation Visualization */}
                    <div className="px-4 -mt-6">
                        <div className="bg-[#222] rounded-xl p-4 shadow-lg border border-[#333]">
                            <div className="flex justify-between items-end h-16 gap-1 mb-2">
                                 {/* Elevation Graph Mockup */}
                                 {[20, 30, 45, 60, 40, 30, 20, 25, 50, 80, 70, 40].map((h, i) => (
                                     <div key={i} className="w-full bg-[#13AC6F]/30 rounded-t-sm relative group">
                                         <div style={{height: `${h}%`}} className="absolute bottom-0 w-full bg-[#13AC6F] rounded-t-sm group-hover:bg-white transition-colors"></div>
                                     </div>
                                 ))}
                            </div>
                            <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                                <span>Embarque</span>
                                <span>Relevo da Rota (3D)</span>
                                <span>Destino</span>
                            </div>
                        </div>
                    </div>
    
                    {/* Costs Breakdown */}
                    <div className="p-4 space-y-3">
                        <CostRow label="Faturamento Bruto" value="R$ 79,60" positive />
                        <CostRow label="Combustível (Relevo)" value="- R$ 10,55" />
                        <CostRow label="Manutenção (Pneus/Óleo)" value="- R$ 3,26" />
                        
                        <div className="mt-2 p-3 bg-[#13AC6F]/10 rounded-lg border border-[#13AC6F]/30">
                            <div className="flex items-center gap-2 text-[#13AC6F] text-xs font-bold mb-1">
                                <Zap size={14} /> Economia Start-Stop
                            </div>
                            <p className="text-[9px] text-gray-400 leading-normal">
                                Seu carro economizou R$ 0,40 em marcha lenta nos semáforos.
                            </p>
                        </div>
                    </div>
    
                    {/* Action Button */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <button className="w-full bg-[#13AC6F] text-white font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(19,172,111,0.4)] text-sm font-mono tracking-wider">
                            Aceitar Próxima
                        </button>
                    </div>
                </div>
              </div>
            </div>
    
            {/* ALGORITHM SECTION (Elevation & Cut-off) */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#13AC6F]/10 rounded-xl text-[#13AC6F]">
                      <CloudLightning size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#F7F7F7] font-mono">Algoritmo de Relevo (3D)</h2>
                        <p className="text-[#888]">Cálculo dinâmico baseado em esforço gravitacional e física veicular.</p>
                    </div>
                </div>
    
                <div className="grid md:grid-cols-2 gap-12 bg-[#141E1B] p-8 rounded-3xl border border-[#13AC6F]/20">
                    <div className="space-y-6">
                        <p className="text-[#AAAAAA] leading-relaxed">
                            Aplicativos comuns calculam o custo e distância de forma puramente plana (2D). O **GynMove** implementa uma engine física tridimensional. Usando a **Google Elevation API**, dividimos a rota em segmentos espaciais e calculamos a variação de esforço mecânico.
                        </p>
                        <ul className="space-y-4">
                            <LogicItem 
                                label="Subidas Íngremes (> 10% de inclinação)" 
                                desc="Acréscimo automático de 25% na queima teórica de combustível devido ao ganho de energia potencial gravitacional." 
                                color="text-red-400" 
                            />
                            <LogicItem 
                                label="Descidas e Declives (< -10% de inclinação)" 
                                desc="Ativação teórica do Cut-Off eletrônico de combustível, gerando economia real de 25% no consumo operacional." 
                                color="text-[#13AC6F]" 
                            />
                            <LogicItem 
                                label="Detecção Dinâmica de Paradas (Start-Stop)" 
                                desc="Análise combinada de telemetria para remover consumo desnecessário de marcha lenta em semáforos ou trânsito parado." 
                                color="text-blue-400" 
                            />
                        </ul>
                    </div>
                    
                    {/* Code Snippet Visual */}
                    <div className="bg-[#090D0C] p-6 rounded-xl border border-[#13AC6F]/20 font-mono text-xs overflow-x-auto w-full relative flex flex-col justify-between">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-[#13AC6F] text-black font-bold font-mono text-[10px]">TypeScript</div>
                        <div className="space-y-1.5 text-gray-400">
                          <div><span className="text-gray-600">// Processamento de Amostragem do Relevo</span></div>
                          <div><span className="text-purple-400">const</span> <span className="text-white">baseConsumo</span> = <span className="text-amber-400">0.08</span>; <span className="text-gray-600">// L/km padrão</span></div>
                          <div><span className="text-purple-400">let</span> <span className="text-white">consumoTotal</span> = <span className="text-amber-400">0</span>;</div>
                          <br />
                          <div><span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> <span className="text-white">i</span> = <span className="text-amber-400">1</span>; <span className="text-white">i</span> &lt; <span className="text-white">altitudes.length</span>; <span className="text-white">i</span>++) &#123;</div>
                          <div className="pl-4"><span className="text-purple-400">const</span> <span className="text-white">diffAlt</span> = <span className="text-white">altitudes[i]</span> - <span className="text-white">altitudes[i-1]</span>;</div>
                          <div className="pl-4"><span className="text-purple-400">let</span> <span className="text-white">multiplicador</span> = <span className="text-amber-400">1.0</span>;</div>
                          <br />
                          <div className="pl-4"><span className="text-purple-400">if</span> (<span className="text-white">diffAlt</span> &gt; <span className="text-amber-400">0.1</span>) &#123;</div>
                          <div className="pl-8"><span className="text-white">multiplicador</span> = <span className="text-amber-400">1.25</span>; <span className="text-gray-600">// Subida</span></div>
                          <div className="pl-4">&#125; <span className="text-purple-400">else if</span> (<span className="text-white">diffAlt</span> &lt; -<span className="text-amber-400">0.1</span>) &#123;</div>
                          <div className="pl-8"><span className="text-white">multiplicador</span> = <span className="text-amber-400">0.75</span>; <span className="text-gray-600">// Descida (Cut-Off)</span></div>
                          <div className="pl-4">&#125;</div>
                          <br />
                          <div className="pl-4"><span className="text-white">consumoTotal</span> += (<span className="text-white">distanciaSegmento</span> * <span className="text-white">baseConsumo</span>) * <span className="text-white">multiplicador</span>;</div>
                          <div>&#125;</div>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* MAINTENANCE SECTION (Invisible Costs) */}
            <div>
                <h2 className="text-3xl font-bold text-[#F7F7F7] mb-4 text-center font-mono">Gestão de Custos Invisíveis</h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                  Auxilia o motorista parceiro a reter margem financeira real para cobrir manutenções preventivas e periódicas do veículo por quilômetro rodado.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <MaintenanceCard 
                        title="Kit Revisão Preventiva" 
                        value="R$ 0,03 / km" 
                        items={["Filtros de ar, combustível e cabine", "Troca periódica de óleo lubrificante", "Componentes de ignição (velas/cabos)"]}
                        icon={<Droplet />}
                    />
                    <MaintenanceCard 
                        title="Desgaste Físico & Suspensão" 
                        value="R$ 0,07 / km" 
                        items={["Amortecedores e coxins", "Substituição e alinhamento de pneus", "Fluido e pastilhas de freio nativos"]}
                        icon={<Wrench />}
                    />
                    <MaintenanceCard 
                        title="Higienização e Estética" 
                        value="R$ 0,06 / km" 
                        items={["Lavagem externa a cada 3 dias", "Aspiração completa de poeira e resíduos", "Limpeza química de acabamento"]}
                        icon={<ShieldCheck />}
                    />
                </div>
    
                <div className="mt-8 bg-[#13AC6F]/10 border border-[#13AC6F]/30 p-6 rounded-2xl text-center">
                    <p className="text-[#EEEEEE] max-w-4xl mx-auto">
                        O motor lógico desconta automaticamente **R$ 0,16 por KM** do faturamento bruto projetado das corridas. Isso cria uma **Reserva Virtual** no aplicativo, impedindo que o motorista consuma o dinheiro destinado a manter a sua ferramenta de trabalho saudável.
                    </p>
                </div>
            </div>
    
            {/* GAMIFICATION SECTION (Levels) */}
            <div className="relative overflow-hidden bg-[#141E1B] rounded-3xl p-8 md:p-16 border border-[#13AC6F]/20">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FFD700]/10 to-transparent rounded-full blur-[100px] -z-10"></div>
    
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#F7F7F7] mb-6 font-mono">Níveis do Clube de Recompensas</h2>
                        <p className="text-[#AAAAAA] mb-8 leading-relaxed">
                            Mecânica de incentivo e gamificação baseada em frequência de corridas e avaliações. Conforme o motorista avança nos níveis do ecossistema, os multiplicadores de ganho por KM e por Minuto são elevados em tempo real.
                        </p>
                        
                        <div className="space-y-4">
                            <LevelRow level="Bronze" priceKm="R$ 1,00" priceMin="R$ 0,50" />
                            <LevelRow level="Prata" priceKm="R$ 1,50" priceMin="R$ 0,75" />
                            <LevelRow level="Ouro" priceKm="R$ 2,00" priceMin="R$ 1,00" active />
                        </div>
                    </div>
    
                    <div className="flex justify-center relative">
                        {/* Golden Badge Visual */}
                        <div className="w-48 h-48 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,215,0,0.3)] relative z-10 border-4 border-yellow-300">
                            <div className="text-[#0E1412] text-center">
                                <Coins size={44} className="mx-auto mb-2 text-yellow-950 animate-bounce" />
                                <span className="font-bold font-mono text-xl block tracking-widest text-yellow-950">OURO</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FFD700] blur-2xl opacity-20 animate-pulse"></div>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* TAB 2: ARQUITETURA & ENGENHARIA */}
        {/* ========================================== */}
        {activeTab === 'arquitetura' && (
          <div className="space-y-16 animate-fadeIn">
            {/* TOP CARDS GRID */}
            <div className="grid md:grid-cols-3 gap-6">
              <ArchCard 
                icon={<Code2 size={24} />}
                title="Zero State Management"
                desc="Comunicação e passagem de estado reativas baseadas estritamente em StatefulWidgets nativos, setState() e callbacks bem definidos na árvore de widgets. Sem Riverpod, Bloc ou GetX para máxima leveza e estabilidade."
              />
              <ArchCard 
                icon={<Cpu size={24} />}
                title="Prevenção de Estouros"
                desc="Redimensionamento dinâmico imediato da lifecycle nativa (ChannelBuffers) para 20 posições durante a inicialização assíncrona. Evita descartes de mensagens e warnings de ciclo de vida do Flutter Web no bootstrap."
              />
              <ArchCard 
                icon={<Network size={24} />}
                title="Interoperabilidade skwasm"
                desc="Inicialização adaptiva com detecção de SharedArrayBuffer no navegador. Prioriza compilação nativa em skwasm (WebAssembly acelerado por GPU) com fallback de thread única para navegadores como o Safari de legado."
              />
            </div>

            {/* INTERACTIVE FLOWCHARTS SUBTABS PANEL */}
            <div className="bg-[#141E1B] p-8 rounded-3xl border border-[#13AC6F]/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#13AC6F]/20 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono text-white">Visualização de Processos</h3>
                  <p className="text-[#888] text-sm">Entenda como as regras de negócio, dados e telas interagem no Flutter.</p>
                </div>
                
                {/* Flowcharts sub-navigation */}
                <div className="flex bg-[#0E1412] p-1 rounded-lg border border-[#13AC6F]/10 text-xs">
                  <button 
                    onClick={() => setActiveArchSubTab('init')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeArchSubTab === 'init' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Bootstrapping
                  </button>
                  <button 
                    onClick={() => setActiveArchSubTab('nav')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeArchSubTab === 'nav' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Navegação & Fluxo
                  </button>
                  <button 
                    onClick={() => setActiveArchSubTab('notif')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeArchSubTab === 'notif' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Notificações Híbridas
                  </button>
                </div>
              </div>

              {/* FLOWCHART 1: BOOTSTRAPPING & ENGINE INITIALIZATION */}
              {activeArchSubTab === 'init' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-[#090D0C] p-6 rounded-xl border border-[#13AC6F]/10 space-y-4">
                    <h4 className="text-lg font-bold text-[#13AC6F] font-mono">Ciclo de Inicialização Nativa</h4>
                    <p className="text-gray-400 text-sm">
                      Mapeia o ciclo de bootstrap desde a requisição HTML inicial até a exibição acelerada do frame do Flutter, otimizando o carregamento visual com transição de loaders em GPU.
                    </p>
                  </div>
                  
                  {/* SVG FLOWCHART */}
                  <div className="flex flex-col items-center justify-center p-6 bg-[#090D0C] rounded-xl border border-[#13AC6F]/10 overflow-x-auto">
                    <div className="min-w-[600px] flex flex-col items-center gap-6">
                      <div className="flex items-center gap-4">
                        <FlowStep num="1" title="Acesso Web" desc="Carrega index.html" />
                        <FlowArrow />
                        <FlowStep num="2" title="Loader Neon" desc="CSS Instantâneo" />
                        <FlowArrow />
                        <FlowStep num="3" title="Engine skwasm" desc="SharedArrayBuffer?" />
                      </div>
                      <div className="h-6 w-px bg-[#13AC6F]/20"></div>
                      <div className="flex items-center gap-12">
                        <div className="border border-green-500/30 bg-green-500/10 p-3 rounded-lg text-center font-mono text-xs w-44">
                          <span className="text-[#13AC6F] font-bold block mb-1">Sim (Multithread)</span>
                          Compila Wasm Skia GPU
                        </div>
                        <div className="border border-yellow-500/30 bg-yellow-500/10 p-3 rounded-lg text-center font-mono text-xs w-44">
                          <span className="text-yellow-500 font-bold block mb-1">Não (Safari/iOS)</span>
                          Downgrade Canvaskit
                        </div>
                      </div>
                      <div className="h-6 w-px bg-[#13AC6F]/20"></div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                          <FlowStep num="4" title="Channel Buffers" desc="Lifecycle Buffer = 20" />
                          <FlowArrow />
                          <FlowStep num="5" title="runApp()" desc="Drena e Inicia Canvas" />
                          <FlowArrow />
                          <FlowStep num="6" title="Loader Fade-out" desc="Fade 600ms DOM" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOOTSTRAP CODE BLOCK */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-md font-bold text-[#13AC6F] font-mono flex items-center gap-2">
                        <Terminal size={16} /> Prevenção de Condições de Corrida
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Durante os segundos em que o app carrega dependências pesadas, a engine de mensagens interna (`flutter/lifecycle`) está rodando. Se a janela do navegador mudar de tamanho ou foco antes da tela principal ser montada, a lifecycle descarta os pacotes por falta de buffer (tamanho padrão = 1). Redimensionar o buffer de dados resolve o bug no console.
                      </p>
                    </div>
                    <div className="bg-[#090D0C] p-4 rounded-xl border border-[#13AC6F]/10 font-mono text-xs text-gray-400 w-full overflow-x-auto">
                      <div><span className="text-purple-400">void</span> <span className="text-blue-400">main</span>() &#123;</div>
                      <div className="pl-4"><span className="text-white">WidgetsFlutterBinding</span>.ensureInitialized();</div>
                      <div className="pl-4 text-green-400"><span className="text-gray-600">// Resolve overflow de eventos na inicialização</span></div>
                      <div className="pl-4"><span className="text-white">ui.channelBuffers</span>.resize(<span className="text-amber-400">'flutter/lifecycle'</span>, <span className="text-amber-400">20</span>);</div>
                      <br />
                      <div className="pl-4"><span className="text-white">runApp</span>(<span className="text-purple-400">const</span> <span className="text-white">MyApp</span>());</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>
              )}

              {/* FLOWCHART 2: NAVEGAÇÃO & CARTEIRAS */}
              {activeArchSubTab === 'nav' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-[#090D0C] p-6 rounded-xl border border-[#13AC6F]/10 space-y-4">
                    <h4 className="text-lg font-bold text-[#13AC6F] font-mono">Organização de Estados e Carteiras (PJ vs PF)</h4>
                    <p className="text-gray-400 text-sm">
                      Diz respeito ao isolamento estrito de domínio para manter as contas operacionais (Carteira PJ GynMove / Combustível, Depreciação e DAS MEI) apartadas das despesas pessoais (Carteira PF VoltFinance). Dinheiro flui apenas por Pro-labore formal após impostos.
                    </p>
                  </div>

                  {/* WALLET ISOLATION FLOWCHART */}
                  <div className="flex justify-center p-6 bg-[#090D0C] rounded-xl border border-[#13AC6F]/10 overflow-x-auto">
                    <div className="min-w-[650px] flex flex-col items-center gap-6">
                      <div className="grid grid-cols-2 gap-24 w-full">
                        <div className="border border-red-500/20 bg-[#161012] p-4 rounded-xl space-y-3">
                          <span className="text-red-400 font-bold font-mono text-sm block border-b border-red-500/10 pb-1 flex items-center gap-2">
                            <TrendingUp size={16} /> Carteira PJ (Operação GynMove)
                          </span>
                          <ul className="text-xs space-y-1.5 text-gray-400">
                            <li>• Receita bruta de corridas app</li>
                            <li>• Margem de combustível (-25% relevo)</li>
                            <li>• Reserva preventiva de manutenção (R$ 0,16/km)</li>
                            <li>• Pagamento de DAS MEI (Impostos fiscais)</li>
                          </ul>
                        </div>
                        <div className="border border-green-500/20 bg-[#101612] p-4 rounded-xl space-y-3">
                          <span className="text-[#13AC6F] font-bold font-mono text-sm block border-b border-green-500/10 pb-1 flex items-center gap-2">
                            <Coins size={16} /> Carteira PF (Pessoal VoltFinance)
                          </span>
                          <ul className="text-xs space-y-1.5 text-gray-400">
                            <li>• Transferências exclusivas por Pró-labore</li>
                            <li>• Pagamentos de aluguel e mercado</li>
                            <li>• Lazer (Steam, assinaturas e jogos)</li>
                            <li>• Metas de faturamento e wishlists pessoais</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 my-2">
                        <div className="h-0.5 w-32 bg-red-500/30"></div>
                        <div className="bg-[#13AC6F] text-black font-bold font-mono text-xs px-4 py-2 rounded-full shadow-[0_0_15px_rgba(19,172,111,0.4)]">
                          Transferência via Pró-labore
                        </div>
                        <div className="h-0.5 w-32 bg-[#13AC6F]/30"></div>
                      </div>

                      <div className="bg-[#121B18] border border-[#13AC6F]/20 p-4 rounded-xl text-center w-full">
                        <span className="text-white font-bold text-xs block mb-1">Processamento de Amortização de Dívidas</span>
                        <p className="text-[11px] text-gray-400">
                          Reserva compulsória de 5% de todo o lucro líquido gerado pelo motorista no ecossistema GynMove é retida e encaminhada ao caixa de passivos de VoltFinance para quitar parcelamentos de DAS MEI ativos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FLOWCHART 3: NOTIFICAÇÕES HÍBRIDAS */}
              {activeArchSubTab === 'notif' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-[#090D0C] p-6 rounded-xl border border-[#13AC6F]/10 space-y-4">
                    <h4 className="text-lg font-bold text-[#13AC6F] font-mono">Orquestração de Entrega Reativa & Safari Fallbacks</h4>
                    <p className="text-gray-400 text-sm">
                      Garante 100% de confiabilidade e recebimento de avisos de telemetria e ralo financeiro nos mais diversos dispositivos móveis (como o clássico iPhone 8 Plus com Safari antigo) sem falhas de API do navegador.
                    </p>
                  </div>

                  {/* NOTIFICATION FALLBACK PATH */}
                  <div className="flex justify-center p-6 bg-[#090D0C] rounded-xl border border-[#13AC6F]/10 overflow-x-auto">
                    <div className="min-w-[650px] flex flex-col items-center gap-6">
                      <div className="flex items-center gap-4">
                        <FlowStep num="1" title="Alerta Gerado" desc="Motor de Regras IA" />
                        <FlowArrow />
                        <FlowStep num="2" title="Switches Ativos" desc="Valida Canal no Perfil" />
                        <FlowArrow />
                        <FlowStep num="3" title="Suporte do Nav" desc="Suporta Push nativo?" />
                      </div>
                      
                      <div className="flex justify-between w-full px-12 mt-2">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-xs text-[#13AC6F] font-bold font-mono">Sim (Chrome, Edge, PWA)</span>
                          <div className="h-6 w-px bg-green-500/20"></div>
                          <div className="border border-green-500/20 bg-green-500/5 p-3 rounded-lg text-center font-mono text-[10px] w-48">
                            <span className="text-white font-bold block mb-1">Service Worker Native Push</span>
                            Dispara Notificação do Sistema
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <span className="text-xs text-yellow-500 font-bold font-mono">Não (Safari iOS / Bloqueado)</span>
                          <div className="h-6 w-px bg-yellow-500/20"></div>
                          <div className="border border-yellow-500/20 bg-yellow-500/5 p-3 rounded-lg text-center font-mono text-[10px] w-48">
                            <span className="text-yellow-500 font-bold block mb-1">Overlay In-App Fallback</span>
                            Animação Toast Curves.easeOutBack
                          </div>
                        </div>
                      </div>

                      <div className="h-4 w-px bg-[#13AC6F]/20"></div>
                      <div className="bg-[#121B18] border border-[#13AC6F]/20 p-4 rounded-xl text-center w-full flex justify-around items-center">
                        <div className="text-left max-w-md">
                          <span className="text-white font-bold text-xs block mb-1">Direcionamento Dinâmico de Clique (Payload)</span>
                          <span className="text-[10px] text-gray-500 block">
                            Tanto o push quanto o toast lêem metadados para redirecionar o usuário:
                          </span>
                        </div>
                        <div className="flex gap-2 text-[9px] font-mono text-gray-400">
                          <span className="bg-[#1C2925] border border-[#13AC6F]/20 px-2 py-1 rounded">Fiscal/Veículo → Aba CNPJ</span>
                          <span className="bg-[#1C2925] border border-[#13AC6F]/20 px-2 py-1 rounded">Ralo/Metas → Aba CPF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* TAB 3: MODELAGEM DE DADOS */}
        {/* ========================================== */}
        {activeTab === 'dados' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="bg-[#141E1B] p-8 rounded-3xl border border-[#13AC6F]/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#13AC6F]/20 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono text-white">Dicionário de Dados do Ecossistema</h3>
                  <p className="text-[#888] text-sm">Estruturas completas das tabelas e coleções integradas do projeto mestre `gynmove-fde7e`.</p>
                </div>
                
                {/* Database Subtabs selector */}
                <div className="flex bg-[#0E1412] p-1 rounded-lg border border-[#13AC6F]/10 text-xs">
                  <button 
                    onClick={() => setActiveDbSubTab('global')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeDbSubTab === 'global' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Cadastro Mestre
                  </button>
                  <button 
                    onClick={() => setActiveDbSubTab('motorista')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeDbSubTab === 'motorista' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Motoristas
                  </button>
                  <button 
                    onClick={() => setActiveDbSubTab('passageiro')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeDbSubTab === 'passageiro' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Passageiros
                  </button>
                  <button 
                    onClick={() => setActiveDbSubTab('volt')}
                    className={`px-3 py-1.5 rounded transition-all font-mono ${
                      activeDbSubTab === 'volt' ? 'bg-[#13AC6F] text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Volt Finance
                  </button>
                </div>
              </div>

              {/* DATA DICTIONARY CONTENT: GLOBAL USER */}
              {activeDbSubTab === 'global' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="bg-[#090D0C] p-5 rounded-xl border border-[#13AC6F]/10 flex items-center gap-4">
                    <User size={32} className="text-[#13AC6F]" />
                    <div>
                      <h4 className="text-md font-bold text-white font-mono">Coleção Principal: `/usuarios/&#123;uid&#125;`</h4>
                      <p className="text-gray-400 text-xs mt-1">Centraliza a autenticação unificada de passageiros, motoristas e gestores financeiros sob a mesma conta.</p>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto rounded-xl border border-[#13AC6F]/10">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#0E1412] text-[#13AC6F] font-mono border-b border-[#13AC6F]/20">
                          <th className="p-4 font-semibold">Campo</th>
                          <th className="p-4 font-semibold">Tipo</th>
                          <th className="p-4 font-semibold">Descrição</th>
                          <th className="p-4 font-semibold">Origem do Dado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#13AC6F]/10 text-gray-300">
                        <TableRow field="idUsuario" type="String" desc="Identificador mestre exclusivo do Firebase Authentication (uid)" src="Comum" />
                        <TableRow field="idPagarMe" type="String" desc="ID da conta ou token associado no gateway de transações Pagar.me" src="Comum" />
                        <TableRow field="nome" type="String" desc="Nome completo de registro do usuário" src="Comum" />
                        <TableRow field="cpf" type="String" desc="CPF verificado (chave primária fiscal e auditoria)" src="Comum" />
                        <TableRow field="email" type="String" desc="Endereço de correio eletrônico de autenticação" src="Comum" />
                        <TableRow field="telefone" type="String" desc="Número de telefone móvel de contato (Ex: 991823901)" src="Comum" />
                        <TableRow field="roles" type="Array<String>" desc="Papéis concedidos no ecossistema: ['passageiro', 'motorista', 'volt_finance']" src="Comum" />
                        <TableRow field="pontosClube" type="Integer" desc="Pontuação ativa acumulada no clube de benefícios e pontuações" src="Passageiro" />
                        <TableRow field="veiculoAtivoId" type="String" desc="Referência ao ID do veículo vinculado e ativo para corridas" src="Motorista" />
                        <TableRow field="statusOnline" type="Boolean" desc="Indica se o motorista está visível no radar de despacho em tempo real" src="Motorista" />
                        <TableRow field="totalMeiDebt" type="Double" desc="Saldo devedor consolidado das pendências fiscais de guias DAS" src="VoltFinance" />
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* DATA DICTIONARY CONTENT: DRIVER TABLES */}
              {activeDbSubTab === 'motorista' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="grid md:grid-cols-3 gap-4">
                    <SubCollCard title="/dadosProfissionais" type="Firestore Local" desc="Contém certidões, credenciamento legal (CNH, Categoria EAR), modelo, placa e cor do veículo ativo aprovados pela moderação." />
                    <SubCollCard title="/carteiraMotorista" type="Firestore Local" desc="Consolida saldos pendentes, histórico acumulado bruto, chave Pix cadastrada para repasse bancário diário automático." />
                    <SubCollCard title="/telemetriaCabine" type="Real-time IoT Log" desc="Acumula logs gerados dinamicamente pela IA da cabine do carro (vômito, sujeiras, lotação excedente de passageiros e multas aplicadas)." />
                  </div>

                  <div className="bg-[#090D0C] p-4 rounded-xl border border-[#13AC6F]/10">
                    <h4 className="text-sm font-bold text-[#13AC6F] font-mono mb-4">Campos Críticos de IA / Telemetria Cabine</h4>
                    <div className="overflow-x-auto rounded-lg border border-[#13AC6F]/10">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-[#0E1412] text-[#13AC6F] font-mono border-b border-[#13AC6F]/20">
                            <th className="p-4 font-semibold">Campo</th>
                            <th className="p-4 font-semibold">Tipo</th>
                            <th className="p-4 font-semibold">Significado da Telemetria</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#13AC6F]/10 text-gray-300">
                          <TableRow field="canalAlerta" type="String" desc="Canal identificado pelo sensor: gynmove_channel_higiene_lixo (lixo jogado), gynmove_channel_sinistro_biologico (sujeiras corporais/vômito), gynmove_channel_seguranca_lotacao (excesso de pessoas)." src="" />
                          <TableRow field="confiancaIA" type="Double" desc="Métrica probabilística de assertividade do modelo de computer vision (de 0.00 a 1.00)." src="" />
                          <TableRow field="valorPenalidade" type="Double" desc="Taxa cobrada em tempo real no cartão do passageiro e repassada ao motorista como higienização." src="" />
                          <TableRow field="statusPaga" type="Boolean" desc="Informa se a multa foi retida na conclusão do trajeto pela administradora." src="" />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* DATA DICTIONARY CONTENT: PASSENGER TABLES */}
              {activeDbSubTab === 'passageiro' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="grid md:grid-cols-3 gap-4">
                    <SubCollCard title="/locaisFavoritos" type="Firestore Local" desc="Atalhos customizados de geolocalização do passageiro (latitude, longitude, nome como 'Casa' ou 'Trabalho') para aceleração do pedido." />
                    <SubCollCard title="/historicoCorridas" type="Firestore Local" desc="Livro de viagens executadas, informando pontos exatos de embarque/desembarque (GeoPoint), status e multas de telemetria integradas." />
                    <SubCollCard title="/cuponsDisponiveis" type="Firestore Local" desc="Contém cupons e códigos promocionais ativos vinculados à conta do passageiro, elegíveis de acordo com o valor da rota." />
                  </div>
                  
                  <div className="bg-[#090D0C] p-4 rounded-xl border border-[#13AC6F]/10">
                    <h4 className="text-sm font-bold text-[#13AC6F] font-mono mb-4">Mapeamento de Viagem (`/historicoCorridas`)</h4>
                    <div className="overflow-x-auto rounded-lg border border-[#13AC6F]/10">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-[#0E1412] text-[#13AC6F] font-mono border-b border-[#13AC6F]/20">
                            <th className="p-4 font-semibold">Campo</th>
                            <th className="p-4 font-semibold">Tipo</th>
                            <th className="p-4 font-semibold">Descrição do Documento</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#13AC6F]/10 text-gray-300">
                          <TableRow field="origemGeopoint" type="GeoPoint" desc="Coordenadas GPS geográficas da partida (Latitude / Longitude)." src="" />
                          <TableRow field="destinoGeopoint" type="GeoPoint" desc="Coordenadas GPS geográficas do ponto final da corrida." src="" />
                          <TableRow field="valorEstimado" type="Double" desc="Cálculo prévio bruto gerado pela engine de distância e tempo." src="" />
                          <TableRow field="valorFinal" type="Double" desc="Soma da estimativa com quaisquer multas de telemetria de cabine detectadas." src="" />
                          <TableRow field="status" type="String" desc="Etapa do trajeto: solicitando, aceita, aCaminho, emCurso, finalizada, cancelada." src="" />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* DATA DICTIONARY CONTENT: VOLT FINANCE */}
              {activeDbSubTab === 'volt' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="grid md:grid-cols-3 gap-4">
                    <SubCollCard title="/transacoes" type="Firestore Local" desc="Livro-caixa contendo inflows (receita bruta/dev) e outflows (combustível, refeição, lazer), discriminando se é carteira PF ou PJ." />
                    <SubCollCard title="/metasFaturamento" type="Firestore Local" desc="Wishlists corporativas e pessoais de hardware/ativos de tecnologia com valores acumulados em poupança e prazo limite." />
                    <SubCollCard title="/guiasMei" type="Firestore Local" desc="Obrigações e guias mensais de impostos DAS MEI pendentes ou liquidadas com códigos Pix dinâmicos e comprovantes de anexo no Storage." />
                  </div>

                  <div className="bg-[#090D0C] p-4 rounded-xl border border-[#13AC6F]/10">
                    <h4 className="text-sm font-bold text-[#13AC6F] font-mono mb-4">Livro-Caixa e Lançamentos Fiscais (`/transacoes`)</h4>
                    <div className="overflow-x-auto rounded-lg border border-[#13AC6F]/10">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-[#0E1412] text-[#13AC6F] font-mono border-b border-[#13AC6F]/20">
                            <th className="p-4 font-semibold">Campo</th>
                            <th className="p-4 font-semibold">Tipo</th>
                            <th className="p-4 font-semibold">Significado da Regra Financeira</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#13AC6F]/10 text-gray-300">
                          <TableRow field="tipo" type="String" desc="Ação contábil: inflow (entrada de grana), outflow (gasto operacional), transfer (pró-labore PJ para PF), provision (provisão reserva preventiva)." src="" />
                          <TableRow field="carteira" type="String" desc="Origem do recurso: pjOperation (Modo Empresa CNPJ) ou pfPersonal (Modo Pessoal CPF)." src="" />
                          <TableRow field="categoria" type="String" desc="Classificação do lançamento: 'Impostos', 'Combustível', 'Refeição', 'Pró-labore'." src="" />
                          <TableRow field="pago" type="Boolean" desc="Indica se a transação foi efetivamente compensada no caixa do banco." src="" />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#13AC6F]/20 pt-12">
            <p className="text-[#888] font-mono mb-4">GynMove Case Study - Engenharia & Análise do Portfólio</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#13AC6F] text-[#FFF] font-bold rounded hover:bg-[#0F8C5A] transition-colors shadow-[0_0_20px_rgba(19,172,111,0.4)] font-mono text-sm tracking-wider"
                >
                    Fechar Detalhes
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// STATIC WIDGET COMPONENTS
// ==========================================

const FeatureTag = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1 bg-[#16201D] border border-[#13AC6F]/20 rounded-full text-[#AAAAAA] text-xs hover:border-[#13AC6F] hover:text-[#13AC6F] transition-colors cursor-default">
        {icon}
        <span>{label}</span>
    </div>
);

const CostRow = ({ label, value, positive }: { label: string, value: string, positive?: boolean }) => (
    <div className="flex justify-between items-center text-xs border-b border-[#333]/40 pb-2 last:border-0 font-mono">
        <span className="text-gray-400">{label}</span>
        <span className={`font-bold ${positive ? 'text-[#13AC6F]' : 'text-gray-300'}`}>{value}</span>
    </div>
);

const LogicItem = ({ label, desc, color }: { label: string, desc: string, color: string }) => (
    <div className="flex gap-4">
        <div className={`mt-1 flex-shrink-0 ${color}`}><ArrowRight size={16} /></div>
        <div>
            <h4 className={`font-bold text-sm font-mono ${color}`}>{label}</h4>
            <p className="text-[#888] text-xs leading-normal mt-1">{desc}</p>
        </div>
    </div>
);

const MaintenanceCard = ({ title, value, items, icon }: { title: string, value: string, items: string[], icon: React.ReactNode }) => (
    <div className="bg-[#141E1B] p-6 rounded-xl border border-[#13AC6F]/10 hover:border-[#13AC6F] transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[#0E1412] rounded-lg text-[#13AC6F] group-hover:scale-110 transition-transform">{icon}</div>
            <span className="font-mono text-[#F7F7F7] font-bold text-sm">{value}</span>
        </div>
        <h4 className="text-white font-bold mb-2 font-mono text-sm">{title}</h4>
        <ul className="text-xs text-[#888] space-y-1.5 leading-normal">
            {items.map((item, idx) => <li key={idx}>• {item}</li>)}
        </ul>
    </div>
);

const LevelRow = ({ level, priceKm, priceMin, active }: { level: string, priceKm: string, priceMin: string, active?: boolean }) => (
    <div className={`flex items-center justify-between p-4 rounded-xl border ${active ? 'bg-[#13AC6F]/10 border-[#13AC6F]' : 'bg-[#0E1412] border-[#333]'}`}>
        <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-[#13AC6F]' : 'bg-[#333]'}`}></div>
            <span className={`font-bold font-mono text-sm ${active ? 'text-white' : 'text-gray-500'}`}>{level}</span>
        </div>
        <div className="text-right">
            <div className={`text-xs font-mono ${active ? 'text-[#13AC6F] font-bold' : 'text-gray-600'}`}>{priceKm} / km</div>
            <div className={`text-xs font-mono ${active ? 'text-[#13AC6F]' : 'text-gray-600'}`}>{priceMin} / min</div>
        </div>
    </div>
);

const ArchCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-[#141E1B] p-6 rounded-2xl border border-[#13AC6F]/10 hover:border-[#13AC6F]/40 transition-all flex gap-4">
    <div className="text-[#13AC6F] mt-1 bg-[#0E1412] p-2.5 h-fit rounded-lg">{icon}</div>
    <div className="space-y-2">
      <h4 className="text-[#EEEEEE] font-bold text-sm font-mono">{title}</h4>
      <p className="text-gray-400 text-xs leading-normal">{desc}</p>
    </div>
  </div>
);

const SubCollCard = ({ title, type, desc }: { title: string, type: string, desc: string }) => (
  <div className="bg-[#090D0C] p-5 rounded-xl border border-[#13AC6F]/10 hover:border-[#13AC6F]/30 transition-all space-y-2 flex flex-col justify-between">
    <div>
      <span className="text-[#13AC6F] font-bold font-mono text-sm block">{title}</span>
      <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-widest mt-0.5">{type}</span>
    </div>
    <p className="text-gray-400 text-xs leading-normal">{desc}</p>
  </div>
);

const FlowStep = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="bg-[#141E1B] border border-[#13AC6F]/20 p-4 rounded-xl text-center w-44 space-y-1 relative group hover:border-[#13AC6F] transition-all">
    <span className="absolute top-2 left-2 text-[10px] font-mono bg-[#13AC6F] text-black w-4 h-4 rounded-full flex items-center justify-center font-bold">{num}</span>
    <span className="text-white font-mono text-xs font-bold block pt-1">{title}</span>
    <span className="text-[10px] text-gray-500 block">{desc}</span>
  </div>
);

const FlowArrow = () => (
  <div className="flex items-center text-[#13AC6F]/40 hover:text-[#13AC6F] transition-colors">
    <ArrowRight size={18} />
  </div>
);

const TableRow = ({ field, type, desc, src }: { field: string, type: string, desc: string, src: string }) => (
  <tr className="hover:bg-[#141E1B]/40 transition-colors">
    <td className="p-4 font-mono font-bold text-white text-[11px]">{field}</td>
    <td className="p-4 font-mono text-blue-400 text-[10px]">{type}</td>
    <td className="p-4 text-gray-400 leading-normal">{desc}</td>
    {src && <td className="p-4"><span className="px-2 py-0.5 bg-[#141E1B] border border-[#13AC6F]/20 text-gray-400 rounded text-[9px] font-mono">{src}</span></td>}
  </tr>
);

export default GynMoveCaseStudy;
