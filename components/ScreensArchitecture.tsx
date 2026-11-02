import React, { useState, useMemo } from 'react';
import { APPS_SCREENS_CATALOG, AppScreensCatalog, ScreenItem } from '../screensCatalogData';
import { Layers, Search, Layout, CheckCircle, ExternalLink, Code2, Smartphone, ShieldCheck } from 'lucide-react';

const ScreensArchitecture: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(APPS_SCREENS_CATALOG[0].appId);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedModule, setSelectedModule] = useState<string>('all');

  const activeApp = useMemo(() => {
    return APPS_SCREENS_CATALOG.find(app => app.appId === selectedAppId) || APPS_SCREENS_CATALOG[0];
  }, [selectedAppId]);

  const availableModules = useMemo(() => {
    const modules = new Set<string>();
    activeApp.screens.forEach(s => modules.add(s.module));
    return ['all', ...Array.from(modules)];
  }, [activeApp]);

  const filteredScreens = useMemo(() => {
    return activeApp.screens.filter(screen => {
      const matchesSearch = searchTerm.trim() === '' ||
        screen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        screen.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
        screen.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        screen.tech.toLowerCase().includes(searchTerm.toLowerCase()) ||
        screen.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesModule = selectedModule === 'all' || screen.module === selectedModule;

      return matchesSearch && matchesModule;
    });
  }, [activeApp, searchTerm, selectedModule]);

  const totalScreensCount = useMemo(() => {
    return APPS_SCREENS_CATALOG.reduce((acc, app) => acc + app.screens.length, 0);
  }, []);

  return (
    <section id="screens-architecture" className="py-24 bg-[#050505] border-t border-[#222] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#44D62C]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#06B6D4]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#44D62C]/10 border border-[#44D62C]/20 rounded-full text-xs font-mono text-[#44D62C] uppercase tracking-wider mb-4">
            <Layers size={14} /> Mapeamento Figma & Código Flutter
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] font-mono leading-tight">
            Arquitetura de Telas dos Aplicativos
          </h2>
          <p className="text-[#AAAAAA] mt-4 text-base md:text-lg leading-relaxed font-sans">
            Levantamento detalhado e organizado de todas as telas, fluxos de usuário e componentes dos 8 aplicativos, cruzando especificações de design do Figma com a implementação de software em Flutter e Firebase.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[#888]">
            <span className="flex items-center gap-1.5"><Smartphone size={14} className="text-[#44D62C]" /> 8 Aplicativos Catalogados</span>
            <span className="flex items-center gap-1.5"><Layout size={14} className="text-[#06B6D4]" /> {totalScreensCount} Telas Mapeadas</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#FFB600]" /> 100% Integrado ao Portfólio</span>
          </div>
        </div>

        {/* Apps Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 border-b border-[#222] scrollbar-thin scrollbar-thumb-[#333]">
          {APPS_SCREENS_CATALOG.map((app) => (
            <button
              key={app.appId}
              onClick={() => {
                setSelectedAppId(app.appId);
                setSelectedModule('all');
              }}
              className={`px-5 py-3 rounded-xl font-mono text-xs whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 ${
                selectedAppId === app.appId
                  ? 'bg-[#151515] text-[#44D62C] border border-[#44D62C]/50 shadow-[0_0_15px_rgba(68,214,44,0.15)] font-bold'
                  : 'bg-[#0B0B0B] text-[#888] border border-[#222] hover:text-[#EEE] hover:border-[#444]'
              }`}
            >
              <Smartphone size={14} />
              <span>{app.appName}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#222] text-[#AAA]">
                {app.screens.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active App Meta Card */}
        <div className="mt-8 bg-[#0A0A0A] border border-[#333] rounded-2xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#222] pb-6 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#EEE] font-mono">{activeApp.appName}</h3>
                <span className="px-3 py-1 bg-[#1A1A1A] border border-[#333] text-xs font-mono text-[#44D62C] rounded-full">
                  {activeApp.badge}
                </span>
              </div>
              <p className="text-xs font-mono text-[#777]">
                <strong className="text-[#AAA]">Referência / Origem:</strong> {activeApp.figmaRef}
              </p>
            </div>
            <div className="text-sm font-mono text-[#888] bg-[#111] px-4 py-2.5 rounded-xl border border-[#222] self-start lg:self-auto">
              Exibindo <span className="text-[#44D62C] font-bold">{filteredScreens.length}</span> de {activeApp.screens.length} telas
            </div>
          </div>

          <p className="text-sm md:text-base text-[#BBB] leading-relaxed mb-6 font-sans">
            {activeApp.summary}
          </p>

          {/* Filters & Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#111] p-4 rounded-xl border border-[#222] mb-6">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666]" />
              <input
                type="text"
                placeholder="Buscar por tela, módulo ou função..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#050505] border border-[#333] rounded-lg pl-10 pr-4 py-2 text-xs font-mono text-[#EEE] placeholder-[#666] focus:outline-none focus:border-[#44D62C]"
              />
            </div>

            {/* Module Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-mono text-[#666] whitespace-nowrap">Módulo:</span>
              <div className="flex gap-1.5">
                {availableModules.map((mod) => (
                  <button
                    key={mod}
                    onClick={() => setSelectedModule(mod)}
                    className={`px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap transition-colors ${
                      selectedModule === mod
                        ? 'bg-[#44D62C] text-black font-bold'
                        : 'bg-[#1A1A1A] text-[#888] hover:text-[#EEE]'
                    }`}
                  >
                    {mod === 'all' ? 'Todos' : mod}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Screens Table */}
          <div className="overflow-x-auto rounded-xl border border-[#222]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#141414] border-b border-[#222] text-[11px] font-mono text-[#888] uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">#</th>
                  <th className="py-3.5 px-4 min-w-[180px]">Tela / Frame Figma</th>
                  <th className="py-3.5 px-4 w-36">Módulo / Fluxo</th>
                  <th className="py-3.5 px-6 min-w-[320px]">O que a tela faz (Objetivo & Fluxo)</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Stack & Integrações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A] font-sans text-xs">
                {filteredScreens.map((screen, index) => (
                  <tr 
                    key={screen.id} 
                    className="hover:bg-[#121212] transition-colors group"
                  >
                    <td className="py-4 px-4 font-mono text-[#555] text-center font-bold">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-mono font-bold text-[#EEE] group-hover:text-[#44D62C] transition-colors flex items-center gap-1.5">
                        {screen.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#555] mt-0.5">
                        ID: {screen.id}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#1A1A1A] text-[#AAA] border border-[#333]">
                        {screen.module}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[#BBB] leading-relaxed">
                      {screen.description}
                    </td>
                    <td className="py-4 px-4 font-mono text-[11px] text-[#44D62C]/90">
                      <span className="inline-flex items-center gap-1.5 bg-[#0D1610] border border-[#44D62C]/20 px-2.5 py-1 rounded-lg">
                        <Code2 size={12} className="text-[#44D62C]" />
                        {screen.tech}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredScreens.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-sm font-mono text-[#666]">
                      Nenhuma tela encontrada para o termo "{searchTerm}" no módulo selecionado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScreensArchitecture;
