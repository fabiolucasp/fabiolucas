import React, { useState } from 'react';
import { 
  Terminal, Shield, Cpu, TrendingUp, DollarSign, Users, Smartphone, 
  CheckCircle, Clock, Send, Eye, EyeOff, Search, Plus, Printer, 
  RefreshCw, Layers, ArrowUpRight, Activity, Server, Zap, Globe, 
  Lock, FileText, AlertTriangle, ExternalLink, Sparkles, MessageSquare,
  BarChart3, Award, Database, Check
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ProjectItem {
  id: string;
  name: string;
  client: string;
  clientPhone: string;
  category: string;
  stage: 'Briefing' | 'Figma UI/UX' | 'Dev Flutter' | 'Testes QA' | 'Produção & Lojas';
  progress: number;
  value: string;
  mrr: string;
  repo: string;
  lastUpdate: string;
  sla: string;
  screens: number;
  highlight: string;
}

const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'autoparts',
    name: 'AutoParts Guide (Cliente & Lojista)',
    client: 'Distribuidora Automotiva Centro-Oeste',
    clientPhone: '5562981358986',
    category: 'Marketplace & B2B',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 68.000,00',
    mrr: 'R$ 4.200,00/mês',
    repo: 'fabiolucasp/autopartsguide',
    lastUpdate: 'Hoje, 00:45',
    sla: '99.9% Uptime',
    screens: 35,
    highlight: 'Catálogo de peças com modal veicular, carteira digital e módulo My Car'
  },
  {
    id: 'pineapplepay',
    name: 'Pineapple Pay (Fintech & Maquininhas)',
    client: 'Pineapple Tecnologia & Meios de Pagamento',
    clientPhone: '5562981358986',
    category: 'Fintech & Gateway',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 85.000,00',
    mrr: 'R$ 6.800,00/mês',
    repo: 'fabiolucasp/pineapplepay',
    lastUpdate: 'Ontem, 21:30',
    sla: '100% Homologado',
    screens: 15,
    highlight: 'Geração de comprovantes PDF com cashback, split de pagamento e Pix QR dinâmico'
  },
  {
    id: 'gynmove-passenger',
    name: 'GynMove (App do Passageiro)',
    client: 'Cooperativa Metropolitana de Mobilidade',
    clientPhone: '5562981358986',
    category: 'Mobilidade Urbana',
    stage: 'Testes QA',
    progress: 92,
    value: 'R$ 55.000,00',
    mrr: 'R$ 3.800,00/mês',
    repo: 'fabiolucasp/gynmove',
    lastUpdate: 'Há 2 dias',
    sla: 'Piloto Goiânia',
    screens: 10,
    highlight: 'Telemetria 3D Elevation API, skwasm GPU WebAssembly e matching em tempo real'
  },
  {
    id: 'gynmove-driver',
    name: 'GynMove (App do Motorista & Cabine)',
    client: 'Gestão de Frotas & Motoristas Parceiros',
    clientPhone: '5562981358986',
    category: 'Mobilidade Urbana',
    stage: 'Dev Flutter',
    progress: 85,
    value: 'R$ 48.000,00',
    mrr: 'R$ 3.200,00/mês',
    repo: 'fabiolucasp/gynmovemotorista',
    lastUpdate: 'Há 3 dias',
    sla: 'Homologação',
    screens: 8,
    highlight: 'IA de cabine, geofencing contínuo e repasse automático de ganhos'
  },
  {
    id: 'voltfinance',
    name: 'VoltFinance (Gestão MEI & Frotas)',
    client: 'Volt Soluções Financeiras & PJ',
    clientPhone: '5562981358986',
    category: 'Fintech & Gestão',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 42.000,00',
    mrr: 'R$ 2.900,00/mês',
    repo: 'fabiolucasp/voltfinance',
    lastUpdate: '2026-11-04',
    sla: 'Produção Estável',
    screens: 8,
    highlight: 'Automatização de guias DAS MEI, split de contas PF/PJ e conciliação bancária'
  },
  {
    id: 'multasipva',
    name: 'Multas & IPVA Brasil',
    client: 'Despachante Express & Frotistas',
    clientPhone: '5562981358986',
    category: 'Automotivo & GovTech',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 38.000,00',
    mrr: 'R$ 2.500,00/mês',
    repo: 'fabiolucasp/multasipva',
    lastUpdate: '2026-11-04',
    sla: '99.5% Uptime',
    screens: 8,
    highlight: 'Consulta veicular por placa e Renavam, parcelamento de débitos em até 12x'
  },
  {
    id: 'bichomimado',
    name: 'Bicho Mimado (Pet Shop & TaxiDog)',
    client: 'Bicho Mimado Centro Veterinário',
    clientPhone: '5562981358986',
    category: 'Pet Care & Delivery',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 36.000,00',
    mrr: 'R$ 2.400,00/mês',
    repo: 'fabiolucasp/bichomimado',
    lastUpdate: '2026-11-02',
    sla: 'Uso Diário',
    screens: 12,
    highlight: 'Agendamento de banho e tosa, telemetria de TaxiDog ao vivo e prontuário pet'
  },
  {
    id: 'brigaelo',
    name: 'Brigaelo (E-commerce & Fidelidade)',
    client: 'Brigaelo Chocolatier Gourmet',
    clientPhone: '5562981358986',
    category: 'E-commerce & Gastronomia',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 32.000,00',
    mrr: 'R$ 2.100,00/mês',
    repo: 'fabiolucasp/brigaelo',
    lastUpdate: '2026-11-02',
    sla: '99.9% Uptime',
    screens: 10,
    highlight: 'Catálogo de doces finos, checkout direto para WhatsApp e cupons dinâmicos'
  }
];

