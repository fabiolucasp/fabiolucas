import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Cpu, TrendingUp, DollarSign, Users, Smartphone, 
  CheckCircle, Clock, Send, Eye, EyeOff, Search, Plus, Printer, 
  RefreshCw, Layers, ArrowUpRight, Activity, Server, Zap, Globe, 
  Lock, FileText, AlertTriangle, ExternalLink, Sparkles, MessageSquare,
  BarChart3, Award, Database, Check, Edit3, Trash2, ChevronRight,
  LogOut, UserCheck, CheckCircle2, Phone, ArrowRight, ShieldCheck, Flame,
  Instagram, Key
} from 'lucide-react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import InstagramStudio from './InstagramStudio';
import { 
  ADMIN_PROFILE, 
  CLIENT_PROFILES, 
  FounderUser, 
  getStoredUser, 
  saveUser, 
  clearUser,
  hasFullCrud 
} from '../services/founderOsAuth';

export interface ProjectItem {
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
  clientApproved?: boolean;
}

export const INITIAL_PROJECTS: ProjectItem[] = [
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
    highlight: 'Catálogo de peças com modal veicular, carteira digital e módulo My Car',
    clientApproved: true
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
    highlight: 'Geração de comprovantes PDF com cashback, split de pagamento e Pix QR dinâmico',
    clientApproved: true
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
    highlight: 'Telemetria 3D Elevation API, skwasm GPU WebAssembly e matching em tempo real',
    clientApproved: false
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
    highlight: 'IA de cabine, geofencing contínuo e repasse automático de ganhos',
    clientApproved: false
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
    sla: '100% Estável',
    screens: 12,
    highlight: 'DRE dinâmico, emissão de NFSe automática e conciliação bancária Open Finance',
    clientApproved: true
  },
  {
    id: 'cfcfocus',
    name: 'CFC Focus (Simulados Detran & Telemetria)',
    client: 'Rede Centro-Oeste de Autoescolas',
    clientPhone: '5562981358986',
    category: 'Automotivo & GovTech',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 36.000,00',
    mrr: 'R$ 2.500,00/mês',
    repo: 'fabiolucasp/cfcfocus',
    lastUpdate: '2026-11-03',
    sla: '99.9% Uptime',
    screens: 14,
    highlight: 'Simulados oficiais CNH com banco de 1.200 questões e biometria facial',
    clientApproved: true
  },
  {
    id: 'bichomimado',
    name: 'Bicho Mimado (Pet Care & TaxiDog)',
    client: 'Clínica Veterinária & Pet Shop Bicho Mimado',
    clientPhone: '5562981358986',
    category: 'Pet Care & Delivery',
    stage: 'Produção & Lojas',
    progress: 100,
    value: 'R$ 38.000,00',
    mrr: 'R$ 2.400,00/mês',
    repo: 'fabiolucasp/bichomimado',
    lastUpdate: '2026-11-01',
    sla: '100% Operacional',
    screens: 9,
    highlight: 'Rastreamento em tempo real do TaxiDog e agendamento integrado de consultas',
    clientApproved: true
  },
  {
    id: 'brigaelo',
    name: 'BrigaElo (Confeitaria & Encomendas)',
    client: 'Ateliê de Doces Finos BrigaElo',
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
    highlight: 'Catálogo de doces finos, checkout direto para WhatsApp e cupons dinâmicos',
    clientApproved: true
  }
];

const STAGE_ORDER: ProjectItem['stage'][] = [
  'Briefing',
  'Figma UI/UX',
  'Dev Flutter',
  'Testes QA',
  'Produção & Lojas'
];

