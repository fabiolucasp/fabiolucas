import React, { useState } from 'react';
import { Video, MessageSquare, Zap, Brain, Smartphone, Cloud, Lock, CheckCircle2, ShoppingBag, BookOpen, Layers, MonitorPlay, Code2, Rocket, AlertTriangle, CreditCard, Server, Globe, Key, Bell, Anchor, Share2, ShieldCheck, Wifi, Quote, Play, Target, Flame, Gauge, Users, Hammer, GraduationCap, FileText, TrendingUp, ArrowLeft, Clock, Layout, Image as ImageIcon, Box } from 'lucide-react';

// --- DADOS DO CURSO DE FLUTTER ---
const FLUTTER_COURSE_DATA = {
  id: 'flutter-beginners',
  title: "Curso de Flutter para Iniciantes",
  description: "A formação completa para sair do zero. Domine a linguagem Dart, a estrutura de Widgets e publique seus primeiros aplicativos Android e iOS.",
  coverImage: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1200&auto=format&fit=crop",
  modules: [
    {
      title: "Módulo 1: Fundamentos & Setup",
      lessons: [
        {
          id: 1,
          title: "Aula 1: Introdução & Setup do Ambiente",
          duration: "13:20",
          image: "https://images.unsplash.com/photo-1607799275518-d58665d096b1?q=80&w=400&auto=format&fit=crop",
          description: "O passo inicial da sua jornada. Aprenda a instalar o Android Studio (a IDE recomendada), configurar o SDK do Flutter e criar seu primeiro emulador. Abordamos também como rodar apps em dispositivos físicos modestos (ex: LG K10).",
          topics: ["Instalação do Android Studio", "Configuração de Variáveis de Ambiente", "Criação de Emuladores (AVD)", "Estrutura de Pastas do Projeto"]
        },
        {
          id: 2,
          title: "Aula 2: Widgets, Layouts & Estrutura",
          duration: "11:15",
          image: "https://images.unsplash.com/photo-1628254747642-18b1c1815d69?q=80&w=400&auto=format&fit=crop",
          description: "Entenda o mantra: 'Tudo é um Widget'. Nesta aula, dissecamos os componentes visuais básicos como Text, Container, e as estruturas de layout Row (Horizontal) e Column (Vertical).",
          topics: ["Conceito de Widget", "Text & Estilização", "Container, Padding & Bordas", "Row vs Column", "Image (Assets e Network)"]
        }
      ]
    }
  ]
};