export const FounderOS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cockpit' | 'projects' | 'finance' | 'growth' | 'academy' | 'terminal'>('cockpit');
  const [isFounderMode, setIsFounderMode] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  // PineapplePay Receipt Generator state
  const [receiptClient, setReceiptClient] = useState('Distribuidora Centro-Oeste');
  const [receiptDoc, setReceiptDoc] = useState('00.123.456/0001-89');
  const [receiptAmount, setReceiptAmount] = useState('4200.00');
  const [receiptMethod, setReceiptMethod] = useState<'PIX' | 'CARTAO' | 'TRANSFERENCIA'>('PIX');
  const [receiptCashback, setReceiptCashback] = useState('5');
  const [receiptService, setReceiptService] = useState('Manutenção Mensal de Infraestrutura Flutter & Firebase');
  const [receiptGenerated, setReceiptGenerated] = useState(false);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'whoami', output: 'fabio_lucas@founderos ~ [ROLE: Founder & Lead Architect] [PERMS: Root Executive]' },
    { cmd: 'status --all', output: '✓ Firebase Hosting: ONLINE (200 OK)\n✓ Cloud Functions: PACKAGED (v2 ready)\n✓ Meta Graph API v21.0: CONNECTED\n✓ 8 Native Apps: SYNCED\n✓ Monorepo Architecture: UNIFIED' }
  ]);

  // Form modal state for new project
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectClient, setNewProjectClient] = useState('');
  const [newProjectValue, setNewProjectValue] = useState('');
  const [newProjectCategory, setNewProjectCategory] = useState('B2B & SaaS');

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Comandos disponíveis:\n- status        : Integridade de todos os serviços na nuvem\n- projects      : Resumo dos 8 apps ativos no ecossistema\n- finance       : Visão consolidada de faturamento e MRR\n- clear         : Limpa o histórico do terminal\n- deploy        : Instruções de deploy em produção\n- whoami        : Identidade do usuário autenticado no FounderOS';
        break;
      case 'status':
        output = 'SISTEMA OPERACIONAL DO FUNDADOR (FounderOS v2.0)\n- Core Web Platform : https://fabiolucas.com (ONLINE)\n- Mobile Management : https://fabiolucasdev-a3ab4.web.app (ONLINE)\n- Cloud Functions   : Node 22 / TypeScript (Built 76.78 KB)\n- GitHub Unified    : github.com/fabiolucasp/fabiolucas\n- Status Geral      : 100% OPERACIONAL';
        break;
      case 'projects':
        output = `8 APLICATIVOS CATALOGADOS NO FOUNDEROS:\n${projects.map(p => `• [${p.stage}] ${p.name} - ${p.value} (${p.client})`).join('\n')}`;
        break;
      case 'finance':
        output = isFounderMode
          ? 'FATURAMENTO GLOBAL FOUNDEROS:\n• Contratos em Execução: R$ 404.000,00\n• MRR Recorrente Mensal: R$ 27.900,00/mês\n• Margem Líquida Média : 84.2%\n• Inadimplência        : 0.0%'
          : 'FATURAMENTO OCULTO (Modo Apresentação Ativo). Desative o modo apresentação para visualizar.';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'whoami':
        output = 'Fábio Lucas - Desenvolvedor Full-Stack | Especialista Flutter & Firebase | Founder';
        break;
      case 'deploy':
        output = 'DISPARANDO BUILD & DEPLOY:\n$ npm run build\n$ npx firebase deploy --only hosting\n✓ Publicação finalizada com sucesso nos servidores globais do Firebase.';
        break;
      default:
        output = `Comando desconhecido: "${cmd}". Digite "help" para ver os comandos suportados.`;
    }

    setTerminalHistory(prev => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  const handleAddNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName || !newProjectClient) return;

    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: newProjectName,
      client: newProjectClient,
      clientPhone: '5562981358986',
      category: newProjectCategory,
      stage: 'Briefing',
      progress: 10,
      value: newProjectValue || 'R$ 25.000,00',
      mrr: 'R$ 1.800,00/mês',
      repo: 'fabiolucasp/novo-projeto',
      lastUpdate: 'Agora',
      sla: 'Em Definição',
      screens: 6,
      highlight: 'Novo projeto em fase de concepção e arquitetura de requisitos'
    };

    setProjects([newProj, ...projects]);
    setShowNewProjectModal(false);
    setNewProjectName('');
    setNewProjectClient('');
    setNewProjectValue('');
  };

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['Todas', 'Marketplace & B2B', 'Fintech & Gateway', 'Mobilidade Urbana', 'Fintech & Gestão', 'Automotivo & GovTech', 'Pet Care & Delivery', 'E-commerce & Gastronomia'];

  // Calculations for PineapplePay Receipt
  const numAmount = parseFloat(receiptAmount) || 0;
  const numCashback = parseFloat(receiptCashback) || 0;
  const cashbackValue = (numAmount * numCashback) / 100;
  const netAmount = numAmount - cashbackValue;

  return (
    <div className="min-h-screen bg-[#07090E] text-[#E1E7EF] font-sans pt-20 pb-24">
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-[#1E2638] bg-[#0A0D14]/90 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#44D62C]/10 border border-[#44D62C]/30 rounded-lg text-[#44D62C]">
              <Zap size={22} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-mono font-bold text-lg text-white tracking-wide">FounderOS</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#44D62C]/20 text-[#44D62C] font-semibold border border-[#44D62C]/30">
                  v2.0 UNIFIED
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30">
                  FLUTTER 3 + REACT + CLOUD
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Sistema Operacional do Fundador • Fábio Lucas Dev
              </p>
            </div>
          </div>

          {/* Quick Actions & Mode Toggle */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsFounderMode(!isFounderMode)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                isFounderMode 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20' 
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
              }`}
              title="Alternar entre visualização de faturamento confidencial e modo demo/vitrine"
            >
              {isFounderMode ? <Eye size={14} /> : <EyeOff size={14} />}
              {isFounderMode ? 'Modo Fundador (Ativo)' : 'Modo Vitrine (Oculto)'}
            </button>

            <NavLink
              to="/instagram-studio"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-pink-500/30 text-pink-300 hover:text-white hover:border-pink-500/60 transition-all"
            >
              <Sparkles size={14} />
              Instagram Studio
            </NavLink>

            <a
              href="https://fabiolucasdev-a3ab4.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#44D62C] text-black hover:bg-[#52f036] transition-all shadow-lg shadow-[#44D62C]/20"
            >
              <Smartphone size={14} />
              App Mobile Gestão
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 md:px-6 flex gap-1 overflow-x-auto no-scrollbar border-t border-[#161D2B]">
          {[
            { id: 'cockpit', label: 'Cockpit Executivo', icon: Activity },
            { id: 'projects', label: '8 Aplicativos & Clientes', icon: Smartphone, badge: projects.length.toString() },
            { id: 'finance', label: 'PineapplePay & Finanças', icon: DollarSign },
            { id: 'growth', label: 'Marketing & Aquisição', icon: TrendingUp },
            { id: 'academy', label: 'Academy & Cursos', icon: Award },
            { id: 'terminal', label: 'Founder Terminal CLI', icon: Terminal },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 border-b-2 font-mono text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive 
                    ? 'border-[#44D62C] text-[#44D62C] bg-[#44D62C]/5' 
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]'
                }`}
              >
                <Icon size={15} />
                {tab.label}
                {tab.badge && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? 'bg-[#44D62C] text-black font-bold' : 'bg-[#1E2638] text-gray-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 pt-6">

        {/* TAB 1: COCKPIT EXECUTIVO */}
        {activeTab === 'cockpit' && (
          <div className="space-y-6">
            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden group hover:border-[#44D62C]/40 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#44D62C]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider">Faturamento Total Pipeline</span>
                  <DollarSign size={18} className="text-[#44D62C]" />
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  {isFounderMode ? 'R$ 404.000,00' : 'R$ •••••••••••'}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#44D62C]">
                  <TrendingUp size={13} />
                  <span>8 Apps Ativos no Ecossistema</span>
                </div>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider">MRR Recorrência Mensal</span>
                  <BarChart3 size={18} className="text-blue-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  {isFounderMode ? 'R$ 27.900,00' : 'R$ •••••••••'}
                  <span className="text-xs text-gray-400 font-normal"> /mês</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-blue-400">
                  <CheckCircle size={13} />
                  <span>Sustentação, Cloud & Suporte</span>
                </div>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden group hover:border-purple-500/40 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider">Infraestrutura em Nuvem</span>
                  <Server size={18} className="text-purple-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  99.98%
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-400">
                  <Activity size={13} />
                  <span>Firebase & Google Cloud Ativos</span>
                </div>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider">Repositórios Unificados</span>
                  <Layers size={18} className="text-emerald-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  Monorepo
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <Check size={13} />
                  <span>Web + Mobile + Cloud Functions</span>
                </div>
              </div>
            </div>

            {/* Cloud & Service Health Strip */}
            <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Server size={18} className="text-[#44D62C]" />
                  <h3 className="font-mono font-bold text-sm text-white">Status da Malha Operacional em Tempo Real</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Todos os Serviços Saudáveis
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Firebase Hosting', status: 'Online (200 OK)', ping: '18ms', color: 'text-emerald-400' },
                  { name: 'Cloud Functions', status: 'Node 22 Ready', ping: '24ms', color: 'text-emerald-400' },
                  { name: 'Meta Graph API', status: 'v21.0 Conectada', ping: '45ms', color: 'text-blue-400' },
                  { name: 'WhatsApp Business', status: 'Webhook Ativo', ping: '32ms', color: 'text-emerald-400' },
                  { name: 'Pineapple Pay API', status: 'Homologado', ping: '28ms', color: 'text-yellow-400' },
                  { name: 'GitHub CI/CD', status: 'v1.3.0 Synced', ping: '0 erros', color: 'text-purple-400' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0A0D14] border border-[#161D2B] rounded-lg p-3">
                    <div className="text-[11px] text-gray-400 font-mono mb-1">{item.name}</div>
                    <div className={`text-xs font-bold font-mono ${item.color}`}>{item.status}</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">{item.ping}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid: Live Activity Feed + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Cols: Projects Health & Pipeline Overview */}
              <div className="lg:col-span-2 bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} className="text-[#44D62C]" />
                    <h3 className="font-mono font-bold text-sm text-white">Pipeline de Entrega dos 8 Apps</h3>
                  </div>
                  <button 
                    onClick={() => setActiveTab('projects')}
                    className="text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1"
                  >
                    Ver Todos os Detalhes <ArrowUpRight size={13} />
                  </button>
                </div>

                <div className="space-y-3">
                  {projects.slice(0, 5).map((project) => (
                    <div 
                      key={project.id} 
                      className="bg-[#0A0D14] border border-[#161D2B] rounded-lg p-3 hover:border-[#44D62C]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-bold text-sm text-white">{project.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E2638] text-gray-300">
                            {project.category}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 flex items-center gap-3">
                          <span>Cliente: <strong className="text-gray-200">{project.client}</strong></span>
                          <span>•</span>
                          <span>{project.screens} Telas</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-xs font-mono font-bold text-white">
                            {isFounderMode ? project.value : '••••••'}
                          </div>
                          <div className="text-[10px] font-mono text-[#44D62C]">
                            {isFounderMode ? project.mrr : '••••/mês'}
                          </div>
                        </div>

                        <div className="w-24">
                          <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                            <span>{project.stage}</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#161D2B] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#44D62C] rounded-full transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Col: Quick Actions & Founder Direct Line */}
              <div className="space-y-4">
                <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                  <h3 className="font-mono font-bold text-sm text-white mb-3 flex items-center gap-2">
                    <Zap size={16} className="text-[#44D62C]" />
                    Ações Rápidas do Fundador
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setShowNewProjectModal(true)}
                      className="w-full py-2.5 px-3 bg-[#44D62C] hover:bg-[#50f034] text-black font-mono font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-[#44D62C]/10"
                    >
                      <Plus size={15} /> Cadastrar Novo Projeto
                    </button>

                    <button
                      onClick={() => setActiveTab('finance')}
                      className="w-full py-2 px-3 bg-[#161D2B] hover:bg-[#1E2638] text-white font-mono text-xs rounded-lg flex items-center justify-center gap-2 transition-all border border-[#232E42]"
                    >
                      <DollarSign size={15} className="text-[#44D62C]" /> Emitir Comprovante PineapplePay
                    </button>

                    <button
                      onClick={() => setActiveTab('terminal')}
                      className="w-full py-2 px-3 bg-[#161D2B] hover:bg-[#1E2638] text-white font-mono text-xs rounded-lg flex items-center justify-center gap-2 transition-all border border-[#232E42]"
                    >
                      <Terminal size={15} className="text-purple-400" /> Abrir Founder Terminal CLI
                    </button>

                    <a
                      href="https://wa.me/5562981358986?text=Ol%C3%A1%20F%C3%A1bio%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20FounderOS."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-mono text-xs rounded-lg flex items-center justify-center gap-2 transition-all border border-emerald-500/30"
                    >
                      <MessageSquare size={15} /> WhatsApp Executivo (+55 62 98135-8986)
                    </a>
                  </div>
                </div>

                <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                  <h3 className="font-mono font-bold text-sm text-white mb-2 flex items-center gap-2">
                    <Shield size={16} className="text-blue-400" />
                    Blindagem de Segurança
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    O FounderOS aplica criptografia de ponta e isolamento de chaves privadas em conformidade com o OWASP Top 10 e políticas de sigilo de clientes.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <CheckCircle size={13} />
                    <span>0 Vulnerabilidades • Auditoria Playwright Verde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 8 APLICATIVOS & CLIENTES */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar aplicativo, cliente ou categoria..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#44D62C]"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <button
                  onClick={() => setShowNewProjectModal(true)}
                  className="px-3 py-2 bg-[#44D62C] text-black font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 whitespace-nowrap hover:bg-[#52f036] transition-all"
                >
                  <Plus size={14} /> Novo Projeto
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 hover:border-[#44D62C]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20 uppercase">
                          {project.category}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1.5">{project.name}</h4>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        project.progress === 100 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}>
                        {project.stage}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 mb-3">{project.highlight}</p>

                    <div className="grid grid-cols-2 gap-2 bg-[#0A0D14] border border-[#161D2B] rounded-lg p-3 mb-4 text-xs font-mono">
                      <div>
                        <span className="text-gray-500 text-[10px] block">CLIENTE PARCEIRO</span>
                        <strong className="text-gray-200">{project.client}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500 text-[10px] block">TELAS MAPEADAS</span>
                        <strong className="text-gray-200">{project.screens} Telas em Flutter</strong>
                      </div>
                      <div>
                        <span className="text-gray-500 text-[10px] block">VALOR CONTRATO</span>
                        <strong className="text-white">{isFounderMode ? project.value : '••••••••'}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500 text-[10px] block">RECORRÊNCIA MRR</span>
                        <strong className="text-[#44D62C]">{isFounderMode ? project.mrr : '••••••••'}</strong>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                        <span>Progresso da Entrega</span>
                        <span className="text-[#44D62C] font-bold">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#161D2B] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-[#44D62C] rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#161D2B] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                      <Clock size={11} /> Atualizado: {project.lastUpdate}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${project.clientPhone}?text=Ol%C3%A1!%20F%C3%A1bio%20Lucas%20aqui.%20Segue%20o%20relat%C3%B3rio%20de%20status%20do%20projeto%20${encodeURIComponent(project.name)}%3A%20Etapa%20${encodeURIComponent(project.stage)}%2C%20progresso%20${project.progress}%25.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs font-mono flex items-center gap-1 transition-all"
                        title="Enviar Status Report no WhatsApp"
                      >
                        <Send size={12} /> WhatsApp
                      </a>

                      <a
                        href={`https://github.com/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 bg-[#161D2B] hover:bg-[#1E2638] text-gray-300 border border-[#232E42] rounded text-xs font-mono flex items-center gap-1 transition-all"
                        title="Abrir no GitHub"
                      >
                        <ExternalLink size={12} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PINEAPPLEPAY & FINANÇAS */}
        {activeTab === 'finance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Col: PineapplePay Receipt Generator */}
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign size={20} className="text-[#44D62C]" />
                    <h3 className="font-mono font-bold text-base text-white">Emissor de Comprovante PineapplePay</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 font-bold">
                    CASHBACK INTEGRADO
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <label className="text-gray-400 block mb-1">Nome do Cliente / Empresa</label>
                    <input
                      type="text"
                      value={receiptClient}
                      onChange={(e) => setReceiptClient(e.target.value)}
                      className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-gray-400 block mb-1">CPF / CNPJ</label>
                      <input
                        type="text"
                        value={receiptDoc}
                        onChange={(e) => setReceiptDoc(e.target.value)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 block mb-1">Valor do Pagamento (R$)</label>
                      <input
                        type="text"
                        value={receiptAmount}
                        onChange={(e) => setReceiptAmount(e.target.value)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-gray-400 block mb-1">Método</label>
                      <select
                        value={receiptMethod}
                        onChange={(e) => setReceiptMethod(e.target.value as any)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                      >
                        <option value="PIX">Pix Instantâneo (Banco Central)</option>
                        <option value="CARTAO">Cartão de Crédito 12x</option>
                        <option value="TRANSFERENCIA">Transferência / TED</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-400 block mb-1">% Cashback Pineapple</label>
                      <input
                        type="text"
                        value={receiptCashback}
                        onChange={(e) => setReceiptCashback(e.target.value)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 block mb-1">Discriminação do Serviço</label>
                    <textarea
                      rows={2}
                      value={receiptService}
                      onChange={(e) => setReceiptService(e.target.value)}
                      className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                    />
                  </div>

                  <button
                    onClick={() => setReceiptGenerated(true)}
                    className="w-full py-2.5 bg-[#44D62C] text-black font-mono font-bold text-xs rounded-lg flex items-center justify-center gap-2 hover:bg-[#52f036] transition-all shadow-md shadow-[#44D62C]/20 mt-2"
                  >
                    <Printer size={15} /> Gerar Comprovante Oficial PineapplePay
                  </button>
                </div>
              </div>

              {/* Right Col: Receipt Live Visualizer */}
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono font-bold text-sm text-white mb-3 flex items-center gap-2">
                    <FileText size={16} className="text-[#44D62C]" />
                    Visualização do Comprovante Digital
                  </h3>

                  {/* Simulated Receipt Card */}
                  <div className="bg-[#FFFFFF] text-black p-5 rounded-lg font-mono text-xs shadow-2xl relative border-t-8 border-[#44D62C]">
                    <div className="text-center pb-3 border-b border-gray-300">
                      <div className="font-bold text-base tracking-widest text-[#111]">PINEAPPLE PAY</div>
                      <div className="text-[10px] text-gray-600">COMPROVANTE DE PAGAMENTO & REPASSE</div>
                      <div className="text-[9px] text-gray-400 font-mono">AUTENTICAÇÃO: PP-{Date.now().toString().slice(-8)}</div>
                    </div>

                    <div className="py-3 space-y-2 border-b border-gray-200">
                      <div className="flex justify-between">
                        <span className="text-gray-500">CLIENTE:</span>
                        <span className="font-bold">{receiptClient || 'NÃO INFORMADO'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">DOCUMENTO:</span>
                        <span>{receiptDoc}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">MÉTODO:</span>
                        <span className="font-bold text-emerald-800">{receiptMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">SERVIÇO:</span>
                        <span className="text-right text-[11px] max-w-[200px]">{receiptService}</span>
                      </div>
                    </div>

                    <div className="py-3 space-y-1.5 border-b border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span>VALOR TOTAL:</span>
                        <strong className="text-black">R$ {numAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                      </div>
                      <div className="flex justify-between text-emerald-700">
                        <span>CASHBACK ({receiptCashback}%):</span>
                        <strong>+ R$ {cashbackValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>VALOR LÍQUIDO A PAGAR:</span>
                        <span>R$ {netAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>

                    <div className="pt-3 text-center text-[9px] text-gray-500">
                      <div>DESENVOLVEDOR & ARQUITETO: FÁBIO LUCAS DEV</div>
                      <div>GOIÂNIA - GO • BRASIL • CNPJ VERIFICADO</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2 bg-[#161D2B] hover:bg-[#1E2638] text-white font-mono text-xs rounded-lg flex items-center justify-center gap-1.5 border border-[#232E42]"
                  >
                    <Printer size={13} /> Imprimir / PDF
                  </button>
                  <a
                    href={`https://wa.me/?text=Comprovante%20de%20Pagamento%20PineapplePay%3A%20Cliente%20${encodeURIComponent(receiptClient)}%20-%20R%24%20${receiptAmount}%20(${receiptMethod}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-mono text-xs rounded-lg flex items-center justify-center gap-1.5 border border-emerald-500/30"
                  >
                    <Send size={13} /> Compartilhar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GROWTH & MARKETING */}
        {activeTab === 'growth' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-950/40 via-pink-950/20 to-[#0E131F] border border-purple-500/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30 uppercase">
                  Growth & Social Media OS
                </span>
                <h3 className="text-2xl font-bold font-mono text-white mt-2">Central Integrada de Marketing & Instagram Studio</h3>
                <p className="text-xs text-gray-300 max-w-2xl mt-1">
                  Gerenciamento automatizado da presença digital no Instagram (@fabiolucasdev), cruzamento com Google Trends e prospecção ativa de clientes no Radar B2B.
                </p>
              </div>

              <NavLink
                to="/instagram-studio"
                className="px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-mono font-bold text-xs rounded-lg flex items-center gap-2 whitespace-nowrap shadow-lg shadow-pink-500/20 transition-all"
              >
                <Sparkles size={16} /> Abrir Instagram Studio Completo
              </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                <div className="flex items-center gap-2 text-purple-400 font-mono font-bold text-sm mb-3">
                  <TrendingUp size={16} /> Radar de Tendências (Trends)
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">#FlutterDev 3.47</span>
                    <span className="text-[#44D62C]">+142% busca</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Biometria Facial Mobile</span>
                    <span className="text-[#44D62C]">+89% busca</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">SuperApp Corporativo</span>
                    <span className="text-[#44D62C]">+65% busca</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                <div className="flex items-center gap-2 text-pink-400 font-mono font-bold text-sm mb-3">
                  <MessageSquare size={16} /> Funil WhatsApp Business
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Leads Filtrados pelo Bot</span>
                    <span className="text-white font-bold">148 este mês</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Reuniões Agendadas</span>
                    <span className="text-white font-bold">18 reuniões</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Taxa de Conversão</span>
                    <span className="text-emerald-400 font-bold">12.1%</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm mb-3">
                  <Globe size={16} /> Radar B2B Meu Negócio
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Autopeças & Frotas</span>
                    <span className="text-white">8 prospects</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Pet Shops Premium</span>
                    <span className="text-white">12 prospects</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#161D2B]">
                    <span className="text-gray-300">Fintechs & Crédito</span>
                    <span className="text-white">5 prospects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ACADEMY & CURSOS */}
        {activeTab === 'academy' && (
          <div className="space-y-6">
            <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-[#44D62C]" />
                  <h3 className="font-mono font-bold text-base text-white">Ecossistema Educacional & Formação de Devs</h3>
                </div>
                <NavLink
                  to="/cursos"
                  className="text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1"
                >
                  Ver Catálogo Completo no Site <ArrowUpRight size={13} />
                </NavLink>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Fundamentos de Flutter & Dart',
                    level: 'Iniciante',
                    students: 142,
                    price: 'R$ 197,00',
                    revenue: 'R$ 27.974,00',
                    modules: '5 Módulos • 42 Aulas'
                  },
                  {
                    title: 'Clean Architecture & Firebase Pro',
                    level: 'Intermediário',
                    students: 89,
                    price: 'R$ 397,00',
                    revenue: 'R$ 35.333,00',
                    modules: '8 Módulos • 64 Aulas'
                  },
                  {
                    title: 'SuperApp & Microsserviços Cloud',
                    level: 'Avançado',
                    students: 43,
                    price: 'R$ 897,00',
                    revenue: 'R$ 38.571,00',
                    modules: '12 Módulos • 90 Aulas'
                  }
                ].map((course, idx) => (
                  <div key={idx} className="bg-[#0A0D14] border border-[#161D2B] rounded-lg p-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#44D62C]/10 text-[#44D62C] font-bold border border-[#44D62C]/30">
                      {course.level}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-2 mb-1">{course.title}</h4>
                    <p className="text-xs text-gray-400 mb-3">{course.modules}</p>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-[#161D2B]">
                      <div>
                        <span className="text-gray-500 text-[10px] block">ALUNOS</span>
                        <strong className="text-white">{course.students} Matriculados</strong>
                      </div>
                      <div>
                        <span className="text-gray-500 text-[10px] block">FATURAMENTO</span>
                        <strong className="text-[#44D62C]">{isFounderMode ? course.revenue : '••••••'}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: FOUNDER TERMINAL CLI */}
        {activeTab === 'terminal' && (
          <div className="space-y-4">
            <div className="bg-[#05070B] border border-[#1E2638] rounded-xl overflow-hidden font-mono text-xs shadow-2xl">
              {/* Terminal Window Header */}
              <div className="bg-[#0B0E14] px-4 py-3 border-b border-[#1E2638] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-gray-400 ml-2 text-xs">fabiolucas@founderos ~ bash (CLI v2.0)</span>
                </div>
                <span className="text-[10px] text-gray-500">Ctrl + L para limpar</span>
              </div>

              {/* Terminal Output */}
              <div className="p-5 h-[400px] overflow-y-auto space-y-4 text-gray-300">
                <div className="text-emerald-400 font-bold">
                  Bem-vindo ao FounderOS Interactive Terminal CLI!
                  <br />
                  Digite <span className="text-white underline">help</span> para visualizar a lista de comandos suportados.
                </div>

                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-[#44D62C] font-bold">founderos:~$</span>
                      <span className="text-white">{item.cmd}</span>
                    </div>
                    <pre className="text-gray-300 whitespace-pre-wrap pl-4 font-mono text-xs leading-relaxed bg-[#0A0D14]/60 p-2 rounded border border-[#161D2B]">
                      {item.output}
                    </pre>
                  </div>
                ))}

                {/* Active prompt */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
                  <span className="text-[#44D62C] font-bold">founderos:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Digite um comando (ex: status, projects, finance, deploy)..."
                    className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs"
                    autoFocus
                  />
                </form>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal: Cadastrar Novo Projeto */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6 max-w-md w-full font-mono text-xs shadow-2xl">
            <h3 className="font-bold text-base text-white mb-1 flex items-center gap-2">
              <Plus size={18} className="text-[#44D62C]" />
              Cadastrar Novo Projeto no FounderOS
            </h3>
            <p className="text-gray-400 text-xs mb-4">Adicione um novo aplicativo ou contrato ao pipeline executivo.</p>

            <form onSubmit={handleAddNewProject} className="space-y-3">
              <div>
                <label className="text-gray-400 block mb-1">Nome do Aplicativo</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: NexusPay App"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">Cliente / Empresa</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Grupo Inovação SA"
                  value={newProjectClient}
                  onChange={(e) => setNewProjectClient(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 block mb-1">Valor Contrato (R$)</label>
                  <input
                    type="text"
                    placeholder="R$ 35.000,00"
                    value={newProjectValue}
                    onChange={(e) => setNewProjectValue(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Categoria</label>
                  <input
                    type="text"
                    placeholder="Ex: Fintech"
                    value={newProjectCategory}
                    onChange={(e) => setNewProjectCategory(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="flex-1 py-2.5 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638] transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-[#52f036] transition-all"
                >
                  Salvar Projeto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderOS;
