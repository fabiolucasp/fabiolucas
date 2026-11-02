import CaseStatusNotice from './CaseStatusNotice';
import React, { useEffect } from 'react';
import { X, Trophy, GraduationCap, Car, ChevronRight, Bell, Battery, Wifi, Signal, SkipForward, UserPlus, LogIn, MapPin, Award, CheckCircle2, Layout, Type, MousePointerClick, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface CfcFocusCaseStudyProps {
  onClose: () => void;
}

const CfcFocusCaseStudy: React.FC<CfcFocusCaseStudyProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors for CFC Focus
  // Gradient Start: #01743A
  // Gradient End: #02DA6D
  // Notification: #FBC84C
  // Background: #050A07
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#050A07] overflow-y-auto font-sans selection:bg-[#02DA6D] selection:text-[#000]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#050A07]/90 backdrop-blur-md border-b border-[#02DA6D]/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#01743A] to-[#02DA6D] p-1.5 rounded-lg">
                <Car size={20} className="text-white" />
            </div>
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-wide">CFC <span className="text-[#02DA6D]">Focus</span></div>
        </div>
        <button 
          aria-label="Fechar case CFC Focus"
          onClick={onClose}
          className="p-2 rounded-full bg-[#111] text-[#02DA6D] hover:bg-[#02DA6D] hover:text-[#000] transition-all border border-[#02DA6D]/30"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        <CaseStatusNotice name="CFC Focus" />
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[60vh] relative">
          <div className="space-y-8 animate-fade-in-up relative z-10">
            <div className="inline-block px-4 py-1 border border-[#02DA6D] text-[#02DA6D] rounded-full text-xs font-mono uppercase tracking-widest bg-[#02DA6D]/10">
              EdTech & Mobilidade
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              A Jornada da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01743A] to-[#02DA6D]">Sua CNH</span>
            </h1>
            <p className="text-[#94A3B8] text-lg max-w-xl leading-relaxed">
              Uma plataforma gamificada que transforma o processo burocrático da autoescola em uma jornada de conquistas. Do onboarding ao exame prático.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <FeatureTag icon={<Trophy size={14} />} label="Gamificação" />
               <FeatureTag icon={<GraduationCap size={14} />} label="Foco na Aprovação" />
               <FeatureTag icon={<Car size={14} />} label="Categoria B (SUV)" />
            </div>
          </div>
          
          <div className="relative h-[650px] flex items-center justify-center">
            {/* Background Texture (Asphalt) */}
            <div className="absolute inset-0 bg-[#111] rounded-full blur-[100px] opacity-50"></div>
            
            {/* Phone Mockup - Onboarding Screen */}
            <div className="relative w-[320px] h-[650px] bg-[#000] rounded-[3rem] border-[8px] border-[#1A1A1A] overflow-hidden shadow-2xl z-10 transform rotate-[-3deg] hover:rotate-0 transition-all duration-500">
                
                {/* Custom Status Bar */}
                <div className="bg-transparent absolute top-0 left-0 right-0 px-6 py-3 flex justify-between items-center z-30 text-white">
                    <span className="text-xs font-bold">9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <Signal size={12} />
                        <Wifi size={12} />
                        <div className="flex items-center gap-0.5">
                            <span className="text-[10px] font-bold">100%</span>
                            <Battery size={16} className="text-[#02DA6D] fill-[#02DA6D]" />
                        </div>
                    </div>
                </div>

                {/* Onboarding Content */}
                <div className="w-full h-full bg-gradient-to-b from-[#050A07] to-[#001F0F] relative flex flex-col">
                    {/* Skip Button */}
                    <div className="absolute top-14 right-6 z-20">
                        <button disabled title="Demonstração visual: ação indisponível nesta vitrine" className="text-white/60 text-xs font-medium hover:text-white flex items-center gap-1">
                            Pular <SkipForward size={12} />
                        </button>
                    </div>

                    {/* Image/Illustration Area */}
                    <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                        {/* Asphalt Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 mix-blend-overlay"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#02DA6D]/20 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10 text-center">
                            <Car size={120} className="text-[#02DA6D] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(2,218,109,0.5)]" />
                            <div className="bg-[#FBC84C] text-black text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1 shadow-lg">
                                <Bell size={10} fill="black" /> Nova Aula Disponível
                            </div>
                        </div>
                    </div>

                    {/* Bottom Sheet UI */}
                    <div className="bg-[#111] rounded-t-[2.5rem] p-8 pb-10 relative">
                        <div className="w-12 h-1.5 bg-[#333] rounded-full mx-auto mb-6"></div>
                        
                        <h2 className="text-2xl font-bold text-white mb-3 font-poppins text-center">
                            Liberdade sobre <br/> <span className="text-[#02DA6D]">quatro rodas</span>
                        </h2>
                        <p className="text-gray-400 text-sm text-center mb-8 font-inter leading-relaxed">
                            Acompanhe seu progresso, marque aulas e conquiste sua independência com o método Focus.
                        </p>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mb-8">
                            <div className="w-6 h-2 bg-[#02DA6D] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                        </div>

                        {/* CTA Button */}
                        <button disabled title="Demonstração visual: ação indisponível nesta vitrine" className="w-full bg-gradient-to-r from-[#01743A] to-[#02DA6D] text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(1,116,58,0.4)] flex items-center justify-center gap-2 group">
                            Comece agora
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: ONBOARDING & GAMIFICATION */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-l-4 border-[#02DA6D] pl-4 font-poppins">Experiência Gamificada</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1: Value Prop */}
                <div className="bg-[#0F1411] p-6 rounded-2xl border border-[#1F2923] hover:border-[#02DA6D] transition-all group">
                    <div className="w-12 h-12 bg-[#02DA6D]/10 rounded-xl flex items-center justify-center text-[#02DA6D] mb-4 group-hover:scale-110 transition-transform">
                        <Trophy size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-poppins">Conquistas & XP</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 font-inter">
                        Cada aula teórica ou prática concluída gera pontos. O aluno visualiza seu avanço não apenas em horas, mas em conquistas desbloqueadas.
                    </p>
                </div>

                {/* Card 2: Goal Visualization */}
                <div className="bg-[#0F1411] p-6 rounded-2xl border border-[#1F2923] hover:border-[#FBC84C] transition-all group">
                    <div className="w-12 h-12 bg-[#FBC84C]/10 rounded-xl flex items-center justify-center text-[#FBC84C] mb-4 group-hover:scale-110 transition-transform">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-poppins">Foco na CNH</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 font-inter">
                        O objetivo final é sempre visível. Uma barra de progresso global mostra o quão perto o aluno está de pegar sua habilitação.
                    </p>
                </div>

                {/* Card 3: Segmentation */}
                <div className="bg-[#0F1411] p-6 rounded-2xl border border-[#1F2923] hover:border-[#01743A] transition-all group">
                    <div className="w-12 h-12 bg-[#01743A]/20 rounded-xl flex items-center justify-center text-[#01743A] mb-4 group-hover:scale-110 transition-transform">
                        <Car size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-poppins">Categoria Utilitários</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 font-inter">
                        Design adaptado para exibir veículos específicos da categoria B, com destaque para SUVs e utilitários modernos usados nas aulas.
                    </p>
                </div>
            </div>
        </div>

        {/* SECTION 2: ACCESS & CONVERSION (AUTH FLOW) */}
        <div className="mb-32 bg-[#0A0F0C] rounded-[3rem] p-8 md:p-16 border border-[#1F2923] relative overflow-hidden">
            {/* Asphalt Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <span className="text-[#02DA6D] font-bold tracking-widest uppercase text-sm font-mono mb-2 block">Fluxo de Entrada</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">Acesso e Conversão</h2>
                    <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed font-inter">
                        Projetamos um fluxo duplo que atende tanto o aluno curioso (Lead) quanto o aluno matriculado. A conversão é o foco principal.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#222]">
                            <div className="bg-[#02DA6D] p-2 rounded-full text-black"><UserPlus size={18} /></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Botão "Cadastre-se" (Primário)</h4>
                                <p className="text-xs text-gray-500 mt-1">Destaque visual total com gradiente verde para capturar novos leads.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#222]">
                            <div className="bg-[#222] p-2 rounded-full text-white border border-[#333]"><LogIn size={18} /></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Botão "Entrar" (Secundário)</h4>
                                <p className="text-xs text-gray-500 mt-1">Estilo Outline (borda) para alunos que já possuem credenciais.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Representation of Buttons */}
                <div className="flex flex-col items-center justify-center space-y-6 bg-[#000] p-12 rounded-3xl border border-[#1F2923] shadow-2xl">
                    <button disabled title="Demonstração visual: ação indisponível nesta vitrine" className="w-full max-w-xs bg-gradient-to-r from-[#01743A] to-[#02DA6D] text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(1,116,58,0.4)] hover:scale-105 transition-transform flex justify-center items-center gap-2">
                        Cadastre-se Grátis <ChevronRight size={18} />
                    </button>
                    
                    <div className="w-full max-w-xs flex items-center justify-between gap-4">
                        <div className="h-px bg-[#333] flex-1"></div>
                        <span className="text-[#666] text-xs uppercase font-bold">Já é aluno?</span>
                        <div className="h-px bg-[#333] flex-1"></div>
                    </div>

                    <button disabled title="Demonstração visual: ação indisponível nesta vitrine" className="w-full max-w-xs bg-transparent border-2 border-[#333] text-white font-bold py-4 rounded-xl hover:border-[#02DA6D] hover:text-[#02DA6D] transition-colors">
                        Fazer Login
                    </button>
                </div>
            </div>
        </div>

        {/* SECTION 3: SYSTEM FEEDBACK & UI LOGIC */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 text-center font-poppins">Lógica de Interface (UI/UX)</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TechSpecCard 
                    icon={<Layout />}
                    title="Layout Responsivo"
                    desc="Projetado em 428x926px (iPhone Pro Max) com Auto Layout e espaçamento dinâmico (Gaps)."
                />
                <TechSpecCard 
                    icon={<Type />}
                    title="Tipografia Premium"
                    desc="Combinação de Poppins (Títulos) para impacto e Inter (Textos) para legibilidade educativa."
                />
                <TechSpecCard 
                    icon={<Bell className="text-[#FBC84C]" />}
                    title="Notificações Smart"
                    desc="Central de alertas com destaque Amarelo (#FBC84C) para avisos urgentes de exames."
                />
                <TechSpecCard 
                    icon={<Battery className="text-[#02DA6D]" />}
                    title="Feedback Semântico"
                    desc="Ícones de sistema que reagem ao estado (Bateria verde em 100%, Amarela em 20%)."
                />
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#1F2923] pt-12">
            <p className="text-[#555] font-mono mb-4">CFC Focus - Concept by Fábio Lucas</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#02DA6D] text-[#000] font-bold rounded hover:bg-[#01743A] hover:text-white transition-colors shadow-[0_0_20px_rgba(2,218,109,0.3)]"
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
    <div className="flex items-center gap-2 px-3 py-1 bg-[#0F1411] border border-[#1F2923] rounded-full text-[#94A3B8] text-xs hover:border-[#02DA6D] hover:text-[#02DA6D] transition-colors cursor-default">
        {icon}
        <span>{label}</span>
    </div>
);

const TechSpecCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="bg-[#0F1411] p-6 rounded-xl border border-[#1F2923] hover:border-[#02DA6D] transition-all group">
        <div className="text-[#666] group-hover:text-[#02DA6D] mb-4 transition-colors">{icon}</div>
        <h4 className="text-lg font-bold text-[#F7F7F7] mb-2 font-poppins">{title}</h4>
        <p className="text-[#666] text-xs leading-relaxed font-inter group-hover:text-[#94A3B8] transition-colors">{desc}</p>
    </div>
);

export default CfcFocusCaseStudy;