const CoursesOverview: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  // --- VISUALIZAÇÃO DETALHADA DO CURSO (TEMA FLUTTER: AZUL/BRANCO) ---
  if (selectedCourse) {
    return (
      <div className="fixed inset-0 z-[100] bg-white overflow-y-auto font-sans text-slate-800">
        {/* Flutter Style Header */}
        <div className="bg-[#02569B] text-white px-6 py-4 sticky top-0 z-50 shadow-md flex justify-between items-center">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="font-bold text-xl flex items-center gap-2">
                <Smartphone size={20} />
                <span>Curso de Flutter</span>
              </div>
           </div>
           <div className="hidden md:block text-sm opacity-80 font-mono">
              v3.19.0
           </div>
        </div>

        <div className="max-w-6xl mx-auto pb-20">
            {/* Hero Course Header */}
            <div className="bg-[#0175C2] text-white p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                    <Smartphone size={400} />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 uppercase tracking-widest border border-white/30">
                        Totalmente Gratuito
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{selectedCourse.title}</h1>
                    <p className="text-blue-100 text-lg leading-relaxed mb-8">
                        {selectedCourse.description}
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-medium">
                        <div className="flex items-center gap-2"><Layers size={18} /> Módulo Iniciante</div>
                        <div className="flex items-center gap-2"><Video size={18} /> 2 Aulas Disponíveis</div>
                        <div className="flex items-center gap-2"><Code2 size={18} /> Dart & Flutter SDK</div>
                    </div>
                </div>
            </div>

            {/* Content List */}
            <div className="px-6 py-12">
                {selectedCourse.modules.map((module: any, idx: number) => (
                    <div key={idx} className="mb-12">
                        <h2 className="text-2xl font-bold text-[#02569B] mb-8 border-b-2 border-blue-100 pb-2">
                            {module.title}
                        </h2>
                        
                        <div className="grid gap-6">
                            {module.lessons.map((lesson: any) => (
                                <div key={lesson.id} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:flex-row group cursor-pointer">
                                    {/* Thumbnail Area */}
                                    <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0 bg-slate-200">
                                        <img src={lesson.image} className="w-full h-full object-cover" alt={lesson.title} />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-[#02569B] shadow-lg group-hover:scale-110 transition-transform">
                                                <Play size={32} fill="#02569B" className="ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono flex items-center gap-1">
                                            <Clock size={12} /> {lesson.duration}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex-1 flex flex-col justify-center">
                                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#0175C2] transition-colors">
                                            {lesson.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {lesson.description}
                                        </p>
                                        
                                        {/* Topics Tags */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {lesson.topics.map((topic: string, i: number) => (
                                                <span key={i} className="px-3 py-1 bg-blue-50 text-[#02569B] text-xs font-bold rounded-full border border-blue-100">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }

  // --- VISUALIZAÇÃO PADRÃO (DARK MODE) ---
  return (
    <section className="min-h-screen bg-[#000000] pb-20 pt-24 font-sans text-[#EEEEEE]">
      
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-20">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop" 
                alt="Coding Background" 
                className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/90 to-[#000000]"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10 pt-12 pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#44D62C]/10 border border-[#44D62C]/20 text-[#44D62C] font-mono text-sm mb-6 animate-pulse">
                <Zap size={16} />
                <span>Formação Definitiva</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 font-mono leading-tight max-w-5xl mx-auto">
                Flutter Full-Stack: <br />
                <span className="text-[#44D62C]">Do Básico ao Extremo Avançado</span>
            </h1>
            <p className="text-[#AAAAAA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
                Não é apenas um curso de telas. É uma formação de Arquitetura de Software. Aprenda a criar clones perfeitos, manipular Cloud Functions, integrar IAs e dominar a infraestrutura da Google.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-[#5aff3d] transition-all shadow-[0_0_20px_rgba(68,214,44,0.4)] uppercase tracking-wider font-mono flex items-center gap-2">
                    <Rocket size={20} />
                    Quero me Inscrever
                </button>
                <button className="px-8 py-4 bg-[#111] text-white border border-[#333] font-bold rounded-lg hover:border-[#44D62C] transition-all uppercase tracking-wider font-mono">
                    Ver Ementa Completa
                </button>
            </div>
         </div>
      </div>

      {/* SECTION: LIVE MENTORING (TIRA DÚVIDAS) */}
      <div className="container mx-auto px-6 mb-32">
        <div className="bg-[#0A0A0A] border-l-4 border-[#44D62C] rounded-r-2xl p-8 relative overflow-hidden group hover:bg-[#111] transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Video size={120} className="text-[#44D62C]" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="p-4 bg-[#44D62C]/10 rounded-full text-[#44D62C] animate-pulse">
                    <MonitorPlay size={48} />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">Mentoria Ao Vivo Exclusiva</h3>
                    <p className="text-[#AAA] leading-relaxed">
                        Além das aulas gravadas, realizamos <strong>Lives Semanais de Tira-Dúvidas</strong> apenas para assinantes. Traga seus erros, seus bugs e vamos debugar juntos em tempo real.
                    </p>
                </div>
                <div className="text-center bg-[#1A1A1A] px-6 py-3 rounded-lg border border-[#333]">
                    <span className="block text-xs text-[#888] uppercase tracking-widest mb-1">Próxima Sessão</span>
                    <span className="block text-[#44D62C] font-bold text-lg font-mono">Quinta, 20:00h</span>
                </div>
            </div>
        </div>
      </div>

      {/* MODULE 1: SUPER APPS (CLONES) */}
      <div className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
            <span className="text-[#44D62C] font-mono text-xs uppercase tracking-widest border border-[#44D62C]/30 px-3 py-1 rounded-full">Módulo Prático</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] mt-4 mb-4 font-mono">Construindo Gigantes</h2>
            <p className="text-[#AAAAAA]">Aprenda a arquitetura por trás dos maiores apps do mundo.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 0: Flutter Intro (INTERACTIVE CARD) */}
          <div onClick={() => setSelectedCourse(FLUTTER_COURSE_DATA)} className="cursor-pointer">
            <CourseProjectCard 
                icon={<Smartphone size={32} />}
                title="Curso de Flutter"
                subtitle="Iniciantes ao Avançado"
                description="O curso definitivo. Da instalação do Android Studio à criação de layouts complexos com Widgets (Row, Column, Container). Clique para assistir as aulas disponíveis."
                techs={["Android Studio", "Widgets", "Dart", "Logic"]}
                image="https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=800&auto=format&fit=crop"
                highlight
            />
          </div>

          {/* Project 1: E-Commerce */}
          <CourseProjectCard 
            icon={<ShoppingBag size={32} />}
            title="E-Commerce Profissional"
            subtitle="Cloud Functions & Payments"
            description="Não é apenas uma loja. É um sistema completo com integração a meios de pagamento reais, carrinho sincronizado e backend serverless."
            techs={["Cloud Functions", "Stripe/Cielo", "Real-time DB"]}
            image="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop"
          />

          {/* Project 2: WhatsApp */}
          <CourseProjectCard 
            icon={<MessageSquare size={32} />}
            title="WhatsApp Clone"
            subtitle="StreamBuilder Masterclass"
            description="Domine o StreamBuilder para criar chats em tempo real com status de leitura, envio de mídia e performance extrema."
            techs={["StreamBuilder", "Firebase Storage", "Sockets"]}
            image="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop"
          />

          {/* Project 3: Instagram */}
          <CourseProjectCard 
            icon={<Smartphone size={32} />}
            title="Instagram Clone"
            subtitle="Feeds Complexos & Stories"
            description="Aprenda a lidar com feeds infinitos, sistema de stories temporários e algoritmos de cache de imagem avançados."
            techs={["Infinite Scroll", "Cache Managers", "Complex UI"]}
            image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
          />

          {/* Project 4: TikTok */}
          <CourseProjectCard 
            icon={<MonitorPlay size={32} />}
            title="TikTok Clone"
            subtitle="Video Preload & Performance"
            description="O desafio máximo de performance. Gestão de memória para vídeos verticais, pré-carregamento e gestos fluídos."
            techs={["Video Player Controller", "Preload Strategy", "Gestures"]}
            image="https://images.unsplash.com/photo-1611605698389-ecd39e2bb29d?q=80&w=800&auto=format&fit=crop"
          />

          {/* Project 5: Google Meet */}
          <CourseProjectCard 
            icon={<Video size={32} />}
            title="Google Meet Clone"
            subtitle="AWS & WebRTC"
            description="Saia do básico. Utilizaremos serviços da Amazon AWS para criar salas de vídeo conferência escaláveis e estáveis."
            techs={["WebRTC", "AWS Kinesis/Chime", "Signaling"]}
            image="https://images.unsplash.com/photo-1616587894289-86480e533129?q=80&w=800&auto=format&fit=crop"
          />

          {/* Project 6: Google Photos (AI) */}
          <CourseProjectCard 
            icon={<Brain size={32} />}
            title="Google Fotos AI"
            subtitle="Machine Learning & TensorFlow"
            description="O projeto mais avançado. Implementação de ML para detectar rostos e objetos nas fotos e classificá-las automaticamente."
            techs={["TensorFlow Lite", "On-device ML", "Image Processing"]}
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
            highlight
          />

          {/* Project 10: EAD Platform */}
          <CourseProjectCard 
            icon={<GraduationCap size={32} />}
            title="Plataforma EAD & Gamification"
            subtitle="Adeus Hotmart: O Ecossistema"
            description="Crie sua própria Hotmart. Sistema avançado de 'Vendedores' (Afiliados 2.0) com comissões dinâmicas baseadas em metas, ranking hierárquico e segurança total de conteúdo."
            techs={["Deep Links", "Gamification Engine", "DRM Security"]}
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            highlight
          />

          {/* Project 14: App Notion */}
          <CourseProjectCard 
            icon={<FileText size={32} />}
            title="App Notion: Design & Finanças"
            subtitle="UI Dribbble & Controle"
            description="Remasterização do Notion em formato App. Dashboard financeiro com tabelas detalhadas (Entradas/Saídas), Wishlist no Drawer e estética moderna estilo Dribbble."
            techs={["Flutter UI", "Charts", "Complex Layouts"]}
            image="https://images.unsplash.com/photo-1611224885990-ab4b5f3e9e2b?q=80&w=800&auto=format&fit=crop"
          />

          {/* Project: Como Ficar Rico */}
          <CourseProjectCard 
            icon={<TrendingUp size={32} />}
            title="Projeto: Como Ficar Rico"
            subtitle="Instagram & Conteúdo"
            description="Aprenda a monetizar seu conhecimento em programação no Instagram Stories. Estratégias de pesquisa de tendências, networking com creators e construção de comunidades no Telegram."
            techs={["Social Growth", "Personal Branding", "Community"]}
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </div>

      {/* MODULE 2: INFRASTRUCTURE & BACKEND MASTERY */}
      <div className="py-20 bg-[#050505] border-y border-[#333] mb-32">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                  <div className="md:w-1/3">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4 font-mono">Infraestrutura <br/><span className="text-[#44D62C]">Serverless & Cloud</span></h2>
                      <p className="text-[#AAAAAA] leading-relaxed">
                          Um desenvolvedor sênior não faz apenas telas. Ele domina o servidor. Vamos configurar DNS, rotas HTTP e automações que rodam 24/7.
                      </p>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TechDetailRow 
                        icon={<Cloud size={20} />} 
                        title="Cloud Functions (TypeScript)" 
                        desc="Configuração profissional, triggers de banco de dados e agendamento de tarefas (Cron)."
                        index={7}
                      />
                      <TechDetailRow 
                        icon={<Server size={20} />} 
                        title="HTTP Triggers & Arguments" 
                        desc="Criação de APIs RESTful próprias dentro do Firebase para receber webhooks externos."
                        index={8}
                      />
                      <TechDetailRow 
                        icon={<Globe size={20} />} 
                        title="Domínios & GoDaddy" 
                        desc="Conectando seu app ao mundo real. Configuração de CNAME, A Records e SSL."
                        index={9}
                      />
                      <TechDetailRow 
                        icon={<Wifi size={20} />} 
                        title="DNS Management" 
                        desc="Propagação, TTL e segurança de domínio para garantir 100% de uptime."
                        index={10}
                      />
                      <TechDetailRow 
                        icon={<Anchor size={20} />} 
                        title="Redirecionamento Server-Side" 
                        desc="Configuração avançada de 'rewrites' no firebase.json para URLs limpas."
                        index={11}
                      />
                      <TechDetailRow 
                        icon={<Share2 size={20} />} 
                        title="URL Strategy (No Hash #)" 
                        desc="Removendo o '#' das rotas Web do Flutter para melhor SEO e estética."
                        index={12}
                      />
                  </div>
              </div>
          </div>
      </div>

      {/* MODULE 3: GROWTH & MARKETING TECH */}
      <div className="container mx-auto px-6 mb-32">
        <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-12 border border-[#333] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#44D62C]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8 font-mono border-b border-[#333] pb-4">
                    Growth Hacking & Retenção
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Deep Linking Case */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#44D62C]/20 rounded-xl text-[#44D62C]"><Rocket size={24} /></div>
                            <h3 className="text-xl font-bold text-[#EEE]">O Funil de Conversão Perfeito (Deep Links)</h3>
                        </div>
                        <p className="text-[#AAA] leading-relaxed">
                            Aprenda a criar a ponte entre um anúncio no Instagram e seu App.
                        </p>
                        <div className="bg-[#000] p-6 rounded-xl border border-[#333] space-y-4">
                            <div className="flex items-center gap-3 text-sm text-[#888]">
                                <span className="text-[#E1306C] font-bold">Instagram Ad</span>
                                <span className="h-[1px] w-8 bg-[#333]"></span>
                                <span className="text-white font-bold">Clica no Link</span>
                                <span className="h-[1px] w-8 bg-[#333]"></span>
                                <span className="text-[#44D62C] font-bold">Abre App na Tela do Produto</span>
                            </div>
                            <p className="text-xs text-[#666]">
                                *Configuração nativa no AndroidManifest e Info.plist para interceptar URLs específicas.
                            </p>
                        </div>
                    </div>

                    {/* Notifications Strategy */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#44D62C]/20 rounded-xl text-[#44D62C]"><Bell size={24} /></div>
                            <h3 className="text-xl font-bold text-[#EEE]">Estratégia de Notificações Push</h3>
                        </div>
                        <p className="text-[#AAA] leading-relaxed">
                            Implementação cross-platform (Android, iOS, Web, Desktop) para reengajar usuários.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-[#CCC]">
                                <CheckCircle2 size={16} className="text-[#44D62C]" />
                                Notificações Locais (Agendadas)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[#CCC]">
                                <CheckCircle2 size={16} className="text-[#44D62C]" />
                                Firebase Cloud Messaging (FCM)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[#CCC]">
                                <CheckCircle2 size={16} className="text-[#44D62C]" />
                                Dynamic Links Notifications
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

      {/* MODULE 4: ENTERPRISE INTEGRATIONS */}
      <div className="container mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-[#EEEEEE] mb-12 text-center font-mono">Integrações Enterprise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IntegrationCard 
                icon={<CreditCard />} 
                title="Pagamentos Nacionais" 
                items={["Cielo API", "PagSeguro Transparente", "Pix Automático"]}
                color="text-blue-400"
            />
             <IntegrationCard 
                icon={<Globe />} 
                title="Pagamentos Globais" 
                items={["PayPal SDK", "Stripe Connect", "Conversão de Moeda"]}
                color="text-blue-300"
            />
             <IntegrationCard 
                icon={<Key />} 
                title="Autenticação Social" 
                items={["Google Sign-In", "Facebook Login", "SMS (OTP) Auto-fill"]}
                color="text-red-400"
            />
             <IntegrationCard 
                icon={<ShieldCheck />} 
                title="Jurídico Digital" 
                items={["DocuSign API", "Assinatura Biométrica", "Validade Legal"]}
                color="text-yellow-400"
            />
        </div>
      </div>

      {/* SECTION: STRATEGY & AUTONOMY (GOLDEN SECTION) */}
      <div className="container mx-auto px-6 mb-32">
        <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-[2.5rem] p-1 shadow-[0_0_40px_rgba(255,215,0,0.15)]">
            <div className="bg-[#0A0A0A] rounded-[2.3rem] p-8 md:p-16 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] font-mono text-sm mb-8 animate-pulse">
                        <Lock size={16} />
                        <span>O Segredo dos 1%</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-mono leading-tight">
                        Como Viver (Muito Bem) de Código? <br />
                        <span className="text-[#FFD700]">Resolva Problemas Reais.</span>
                    </h2>

                    <div className="text-left bg-[#111] p-8 rounded-2xl border border-[#333] mb-12 relative shadow-2xl">
                        <Quote className="absolute top-8 left-8 text-[#FFD700] opacity-20 transform -scale-x-100" size={64} />
                        <p className="text-[#CCC] text-lg md:text-xl leading-relaxed relative z-10 italic font-serif">
                            "Para ganhar dinheiro de forma autônoma — MUITO DINHEIRO — pare de criar apps aleatórios. Foque em resolver um problema grave em um aplicativo grande."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 text-left items-start">
                        {/* The Strategy */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#FFF] mb-6 flex items-center gap-3">
                                <Target className="text-[#FFD700]" /> A Estratégia
                            </h3>
                            <p className="text-[#AAA] leading-relaxed mb-6">
                                Identifique falhas de UX ou gargalos em apps como iFood, Uber ou Airbnb. Crie uma versão mais eficiente, focada em resolver APENAS aquele problema.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-[#333]">
                                    <div className="mt-1 text-[#FFD700]"><CheckCircle2 size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Problema Real (Ex: iFood)</h4>
                                        <p className="text-[#888] text-xs mt-1">"O iFood tem dificuldade em exibir restaurantes de forma efetiva. A usabilidade pode ser melhor."</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-[#333]">
                                    <div className="mt-1 text-[#FFD700]"><CheckCircle2 size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Validação Social</h4>
                                        <p className="text-[#888] text-xs mt-1">"Mostre seu app otimizado para amigos e pessoas próximas. Peça opiniões sinceras."</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/30">
                                    <div className="mt-1 text-[#FFD700]"><CheckCircle2 size={20} /></div>
                                    <div>
                                        <h4 className="text-[#FFD700] font-bold text-sm">O Pulo do Gato</h4>
                                        <p className="text-[#FFD700]/80 text-xs mt-1">"Caso tenha um feedback bacana, <strong>faça disso a sua nova vida.</strong>"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Practical Example Video Card */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#FFF] mb-6 flex items-center gap-3">
                                <MonitorPlay className="text-[#FFD700]" /> Na Prática
                            </h3>
                            <div className="bg-[#1A1A1A] rounded-2xl border border-[#333] overflow-hidden group cursor-pointer hover:border-[#FFD700] transition-all relative shadow-xl">
                                {/* Fake Video Player UI */}
                                <div className="aspect-video bg-black relative flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video Thumbnail" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    
                                    <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center text-black z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                                        <Play size={32} fill="black" className="ml-1" />
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-4 bg-red-600 px-3 py-1 rounded text-xs font-bold font-mono text-white flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        MINI-AULA PRÁTICA
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs font-mono text-white">
                                        12:45
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-white font-bold text-xl mb-3">Hackeando a UX do iFood</h4>
                                    <p className="text-[#AAA] text-sm leading-relaxed mb-4">
                                        Vou te mostrar, na tela do meu computador, como identifiquei um problema de usabilidade na listagem de restaurantes e criei uma solução superior em Flutter em menos de 48 horas.
                                    </p>
                                    <span className="text-[#FFD700] text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Assistir Agora <Rocket size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>

      {/* NEW SECTION: MINDSET & MVP (FINAL BOSS) */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8">

            {/* MVP Card */}
            <div className="bg-[#111] p-8 rounded-[2.5rem] border border-[#333] relative overflow-hidden group hover:border-[#44D62C] transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Hammer size={150} />
                </div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 border border-blue-500/20">
                        <Code2 size={14} /> LEI DO MVP
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Pare de Enfeitar o Código.</h3>
                    <p className="text-[#CCC] leading-relaxed mb-6">
                        <strong className="text-white">Dica de Ouro:</strong> Seu MVP <strong>NÃO</strong> precisa de Clean Architecture, Interfaces, Controllers ou padrões complexos agora.
                    </p>
                    <div className="bg-[#000] p-6 rounded-2xl border-l-4 border-blue-500 mb-6">
                        <p className="text-sm text-[#AAA] italic">
                            "Faça do jeito mais simples possível. Se o projeto der certo e virar um unicórnio, aí sim você refatora. Antes disso, código bonito não paga boleto."
                        </p>
                    </div>
                    <p className="text-[#888] text-sm">
                        Foco total em funcionalidade. O código deve suportar crescimento, mas não deve travar o lançamento.
                    </p>
                </div>
            </div>

            {/* Hype/Wealth Card */}
            <div className="bg-[#111] p-8 rounded-[2.5rem] border border-[#333] relative overflow-hidden group hover:border-red-500 transition-all">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Flame size={150} />
                </div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold mb-6 border border-red-500/20">
                        <Users size={14} /> MODO HARDCORE
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">O Código da Riqueza</h3>
                    <p className="text-[#CCC] leading-relaxed mb-6">
                        Junte seus melhores amigos. Transforme sua vida em um verdadeiro <strong>inferno produtivo</strong>. Madrugadas, café e código.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Gauge className="text-red-500" />
                            <span className="text-[#EEE] font-bold">HYPE Infinito</span>
                        </div>
                        <p className="text-xs text-[#888] pl-9">
                            Nunca perca a energia. Controle a ansiedade, use-a como combustível. Não deixe ela te travar, mas mantenha ela ALTA junto com o Hype.
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#333]">
                        <p className="text-white font-mono text-sm">
                            "Quando bater o cansaço, lembre-se da recompensa. O resultado final será extremamente gratificante."
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </section>
  );
};

// --- SUB-COMPONENTS ---

const CourseProjectCard = ({ icon, title, subtitle, description, techs, image, highlight }: { icon: React.ReactNode, title: string, subtitle: string, description: string, techs: string[], image: string, highlight?: boolean }) => (
    <div className={`flex flex-col h-full bg-[#0A0A0A] rounded-2xl overflow-hidden border transition-all duration-300 group hover:-translate-y-2 ${highlight ? 'border-[#44D62C] shadow-[0_0_30px_rgba(68,214,44,0.1)]' : 'border-[#333] hover:border-[#44D62C]'}`}>
        <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors"></div>
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 right-4 z-20 bg-[#111]/90 backdrop-blur border border-[#333] p-2 rounded-lg text-[#44D62C]">
                {icon}
            </div>
            {highlight && (
                <div className="absolute top-4 left-4 z-20 bg-[#44D62C] text-black text-[10px] font-bold px-2 py-1 rounded uppercase">
                    Destaque IA
                </div>
            )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-white font-mono group-hover:text-[#44D62C] transition-colors">{title}</h3>
                <span className="text-xs text-[#888] font-bold uppercase tracking-wider">{subtitle}</span>
            </div>
            <p className="text-[#AAA] text-sm leading-relaxed mb-6 flex-1">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {techs.map((t, i) => (
                    <span key={i} className="text-[10px] bg-[#1A1A1A] border border-[#333] px-2 py-1 rounded text-[#888] group-hover:border-[#44D62C]/30 transition-colors">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const TechDetailRow = ({ icon, title, desc, index }: { icon: React.ReactNode, title: string, desc: string, index: number }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#111] transition-colors border border-transparent hover:border-[#333] group">
        <div className="mt-1 text-[#44D62C] opacity-50 group-hover:opacity-100 transition-opacity">{icon}</div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#666]">#{index}</span>
                <h4 className="text-[#EEE] font-bold text-sm">{title}</h4>
            </div>
            <p className="text-[#888] text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

const IntegrationCard = ({ icon, title, items, color }: { icon: React.ReactNode, title: string, items: string[], color: string }) => (
    <div className="bg-[#111] p-6 rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all group">
        <div className={`mb-4 ${color}`}>{icon}</div>
        <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#AAA]">
                    <div className={`w-1 h-1 rounded-full bg-current ${color}`}></div>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default CoursesOverview;