import React, { useEffect } from 'react';
import { X, ShoppingBag, Map, MessageCircle, Layers, Star, Navigation, Camera, Smartphone, Box, Grid, Search, Brain, ScanFace, Share2, ShieldCheck, Globe, Target, Zap, Layout } from 'lucide-react';

interface Gy44CaseStudyProps {
  onClose: () => void;
}

const Gy44CaseStudy: React.FC<Gy44CaseStudyProps> = ({ onClose }) => {
  // Add ESC key listener to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors
  // Primary Pink: #EF4B81
  // Background: #0F0F0F
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#0F0F0F] overflow-y-auto font-sans selection:bg-[#EF4B81] selection:text-[#FFF]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#EF4B81]/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-[#EF4B81] p-1 rounded-sm rotate-45">
                <Grid size={20} className="text-white -rotate-45" />
            </div>
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-widest">44<span className="text-[#EF4B81]">GYN</span></div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-[#1A1A1A] text-[#EF4B81] hover:bg-[#EF4B81] hover:text-[#FFF] transition-all border border-[#EF4B81]/30"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[60vh] relative">
          {/* Background Gradient Pattern */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#EF4B81]/20 to-transparent rounded-full blur-[100px] -z-10"></div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-[#EF4B81] text-[#EF4B81] rounded text-xs font-mono uppercase tracking-widest bg-[#EF4B81]/5">
              Revolução da Moda
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              O Início de uma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4B81] to-[#F4364C]">Revolução</span>
            </h1>
            <p className="text-[#AAAAAA] text-lg max-w-xl leading-relaxed">
              A organização completa da 44. Facilitamos a localização das lojas e a visualização dos produtos, conectando o maior polo de moda do Centro-Oeste ao mundo digital.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <TagPill icon={<ShoppingBag size={14} />} label="Marketplace" />
               <TagPill icon={<Globe size={14} />} label="Moda Global" />
               <TagPill icon={<Zap size={14} />} label="Inovação" />
            </div>
          </div>
          
          <div className="relative h-[500px] bg-[#1A1A1A] rounded-[3rem] border border-[#EF4B81]/30 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(239,75,129,0.2)] group">
             {/* Visual Representation of Virtual Showcase */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>
             
             <div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 transform group-hover:scale-105 transition-transform duration-500">
                <Smartphone className="text-[#EF4B81] mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-2">Vitrine Digital</h3>
                <p className="text-sm text-gray-300">Conectando milhares de produtos <br/> a milhões de compradores.</p>
             </div>
          </div>
        </div>

        {/* SECTION 1: STRATEGIC ANALYSIS (Market, Segment, Niche) */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-[#333] flex-1"></div>
                <h2 className="text-3xl font-bold text-[#F7F7F7] text-center font-mono uppercase tracking-wider">Análise Estratégica</h2>
                <div className="h-px bg-[#333] flex-1"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Market Card */}
                <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#EF4B81] transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Globe size={100} /></div>
                    <h3 className="text-[#EF4B81] font-mono font-bold text-lg mb-4 flex items-center gap-2">
                        <Globe size={18} /> Mercado
                    </h3>
                    <p className="text-[#CCC] text-sm leading-relaxed">
                        A indústria da moda em geral. Inclui roupas, sapatos, acessórios e produtos de beleza. O foco é oferecer uma plataforma centralizada para consumidores encontrarem variedade de múltiplos vendedores.
                    </p>
                </div>

                {/* Segment Card */}
                <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#EF4B81] transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Target size={100} /></div>
                    <h3 className="text-[#EF4B81] font-mono font-bold text-lg mb-4 flex items-center gap-2">
                        <Target size={18} /> Segmento
                    </h3>
                    <p className="text-[#CCC] text-sm leading-relaxed">
                        Conexão B2B e B2C. Consumidores que buscam moda online e vendedores que desejam exposição. O 44GYN atua como a plataforma intermediária vital entre esses dois grupos.
                    </p>
                </div>

                {/* Niche Card */}
                <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#EF4B81] transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={100} /></div>
                    <h3 className="text-[#EF4B81] font-mono font-bold text-lg mb-4 flex items-center gap-2">
                        <Layers size={18} /> Nicho
                    </h3>
                    <p className="text-[#CCC] text-sm leading-relaxed">
                        Especialização geográfica com espectro amplo de produtos. De roupas de baixo custo a itens de grife locais, abrangendo todo o ecossistema da região da 44.
                    </p>
                </div>
            </div>
        </div>

        {/* SECTION 2: CORPORATE IDENTITY (Mission, Vision, Values) */}
        <div className="mb-32 bg-[#151515] rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-[#333]">
             {/* Decor */}
             <div className="absolute -left-20 top-1/2 w-96 h-96 bg-[#EF4B81]/10 rounded-full blur-[120px]"></div>

             <div className="relative z-10 grid gap-16">
                
                {/* Mission */}
                <div className="flex flex-col md:flex-row gap-8 items-start border-b border-[#333] pb-12">
                    <div className="w-16 h-16 bg-[#EF4B81] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-[0_0_20px_rgba(239,75,129,0.4)]">
                        M
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Missão</h3>
                        <p className="text-[#AAAAAA] text-lg leading-relaxed">
                            Oferecer um espaço online para que diversos vendedores possam expor e vender seus produtos. Facilitar o acesso dos consumidores a uma ampla variedade de itens, oferecendo uma plataforma centralizada com serviços adicionais como recomendações e avaliações.
                        </p>
                    </div>
                </div>

                {/* Vision */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 text-[#0F0F0F] font-bold text-2xl shadow-lg">
                        V
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Visão de Futuro</h3>
                        <p className="text-[#AAAAAA] text-lg leading-relaxed">
                            Tornar-se um hub de inovação tecnológica na moda. Utilizar Realidade Aumentada (AR) e Inteligência Artificial (IA) para experiências de compra personalizadas, promovendo também a sustentabilidade e a produção ética.
                        </p>
                    </div>
                </div>

             </div>
        </div>

        {/* SECTION 3: TECHNOLOGY & INNOVATION (Values) */}
        <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-[#F7F7F7] mb-12 text-center font-mono">Pilares Tecnológicos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TechCard 
                    icon={<Brain size={32} />}
                    title="Inteligência Artificial"
                    desc="Algoritmos que oferecem recomendações personalizadas baseadas em interesses e compras anteriores. Insights valiosos para vendedores."
                />
                <TechCard 
                    icon={<ScanFace size={32} />}
                    title="Realidade Aumentada"
                    desc="Provador virtual. Permite que consumidores experimentem produtos digitalmente antes da compra, reduzindo devoluções."
                />
                <TechCard 
                    icon={<MessageCircle size={32} />}
                    title="Chatbots Inteligentes"
                    desc="Suporte ao cliente 24/7. Respostas imediatas sobre estoque, tamanhos e envio, melhorando a conversão."
                />
                <TechCard 
                    icon={<Share2 size={32} />}
                    title="Integração Social"
                    desc="Conexão profunda com Instagram e TikTok para compartilhamento de looks e recomendações de influenciadores."
                />
                <TechCard 
                    icon={<ShieldCheck size={32} />}
                    title="Pagamentos Seguros"
                    desc="Proteção financeira total com criptografia de ponta a ponta e gateways de pagamento robustos."
                />
                <TechCard 
                    icon={<Layout size={32} />}
                    title="Design System"
                    desc="Interface fluida e consistente baseada em princípios modernos de UX/UI para facilitar a navegação."
                />
            </div>
        </div>

        {/* SECTION 4: VISION BOARD (Visual References) */}
        <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#F7F7F7]">Vision Board & Mood</h2>
                <span className="text-[#EF4B81] font-mono text-sm">Ref: Lez a Lez Callsheet</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
                {/* Simulated Moodboard Images */}
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Fashion Editorial" />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-black text-xs font-bold uppercase tracking-widest">Editorial</div>
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Texture" />
                    <div className="absolute inset-0 bg-[#EF4B81]/40 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Model" />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden relative bg-[#EF4B81] flex items-center justify-center p-6 text-center group">
                    <div>
                        <p className="text-white font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Emoção Desejada</p>
                        <h3 className="text-white text-2xl md:text-3xl font-bold font-serif italic">"Sofisticação Acessível"</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#333] pt-12">
            <p className="text-[#888] font-mono mb-4">44GYN Marketplace - Desenvolvido por Fábio Lucas</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#EF4B81] text-[#FFF] font-bold rounded hover:bg-[#F4364C] transition-colors shadow-[0_0_20px_rgba(239,75,129,0.4)]"
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

const TagPill = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333] rounded-full text-[#AAAAAA] text-xs">
        {icon}
        <span>{label}</span>
    </div>
);

const TechCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#EF4B81] hover:-translate-y-2 transition-all group">
        <div className="text-[#666] group-hover:text-[#EF4B81] mb-6 transition-colors">{icon}</div>
        <h4 className="text-xl font-bold text-[#F7F7F7] mb-3">{title}</h4>
        <p className="text-[#AAAAAA] text-sm leading-relaxed">{desc}</p>
    </div>
);

export default Gy44CaseStudy;