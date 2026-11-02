import React from 'react';
import { LogIn, ArrowLeft, ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { validateAppUrl } from '../services/appUrl';

const appUrl = validateAppUrl(import.meta.env.VITE_APP_URL, import.meta.env.DEV);

const LoginScreen: React.FC = () => (
  <section className="min-h-screen flex items-center justify-center bg-[#000000] py-20 px-6 relative">
    <NavLink to="/" className="absolute top-8 left-8 text-[#AAAAAA] hover:text-[#44D62C] flex items-center gap-2">
      <ArrowLeft size={20} /> Voltar
    </NavLink>
    <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-[#333] max-w-md w-full shadow-2xl text-center">
      <LogIn size={48} className="text-[#44D62C] mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-[#EEEEEE] font-mono">FounderOS</h1>
      <p className="text-[#AAAAAA] mt-4 mb-8">Aplicativo do cliente em desenvolvimento para App Store e Google Play. Esta vitrine é o ponto de atendimento da agência, não a central interna de gestão. Uma opção web poderá ser disponibilizada futuramente. Seu login acontece somente no aplicativo, nunca nesta vitrine.</p>
      {appUrl ? (
        <>
          <a href={appUrl} rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#44D62C] text-black font-bold py-4 rounded-lg hover:bg-[#5aff3d]">
            Abrir FounderOS <ExternalLink size={18} />
          </a>
          <p className="text-xs text-[#AAAAAA] mt-4 break-all">Destino: {new URL(appUrl).origin}</p>
        </>
      ) : (
        <p role="status" className="text-[#AAAAAA] border border-[#333] rounded-lg p-4">Acesso ainda indisponível. O endereço do aplicativo ainda não foi configurado nesta vitrine.</p>
      )}
    </div>
  </section>
);
export default LoginScreen;
