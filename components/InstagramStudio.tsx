import React, { useState, useEffect } from 'react';
import { 
  Instagram, Sparkles, Send, Bookmark, BarChart3, TrendingUp, Calendar, 
  Copy, Check, RefreshCw, Key, ShieldCheck, Heart, MessageCircle, 
  Share2, Eye, Plus, ExternalLink, Sliders, AlertTriangle, Layers, 
  HelpCircle, CheckCircle2, ChevronRight, Hash, ArrowLeft, Search,
  MessageSquare, Phone, Users, Target, Compass, BookOpen, Smartphone,
  Lightbulb, Star, Play, Flame, Zap, Building2, MapPin, DollarSign,
  ChevronDown
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { 
  InstagramProfile, InstagramMedia, GraphApiConfig, 
  getStoredGraphConfig, saveGraphConfig, clearGraphConfig, 
  MOCK_PROFILE, MOCK_MEDIA, fetchLiveInstagramProfile, 
  fetchLiveInstagramMedia, publishMediaToInstagram 
} from '../services/instagramGraphApi';
import {
  TrendItem, RealTimeSearchQuery, XTrendTopic, TrendToContentSuggestion,
  MOCK_GOOGLE_INSIGHTS, MOCK_REALTIME_SEARCHES, MOCK_X_TRENDS, MOCK_TREND_SUGGESTIONS
} from '../services/trendsService';
import {
  ChatbotStep, ChatMessage, QuickReply, CHATBOT_STEPS, QUICK_REPLIES,
  WHATSAPP_PHONE_NUMBER, buildWhatsAppUrl
} from '../services/whatsappBotService';
import {
  B2BLead, MOCK_B2B_LEADS
} from '../services/b2bLeadsService';
import {
  FollowerInteraction, PostingScheduleSlot, HighlightItem, CarouselSlide,
  MOCK_INTERACTIONS, POSTING_SCHEDULE_MATRIX, CURATED_HIGHLIGHTS
} from '../services/instagramAnalyticsService';

interface EditorialPlanItem {
  id: string;
  day: string;
  theme: string;
  format: 'Carrossel' | 'Reels' | 'Post Único' | 'Stories';
  title: string;
  hook: string;
  status: 'Agendado' | 'Rascunho' | 'Publicado';
}

const DEFAULT_EDITORIAL_PLAN: EditorialPlanItem[] = [
  {
    id: 'plan-1',
    day: 'Segunda-feira',
    theme: 'Case Study & Arquitetura',
    format: 'Carrossel',
    title: 'Arquitetura de Telas do GynMove em Flutter',
    hook: 'Como gerenciar 7 etapas de prova de vida biométrica sem travar a UI?',
    status: 'Agendado'
  },
  {
    id: 'plan-2',
    day: 'Terça-feira',
    theme: 'Dica Técnica Rápida',
    format: 'Reels',
    title: 'Top 3 Patterns de Injeção de Dependência no Dart',
    hook: 'Você ainda está criando instâncias estáticas soltas no seu app?',
    status: 'Rascunho'
  },
  {
    id: 'plan-3',
    day: 'Quarta-feira',
    theme: 'Case Study de Negócios',
    format: 'Carrossel',
    title: 'TaxiDog em Tempo Real no Bicho Mimado',
    hook: 'Como sincronizamos GPS e telemetria sem esquentar o smartphone do motorista.',
    status: 'Agendado'
  },
  {
    id: 'plan-4',
    day: 'Quinta-feira',
    theme: 'Interação nos Stories',
    format: 'Stories',
    title: 'Enquete & Caixa de Perguntas de Arquitetura Flutter',
    hook: 'Pergunte ao Arquiteto: qual o maior gargalo de performance no seu app hoje?',
    status: 'Agendado'
  },
  {
    id: 'plan-5',
    day: 'Sexta-feira',
    theme: 'Lançamento & Produtos',
    format: 'Carrossel',
    title: 'Novo E-book: Do Zero à Publicação na Google Play',
    hook: 'O passo a passo que usei para homologar mais de 8 aplicativos em produção.',
    status: 'Agendado'
  },
  {
    id: 'plan-6',
    day: 'Sábado',
    theme: 'Bastidores & Mentalidade',
    format: 'Reels',
    title: 'Um dia na rotina de um Desenvolvedor Full-Stack Solo',
    hook: '3 ferramentas que me economizam 15 horas de código por semana.',
    status: 'Rascunho'
  }
];

export default function InstagramStudio() {
  const [activeTab, setActiveTab] = useState<'feed' | 'studio' | 'calendar' | 'trends' | 'whatsapp' | 'leads' | 'strategy' | 'api'>('feed');
  const [config, setConfig] = useState<GraphApiConfig>(getStoredGraphConfig());
  const [profile, setProfile] = useState<InstagramProfile>(MOCK_PROFILE);
  const [mediaList, setMediaList] = useState<InstagramMedia[]>(MOCK_MEDIA);
  const [selectedMedia, setSelectedMedia] = useState<InstagramMedia | null>(MOCK_MEDIA[0]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Form states for API Token setup
  const [tokenInput, setTokenInput] = useState('');
  const [accountIdInput, setAccountIdInput] = useState('');
  const [configSuccess, setConfigSuccess] = useState(false);

  // Multiformat AI Studio States
  const [studioFormat, setStudioFormat] = useState<'carrossel' | 'reels' | 'stories' | 'highlights' | 'post_unico'>('carrossel');
  const [studioSubject, setStudioSubject] = useState('Como implementamos o TaxiDog nativo no Bicho Mimado com Google Navigation SDK');
  const [studioGoal, setStudioGoal] = useState<'engajamento' | 'vendas' | 'autoridade' | 'comentarios'>('engajamento');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState('');
  const [visualTip, setVisualTip] = useState('');
  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>([]);
  const [storiesSequence, setStoriesSequence] = useState<string[]>([]);
  const [reelsScript, setReelsScript] = useState<{ hook: string; body: string; cta: string; audio: string }>({ hook: '', body: '', cta: '', audio: '' });
  const [copied, setCopied] = useState(false);

  // Editorial Plan State
  const [plans, setPlans] = useState<EditorialPlanItem[]>(DEFAULT_EDITORIAL_PLAN);

  // Direct Publish State
  const [publishImageUrl, setPublishImageUrl] = useState('');
  const [publishStatus, setPublishStatus] = useState<{ status: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ status: 'idle' });

  // Interactions State
  const [interactions, setInteractions] = useState<FollowerInteraction[]>(MOCK_INTERACTIONS);
  const [interactionFilter, setInteractionFilter] = useState<'todos' | 'lead_b2b' | 'dev_senior' | 'dev_junior' | 'tech_recruiter'>('todos');

  // WhatsApp Chatbot Simulator State
  const [chatCurrentStep, setChatCurrentStep] = useState<ChatbotStep>(CHATBOT_STEPS.start);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'msg-start',
      sender: 'bot',
      text: CHATBOT_STEPS.start.botMessage,
      timestamp: 'Agora',
      options: CHATBOT_STEPS.start.options
    }
  ]);
  const [finalWhatsAppPayload, setFinalWhatsAppPayload] = useState('Olá Fábio Lucas! Vim pelo seu portfólio fabiolucas.com e gostaria de conversar sobre um projeto.');

  // B2B Leads State
  const [b2bLeads, setB2bLeads] = useState<B2BLead[]>(MOCK_B2B_LEADS);
  const [leadNicheFilter, setLeadNicheFilter] = useState<string>('todos');
  const [selectedLeadForPitch, setSelectedLeadForPitch] = useState<B2BLead | null>(MOCK_B2B_LEADS[0]);

  // Carrega dados salvos ou mock
  useEffect(() => {
    const currentConfig = getStoredGraphConfig();
    setConfig(currentConfig);
    setTokenInput(currentConfig.accessToken);
    setAccountIdInput(currentConfig.instagramAccountId);

    if (currentConfig.isLive) {
      loadLiveData(currentConfig.accessToken, currentConfig.instagramAccountId);
    } else {
      setProfile(MOCK_PROFILE);
      setMediaList(MOCK_MEDIA);
    }
    // Gera copy inicial
    buildStudioContent('carrossel', studioSubject, studioGoal);
  }, []);

  const loadLiveData = async (token: string, accountId: string) => {
    setLoading(true);
    setApiError(null);
    try {
      const [liveProfile, liveMedia] = await Promise.all([
        fetchLiveInstagramProfile(token, accountId),
        fetchLiveInstagramMedia(token, accountId)
      ]);
      setProfile(liveProfile);
      setMediaList(liveMedia);
      if (liveMedia.length > 0) {
        setSelectedMedia(liveMedia[0]);
      }
    } catch (err: any) {
      setApiError(err.message || 'Falha ao sincronizar com Instagram Graph API.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim() || !accountIdInput.trim()) {
      setApiError('Preencha o Token de Acesso e o Instagram Account ID.');
      return;
    }
    saveGraphConfig(tokenInput, accountIdInput);
    const newConfig = getStoredGraphConfig();
    setConfig(newConfig);
    setConfigSuccess(true);
    setTimeout(() => setConfigSuccess(false), 3000);
    await loadLiveData(tokenInput, accountIdInput);
  };

  const handleClearConfig = () => {
    clearGraphConfig();
    setConfig({ accessToken: '', instagramAccountId: '', isLive: false });
    setTokenInput('');
    setAccountIdInput('');
    setProfile(MOCK_PROFILE);
    setMediaList(MOCK_MEDIA);
    setSelectedMedia(MOCK_MEDIA[0]);
    setApiError(null);
  };

  // Motor Multiformato de Criação de Conteúdo AI
  const buildStudioContent = (format: string, subject: string, goal: string) => {
    if (format === 'carrossel') {
      const slides: CarouselSlide[] = [
        {
          slideNumber: 1,
          badge: 'CAPA IMPACTANTE',
          title: subject,
          content: [
            'Como resolvemos isso em produção com Flutter & Cloud.',
            'Arraste para o lado e veja a arquitetura passo a passo ➡️'
          ],
          visualNote: 'Capa escura estilizada com print de smartphone em 3D e título em tipografia bold de alto contraste.'
        },
        {
          slideNumber: 2,
          badge: 'O DESAFIO',
          title: 'O Problema que 90% dos Desenvolvedores Enfrentam',
          content: [
            '• Travamento de tela e engasgos de interface em aparelhos de entrada.',
            '• Polling HTTP desnecessário drenando a bateria do usuário.',
            '• Dificuldade de manter estabilidade em conexões 3G/4G instáveis.'
          ],
          visualNote: 'Card visual com ícones de alerta vermelhos e estatística de retenção destacada.'
        },
        {
          slideNumber: 3,
          badge: 'A ARQUITETURA',
          title: 'Decisões de Engenharia & Clean Architecture',
          content: [
            '1. Separação de camadas: Domínio, Dados e Apresentação estritamente desacopladas.',
            '2. Stream reativo com Firebase Firestore escutando apenas deltas de dados.',
            '3. Tratamento defensivo de exceções e tolerância a falhas offline-first.'
          ],
          codeSnippet: 'class RouteTelemetryBloc extends Bloc<TelemetryEvent, TelemetryState> {\n  // Streams reativos desacoplados da UI\n}',
          visualNote: 'Diagrama de fluxo com blocos em verde limão (#44D62C) e setas direcionais.'
        },
        {
          slideNumber: 4,
          badge: 'CÓDIGO DE PRODUÇÃO',
          title: 'Implementação Otimizada no Dart',
          content: [
            '• Uso de isolates para tarefas pesadas sem congelar a main thread.',
            '• Descarte automático de controllers no dispose para evitar memory leaks.'
          ],
          codeSnippet: 'await compute(processNavigationCoordinates, rawPoints);\n// Execução em background thread',
          visualNote: 'Bloco de código estilo VS Code com sintaxe colorida em tema escuro.'
        },
        {
          slideNumber: 5,
          badge: 'RESULTADOS & MÉTRICAS',
          title: 'Impacto Real nos Aplicativos Publicados',
          content: [
            '✅ 60/120 FPS cravados em todos os testes em dispositivos reais.',
            '✅ Zero quedas de sessão reportadas no Firebase Crashlytics.',
            '✅ Mais de 8 aplicativos no ar com essa mesma base de engenharia.'
          ],
          visualNote: 'Gráfico minimalista de performance e badges de aprovação na Google Play Store.'
        },
        {
          slideNumber: 6,
          badge: 'CHAMADA PARA AÇÃO (CTA)',
          title: 'Quer Aplicar Essa Arquitetura no Seu Projeto?',
          content: [
            '💬 Comente "ARQUITETURA" para receber o resumo técnico no direct.',
            '💾 Salve este carrossel para consultar no seu próximo app.',
            '🔗 Case study completo disponível em fabiolucas.com'
          ],
          visualNote: 'Foto profissional com chamada para comentário e seta apontando para o botão salvar.'
        }
      ];
      setCarouselSlides(slides);
      setGeneratedCaption(`Case de Engenharia: ${subject} 🚀📲\n\nNeste carrossel passo a passo, detalhei a estratégia que utilizamos para construir soluções de alto impacto.\n\nPrincipais pilares:\n✅ 1. Clean Architecture com Flutter\n✅ 2. Streams em tempo real com Firebase\n✅ 3. Tolerância a quedas de rede\n✅ 4. Design System consistente com o Figma\n\nArraste até o final e me conte nos comentários: qual é o seu maior desafio de arquitetura hoje? 👇`);
      setGeneratedHashtags('#FlutterDev #MobileArchitecture #CleanCode #FullStack #AppDevelopment #Firebase #DevLife #SoftwareEngineer #GoogleMaps #TechFounder');
      setVisualTip('💡 Sugestão de Design: Carrossel de 6 slides com fundo preto fosco (#0C0C0C), destaques em verde neon (#44D62C) e tipografia JetBrains Mono nos trechos de código.');

    } else if (format === 'reels') {
      const script = {
        hook: `00-03s: Gancho Visual — Segure o celular na mão com o app funcionando na tela e fale: "Se você ainda programa seu app assim, você está perdendo horas de código todo santo dia..."`,
        body: `04-35s: Demonstração Acelerada (B-Roll de Código) — Alterne a câmera para a tela do computador mostrando a árvore de widgets sendo refatorada. Destaque: "Em vez de reconstruir o widget inteiro a cada clique, olha o que acontece quando aplicamos esse pattern..." Mostre o medidor de FPS cravando em 60/120 FPS.`,
        cta: `36-50s: Call to Action — "Gostou dessa sacada? Comente 'REELS' que te envio o repositório modelo no direct e me siga para mais engenharia sem enrolação!"`,
        audio: `Áudio Recomendado: Lo-Fi Tech Beat em alta ou som original com voz firme e ritmo dinâmico acelerado em 1.1x.`
      };
      setReelsScript(script);
      setGeneratedCaption(`O segredo de performance que ninguém te ensina nos cursos básicos de Flutter! ⚡📱\n\n${subject}\n\nO segredo não é trabalhar 14 horas por dia, é automatizar o fluxo e desacoplar o código da forma certa.\n\nQual parte da sua rotina você mais gostaria de automatizar? Deixe seu comentário! 👇`);
      setGeneratedHashtags('#ReelsDev #FlutterBrasil #DicasDeProgramacao #TechCreator #ProgramadorSolo #DevHumor #SoftwareEngineer');
      setVisualTip('💡 Dica de Gravação de Reels: Corte seco a cada 2.5 segundos, legendas amarelas com contorno preto no centro da tela e início com movimento rápido para reter o feed.');

    } else if (format === 'stories') {
      const seq = [
        'Story 1 (Enquete): Print do emulador com a pergunta: "Você ainda sofre com rebuilds desnecessários no Flutter? [Sim, socorro! / Já domino 🚀]"',
        'Story 2 (Dor): "Mais cedo analisei o código de um app onde uma lista de 500 itens estava fazendo a tela engasgar em aparelhos mais modestos..."',
        'Story 3 (Bastidores): Foto da bancada com trecho de código limpo: "Ajustamos com ListView.builder + chaves UniqueKey e o consumo de memória caiu 65% na hora."',
        'Story 4 (Caixa de Perguntas): "Qual a maior dúvida que você tem sobre publicação de apps na Google Play hoje? Manda aqui que vou responder em vídeo 👇"',
        'Story 5 (Link Sticker): Link direto para o case study do portfólio: "Quer ver como estruturamos isso no GynMove e AutoParts? Arraste ou clique no link!"'
      ];
      setStoriesSequence(seq);
      setGeneratedCaption(`Sequência de Stories Diários para Aquecimento e Conversão: 5 passos estratégicos com enquetes interativas, prova de código e chamada para link na bio.`);
      setGeneratedHashtags('#StoriesTech #DiaADiaDev #FlutterLife #Bastidores');
      setVisualTip('💡 Dica de Stories: Utilize figurinhas nativas da Meta (enquete e caixa de perguntas) pois aumentam o alcance em 2.4x pelo algoritmo.');

    } else if (format === 'highlights') {
      setGeneratedCaption(`Estrutura Oficial de Destaques para o Perfil @fabiolucasdev: 5 pastas estratégicas padronizadas com capas monocromáticas e ícones em verde neon (#44D62C) para converter visitantes em clientes e alunos.`);
      setGeneratedHashtags('#DestaquesInstagram #BioOtimizada #PerfilProfissional #MarketingParaDevs');
      setVisualTip('💡 Dica de Destaques: Mantenha sempre no máximo 5 pastas visíveis sem rolar a barra para manter o foco total de conversão.');

    } else {
      setGeneratedCaption(`Dica Prática: ${subject} 💡⚡\n\nMuito desenvolvedor perde horas caçando bugs de performance porque deixa de aplicar essa boa prática simples no dia a dia.\n\nPor que isso importa?\n👉 Menos rebuilds desnecessários na árvore de widgets\n👉 Menor consumo de memória RAM no smartphone do usuário\n👉 Código muito mais testável e modular\n\nSalva este post para consultar no seu próximo projeto! 💾👇`);
      setGeneratedHashtags('#FlutterBrasil #DartLang #DicasDeProgramacao #DesenvolvimentoMobile #DevCommunity #FlutterCommunity #CodingTips');
      setVisualTip('💡 Sugestão Visual: Card único com fundo escuro e trechos de código em fonte JetBrains Mono com sintaxe colorida (estilo carbon.now.sh).');
    }
  };

  const handleCopyCaption = () => {
    const fullText = `${generatedCaption}\n\n${generatedHashtags}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePublishDirect = async () => {
    if (!config.isLive) {
      alert('Para publicar diretamente no Instagram, conecte seu token oficial da Meta Graph API na aba "Configuração API".');
      return;
    }
    if (!publishImageUrl) {
      alert('Informe a URL da imagem pública que será publicada.');
      return;
    }
    setPublishStatus({ status: 'loading' });
    const fullCaption = `${generatedCaption}\n\n${generatedHashtags}`;
    const result = await publishMediaToInstagram(config.accessToken, config.instagramAccountId, publishImageUrl, fullCaption);
    if (result.success) {
      setPublishStatus({ status: 'success', message: `Publicado com sucesso! Media ID: ${result.id}` });
      loadLiveData(config.accessToken, config.instagramAccountId);
    } else {
      setPublishStatus({ status: 'error', message: result.error || 'Erro ao publicar mídia.' });
    }
  };

  // WhatsApp Simulator Engine
  const handleChatOptionSelect = (option: any) => {
    // Adiciona resposta do usuário
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
      timestamp: 'Agora'
    };

    let nextStep: ChatbotStep | undefined;
    if (option.nextStepId && CHATBOT_STEPS[option.nextStepId]) {
      nextStep = CHATBOT_STEPS[option.nextStepId];
    }

    if (option.finalMessagePayload) {
      setFinalWhatsAppPayload(option.finalMessagePayload);
    }

    const botMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: nextStep ? nextStep.botMessage : 'Obrigado! Clique no botão abaixo para concluir o atendimento no WhatsApp com o Fábio Lucas.',
      timestamp: 'Agora',
      options: nextStep ? nextStep.options : []
    };

    setChatHistory([...chatHistory, userMsg, botMsg]);
    if (nextStep) {
      setChatCurrentStep(nextStep);
    }
  };

  const handleResetChat = () => {
    setChatCurrentStep(CHATBOT_STEPS.start);
    setChatHistory([
      {
        id: 'msg-start',
        sender: 'bot',
        text: CHATBOT_STEPS.start.botMessage,
        timestamp: 'Agora',
        options: CHATBOT_STEPS.start.options
      }
    ]);
    setFinalWhatsAppPayload('Olá Fábio Lucas! Vim pelo seu portfólio fabiolucas.com e gostaria de conversar sobre um projeto.');
  };

  // Importar sugestão de trend para o estúdio
  const handleImportTrendToStudio = (suggestion: TrendToContentSuggestion) => {
    setStudioFormat(suggestion.format === 'Carrossel' ? 'carrossel' : suggestion.format === 'Reels' ? 'reels' : suggestion.format === 'Stories' ? 'stories' : 'post_unico');
    setStudioSubject(suggestion.headline);
    buildStudioContent(
      suggestion.format === 'Carrossel' ? 'carrossel' : suggestion.format === 'Reels' ? 'reels' : suggestion.format === 'Stories' ? 'stories' : 'post_unico',
      suggestion.headline,
      'engajamento'
    );
    setActiveTab('studio');
  };

  // Filtros de Leads B2B
  const filteredLeads = leadNicheFilter === 'todos' 
    ? b2bLeads 
    : b2bLeads.filter(l => l.niche === leadNicheFilter);

  // Filtros de Interações
  const filteredInteractions = interactionFilter === 'todos'
    ? interactions
    : interactions.filter(i => i.userProfile === interactionFilter);

  return (
    <div className="min-h-screen bg-[#070707] text-[#EEEEEE] font-sans pb-16">
      {/* Top Bar Studio */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222] px-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <NavLink to="/" className="text-[#888] hover:text-[#44D62C] flex items-center gap-1.5 text-xs font-mono">
              <ArrowLeft size={16} /> Voltar ao Portfólio
            </NavLink>
            <div className="h-4 w-px bg-[#333] hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-[0_0_15px_rgba(253,29,29,0.3)]">
                <Instagram size={22} />
              </div>
              <div>
                <h1 className="text-lg font-bold font-mono text-[#FFF] flex items-center gap-2">
                  Central de Gestão & Marketing <span className="text-xs px-2 py-0.5 rounded-full bg-[#1A1A1A] border border-[#333] text-[#44D62C] font-mono">Growth OS</span>
                </h1>
                <p className="text-xs text-[#888] font-mono">Fábio Lucas &bull; @{profile.username} &bull; Gestor de Redes & Automação</p>
              </div>
            </div>
          </div>

          {/* Sync Status Badge & Action */}
          <div className="flex items-center gap-3">
            {config.isLive ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span> Meta Graph API Conectada
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span> Modo Demonstração Ativo
              </span>
            )}
            
            <button
              onClick={() => config.isLive ? loadLiveData(config.accessToken, config.instagramAccountId) : null}
              disabled={loading || !config.isLive}
              title="Sincronizar com Graph API"
              className="p-2 rounded-lg bg-[#141414] border border-[#333] hover:border-[#44D62C] text-[#AAA] hover:text-[#44D62C] transition-all disabled:opacity-40"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Studio Navigation Tabs */}
      <div className="border-b border-[#222] bg-[#0C0C0C] sticky top-[73px] z-30 shadow-md">
        <div className="container mx-auto px-6 flex gap-2 overflow-x-auto py-2.5 scrollbar-thin">
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'feed'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <BarChart3 size={15} /> Feed & Métricas Meta
          </button>

          <button
            onClick={() => setActiveTab('studio')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'studio'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Sparkles size={15} className="text-[#FCAF45]" /> Estúdio Multiformato AI
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Calendar size={15} /> Calendário & Melhores Horários
          </button>

          <button
            onClick={() => setActiveTab('trends')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'trends'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Flame size={15} className="text-[#FD1D1D]" /> Radar de Tendências (Google & X)
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'whatsapp'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <MessageSquare size={15} className="text-[#25D366]" /> Chatbot WhatsApp Business
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'leads'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Target size={15} className="text-[#3B82F6]" /> Radar B2B Google Meu Negócio
          </button>

          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'strategy'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Zap size={15} className="text-[#FBBF24]" /> 10 Ideias Refatoradas
          </button>

          <button
            onClick={() => setActiveTab('api')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'api'
                ? 'bg-[#181818] text-[#44D62C] border border-[#44D62C]/40 shadow-sm'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Key size={15} /> Configuração Graph API
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {apiError && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800 text-red-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle size={18} className="text-red-400 shrink-0" />
              <span>{apiError}</span>
            </div>
            <button onClick={() => setApiError(null)} className="text-xs font-mono underline hover:text-white cursor-pointer">Fechar</button>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 1: FEED & METRICAS META + RASTREAMENTO DE SEGUIDORES */}
        {/* ======================================================== */}
        {activeTab === 'feed' && (
          <div className="space-y-10">
            {/* Profile Overview Card */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={profile.profile_picture_url}
                    alt={profile.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#44D62C] shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-[#181818] border border-[#333] text-[#44D62C]">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                    {profile.name}
                    <a
                      href={`https://www.instagram.com/${profile.username}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#888] hover:text-[#44D62C] flex items-center gap-1 font-mono"
                    >
                      @{profile.username} <ExternalLink size={12} />
                    </a>
                  </h2>
                  <p className="text-xs text-[#AAA] mt-2 max-w-lg leading-relaxed whitespace-pre-line font-sans">
                    {profile.biography}
                  </p>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                <div className="bg-[#161616] p-4 rounded-xl border border-[#2D2D2D] text-center">
                  <div className="text-2xl font-bold font-mono text-[#FFF]">{(profile.followers_count).toLocaleString()}</div>
                  <div className="text-xs text-[#888] font-mono mt-1">Seguidores</div>
                </div>
                <div className="bg-[#161616] p-4 rounded-xl border border-[#2D2D2D] text-center">
                  <div className="text-2xl font-bold font-mono text-[#44D62C]">4.8%</div>
                  <div className="text-xs text-[#888] font-mono mt-1">Engajamento Médio</div>
                </div>
                <div className="bg-[#161616] p-4 rounded-xl border border-[#2D2D2D] text-center">
                  <div className="text-2xl font-bold font-mono text-[#FFF]">{profile.media_count}</div>
                  <div className="text-xs text-[#888] font-mono mt-1">Publicações</div>
                </div>
              </div>
            </div>

            {/* Rastreamento Inteligente de Interações por Perfil e Horário (Requisito 1) */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#44D62C] uppercase tracking-wider">
                    <Users size={14} /> Monitoramento de Audiência & Conversão Meta
                  </div>
                  <h3 className="text-xl font-bold font-mono text-[#FFF] mt-1">
                    Rastreamento de Interações por Perfil & Horário Específico
                  </h3>
                  <p className="text-xs text-[#888] mt-1">
                    Monitora curtidas, comentários, salvamentos e compartilhamentos mapeando o perfil do usuário, tipo de conteúdo e momento exato da interação para reter e converter seguidores.
                  </p>
                </div>

                {/* Filter Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#888]">Filtrar Perfil:</span>
                  <select
                    value={interactionFilter}
                    onChange={(e) => setInteractionFilter(e.target.value as any)}
                    className="bg-[#161616] border border-[#333] rounded-lg px-3 py-1.5 text-xs font-mono text-[#EEE] outline-none"
                  >
                    <option value="todos">Todos os Perfis ({interactions.length})</option>
                    <option value="lead_b2b">💼 Donos de Empresa / B2B</option>
                    <option value="dev_senior">💻 Devs Sêniores / Arquitetos</option>
                    <option value="dev_junior">🎓 Devs Iniciantes / Alunos</option>
                    <option value="tech_recruiter">🎯 Recrutadores Tech</option>
                  </select>
                </div>
              </div>

              {/* Table / Cards of Follower Interactions */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-[#2A2A2A] text-[#888]">
                      <th className="py-3 px-3">Seguidor / Perfil</th>
                      <th className="py-3 px-3">Conteúdo Interagido</th>
                      <th className="py-3 px-3">Tipo de Interação</th>
                      <th className="py-3 px-3">Dia & Horário</th>
                      <th className="py-3 px-3">Estratégia Recomendada pelo Gestor</th>
                      <th className="py-3 px-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F1F1F]">
                    {filteredInteractions.map((item) => (
                      <tr key={item.id} className="hover:bg-[#161616] transition-colors">
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-2.5">
                            <img src={item.avatarUrl} alt={item.username} className="w-8 h-8 rounded-full object-cover border border-[#333]" />
                            <div>
                              <div className="font-bold text-[#FFF]">@{item.username}</div>
                              <div className="text-[10px] text-[#44D62C]">{item.profileLabel}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 max-w-[220px]">
                          <div className="text-[#DDD] font-sans truncate">{item.postTitle}</div>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#222] text-[#888]">{item.contentType}</span>
                        </td>
                        <td className="py-3.5 px-3">
                          {item.interactionType === 'save' && (
                            <span className="flex items-center gap-1 text-[#44D62C] bg-[#44D62C]/10 px-2 py-0.5 rounded-full w-fit">
                              <Bookmark size={12} /> Salvou / Favorito
                            </span>
                          )}
                          {item.interactionType === 'comment' && (
                            <span className="flex items-center gap-1 text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full w-fit">
                              <MessageCircle size={12} /> Comentou
                            </span>
                          )}
                          {item.interactionType === 'share' && (
                            <span className="flex items-center gap-1 text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full w-fit">
                              <Share2 size={12} /> Compartilhou
                            </span>
                          )}
                          {item.interactionType === 'like' && (
                            <span className="flex items-center gap-1 text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full w-fit">
                              <Heart size={12} /> Curtiu
                            </span>
                          )}
                          {item.commentText && (
                            <div className="text-[10px] text-[#AAA] italic mt-1 font-sans">"{item.commentText}"</div>
                          )}
                        </td>
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <div className="text-[#FFF] font-bold">{item.engagementTime}</div>
                          <div className="text-[10px] text-[#888]">{item.engagementDay}</div>
                        </td>
                        <td className="py-3.5 px-3 max-w-[280px]">
                          <div className="text-[#AAA] font-sans text-[11px] leading-relaxed">
                            {item.recommendedAction}
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                            item.status === 'Convertido' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' :
                            item.status === 'Respondido' ? 'bg-blue-950/80 text-blue-400 border border-blue-800' :
                            'bg-amber-950/80 text-amber-400 border border-amber-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Posts Grid & Deep Dive Inspection */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Media Grid */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                    <Layers size={18} className="text-[#44D62C]" /> Publicações do Feed ({mediaList.length})
                  </h3>
                  <span className="text-xs font-mono text-[#888]">Clique em um post para ver insights</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {mediaList.map((media) => {
                    const isSelected = selectedMedia?.id === media.id;
                    return (
                      <div
                        key={media.id}
                        onClick={() => setSelectedMedia(media)}
                        className={`bg-[#121212] rounded-xl border overflow-hidden cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected ? 'border-[#44D62C] shadow-[0_0_15px_rgba(68,214,44,0.15)]' : 'border-[#262626] hover:border-[#444]'
                        }`}
                      >
                        <div className="relative h-48 overflow-hidden bg-[#1A1A1A]">
                          <img
                            src={media.thumbnail_url || media.media_url}
                            alt="Post thumbnail"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-white border border-white/20">
                            {media.media_type}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <p className="text-xs text-[#CCC] line-clamp-2 leading-relaxed">
                            {media.caption}
                          </p>

                          <div className="flex items-center justify-between pt-2 border-t border-[#222] text-xs font-mono text-[#888]">
                            <span className="flex items-center gap-1 text-red-400">
                              <Heart size={14} className="fill-current" /> {media.like_count}
                            </span>
                            <span className="flex items-center gap-1 text-blue-400">
                              <MessageCircle size={14} /> {media.comments_count}
                            </span>
                            <span className="text-[11px] text-[#666]">
                              {new Date(media.timestamp).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Media Insights Panel */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                  <TrendingUp size={18} className="text-[#44D62C]" /> Diagnóstico & Insights Meta
                </h3>

                {selectedMedia ? (
                  <div className="bg-[#121212] p-6 rounded-2xl border border-[#262626] space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#44D62C] px-2 py-0.5 rounded bg-[#44D62C]/10 border border-[#44D62C]/30">
                        {selectedMedia.media_type}
                      </span>
                      <a
                        href={selectedMedia.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#888] hover:text-[#FFF] flex items-center gap-1"
                      >
                        Abrir no Instagram <ExternalLink size={12} />
                      </a>
                    </div>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#181818] p-3.5 rounded-xl border border-[#2A2A2A]">
                        <div className="flex items-center gap-1.5 text-xs text-[#888] font-mono mb-1">
                          <Eye size={14} /> Alcance
                        </div>
                        <div className="text-lg font-bold font-mono text-[#FFF]">
                          {(selectedMedia.insights?.reach || selectedMedia.like_count * 12).toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-[#181818] p-3.5 rounded-xl border border-[#2A2A2A]">
                        <div className="flex items-center gap-1.5 text-xs text-[#888] font-mono mb-1">
                          <Bookmark size={14} /> Salvamentos
                        </div>
                        <div className="text-lg font-bold font-mono text-[#44D62C]">
                          {(selectedMedia.insights?.saved || Math.round(selectedMedia.like_count * 0.45)).toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-[#181818] p-3.5 rounded-xl border border-[#2A2A2A]">
                        <div className="flex items-center gap-1.5 text-xs text-[#888] font-mono mb-1">
                          <Heart size={14} /> Curtidas
                        </div>
                        <div className="text-lg font-bold font-mono text-red-400">
                          {selectedMedia.like_count.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-[#181818] p-3.5 rounded-xl border border-[#2A2A2A]">
                        <div className="flex items-center gap-1.5 text-xs text-[#888] font-mono mb-1">
                          <MessageCircle size={14} /> Comentários
                        </div>
                        <div className="text-lg font-bold font-mono text-blue-400">
                          {selectedMedia.comments_count.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Marketing Manager Advice */}
                    <div className="p-4 rounded-xl bg-[#181818] border border-[#333] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FCAF45]">
                        <Sparkles size={14} /> Análise do Gestor de Redes Sociais:
                      </div>
                      <p className="text-xs text-[#AAA] leading-relaxed font-sans">
                        {selectedMedia.media_type === 'CAROUSEL_ALBUM'
                          ? 'Carrosséis técnicos geram a maior taxa de salvamentos (+70% vs imagem única). O algoritmo do Instagram entrega 2x mais impressões quando o usuário passa por todos os slides.'
                          : 'Posts de imagem única ou vídeo direto geram alto volume de comentários e compartilhamentos em stories. A recomendação é transformar esse aprendizado em um Reels de 30 segundos.'}
                      </p>
                    </div>

                    {/* Caption Preview */}
                    <div>
                      <div className="text-xs font-mono text-[#888] mb-2">Legenda Completa:</div>
                      <div className="p-3 bg-[#0C0C0C] rounded-lg border border-[#222] text-xs text-[#CCC] whitespace-pre-line max-h-48 overflow-y-auto font-sans leading-relaxed">
                        {selectedMedia.caption}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-[#666] font-mono text-sm border border-[#222] rounded-2xl">
                    Selecione uma publicação para visualizar as métricas detalhadas.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 2: ESTUDIO MULTIFORMATO AI (CARROSSEL, REELS, STORIES, DESTAQUES) */}
        {/* ======================================================== */}
        {activeTab === 'studio' && (
          <div className="space-y-8">
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626]">
              <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Gestor Multiformato de Criação</span>
              <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                <Sparkles size={22} className="text-[#FCAF45]" /> Estúdio de Conteúdo: Carrosséis, Stories, Destaques & Reels
              </h2>
              <p className="text-xs text-[#888] mt-1">
                Gera roteiros completos slide a slide, sequências interativas de stories, scripts para reels e organização de destaques.
              </p>

              {/* Format Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  { id: 'carrossel', label: '📑 Carrossel (Slide a Slide)', icon: Layers },
                  { id: 'reels', label: '🎬 Reels (Roteiro em 3 Atos)', icon: Play },
                  { id: 'stories', label: '📱 Stories (Sequência Diária)', icon: Smartphone },
                  { id: 'highlights', label: '⭐ Destaques (Pastas)', icon: Star },
                  { id: 'post_unico', label: '🖼️ Post Único (Feed)', icon: Send }
                ].map((fmt) => {
                  const Icon = fmt.icon;
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => {
                        setStudioFormat(fmt.id as any);
                        buildStudioContent(fmt.id, studioSubject, studioGoal);
                      }}
                      className={`p-3 rounded-xl text-xs font-mono font-bold flex flex-col items-center gap-2 border transition-all cursor-pointer ${
                        studioFormat === fmt.id
                          ? 'bg-[#1C1C1C] text-[#44D62C] border-[#44D62C] shadow-[0_0_15px_rgba(68,214,44,0.2)]'
                          : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-[#CCC]'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-center">{fmt.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-mono text-[#AAA] mb-2">Tema / Título Principal do Conteúdo:</label>
                  <input
                    type="text"
                    value={studioSubject}
                    onChange={(e) => setStudioSubject(e.target.value)}
                    placeholder="Ex: Como implementamos o TaxiDog nativo no Bicho Mimado com Google Navigation SDK"
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-sm text-[#EEE] font-sans outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#AAA] mb-2">Objetivo de Conversão (CTA):</label>
                  <select
                    value={studioGoal}
                    onChange={(e) => {
                      setStudioGoal(e.target.value as any);
                      buildStudioContent(studioFormat, studioSubject, e.target.value);
                    }}
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-xs font-mono text-[#EEE] outline-none"
                  >
                    <option value="engajamento">💾 Salvamentos & Compartilhamentos</option>
                    <option value="vendas">🔗 Vendas (E-books & Cursos / Link na Bio)</option>
                    <option value="comentarios">💬 Geração de Comentários (Palavra-chave)</option>
                    <option value="autoridade">🏆 Autoridade & Atração de Clientes B2B</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => buildStudioContent(studioFormat, studioSubject, studioGoal)}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-mono font-bold text-xs flex items-center gap-2 hover:opacity-95 transition-all cursor-pointer shadow-[0_0_15px_rgba(253,29,29,0.3)]"
                >
                  <Sparkles size={16} /> Gerar Roteiro & Conteúdo Completo
                </button>
                <button
                  type="button"
                  onClick={handleCopyCaption}
                  className="px-4 py-3 rounded-lg bg-[#181818] border border-[#333] hover:border-[#44D62C] text-[#44D62C] text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Legenda e Hashtags Copiadas!' : 'Copiar Legenda Formatada'}
                </button>
              </div>
            </div>

            {/* Content Output based on selected format */}
            {studioFormat === 'carrossel' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                    <Layers size={18} className="text-[#44D62C]" /> Arquitetura de Slides do Carrossel ({carouselSlides.length} slides)
                  </h3>
                  <span className="text-xs font-mono text-[#888]">Otimizado para retenção e salvamento</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {carouselSlides.map((slide) => (
                    <div key={slide.slideNumber} className="bg-[#121212] p-5 rounded-2xl border border-[#262626] flex flex-col justify-between space-y-4 hover:border-[#44D62C]/40 transition-colors">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#44D62C]/10 text-[#44D62C] border border-[#44D62C]/30">
                            SLIDE {slide.slideNumber} &bull; {slide.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold font-mono text-white leading-snug">
                          {slide.title}
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#AAA] font-sans">
                          {slide.content.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>

                        {slide.codeSnippet && (
                          <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#222] text-[11px] font-mono text-[#44D62C] overflow-x-auto">
                            <code>{slide.codeSnippet}</code>
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-[#1F1F1F] text-[11px] text-[#777] font-sans italic">
                        {slide.visualNote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {studioFormat === 'reels' && (
              <div className="bg-[#121212] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-6">
                <h3 className="text-xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                  <Play size={18} className="text-[#FD1D1D]" /> Roteiro Técnico de Reels (Duração: 45–60 segundos)
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[#181818] p-5 rounded-xl border border-[#2F2F2F] space-y-2">
                    <span className="text-xs font-mono text-[#FD1D1D] font-bold">PARTE 1 &bull; 00 a 03 segundos</span>
                    <h4 className="text-sm font-bold text-white font-mono">Gancho Visual de Retenção</h4>
                    <p className="text-xs text-[#BBB] leading-relaxed font-sans">{reelsScript.hook}</p>
                  </div>

                  <div className="bg-[#181818] p-5 rounded-xl border border-[#2F2F2F] space-y-2">
                    <span className="text-xs font-mono text-[#44D62C] font-bold">PARTE 2 &bull; 04 a 35 segundos</span>
                    <h4 className="text-sm font-bold text-white font-mono">Desenvolvimento com Código</h4>
                    <p className="text-xs text-[#BBB] leading-relaxed font-sans">{reelsScript.body}</p>
                  </div>

                  <div className="bg-[#181818] p-5 rounded-xl border border-[#2F2F2F] space-y-2">
                    <span className="text-xs font-mono text-[#FCAF45] font-bold">PARTE 3 &bull; 36 a 50 segundos</span>
                    <h4 className="text-sm font-bold text-white font-mono">Chamada para Ação (CTA)</h4>
                    <p className="text-xs text-[#BBB] leading-relaxed font-sans">{reelsScript.cta}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#161616] border border-[#2A2A2A] text-xs font-mono text-[#888]">
                  🎵 {reelsScript.audio}
                </div>
              </div>
            )}

            {studioFormat === 'stories' && (
              <div className="bg-[#121212] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-6">
                <h3 className="text-xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                  <Smartphone size={18} className="text-[#25D366]" /> Sequência de 5 Stories Interativos para o Dia
                </h3>

                <div className="grid md:grid-cols-5 gap-4">
                  {storiesSequence.map((story, idx) => (
                    <div key={idx} className="bg-[#181818] p-4 rounded-xl border border-[#2F2F2F] flex flex-col justify-between space-y-3">
                      <div>
                        <span className="text-xs font-mono text-[#44D62C] font-bold">STORY {idx + 1}</span>
                        <p className="text-xs text-[#DDD] mt-2 font-sans leading-relaxed">{story}</p>
                      </div>
                      <div className="text-[10px] text-[#777] font-mono">Duração: 15s cada</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {studioFormat === 'highlights' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-mono text-[#FFF] flex items-center gap-2">
                  <Star size={18} className="text-[#FBBF24]" /> Estrutura Oficial de Destaques para o Perfil
                </h3>

                <div className="grid md:grid-cols-5 gap-4">
                  {CURATED_HIGHLIGHTS.map((hl) => (
                    <div key={hl.id} className="bg-[#121212] p-5 rounded-2xl border border-[#262626] space-y-3 hover:border-[#44D62C]/40 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-[#44D62C] flex items-center justify-center text-lg mx-auto">
                        ⭐
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-bold font-mono text-white">{hl.title}</h4>
                        <p className="text-[11px] text-[#888] font-sans mt-1 leading-relaxed">{hl.purpose}</p>
                      </div>
                      <div className="pt-2 border-t border-[#1F1F1F] space-y-1">
                        <div className="text-[10px] font-mono text-[#44D62C]">Conteúdos Fixos:</div>
                        {hl.curatedTopics.map((top, idx) => (
                          <div key={idx} className="text-[10px] text-[#AAA] truncate">• {top}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preview da Legenda & Publicação Direta */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#262626] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white">Legenda Pronta para o Instagram:</span>
                  <button
                    onClick={handleCopyCaption}
                    className="text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy size={12} /> Copiar
                  </button>
                </div>
                <div className="p-4 bg-[#0A0A0A] rounded-xl border border-[#222] text-xs text-[#CCC] whitespace-pre-line max-h-64 overflow-y-auto font-sans leading-relaxed">
                  {generatedCaption}
                  {'\n\n'}
                  <span className="text-blue-400 font-mono">{generatedHashtags}</span>
                </div>
              </div>

              <div className="bg-[#111111] p-6 rounded-2xl border border-[#262626] space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                    <Share2 size={16} className="text-[#44D62C]" /> Publicar Direto via Meta Graph API
                  </span>
                  <p className="text-xs text-[#888] mt-1 font-sans">
                    Insira uma URL pública da arte ou render para enviar diretamente para sua conta do Instagram.
                  </p>
                </div>

                <div className="space-y-3">
                  <input
                    type="url"
                    placeholder="URL da imagem pública (https://...)"
                    value={publishImageUrl}
                    onChange={(e) => setPublishImageUrl(e.target.value)}
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg px-3 py-2.5 text-xs text-[#EEE] font-mono outline-none"
                  />
                  <button
                    onClick={handlePublishDirect}
                    disabled={publishStatus.status === 'loading'}
                    className="w-full py-3 rounded-lg bg-[#44D62C] text-black font-mono font-bold text-xs hover:bg-[#5aff3d] transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {publishStatus.status === 'loading' ? 'Publicando...' : 'Publicar Agora no Instagram'}
                  </button>
                  {publishStatus.message && (
                    <div className={`text-xs font-mono ${publishStatus.status === 'success' ? 'text-[#10B981]' : 'text-red-400'}`}>
                      {publishStatus.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 3: CALENDARIO EDITORIAL & MATRIZ DE POSTAGEM */}
        {/* ======================================================== */}
        {activeTab === 'calendar' && (
          <div className="space-y-10">
            {/* Matriz Inteligente de Horários e Formatos (Requisito 1) */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-6">
              <div>
                <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Algoritmo da Meta & Picos de Atenção</span>
                <h3 className="text-xl font-bold font-mono text-[#FFF] mt-1">
                  Matriz de Horários Ótimos: Qual Dia e Formato Postar
                </h3>
                <p className="text-xs text-[#888] mt-1">
                  Mapeamento com base nas métricas reais de retenção e comportamento da audiência dev e clientes de tecnologia.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {POSTING_SCHEDULE_MATRIX.map((slot) => (
                  <div key={slot.day} className="bg-[#161616] p-5 rounded-xl border border-[#2B2B2B] flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-white">{slot.day}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#44D62C]/10 text-[#44D62C] border border-[#44D62C]/30">
                          {slot.bestHour}
                        </span>
                      </div>
                      <div className="mt-2 text-xs font-bold text-[#FCAF45] font-mono">{slot.format}</div>
                      <p className="text-xs text-[#DDD] font-sans mt-1 leading-snug">{slot.recommendedTopic}</p>
                    </div>

                    <div className="pt-3 border-t border-[#222] text-[10px] text-[#777] font-sans">
                      <span className="text-[#AAA] font-mono font-bold">Por que esse horário?</span> {slot.algorithmReason}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade Semanal de Postagens Agendadas */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Cronograma Ativo</span>
                  <h3 className="text-xl font-bold font-mono text-[#FFF] mt-1">Postagens em Planejamento</h3>
                </div>

                <button
                  onClick={() => {
                    const newDay = prompt('Qual dia da semana?', 'Terça-feira');
                    const newTitle = prompt('Título do post?', 'Novo Case em Flutter');
                    if (newDay && newTitle) {
                      setPlans([
                        ...plans,
                        {
                          id: `plan-${Date.now()}`,
                          day: newDay,
                          theme: 'Conteúdo Prático',
                          format: 'Carrossel',
                          title: newTitle,
                          hook: 'Dica rápida de desenvolvimento',
                          status: 'Rascunho'
                        }
                      ]);
                    }
                  }}
                  className="px-4 py-2.5 rounded-lg bg-[#181818] border border-[#333] hover:border-[#44D62C] text-[#44D62C] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer w-fit"
                >
                  <Plus size={16} /> Adicionar Post ao Cronograma
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((item) => (
                  <div key={item.id} className="bg-[#111111] p-6 rounded-2xl border border-[#262626] flex flex-col justify-between space-y-4 hover:border-[#44D62C]/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#44D62C] font-bold">{item.day}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          item.status === 'Agendado' ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30' :
                          item.status === 'Publicado' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                          'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono text-[#888] mb-1">{item.theme} &bull; {item.format}</div>
                      <h4 className="text-sm font-bold font-mono text-[#FFF] leading-snug">{item.title}</h4>
                      <p className="text-xs text-[#AAA] mt-2 font-sans italic">"{item.hook}"</p>
                    </div>

                    <div className="pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={() => {
                          setStudioSubject(item.title);
                          setStudioFormat(item.format === 'Carrossel' ? 'carrossel' : item.format === 'Reels' ? 'reels' : item.format === 'Stories' ? 'stories' : 'post_unico');
                          buildStudioContent(item.format.toLowerCase() as any, item.title, 'engajamento');
                          setActiveTab('studio');
                        }}
                        className="text-[#44D62C] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Abrir no Estúdio <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 4: RADAR DE TENDENCIAS (GOOGLE INSIGHTS + SEARCH + X) */}
        {/* ======================================================== */}
        {activeTab === 'trends' && (
          <div className="space-y-10">
            {/* Header Radar */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626]">
              <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Inteligência de Mercado em Tempo Real</span>
              <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                <Flame size={22} className="text-[#FD1D1D]" /> Radar de Tendências: Google Insights, Pesquisa & X
              </h2>
              <p className="text-xs text-[#888] mt-1">
                Cruza dados dos assuntos mais buscados e discutidos na internet para alimentar a criação de conteúdo com alto potencial de viralização.
              </p>
            </div>

            {/* Central de Sugestões de Conteúdo (Trend-to-Content Engine - Requisito 6) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#FCAF45] uppercase tracking-wider">Trend-to-Content AI Engine</span>
                  <h3 className="text-xl font-bold font-mono text-[#FFF] mt-1">Ideias de Conteúdo Sugeridas com Alto Potencial Viral</h3>
                </div>
                <span className="text-xs font-mono text-[#888]">Atualizado com cruzamento de dados em tempo real</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {MOCK_TREND_SUGGESTIONS.map((sug) => (
                  <div key={sug.id} className="bg-[#121212] p-6 rounded-2xl border border-[#282828] flex flex-col justify-between space-y-4 hover:border-[#44D62C] transition-all shadow-sm">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30">
                          {sug.format} &bull; Score Viral: {sug.viralScore}/100
                        </span>
                        <div className="flex gap-1">
                          {sug.sourceTrends.map((st, i) => (
                            <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#1F1F1F] text-[#888]">
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h4 className="text-base font-bold font-mono text-white leading-snug">{sug.headline}</h4>
                      <p className="text-xs text-[#AAA] font-sans italic">"{sug.hook}"</p>

                      <div className="pt-2 text-xs text-[#888] font-sans">
                        <span className="text-white font-mono font-bold">Público-alvo:</span> {sug.targetAudience}
                      </div>

                      <div className="p-3 rounded-lg bg-[#0C0C0C] border border-[#222] text-xs font-sans text-[#BBB]">
                        <span className="text-[#44D62C] font-mono font-bold">CTA Recomendado:</span> {sug.callToAction}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleImportTrendToStudio(sug)}
                      className="w-full py-2.5 rounded-lg bg-[#181818] border border-[#333] hover:border-[#44D62C] text-[#44D62C] font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles size={14} /> Exportar para Estúdio de Criação
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Colunas: Google Insights + Google Search + X Trends (Requisitos 3, 4 e 5) */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Coluna 1: Google Insights */}
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#262626] space-y-4">
                <div className="flex items-center gap-2 text-[#44D62C]">
                  <TrendingUp size={18} />
                  <h4 className="text-base font-bold font-mono text-white">Google Insights</h4>
                </div>
                <p className="text-xs text-[#888] font-sans">Tópicos e termos em maior curva de alta de buscas no Brasil.</p>

                <div className="space-y-3">
                  {MOCK_GOOGLE_INSIGHTS.map((gi) => (
                    <div key={gi.id} className="p-3.5 rounded-xl bg-[#161616] border border-[#2A2A2A] space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white font-mono">{gi.topic}</span>
                        <span className="text-[#10B981] font-mono font-bold">{gi.growthRate}</span>
                      </div>
                      <p className="text-[11px] text-[#888] font-sans leading-snug">{gi.context}</p>
                      <div className="text-[10px] font-mono text-[#FCAF45]">Ângulo: {gi.suggestedAngle}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 2: Pesquisa Google em Tempo Real */}
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#262626] space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Search size={18} />
                  <h4 className="text-base font-bold font-mono text-white">Pesquisa Google ao Vivo</h4>
                </div>
                <p className="text-xs text-[#888] font-sans">Perguntas mais digitadas por desenvolvedores e clientes de software.</p>

                <div className="space-y-3">
                  {MOCK_REALTIME_SEARCHES.map((qs) => (
                    <div key={qs.id} className="p-3.5 rounded-xl bg-[#161616] border border-[#2A2A2A] space-y-1.5">
                      <div className="text-xs font-bold text-white font-mono leading-snug">{qs.query}</div>
                      <div className="flex items-center justify-between text-[10px] text-[#888] font-mono">
                        <span className="text-blue-400">{qs.searchCountEstimate}</span>
                        <span>{qs.intent}</span>
                      </div>
                      <div className="text-[10px] text-[#AAA] font-mono">Formato Ideal: <span className="text-[#44D62C]">{qs.suggestedFormat}</span></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 3: X (Twitter) Trends */}
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#262626] space-y-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <Hash size={18} />
                  <h4 className="text-base font-bold font-mono text-white">X (Twitter) Trending</h4>
                </div>
                <p className="text-xs text-[#888] font-sans">Hashtags e termos mais quentes na comunidade técnica.</p>

                <div className="space-y-3">
                  {MOCK_X_TRENDS.map((xt) => (
                    <div key={xt.id} className="p-3.5 rounded-xl bg-[#161616] border border-[#2A2A2A] space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-purple-400">{xt.hashtagOrTerm}</span>
                        <span className="text-[#888]">{xt.tweetVolume}</span>
                      </div>
                      <p className="text-[11px] text-[#AAA] font-sans leading-snug">{xt.relevanceToPortfolio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 5: CHATBOT INTERATIVO WHATSAPP BUSINESS */}
        {/* ======================================================== */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-10">
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626]">
              <span className="text-xs font-mono text-[#25D366] uppercase tracking-wider">Atendimento & Triagem Automática</span>
              <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                <MessageSquare size={22} className="text-[#25D366]" /> Chatbot WhatsApp Business com Menu de Múltipla Escolha
              </h2>
              <p className="text-xs text-[#888] mt-1">
                Filtra as dúvidas e solicitações dos clientes através de opções estruturadas no WhatsApp até direcionar para o atendimento final qualificado.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Simulador Interativo do Chatbot (WhatsApp UI) */}
              <div className="lg:col-span-2 bg-[#0B141A] rounded-2xl border border-[#222] overflow-hidden flex flex-col justify-between shadow-xl">
                {/* Header WhatsApp Bar */}
                <div className="bg-[#202C33] px-6 py-4 flex items-center justify-between border-b border-[#2A3942]">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={profile.profile_picture_url}
                        alt="Fábio Lucas"
                        className="w-10 h-10 rounded-full object-cover border border-[#25D366]"
                      />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] absolute bottom-0 right-0 border-2 border-[#202C33]"></span>
                    </div>
                    <div>
                      <div className="font-bold font-mono text-white text-sm">Fábio Lucas Dev &bull; Atendimento</div>
                      <div className="text-[10px] text-[#25D366] font-mono">Online &bull; WhatsApp Business Oficial</div>
                    </div>
                  </div>

                  <button
                    onClick={handleResetChat}
                    className="text-xs font-mono text-[#888] hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw size={14} /> Reiniciar Fluxo
                  </button>
                </div>

                {/* Chat Message History */}
                <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto font-sans text-xs scrollbar-thin">
                  {chatHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`p-4 rounded-2xl max-w-lg leading-relaxed whitespace-pre-line shadow ${
                          msg.sender === 'user'
                            ? 'bg-[#005C4B] text-white rounded-tr-none'
                            : 'bg-[#202C33] text-[#E9EDEF] rounded-tl-none border border-[#2A3942]'
                        }`}
                      >
                        {msg.text}

                        {/* Interactive Options as buttons inside chat bubble */}
                        {msg.options && msg.options.length > 0 && (
                          <div className="mt-4 space-y-2 border-t border-[#2A3942] pt-3">
                            <span className="text-[10px] font-mono text-[#25D366] font-bold block mb-1">Escolha uma opção:</span>
                            {msg.options.map((opt) => (
                              <button
                                key={opt.key}
                                onClick={() => handleChatOptionSelect(opt)}
                                className="w-full text-left px-3 py-2 rounded-lg bg-[#111B21] hover:bg-[#2A3942] text-[#E9EDEF] border border-[#2A3942] text-xs font-mono transition-colors cursor-pointer flex items-center justify-between"
                              >
                                <span><strong className="text-[#25D366]">[{opt.key}]</strong> {opt.label}</span>
                                <ChevronRight size={14} className="text-[#888]" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-[9px] text-[#8696A0] mt-1 px-1">{msg.timestamp}</span>
                    </div>
                  ))}
                </div>

                {/* Final Route Transfer Button */}
                <div className="p-4 bg-[#202C33] border-t border-[#2A3942] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-[#8696A0] font-mono">
                    Triagem finalizada? Encaminhe direto para o WhatsApp real:
                  </div>
                  <a
                    href={buildWhatsAppUrl(WHATSAPP_PHONE_NUMBER, finalWhatsAppPayload)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <MessageSquare size={16} /> Abrir Chat no WhatsApp Pessoal
                  </a>
                </div>
              </div>

              {/* Quick Replies & Respostas Rápidas */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                    <Zap size={18} className="text-[#FBBF24]" /> Respostas Rápidas (/ Quick Replies)
                  </h3>
                  <p className="text-xs text-[#888] mt-1 font-sans">
                    Atalhos com barra para responder solicitações no WhatsApp em 5 segundos mantendo o padrão executivo.
                  </p>
                </div>

                <div className="space-y-3">
                  {QUICK_REPLIES.map((qr) => (
                    <div key={qr.shortcut} className="bg-[#111111] p-4 rounded-xl border border-[#262626] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#44D62C] bg-[#44D62C]/10 px-2 py-0.5 rounded">
                          {qr.shortcut}
                        </span>
                        <span className="text-[10px] font-mono text-[#888]">{qr.category}</span>
                      </div>
                      <div className="text-xs font-bold font-mono text-white">{qr.title}</div>
                      <p className="text-xs text-[#AAA] font-sans leading-relaxed whitespace-pre-line bg-[#0C0C0C] p-2.5 rounded border border-[#1F1F1F]">
                        {qr.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 6: RADAR B2B GOOGLE MEU NEGOCIO */}
        {/* ======================================================== */}
        {activeTab === 'leads' && (
          <div className="space-y-10">
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626]">
              <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider">Prospecção B2B Ativa & Clientes Locais</span>
              <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                <Target size={22} className="text-[#3B82F6]" /> Radar B2B Google Meu Negócio: Clientes Potenciais
              </h2>
              <p className="text-xs text-[#888] mt-1">
                Identifica empresas reais em Goiânia e no Brasil cujas dores operacionais são resolvidas exatamente pelos aplicativos que você já construiu no portfólio.
              </p>

              {/* Niche Filter Bar */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  { id: 'todos', label: 'Todos os Nichos' },
                  { id: 'Autopeças & Oficinas', label: '⚙️ Autopeças & Mecânicas (AutoParts)' },
                  { id: 'Pet Shops & Clínicas', label: '🐾 Pet Care & Clínicas (Bicho Mimado)' },
                  { id: 'Mobilidade & Cooperativas', label: '🚗 Mobilidade & Frotas (GynMove)' },
                  { id: 'Eventos & Formaturas', label: '💳 Formaturas & Eventos (PineapplePay)' },
                  { id: 'Despachantes & Frotas', label: '📊 Despachantes & Frotistas (Volt/Multas)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLeadNicheFilter(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      leadNicheFilter === item.id
                        ? 'bg-[#3B82F6] text-white font-bold'
                        : 'bg-[#161616] text-[#888] border border-[#2D2D2D] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredLeads.map((lead) => (
                <div key={lead.id} className="bg-[#111111] p-6 rounded-2xl border border-[#262626] flex flex-col justify-between space-y-4 hover:border-[#3B82F6] transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/30">
                        {lead.niche} &bull; Case: {lead.relatedProject}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        lead.status === 'Fechado' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                        lead.status === 'Proposta Enviada' ? 'bg-purple-950 text-purple-400 border border-purple-800' :
                        lead.status === 'Em Contato' ? 'bg-blue-950 text-blue-400 border border-blue-800' :
                        'bg-zinc-800 text-zinc-300'
                      }`}>
                        {lead.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold font-mono text-white flex items-center gap-2">
                        <Building2 size={16} className="text-[#3B82F6]" /> {lead.businessName}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-[#888] font-mono mt-1">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {lead.city}, {lead.state}</span>
                        <span className="flex items-center gap-1 text-[#FBBF24]">★ {lead.googleRating} ({lead.reviewCount} avaliações)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#161616] border border-[#222] space-y-1.5 text-xs font-sans">
                      <div className="text-red-400 font-mono font-bold">⚠️ Dor Identificada:</div>
                      <p className="text-[#CCC] leading-relaxed">{lead.detectedPain}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#161616] border border-[#222] space-y-1.5 text-xs font-sans">
                      <div className="text-[#44D62C] font-mono font-bold">💡 Solução com Software Sob Medida:</div>
                      <p className="text-[#CCC] leading-relaxed">{lead.recommendedSolution}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#1F1F1F] text-xs font-mono">
                      <span className="text-[#888]">Contrato Estimado:</span>
                      <span className="text-white font-bold">{lead.estimatedContractValue}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={buildWhatsAppUrl(lead.phone, lead.customPitch)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                    >
                      <MessageSquare size={14} /> Chamar no WhatsApp com Pitch Pronto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 7: 10 IDEIAS REFATORADAS & PLANO DE ACAO */}
        {/* ======================================================== */}
        {activeTab === 'strategy' && (
          <div className="space-y-10">
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626]">
              <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider">Estratégia Integrada de Crescimento</span>
              <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                <Zap size={22} className="text-[#FBBF24]" /> As 10 Ideias Refatoradas & Unificadas
              </h2>
              <p className="text-xs text-[#888] mt-1">
                Refatoração profunda das 10 estratégias anteriores, conectando Site, Instagram, WhatsApp Business e Radar B2B em um motor automatizado de atração e vendas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: '01',
                  channel: 'Site & WhatsApp',
                  title: 'Calculadora Interativa de Custos de App com Envio Qualificado',
                  refactoredDesc: 'O cliente seleciona no site os módulos desejados (GPS Turn-by-Turn, Prova Biométrica, Pagamentos, Chat) e, em vez de um preço fechado, clica em "Receber Escopo no WhatsApp", que já abre o nosso Chatbot com as escolhas preenchidas.',
                  actionStatus: 'Conectado ao Chatbot de Múltipla Escolha'
                },
                {
                  num: '02',
                  channel: 'Instagram & Portfólio',
                  title: 'Série Semanal "Engenharia Reversa dos 8 Apps"',
                  refactoredDesc: 'Carrosséis de 6 slides dissecando a prova de vida do GynMove, o TaxiDog do Bicho Mimado e o isolamento contábil do VoltFinance. No último slide, convite para ver os smartphones interativos no portfólio oficial.',
                  actionStatus: 'Disponível no Estúdio de Criação'
                },
                {
                  num: '03',
                  channel: 'WhatsApp Business',
                  title: 'Catálogo de Serviços & Infoprodutos com Checkout Pix',
                  refactoredDesc: 'Vitrine direta no WhatsApp Business com os serviços de MVP Rápido, Consultoria de Arquitetura e os E-books técnicos com links diretos e chave Pix cadastrada para agendamento automático.',
                  actionStatus: 'Mapeado nas Respostas Rápidas'
                },
                {
                  num: '04',
                  channel: 'Instagram & X Trends',
                  title: 'Pautas de Alta Autoridade Pautadas por Trends Reais',
                  refactoredDesc: 'Cruzamento em tempo real entre discussões do X (#FlutterDev, #BuildInPublic) e dúvidas mais pesquisadas no Google para posicionar o Fábio Lucas como autoridade indiscutível no ecossistema mobile.',
                  actionStatus: 'Alimentado pelo Radar de Tendências'
                },
                {
                  num: '05',
                  channel: 'Instagram Direct & Meta API',
                  title: 'Automação de Respostas por Palavra-Chave (ManyChat / Webhook)',
                  refactoredDesc: 'Quando o seguidor comentar palavras como "FLUTTER", "PLAYSTORE" ou "ORÇAMENTO", a Meta Graph API envia automaticamente o link do checklist ou o contato do WhatsApp via Direct.',
                  actionStatus: 'Configurado na Aba Graph API'
                },
                {
                  num: '06',
                  channel: 'Portfólio & Demonstração',
                  title: 'Demonstração Interativa dos Aplicativos no Portfólio',
                  refactoredDesc: 'Mockups de smartphones com UI simulada, status e dual architecture para os 8 aplicativos, servindo como a maior vitrine de prova social e sem expor nenhum dado privado ou tabela de arquivos.',
                  actionStatus: 'Homologado nos Case Studies'
                },
                {
                  num: '07',
                  channel: 'Site & Lead Magnet',
                  title: 'Checklist Gratuito: 20 Passos para Aprovação na Play Store',
                  refactoredDesc: 'Material prático em PDF que captura contatos de novos desenvolvedores e startups, direcionando os leads para a compra do E-book completo e para o canal VIP no WhatsApp.',
                  actionStatus: 'Disponível para Lançamento'
                },
                {
                  num: '08',
                  channel: 'WhatsApp Business',
                  title: 'Kit de Respostas Rápidas Comerciais (/ Quick Replies)',
                  refactoredDesc: 'Atalhos comerciais padronizados (/portfolio, /briefing, /ebooks, /pix) que reduzem o tempo de resposta comercial para menos de 10 segundos com total precisão técnica.',
                  actionStatus: 'Ativo na aba WhatsApp'
                },
                {
                  num: '09',
                  channel: 'Instagram Highlights',
                  title: '5 Pastas Padronizadas de Destaques Estratégicos',
                  refactoredDesc: 'Organização visual definitiva do perfil (@fabiolucasdev) com ícones monocromáticos em verde: 🚀 Nossos Apps, 🛠️ Arquitetura, 📚 E-books, ⭐ Clientes e 💡 Dicas Rápidas.',
                  actionStatus: 'Estruturado no Estúdio'
                },
                {
                  num: '10',
                  channel: 'Comunidade & Audiência',
                  title: 'Canal Oficial de Avisos VIP no WhatsApp',
                  refactoredDesc: 'Audiência própria que não depende do algoritmo do Instagram. Disparo de cupons de e-books, avisos de novas versões do Flutter e convites para consultorias com taxa de abertura de 90%.',
                  actionStatus: 'Pronto para Escalar'
                }
              ].map((idea) => (
                <div key={idea.num} className="bg-[#121212] p-6 rounded-2xl border border-[#262626] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold font-mono text-[#44D62C]">{idea.num}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1F1F1F] text-[#AAA] border border-[#333]">
                        {idea.channel}
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-mono text-white leading-snug">{idea.title}</h4>
                    <p className="text-xs text-[#BBB] font-sans leading-relaxed">{idea.refactoredDesc}</p>
                  </div>

                  <div className="pt-3 border-t border-[#1F1F1F] text-[10px] font-mono text-[#10B981] flex items-center gap-1.5">
                    <CheckCircle2 size={12} /> {idea.actionStatus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 8: CONFIGURACAO GRAPH API (META FOR DEVELOPERS) */}
        {/* ======================================================== */}
        {activeTab === 'api' && (
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#333] text-[#44D62C]">
                  <Key size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-mono text-[#FFF]">Conexão Oficial com Meta Graph API</h2>
                  <p className="text-xs text-[#888]">Integração oficial direta com o Instagram Graph API v21.0</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#161616] border border-[#2A2A2A] mb-6 space-y-2 text-xs text-[#AAA] leading-relaxed">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <ShieldCheck size={16} className="text-[#44D62C]" /> Segurança e Privacidade Garantidas
                </div>
                <p>
                  Seus tokens de acesso são armazenados <strong>exclusivamente no localStorage do seu navegador</strong>. Nenhuma credencial ou chave privada é salva em arquivos públicos do Git ou enviada para servidores externos.
                </p>
              </div>

              <form onSubmit={handleSaveConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#AAA] mb-1.5">
                    Token de Acesso do Usuário da Meta (User Access Token):
                  </label>
                  <input
                    type="password"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    placeholder="EAA..."
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-xs text-[#EEE] font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#AAA] mb-1.5">
                    Instagram Business Account ID:
                  </label>
                  <input
                    type="text"
                    value={accountIdInput}
                    onChange={(e) => setAccountIdInput(e.target.value)}
                    placeholder="178414..."
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-xs text-[#EEE] font-mono outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#44D62C] text-black font-mono font-bold text-xs hover:bg-[#5aff3d] transition-colors cursor-pointer"
                  >
                    Salvar e Conectar ao Vivo
                  </button>
                  <button
                    type="button"
                    onClick={handleClearConfig}
                    className="px-4 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-[#888] hover:text-white font-mono text-xs transition-colors cursor-pointer"
                  >
                    Desconectar (Modo Demonstração)
                  </button>
                </div>

                {configSuccess && (
                  <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 size={16} /> Credenciais salvas com sucesso no seu navegador!
                  </div>
                )}
              </form>
            </div>

            {/* Step by step instructions */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-4">
              <h3 className="text-base font-bold font-mono text-[#FFF] flex items-center gap-2">
                <HelpCircle size={18} className="text-[#44D62C]" /> Como obter seu Token Oficial da Meta em 3 Minutos:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-xs text-[#AAA] font-sans leading-relaxed">
                <li>Acesse o <a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#44D62C] underline">Meta for Developers</a> e crie um App do tipo "Business".</li>
                <li>Conecte sua conta do Instagram Comercial à sua Página do Facebook.</li>
                <li>Vá no <strong>Graph API Explorer</strong> e adicione as permissões: <code>instagram_basic</code>, <code>instagram_manage_insights</code>, <code>instagram_content_publish</code> e <code>pages_show_list</code>.</li>
                <li>Gere o Token de Acesso de Longa Duração e cole os campos acima.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
