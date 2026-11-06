import React, { useState, useEffect } from 'react';
import { 
  Instagram, Sparkles, Send, Bookmark, BarChart3, TrendingUp, Calendar, 
  Copy, Check, RefreshCw, Key, ShieldCheck, Heart, MessageCircle, 
  Share2, Eye, Plus, ExternalLink, Sliders, AlertTriangle, Layers, 
  HelpCircle, CheckCircle2, ChevronRight, Hash, ArrowLeft
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { 
  InstagramProfile, InstagramMedia, GraphApiConfig, 
  getStoredGraphConfig, saveGraphConfig, clearGraphConfig, 
  MOCK_PROFILE, MOCK_MEDIA, fetchLiveInstagramProfile, 
  fetchLiveInstagramMedia, publishMediaToInstagram 
} from '../services/instagramGraphApi';

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
    day: 'Quarta-feira',
    theme: 'Dica Técnica Rápida',
    format: 'Post Único',
    title: 'Top 3 Patterns de Injeção de Dependência no Dart',
    hook: 'Você ainda está criando instâncias estáticas soltas no seu app?',
    status: 'Rascunho'
  },
  {
    id: 'plan-3',
    day: 'Sexta-feira',
    theme: 'Lançamento & Produtos',
    format: 'Carrossel',
    title: 'Novo E-book: Do Zero à Publicação na Google Play',
    hook: 'O passo a passo que usei para homologar mais de 8 aplicativos em produção.',
    status: 'Agendado'
  },
  {
    id: 'plan-4',
    day: 'Domingo',
    theme: 'Bastidores & Mentalidade',
    format: 'Reels',
    title: 'Um dia na rotina de um Desenvolvedor Full-Stack Solo',
    hook: '3 ferramentas que me economizam 15 horas de código por semana.',
    status: 'Rascunho'
  }
];