export const FounderOS: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Active User session
  const [currentUser, setCurrentUser] = useState<FounderUser>(() => {
    return getStoredUser() || ADMIN_PROFILE;
  });

  const isAdmin = currentUser.role === 'admin';
  const isClient = currentUser.role === 'client';

  // Navigation tab state
  const tabParam = searchParams.get('tab') as any;
  const initialTab = ['cockpit', 'projects', 'instagram', 'growth', 'finance', 'academy', 'terminal'].includes(tabParam) 
    ? tabParam 
    : 'cockpit';
  const [activeTab, setActiveTab] = useState<'cockpit' | 'projects' | 'instagram' | 'growth' | 'finance' | 'academy' | 'terminal'>(initialTab);

  const [isFounderMode, setIsFounderMode] = useState<boolean>(true);

  // Projects State with LocalStorage Persistence
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('founderos_projects_db');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_PROJECTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('founderos_projects_db', JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedStage, setSelectedStage] = useState('Todas');

  // CRUD Modal States
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [deletingProject, setDeletingProject] = useState<ProjectItem | null>(null);
  const [clientFeedbackModal, setClientFeedbackModal] = useState<ProjectItem | null>(null);
  const [clientFeedbackText, setClientFeedbackText] = useState('');
  const [feedbackSentAlert, setFeedbackSentAlert] = useState(false);

  // New Project Form State
  const [formName, setFormName] = useState('');
  const [formClient, setFormClient] = useState('');
  const [formPhone, setFormPhone] = useState('5562981358986');
  const [formCategory, setFormCategory] = useState('Marketplace & B2B');
  const [formStage, setFormStage] = useState<ProjectItem['stage']>('Briefing');
  const [formProgress, setFormProgress] = useState(15);
  const [formValue, setFormValue] = useState('R$ 35.000,00');
  const [formMrr, setFormMrr] = useState('R$ 2.500,00/mês');
  const [formRepo, setFormRepo] = useState('fabiolucasp/novo-app');
  const [formScreens, setFormScreens] = useState(8);
  const [formHighlight, setFormHighlight] = useState('');

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
    { cmd: 'whoami', output: 'fabio_lucas@founderos ~ [ROLE: Desenvolvedor Master & Gestor] [PERMS: Full CRUD]' },
    { cmd: 'status --all', output: '✓ Firebase Hosting: ONLINE (200 OK)\n✓ Cloud Functions: PACKAGED\n✓ Meta Graph API: ATIVA\n✓ 8 Aplicativos Flutter: SINCRONIZADOS\n✓ Monorepo Architecture: UNIFIED' }
  ]);

  // Handle Tab Switch
  const handleSelectTab = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Switch role between Admin and Client on the fly
  const handleToggleRole = () => {
    const nextUser = isAdmin ? CLIENT_PROFILES[0] : ADMIN_PROFILE;
    setCurrentUser(nextUser);
    saveUser(nextUser);
  };

  const handleLogout = () => {
    clearUser();
    navigate('/login');
  };

  // CRUD: CREATE
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    if (!formName.trim() || !formClient.trim()) return;

    const newProject: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: formName.trim(),
      client: formClient.trim(),
      clientPhone: formPhone.trim() || '5562981358986',
      category: formCategory,
      stage: formStage,
      progress: Number(formProgress) || 10,
      value: formValue.trim() || 'R$ 30.000,00',
      mrr: formMrr.trim() || 'R$ 2.000,00/mês',
      repo: formRepo.trim() || 'fabiolucasp/novo-projeto',
      lastUpdate: 'Hoje, agora',
      sla: '99.9% Previsto',
      screens: Number(formScreens) || 6,
      highlight: formHighlight.trim() || 'Novo aplicativo em arquitetura Flutter.',
      clientApproved: false
    };

    setProjects([newProject, ...projects]);
    setShowNewProjectModal(false);
    // Reset form
    setFormName('');
    setFormClient('');
    setFormHighlight('');
  };

  // CRUD: UPDATE (OPEN MODAL)
  const handleOpenEdit = (project: ProjectItem) => {
    if (!isAdmin) return;
    setEditingProject(project);
    setFormName(project.name);
    setFormClient(project.client);
    setFormPhone(project.clientPhone);
    setFormCategory(project.category);
    setFormStage(project.stage);
    setFormProgress(project.progress);
    setFormValue(project.value);
    setFormMrr(project.mrr);
    setFormRepo(project.repo);
    setFormScreens(project.screens);
    setFormHighlight(project.highlight);
  };

  // CRUD: UPDATE (SAVE)
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin || !editingProject) return;

    setProjects(projects.map(p => {
      if (p.id === editingProject.id) {
        return {
          ...p,
          name: formName,
          client: formClient,
          clientPhone: formPhone,
          category: formCategory,
          stage: formStage,
          progress: Number(formProgress),
          value: formValue,
          mrr: formMrr,
          repo: formRepo,
          screens: Number(formScreens),
          highlight: formHighlight,
          lastUpdate: 'Hoje, editado'
        };
      }
      return p;
    }));

    setEditingProject(null);
  };

  // CRUD: DELETE
  const handleDeleteConfirm = () => {
    if (!isAdmin || !deletingProject) return;
    setProjects(projects.filter(p => p.id !== deletingProject.id));
    setDeletingProject(null);
  };

  // Quick Action: Advance Stage (Admin Only)
  const handleAdvanceStage = (projectId: string) => {
    if (!isAdmin) return;
    setProjects(projects.map(p => {
      if (p.id === projectId) {
        const currentIndex = STAGE_ORDER.indexOf(p.stage);
        const nextIndex = Math.min(currentIndex + 1, STAGE_ORDER.length - 1);
        const nextStage = STAGE_ORDER[nextIndex];
        const nextProgress = nextStage === 'Produção & Lojas' ? 100 : Math.min(p.progress + 20, 95);
        return {
          ...p,
          stage: nextStage,
          progress: nextProgress,
          lastUpdate: 'Hoje, etapa avançada'
        };
      }
      return p;
    }));
  };

  // Client Approval Workflow
  const handleClientApprove = (projectId: string) => {
    setProjects(projects.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          clientApproved: true,
          lastUpdate: 'Aprovado pelo Cliente ✅'
        };
      }
      return p;
    }));
  };

  // Client Feedback submit
  const handleSendClientFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSentAlert(true);
    setTimeout(() => {
      setFeedbackSentAlert(false);
      setClientFeedbackModal(null);
      setClientFeedbackText('');
    }, 2000);
  };

  // Reset to original mock data
  const handleResetData = () => {
    if (window.confirm('Deseja restaurar os dados originais dos projetos?')) {
      setProjects(INITIAL_PROJECTS);
      localStorage.removeItem('founderos_projects_db');
    }
  };

  // Filtering
  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || p.category === selectedCategory;
    const matchesStage = selectedStage === 'Todas' || p.stage === selectedStage;
    return matchesSearch && matchesCategory && matchesStage;
  });

  const categories = ['Todas', 'Marketplace & B2B', 'Fintech & Gateway', 'Mobilidade Urbana', 'Fintech & Gestão', 'Automotivo & GovTech', 'Pet Care & Delivery', 'E-commerce & Gastronomia'];
  const stages = ['Todas', ...STAGE_ORDER];

  // Calculations for PineapplePay Receipt
  const numAmount = parseFloat(receiptAmount) || 0;
  const numCashback = parseFloat(receiptCashback) || 0;
  const cashbackValue = (numAmount * numCashback) / 100;
  const netAmount = numAmount - cashbackValue;

  // Terminal Handler
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Comandos do Terminal:\n- status      : Integridade dos serviços na nuvem\n- projects    : Resumo de todos os apps no ecossistema\n- finance     : Visão consolidada de contratos e MRR\n- clear       : Limpa o histórico\n- deploy      : Simulação de build e deploy em produção\n- whoami      : Usuário e permissões ativas';
        break;
      case 'status':
        output = `SISTEMA OPERACIONAL DO FUNDADOR (FounderOS v2.5)\n- Permissões Ativas : ${isAdmin ? 'ADMINISTRADOR (Full CRUD)' : 'CLIENTE (Acompanhamento)'}\n- Core Platform     : https://fabiolucas.com (ONLINE)\n- Cloud Functions   : Node 22 / TypeScript\n- GitHub Unified    : github.com/fabiolucasp/fabiolucas\n- Status Geral      : 100% OPERACIONAL`;
        break;
      case 'projects':
        output = `APLICATIVOS NO FOUNDEROS:\n${projects.map(p => `• [${p.stage}] ${p.name} - ${p.value} (${p.client})`).join('\n')}`;
        break;
      case 'finance':
        output = isFounderMode
          ? 'FATURAMENTO GLOBAL FOUNDEROS:\n• Contratos em Execução: R$ 404.000,00\n• MRR Recorrente Mensal: R$ 27.900,00/mês\n• Margem Líquida Média : 84.2%\n• Inadimplência        : 0.0%'
          : 'FATURAMENTO OCULTO (Modo Vitrine).';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'whoami':
        output = `Usuário: ${currentUser.name}\nFunção: ${currentUser.title}\nPermissões: ${isAdmin ? 'Full CRUD (Criar, Alterar e Deletar)' : 'Leitura e Aprovação de Etapas'}`;
        break;
      case 'deploy':
        output = 'DISPARANDO PIPELINE DE INTEGRAÇÃO CONTÍNUA:\n$ npm run build\n$ npx firebase deploy --only hosting\n✓ Publicação concluída com sucesso no Firebase.';
        break;
      default:
        output = `Comando desconhecido: "${cmd}". Digite "help" para ver os comandos suportados.`;
    }

    setTerminalHistory(prev => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#E1E7EF] font-sans pb-24">
      {/* TOP EXECUTIVE BAR & RBAC USER STATUS */}
      <header className="sticky top-0 z-50 bg-[#0A0D14]/95 backdrop-blur-md border-b border-[#1E2638]">
        <div className="container mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-3">
            <NavLink to="/" className="p-2 bg-[#44D62C]/10 border border-[#44D62C]/30 rounded-lg text-[#44D62C] hover:scale-105 transition-transform" title="Voltar ao Portfólio Público">
              <Zap size={22} className="animate-pulse" />
            </NavLink>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg text-white tracking-wide">Founders OS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#44D62C]/20 text-[#44D62C] font-semibold border border-[#44D62C]/30">
                  PORTAL UNIFICADO
                </span>
                {isAdmin ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck size={12} /> ADMIN (FULL CRUD)
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00B4D8]/15 text-[#00B4D8] font-bold border border-[#00B4D8]/30 flex items-center gap-1">
                    <UserCheck size={12} /> CLIENTE (ACOMPANHAMENTO)
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 font-mono">
                Logado como: <strong className="text-white">{currentUser.name}</strong> {currentUser.company && `(${currentUser.company})`}
              </p>
            </div>
          </div>

          {/* User Controls & Role Switcher */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Quick Role Toggle button for demo / testing */}
            <button
              onClick={handleToggleRole}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#161D2B] border border-[#232E42] text-gray-300 hover:text-white hover:border-[#44D62C] transition-all"
              title="Alternar entre perfil de Administrador e perfil de Cliente para testar permissões"
            >
              <RefreshCw size={13} />
              <span>Alternar para {isAdmin ? 'Cliente' : 'Administrador'}</span>
            </button>

            {/* Privacy / Confidential Toggle */}
            <button
              onClick={() => setIsFounderMode(!isFounderMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                isFounderMode 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20' 
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
              }`}
              title="Ocultar ou exibir valores confidenciais de faturamento"
            >
              {isFounderMode ? <Eye size={13} /> : <EyeOff size={13} />}
              <span>{isFounderMode ? 'Valores Visíveis' : 'Valores Ocultos'}</span>
            </button>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all"
              title="Encerrar sessão e voltar para tela de login"
            >
              <LogOut size={13} />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {/* Unified Navigation Tabs */}
        <div className="container mx-auto px-4 md:px-6 flex gap-1 overflow-x-auto no-scrollbar border-t border-[#161D2B]">
          {[
            { id: 'cockpit', label: 'Cockpit Executivo', icon: Activity },
            { id: 'projects', label: 'Aplicativos & Clientes', icon: Smartphone, badge: projects.length.toString() },
            { id: 'instagram', label: 'Instagram Studio & Posts', icon: Instagram },
            { id: 'growth', label: 'Radar de Tendências & Leads', icon: Flame },
            { id: 'finance', label: 'PineapplePay & Finanças', icon: DollarSign },
            { id: 'academy', label: 'Academy & Cursos', icon: Award },
            { id: 'terminal', label: 'Terminal Dev & Automações IA', icon: Terminal },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 border-b-2 font-mono text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'border-[#44D62C] text-[#44D62C] bg-[#44D62C]/5' 
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#10141F]'
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#44D62C] text-black' : 'bg-[#1E2638] text-gray-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* Role Banner Notice */}
      <div className="bg-[#0B1019] border-b border-[#1A2333] px-4 md:px-6 py-2 text-xs font-mono">
        <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <>
                <ShieldCheck size={14} className="text-[#44D62C] shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-[#44D62C]">Modo Administrador Ativo:</strong> Você possui controle total de <strong>CRUD (Criar, Alterar e Deletar)</strong> em projetos, faturamento, Instagram e terminal.
                </span>
              </>
            ) : (
              <>
                <Lock size={14} className="text-[#00B4D8] shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-[#00B4D8]">Modo Cliente Ativo:</strong> Acesso de acompanhamento em tempo real, commits e aprovações de entregas. Exclusões e modificações de infraestrutura são restritas ao Administrador (Fábio Lucas).
                </span>
              </>
            )}
          </div>
          {isAdmin && (
            <button
              onClick={handleResetData}
              className="text-[11px] text-gray-500 hover:text-amber-400 underline transition-colors"
              title="Voltar para a lista padrão de projetos"
            >
              Restaurar Dados Originais
            </button>
          )}
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="container mx-auto px-4 md:px-6 pt-6">

        {/* TAB 1: COCKPIT EXECUTIVO */}
        {activeTab === 'cockpit' && (
          <div className="space-y-6">
            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Contratos Ativos</span>
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-[#44D62C]">
                    <Smartphone size={18} />
                  </div>
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  {projects.length} Aplicativos
                </div>
                <p className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <span className="text-[#44D62C]">100%</span> em Flutter & Firebase
                </p>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Faturamento Total</span>
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <DollarSign size={18} />
                  </div>
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  {isFounderMode ? 'R$ 404.000,00' : '••••••••'}
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  Soma dos contratos em execução
                </p>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">MRR Recorrente</span>
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <TrendingUp size={18} />
                  </div>
                </div>
                <div className="text-2xl font-bold font-mono text-[#44D62C] mb-1">
                  {isFounderMode ? 'R$ 27.900,00/mês' : '••••••••'}
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  Manutenção, cloud & evolução contínua
                </p>
              </div>

              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Disponibilidade SLA</span>
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                    <Activity size={18} />
                  </div>
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  99.9% Uptime
                </div>
                <p className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <CheckCircle size={12} className="text-[#44D62C]" /> Infraestrutura Cloud Google
                </p>
              </div>
            </div>

            {/* Quick Actions & Pipeline Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
                    <Layers size={16} className="text-[#44D62C]" />
                    Status do Pipeline de Aplicativos
                  </h3>
                  <button 
                    onClick={() => handleSelectTab('projects')}
                    className="text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1"
                  >
                    Ver Todos os Apps <ArrowRight size={14} />
                  </button>
                </div>

                <div className="space-y-3">
                  {projects.slice(0, 5).map(proj => (
                    <div key={proj.id} className="p-3 bg-[#0A0D14] border border-[#161D2B] rounded-lg flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-white truncate">{proj.name}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161D2B] text-gray-300">
                            {proj.stage}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 truncate">{proj.client}</p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-[#44D62C]">{proj.progress}%</span>
                          <div className="w-20 h-1.5 bg-[#1E2638] rounded-full overflow-hidden mt-1">
                            <div className="h-full bg-[#44D62C]" style={{ width: `${proj.progress}%` }}></div>
                          </div>
                        </div>

                        {isAdmin ? (
                          <button
                            onClick={() => handleAdvanceStage(proj.id)}
                            className="px-2.5 py-1 text-[11px] font-mono bg-[#161D2B] hover:bg-[#44D62C] hover:text-black text-gray-300 rounded border border-[#232E42] transition-colors"
                            title="Avançar etapa no pipeline"
                          >
                            Avançar
                          </button>
                        ) : (
                          <button
                            onClick={() => handleClientApprove(proj.id)}
                            className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-colors ${
                              proj.clientApproved 
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                                : 'bg-[#00B4D8]/10 text-[#00B4D8] border-[#00B4D8]/30 hover:bg-[#00B4D8]/20'
                            }`}
                          >
                            {proj.clientApproved ? 'Aprovado ✓' : 'Aprovar Etapa'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono font-bold text-white text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Zap size={16} className="text-[#44D62C]" />
                    Ações Rápidas do Portal
                  </h3>

                  <div className="space-y-2.5">
                    {isAdmin ? (
                      <>
                        <button
                          onClick={() => {
                            handleSelectTab('projects');
                            setShowNewProjectModal(true);
                          }}
                          className="w-full py-2.5 px-3 bg-[#44D62C] text-black font-mono font-bold text-xs rounded-lg flex items-center justify-between hover:bg-[#52f036] transition-all"
                        >
                          <span className="flex items-center gap-2"><Plus size={15} /> Cadastrar Novo Projeto (CRUD)</span>
                          <ArrowRight size={14} />
                        </button>

                        <button
                          onClick={() => handleSelectTab('instagram')}
                          className="w-full py-2.5 px-3 bg-[#141A28] border border-[#1E2638] hover:border-pink-500/50 text-gray-200 font-mono text-xs rounded-lg flex items-center justify-between transition-all"
                        >
                          <span className="flex items-center gap-2"><Instagram size={15} className="text-pink-400" /> Abrir Instagram Studio & Posts</span>
                          <ArrowRight size={14} />
                        </button>

                        <button
                          onClick={() => handleSelectTab('finance')}
                          className="w-full py-2.5 px-3 bg-[#141A28] border border-[#1E2638] hover:border-emerald-500/50 text-gray-200 font-mono text-xs rounded-lg flex items-center justify-between transition-all"
                        >
                          <span className="flex items-center gap-2"><DollarSign size={15} className="text-[#44D62C]" /> Gerar Comprovante PineapplePay</span>
                          <ArrowRight size={14} />
                        </button>

                        <button
                          onClick={() => handleSelectTab('terminal')}
                          className="w-full py-2.5 px-3 bg-[#141A28] border border-[#1E2638] hover:border-blue-500/50 text-gray-200 font-mono text-xs rounded-lg flex items-center justify-between transition-all"
                        >
                          <span className="flex items-center gap-2"><Terminal size={15} className="text-blue-400" /> Executar Terminal de DevOps</span>
                          <ArrowRight size={14} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSelectTab('projects')}
                          className="w-full py-2.5 px-3 bg-[#00B4D8] text-black font-mono font-bold text-xs rounded-lg flex items-center justify-between hover:bg-[#38c9e7] transition-all"
                        >
                          <span className="flex items-center gap-2"><Smartphone size={15} /> Acompanhar Meu Aplicativo</span>
                          <ArrowRight size={14} />
                        </button>

                        <button
                          onClick={() => handleSelectTab('instagram')}
                          className="w-full py-2.5 px-3 bg-[#141A28] border border-[#1E2638] hover:border-[#00B4D8] text-gray-200 font-mono text-xs rounded-lg flex items-center justify-between transition-all"
                        >
                          <span className="flex items-center gap-2"><Instagram size={15} className="text-pink-400" /> Visualizar e Aprovar Posts</span>
                          <ArrowRight size={14} />
                        </button>

                        <button
                          onClick={() => handleSelectTab('finance')}
                          className="w-full py-2.5 px-3 bg-[#141A28] border border-[#1E2638] hover:border-emerald-500/50 text-gray-200 font-mono text-xs rounded-lg flex items-center justify-between transition-all"
                        >
                          <span className="flex items-center gap-2"><DollarSign size={15} className="text-[#44D62C]" /> Ver Faturas & Pagar com Pix</span>
                          <ArrowRight size={14} />
                        </button>

                        <a
                          href="https://wa.me/5562981358986?text=Ol%C3%A1%20F%C3%A1bio!%20Gostaria%20de%20conversar%20sobre%20o%20andamento%20do%20meu%20projeto%20no%20Founders%20OS."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs rounded-lg flex items-center justify-between hover:bg-emerald-500/20 transition-all"
                        >
                          <span className="flex items-center gap-2"><Send size={15} /> Falar com Fábio Lucas (WhatsApp)</span>
                          <ExternalLink size={14} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#161D2B] text-[11px] font-mono text-gray-400">
                  <div className="flex items-center justify-between mb-1">
                    <span>Sincronização Cloud:</span>
                    <span className="text-[#44D62C] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#44D62C] animate-ping"></span> Ativa
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Segurança dos Dados:</span>
                    <span className="text-gray-300">Não indexado pelo Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APLICATIVOS & CLIENTES (FULL CRUD) */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Filter, Search & Create Bar */}
            <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
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

                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="bg-[#0A0D14] border border-[#1E2638] rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#44D62C]"
                >
                  {stages.map(st => (
                    <option key={st} value={st}>Etapa: {st}</option>
                  ))}
                </select>

                {isAdmin ? (
                  <button
                    onClick={() => {
                      setFormName('');
                      setFormClient('');
                      setFormHighlight('');
                      setShowNewProjectModal(true);
                    }}
                    className="px-3.5 py-2 bg-[#44D62C] text-black font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 whitespace-nowrap hover:bg-[#52f036] transition-all shadow-md shadow-[#44D62C]/20"
                  >
                    <Plus size={14} /> Novo Projeto (CRUD)
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setClientFeedbackModal(projects[0]);
                    }}
                    className="px-3.5 py-2 bg-[#00B4D8] text-black font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 whitespace-nowrap hover:bg-[#38c9e7] transition-all shadow-md shadow-[#00B4D8]/20"
                  >
                    <MessageSquare size={14} /> Solicitar Ajuste / Feedback
                  </button>
                )}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((project) => {
                const isClientProject = isClient && currentUser.projectId === project.id;

                return (
                  <div 
                    key={project.id}
                    className={`bg-[#0E131F] border rounded-xl p-5 transition-all flex flex-col justify-between ${
                      isClientProject 
                        ? 'border-[#00B4D8] ring-1 ring-[#00B4D8] shadow-lg shadow-[#00B4D8]/10' 
                        : 'border-[#1E2638] hover:border-[#44D62C]/50'
                    }`}
                  >
                    <div>
                      {/* Top badges */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20 uppercase">
                              {project.category}
                            </span>
                            {isClientProject && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00B4D8]/20 text-[#00B4D8] font-bold border border-[#00B4D8]/40">
                                SEU PROJETO ATIVO
                              </span>
                            )}
                          </div>
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

                      {/* Info grid */}
                      <div className="grid grid-cols-2 gap-2 bg-[#0A0D14] border border-[#161D2B] rounded-lg p-3 mb-4 text-xs font-mono">
                        <div>
                          <span className="text-gray-500 text-[10px] block uppercase">Cliente / Empresa</span>
                          <strong className="text-gray-200">{project.client}</strong>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] block uppercase">Telas em Flutter</span>
                          <strong className="text-gray-200">{project.screens} Telas Nativas</strong>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] block uppercase">Valor Contratado</span>
                          <strong className="text-white">{isFounderMode || isClient ? project.value : '••••••••'}</strong>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] block uppercase">Recorrência MRR</span>
                          <strong className="text-[#44D62C]">{isFounderMode || isClient ? project.mrr : '••••••••'}</strong>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                          <span>Progresso da Entrega:</span>
                          <span className="text-[#44D62C] font-bold">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#161D2B] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-500 to-[#44D62C] rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Stages Indicator */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-4 px-1">
                        {STAGE_ORDER.map((stageName, idx) => {
                          const isDone = STAGE_ORDER.indexOf(project.stage) >= idx;
                          const isCurrent = project.stage === stageName;
                          return (
                            <span 
                              key={stageName}
                              className={`${
                                isCurrent 
                                  ? 'text-[#44D62C] font-bold' 
                                  : isDone ? 'text-gray-300' : 'text-gray-600'
                              }`}
                            >
                              {stageName.split(' ')[0]}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Card Actions (CRUD for Admin vs Approval for Client) */}
                    <div className="pt-3 border-t border-[#161D2B] flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                        <Clock size={11} /> {project.lastUpdate}
                      </span>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        {/* ADMIN CRUD CONTROLS */}
                        {isAdmin && (
                          <>
                            <button
                              onClick={() => handleAdvanceStage(project.id)}
                              className="px-2 py-1 bg-[#161D2B] hover:bg-[#44D62C] hover:text-black text-gray-300 rounded text-xs font-mono transition-colors"
                              title="Avançar para a próxima etapa do desenvolvimento"
                            >
                              ⏩ Avançar
                            </button>

                            <button
                              onClick={() => handleOpenEdit(project)}
                              className="p-1.5 bg-[#161D2B] hover:bg-blue-500/20 text-blue-400 rounded border border-[#232E42] transition-colors"
                              title="Editar dados do projeto (CRUD Update)"
                            >
                              <Edit3 size={13} />
                            </button>

                            <button
                              onClick={() => setDeletingProject(project)}
                              className="p-1.5 bg-[#161D2B] hover:bg-red-500/20 text-red-400 rounded border border-[#232E42] transition-colors"
                              title="Excluir projeto do sistema (CRUD Delete)"
                            >
                              <Trash2 size={13} />
                            </button>
                          </>
                        )}

                        {/* CLIENT APPROVAL CONTROLS */}
                        {isClient && (
                          <>
                            <button
                              onClick={() => handleClientApprove(project.id)}
                              className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1 transition-colors ${
                                project.clientApproved 
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                                  : 'bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 hover:bg-[#00B4D8]/20'
                              }`}
                            >
                              <CheckCircle2 size={13} />
                              <span>{project.clientApproved ? 'Aprovado ✓' : 'Aprovar Etapa'}</span>
                            </button>

                            <button
                              onClick={() => setClientFeedbackModal(project)}
                              className="px-2 py-1 bg-[#161D2B] hover:bg-[#222E42] text-gray-300 rounded text-xs font-mono transition-colors"
                              title="Enviar comentário sobre a entrega"
                            >
                              Feedback
                            </button>
                          </>
                        )}

                        <a
                          href={`https://wa.me/${project.clientPhone}?text=Ol%C3%A1!%20F%C3%A1bio%20Lucas%20aqui.%20Segue%20o%20relat%C3%B3rio%20do%20projeto%20${encodeURIComponent(project.name)}%3A%20Etapa%20${encodeURIComponent(project.stage)}%2C%20progresso%20${project.progress}%25.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs font-mono flex items-center gap-1 transition-all"
                          title="Conversar via WhatsApp"
                        >
                          <Send size={11} /> WhatsApp
                        </a>

                        <a
                          href={`https://github.com/${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 bg-[#161D2B] hover:bg-[#1E2638] text-gray-300 border border-[#232E42] rounded text-xs font-mono flex items-center gap-1 transition-all"
                          title="Abrir repositório no GitHub"
                        >
                          <ExternalLink size={11} /> Repo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: INSTAGRAM STUDIO UNIFICADO */}
        {activeTab === 'instagram' && (
          <div className="space-y-6">
            <InstagramStudio 
              embedded={true} 
              userRole={currentUser.role} 
              initialTab="feed" 
            />
          </div>
        )}

        {/* TAB 4: GROWTH & RADAR DE TENDÊNCIAS */}
        {activeTab === 'growth' && (
          <div className="space-y-6">
            <InstagramStudio 
              embedded={true} 
              userRole={currentUser.role} 
              initialTab="trends" 
            />
          </div>
        )}

        {/* TAB 5: PINEAPPLEPAY & FINANÇAS */}
        {activeTab === 'finance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Receipt Generator Form */}
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1E2638]">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#44D62C]/10 text-[#44D62C] rounded-lg">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-white text-base">PineapplePay Emissor</h3>
                      <p className="text-xs text-gray-400">Geração de Comprovantes com Split & Cashback</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    PRODUÇÃO
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <label className="block text-gray-400 mb-1">CLIENTE / SACADO</label>
                    <input
                      type="text"
                      value={receiptClient}
                      onChange={(e) => setReceiptClient(e.target.value)}
                      className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 mb-1">CNPJ / CPF</label>
                      <input
                        type="text"
                        value={receiptDoc}
                        onChange={(e) => setReceiptDoc(e.target.value)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1">FORMA DE PAGAMENTO</label>
                      <select
                        value={receiptMethod}
                        onChange={(e) => setReceiptMethod(e.target.value as any)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                      >
                        <option value="PIX">PIX (Instantâneo)</option>
                        <option value="CARTAO">Cartão de Crédito</option>
                        <option value="TRANSFERENCIA">Transferência TED</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 mb-1">VALOR BRUTO (R$)</label>
                      <input
                        type="number"
                        value={receiptAmount}
                        onChange={(e) => setReceiptAmount(e.target.value)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1">CASHBACK FIDELIDADE (%)</label>
                      <input
                        type="number"
                        value={receiptCashback}
                        onChange={(e) => setReceiptCashback(e.target.value)}
                        className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">DESCRIÇÃO DO SERVIÇO</label>
                    <input
                      type="text"
                      value={receiptService}
                      onChange={(e) => setReceiptService(e.target.value)}
                      className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                    />
                  </div>

                  <button
                    onClick={() => setReceiptGenerated(true)}
                    className="w-full py-3 bg-[#44D62C] text-black font-mono font-bold text-sm rounded-lg hover:bg-[#52f036] transition-all flex items-center justify-center gap-2"
                  >
                    <Printer size={16} /> Emitir Comprovante Oficial PineapplePay
                  </button>
                </div>
              </div>

              {/* Receipt Visualizer */}
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1E2638]">
                    <span className="font-mono text-xs text-gray-400 uppercase">Prévia do Comprovante</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      PDF & Pix Ready
                    </span>
                  </div>

                  {receiptGenerated ? (
                    <div className="bg-[#0A0D14] border border-[#1E2638] rounded-xl p-5 font-mono text-xs space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-[#161D2B]">
                        <strong className="text-white text-sm">PINEAPPLE PAY FINTECH</strong>
                        <span className="text-[#44D62C]">AUTENTICADO</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-gray-400 text-[11px]">
                        <div>SACADO: <strong className="text-white block">{receiptClient}</strong></div>
                        <div>CNPJ: <strong className="text-white block">{receiptDoc}</strong></div>
                        <div>MÉTODO: <strong className="text-white block">{receiptMethod}</strong></div>
                        <div>DATA: <strong className="text-white block">Hoje, {new Date().toLocaleTimeString()}</strong></div>
                      </div>

                      <div className="p-3 bg-[#121826] rounded-lg border border-[#1E2638] space-y-1">
                        <div className="flex justify-between text-gray-400">
                          <span>Valor do Serviço:</span>
                          <span className="text-white">R$ {numAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                          <span>Cashback Aplicado ({numCashback}%):</span>
                          <span className="text-[#44D62C]">- R$ {cashbackValue.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-white font-bold pt-1 border-t border-[#1E2638]">
                          <span>Total Líquido:</span>
                          <span className="text-[#44D62C]">R$ {netAmount.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="text-[10px] text-gray-500 text-center">
                        ID: 00020126580014BR.GOV.BCB.PIX2536pineapplepay-gateway-66eb2
                      </div>
                    </div>
                  ) : (
                    <div className="py-16 text-center text-gray-500 font-mono text-xs">
                      Preencha os dados e clique em "Emitir Comprovante" para visualizar o comprovante oficial.
                    </div>
                  )}
                </div>

                {receiptGenerated && (
                  <div className="mt-4 pt-4 border-t border-[#1E2638] flex gap-2">
                    <button
                      onClick={() => alert('Comprovante em PDF baixado com sucesso!')}
                      className="flex-1 py-2 bg-[#161D2B] hover:bg-[#1E2638] text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <FileText size={14} /> Baixar PDF
                    </button>
                    <button
                      onClick={() => alert('Código Copia e Cola Pix copiado para a área de transferência!')}
                      className="flex-1 py-2 bg-[#44D62C]/10 border border-[#44D62C]/30 text-[#44D62C] hover:bg-[#44D62C]/20 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Check size={14} /> Copiar Pix
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ACADEMY & CURSOS */}
        {activeTab === 'academy' && (
          <div className="space-y-6">
            <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
              <h3 className="font-mono font-bold text-white text-base mb-2 flex items-center gap-2">
                <Award size={18} className="text-purple-400" />
                Academy & Treinamentos de Arquitetura de Software
              </h3>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                Cursos práticos, e-books e transferência de tecnologia para clientes e desenvolvedores.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0A0D14] border border-[#1E2638] rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                      CURSO COMPLETO
                    </span>
                    <h4 className="text-sm font-bold text-white mt-2 mb-1">Flutter Enterprise & Clean Architecture</h4>
                    <p className="text-xs text-gray-400">Do zero ao app corporativo com injeção de dependência e BLoC.</p>
                  </div>
                  <NavLink to="/cursos" className="mt-4 text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1">
                    Acessar Conteúdo <ArrowRight size={13} />
                  </NavLink>
                </div>

                <div className="bg-[#0A0D14] border border-[#1E2638] rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                      E-BOOK TÉCNICO
                    </span>
                    <h4 className="text-sm font-bold text-white mt-2 mb-1">Google Play & App Store: Guia Definitivo</h4>
                    <p className="text-xs text-gray-400">Checklist para homologação sem rejeições nas lojas oficiais.</p>
                  </div>
                  <NavLink to="/ebooks" className="mt-4 text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1">
                    Ler E-book <ArrowRight size={13} />
                  </NavLink>
                </div>

                <div className="bg-[#0A0D14] border border-[#1E2638] rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      COMUNIDADE EXCLUSIVA
                    </span>
                    <h4 className="text-sm font-bold text-white mt-2 mb-1">Comunidade Founders & Devs</h4>
                    <p className="text-xs text-gray-400">Canal direto com os clientes para novidades e suporte contínuo.</p>
                  </div>
                  <NavLink to="/comunidade" className="mt-4 text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1">
                    Participar <ArrowRight size={13} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: DEV TERMINAL & AUTOMAÇÕES IA */}
        {activeTab === 'terminal' && (
          <div className="space-y-6">
            {isAdmin ? (
              <div className="bg-[#0A0D14] border border-[#1E2638] rounded-xl overflow-hidden font-mono shadow-2xl">
                <div className="bg-[#121826] px-4 py-2.5 border-b border-[#1E2638] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="ml-2 text-xs text-gray-300">fabio_lucas@founderos: ~ (bash / zsh)</span>
                  </div>
                  <span className="text-[10px] text-[#44D62C] font-bold">ADMIN ROOT CONSOLE</span>
                </div>

                <div className="p-4 space-y-3 min-h-[340px] max-h-[460px] overflow-y-auto text-xs">
                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-gray-400 flex items-center gap-1.5">
                        <span className="text-[#44D62C] font-bold">fabio@founderos:~$</span>
                        <span className="text-white">{entry.cmd}</span>
                      </div>
                      <pre className="text-gray-300 whitespace-pre-wrap font-mono pl-4 border-l border-[#1E2638]">
                        {entry.output}
                      </pre>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleTerminalSubmit} className="p-3 bg-[#07090E] border-t border-[#1E2638] flex items-center gap-2">
                  <span className="text-[#44D62C] font-bold text-xs pl-2">fabio@founderos:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Digite um comando (ex: 'help', 'status', 'projects', 'finance', 'deploy')..."
                    className="flex-1 bg-transparent border-none text-xs font-mono text-white focus:outline-none placeholder-gray-600"
                    autoFocus
                  />
                  <button type="submit" className="px-3 py-1 bg-[#1E2638] hover:bg-[#44D62C] hover:text-black text-gray-300 text-xs rounded transition-colors">
                    Executar
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-8 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold font-mono text-white mb-2">Ambiente de Produção Monitorado</h3>
                <p className="text-sm text-gray-400 mb-6 font-mono leading-relaxed">
                  O console de execução de comandos diretos é reservado ao Desenvolvedor Master (Fábio Lucas) para segurança operacional. Sua aplicação conta com telemetria 24/7 e SLA 99.9% garantido.
                </p>

                <div className="grid grid-cols-2 gap-3 text-left font-mono text-xs bg-[#0A0D14] p-4 rounded-xl border border-[#1E2638]">
                  <div>
                    <span className="text-gray-500 block text-[10px]">INTEGRIDADE SERVIDORES:</span>
                    <strong className="text-emerald-400">100% OPERACIONAL</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">ÚLTIMA SINCRONIZAÇÃO:</span>
                    <strong className="text-white">Hoje, automática</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">RESPONSÁVEL TÉCNICO:</span>
                    <strong className="text-white">Fábio Lucas</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">SUPORTE PRIORITÁRIO:</span>
                    <strong className="text-[#44D62C]">Ativo via WhatsApp</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* MODAL: NOVO PROJETO (CRUD CREATE) */}
      {showNewProjectModal && isAdmin && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-[#1E2638] rounded-2xl max-w-xl w-full p-6 text-xs font-mono shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E2638]">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plus size={16} className="text-[#44D62C]" />
                Cadastrar Novo Projeto no FounderOS (CRUD)
              </h3>
              <button onClick={() => setShowNewProjectModal(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">NOME DO APLICATIVO</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: AutoParts Guide (Cliente & Lojista)"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">CLIENTE / EMPRESA</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Distribuidora Centro-Oeste"
                    value={formClient}
                    onChange={(e) => setFormClient(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">WHATSAPP (DDI+DDD+NUM)</label>
                  <input
                    type="text"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">CATEGORIA</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  >
                    {categories.filter(c => c !== 'Todas').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">ETAPA ATUAL</label>
                  <select
                    value={formStage}
                    onChange={(e) => setFormStage(e.target.value as any)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  >
                    {STAGE_ORDER.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">PROGRESSO (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formProgress}
                    onChange={(e) => setFormProgress(Number(e.target.value))}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">VALOR TOTAL</label>
                  <input
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">MRR MENSAL</label>
                  <input
                    type="text"
                    value={formMrr}
                    onChange={(e) => setFormMrr(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">TELAS MAPEADAS</label>
                  <input
                    type="number"
                    value={formScreens}
                    onChange={(e) => setFormScreens(Number(e.target.value))}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">REPOSITÓRIO GITHUB</label>
                  <input
                    type="text"
                    value={formRepo}
                    onChange={(e) => setFormRepo(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-1">DESTAQUE TECNOLÓGICO</label>
                <textarea
                  rows={2}
                  placeholder="Ex: Integração nativa com IA de cabine e geofencing..."
                  value={formHighlight}
                  onChange={(e) => setFormHighlight(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#1E2638]">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-[#52f036]"
                >
                  Salvar Projeto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDITAR PROJETO (CRUD UPDATE) */}
      {editingProject && isAdmin && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-[#1E2638] rounded-2xl max-w-xl w-full p-6 text-xs font-mono shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E2638]">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Edit3 size={16} className="text-blue-400" />
                Editar Projeto: {editingProject.name} (CRUD Update)
              </h3>
              <button onClick={() => setEditingProject(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">NOME DO APLICATIVO</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">CLIENTE / EMPRESA</label>
                  <input
                    type="text"
                    required
                    value={formClient}
                    onChange={(e) => setFormClient(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">ETAPA</label>
                  <select
                    value={formStage}
                    onChange={(e) => setFormStage(e.target.value as any)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  >
                    {STAGE_ORDER.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">PROGRESSO (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formProgress}
                    onChange={(e) => setFormProgress(Number(e.target.value))}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">VALOR TOTAL</label>
                  <input
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">MRR MENSAL</label>
                  <input
                    type="text"
                    value={formMrr}
                    onChange={(e) => setFormMrr(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-1">DESTAQUE TECNOLÓGICO</label>
                <textarea
                  rows={2}
                  value={formHighlight}
                  onChange={(e) => setFormHighlight(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#1E2638]">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EXCLUIR PROJETO (CRUD DELETE) */}
      {deletingProject && isAdmin && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-red-500/40 rounded-2xl max-w-md w-full p-6 text-xs font-mono shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-4">
              <Trash2 size={24} />
            </div>

            <h3 className="text-base font-bold text-white mb-2">Excluir Projeto do Sistema</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Você tem certeza que deseja excluir o aplicativo <strong>{deletingProject.name}</strong> ({deletingProject.client})? Esta operação remove o registro do banco de dados do FounderOS.
            </p>

            <div className="flex justify-end gap-2 pt-3 border-t border-[#1E2638]">
              <button
                type="button"
                onClick={() => setDeletingProject(null)}
                className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600"
              >
                Sim, Excluir Projeto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CLIENT FEEDBACK / SOLICITAÇÃO */}
      {clientFeedbackModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-[#00B4D8]/40 rounded-2xl max-w-md w-full p-6 text-xs font-mono shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E2638]">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <MessageSquare size={16} className="text-[#00B4D8]" />
                Feedback / Solicitação de Ajuste
              </h3>
              <button onClick={() => setClientFeedbackModal(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSendClientFeedback} className="space-y-4">
              <p className="text-gray-300">
                Projeto: <strong className="text-white">{clientFeedbackModal.name}</strong>
              </p>

              <div>
                <label className="block text-gray-400 mb-1">MENSAGEM PARA O DESENVOLVEDOR (FÁBIO LUCAS)</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreva sua solicitação de ajuste, feedback sobre o protótipo ou dúvida..."
                  value={clientFeedbackText}
                  onChange={(e) => setClientFeedbackText(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#00B4D8]"
                />
              </div>

              {feedbackSentAlert ? (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-center font-bold">
                  ✓ Solicitação registrada e notificada com sucesso!
                </div>
              ) : (
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setClientFeedbackModal(null)}
                    className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
                  >
                    Fechar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#00B4D8] text-black font-bold rounded-lg hover:bg-[#38c9e7]"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderOS;
