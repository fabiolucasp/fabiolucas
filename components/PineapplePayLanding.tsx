import CaseStatusNotice from './CaseStatusNotice';
import SectionLink from './SectionLink';
import React from 'react';
import { motion } from 'framer-motion';
import { Store, UserPlus, ShoppingCart, Receipt, Gift, Trophy, ArrowRight, Smartphone, Building2, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const PineapplePayLanding: React.FC = () => {
  return (
    <div className="bg-[#101820] min-h-screen font-opensans text-white selection:bg-[#E91482] selection:text-white">
      
      {/* STICKY HEADER */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101820]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
                {/* Logo Abstrato Abacaxi */}
                <div className="relative w-8 h-8">
                    <div className="absolute bottom-0 w-8 h-5 bg-[#FFAB00] rounded-b-full"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00B54B] rounded-t-full"></div>
                </div>
                <div className="text-white font-ubuntu font-bold text-xl tracking-tight">
                    Pineapple <span className="text-[#FFAB00]">Pay</span>
                </div>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                <SectionLink id="como-funciona" className="hover:text-[#FFAB00] transition-colors">Como Funciona</SectionLink>
                <SectionLink id="b2b" className="hover:text-[#00B54B] transition-colors">Para Lojistas</SectionLink>
                <SectionLink id="b2c" className="hover:text-[#E91482] transition-colors">Para Padrinhos</SectionLink>
            </div>
            <button disabled title="Acesso indisponível nesta apresentação" className="bg-[#E91482] hover:bg-[#C2185B] text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-[#E91482]/20 font-ubuntu">
                Acesso indisponível
            </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFAB00]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E91482]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10">
            <CaseStatusNotice name="PineapplePay" />
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[#FFAB00] font-bold text-xs uppercase tracking-widest mb-6"
            >
                <Trophy size={14} /> Cashback Universitário
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight font-ubuntu mb-6"
            >
                Uma proposta para <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAB00] via-[#E91482] to-[#FFAB00]">conectar compras e educação!</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
            >
                Transforme suas compras do dia a dia em sonhos realizados. Conceito de aplicativo que propõe aproximar comércio local e apoio à formação universitária.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <StoreButton store="apple" />
                <StoreButton store="google" />
            </motion.div>
        </div>
      </section>

      {/* SPLIT SECTION: B2B & B2C */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
            
            {/* B2B Card - Comerciantes */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="b2b"
                className="bg-[#00B54B]/10 border border-[#00B54B]/30 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-[#00B54B]/20 transition-colors"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 text-[#00B54B] group-hover:scale-110 transition-transform duration-500">
                    <Store size={150} />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#00B54B] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#00B54B]/30">
                        <Building2 size={24} />
                    </div>
                    <h2 className="text-3xl font-bold font-ubuntu text-white mb-4">Pro seu Negócio</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Pare de gastar com panfletos que vão para o lixo. No Pineapple Pay, você faz <strong>Marketing Pré-Pago</strong>.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-1 text-[#00B54B]"><ArrowRight size={16} /></div>
                            <span>Você só dá o desconto se o cliente comprar.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-1 text-[#00B54B]"><ArrowRight size={16} /></div>
                            <span>Fidelize milhares de estudantes e suas famílias.</span>
                        </li>
                    </ul>
                    <button disabled title="Acesso indisponível nesta apresentação" className="text-[#00B54B] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all">
                        Cadastrar Empresa <ArrowRight size={16} />
                    </button>
                </div>
            </motion.div>

            {/* B2C Card - Padrinhos */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="b2c"
                className="bg-[#E91482]/10 border border-[#E91482]/30 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-[#E91482]/20 transition-colors"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 text-[#E91482] group-hover:scale-110 transition-transform duration-500">
                    <Heart size={150} />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#E91482] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#E91482]/30">
                        <UserPlus size={24} />
                    </div>
                    <h2 className="text-3xl font-bold font-ubuntu text-white mb-4">Pra você Padrinho</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Sabe aqueles R$ 2,00 de desconto que você nem percebe? Aqui eles viram um sonho realizado.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-1 text-[#E91482]"><ArrowRight size={16} /></div>
                            <span>Ajude um aluno a se formar sem gastar nada a mais.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-1 text-[#E91482]"><ArrowRight size={16} /></div>
                            <span>Concorra a prêmios incríveis (Carros, Iphones).</span>
                        </li>
                    </ul>
                    <button disabled title="Acesso indisponível nesta apresentação" className="text-[#E91482] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all">
                        Quero ser Padrinho <ArrowRight size={16} />
                    </button>
                </div>
            </motion.div>

        </div>
      </section>

      {/* INFOGRAPHIC SECTION (TIMELINE) */}
      <section id="como-funciona" className="py-24 bg-[#0A0F14] border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-ubuntu text-white mb-4">A Mágica do Cashback</h2>
                <p className="text-gray-400">Entenda como uma compra simples vira uma festa de formatura.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#1A2633] -translate-x-1/2"></div>

                {/* Steps */}
                <div className="space-y-12">
                    <TimelineItem 
                        step="1"
                        title="O Cadastro"
                        desc="Paulo baixa o app e se cadastra como 'Padrinho' do estudante Fábio."
                        icon={<UserPlus size={24} />}
                        color="bg-blue-500"
                        align="left"
                    />
                    <TimelineItem 
                        step="2"
                        title="A Compra"
                        desc="Paulo vai na Pizzaria Parceira e gasta R$ 54,00. Ele pede para pontuar no CPF."
                        icon={<ShoppingCart size={24} />}
                        color="bg-[#00B54B]"
                        align="right"
                    />
                    <TimelineItem 
                        step="3"
                        title="O Ticket"
                        desc="O sistema identifica a compra e gera um Ticket de R$ 2,20 (Cashback Negociado)."
                        icon={<Receipt size={24} />}
                        color="bg-[#FFAB00]"
                        align="left"
                    />
                    <TimelineItem 
                        step="4"
                        title="A Doação"
                        desc="Automaticamente, esses R$ 2,20 vão para o saldo da Turma do Fábio."
                        icon={<Gift size={24} />}
                        color="bg-[#E91482]"
                        align="right"
                    />
                    <TimelineItem 
                        step="5"
                        title="A Recompensa"
                        desc="Paulo sobe no Ranking de Padrinhos e ganha um cupom para o sorteio de um iPhone."
                        icon={<Trophy size={24} />}
                        color="bg-purple-500"
                        align="left"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080C10] py-16 border-t border-white/5 font-opensans">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="relative w-6 h-6">
                        <div className="absolute bottom-0 w-6 h-4 bg-[#FFAB00] rounded-b-full"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00B54B] rounded-t-full"></div>
                    </div>
                    <span className="text-white font-ubuntu font-bold text-lg">Pineapple Pay</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                    Cleimes, Azevedo e Novaes LTDA.<br/>
                    Apresentação conceitual. Dados empresariais e canais de atendimento não publicados nesta vitrine.
                </p>
                <div className="flex gap-4">
                    <SocialIcon color="#E91482" />
                    <SocialIcon color="#FFAB00" />
                    <SocialIcon color="#00B54B" />
                </div>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-6 font-ubuntu">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><span aria-disabled="true" title="Disponível em versão futura" className="hover:text-white transition-colors">Termos de Uso</span></li>
                    <li><span aria-disabled="true" title="Disponível em versão futura" className="hover:text-white transition-colors">Privacidade</span></li>
                    <li><span aria-disabled="true" title="Disponível em versão futura" className="hover:text-white transition-colors">Regulamento de Sorteios</span></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 font-ubuntu">Baixe Agora</h4>
                <div className="flex flex-col gap-3">
                    <StoreButton store="apple" small />
                    <StoreButton store="google" small />
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const TimelineItem = ({ step, title, desc, icon, color, align }: { step: string, title: string, desc: string, icon: React.ReactNode, color: string, align: 'left' | 'right' }) => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col md:flex-row items-center gap-8 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
        <div className={`flex-1 ${align === 'right' ? 'md:text-left' : 'md:text-right'} text-center`}>
            <h3 className="text-xl font-bold text-white font-ubuntu mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
        
        <div className="relative z-10 flex-shrink-0">
            <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center text-white shadow-xl border-4 border-[#101820] z-10 relative`}>
                {icon}
            </div>
            <div className="absolute -top-2 -right-2 bg-white text-[#101820] w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                {step}
            </div>
        </div>

        <div className="flex-1 hidden md:block"></div>
    </motion.div>
);

const StoreButton = ({ store, small }: { store: 'apple' | 'google', small?: boolean }) => {
    const isApple = store === 'apple';
    const padding = small ? 'px-4 py-2' : 'px-6 py-3';
    
    return (
      <button disabled title="Acesso indisponível nesta apresentação" className={`flex items-center justify-center gap-3 ${padding} bg-white hover:bg-gray-200 text-[#101820] rounded-xl transition-transform hover:-translate-y-1 active:scale-95 shadow-lg group relative overflow-hidden`}>
        {isApple ? (
          <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
             <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 98.6 126.7 25.8 0 32.2-19.1 75.5-19.1 42.9 0 49.3 19.1 75.9 19.1 50.7 0 85.9-92.3 97.4-126.3-43.6-15.6-70.4-53.5-70.4-90.4zm-64.3-157c19.5-22.1 33-53 28-82.9-29.2 1.4-60.7 20.2-80.1 44.2-16.7 20.7-32.2 53-27.4 82.5 31.8 2.3 61.8-22 79.5-43.8z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
             <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
          </svg>
        )}
        <div className="text-left relative z-10">
          <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 font-sans">
            {isApple ? 'Download on the' : 'GET IT ON'}
          </div>
          <div className="text-sm font-bold font-sans leading-none">
            {isApple ? 'App Store' : 'Google Play'}
          </div>
        </div>
      </button>
    );
  };

const SocialIcon = ({ color }: { color: string }) => (
    <div 
        className="w-10 h-10 rounded-full bg-[#1A2633] flex items-center justify-center cursor-pointer hover:bg-white transition-colors group"
    >
        <div style={{ backgroundColor: color }} className="w-4 h-4 rounded-sm"></div>
    </div>
);

export default PineapplePayLanding;