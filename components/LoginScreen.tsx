import React, { useState } from 'react';
import { 
  ShieldCheck, Smartphone, ArrowLeft, ArrowRight, Check, 
  Lock, KeyRound, Sparkles, AlertCircle, Building2
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  ADMIN_PROFILE, 
  CLIENT_PROFILES, 
  saveUser, 
  FounderUser 
} from '../services/founderOsAuth';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'admin' | 'client' | null>(null);
  const [adminPin, setAdminPin] = useState('');
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [clientPin, setClientPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      // In this management system, PIN is optional or accepted with any value / demo pin
      saveUser(ADMIN_PROFILE);
      setIsLoading(false);
      navigate('/founder-os');
    }, 350);
  };

  const handleClientLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      const client = CLIENT_PROFILES[selectedClientIndex] || CLIENT_PROFILES[0];
      saveUser(client);
      setIsLoading(false);
      navigate('/founder-os');
    }, 350);
  };

  const handleCardClick = (role: 'admin' | 'client') => {
    setSelectedRole(role);
    setErrorMessage('');
  };

  return (
    <section className="min-h-screen bg-[#000000] text-[#EEEEEE] py-12 px-4 sm:px-6 relative flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#44D62C]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#00B4D8]/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Header */}
      <header className="container mx-auto max-w-6xl flex items-center justify-between z-10">
        <NavLink 
          to="/" 
          className="text-[#AAAAAA] hover:text-[#44D62C] flex items-center gap-2 font-mono text-sm transition-colors py-2 px-3 rounded-lg hover:bg-[#111]"
        >
          <ArrowLeft size={18} /> Voltar ao Portfólio
        </NavLink>

        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#44D62C] animate-pulse"></div>
          <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
            Portal Unificado v2.5
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl my-auto py-10 z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#44D62C]/10 border border-[#44D62C]/30 text-[#44D62C] text-xs font-mono font-semibold mb-4">
            <Sparkles size={14} /> Founders OS · Gestão & Acompanhamento
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-[#EEEEEE]">
            Painel de Acesso
          </h1>
          <p className="text-[#888888] mt-3 text-sm sm:text-base">
            Selecione o perfil desejado para acessar as funcionalidades unificadas de gestão de projetos, Instagram Studio e métricas.
          </p>
        </div>

        {/* The Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* CARD 1: ADMINISTRADOR */}
          <div 
            onClick={() => handleCardClick('admin')}
            className={`group cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 relative border flex flex-col justify-between ${
              selectedRole === 'admin'
                ? 'bg-[#0E150E] border-[#44D62C] shadow-[0_0_40px_rgba(68,214,44,0.15)] ring-1 ring-[#44D62C]'
                : 'bg-[#0A0A0A] border-[#262626] hover:border-[#44D62C]/60 hover:bg-[#0D0D0D]'
            }`}
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#44D62C]/10 border border-[#44D62C]/30 flex items-center justify-center text-[#44D62C] group-hover:scale-105 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#44D62C]/15 text-[#44D62C] border border-[#44D62C]/30">
                  Full CRUD & Master
                </span>
              </div>

              <h2 className="text-2xl font-bold font-mono text-[#FFFFFF] group-hover:text-[#44D62C] transition-colors">
                Administrador
              </h2>
              <p className="text-xs font-mono text-[#44D62C] mt-1">
                Fábio Lucas · Desenvolvedor Master
              </p>

              <p className="text-[#AAAAAA] text-sm mt-4 leading-relaxed">
                Acesso completo a todos os módulos com poder irrestrito para <strong>Criar, Alterar e Deletar (CRUD)</strong> projetos, orçamentos, faturas, campanhas do Instagram Studio e automações de IA.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-[#888888]">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#44D62C] shrink-0" />
                  <span>CRUD completo de projetos, etapas e faturamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#44D62C] shrink-0" />
                  <span>Instagram Studio: criar posts, agendar e editar tokens</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#44D62C] shrink-0" />
                  <span>Radar de Tendências & CRM de Leads via WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#44D62C] shrink-0" />
                  <span>Terminal operacional, webhooks e automação com IA</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F1F1F]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdminLogin();
                }}
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl font-mono font-bold text-sm bg-[#44D62C] text-black hover:bg-[#5aff3d] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#44D62C]/20"
              >
                {isLoading && selectedRole === 'admin' ? (
                  <span>Autenticando...</span>
                ) : (
                  <>
                    <span>Entrar como Administrador</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CARD 2: CLIENTE */}
          <div 
            onClick={() => handleCardClick('client')}
            className={`group cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 relative border flex flex-col justify-between ${
              selectedRole === 'client'
                ? 'bg-[#0B1319] border-[#00B4D8] shadow-[0_0_40px_rgba(0,180,216,0.15)] ring-1 ring-[#00B4D8]'
                : 'bg-[#0A0A0A] border-[#262626] hover:border-[#00B4D8]/60 hover:bg-[#0D0D0D]'
            }`}
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/30 flex items-center justify-center text-[#00B4D8] group-hover:scale-105 transition-transform">
                  <Smartphone size={28} />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00B4D8]/15 text-[#00B4D8] border border-[#00B4D8]/30">
                  Visão & Validação
                </span>
              </div>

              <h2 className="text-2xl font-bold font-mono text-[#FFFFFF] group-hover:text-[#00B4D8] transition-colors">
                Cliente
              </h2>
              <p className="text-xs font-mono text-[#00B4D8] mt-1">
                Portal Exclusivo de Acompanhamento
              </p>

              <p className="text-[#AAAAAA] text-sm mt-4 leading-relaxed">
                Acompanhe o desenvolvimento do seu aplicativo em tempo real: commits no repositório, aprovação de telas no Figma, testes de APK/TestFlight, validação de posts e recibos de pagamento.
              </p>

              {/* Client Selection Selector */}
              <div className="mt-4 p-3 rounded-xl bg-[#141414] border border-[#222]">
                <label className="block text-[11px] font-mono text-[#888] uppercase mb-1.5 flex items-center gap-1.5">
                  <Building2 size={13} className="text-[#00B4D8]" />
                  Empresa / Projeto do Cliente:
                </label>
                <select
                  value={selectedClientIndex}
                  onChange={(e) => setSelectedClientIndex(Number(e.target.value))}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-[#0A0A0A] border border-[#333] text-[#EEE] text-xs font-mono rounded-lg p-2.5 focus:border-[#00B4D8] focus:outline-none"
                >
                  {CLIENT_PROFILES.map((c, i) => (
                    <option key={c.projectId || i} value={i}>
                      {c.name} ({c.company})
                    </option>
                  ))}
                </select>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-[#888888]">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#00B4D8] shrink-0" />
                  <span>Acompanhamento de sprints e commits do GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#00B4D8] shrink-0" />
                  <span>Aprovação de posts e calendário do Instagram</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#00B4D8] shrink-0" />
                  <span>Comprovantes de pagamento e emissão Pix QR</span>
                </li>
                <li className="flex items-center gap-2 text-[#777]">
                  <Lock size={13} className="text-amber-500/80 shrink-0" />
                  <span>Permissões seguras: sem poderes de exclusão acidental</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F1F1F]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClientLogin();
                }}
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl font-mono font-bold text-sm bg-[#00B4D8] text-black hover:bg-[#38c9e7] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00B4D8]/20"
              >
                {isLoading && selectedRole === 'client' ? (
                  <span>Carregando portal...</span>
                ) : (
                  <>
                    <span>Entrar como Cliente</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Security & Architecture Notice */}
        <div className="mt-12 text-center text-xs text-[#666] font-mono max-w-xl mx-auto flex items-center justify-center gap-2">
          <Lock size={14} className="text-[#44D62C]" />
          <span>Autenticação isolada e segura. Os dados privados dos clientes não são indexados pelo Google.</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto max-w-6xl text-center py-4 border-t border-[#1A1A1A] text-xs font-mono text-[#555] z-10">
        &copy; {new Date().getFullYear()} Fábio Lucas Dev · Founders OS Executive Platform
      </footer>
    </section>
  );
};

export default LoginScreen;
