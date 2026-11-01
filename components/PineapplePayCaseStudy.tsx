import React, { useEffect, useState } from 'react';
import { X, Smartphone, CreditCard, Ticket, MapPin, Gift, PieChart, Wallet, ShoppingBag, ArrowRight, User, Bell, ShieldAlert, Crown, Users, Plane, Anchor, Building2, Lock, LayoutDashboard, FileText, Receipt, UserCheck, BarChart3, Settings, Key, CheckCircle, Database, Globe, Trophy, Store, Heart, UserPlus, ShoppingCart, Eye, EyeOff, ArrowUp, ArrowDown, Calendar, PlusCircle, Percent, MoreVertical, BarChart2, Layers, Search, Pin, Tag, Package, Plus, Megaphone, Star, ListOrdered, Target, School, Landmark, PartyPopper, AlertTriangle, TrendingDown, DollarSign, Power, Activity, Sliders, FileCode, Shield, Download, RefreshCw, ShieldCheck, Send, Filter, UserCog, Ban, History, FileSignature, Laptop, Radio, CheckSquare, ServerCrash, Check, Menu, Image, ArrowLeft, Utensils, Share2, Layout } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PineapplePayCaseStudyProps {
  onClose: () => void;
}

const PineapplePayCaseStudy: React.FC<PineapplePayCaseStudyProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // State for Privacy Mode (Manager Dashboard)
  const [hideBalance, setHideBalance] = useState(false);

  // Theme Colors for Pineapple Pay
  // Primary Pink: #E91482
  // Secondary Yellow: #FFAB00
  // Secondary Green: #00C853
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#000000] overflow-y-auto font-sans selection:bg-[#E91482] selection:text-[#FFF]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#000000]/90 backdrop-blur-md border-b border-[#E91482]/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-wide">Pineapple<span className="text-[#E91482]">Pay</span></div>
        </div>
        <div className="flex gap-4">
            <NavLink 
                to="/pineapple-pay" 
                target="_blank"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#E91482]/10 text-[#E91482] rounded-full text-xs font-bold hover:bg-[#E91482] hover:text-white transition-colors"
            >
                <Globe size={14} /> Ver Landing Page Full
            </NavLink>
            <button 
            onClick={onClose}
            className="p-2 rounded-full bg-[#1A1A1A] text-[#E91482] hover:bg-[#E91482] hover:text-[#FFF] transition-all border border-[#E91482]/30"
            >
            <X size={24} />
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        
        {/* HERO SECTION (CASE STUDY CONTEXT) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[60vh]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-[#E91482] text-[#E91482] rounded-full text-xs font-mono uppercase tracking-widest bg-[#E91482]/10">
              Formaturas & Cashback
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              A Revolução das <br />
              <span className="text-[#E91482]">Festas Universitárias</span>
            </h1>
            <p className="text-[#AAAAAA] text-lg max-w-xl leading-relaxed">
              O aplicativo definitivo para organizar formaturas épicas. Organizamos o dinheiro, evitamos fraudes e conectamos turmas a experiências de luxo através de um sistema robusto de cashback.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <FeatureTag icon={<Crown size={14} />} label="Formaturas de Luxo" />
               <FeatureTag icon={<ShieldAlert size={14} />} label="Anti-Fraude" />
               <FeatureTag icon={<Users size={14} />} label="13 Tipos de Usuários" />
            </div>
          </div>
          
          {/* Hero Visual - Dashboard Mockup */}
          <div className="relative h-[600px] flex justify-center items-center">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E91482]/20 rounded-full blur-[100px] -z-10"></div>
            
            {/* Phone Mockup - Dashboard */}
            <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-[8px] border-[#111] overflow-hidden shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-500 z-10">
                {/* Status Bar */}
                <div className="h-8 bg-[#E91482] flex justify-between items-center px-4 pt-2">
                    <span className="text-[10px] text-white font-bold">9:41</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
                
                {/* App Content */}
                <div className="flex-1 bg-[#F5F5F5] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-[#E91482] p-6 pb-12 rounded-b-[2rem] shadow-lg relative z-10">
                        <div className="flex justify-between items-center mb-6 text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                                    <User size={20} />
                                </div>
                                <span className="font-bold">Medicina UFGO - Turma XX</span>
                            </div>
                            <Bell size={20} />
                        </div>
                        <div className="text-white text-center">
                            <p className="text-xs opacity-80 uppercase tracking-widest mb-1">Fundo de Formatura</p>
                            <h2 className="text-3xl font-bold font-mono">R$ 1.250.000</h2>
                            <div className="inline-flex items-center gap-1 mt-2 bg-white/20 px-3 py-1 rounded-full text-[10px]">
                                <Lock size={10} />
                                <span>Cofre Seguro Ativado</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions (Floating) */}
                    <div className="px-6 -mt-6 relative z-20">
                        <div className="bg-white p-4 rounded-xl shadow-md flex justify-around">
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-10 h-10 bg-[#E91482]/10 rounded-full flex items-center justify-center text-[#E91482]">
                                    <ShoppingBag size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600">Lojas</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-10 h-10 bg-[#FFAB00]/10 rounded-full flex items-center justify-center text-[#FFAB00]">
                                    <Gift size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600">Sorteios</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-10 h-10 bg-[#00C853]/10 rounded-full flex items-center justify-center text-[#00C853]">
                                    <Wallet size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-600">Mensalidade</span>
                            </div>
                        </div>
                    </div>

                    {/* Partner Highlights */}
                    <div className="p-6">
                        <h3 className="font-bold text-gray-800 mb-3 text-sm">Parceiros Exclusivos</h3>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                             <div className="w-24 h-24 bg-black rounded-xl flex-shrink-0 relative overflow-hidden">
                                 <img src="https://images.unsplash.com/photo-1569263979104-865ab7dd8d36?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                                 <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold">Yachts</span>
                             </div>
                             <div className="w-24 h-24 bg-black rounded-xl flex-shrink-0 relative overflow-hidden">
                                 <img src="https://images.unsplash.com/photo-1540962351504-03099e0a7782?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                                 <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold">Helicópteros</span>
                             </div>
                        </div>
                    </div>

                    {/* Voting Queue */}
                    <div className="flex-1 bg-white rounded-t-[2rem] p-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center mb-4">
                             <h4 className="font-bold text-gray-800">Aprovações Pendentes</h4>
                             <span className="text-[10px] bg-red-100 text-red-500 px-2 py-1 rounded-full">3 Votos</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <p className="text-xs font-bold text-gray-800">Contrato: Buffet Premium</p>
                                    <p className="text-[10px] text-gray-500">Enviado por: Cerimonial</p>
                                </div>
                                <button className="text-[10px] bg-[#00C853] text-white px-3 py-1 rounded">Votar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: THE PROBLEM (SECURITY & ORGANIZATION) */}
        <div className="mb-32">
            <div className="bg-[#111] border border-[#333] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div>
                         <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#FF4444]/20 p-2 rounded-lg text-[#FF4444]"><ShieldAlert size={28} /></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F7F7F7]">Fim dos Golpes em Formaturas</h3>
                         </div>
                         <div className="space-y-4 text-[#AAAAAA] leading-relaxed">
                            <p>
                                Notícias sobre tesoureiros de turmas que somem com <strong>mais de R$ 1 milhão</strong> são infelizmente comuns. O problema não é falta de dinheiro, é falta de organização e segurança.
                            </p>
                            <p>
                                O PineapplePay elimina o acesso direto de um único aluno ao montante total. Todo o dinheiro é gerido pelo aplicativo com travas de segurança e transparência total.
                            </p>
                         </div>
                    </div>
                    
                    <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#333] flex flex-col gap-4">
                        <div className="flex items-center gap-4 bg-[#000] p-4 rounded-xl border border-[#333]">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <X size={20} />
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold">Modelo Tradicional</p>
                                <p className="text-[#666] text-xs">Dinheiro na conta PF do tesoureiro. Risco alto.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ArrowRight className="text-[#666] rotate-90" />
                        </div>
                        <div className="flex items-center gap-4 bg-[#000] p-4 rounded-xl border border-[#E91482]">
                            <div className="w-10 h-10 rounded-full bg-[#E91482]/20 flex items-center justify-center text-[#E91482]">
                                <Lock size={20} />
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold">Modelo PineapplePay</p>
                                <p className="text-[#666] text-xs">Cofre Digital, Multi-assinatura e Auditoria em Tempo Real.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- LANDING PAGE INTEGRATION START --- */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-[#333] flex-1"></div>
                <h2 className="text-2xl font-bold text-[#F7F7F7] text-center font-mono uppercase tracking-wider text-[#E91482]">Web Showcase: Landing Page</h2>
                <div className="h-px bg-[#333] flex-1"></div>
            </div>

            {/* Container da Landing Page embutido */}
            <div className="bg-[#101820] rounded-[3rem] overflow-hidden border border-[#333] relative">
                
                {/* LP: Header Section */}
                <section className="pt-20 pb-20 px-6 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFAB00]/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E91482]/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="container mx-auto relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[#FFAB00] font-bold text-xs uppercase tracking-widest mb-6"
                        >
                            <Trophy size={14} /> Cashback Universitário
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white leading-tight font-sans mb-6"
                        >
                            Pineapple Pay chegou para <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAB00] via-[#E91482] to-[#FFAB00]">te dar dinheiro!</span>
                        </motion.h1>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                        >
                            <LandingStoreButton store="apple" />
                            <LandingStoreButton store="google" />
                        </motion.div>
                    </div>
                </section>

                {/* LP: B2B & B2C Cards */}
                <section className="py-20 px-6 bg-[#0A0F14]">
                    <div className="container mx-auto grid md:grid-cols-2 gap-8">
                        {/* B2B Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#00B54B]/10 border border-[#00B54B]/30 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-[#00B54B]/20 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#00B54B] group-hover:scale-110 transition-transform duration-500">
                                <Store size={150} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-[#00B54B] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#00B54B]/30">
                                    <Building2 size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">Pro seu Negócio</h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    Pare de gastar com panfletos. No Pineapple Pay, você faz <strong>Marketing Pré-Pago</strong>.
                                </p>
                                <button className="text-[#00B54B] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                    Cadastrar Empresa <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>

                        {/* B2C Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#E91482]/10 border border-[#E91482]/30 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-[#E91482]/20 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#E91482] group-hover:scale-110 transition-transform duration-500">
                                <Heart size={150} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-[#E91482] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#E91482]/30">
                                    <UserPlus size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">Pra você Padrinho</h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    Pequenos descontos viram sonhos realizados para universitários.
                                </p>
                                <button className="text-[#E91482] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                    Quero ser Padrinho <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* LP: Infographic Timeline */}
                <section className="py-24 bg-[#101820] border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Mágica do Cashback</h2>
                            <p className="text-gray-400">Fluxo completo do Padrinho ao Aluno.</p>
                        </div>

                        <div className="max-w-4xl mx-auto relative">
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#1A2633] -translate-x-1/2"></div>
                            <div className="space-y-12">
                                <TimelineItem 
                                    step="1" title="O Cadastro" desc="Paulo baixa o app e se cadastra como 'Padrinho' do Fábio."
                                    icon={<UserPlus size={24} />} color="bg-blue-500" align="left"
                                />
                                <TimelineItem 
                                    step="2" title="A Compra" desc="Paulo gasta R$ 54,00 na Pizzaria e pontua no CPF."
                                    icon={<ShoppingCart size={24} />} color="bg-[#00B54B]" align="right"
                                />
                                <TimelineItem 
                                    step="3" title="O Ticket" desc="Sistema gera Ticket de R$ 2,20 (Cashback)."
                                    icon={<Receipt size={24} />} color="bg-[#FFAB00]" align="left"
                                />
                                <TimelineItem 
                                    step="4" title="A Doação" desc="R$ 2,20 vão automaticamente para o saldo da Turma."
                                    icon={<Gift size={24} />} color="bg-[#E91482]" align="right"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        {/* --- LANDING PAGE INTEGRATION END --- */}

        {/* SECTION: DEEP DIVE - ECOSYSTEM MODULES */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-[#333] flex-1"></div>
                <h2 className="text-2xl font-bold text-[#F7F7F7] text-center font-mono uppercase tracking-wider text-[#E91482]">Deep Dive: Ecossistema Técnico</h2>
                <div className="h-px bg-[#333] flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                
                {/* 1. GESTÃO FINANCEIRA (Fintech) */}
                <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#333] hover:border-[#E91482] transition-colors relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-6 text-[#00C853]">
                        <Wallet size={32} />
                        <h3 className="text-xl font-bold text-white">Fintech & Arrecadação</h3>
                    </div>
                    <p className="text-[#888] text-sm mb-6">Módulo financeiro completo para controle de receitas, despesas e saldo bancário da turma.</p>
                    <div className="grid grid-cols-2 gap-3">
                        <TechItem code="receita_loj" label="Dash Receita" />
                        <TechItem code="despesas" label="Controle de Gastos" />
                        <TechItem code="extrato_loj" label="Extrato Detalhado" />
                        <TechItem code="tela_de_ban" label="Saldo & Saques" />
                        <TechItem code="arrecada_o_" label="Barra de Metas" />
                        <TechItem code="tela_de_ext" label="Log de Transações" />
                    </div>
                </div>

                {/* 2. GESTÃO DE FORMATURAS (ERP) */}
                <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#333] hover:border-[#FFAB00] transition-colors relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-6 text-[#FFAB00]">
                        <Users size={32} />
                        <h3 className="text-xl font-bold text-white">Gestão de Comissão</h3>
                    </div>
                    <p className="text-[#888] text-sm mb-6">Ferramentas para a comissão gerenciar a turma, alunos e patrocinadores.</p>
                    <div className="grid grid-cols-2 gap-3">
                        <TechItem code="comiss_o_de" label="Painel Comissão" />
                        <TechItem code="tela_turma" label="Gestão de Alunos" />
                        <TechItem code="info_aluno" label="Ficha Cadastral" />
                        <TechItem code="padrinhos" label="Apoiadores" />
                        <TechItem code="ranking_alu" label="Ranking Engajamento" />
                        <TechItem code="vincular_or" label="Vínculo Organizador" />
                    </div>
                </div>

                {/* 3. MARKETPLACE & EVENTOS */}
                <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#333] hover:border-[#E91482] transition-colors relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-6 text-[#E91482]">
                        <Ticket size={32} />
                        <h3 className="text-xl font-bold text-white">Marketplace & Tickets</h3>
                    </div>
                    <p className="text-[#888] text-sm mb-6">Venda de ingressos, combos de bebidas e produtos da atlética com controle de estoque.</p>
                    <div className="grid grid-cols-2 gap-3">
                        <TechItem code="gerar_ticke" label="Ticket Digital" />
                        <TechItem code="combos" label="Venda de Pacotes" />
                        <TechItem code="loj_produto" label="Catálogo Produtos" />
                        <TechItem code="aprova_o_pe" label="Aprovação Pedidos" />
                        <TechItem code="promo_es" label="Motor de Descontos" />
                        <TechItem code="date_picker" label="Data de Evento" />
                    </div>
                </div>

                {/* 4. ADMIN & SEGURANÇA */}
                <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#333] hover:border-blue-500 transition-colors relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-6 text-blue-500">
                        <ShieldAlert size={32} />
                        <h3 className="text-xl font-bold text-white">BI & Master Admin</h3>
                    </div>
                    <p className="text-[#888] text-sm mb-6">Painéis de controle para o administrador da plataforma e análise de dados (BI).</p>
                    <div className="grid grid-cols-2 gap-3">
                        <TechItem code="dashboard" label="BI Master" />
                        <TechItem code="tela_adm_ma" label="Super Admin" />
                        <TechItem code="gerenciar_p" label="Permissões (RBAC)" />
                        <TechItem code="notifica_es" label="Push Notifications" />
                        <TechItem code="itens_para_" label="Relatório Mais Vendidos" />
                        <TechItem code="home_cerimo" label="Painel Cerimonial" />
                    </div>
                </div>

            </div>
        </div>

        {/* SECTION 2: LUXURY PARTNERSHIPS */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-6 text-center">Poder de Barganha Coletiva</h2>
            <p className="text-[#888] text-center max-w-2xl mx-auto mb-16">
                Com a organização centralizada e milhares de alunos no app, conseguimos fechar parcerias que nenhuma turma conseguiria sozinha. O app direciona um público gigante para parceiros de alto padrão.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
                <LuxuryCard icon={<Anchor />} title="Aluguel de Iates" desc="Festas exclusivas em alto mar." image="https://images.unsplash.com/photo-1569263979104-865ab7dd8d36?q=80&w=400&auto=format&fit=crop" />
                <LuxuryCard icon={<Plane />} title="Helicópteros" desc="Chegadas triungais nos eventos." image="https://images.unsplash.com/photo-1540962351504-03099e0a7782?q=80&w=400&auto=format&fit=crop" />
                <LuxuryCard icon={<Building2 />} title="Hotéis de Luxo" desc="Hospedagem para convidados." image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop" />
                <LuxuryCard icon={<Smartphone />} title="Limousines" desc="Transporte VIP para a colação." image="https://images.unsplash.com/photo-1562208226-9f448c3b1716?q=80&w=400&auto=format&fit=crop" />
            </div>
        </div>

        {/* SECTION 3: STORE OWNER DASHBOARD VISUAL */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Gestão de Loja: Painel do Dono</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Store className="text-[#E91482]" /> Visão Geral & Marketplace
                        </h3>
                        <p className="text-[#888]">
                            O painel do Lojista oferece controle total sobre finanças, produtos e equipe. Uma visão 360º do seu negócio em tempo real.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<Wallet className="text-[#00C853]" />} 
                            title="Gestão Financeira e Fluxo" 
                            desc="Monitoramento de saldo em tempo real, controle de receitas/despesas e auditoria mensal facilitada." 
                        />
                        <FeatureRow 
                            icon={<ShoppingBag className="text-[#E91482]" />} 
                            title="Marketplace e Produtos" 
                            desc="Catálogo ativo, promoções relâmpago, categorização e etiquetas de destaque para produtos." 
                        />
                        <FeatureRow 
                            icon={<Users className="text-[#FFAB00]" />} 
                            title="Gestão de Equipe (RH)" 
                            desc="Supervisão de usuários vinculados, hierarquia interna (Gerente vs Funcionário) e painel de contas." 
                        />
                        <FeatureRow 
                            icon={<Megaphone className="text-blue-400" />} 
                            title="Marketing e Engajamento" 
                            desc="Gestão de banners promocionais no carrossel, acompanhamento de metas de sorteio e eventos." 
                        />
                    </div>
                </div>
                
                {/* Visual Representation of Store Owner Dashboard */}
                <div className="relative">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Header: Menu Drawer Trigger */}
                        <div className="bg-[#1A1A1A] p-4 flex justify-between items-center border-b border-[#333]">
                            <Menu size={24} className="text-[#E91482]" />
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Açaí do Jota</span>
                                <span className="text-[10px] text-[#00C853] flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#00C853] rounded-full animate-pulse"></div> Aberto</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden border border-[#555]">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Balance Section */}
                        <div className="bg-[#1A1A1A] p-6 pb-4">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs text-[#888] font-bold uppercase tracking-wider">Saldo Disponível</span>
                                <button onClick={() => setHideBalance(!hideBalance)} className="text-[#888] hover:text-white">
                                    {hideBalance ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-3xl font-bold text-white font-mono">
                                    {hideBalance ? '•••••••' : 'R$ 18.928,37'}
                                </h2>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 bg-[#00C853]/10 text-[#00C853] py-2 rounded-lg font-bold text-xs border border-[#00C853]/20 hover:bg-[#00C853]/20 transition-colors">
                                    <ArrowUp size={14} /> Receitas
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-[#FF4444]/10 text-[#FF4444] py-2 rounded-lg font-bold text-xs border border-[#FF4444]/20 hover:bg-[#FF4444]/20 transition-colors">
                                    <ArrowDown size={14} /> Despesas
                                </button>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-[#0F0F0F]">
                            
                            {/* Marketing Banners Preview */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-white font-bold text-xs flex items-center gap-1"><Megaphone size={12} className="text-[#E91482]" /> Banners Ativos</h4>
                                    <span className="text-[10px] text-[#E91482]">Gerenciar</span>
                                </div>
                                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                    <div className="min-w-[120px] h-16 bg-[#222] rounded-lg border border-[#333] flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
                                        <span className="text-[10px] text-white font-bold relative z-10">Promo 1</span>
                                    </div>
                                    <div className="min-w-[120px] h-16 bg-[#222] rounded-lg border border-[#333] flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20"></div>
                                        <span className="text-[10px] text-white font-bold relative z-10">Sorteio</span>
                                    </div>
                                    <div className="min-w-[40px] h-16 bg-[#1A1A1A] rounded-lg border border-dashed border-[#555] flex items-center justify-center text-[#555]">
                                        <Plus size={16} />
                                    </div>
                                </div>
                            </div>

                            {/* Team Widget */}
                            <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#FFAB00]/10 p-2 rounded-lg text-[#FFAB00]">
                                        <Users size={18} />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-bold">Equipe da Loja</p>
                                        <p className="text-[#888] text-[10px]">12 Usuários Vinculados</p>
                                    </div>
                                </div>
                                <ArrowRight size={14} className="text-[#666]" />
                            </div>

                            {/* Ticket Stats */}
                            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333]">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-white font-bold text-sm flex items-center gap-2">
                                        <Ticket size={16} className="text-[#FFAB00]" /> Tickets Gerados
                                    </h4>
                                    <span className="text-xs text-[#888]">Mês Atual</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-bold text-white">460</span>
                                    <span className="text-xs text-[#00C853] mb-1 font-bold flex items-center">
                                        <ArrowUp size={10} /> +5%
                                    </span>
                                </div>
                            </div>

                            {/* Raffle Card */}
                            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-4 rounded-xl border border-[#333] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4"></div>
                                <div className="flex justify-between items-start mb-3 relative z-10">
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Meta Sorteio (iPhone)</h4>
                                        <p className="text-[10px] text-[#888]">Próximo: 21/10</p>
                                    </div>
                                    <MoreVertical size={16} className="text-[#666]" />
                                </div>
                                <div className="w-full bg-[#333] h-2 rounded-full overflow-hidden mb-1">
                                    <div className="bg-purple-500 h-full w-[42%]"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-[#888]">
                                    <span>R$ 383,00 arrecadados</span>
                                    <span>Meta: R$ 900</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Nav & FAB */}
                        <div className="relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                <div className="w-14 h-14 bg-[#E91482] rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(233,20,130,0.4)] border-4 border-[#111] hover:scale-105 transition-transform cursor-pointer">
                                    <Plus size={28} />
                                </div>
                            </div>
                            <div className="bg-[#1A1A1A] p-4 border-t border-[#333] flex justify-between items-center">
                                <NavIcon icon={<LayoutDashboard size={20} />} active />
                                <NavIcon icon={<BarChart2 size={20} />} />
                                <div className="w-8"></div> {/* Spacer for FAB */}
                                <NavIcon icon={<Users size={20} />} />
                                <NavIcon icon={<Settings size={20} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 4: EMPLOYEE DASHBOARD */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Operação: Painel do Funcionário</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
                {/* Visual Representation of Employee App */}
                <div className="relative order-2 md:order-1">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Header: Employee Profile */}
                        <div className="bg-[#B00055] p-6 pb-8 border-b border-[#333]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Felipe Nogueira</h3>
                                        <span className="text-[10px] text-white/80 bg-black/20 px-2 py-0.5 rounded">ID: AM2408</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 p-2 rounded-full text-white cursor-pointer hover:bg-white/20">
                                    <Bell size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-[#0F0F0F] -mt-4 relative z-10 rounded-t-3xl">
                            
                            {/* Stats Cards Row */}
                            <div className="flex gap-4 mb-2">
                                <div className="flex-1 bg-[#1A1A1A] p-4 rounded-xl border-l-4 border-[#E91482] shadow-lg">
                                    <p className="text-[10px] text-[#888] uppercase font-bold mb-1">Meus Tickets</p>
                                    <h2 className="text-2xl font-bold text-white">360</h2>
                                    <span className="text-[10px] text-[#00C853] flex items-center gap-1">
                                        <ArrowUp size={10} /> Hoje
                                    </span>
                                </div>
                                <div className="flex-1 bg-[#1A1A1A] p-4 rounded-xl border border-[#333] opacity-80">
                                    <p className="text-[10px] text-[#888] uppercase font-bold mb-1">Total Loja</p>
                                    <h2 className="text-xl font-bold text-white">1.460</h2>
                                    <span className="text-[10px] text-[#888]">Visão Macro</span>
                                </div>
                            </div>

                            {/* Date Filter */}
                            <div className="flex justify-between items-center bg-[#1A1A1A] px-4 py-3 rounded-xl border border-[#333]">
                                <div className="flex items-center gap-2 text-white text-xs font-medium">
                                    <Calendar size={14} className="text-[#E91482]" />
                                    <span>1 Fev. - 1 Mar.</span>
                                </div>
                                <Search size={16} className="text-[#666]" />
                            </div>

                            {/* Operational Menu Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col items-center justify-center gap-2 hover:border-[#E91482] transition-colors cursor-pointer group">
                                    <Package size={24} className="text-[#888] group-hover:text-[#E91482] transition-colors" />
                                    <span className="text-[10px] text-white font-bold">Produtos</span>
                                </div>
                                <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col items-center justify-center gap-2 hover:border-[#FFAB00] transition-colors cursor-pointer group">
                                    <Tag size={24} className="text-[#888] group-hover:text-[#FFAB00] transition-colors" />
                                    <span className="text-[10px] text-white font-bold">Promoções</span>
                                </div>
                                <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col items-center justify-center gap-2 hover:border-[#00C853] transition-colors cursor-pointer group">
                                    <Pin size={24} className="text-[#888] group-hover:text-[#00C853] transition-colors" />
                                    <span className="text-[10px] text-white font-bold">Destaques</span>
                                </div>
                            </div>

                            {/* Recent Activity List (Mockup) */}
                            <div className="bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                                <div className="px-4 py-3 border-b border-[#333] flex justify-between items-center">
                                    <h4 className="text-xs font-bold text-white">Últimas Vendas</h4>
                                    <span className="text-[10px] text-[#E91482]">Ver Todas</span>
                                </div>
                                <div className="p-2 space-y-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex justify-between items-center p-2 hover:bg-[#222] rounded text-[10px] text-[#CCC]">
                                            <span>Ticket #{2040 + i}</span>
                                            <span className="text-[#00C853] font-mono">R$ 45,00</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* FAB & Bottom Nav */}
                        <div className="relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                <div className="w-14 h-14 bg-[#E91482] rounded-full flex items-center justify-center text-white shadow-[0_4px_10px_rgba(233,20,130,0.4)] border-4 border-[#111] hover:scale-105 transition-transform cursor-pointer">
                                    <Plus size={28} />
                                </div>
                            </div>
                            <div className="bg-[#1A1A1A] px-6 py-4 border-t border-[#333] flex justify-between items-center">
                                <NavIcon icon={<LayoutDashboard size={20} />} active />
                                <div className="w-8"></div> {/* Spacer for FAB */}
                                <NavIcon icon={<User size={20} />} />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Description Text */}
                <div className="space-y-6 order-1 md:order-2">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Ticket className="text-[#E91482]" /> Foco na Produtividade
                        </h3>
                        <p className="text-[#888]">
                            O app do funcionário elimina distrações. A interface é otimizada para gerar tickets rapidamente e consultar preços sem fricção.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<UserCheck className="text-[#00C853]" />} 
                            title="Identidade & Auditoria" 
                            desc="Crachá digital com nome e ID (AM2408) sempre visível para segurança do processo." 
                        />
                        <FeatureRow 
                            icon={<BarChart2 className="text-[#FFAB00]" />} 
                            title="Metas Pessoais" 
                            desc="Visualização clara de 'Meus Tickets' vs 'Total da Loja' para incentivar o desempenho." 
                        />
                        <FeatureRow 
                            icon={<Search className="text-blue-400" />} 
                            title="Consulta Ágil" 
                            desc="Acesso instantâneo ao catálogo de Produtos, Promoções ativas e Destaques da loja." 
                        />
                        <FeatureRow 
                            icon={<Layers className="text-[#E91482]" />} 
                            title="UX Operacional" 
                            desc="Botão de ação rápida (FAB) centralizado para gerar novos tickets com um toque." 
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 5: ORGANIZER DASHBOARD */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Gestão Estratégica: Painel da Organizadora</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Building2 className="text-[#E91482]" /> Controle de Múltiplas Turmas
                        </h3>
                        <p className="text-[#888]">
                            O perfil da Organizadora centraliza a gestão de diversas turmas, permitindo análise comparativa de performance e ações em massa.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<ListOrdered className="text-[#FFAB00]" />} 
                            title="Ranking & Rentabilidade" 
                            desc="Visualização competitiva das turmas mais rentáveis com destaque visual (Ouro/Prata/Bronze)." 
                        />
                        <FeatureRow 
                            icon={<BarChart2 className="text-[#00C853]" />} 
                            title="Analytics Comparativo" 
                            desc="Gráficos de metas batidas (Verde) vs não batidas (Vermelho) e proporção de sorteios." 
                        />
                        <FeatureRow 
                            icon={<Megaphone className="text-blue-400" />} 
                            title="Comunicação em Massa" 
                            desc="Ferramentas para envio de Push Notifications e avisos para grupos específicos." 
                        />
                        <FeatureRow 
                            icon={<Star className="text-[#E91482]" />} 
                            title="Gestão de Sorteios" 
                            desc="Controle centralizado de prêmios e datas de sorteio com filtros temporais." 
                        />
                    </div>
                </div>
                
                {/* Visual Representation of Organizer Dashboard */}
                <div className="relative">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Header: Organizer Profile */}
                        <div className="bg-[#B00055] p-6 pb-8 border-b border-[#333]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Fátima Souza</h3>
                                        <span className="text-[10px] text-white/80 bg-black/20 px-2 py-0.5 rounded">ID: AM2408 Org.</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 p-2 rounded-full text-white cursor-pointer hover:bg-white/20">
                                    <Settings size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-[#0F0F0F] -mt-4 relative z-10 rounded-t-3xl">
                            
                            {/* BI Widget: Goals & Raffles */}
                            <div className="flex gap-4">
                                {/* Goals Bar Chart Mockup */}
                                <div className="flex-1 bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col justify-between">
                                    <p className="text-[10px] text-[#888] font-bold mb-2 flex items-center gap-1"><Target size={10} /> Metas do Mês</p>
                                    <div className="flex items-end justify-between h-16 gap-1">
                                        <div className="w-2 bg-[#00C853] h-[80%] rounded-t"></div>
                                        <div className="w-2 bg-[#00C853] h-[100%] rounded-t"></div>
                                        <div className="w-2 bg-[#FF4444] h-[40%] rounded-t"></div>
                                        <div className="w-2 bg-[#00C853] h-[60%] rounded-t"></div>
                                        <div className="w-2 bg-[#FF4444] h-[30%] rounded-t"></div>
                                    </div>
                                </div>
                                {/* Raffles Donut Chart Mockup */}
                                <div className="flex-1 bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col items-center justify-center relative">
                                    <p className="absolute top-2 left-3 text-[10px] text-[#888] font-bold">Sorteios</p>
                                    <div className="w-16 h-16 rounded-full relative mt-2" style={{ background: 'conic-gradient(#B00055 70%, #F48FB1 0)' }}>
                                        <div className="absolute inset-2 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                                            <span className="text-xs text-white font-bold">70%</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <div className="w-2 h-2 rounded-full bg-[#B00055]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#F48FB1]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions Row */}
                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex items-center justify-center gap-2 hover:bg-[#222]">
                                    <Megaphone size={16} className="text-blue-400" />
                                    <span className="text-[10px] text-white font-bold">Enviar Aviso</span>
                                </button>
                                <button className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex items-center justify-center gap-2 hover:bg-[#222]">
                                    <Users size={16} className="text-[#FFAB00]" />
                                    <span className="text-[10px] text-white font-bold">Gerir Grupos</span>
                                </button>
                            </div>

                            {/* Ranking List */}
                            <div className="bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                                <div className="px-4 py-3 border-b border-[#333] flex justify-between items-center bg-[#222]">
                                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                                        <Trophy size={12} className="text-[#FFAB00]" /> Ranking de Rentabilidade
                                    </h4>
                                    <span className="text-[10px] text-[#E91482] cursor-pointer">Ver Tudo</span>
                                </div>
                                <div className="divide-y divide-[rgba(33,33,33,0.5)]">
                                    {/* Item 1 - Gold */}
                                    <div className="flex items-center gap-3 p-3 hover:bg-[#222]">
                                        <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#FFAB00] overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-xs font-bold text-white">Medicina UFGO</h5>
                                            <p className="text-[10px] text-gray-400">Turma XX • 120 Alunos</p>
                                        </div>
                                        <span className="text-xs font-bold text-[#00C853]">+15%</span>
                                    </div>
                                    {/* Item 2 - Silver */}
                                    <div className="flex items-center gap-3 p-3 hover:bg-[#222]">
                                        <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#C0C0C0] overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-xs font-bold text-white">Direito PUC</h5>
                                            <p className="text-[10px] text-gray-400">Turma LI • 90 Alunos</p>
                                        </div>
                                        <span className="text-xs font-bold text-[#00C853]">+8%</span>
                                    </div>
                                    {/* Item 3 - Bronze */}
                                    <div className="flex items-center gap-3 p-3 hover:bg-[#222]">
                                        <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#CD7F32] overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-xs font-bold text-white">Odonto UFG</h5>
                                            <p className="text-[10px] text-gray-400">Turma X • 60 Alunos</p>
                                        </div>
                                        <span className="text-xs font-bold text-red-400">-2%</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Nav Mockup */}
                        <div className="bg-[#1A1A1A] p-4 border-t border-[#333] flex justify-between items-center">
                            <NavIcon icon={<LayoutDashboard size={20} />} active />
                            <NavIcon icon={<BarChart2 size={20} />} />
                            <div className="w-12 h-12 bg-[#B00055] rounded-full -mt-8 border-4 border-[#111] flex items-center justify-center text-white shadow-lg">
                                <Star size={24} />
                            </div>
                            <NavIcon icon={<Users size={20} />} />
                            <NavIcon icon={<Settings size={20} />} />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 6: CERIMONIALISTA DASHBOARD */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Gestão de Eventos: Painel da Cerimonialista</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
                {/* Visual Representation of Cerimonialista App */}
                <div className="relative order-2 md:order-1">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Header: Cerimonialista Profile */}
                        <div className="bg-[#B00055] p-6 pb-8 border-b border-[#333]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Cleide Silva</h3>
                                        <span className="text-[10px] text-white/80 bg-black/20 px-2 py-0.5 rounded">ID: AM2408</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 p-2 rounded-full text-white cursor-pointer hover:bg-white/20">
                                    <Bell size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-[#0F0F0F] -mt-4 relative z-10 rounded-t-3xl">
                            
                            {/* Tickets Stats & Categories */}
                            <div className="flex gap-4">
                                <div className="flex-1 bg-[#1A1A1A] p-4 rounded-xl border border-[#333] flex flex-col items-center justify-center relative">
                                    <p className="absolute top-2 left-3 text-[10px] text-[#888] font-bold">Categorias</p>
                                    {/* Donut Chart: Basic, Prime, Ultra */}
                                    <div className="w-16 h-16 rounded-full relative mt-2" style={{ background: 'conic-gradient(#B00055 33%, #F48FB1 33% 66%, #FFAB00 66%)' }}>
                                        <div className="absolute inset-2 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                                            <span className="text-xs text-white font-bold">1460</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-[#888] mt-1">Ativos</p>
                                </div>
                                <div className="flex-1 bg-[#1A1A1A] p-4 rounded-xl border border-[#333]">
                                    <p className="text-[10px] text-[#888] font-bold mb-2">Performance</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] text-[#CCC]">
                                            <span>Bateram Meta</span>
                                            <span className="text-[#00C853]">85%</span>
                                        </div>
                                        <div className="w-full bg-[#333] h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-[#00C853] w-[85%] h-full"></div>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-[#CCC]">
                                            <span>Atraso</span>
                                            <span className="text-red-400">15%</span>
                                        </div>
                                        <div className="w-full bg-[#333] h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-red-400 w-[15%] h-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Date Filter & Planning */}
                            <div className="flex justify-between items-center bg-[#1A1A1A] px-4 py-3 rounded-xl border border-[#333]">
                                <div className="flex items-center gap-2 text-white text-xs font-medium">
                                    <Calendar size={14} className="text-[#E91482]" />
                                    <span>1 Fev. - 1 Mar.</span>
                                </div>
                                <Search size={16} className="text-[#666]" />
                            </div>

                            {/* Management Actions */}
                            <div className="grid grid-cols-4 gap-2">
                                <ManagerActionIcon icon={<School size={20} />} label="Faculdades" color="text-[#FFAB00]" />
                                <ManagerActionIcon icon={<Landmark size={20} />} label="Espaços" color="text-[#FFF]" />
                                <ManagerActionIcon icon={<PartyPopper size={20} />} label="Combos" color="text-[#E91482]" />
                                <ManagerActionIcon icon={<Megaphone size={20} />} label="Notific." color="text-blue-400" />
                            </div>

                            {/* Class Performance List */}
                            <div className="bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                                <div className="px-4 py-3 border-b border-[#333] flex justify-between items-center">
                                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                                        <Users size={12} className="text-[#FFAB00]" /> Turmas Ativas
                                    </h4>
                                    <span className="text-[10px] text-[#E91482]">Ver Ranking</span>
                                </div>
                                <div className="divide-y divide-[rgba(33,33,33,0.5)]">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-3 p-3 hover:bg-[#222]">
                                        <div className="w-10 h-10 rounded-full border-2 border-[#00C853] p-0.5">
                                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=100&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-xs font-bold text-white">Engenharia Civil</h5>
                                            <p className="text-[10px] text-gray-400">Rentabilidade Alta</p>
                                            <p className="text-[10px] text-[#00C853] font-bold">Meta Batida</p>
                                        </div>
                                        <span className="text-xs font-mono text-white">R$ 450k</span>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex items-center gap-3 p-3 hover:bg-[#222]">
                                        <div className="w-10 h-10 rounded-full border-2 border-red-400 p-0.5">
                                            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=100&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-xs font-bold text-white">Psicologia</h5>
                                            <p className="text-[10px] text-gray-400">Rentabilidade Média</p>
                                            <p className="text-[10px] text-red-400 font-bold flex items-center gap-1"><AlertTriangle size={8}/> Atrasado</p>
                                        </div>
                                        <span className="text-xs font-mono text-white">R$ 120k</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Nav Mockup */}
                        <div className="bg-[#1A1A1A] p-4 border-t border-[#333] flex justify-between items-center shadow-lg">
                            <NavIcon icon={<LayoutDashboard size={20} />} active />
                            <NavIcon icon={<BarChart2 size={20} />} />
                            <div className="w-12 h-12 bg-[#FFAB00] rounded-full -mt-8 border-4 border-[#111] flex items-center justify-center text-[#000] shadow-lg">
                                <Trophy size={24} />
                            </div>
                            <NavIcon icon={<Users size={20} />} />
                            <NavIcon icon={<Settings size={20} />} />
                        </div>

                    </div>
                </div>

                {/* Description Text */}
                <div className="space-y-6 order-1 md:order-2">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <PartyPopper className="text-[#FFAB00]" /> Gestão de Infraestrutura & Ingressos
                        </h3>
                        <p className="text-[#888]">
                            O painel da Cerimonialista é focado na logística do evento e na gestão de categorias de convidados, garantindo que cada detalhe da festa esteja sob controle.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<Ticket className="text-[#E91482]" />} 
                            title="Categorias de Acesso" 
                            desc="Controle granular de ingressos (Básico, Prime, Ultra) com indicadores visuais para rápida identificação." 
                        />
                        <FeatureRow 
                            icon={<Landmark className="text-[#00C853]" />} 
                            title="Infraestrutura & Parceiros" 
                            desc="Gestão centralizada de Faculdades parceiras e Espaços de eventos (Museus, Salões)." 
                        />
                        <FeatureRow 
                            icon={<BarChart3 className="text-[#FFAB00]" />} 
                            title="Auditoria de Metas" 
                            desc="Monitoramento em tempo real de turmas que bateram a meta vs turmas em atraso com gráficos operacionais." 
                        />
                        <FeatureRow 
                            icon={<Target className="text-blue-400" />} 
                            title="Planejamento Futuro" 
                            desc="Ferramentas de calendário e previsão de arrecadação para garantir a saúde financeira dos eventos." 
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 7: FINANCEIRO DASHBOARD */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Auditoria & Fluxo: Painel do Financeiro</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Wallet className="text-[#00C853]" /> Controle de Caixa & Balanço
                        </h3>
                        <p className="text-[#888]">
                            O painel financeiro oferece visão total do fluxo de caixa, com ferramentas de auditoria e relatórios precisos para fechamento de balanço.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<DollarSign className="text-[#FFAB00]" />} 
                            title="Fluxo de Caixa Real" 
                            desc="Monitoramento de Entradas (Injeção) e Saídas (Sangria) com atualização de saldo em tempo real." 
                        />
                        <FeatureRow 
                            icon={<PieChart className="text-[#E91482]" />} 
                            title="BI & Analytics" 
                            desc="Gráficos detalhados de faturamento por categoria (Padrinhos, Parceiros) e destino da verba." 
                        />
                        <FeatureRow 
                            icon={<FileText className="text-blue-400" />} 
                            title="Auditoria Transacional" 
                            desc="Contador macro de tickets gerados e filtros de período customizado para fechamento quinzenal." 
                        />
                        <FeatureRow 
                            icon={<Lock className="text-[#00C853]" />} 
                            title="Segurança & Privacidade" 
                            desc="Modo de privacidade para ocultar valores sensíveis e identificação visual exclusiva (Pine Green)." 
                        />
                    </div>
                </div>
                
                {/* Visual Representation of Finance Dashboard */}
                <div className="relative">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Header: Finance Profile */}
                        <div className="bg-[#00C853] p-6 pb-8 border-b border-[#333]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden">
                                        {/* Company Logo Avatar */}
                                        <div className="w-full h-full bg-[#111] flex items-center justify-center">
                                            <span className="text-[#E91482] font-bold text-xs">P<span className="text-[#FFAB00]">P</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Financeiro Master</h3>
                                        <span className="text-[10px] text-white/80 bg-black/20 px-2 py-0.5 rounded">Sessão Segura</span>
                                    </div>
                                </div>
                                <button onClick={() => setHideBalance(!hideBalance)} className="bg-white/10 p-2 rounded-full text-white cursor-pointer hover:bg-white/20">
                                    {hideBalance ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-[#0F0F0F] -mt-4 relative z-10 rounded-t-3xl">
                            
                            {/* Main Balance Card */}
                            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#333] shadow-lg text-center">
                                <p className="text-[#888] text-[10px] uppercase font-bold tracking-widest mb-2">Saldo Disponível</p>
                                <h2 className="text-3xl font-bold text-white mb-6 font-mono">
                                    {hideBalance ? '•••••••' : 'R$ 18.928,37'}
                                </h2>
                                
                                <div className="flex justify-center gap-4">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-[#00C853]/10 text-[#00C853] rounded-lg border border-[#00C853]/30 text-xs font-bold hover:bg-[#00C853]/20">
                                        <ArrowUp size={14} /> Injetar
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-[#FF4444]/10 text-[#FF4444] rounded-lg border border-[#FF4444]/30 text-xs font-bold hover:bg-[#FF4444]/20">
                                        <ArrowDown size={14} /> Sangria
                                    </button>
                                </div>
                            </div>

                            {/* Summary Rows */}
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333]">
                                    <p className="text-[10px] text-[#888] font-bold">Receitas</p>
                                    <p className="text-sm font-bold text-[#00C853]">R$ 20.000,00</p>
                                </div>
                                <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333]">
                                    <p className="text-[10px] text-[#888] font-bold">Despesas</p>
                                    <p className="text-sm font-bold text-[#FF4444]">R$ 5.000,00</p>
                                </div>
                            </div>

                            {/* Analytics Section */}
                            <div className="flex gap-3">
                                {/* Bar Chart (Rev vs Exp) */}
                                <div className="flex-1 bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex flex-col justify-between h-32">
                                    <p className="text-[10px] text-[#888] font-bold">Balanço Geral</p>
                                    <div className="flex items-end justify-center gap-2 h-full pb-2">
                                        <div className="w-3 bg-[#00C853] h-[80%] rounded-t-sm relative group">
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-white opacity-0 group-hover:opacity-100">In</div>
                                        </div>
                                        <div className="w-3 bg-[#FF4444] h-[30%] rounded-t-sm relative group">
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-white opacity-0 group-hover:opacity-100">Out</div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-center text-white font-mono">+15k</p>
                                </div>

                                {/* Donut Chart (Source) */}
                                <div className="flex-1 bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex flex-col items-center justify-center h-32 relative">
                                    <p className="absolute top-2 left-2 text-[10px] text-[#888] font-bold">Origem</p>
                                    <div className="w-16 h-16 rounded-full relative mt-2" style={{ background: 'conic-gradient(#E91482 60%, #FFAB00 60% 90%, #00B54B 90%)' }}>
                                        <div className="absolute inset-2 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                                            <span className="text-[10px] text-white font-bold">Mix</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E91482]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFAB00]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00B54B]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Audit Tool */}
                            <div className="bg-[#1A1A1A] rounded-xl border border-[#333] p-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                                        <Ticket size={12} className="text-[#FFAB00]" /> Auditoria de Tickets
                                    </h4>
                                    <span className="text-xs font-mono text-[#00C853]">1.460 un</span>
                                </div>
                                <div className="flex justify-between items-center bg-[#222] px-3 py-2 rounded-lg border border-[#333]">
                                    <div className="flex items-center gap-2 text-white text-[10px]">
                                        <Calendar size={12} className="text-[#888]" />
                                        <span>1 Fev. - 1 Mar.</span>
                                    </div>
                                    <Search size={12} className="text-[#666]" />
                                </div>
                            </div>

                        </div>

                        {/* Simplified Bottom Nav (2 Tabs) */}
                        <div className="bg-[#1A1A1A] p-4 border-t border-[#333] flex justify-around items-center shadow-lg">
                            <div className="flex flex-col items-center gap-1 text-[#00C853]">
                                <LayoutDashboard size={20} />
                                <span className="text-[10px] font-bold">Dados</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-[#666] hover:text-white transition-colors">
                                <Settings size={20} />
                                <span className="text-[10px] font-bold">Config</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 8: ADMIN MASTER DASHBOARD (NEW) */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Governança Total: Painel Master</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
                {/* Visual Representation of Master Admin Dashboard */}
                <div className="relative order-2 md:order-1">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Header: Admin Master Profile */}
                        <div className="bg-[#0F172A] p-6 pb-8 border-b border-[#333]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border-2 border-[#6366F1] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#333]"></div>
                                        <span className="relative text-white font-bold text-xs">ADM</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Administrador Master</h3>
                                        <span className="text-[10px] text-[#6366F1] bg-[#6366F1]/10 px-2 py-0.5 rounded border border-[#6366F1]/30">God Mode Ativado</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-2 rounded-full text-white cursor-pointer hover:bg-white/10 border border-white/10">
                                    <Eye size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-[#0B0F19] -mt-4 relative z-10 rounded-t-3xl">
                            
                            {/* Consolidated Balance (Global) */}
                            <div className="bg-[#1E293B] p-5 rounded-2xl border border-[#334155] shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5"><Globe size={80} /></div>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[#94A3B8] text-[10px] uppercase font-bold tracking-widest">Saldo Global Consolidado</p>
                                    <div className="flex gap-2">
                                        <button className="p-1 bg-[#0F172A] rounded border border-[#334155] hover:border-[#6366F1]"><Settings size={12} className="text-[#94A3B8]" /></button>
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold text-white font-mono mb-4 group-hover:text-[#6366F1] transition-colors">R$ 1.842.390,00</h2>
                                
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-[#0F172A] px-3 py-2 rounded border border-[#334155] relative overflow-hidden">
                                        <div className="absolute right-0 top-0 p-1 opacity-20"><ArrowUp size={20} className="text-[#00C853]" /></div>
                                        <span className="text-[8px] text-[#64748B] uppercase block">Receita Total</span>
                                        <span className="text-xs text-[#00C853] font-bold">+2.1M</span>
                                    </div>
                                    <div className="flex-1 bg-[#0F172A] px-3 py-2 rounded border border-[#334155] relative overflow-hidden">
                                        <div className="absolute right-0 top-0 p-1 opacity-20"><ArrowDown size={20} className="text-[#FF4444]" /></div>
                                        <span className="text-[8px] text-[#64748B] uppercase block">Repasses</span>
                                        <span className="text-xs text-[#FF4444] font-bold">-258K</span>
                                    </div>
                                </div>
                            </div>

                            {/* Critical Actions Grid - 40 Function Highlights */}
                            <div className="grid grid-cols-2 gap-3">
                                {/* Infra */}
                                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] flex flex-col justify-between h-24 hover:border-[#6366F1] transition-colors cursor-pointer group relative overflow-hidden">
                                    <div className="absolute -right-2 -bottom-2 opacity-10 text-[#6366F1]"><Building2 size={40} /></div>
                                    <School size={20} className="text-[#6366F1] group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="text-white text-xs font-bold">Infraestrutura</h4>
                                        <p className="text-[9px] text-[#94A3B8]">Faculdades & Módulos</p>
                                    </div>
                                </div>
                                {/* Comms */}
                                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] flex flex-col justify-between h-24 hover:border-[#E91482] transition-colors cursor-pointer group relative overflow-hidden">
                                    <div className="absolute -right-2 -bottom-2 opacity-10 text-[#E91482]"><Megaphone size={40} /></div>
                                    <Send size={20} className="text-[#E91482] group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="text-white text-xs font-bold">Broadcast</h4>
                                        <p className="text-[9px] text-[#94A3B8]">Push Notifications</p>
                                    </div>
                                </div>
                                {/* Security */}
                                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] flex flex-col justify-between h-24 hover:border-[#FFAB00] transition-colors cursor-pointer group relative overflow-hidden">
                                    <div className="absolute -right-2 -bottom-2 opacity-10 text-[#FFAB00]"><ShieldCheck size={40} /></div>
                                    <UserCog size={20} className="text-[#FFAB00] group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="text-white text-xs font-bold">Moderação</h4>
                                        <p className="text-[9px] text-[#94A3B8]">Switch Account / Ban</p>
                                    </div>
                                </div>
                                {/* Panic */}
                                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] flex flex-col justify-between h-24 hover:border-[#FF4444] transition-colors cursor-pointer group relative overflow-hidden">
                                    <div className="absolute -right-2 -bottom-2 opacity-10 text-[#FF4444]"><AlertTriangle size={40} /></div>
                                    <Power size={20} className="text-[#FF4444] group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="text-white text-xs font-bold">Panic Button</h4>
                                        <p className="text-[9px] text-[#94A3B8]">Freeze System</p>
                                    </div>
                                </div>
                            </div>

                            {/* Audit Log / Pending List */}
                            <div className="bg-[#1E293B] rounded-xl border border-[#334155] overflow-hidden">
                                <div className="px-4 py-3 border-b border-[#334155] flex justify-between items-center bg-[#0F172A]">
                                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                                        <History size={12} className="text-[#FFAB00]" /> Log de Auditoria
                                    </h4>
                                    <span className="text-[9px] bg-[#6366F1] text-white px-2 py-0.5 rounded-full">Live</span>
                                </div>
                                <div className="divide-y divide-[#334155]">
                                    <div className="p-3 flex justify-between items-center hover:bg-[#252f45] transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#FF4444]"></div>
                                            <div>
                                                <p className="text-[10px] text-white font-bold">Saque Bloqueado: R$ 85k</p>
                                                <p className="text-[9px] text-[#94A3B8]">Turma Eng. Civil • Motivo: Limite</p>
                                            </div>
                                        </div>
                                        <button className="text-[#6366F1] text-[9px] border border-[#6366F1] px-2 py-1 rounded hover:bg-[#6366F1] hover:text-white transition-colors">Liberar</button>
                                    </div>
                                    <div className="p-3 flex justify-between items-center hover:bg-[#252f45] transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00C853]"></div>
                                            <div>
                                                <p className="text-[10px] text-white font-bold">Nova Faculdade Cadastrada</p>
                                                <p className="text-[9px] text-[#94A3B8]">PUC Minas - Direito (ID: 942)</p>
                                            </div>
                                        </div>
                                        <Check size={12} className="text-[#00C853]" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Extended Bottom Nav (Admin Specific) */}
                        <div className="bg-[#0F172A] p-4 border-t border-[#333] flex justify-between items-center shadow-lg text-[#94A3B8] relative">
                            <NavIcon icon={<LayoutDashboard size={18} />} active />
                            <NavIcon icon={<Users size={18} />} />
                            
                            {/* FAB Master Button */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] border-4 border-[#0F172A] hover:scale-110 transition-transform cursor-pointer">
                                    <Activity size={24} />
                                </div>
                            </div>

                            <NavIcon icon={<ShieldCheck size={18} />} />
                            <NavIcon icon={<Settings size={18} />} />
                        </div>

                    </div>
                </div>

                {/* Description Text */}
                <div className="space-y-6 order-1 md:order-2">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Shield size={24} className="text-[#6366F1]" /> Governança de Ecossistema
                        </h3>
                        <p className="text-[#888]">
                            O painel Master oferece controle absoluto sobre o ecossistema. Não apenas opera, mas molda a infraestrutura para todos os outros cargos.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<Sliders className="text-[#E91482]" />} 
                            title="Infraestrutura & Expansão" 
                            desc="Onboarding de Instituições, Habilitação de Módulos por Turma e Auditoria de Dados Acadêmicos." 
                        />
                        <FeatureRow 
                            icon={<DollarSign className="text-[#00C853]" />} 
                            title="Controle Econômico Centralizado" 
                            desc="Supervisão de Saldo Mestre, Gestão de Gateway de Pagamento e Liberação de Saques Restritos." 
                        />
                        <FeatureRow 
                            icon={<Megaphone className="text-[#FFAB00]" />} 
                            title="Comunicação Broadcast" 
                            desc="Engine de Notificações com Segmentação, Stepper de Configuração e Agendamento de Campanhas." 
                        />
                        <FeatureRow 
                            icon={<ShieldCheck className="text-blue-400" />} 
                            title="Segurança & Auditoria Técnica" 
                            desc="Log de Alterações Financeiras, Account Switcher Master e Bloqueio de Contas Fraudulentas." 
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 10: PADRINHO STORE VIEW */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-b border-[#333] pb-4">Experiência de Compra: Visão do Padrinho</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Visual Representation of Padrinho App (Store Profile) */}
                <div className="relative">
                    <div className="bg-[#111] rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden shadow-2xl max-w-sm mx-auto">
                        
                        {/* Store Header Image & Nav */}
                        <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop")' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            
                            {/* Top Nav (Transparent) */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                                <div className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-black/50">
                                    <ArrowLeft size={20} />
                                </div>
                                <div className="flex gap-2">
                                    <div className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-black/50">
                                        <Share2 size={20} />
                                    </div>
                                    <div className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-black/50">
                                        <Heart size={20} />
                                    </div>
                                    <div className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-black/50">
                                        <MoreVertical size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Store Info Card (Overlapping) */}
                        <div className="relative px-4 -mt-12 z-20">
                            <div className="bg-[#1A1A1A] rounded-2xl p-4 shadow-xl border border-[#333]">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14 rounded-full border-2 border-[#1A1A1A] overflow-hidden -mt-10 bg-white">
                                            <img src="https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-contain p-1" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight">Pizza Hut</h3>
                                            <div className="flex items-center gap-1 text-[#888] text-xs mt-1">
                                                <Utensils size={10} /> <span>Alimentação</span>
                                                <span>•</span>
                                                <MapPin size={10} /> <span>1,5km</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-center gap-1 text-[#FFAB00] text-xs font-bold">
                                            <Star size={12} fill="currentColor" /> 4.8
                                        </div>
                                        <span className="text-[10px] text-[#666]">(1.2k)</span>
                                    </div>
                                </div>

                                {/* Cashback Engine */}
                                <div className="mt-4 bg-[#E91482]/10 border border-[#E91482]/30 rounded-xl p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#E91482] p-2 rounded-lg text-white">
                                            <Ticket size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[#E91482] font-bold text-sm">Até 30% de Cashback</p>
                                            <p className="text-[10px] text-[#E91482]/80">Para a turma de sua escolha</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#E91482] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-[#E91482]/20">
                                        Ativar
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search & Content */}
                        <div className="p-4 bg-[#0F0F0F] min-h-[400px]">
                            {/* Search */}
                            <div className="relative mb-6">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
                                <input type="text" placeholder="Buscar no cardápio..." className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#E91482]" />
                            </div>

                            {/* Highlights Carousel */}
                            <div className="mb-6">
                                <h4 className="text-white font-bold text-sm mb-3">Destaques da Semana</h4>
                                <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                                    {/* Item 1 */}
                                    <div className="min-w-[140px] bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                                        <div className="h-24 bg-gray-800 relative">
                                            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                                            <div className="absolute top-2 right-2 bg-[#00C853] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">OFF</div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-white text-xs font-bold truncate">Pepperoni Lovers</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[#00C853] text-xs font-bold">R$ 49,90</span>
                                                <span className="text-[#666] text-[10px] line-through">R$ 65</span>
                                            </div>
                                            <button className="w-full mt-2 bg-[#E91482] text-white text-[10px] font-bold py-1.5 rounded">ADICIONAR</button>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="min-w-[140px] bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                                        <div className="h-24 bg-gray-800 relative">
                                            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <p className="text-white text-xs font-bold truncate">Supreme Cheesy</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-white text-xs font-bold">R$ 55,90</span>
                                            </div>
                                            <button className="w-full mt-2 border border-[#E91482] text-[#E91482] text-[10px] font-bold py-1.5 rounded hover:bg-[#E91482] hover:text-white transition-colors">ADICIONAR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Menu List */}
                            <div className="space-y-4">
                                <h4 className="text-white font-bold text-sm">Carro-chefe</h4>
                                <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex gap-3">
                                    <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-white text-xs font-bold">Brasileira Premium</h5>
                                        <p className="text-[#888] text-[10px] leading-tight mt-1 line-clamp-2">Catupiry original, frango desfiado, milho, bacon crocante e azeitonas.</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-[#00C853] text-xs font-bold">R$ 62,90</span>
                                            <button className="text-[#E91482] text-[10px] font-bold uppercase">Adicionar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#333] flex gap-3">
                                    <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1593560708920-63984dc36d3c?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-white text-xs font-bold">Corn & Bacon</h5>
                                        <p className="text-[#888] text-[10px] leading-tight mt-1 line-clamp-2">Muçarela, creme de milho especial e fatias de bacon.</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-white text-xs font-bold">R$ 58,90</span>
                                            <button className="text-[#E91482] text-[10px] font-bold uppercase">Adicionar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Description Text */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <Heart className="text-[#E91482]" /> O Ponto de Vista do Padrinho
                        </h3>
                        <p className="text-[#888]">
                            Para o usuário final (Padrinho), o app deve ser um marketplace atraente e fácil de usar. O foco é na conversão rápida e na percepção de vantagem (Cashback).
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <FeatureRow 
                            icon={<Store className="text-[#FFAB00]" />} 
                            title="Identidade & Localização" 
                            desc="Capa visual de impacto, avatar da marca e geolocalização ativa para mostrar a conveniência." 
                        />
                        <FeatureRow 
                            icon={<Ticket className="text-[#E91482]" />} 
                            title="Engine de Fidelização" 
                            desc="Destaque agressivo para o Cashback (Cor Rosa #E91482). O usuário vê imediatamente quanto vai ajudar a turma." 
                        />
                        <FeatureRow 
                            icon={<Layout className="text-[#00C853]" />} 
                            title="Vitrine & Destaques" 
                            desc="Carrossel horizontal para promoções e lista vertical infinita para o cardápio completo." 
                        />
                        <FeatureRow 
                            icon={<Smartphone className="text-blue-400" />} 
                            title="UX de Decisão Rápida" 
                            desc="Botões de ação 'Adicionar' acessíveis, busca interna e navegação transparente sobreposta." 
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 9: GAMIFICATION */}
        <div className="mb-24">
             <div className="bg-gradient-to-r from-[#FFAB00] to-[#FFD740] rounded-3xl p-1 text-[#000]">
                <div className="bg-[#000] rounded-[22px] p-8 md:p-12 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFAB00 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-[#FFF] mb-4">Engajamento via Gamificação</h2>
                            <p className="text-[#AAA] mb-6 text-lg">
                                Para manter os universitários pagando em dia e engajados no app, criamos um sistema de sorteios de itens de alto valor.
                            </p>
                            <ul className="space-y-3 text-[#CCC]">
                                <li className="flex items-center gap-2"><Gift className="text-[#FFAB00]" size={20} /> Carros e Motos 0km</li>
                                <li className="flex items-center gap-2"><Smartphone className="text-[#FFAB00]" size={20} /> iPhones e MacBooks</li>
                                <li className="flex items-center gap-2"><Ticket className="text-[#FFAB00]" size={20} /> Ingressos para shows Sold Out</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="bg-[#1A1A1A] border border-[#FFAB00] p-6 rounded-2xl text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="text-[#FFAB00] font-bold text-6xl font-mono mb-2">#01</div>
                                <p className="text-white font-bold text-xl">Lugar no Ranking</p>
                                <p className="text-[#888] text-sm mt-2">Turma de Direito - PUC</p>
                                <div className="mt-4 pt-4 border-t border-[#333]">
                                    <p className="text-[#FFAB00] text-sm font-bold">Prêmio: Festa no Iate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#333] pt-12">
            <p className="text-[#888] font-mono mb-4">PineapplePay - Desenvolvido por Fábio Lucas</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#E91482] text-[#FFF] font-bold rounded hover:bg-[#C2185B] transition-colors shadow-[0_0_20px_rgba(233,20,130,0.4)]"
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
    <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333] rounded-full text-[#AAAAAA] text-xs hover:border-[#E91482] hover:text-[#E91482] transition-colors cursor-default">
        {icon}
        <span>{label}</span>
    </div>
);

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A1A1A] border border-[#333]">
        <div className="mt-1">{icon}</div>
        <div>
            <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
            <p className="text-[#888] text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

const ManagerActionIcon = ({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) => (
    <div className="flex flex-col items-center gap-2 bg-[#1A1A1A] p-3 rounded-xl border border-[#333] hover:bg-[#222] transition-colors cursor-pointer">
        <div className={color}>{icon}</div>
        <span className="text-[10px] text-[#888] font-bold">{label}</span>
    </div>
);

const NavIcon = ({ icon, active }: { icon: React.ReactNode, active?: boolean }) => (
    <div className={`${active ? 'text-[#E91482]' : 'text-[#666]'} cursor-pointer hover:text-white transition-colors`}>
        {icon}
    </div>
);

const TechItem = ({ code, label }: { code: string, label: string }) => (
    <div className="bg-[#111] px-3 py-2 rounded border border-[#333] flex items-center justify-between group hover:border-[#444] transition-colors">
        <span className="text-white text-xs font-medium">{label}</span>
        <span className="text-[#666] text-[10px] font-mono group-hover:text-[#E91482] transition-colors">{code}</span>
    </div>
);

const LuxuryCard = ({ title, desc, icon, image }: { title: string, desc: string, icon: React.ReactNode, image: string }) => (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#333] group hover:border-[#E91482] transition-colors">
        <div className="h-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-colors"></div>
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-2 left-2 z-20 text-white flex items-center gap-2 font-bold text-sm">
                {icon} {title}
            </div>
        </div>
        <div className="p-4">
            <p className="text-[#888] text-xs">{desc}</p>
        </div>
    </div>
);

// --- Sub-components from Landing Page adapted for Case Study context ---

const TimelineItem = ({ step, title, desc, icon, color, align }: { step: string, title: string, desc: string, icon: React.ReactNode, color: string, align: 'left' | 'right' }) => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px", once: true }}
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

const LandingStoreButton = ({ store }: { store: 'apple' | 'google' }) => {
    const isApple = store === 'apple';
    
    return (
      <button className={`flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-gray-200 text-[#101820] rounded-xl transition-transform hover:-translate-y-1 active:scale-95 shadow-lg group relative overflow-hidden`}>
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

export default PineapplePayCaseStudy;