import React, { useEffect } from 'react';
import { X, Smartphone, Globe, Laptop, Database, Map, FileSignature, MessageSquare, Zap, Link, Navigation, ShieldCheck, Code, Layers, Clock, Brain, TrendingUp, AlertTriangle, Users, Target, Megaphone, Lock, Unlock, BarChart3, CheckCircle2 } from 'lucide-react';

interface ConperCaseStudyProps {
  onClose: () => void;
}

const ConperCaseStudy: React.FC<ConperCaseStudyProps> = ({ onClose }) => {
  // Add ESC key listener to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors for CONPER
  // Primary Gold: #C5A47E
  // Background Dark: #0F1218
  // Card Dark: #1A202C
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#0F1218] overflow-y-auto font-sans selection:bg-[#C5A47E] selection:text-[#000]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#0F1218]/90 backdrop-blur-md border-b border-[#C5A47E]/20 px-6 py-4 flex justify-between items-center">
        <div className="text-[#C5A47E] font-mono font-bold text-xl tracking-widest">CONPER</div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-[#1A202C] text-[#C5A47E] hover:bg-[#C5A47E] hover:text-[#000] transition-all border border-[#C5A47E]/30"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[70vh]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-[#C5A47E] text-[#C5A47E] rounded text-xs font-mono uppercase tracking-widest">
              Plano Estratégico
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              O Cérebro <br />
              <span className="text-[#C5A47E]">Digital</span>
            </h1>
            <p className="text-[#AAAAAA] text-lg max-w-xl leading-relaxed">
              Transformando o escritório em um organismo vivo e autônomo. Uma solução completa para gestão, automação de contratos e expansão de faturamento.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <PlatformBadge icon={<Brain size={16} />} name="Inteligência Artificial" />
               <PlatformBadge icon={<TrendingUp size={16} />} name="Alto Faturamento" />
               <PlatformBadge icon={<ShieldCheck size={16} />} name="Automação Total" />
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] bg-[#1A202C] rounded-[3rem] border border-[#C5A47E]/20 p-8 flex items-center justify-center overflow-hidden group shadow-[0_0_50px_rgba(197,164,126,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,164,126,0.1),transparent_70%)]"></div>
            
            {/* Visual Abstract Dashboard */}
            <div className="w-full max-w-md space-y-4 relative z-10 transform transition-transform duration-700 group-hover:scale-105">
                {/* Alert Card */}
                <div className="bg-[#0F1218] p-4 rounded-xl border-l-4 border-[#FF4444] shadow-lg flex items-center gap-4">
                    <div className="p-2 bg-[#FF4444]/10 rounded-full text-[#FF4444]"><AlertTriangle size={24} /></div>
                    <div>
                        <div className="text-[#DDD] font-bold text-sm">Alerta de Despesa</div>
                        <div className="text-[#888] text-xs">Custo operacional 15% acima da meta.</div>
                    </div>
                </div>
                {/* Profit Card */}
                <div className="bg-[#0F1218] p-4 rounded-xl border-l-4 border-[#C5A47E] shadow-lg flex items-center gap-4">
                    <div className="p-2 bg-[#C5A47E]/10 rounded-full text-[#C5A47E]"><TrendingUp size={24} /></div>
                    <div>
                        <div className="text-[#DDD] font-bold text-sm">Previsão de Lucro</div>
                        <div className="text-[#C5A47E] font-bold text-xl">R$ 152.450,00</div>
                    </div>
                </div>
                 {/* Contract Card */}
                 <div className="bg-[#0F1218] p-4 rounded-xl border-l-4 border-[#44D62C] shadow-lg flex items-center gap-4">
                    <div className="p-2 bg-[#44D62C]/10 rounded-full text-[#44D62C]"><FileSignature size={24} /></div>
                    <div>
                        <div className="text-[#DDD] font-bold text-sm">Contratos Gerados</div>
                        <div className="text-[#888] text-xs">45 novos contratos hoje (Automático)</div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: THE ORGANISM METAPHOR */}
        <div className="mb-32 relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C5A47E]/30 to-transparent -translate-x-1/2 hidden md:block"></div>
             
             <div className="text-center mb-16 relative z-10 bg-[#0F1218] inline-block px-8 py-4 rounded-full left-1/2 -translate-x-1/2 border border-[#333]">
                <h2 className="text-2xl font-bold text-[#F7F7F7] font-mono">Filosofia do Sistema</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-right space-y-6">
                    <h3 className="text-3xl font-bold text-[#C5A47E]">O Organismo Vivo</h3>
                    <p className="text-[#AAAAAA] leading-relaxed">
                        Assim como o corpo humano depende de órgãos vitais funcionando em sincronia, um escritório de sucesso precisa que cada departamento opere com precisão cirúrgica.
                    </p>
                    <p className="text-[#AAAAAA] leading-relaxed">
                        O <strong className="text-[#F7F7F7]">ConPer</strong> atua como o Sistema Nervoso Central, monitorando a saúde de cada setor em tempo real e garantindo a sobrevivência e crescimento do organismo.
                    </p>
                </div>
                <div className="text-left space-y-6">
                    <div className="bg-[#1A202C] p-6 rounded-xl border border-[#C5A47E]/20">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-[#F7F7F7]">
                                <CheckCircle2 className="text-[#C5A47E]" /> Gestão Autônoma de Tarefas
                            </li>
                            <li className="flex items-center gap-3 text-[#F7F7F7]">
                                <CheckCircle2 className="text-[#C5A47E]" /> Monitoramento de Desempenho
                            </li>
                            <li className="flex items-center gap-3 text-[#F7F7F7]">
                                <CheckCircle2 className="text-[#C5A47E]" /> Correção Automática de Rotas
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>

        {/* SECTION 2: THE DASHBOARD (BRAIN) */}
        <div className="mb-32">
           <SectionTitle title="Painel de Controle M&P" subtitle="DASHBOARDS INTELIGENTES" />
           
           <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="col-span-1 md:col-span-2 bg-[#1A202C] rounded-2xl p-8 border border-[#333] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 size={120} /></div>
                 <h3 className="text-2xl font-bold text-[#F7F7F7] mb-2">Visão 360º</h3>
                 <p className="text-[#888] mb-6 max-w-md">
                    Visualize faturamento, despesas e lucro líquido em uma única tela. O sistema alerta automaticamente se as despesas ultrapassarem a porcentagem segura do faturamento.
                 </p>
                 <div className="flex gap-4">
                    <div className="px-4 py-2 bg-[#0F1218] rounded border border-[#C5A47E]/30 text-[#C5A47E] text-sm">Lucro Previsto</div>
                    <div className="px-4 py-2 bg-[#0F1218] rounded border border-[#FF4444]/30 text-[#FF4444] text-sm">Alerta de Gastos</div>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1A202C] rounded-2xl p-8 border border-[#333] flex flex-col justify-between">
                 <div>
                    <Users className="text-[#C5A47E] mb-4" size={32} />
                    <h3 className="text-xl font-bold text-[#F7F7F7]">Performance da Equipe</h3>
                    <p className="text-[#888] text-sm mt-2">
                        Ranking de desempenho individual. Saiba quem está entregando mais e quem precisa de suporte.
                    </p>
                 </div>
                 <div className="mt-6 w-full bg-[#0F1218] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#C5A47E] w-[85%] h-full"></div>
                 </div>
              </div>

              {/* Card 3 - AI */}
              <div className="bg-[#C5A47E] rounded-2xl p-8 text-[#0F1218] flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <Brain size={32} />
                    <span className="bg-[#0F1218]/10 px-2 py-1 rounded text-xs font-bold uppercase">IA Beta</span>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">Previsão Futura</h3>
                    <p className="text-[#0F1218]/80 text-sm font-medium">
                        "Com base no histórico atual, seu faturamento crescerá 22% no próximo trimestre."
                    </p>
                 </div>
              </div>

              {/* Card 4 - Satisfaction */}
              <div className="col-span-1 md:col-span-2 bg-[#1A202C] rounded-2xl p-8 border border-[#333]">
                 <div className="flex items-center gap-4 mb-4">
                    <Target className="text-[#C5A47E]" size={24} />
                    <h3 className="text-xl font-bold text-[#F7F7F7]">Índice de Satisfação (NPS)</h3>
                 </div>
                 <p className="text-[#888] mb-4">Monitoramento automático da felicidade do cliente após cada interação ou contrato finalizado.</p>
                 <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i <= 4 ? 'bg-[#C5A47E]' : 'bg-[#333]'}`}></div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* SECTION 3: CONTRACT AUTOMATION (MONETIZATION) */}
        <div className="mb-32 bg-[#1A202C] rounded-[3rem] p-8 md:p-16 border border-[#C5A47E]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C5A47E]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
                <SectionTitle title="Máquina de Monetização" subtitle="CONTRATOS PERSONALIZADOS" />
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <p className="text-[#F7F7F7] text-lg leading-relaxed">
                            Implementação de um motor de geração de contratos onde o cliente final pode personalizar cláusulas pré-aprovadas. Isso gera novas linhas de receita:
                        </p>
                        <ul className="space-y-4">
                            <MonetizationItem title="Criação de Contratos" desc="Taxa base para geração automática de documentos jurídicos." />
                            <MonetizationItem title="Taxa de Alteração" desc="Cobrança automática por cada cláusula personalizada ou revisão extra." />
                            <MonetizationItem title="Revisão Premium" desc="Upsell para revisão humana prioritária em até 2 horas." />
                        </ul>
                    </div>
                    
                    <div className="bg-[#0F1218] p-8 rounded-2xl border border-[#333] flex flex-col items-center justify-center text-center space-y-6">
                        <FileSignature size={64} className="text-[#C5A47E]" />
                        <h3 className="text-2xl font-bold text-[#F7F7F7]">DocuSign Connect</h3>
                        <p className="text-[#888]">
                            Assinatura digital com validade jurídica integrada. O contrato sai do app direto para o e-mail das partes.
                        </p>
                        <button className="px-8 py-3 bg-[#C5A47E] text-[#0F1218] font-bold rounded hover:bg-[#D4AF37] transition-colors w-full">
                            Ver Fluxo de Assinatura
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 4: GROWTH STRATEGY */}
        <div className="mb-32">
            <SectionTitle title="Plano de Expansão" subtitle="CAPTAÇÃO DE CLIENTES" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MarketingChannel 
                    icon={<Smartphone />} 
                    name="Instagram / TikTok" 
                    desc="Conteúdo viral com gatilhos de necessidade extrema." 
                />
                <MarketingChannel 
                    icon={<Globe />} 
                    name="Google Ads" 
                    desc="Captura de leads pesquisando por 'advogado trabalhista' ou 'contratos'." 
                />
                <MarketingChannel 
                    icon={<Megaphone />} 
                    name="Influencers" 
                    desc="Parcerias estratégicas para autoridade de marca." 
                />
                <MarketingChannel 
                    icon={<MessageSquare />} 
                    name="WhatsApp Bot" 
                    desc="Qualificação automática de leads 24/7." 
                />
            </div>
        </div>

        {/* SECTION 5: ROADMAP */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#F7F7F7] text-center mb-12 font-mono">Roadmap de Lançamento</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                {/* Line */}
                <div className="absolute left-1/2 top-0 bottom-0 md:top-1/2 md:left-0 md:right-0 w-1 md:w-full h-full md:h-1 bg-[#333] -z-10"></div>
                
                <RoadmapStep 
                    status="completed" 
                    title="MVP" 
                    desc="Estrutura base e banco de dados." 
                />
                <RoadmapStep 
                    status="active" 
                    title="Close Beta" 
                    desc="Testes internos com equipe e parceiros selecionados." 
                />
                <RoadmapStep 
                    status="upcoming" 
                    title="Open Beta" 
                    desc="Abertura para lista de espera e primeiros clientes pagantes." 
                />
                <RoadmapStep 
                    status="upcoming" 
                    title="Public Launch" 
                    desc="Marketing agressivo e escala nacional." 
                />
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#333] pt-12">
            <p className="text-[#888] font-mono mb-4">Projeto estratégico desenvolvido por Fábio Lucas Dev</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#C5A47E] text-[#0F1218] font-bold rounded hover:bg-[#D4AF37] transition-colors"
                >
                    Fechar Apresentação
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

// Sub-components

const PlatformBadge = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#1A202C] border border-[#333] rounded-full text-[#AAAAAA] text-sm hover:border-[#C5A47E] hover:text-[#C5A47E] transition-colors cursor-default">
        {icon}
        <span>{name}</span>
    </div>
);

const StatCard = ({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) => (
    <div className="bg-[#1A202C] p-8 rounded-xl border-l-4 border-[#C5A47E] hover:translate-y-[-5px] transition-transform">
        <div className="flex justify-between items-start mb-4">
            <div className="text-4xl font-bold text-[#F7F7F7] font-mono">{number}</div>
            <div className="p-3 bg-[#0F1218] rounded-lg">{icon}</div>
        </div>
        <div className="text-[#888] uppercase tracking-wider text-sm font-semibold">{label}</div>
    </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-12">
        <span className="text-[#C5A47E] font-mono text-sm tracking-widest uppercase mb-2 block">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7]">{title}</h2>
    </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="bg-[#1A202C] p-6 rounded-xl border border-[#333] hover:border-[#C5A47E]/50 group transition-all">
        <div className="text-[#888] group-hover:text-[#C5A47E] mb-4 transition-colors">{icon}</div>
        <h4 className="text-xl font-bold text-[#F7F7F7] mb-3">{title}</h4>
        <p className="text-[#AAAAAA] text-sm leading-relaxed">{desc}</p>
    </div>
);

const MonetizationItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex gap-4 items-start p-4 bg-[#0F1218] rounded-lg border border-[#333]">
        <div className="mt-1 text-[#C5A47E]"><Lock size={20} /></div>
        <div>
            <h4 className="text-[#F7F7F7] font-bold">{title}</h4>
            <p className="text-[#888] text-sm">{desc}</p>
        </div>
    </div>
);

const MarketingChannel = ({ icon, name, desc }: { icon: React.ReactNode, name: string, desc: string }) => (
    <div className="bg-[#1A202C] p-6 rounded-xl border border-[#333] hover:border-[#C5A47E] transition-all text-center group">
        <div className="mx-auto w-12 h-12 bg-[#0F1218] rounded-full flex items-center justify-center text-[#888] group-hover:text-[#C5A47E] mb-4 transition-colors">
            {icon}
        </div>
        <h4 className="text-[#F7F7F7] font-bold mb-2">{name}</h4>
        <p className="text-[#888] text-xs">{desc}</p>
    </div>
);

const RoadmapStep = ({ status, title, desc }: { status: 'completed' | 'active' | 'upcoming', title: string, desc: string }) => {
    let colorClass = "bg-[#333] border-[#555] text-[#888]";
    let icon = <Lock size={16} />;
    
    if (status === 'completed') {
        colorClass = "bg-[#C5A47E] border-[#C5A47E] text-[#0F1218]";
        icon = <CheckCircle2 size={16} />;
    } else if (status === 'active') {
        colorClass = "bg-[#0F1218] border-[#C5A47E] text-[#C5A47E] shadow-[0_0_15px_rgba(197,164,126,0.3)]";
        icon = <Unlock size={16} />;
    }

    return (
        <div className={`relative z-10 p-6 rounded-xl border-2 w-full md:w-64 text-center ${colorClass}`}>
            <div className="flex justify-center mb-2">{icon}</div>
            <h4 className="font-bold font-mono uppercase tracking-wider mb-2">{title}</h4>
            <p className="text-xs opacity-80">{desc}</p>
        </div>
    );
};

export default ConperCaseStudy;