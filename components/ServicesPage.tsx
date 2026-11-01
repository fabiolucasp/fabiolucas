import React from 'react';
import { Smartphone, Monitor, ArrowRight, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-20 font-sans text-[#EEEEEE]">
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-[#44D62C] font-mono tracking-wider uppercase text-sm border border-[#44D62C]/30 px-3 py-1 rounded-full bg-[#44D62C]/5">Soluções Digitais</span>
            <h1 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] mt-6 font-mono leading-tight">
                Selecione o Tipo de Serviço
            </h1>
            <p className="text-[#888] mt-4 font-sans max-w-2xl mx-auto text-lg">
                Escolha abaixo se você busca desenvolvimento web de alta performance ou conhecer nosso ecossistema de produtos dedicados.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* CARD 1: DESENVOLVIMENTO WEB (MÁQUINA DE VENDAS) */}
            <NavLink to="/servicos/web" className="group bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-[#333] hover:border-[#44D62C] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(68,214,44,0.1)] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#44D62C]/5 rounded-full blur-[80px] group-hover:bg-[#44D62C]/10 transition-colors pointer-events-none"></div>
                
                <div className="w-16 h-16 bg-[#111] rounded-2xl flex items-center justify-center text-[#44D62C] mb-8 border border-[#333] group-hover:scale-110 transition-transform">
                    <Monitor size={32} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 font-mono group-hover:text-[#44D62C] transition-colors">
                    Desenvolvimento Web & Sistemas
                </h3>
                
                <p className="text-[#888] text-lg leading-relaxed mb-8 font-sans flex-1">
                    Criação de sites "Máquina de Vendas", Landing Pages de alta conversão e sistemas administrativos personalizados. Ideal para empresas que buscam modernização e resultados rápidos.
                </p>

                <div className="flex items-center gap-3 text-[#44D62C] font-bold uppercase tracking-wider text-sm font-mono">
                    Ver Proposta e Preços <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
            </NavLink>

            {/* CARD 2: BICHO MIMADO (PRODUTO DEDICADO) */}
            <NavLink to="/bicho-mimado-app" className="group bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-[#333] hover:border-[#06B6D4] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4]/5 rounded-full blur-[80px] group-hover:bg-[#06B6D4]/10 transition-colors pointer-events-none"></div>
                
                <div className="w-16 h-16 bg-[#111] rounded-2xl flex items-center justify-center text-[#06B6D4] mb-8 border border-[#333] group-hover:scale-110 transition-transform">
                    <Heart size={32} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 font-mono group-hover:text-[#06B6D4] transition-colors">
                    Soluções Veterinárias (SaaS)
                </h3>
                
                <p className="text-[#888] text-lg leading-relaxed mb-8 font-sans flex-1">
                    Conheça o <strong>Bicho Mimado App</strong>. Um ecossistema completo para Clínicas Veterinárias e Pet Shops, com Taxi Dog rastreável, agendamento IA e ERP integrado.
                </p>

                <div className="flex items-center gap-3 text-[#06B6D4] font-bold uppercase tracking-wider text-sm font-mono">
                    Ver Demonstração do Produto <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
            </NavLink>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;