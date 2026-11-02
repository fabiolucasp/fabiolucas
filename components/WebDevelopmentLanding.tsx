import { PROFILE } from '../constants';
import SectionLink from './SectionLink';
import React from 'react';
import { Rocket, CheckCircle2, Zap, Brain, Layout, CreditCard, Calendar, Smartphone, Lock, ArrowRight, ShieldCheck, Star, Code2, BookOpen, Layers } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const WebDevelopmentLanding: React.FC = () => {
  return (
    <div className="bg-[#000000] min-h-screen pt-20 font-sans text-[#EEEEEE]">
      
      {/* HEADER NAVIGATION BACK */}
      <div className="absolute top-24 left-6 z-20">
          <NavLink to="/servicos" className="flex items-center gap-2 text-[#888] hover:text-[#44D62C] transition-colors font-mono text-sm">
              <ArrowRight className="rotate-180" size={16} /> Voltar para Seleção
          </NavLink>
      </div>

      {/* HERO SECTION: A Estratégia "Zero Concorrência" */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#44D62C]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#44D62C]/10 border border-[#44D62C]/30 text-[#44D62C] font-mono text-xs mb-8 uppercase tracking-widest animate-pulse">
                <Zap size={14} />
                <span>Estratégia de Alto Impacto</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-mono">
                Seu Site Atual está <span className="text-red-500 line-through decoration-red-500/50">Perdendo Dinheiro</span>. <br />
                Eu Construo a <span className="text-[#44D62C]">Máquina de Vendas</span>.
            </h1>
            
            <p className="text-[#AAAAAA] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                A maioria das empresas locais tem sites "cartão de visita" que não convertem. Eu utilizo <strong>Inteligência Artificial</strong> para analisar seus concorrentes, reescrever sua copy e entregar uma plataforma moderna, rápida e focada em uma única coisa: <strong>Resultado</strong>.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <SectionLink id="pricing" className="px-8 py-4 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-[#5aff3d] transition-all shadow-[0_0_20px_rgba(68,214,44,0.4)] uppercase tracking-wider font-mono flex items-center justify-center gap-2">
                    <Rocket size={20} />
                    Contratar Agora
                </SectionLink>
                <SectionLink id="process" className="px-8 py-4 bg-[#111] text-white border border-[#333] font-bold rounded-lg hover:border-[#44D62C] transition-all uppercase tracking-wider font-mono">
                    Como Funciona?
                </SectionLink>
            </div>
        </div>
      </section>

      {/* AUTHORITY SECTION: O que eu já fiz (NavBar Recap) */}
      <section className="py-20 bg-[#0A0A0A] border-y border-[#333]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-mono mb-4">Por que confiar em mim?</h2>
                <p className="text-[#888]">Não sou apenas um "fazedor de sites". Sou um Engenheiro de Software Sênior com ecossistema próprio.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* 1. O DEV (Home/Exp) */}
                <div className="bg-[#000] p-8 rounded-2xl border border-[#333] hover:border-[#44D62C] transition-colors group">
                    <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center text-[#44D62C] mb-6 group-hover:scale-110 transition-transform">
                        <Code2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-mono">Senior Full-Stack</h3>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">
                        Com experiência em órgãos públicos (Controladoria Geral) e Fintechs (PineapplePay), desenvolvo soluções seguras e escaláveis. Minha stack inclui <strong>Flutter, Firebase, Node.js e Cloud Computing</strong>.
                    </p>
                    <NavLink to="/" className="text-[#44D62C] text-xs font-bold uppercase tracking-wider hover:underline">Ver Portfólio Completo →</NavLink>
                </div>

                {/* 2. O AUTOR (E-books) */}
                <div className="bg-[#000] p-8 rounded-2xl border border-[#333] hover:border-[#44D62C] transition-colors group">
                    <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                        <BookOpen size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-mono">Autor Técnico</h3>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">
                        Crio documentação técnica de alto nível. Meus E-books cobrem desde <strong>Automação Python</strong> e <strong>Clones de Apps (Instagram)</strong> até discussões jurídicas sobre <strong>IA e Advocacia</strong>.
                    </p>
                    <NavLink to="/ebooks" className="text-blue-400 text-xs font-bold uppercase tracking-wider hover:underline">Ver Biblioteca →</NavLink>
                </div>

                {/* 3. O MENTOR (Cursos) */}
                <div className="bg-[#000] p-8 rounded-2xl border border-[#333] hover:border-[#44D62C] transition-colors group">
                    <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                        <Layers size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-mono">Instrutor Especialista</h3>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">
                        Fundador da Formação Flutter Full-Stack. Ensino arquitetura de software, Clean Code e integração de IAs para centenas de alunos. Eu aplico o que ensino.
                    </p>
                    <NavLink to="/cursos" className="text-yellow-400 text-xs font-bold uppercase tracking-wider hover:underline">Conhecer Cursos →</NavLink>
                </div>
            </div>
        </div>
      </section>

      {/* DIFFERENTIAL: O Sistema de Gestão (Mandatory) */}
      <section id="process" className="py-24 px-6 relative overflow-hidden">
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#44D62C]/5 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto max-w-6xl">
            <div className="bg-[#111] border border-[#333] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#44D62C]/10 text-[#44D62C] rounded-lg text-xs font-bold uppercase tracking-widest mb-6 border border-[#44D62C]/20">
                            <Lock size={14} /> Aplicativo em desenvolvimento
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono">
                            Acompanhe seu projeto no <span className="text-[#44D62C]">Portal do Cliente</span>
                        </h2>
                        <p className="text-[#AAA] text-lg mb-8 leading-relaxed">
                            A vitrine é o ponto de atendimento da agência. O <strong>aplicativo do cliente</strong> está em desenvolvimento para distribuição nas lojas; uma opção web poderá ser configurada futuramente. A central interna de gestão é separada.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-[#44D62C]" /> Escopo inicial: projetos, etapas, tarefas e progresso
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-[#44D62C]" /> Acesso sujeito à disponibilização do aplicativo
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-[#44D62C]" /> Integrações de reuniões e IA: possibilidades futuras
                            </li>
                        </ul>
                        <div className="mt-8">
                            <NavLink to="/cliente" className="text-white underline hover:text-[#44D62C]">Ver detalhes do Aplicativo do Cliente</NavLink>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-black rounded-xl border border-[#333] flex items-center justify-center relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#44D62C]/20 to-transparent opacity-50"></div>
                            <Smartphone size={120} className="text-[#333] relative z-10" />
                            
                            {/* Notification Popups Simulation */}
                            <div className="absolute top-10 right-10 bg-[#222] p-4 rounded-lg border-l-4 border-[#44D62C] shadow-xl w-64 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="text-[#44D62C] text-xs font-bold mb-1 flex items-center gap-1"><Zap size={10} /> Update</div>
                                <div className="text-white text-xs">Commit: "Integração Stripe Finalizada"</div>
                            </div>
                            
                            <div className="absolute bottom-10 left-10 bg-[#222] p-4 rounded-lg border-l-4 border-blue-500 shadow-xl w-64 animate-bounce" style={{ animationDuration: '4s' }}>
                                <div className="text-blue-500 text-xs font-bold mb-1 flex items-center gap-1"><Calendar size={10} /> Agenda</div>
                                <div className="text-white text-xs">Reunião de Entrega: Amanhã às 14h</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* PRICING & AUTOMATIC HIRING (Mandatory) */}
      <section aria-label="Referências de proposta — contratação mediante confirmação" id="pricing" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-[#44D62C] font-mono tracking-wider uppercase text-sm">Contratação Automática</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] mt-4 mb-4 font-mono">Escolha seu Modelo</h2>
                <p className="text-[#AAAAAA] max-w-2xl mx-auto">
                    Sem burocracia. Selecione o pacote, insira seus dados e inicie o projeto imediatamente. Ou agende uma consultoria estratégica paga.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* CARD 1: CONSULTORIA (PAID MEETING) */}
                <div className="bg-[#111] p-8 rounded-3xl border border-[#333] hover:border-white transition-all flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                            <Calendar size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white font-mono">Consultoria Estratégica</h3>
                        <p className="text-[#888] mt-2 text-sm">Para quem precisa de direção técnica antes de investir.</p>
                    </div>

                    <div className="mb-8">
                        <span className="text-4xl font-bold text-white">R$ 500</span>
                        <span className="text-[#666]"> / hora</span>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-[#CCC] text-sm">
                            <CheckCircle2 size={16} className="text-white" /> Diagnóstico de Arquitetura
                        </li>
                        <li className="flex items-center gap-3 text-[#CCC] text-sm">
                            <CheckCircle2 size={16} className="text-white" /> Code Review Ao Vivo
                        </li>
                        <li className="flex items-center gap-3 text-[#CCC] text-sm">
                            <CheckCircle2 size={16} className="text-white" /> Planejamento de Roadmap
                        </li>
                        <li className="flex items-center gap-3 text-[#CCC] text-sm">
                            <CheckCircle2 size={16} className="text-white" /> Gravação e transcrição sob consulta
                        </li>
                    </ul>

                    <button 
                        onClick={() => { window.location.href = `mailto:${PROFILE.email}?subject=Solicitar%20proposta`; }}
                        className="w-full py-4 bg-[#222] text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all border border-[#333] flex items-center justify-center gap-2"
                    >
                        Consultar agenda por email
                        <ArrowRight size={16} />
                    </button>
                    <p className="text-center text-[#444] text-[10px] mt-3 font-mono uppercase">Condições e agenda a confirmar</p>
                </div>

                {/* CARD 2: WEBSITE EXPRESS (AUTOMATIC HIRING) */}
                <div className="bg-[#111] p-8 rounded-3xl border-2 border-[#44D62C] shadow-[0_0_30px_rgba(68,214,44,0.1)] flex flex-col relative overflow-hidden transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-[#44D62C] text-black text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                        Recomendado
                    </div>
                    
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-[#44D62C] rounded-xl flex items-center justify-center text-black mb-4">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white font-mono">Site "Máquina de Vendas"</h3>
                        <p className="text-[#888] mt-2 text-sm">Reformulação completa do seu site atual utilizando IA e Design de Conversão.</p>
                    </div>

                    <div className="mb-8">
                        <span className="text-4xl font-bold text-[#44D62C]">R$ 1.500</span>
                        <span className="text-[#666]"> (Pagamento Único)</span>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-[#EEEEEE] text-sm">
                            <CheckCircle2 size={16} className="text-[#44D62C]" /> <strong className="text-white">Análise de IA:</strong> Estudo do seu concorrente
                        </li>
                        <li className="flex items-center gap-3 text-[#EEEEEE] text-sm">
                            <CheckCircle2 size={16} className="text-[#44D62C]" /> <strong className="text-white">Copywriting Persuasivo:</strong> Reescrita de textos
                        </li>
                        <li className="flex items-center gap-3 text-[#EEEEEE] text-sm">
                            <CheckCircle2 size={16} className="text-[#44D62C]" /> <strong className="text-white">Design Moderno:</strong> Mobile-first e Rápido
                        </li>
                        <li className="flex items-center gap-3 text-[#EEEEEE] text-sm">
                            <CheckCircle2 size={16} className="text-[#44D62C]" /> <strong className="text-white">Integração WhatsApp:</strong> Botão de ação flutuante
                        </li>
                        <li className="flex items-center gap-3 text-[#EEEEEE] text-sm">
                            <CheckCircle2 size={16} className="text-[#44D62C]" /> <strong>Portal do Cliente</strong> sujeito à disponibilização
                        </li>
                    </ul>

                    <button 
                        onClick={() => { window.location.href = `mailto:${PROFILE.email}?subject=Solicitar%20proposta`; }}
                        className="w-full py-4 bg-[#44D62C] text-black font-bold rounded-xl hover:bg-[#5aff3d] transition-all shadow-lg shadow-[#44D62C]/20 flex items-center justify-center gap-2"
                    >
                        <CreditCard size={18} />
                        Solicitar proposta por email
                    </button>
                    <p className="text-center text-[#666] text-[10px] mt-3 font-mono">Sem cobrança pelo site • Prazo a combinar</p>
                </div>

            </div>
        </div>
      </section>

      {/* MENTALIDADE (LOCOMOTIVA VS VAGÃO) - Footer Note */}
      <section className="py-20 border-t border-[#333] text-center px-6">
          <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">Locomotiva ou Vagão?</h3>
              <p className="text-[#888] italic mb-8">
                  "O mundo se divide entre quem puxa o progresso e quem é arrastado por ele. Ao investir em tecnologia de ponta para o seu negócio, você decide ser a Locomotiva do seu mercado."
              </p>
              <p className="text-[#44D62C] font-bold font-mono">Fábio Lucas</p>
          </div>
      </section>

    </div>
  );
};

export default WebDevelopmentLanding;