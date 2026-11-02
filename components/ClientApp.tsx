import React from 'react';
import { Link } from 'react-router-dom';
import { GitCommit, Bell, CalendarDays, Video, Smartphone } from 'lucide-react';
import LottieIcon from './ui/LottieIcon';

const ClientPortal: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#44D62C]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="bg-[#111111] border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Content Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#44D62C]/10 border border-[#44D62C]/20 text-[#44D62C] text-xs font-mono font-bold tracking-wider uppercase">
                <div className="mr-2 w-4 h-4 flex items-center justify-center">
                    <Smartphone size={16} />
                </div>
                FounderOS · Prévia do portal
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] mb-4 font-mono leading-tight">
                  Acompanhe o desenvolvimento <span className="text-[#44D62C]">em tempo real</span>.
                </h2>
                <p className="text-[#AAAAAA] text-lg font-sans leading-relaxed">
                  O aplicativo do cliente está em desenvolvimento em Flutter, com distribuição prevista pela App Store e Google Play. O escopo inicial reúne projetos, etapas, tarefas e progresso; ele é separado da central interna da agência. Esta tela é uma demonstração visual: notificações, reuniões, IA e integrações abaixo são possibilidades futuras, não serviços já ativos.
                </p>
              </div>

              <Link to="/login" className="inline-block px-6 py-3 rounded-lg bg-[#44D62C] text-black font-bold">Consultar acesso ao portal</Link>

              {/* Features List */}
              <div className="space-y-4">
                <FeatureTile 
                  icon={<GitCommit size={24} />}
                  title="Integração GitHub"
                  description="Receba um push notification detalhado a cada commit realizado no repositório do seu projeto."
                />
                <FeatureTile 
                  icon={<Bell size={24} />}
                  title="Feed Semanal & Updates"
                  description="Resumo automático das atividades e milestones alcançados durante a semana, com vídeos gravados da tela do app."
                />
                <FeatureTile 
                  icon={<CalendarDays size={24} />} 
                  title="Agendamento de Reuniões"
                  description="Solicite e agende reuniões a qualquer momento, visualizando dias, horários e duração disponíveis no calendário."
                />
                 <FeatureTile 
                  icon={<Video size={24} />} 
                  title="Transcrição de Reuniões (IA)"
                  description="Upload automático de todas as reuniões. Aplicação de Machine Learning (TensorFlow) para transcrever, legendar e tornar o conteúdo pesquisável por palavras-chave."
                />
              </div>

              {/* Store Buttons - Keep for visual consistency, even if not fully functional yet */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <StoreButton store="google" />
                <StoreButton store="apple" />
              </div>
            </div>

            {/* Visual Column - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                {/* Phone Frame */}
                <div className="relative w-[300px] h-[600px] bg-[#000] border-8 border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden z-10 hover:scale-105 transition-transform duration-700">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full bg-[#0A0A0A] pt-12 px-4 flex flex-col relative">
                        {/* Header App */}
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-[#44D62C] font-mono font-bold text-lg">Prévia ilustrativa</span>
                            <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center overflow-hidden text-[#44D62C]">
                                <Smartphone size={20} />
                            </div>
                        </div>

                        {/* Notification Card (Commit) */}
                        <div className="bg-[#1a1a1a] p-4 rounded-2xl border-l-4 border-[#44D62C] mb-4 shadow-lg animate-pulse">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2 text-[#44D62C] text-xs font-mono">
                                    <GitCommit size={14} />
                                    <span>New Commit</span>
                                </div>
                                <span className="text-[10px] text-[#666]">Agora</span>
                            </div>
                            <p className="text-[#EEE] text-sm font-sans font-medium">feat: Implementação do gateway de pagamento</p>
                            <p className="text-[#888] text-xs mt-1 font-mono">hash: 8f3a2c1</p>
                        </div>

                         {/* Notification Card (Meeting Scheduled) */}
                         <div className="bg-[#1a1a1a] p-4 rounded-2xl border-l-4 border-[#44D62C] mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2 text-[#44D62C] text-xs font-mono">
                                    <CalendarDays size={14} />
                                    <span>Reunião Agendada</span>
                                </div>
                                <span className="text-[10px] text-[#666]">5 min atrás</span>
                            </div>
                            <p className="text-[#EEE] text-sm font-sans font-medium">Reunião para 03/10 às 14:00 (30 min).</p>
                        </div>

                        {/* Graph/Visual Placeholder */}
                        <div className="mt-auto mb-8 bg-[#1a1a1a] rounded-2xl p-4 h-32 border border-[#333] flex items-end justify-between px-2 gap-1 relative overflow-hidden">
                            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                <div key={i} style={{height: `${h}%`}} className="w-full bg-[#44D62C]/20 rounded-t-sm relative group z-10">
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#44D62C] h-1 group-hover:h-full transition-all duration-500 opacity-50"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decor Circle behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#44D62C]/30 rounded-full z-0 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#44D62C]/10 rounded-full z-0 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for List Tile (MD3 Style)
const FeatureTile = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-[#333] group">
    <div className="text-[#44D62C] mt-1 p-2 bg-[#44D62C]/10 rounded-lg relative overflow-hidden flex items-center justify-center">
       <LottieIcon icon={icon} size={24} playOnHover />
    </div>
    <div>
      <h3 className="text-[#EEEEEE] font-bold font-mono text-lg">{title}</h3>
      <p className="text-[#AAAAAA] text-sm font-sans leading-relaxed">{description}</p>
    </div>
  </div>
);

// Sub-component for Store Buttons
const StoreButton = ({ store }: { store: 'apple' | 'google' }) => {
  const isApple = store === 'apple';
  
  return (
    <button disabled aria-label={isApple ? "App Store: aplicativo em desenvolvimento" : "Google Play: aplicativo em desenvolvimento"} className="opacity-60 cursor-not-allowed flex items-center justify-center gap-3 px-6 py-3 bg-[#EEEEEE] hover:bg-[#FFFFFF] text-black rounded-xl transition-transform hover:-translate-y-1 active:scale-95 shadow-lg group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      {isApple ? (
        <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
           <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 98.6 126.7 25.8 0 32.2-19.1 75.5-19.1 42.9 0 49.3 19.1 75.9 19.1 50.7 0 85.9-92.3 97.4-126.3-43.6-15.6-70.4-53.5-70.4-90.4zm-64.3-157c19.5-22.1 33-53 28-82.9-29.2 1.4-60.7 20.2-80.1 44.2-16.7 20.7-32.2 53-27.4 82.5 31.8 2.3 61.8-22 79.5-43.8z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
           <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
        </svg>
      )}
      <div className="text-left relative z-10">
        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 font-sans">
          Aplicativo em desenvolvimento
        </div>
        <div className="text-sm font-bold font-sans leading-none">
          {isApple ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </button>
  );
};

export default ClientPortal;