export default function InstagramStudio() {
  const [activeTab, setActiveTab] = useState<'feed' | 'marketing' | 'calendar' | 'api'>('feed');
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

  // AI Marketing Copilot State
  const [copyCategory, setCopyCategory] = useState<'flutter' | 'case_study' | 'ebook' | 'carrossel' | 'reels'>('case_study');
  const [copySubject, setCopySubject] = useState('Como implementamos o TaxiDog nativo no Bicho Mimado com Google Navigation SDK');
  const [copyGoal, setCopyGoal] = useState<'engajamento' | 'vendas' | 'autoridade' | 'comentarios'>('engajamento');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState('');
  const [visualTip, setVisualTip] = useState('');
  const [copied, setCopied] = useState(false);

  // Editorial Plan State
  const [plans, setPlans] = useState<EditorialPlanItem[]>(DEFAULT_EDITORIAL_PLAN);

  // Direct Publish State
  const [publishImageUrl, setPublishImageUrl] = useState('');
  const [publishStatus, setPublishStatus] = useState<{ status: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ status: 'idle' });

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
    generateMarketingCopy('case_study', copySubject, copyGoal);
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

  // Motor do Gestor de Marketing AI
  const generateMarketingCopy = (category: string, subject: string, goal: string) => {
    let caption = '';
    let hashtags = '';
    let tip = '';

    if (category === 'case_study') {
      caption = `Case de Engenharia: ${subject} 🚀📲\n\nQuando desenhamos essa funcionalidade, a prioridade número um era aliar experiência de usuário ultra responsiva com robustez de backend.\n\nPrincipais decisões de arquitetura:\n✅ 1. Separação de camadas usando Clean Architecture no Flutter\n✅ 2. Stream de dados em tempo real com Firebase e Cloud Functions\n✅ 3. Tratamento de exceções e tolerância a quedas de conexão\n✅ 4. Design System 100% consistente com o protótipo no Figma\n\nO resultado? Uma jornada fluida, segura e pronta para escalar com milhares de usuários.\n\n💬 Me conta nos comentários: qual é o seu maior desafio hoje em arquitetura mobile?`;
      hashtags = `#FlutterDev #MobileArchitecture #CleanCode #FullStack #AppDevelopment #Firebase #DevLife #SoftwareEngineer #GoogleMaps #TechFounder`;
      tip = `💡 Sugestão Visual: Carrossel com 5 slides. Slide 1 (Capa com print do celular e título grande), Slides 2-4 (Diagrama de arquitetura + trecho de código limpo), Slide 5 (Call To Action com sua foto e convite para comentar).`;
    } else if (category === 'flutter') {
      caption = `Dica de Ouro de Flutter: ${subject} 💡⚡\n\nMuito desenvolvedor perde horas caçando bugs de performance porque deixa de aplicar essa boa prática simples no dia a dia.\n\nPor que isso importa?\n👉 Menos rebuilds desnecessários na árvore de widgets\n👉 Menor consumo de memória RAM no smartphone do usuário\n👉 Código muito mais testável e modular\n\nSalva este post para consultar no seu próximo projeto! 💾👇`;
      hashtags = `#FlutterBrasil #DartLang #DicasDeProgramacao #DesenvolvimentoMobile #DevCommunity #FlutterCommunity #CodingTips`;
      tip = `💡 Sugestão Visual: Card com fundo preto e trechos de código em fonte Fira Code com sintaxe colorida (estilo carbon.now.sh).`;
    } else if (category === 'ebook') {
      caption = `Acabou de sair: Meu novo material prático para desenvolvedores! 📚🔥\n\n${subject}\n\nReuni anos de experiência construindo e colocando apps reais nas lojas para criar um guia sem enrolação, direto ao ponto:\n\n📖 O que você vai dominar:\n• Arquitetura pronta para produção\n• Integração com gateways de pagamento (Pix e Cartão)\n• Automação de builds e publicação na Google Play / App Store\n• Segurança e proteção de chaves de API\n\n🔗 Link liberado na bio do perfil! Corre lá e garanta o seu.`;
      hashtags = `#LivrosTech #EbookProgramacao #AprendaFlutter #CarreiraDev #DevIniciante #DesenvolvedorMobile #Tecnologia`;
      tip = `💡 Sugestão Visual: Mockup 3D profissional da capa do E-book em um iPad / smartphone com elementos de código flutuando ao redor.`;
    } else if (category === 'carrossel') {
      caption = `Guia Completo: ${subject} 📑 Swipe para o lado ➡️\n\nNeste carrossel passo a passo, detalhei a estratégia que utilizamos para construir soluções de alto impacto.\n\nArraste até o final para ver o checklist completo e comente "FLUTTER" para receber o resumo em PDF no seu direct! 📩`;
      hashtags = `#CarrosselTech #TutorialProgramacao #FlutterDeveloper #EngenhariaDeSoftware #TechTips`;
      tip = `💡 Sugestão Visual: Carrossel visual com setas de "arraste para o lado" e numeração clara (1/6, 2/6, etc.).`;
    } else {
      caption = `Bastidores do Código: ${subject} 🎬\n\nO que ninguém te conta sobre o desenvolvimento solo de aplicativos de grande escala. O segredo não é trabalhar 16h por dia, é automatizar processos repetitivos.\n\nQual parte da sua rotina você mais gostaria de automatizar? Deixe seu comentário! 👇`;
      hashtags = `#ReelsDev #TechCreator #Programador #EmpreendedorismoTech #DevHumor #Flutter`;
      tip = `💡 Sugestão de Vídeo: Gravação da tela com o código compilando no emulador ou gravação em primeira pessoa na bancada com transições rápidas nos primeiros 3 segundos.`;
    }

    setGeneratedCaption(caption);
    setGeneratedHashtags(hashtags);
    setVisualTip(tip);
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

  return (
    <div className="min-h-screen bg-[#070707] text-[#EEEEEE] font-sans">
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
                  Instagram Studio <span className="text-xs px-2 py-0.5 rounded-full bg-[#1A1A1A] border border-[#333] text-[#44D62C] font-mono">Marketing OS</span>
                </h1>
                <p className="text-xs text-[#888] font-mono">Gestão Estratégica &bull; @{profile.username}</p>
              </div>
            </div>
          </div>

          {/* Sync Status Badge & Action */}
          <div className="flex items-center gap-3">
            {config.isLive ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span> Graph API Conectada
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
      <div className="border-b border-[#222] bg-[#0C0C0C]">
        <div className="container mx-auto px-6 flex gap-2 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-4 py-2.5 rounded-lg text-sm font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'feed'
                ? 'bg-[#181818] text-[#44D62C] border border-[#333]'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <BarChart3 size={16} /> Feed & Métricas ao Vivo
          </button>

          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-4 py-2.5 rounded-lg text-sm font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'marketing'
                ? 'bg-[#181818] text-[#44D62C] border border-[#333]'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Sparkles size={16} className="text-[#FCAF45]" /> Gestor de Marketing AI
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2.5 rounded-lg text-sm font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-[#181818] text-[#44D62C] border border-[#333]'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Calendar size={16} /> Calendário Editorial
          </button>

          <button
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2.5 rounded-lg text-sm font-mono font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'api'
                ? 'bg-[#181818] text-[#44D62C] border border-[#333]'
                : 'text-[#888] hover:text-[#FFF] hover:bg-[#121212]'
            }`}
          >
            <Key size={16} /> Configuração Graph API
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
            <button onClick={() => setApiError(null)} className="text-xs font-mono underline hover:text-white">Fechar</button>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 1: FEED & METRICAS AO VIVO */}
        {/* ======================================================== */}
        {activeTab === 'feed' && (
          <div className="space-y-8">
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
                  <TrendingUp size={18} className="text-[#44D62C]" /> Diagnóstico & Insights
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
                        <Sparkles size={14} /> Análise do Gestor de Marketing:
                      </div>
                      <p className="text-xs text-[#AAA] leading-relaxed">
                        {selectedMedia.media_type === 'CAROUSEL_ALBUM'
                          ? 'Carrosséis técnicos geram a maior taxa de salvamentos (+70% vs imagem única). O algoritmo do Instagram entrega 2x mais impressões quando o usuário passa por todos os slides.'
                          : 'Posts de imagem única com gancho direto geram alto volume de comentários. Considere transformar os aprendizados deste post em um carrossel aprofundado na próxima semana.'}
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
        {/* ABA 2: GESTOR DE MARKETING AI (COPY COPILOT) */}
        {/* ======================================================== */}
        {activeTab === 'marketing' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Input Strategy Controls */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-6">
              <div>
                <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Copiloto Estratégico</span>
                <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                  <Sparkles size={22} className="text-[#FCAF45]" /> Estúdio de Criação & Copywriting
                </h2>
                <p className="text-xs text-[#888] mt-1">
                  Gere legendas de alta conversão, carrosséis educativos e roteiros de reels alinhados à sua autoridade como fundador e dev.
                </p>
              </div>

              {/* Category Selector */}
              <div>
                <label className="block text-xs font-mono text-[#AAA] mb-2">Categoria de Conteúdo:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'case_study', label: '🚀 Case Study de App' },
                    { id: 'flutter', label: '💡 Dica de Flutter/Code' },
                    { id: 'ebook', label: '📚 Lançamento de E-book' },
                    { id: 'carrossel', label: '📑 Carrossel Educativo' },
                    { id: 'reels', label: '🎬 Roteiro de Reels' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setCopyCategory(cat.id as any);
                        generateMarketingCopy(cat.id, copySubject, copyGoal);
                      }}
                      className={`p-2.5 rounded-lg text-xs font-mono text-left border transition-all cursor-pointer ${
                        copyCategory === cat.id
                          ? 'bg-[#1C1C1C] text-[#44D62C] border-[#44D62C]'
                          : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-[#CCC]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-mono text-[#AAA] mb-2">Tema / Gancho do Post:</label>
                <input
                  type="text"
                  value={copySubject}
                  onChange={(e) => setCopySubject(e.target.value)}
                  placeholder="Ex: Como estruturamos a telemetria do GynMove em segundo plano"
                  className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-sm text-[#EEE] font-sans outline-none"
                />
              </div>

              {/* Goal Selector */}
              <div>
                <label className="block text-xs font-mono text-[#AAA] mb-2">Objetivo de Marketing (Call To Action):</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'engajamento', label: '💾 Salvamento & Compartilhamento' },
                    { id: 'vendas', label: '🔗 Vendas (Link na Bio)' },
                    { id: 'comentarios', label: '💬 Geração de Comentários' },
                    { id: 'autoridade', label: '🏆 Posicionamento & Autoridade' }
                  ].map(goal => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => {
                        setCopyGoal(goal.id as any);
                        generateMarketingCopy(copyCategory, copySubject, goal.id);
                      }}
                      className={`p-2 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                        copyGoal === goal.id
                          ? 'bg-[#1C1C1C] text-[#44D62C] border-[#44D62C]'
                          : 'bg-[#141414] text-[#888] border-[#2A2A2A] hover:text-[#CCC]'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => generateMarketingCopy(copyCategory, copySubject, copyGoal)}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-mono font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_0_20px_rgba(253,29,29,0.3)] cursor-pointer"
              >
                <Sparkles size={18} /> Gerar Post Estratégico com IA
              </button>

              {/* Visual Tip */}
              {visualTip && (
                <div className="p-4 rounded-xl bg-[#161616] border border-[#2F2F2F] text-xs text-[#AAA] leading-relaxed">
                  {visualTip}
                </div>
              )}
            </div>

            {/* Right: Live Preview & Ready-to-use Caption */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-mono text-[#FFF] flex items-center gap-2">
                    <Send size={18} className="text-[#44D62C]" /> Pré-visualização do Post
                  </h3>
                  <button
                    onClick={handleCopyCaption}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1C1C] border border-[#333] hover:border-[#44D62C] text-xs font-mono text-[#44D62C] transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copiado para o Clipboard!' : 'Copiar Legenda Formatada'}
                  </button>
                </div>

                {/* Mobile Preview Screen */}
                <div className="bg-[#000000] rounded-2xl border border-[#262626] p-4 space-y-3 font-sans max-h-[500px] overflow-y-auto">
                  {/* Account Header */}
                  <div className="flex items-center gap-3">
                    <img
                      src={profile.profile_picture_url}
                      alt={profile.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#44D62C]"
                    />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">fabiolucasdev</div>
                      <div className="text-[10px] text-[#888]">Goiânia, Brasil</div>
                    </div>
                  </div>

                  {/* Caption Content */}
                  <div className="text-xs text-[#DDD] leading-relaxed whitespace-pre-line pt-2 border-t border-[#1F1F1F]">
                    {generatedCaption}
                  </div>

                  {/* Hashtags */}
                  <div className="text-xs text-blue-400 leading-relaxed font-mono pt-2">
                    {generatedHashtags}
                  </div>
                </div>
              </div>

              {/* Direct Graph API Publication helper */}
              <div className="p-4 rounded-xl bg-[#161616] border border-[#2F2F2F] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#FFF] flex items-center gap-1.5">
                    <Share2 size={14} className="text-[#44D62C]" /> Publicar Direto via Graph API:
                  </span>
                  <span className="text-[10px] font-mono text-[#888]">
                    {config.isLive ? 'Conectado' : 'Requer Token Live'}
                  </span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="URL da imagem pública (https://...)"
                    value={publishImageUrl}
                    onChange={(e) => setPublishImageUrl(e.target.value)}
                    className="flex-1 bg-[#101010] border border-[#333] focus:border-[#44D62C] rounded-lg px-3 py-2 text-xs text-[#EEE] font-mono outline-none"
                  />
                  <button
                    onClick={handlePublishDirect}
                    disabled={publishStatus.status === 'loading'}
                    className="px-4 py-2 rounded-lg bg-[#44D62C] text-black font-mono font-bold text-xs hover:bg-[#5aff3d] transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {publishStatus.status === 'loading' ? 'Enviando...' : 'Publicar'}
                  </button>
                </div>

                {publishStatus.message && (
                  <div className={`text-xs font-mono ${publishStatus.status === 'success' ? 'text-[#10B981]' : 'text-red-400'}`}>
                    {publishStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 3: CALENDARIO EDITORIAL SEMANAL */}
        {/* ======================================================== */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Cronograma de Conteúdo</span>
                <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1">Grade Editorial Semanal</h2>
                <p className="text-xs text-[#888] mt-1">Planejamento focado em retenção, crescimento de seguidores e vendas de produtos técnicos.</p>
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
                <Plus size={16} /> Adicionar Novo Post ao Calendário
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((item) => (
                <div key={item.id} className="bg-[#111111] p-6 rounded-2xl border border-[#262626] flex flex-col justify-between space-y-4 hover:border-[#44D62C]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#44D62C] font-bold">{item.day}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        item.status === 'Publicado'
                          ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30'
                          : item.status === 'Agendado'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : 'bg-[#333] text-[#AAA]'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-[#888] mb-1">{item.theme} &bull; {item.format}</div>
                    <h4 className="text-base font-bold font-mono text-[#FFF] mb-2">{item.title}</h4>
                    <p className="text-xs text-[#AAA] leading-relaxed italic font-sans">
                      "{item.hook}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#222] flex items-center justify-between">
                    <button
                      onClick={() => {
                        setCopySubject(item.title);
                        setActiveTab('marketing');
                        generateMarketingCopy('case_study', item.title, 'engajamento');
                      }}
                      className="text-xs font-mono text-[#44D62C] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Criar Copy na IA <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => {
                        setPlans(plans.map(p => p.id === item.id ? { ...p, status: p.status === 'Publicado' ? 'Rascunho' : p.status === 'Agendado' ? 'Publicado' : 'Agendado' } : p));
                      }}
                      className="text-[11px] font-mono text-[#888] hover:text-white cursor-pointer"
                    >
                      Mudar Status
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ABA 4: CONFIGURACAO DA META GRAPH API */}
        {/* ======================================================== */}
        {activeTab === 'api' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-6">
              <div>
                <span className="text-xs font-mono text-[#44D62C] uppercase tracking-wider">Integração Oficial Meta</span>
                <h2 className="text-2xl font-bold font-mono text-[#FFF] mt-1 flex items-center gap-2">
                  <Key size={22} className="text-[#44D62C]" /> Credenciais da Instagram Graph API
                </h2>
                <p className="text-xs text-[#AAA] mt-1 leading-relaxed">
                  Conecte seu token de acesso de longa duração gerado no <strong className="text-white">Meta for Developers</strong> para sincronizar seus posts, métricas reais de alcance e habilitar publicações diretas.
                </p>
              </div>

              {configSuccess && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-200 text-sm flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#10B981]" />
                  <span>Configurações salvas localmente com sucesso!</span>
                </div>
              )}

              <form onSubmit={handleSaveConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#CCC] mb-1.5">
                    User Access Token (ou Long-Lived Page/User Token):
                  </label>
                  <input
                    type="password"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    placeholder="EAAB... (Cole aqui o token gerado no Graph API Explorer)"
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-sm text-[#EEE] font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#CCC] mb-1.5">
                    Instagram Business / Creator Account ID:
                  </label>
                  <input
                    type="text"
                    value={accountIdInput}
                    onChange={(e) => setAccountIdInput(e.target.value)}
                    placeholder="Ex: 17841400012345678"
                    className="w-full bg-[#161616] border border-[#333] focus:border-[#44D62C] rounded-lg p-3 text-sm text-[#EEE] font-mono outline-none"
                  />
                  <p className="text-[11px] text-[#777] mt-1 font-mono">
                    Obtido via endpoint <code className="text-[#AAA]">GET /me/accounts?fields=instagram_business_account</code>
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-lg bg-[#44D62C] text-black font-mono font-bold text-sm hover:bg-[#5aff3d] transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <ShieldCheck size={18} /> Salvar & Conectar ao Vivo
                  </button>

                  {config.isLive && (
                    <button
                      type="button"
                      onClick={handleClearConfig}
                      className="px-4 py-3 rounded-lg bg-[#1C1C1C] border border-red-900 text-red-400 font-mono text-sm hover:bg-red-950/30 transition-colors cursor-pointer"
                    >
                      Desconectar
                    </button>
                  )}
                </div>
              </form>

              {/* Security Privacy Notice */}
              <div className="p-4 rounded-xl bg-[#161616] border border-[#2F2F2F] text-xs text-[#888] space-y-1 font-mono">
                <div className="flex items-center gap-2 text-[#44D62C] font-bold">
                  <ShieldCheck size={16} /> Privacidade & Armazenamento Seguro
                </div>
                <p>
                  Suas chaves de acesso são gravadas <strong className="text-white">apenas no localStorage do seu próprio navegador</strong>. Elas nunca são enviadas para repositórios no Git nem expostas a terceiros.
                </p>
              </div>
            </div>

            {/* Step by Step Meta for Developers Guide */}
            <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-[#262626] space-y-4">
              <h3 className="text-lg font-bold font-mono text-[#FFF] flex items-center gap-2">
                <HelpCircle size={18} className="text-[#FCAF45]" /> Como gerar suas credenciais na Meta:
              </h3>

              <div className="space-y-3 text-xs text-[#AAA] font-mono leading-relaxed">
                <div className="p-3 bg-[#161616] rounded-lg border border-[#2A2A2A]">
                  <strong className="text-white">1. Ter conta Profissional no Instagram:</strong> Alterne sua conta @fabiolucasdev para Criador de Conteúdo ou Comercial no aplicativo do Instagram e vincule-a a uma Página do Facebook.
                </div>
                <div className="p-3 bg-[#161616] rounded-lg border border-[#2A2A2A]">
                  <strong className="text-white">2. Criar App no Meta for Developers:</strong> Acesse <a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#44D62C] underline">developers.facebook.com</a>, crie um aplicativo do tipo "Empresa/Outro" e adicione o produto "Instagram Graph API".
                </div>
                <div className="p-3 bg-[#161616] rounded-lg border border-[#2A2A2A]">
                  <strong className="text-white">3. Obter Permissões no Graph API Explorer:</strong> Selecione seu app e marque as permissões: <code className="text-white">instagram_basic</code>, <code className="text-white">instagram_manage_insights</code>, <code className="text-white">instagram_content_publish</code>, <code className="text-white">pages_show_list</code>.
                </div>
                <div className="p-3 bg-[#161616] rounded-lg border border-[#2A2A2A]">
                  <strong className="text-white">4. Gerar Token de 60 Dias (Long-Lived):</strong> Converta o token temporário em um token de longa duração via chamada <code className="text-white">oauth/access_token?grant_type=fb_exchange_token</code>. Cole o token gerado no formulário acima.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
