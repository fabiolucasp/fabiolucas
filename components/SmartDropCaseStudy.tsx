import CaseStatusNotice from './CaseStatusNotice';
import React, { useEffect } from 'react';
import { X, ShoppingBag, RefreshCw, CreditCard, Video, Search, Globe, TrendingUp, Truck, ShieldCheck, Server, AlertTriangle, MonitorPlay } from 'lucide-react';

interface SmartDropCaseStudyProps {
  onClose: () => void;
}

const SmartDropCaseStudy: React.FC<SmartDropCaseStudyProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors for SmartDrop
  // Primary Purple: #8B5CF6
  // Secondary Dark: #0F0F12
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#0F0F12] overflow-y-auto font-sans selection:bg-[#8B5CF6] selection:text-[#FFF]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#0F0F12]/90 backdrop-blur-md border-b border-[#8B5CF6]/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-wide">Smart<span className="text-[#8B5CF6]">Drop</span></div>
        </div>
        <button 
          aria-label="Fechar case SmartDrop"
          onClick={onClose}
          className="p-2 rounded-full bg-[#1A1A1E] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-[#FFF] transition-all border border-[#8B5CF6]/30"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        <CaseStatusNotice name="SmartDrop" />
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[60vh]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-[#8B5CF6] text-[#8B5CF6] rounded-full text-xs font-mono uppercase tracking-widest bg-[#8B5CF6]/10">
              Dropshipping Tech
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              O Melhor do Mundo <br />
              <span className="text-[#8B5CF6]">Parcelado em 12x</span>
            </h1>
            <p className="text-[#AAAAAA] text-lg max-w-xl leading-relaxed">
              Um aplicativo de Dropshipping transparente. Unimos a facilidade do pagamento nacional com a variedade internacional, alimentado por um motor de atualização diária via Cloud Functions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <FeatureTag icon={<CreditCard size={14} />} label="Parcelamento Internacional" />
               <FeatureTag icon={<RefreshCw size={14} />} label="Scraper Diário" />
               <FeatureTag icon={<Video size={14} />} label="Review Commerce" />
            </div>
          </div>
          
          <div className="relative h-[500px] bg-[#1A1A1E] rounded-[3rem] border-4 border-[#1A1A1E] flex items-center justify-center overflow-hidden group shadow-[0_0_60px_rgba(139,92,246,0.2)]">
             {/* Abstract Visualization of Scraper */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             {/* Phone Mockup */}
             <div className="relative w-[280px] h-[550px] bg-black rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl z-10">
                 {/* App Content */}
                 <div className="w-full h-full bg-[#111] flex flex-col">
                     {/* Product Page Header */}
                     <div className="h-48 bg-gray-800 relative">
                         <img src="https://images.unsplash.com/photo-1517330375806-359f274217be?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                         <div className="absolute top-4 left-4 bg-black/50 p-2 rounded-full"><X size={16} className="text-white"/></div>
                     </div>
                     <div className="p-4 flex-1">
                         <div className="flex justify-between items-start mb-2">
                             <h3 className="text-white font-bold text-lg leading-tight">MacBook Pro M2 - 16GB</h3>
                             <div className="bg-[#8B5CF6] px-2 py-1 rounded text-xs text-black font-bold">-20%</div>
                         </div>
                         <p className="text-[#888] text-xs mb-4 line-through">R$ 12.000,00</p>
                         <div className="text-[#8B5CF6] text-2xl font-bold mb-1">R$ 9.600,00</div>
                         <p className="text-white text-xs mb-6">ou 12x de R$ 800,00 sem juros</p>

                         {/* Shipping Info - Transparency */}
                         <div className="bg-[#1A1A1E] p-3 rounded-lg border border-[#333] mb-4 flex items-center gap-3">
                             <Truck className="text-[#8B5CF6]" size={20} />
                             <div>
                                 <p className="text-white text-xs font-bold">Envio Internacional</p>
                                 <p className="text-[#888] text-[10px]">Entrega estimada: 15 a 25 dias úteis</p>
                             </div>
                         </div>
                         
                         <button disabled title="Demonstração visual: ação indisponível nesta vitrine" className="w-full bg-[#8B5CF6] text-white py-3 rounded-xl font-bold shadow-lg shadow-purple-900/50">
                             Comprar Agora
                         </button>
                     </div>
                 </div>
             </div>

             {/* Floating Badge */}
             <div className="absolute bottom-10 -right-10 bg-[#1A1A1E] border border-[#333] p-4 rounded-2xl shadow-xl transform rotate-[-6deg] z-20">
                 <div className="flex items-center gap-2 mb-1">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-xs text-green-500 font-mono font-bold">UPDATED TODAY</span>
                 </div>
                 <div className="text-white font-bold text-sm">Preço Atualizado via Script</div>
             </div>
          </div>
        </div>

        {/* SECTION 1: ARCHITECTURE (FUTURE vs STREAM) */}
        <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-12 text-center font-mono">Decisões de Arquitetura</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Architecture Choice 1 */}
                <div className="bg-[#1A1A1E] p-8 rounded-3xl border border-[#333] hover:border-[#8B5CF6] transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#8B5CF6]/10 rounded-xl text-[#8B5CF6]">
                            <Server size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">FutureBuilder vs StreamBuilder</h3>
                    </div>
                    <p className="text-[#AAAAAA] leading-relaxed mb-4">
                        Para um checkout seguro, a estabilidade dos dados é crucial. Optou-se por <strong>FutureBuilder</strong> para buscar snapshots dos produtos.
                    </p>
                    <div className="bg-[#0F0F12] p-4 rounded-xl border-l-4 border-red-500">
                        <h4 className="text-red-400 font-bold text-sm mb-1">Por que não Stream?</h4>
                        <p className="text-[#666] text-xs">
                            Em um stream em tempo real, se o preço mudar no banco de dados enquanto o usuário digita o cartão, o checkout quebraria ou cobraria o valor errado. O Future garante o preço da sessão.
                        </p>
                    </div>
                </div>

                {/* Architecture Choice 2 */}
                <div className="bg-[#1A1A1E] p-8 rounded-3xl border border-[#333] hover:border-[#8B5CF6] transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#8B5CF6]/10 rounded-xl text-[#8B5CF6]">
                            <RefreshCw size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Cloud Functions Crawler</h3>
                    </div>
                    <p className="text-[#AAAAAA] leading-relaxed mb-4">
                        Um script automatizado (Cron Job) roda diariamente nos servidores do Google. Ele navega pelos sites dos fornecedores, extrai preços, descrições e estoque atualizado.
                    </p>
                    <div className="bg-[#0F0F12] p-4 rounded-xl border border-[#333] font-mono text-xs text-gray-400">
                        <span className="text-purple-400">exports</span>.updateProducts = functions.pubsub<br/>
                        .schedule(<span className="text-green-400">'every 24 hours'</span>)<br/>
                        .onRun(<span className="text-blue-400">async</span> (context) ={'>'} {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-blue-400">await</span> scraper.syncAll();<br/>
                        {'}'});
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 2: BUSINESS MODEL (DIFFERENTIATOR) */}
        <div className="mb-32 bg-[#1A1A1E] rounded-[3rem] p-8 md:p-16 border border-[#333] relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

             <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 rounded text-xs font-bold uppercase tracking-widest">
                            O Grande Diferencial
                        </div>
                        <h2 className="text-4xl font-bold text-white">Parcelamento Nacional em Produtos Globais</h2>
                        <p className="text-[#AAA] text-lg leading-relaxed">
                            Sites chineses geralmente exigem pagamento à vista ou cobram juros altos. O SmartDrop atua como intermediário financeiro.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CreditCard className="text-[#8B5CF6] mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Processamento Local</h4>
                                    <p className="text-[#888] text-sm">Utilizamos gateways como Pagar.me para oferecer até 12x no cartão brasileiro.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="text-[#8B5CF6] mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Transparência de Drop</h4>
                                    <p className="text-[#888] text-sm">Deixamos explícito: "Produto importado. Tempo de entrega: 15-25 dias". Sem surpresas para o cliente.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Visual Card */}
                    <div className="w-full md:w-1/3 bg-[#0F0F12] p-8 rounded-2xl border border-[#333] shadow-2xl relative">
                        <div className="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-2 rounded-lg transform rotate-6 shadow-lg">
                            APROVADO
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-[#AAA] uppercase text-xs tracking-widest mb-2">Simulação de Parcela</h3>
                            <div className="text-4xl font-bold text-white">12x R$ 249,90</div>
                            <div className="text-[#888] text-xs mt-1">Total: R$ 2.998,80</div>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden mb-2">
                            <div className="h-full w-full bg-[#8B5CF6]"></div>
                        </div>
                        <p className="text-center text-[10px] text-[#666]">Processando pagamento...</p>
                    </div>
                </div>
             </div>
        </div>

        {/* SECTION 3: CONTENT STRATEGY & DISCOVERY */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-12 text-center font-mono">Estratégia de Mercado</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                {/* Strategy 1 */}
                <div className="bg-[#1A1A1E] p-6 rounded-2xl border border-[#333] group hover:-translate-y-2 transition-transform">
                    <div className="w-12 h-12 bg-[#0F0F12] rounded-full flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">
                        <Search size={24} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Shopee & AvantPro</h3>
                    <p className="text-[#888] text-sm leading-relaxed">
                        Utilizamos a Shopee como ferramenta de descoberta (tráfego orgânico) e a AvantPro para minerar estatísticas. Identificamos os "winners" e importamos para o app.
                    </p>
                </div>

                {/* Strategy 2 */}
                <div className="bg-[#1A1A1E] p-6 rounded-2xl border border-[#333] group hover:-translate-y-2 transition-transform">
                    <div className="w-12 h-12 bg-[#0F0F12] rounded-full flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">
                        <Video size={24} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Review Commerce</h3>
                    <p className="text-[#888] text-sm leading-relaxed">
                        Compra de notebooks e gadgets para produção de Reviews no YouTube/TikTok. O link na descrição leva direto para o checkout do app (Tráfego Qualificado).
                    </p>
                </div>

                {/* Strategy 3 */}
                <div className="bg-[#1A1A1E] p-6 rounded-2xl border border-[#333] group hover:-translate-y-2 transition-transform">
                    <div className="w-12 h-12 bg-[#0F0F12] rounded-full flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Ads em Bestsellers</h3>
                    <p className="text-[#888] text-sm leading-relaxed">
                        Após validar o produto organicamente, criamos criativos específicos e rodamos tráfego pago focado apenas nos itens campeões de vendas.
                    </p>
                </div>
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#333] pt-12">
            <p className="text-[#888] font-mono mb-4">SmartDrop - Desenvolvido por Fábio Lucas</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#8B5CF6] text-[#FFF] font-bold rounded hover:bg-[#7c4dff] transition-colors shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                    Fechar Case Study
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

// Sub-components

const FeatureTag = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1E] border border-[#333] rounded-full text-[#AAAAAA] text-xs hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors cursor-default">
        {icon}
        <span>{label}</span>
    </div>
);

export default SmartDropCaseStudy;