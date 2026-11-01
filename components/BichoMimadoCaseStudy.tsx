import React, { useEffect } from 'react';
import { X, Heart, Activity, Truck, MessageCircle, Syringe, Scissors, Calendar, MapPin, AlertCircle, TrendingUp, Users, FileText, DollarSign, Database, ShieldCheck, Stethoscope, Phone, Bell, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface BichoMimadoCaseStudyProps {
  onClose: () => void;
}

const BichoMimadoCaseStudy: React.FC<BichoMimadoCaseStudyProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors for Bicho Mimado
  // Primary Cyan: #06B6D4 (Clean, Clinical)
  // Secondary Orange: #F97316 (Energy, Pet friendly)
  // Background Dark: #0F172A (Slate)
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#0F172A] overflow-y-auto font-sans selection:bg-[#06B6D4] selection:text-[#FFF]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#0F172A]/90 backdrop-blur-md border-b border-[#06B6D4]/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-[#06B6D4] p-1 rounded-lg">
                <Heart size={20} className="text-white fill-current" />
            </div>
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-wide">Bicho <span className="text-[#06B6D4]">Mimado</span></div>
        </div>
        <div className="flex gap-4">
            <NavLink 
                to="/bicho-mimado-app" 
                target="_blank"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#06B6D4]/10 text-[#06B6D4] rounded-full text-xs font-bold hover:bg-[#06B6D4] hover:text-white transition-colors"
            >
                <Globe size={14} /> Ver Landing Page Real
            </NavLink>
            <button 
            onClick={onClose}
            className="p-2 rounded-full bg-[#1E293B] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#FFF] transition-all border border-[#06B6D4]/30"
            >
            <X size={24} />
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[60vh] relative">
          <div className="space-y-8 animate-fade-in-up relative z-10">
            <div className="inline-block px-4 py-1 border border-[#06B6D4] text-[#06B6D4] rounded-full text-xs font-mono uppercase tracking-widest bg-[#06B6D4]/10">
              Veterinária & Logística
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              O Super App do <br />
              <span className="text-[#06B6D4]">Seu Pet</span>
            </h1>
            <p className="text-[#94A3B8] text-lg max-w-xl leading-relaxed">
              Um ecossistema completo que une o cuidado clínico à conveniência tecnológica. Do agendamento automático via WhatsApp ao "Uber dos Pets" com rastreamento em tempo real.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <FeatureTag icon={<Truck size={14} />} label="Taxi Dog Rastreável" />
               <FeatureTag icon={<MessageCircle size={14} />} label="Bot WhatsApp" />
               <FeatureTag icon={<Activity size={14} />} label="ERP Clínico" />
            </div>
            
            {/* Added Link for Mobile Visibility */}
            <NavLink 
                to="/bicho-mimado-app" 
                target="_blank"
                className="md:hidden inline-flex items-center gap-2 px-6 py-3 bg-[#06B6D4] text-white rounded-lg font-bold shadow-lg"
            >
                Ver Landing Page do Produto
            </NavLink>
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/20 to-[#F97316]/10 rounded-full blur-[80px]"></div>
            
            {/* Phone Mockup - Main App Home */}
            <div className="relative w-[300px] h-[600px] bg-[#1E293B] rounded-[3rem] border-[8px] border-[#0F172A] overflow-hidden shadow-2xl z-10 transform rotate-[-3deg] hover:rotate-0 transition-all duration-500">
                {/* App Header */}
                <div className="bg-[#06B6D4] p-6 pb-8 rounded-b-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Heart size={80} fill="white"/></div>
                    <div className="flex justify-between items-center text-white mb-6 mt-4">
                        <div>
                            <p className="text-xs opacity-90">Olá, Amanda</p>
                            <h3 className="font-bold text-lg">Como está o Zeus? 🐶</h3>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=100&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                    {/* Search */}
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 flex items-center gap-2 text-white placeholder-white/70">
                        <Stethoscope size={18} />
                        <span className="text-sm opacity-80">Buscar serviços...</span>
                    </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="px-6 -mt-4 grid grid-cols-2 gap-4">
                    <ActionButton icon={<Scissors size={20} />} title="Banho e Tosa" color="bg-orange-500" />
                    <ActionButton icon={<Syringe size={20} />} title="Vacinas" color="bg-blue-500" />
                    <ActionButton icon={<Truck size={20} />} title="Taxi Dog" color="bg-green-500" />
                    <ActionButton icon={<AlertCircle size={20} />} title="Urgência" color="bg-red-500" />
                </div>

                {/* Appointment Card */}
                <div className="p-6">
                    <h3 className="text-white font-bold text-sm mb-3">Próximo Agendamento</h3>
                    <div className="bg-[#334155] p-4 rounded-xl border border-[#475569] flex gap-4">
                        <div className="bg-[#06B6D4]/20 p-3 rounded-lg text-[#06B6D4] flex flex-col items-center justify-center min-w-[60px]">
                            <span className="text-xs font-bold">OUT</span>
                            <span className="text-xl font-bold">24</span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Consulta Geral</h4>
                            <p className="text-gray-400 text-xs">Dr. Ricardo • 14:00</p>
                            <div className="mt-2 flex items-center gap-1 text-[#F97316] text-[10px] font-bold">
                                <Truck size={10} /> Taxi Dog Solicitado
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Phone - WhatsApp Float */}
            <div className="absolute -right-4 bottom-10 w-[240px] bg-white rounded-2xl shadow-2xl p-4 z-20 hidden md:block border border-gray-200">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white"><MessageCircle size={16} /></div>
                    <div>
                        <p className="text-xs font-bold text-gray-800">Bicho Mimado Bot</p>
                        <p className="text-[10px] text-green-600">Online</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none text-[10px] text-gray-600 max-w-[85%]">
                        Olá! Vi que o Zeus precisa de vacina. Temos horário para hoje às 16h.
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg rounded-tr-none text-[10px] text-gray-800 max-w-[85%] ml-auto">
                        Pode agendar! Quero que busquem ele.
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none text-[10px] text-gray-600 max-w-[85%]">
                        Perfeito! O valor do Taxi Dog é R$ 15,00. Segue o link do Pix.
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: JOURNEYS (FLUXOS DE UX) */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-12 border-l-4 border-[#06B6D4] pl-4">Jornadas do Cliente</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Jornada 1: Banho e Tosa (WhatsApp First) */}
                <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155] hover:border-[#06B6D4] transition-all">
                    <div className="w-12 h-12 bg-[#06B6D4]/20 rounded-xl flex items-center justify-center text-[#06B6D4] mb-4">
                        <Scissors size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Banho & Tosa Automatizado</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                        O cliente inicia pelo WhatsApp. O bot verifica disponibilidade na agenda do ERP, sugere horários e gera o link de pagamento antecipado.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#06B6D4] rounded-full"></div> Escolha de Horário</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#06B6D4] rounded-full"></div> Pagamento Pix/Cartão</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#06B6D4] rounded-full"></div> Opção de Logística (Levo ou Buscam)</li>
                    </ul>
                </div>

                {/* Jornada 2: Urgência (Red Alert) */}
                <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155] hover:border-red-500 transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition-all"></div>
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500 mb-4">
                        <AlertCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Protocolo de Urgência</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                        Botão de pânico no App. Ignora etapa de pagamento imediato. Aciona veterinário de plantão e envia localização GPS do animal.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Geolocalização Instantânea</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Contato Prioritário</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Faturamento Pós-Atendimento</li>
                    </ul>
                </div>

                {/* Jornada 3: Consulta & Logística */}
                <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155] hover:border-[#F97316] transition-all">
                    <div className="w-12 h-12 bg-[#F97316]/20 rounded-xl flex items-center justify-center text-[#F97316] mb-4">
                        <Stethoscope size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Consulta Integrada</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                        Seleção de especialista no App. O sistema oferece a opção de Taxi Dog com cálculo de rota em tempo real.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#F97316] rounded-full"></div> Seleção de Especialista</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#F97316] rounded-full"></div> Cálculo de Frete (Ida/Volta)</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#F97316] rounded-full"></div> Tracking do Motorista</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* SECTION 2: THE DIFFERENTIAL (TAXI DOG LOGISTICS) */}
        <div className="mb-32 bg-[#1E293B] rounded-3xl p-8 md:p-12 border border-[#334155] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-[#F97316] rounded text-white"><Truck size={24} /></div>
                        <h2 className="text-3xl font-bold text-white">Logística Completa: <br/>O Diferencial</h2>
                    </div>
                    <p className="text-[#94A3B8] text-lg mb-6 leading-relaxed">
                        Muitos donos não têm tempo de levar o pet. O Bicho Mimado resolve isso com um sistema próprio de rotas e motoristas.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="bg-[#0F172A] p-4 rounded-xl border-l-4 border-[#F97316]">
                            <h4 className="text-white font-bold text-sm">Política de No-Show</h4>
                            <p className="text-xs text-gray-400 mt-1">
                                O pagamento do deslocamento é feito <strong>antes</strong>. Se o motorista chegar e o cliente não atender, o valor do deslocamento cobre o custo operacional.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                            <span className="flex items-center gap-2"><MapPin size={16} className="text-[#06B6D4]" /> Rastreamento Real-Time</span>
                            <span className="flex items-center gap-2"><Bell size={16} className="text-[#06B6D4]" /> Notificação de Chegada</span>
                        </div>
                    </div>
                </div>

                {/* Map Visual */}
                <div className="bg-[#0F172A] rounded-2xl p-4 border border-[#334155] relative h-64 overflow-hidden">
                    {/* Simulated Map */}
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 50 200 Q 150 50 250 100" stroke="#F97316" strokeWidth="4" fill="none" strokeDasharray="10 5" className="animate-pulse" />
                    </svg>
                    {/* Pins */}
                    <div className="absolute bottom-10 left-10 w-8 h-8 bg-blue-500 rounded-full border-4 border-[#0F172A] flex items-center justify-center text-white shadow-lg z-10">
                        <Users size={14} />
                    </div>
                    <div className="absolute top-20 right-20 w-8 h-8 bg-[#06B6D4] rounded-full border-4 border-[#0F172A] flex items-center justify-center text-white shadow-lg z-10">
                        <Heart size={14} />
                    </div>
                    {/* Moving Car */}
                    <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-[#F97316] rounded-full border-4 border-[#0F172A] flex items-center justify-center text-white shadow-xl z-20 animate-bounce">
                        <Truck size={16} />
                    </div>
                    {/* UI Overlay */}
                    <div className="absolute bottom-4 right-4 bg-[#1E293B] px-4 py-2 rounded-lg border border-[#334155] shadow-lg">
                        <p className="text-[10px] text-gray-400">Motorista</p>
                        <p className="text-white font-bold text-xs">Carlos (Fiat Fiorino)</p>
                        <p className="text-[#06B6D4] font-bold text-xs">Chega em 5 min</p>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 3: ERP & MEDICAL RECORDS (ZEUS DATA) */}
        <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#F7F7F7]">ERP Clínico & Financeiro</h2>
                <span className="px-3 py-1 bg-[#06B6D4]/20 text-[#06B6D4] rounded-full text-xs font-bold uppercase">Módulo Admin</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Patient Record (Zeus) */}
                <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-xl text-slate-800">
                    <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Paciente: Zeus</h3>
                                <p className="text-xs text-slate-500">Golden Retriever • 5 Anos</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold text-slate-400">ID: #8942</p>
                            <p className="text-xs text-red-500 font-bold">Internado</p>
                        </div>
                    </div>
                    
                    <div className="p-0">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Data</th>
                                    <th className="px-6 py-3">Procedimento</th>
                                    <th className="px-6 py-3 text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {/* 04/05 */}
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-3 text-slate-500">04/05</td>
                                    <td className="px-6 py-3 font-medium">Hemograma Completo</td>
                                    <td className="px-6 py-3 text-right">R$ 20,79</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-3 text-slate-500">04/05</td>
                                    <td className="px-6 py-3 font-medium">Teste de Coombs</td>
                                    <td className="px-6 py-3 text-right">R$ 277,25</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-3 text-slate-500">04/05</td>
                                    <td className="px-6 py-3 font-medium">EAS (Urinálise)</td>
                                    <td className="px-6 py-3 text-right">R$ 17,15</td>
                                </tr>
                                {/* 06/05 */}
                                <tr className="bg-red-50 hover:bg-red-100">
                                    <td className="px-6 py-3 text-red-600">06/05</td>
                                    <td className="px-6 py-3 font-bold text-red-700">PCR (Painel Carrapato)</td>
                                    <td className="px-6 py-3 text-right font-bold text-red-700">R$ 191,66</td>
                                </tr>
                                <tr className="bg-red-50 hover:bg-red-100">
                                    <td className="px-6 py-3 text-red-600">06/05</td>
                                    <td className="px-6 py-3 font-bold text-red-700">Bolsa de Sangue</td>
                                    <td className="px-6 py-3 text-right font-bold text-red-700">R$ 550,00</td>
                                </tr>
                                <tr className="bg-red-50 hover:bg-red-100">
                                    <td className="px-6 py-3 text-red-600">06/05</td>
                                    <td className="px-6 py-3 font-bold text-red-700">Teste Compatibilidade</td>
                                    <td className="px-6 py-3 text-right font-bold text-red-700">R$ 76,23</td>
                                </tr>
                                {/* 29/06 */}
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-3 text-slate-500">29/06</td>
                                    <td className="px-6 py-3 font-medium">Bolsa de Sangue (Retorno)</td>
                                    <td className="px-6 py-3 text-right">R$ 550,00</td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-slate-100">
                                <tr>
                                    <td colSpan={2} className="px-6 py-3 text-right font-bold text-slate-600">Total Faturado:</td>
                                    <td className="px-6 py-3 text-right font-bold text-[#06B6D4]">R$ 1.703,87</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Dashboard Widgets */}
                <div className="space-y-6">
                    {/* Faturamento do Dia */}
                    <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155]">
                        <div className="flex items-center gap-3 mb-2 text-[#06B6D4]">
                            <DollarSign size={20} />
                            <h4 className="font-bold text-sm">Faturamento Hoje</h4>
                        </div>
                        <p className="text-3xl font-bold text-white mb-1">R$ 4.250,00</p>
                        <p className="text-xs text-green-400 flex items-center gap-1"><TrendingUp size={12} /> +15% vs ontem</p>
                    </div>

                    {/* Stock Alert */}
                    <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155]">
                        <div className="flex items-center gap-3 mb-4 text-[#F97316]">
                            <Database size={20} />
                            <h4 className="font-bold text-sm">Estoque Crítico</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-sm">
                                <span className="text-gray-300">Ração Royal Canin 10kg</span>
                                <span className="text-red-400 font-bold">2 un</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-gray-300">Bravecto 20-40kg</span>
                                <span className="text-red-400 font-bold">1 un</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-gray-300">Dipirona Injetável</span>
                                <span className="text-yellow-400 font-bold">5 un</span>
                            </li>
                        </ul>
                    </div>

                    {/* Staff Active */}
                    <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155]">
                        <div className="flex items-center gap-3 mb-4 text-white">
                            <Users size={20} />
                            <h4 className="font-bold text-sm">Equipe Online</h4>
                        </div>
                        <div className="flex -space-x-2">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#1E293B]"></div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-[#06B6D4] border-2 border-[#1E293B] flex items-center justify-center text-[10px] font-bold text-white">+3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 4: TECH STACK */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-12 text-center font-mono">Arquitetura do Projeto</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
                <TechBadge icon={<FileText size={16} />} label="Flutter" />
                <TechBadge icon={<Database size={16} />} label="Firebase Firestore" />
                <TechBadge icon={<MessageCircle size={16} />} label="WhatsApp Cloud API" />
                <TechBadge icon={<MapPin size={16} />} label="Google Maps SDK" />
                <TechBadge icon={<ShieldCheck size={16} />} label="Gestão de Permissões (RBAC)" />
                <TechBadge icon={<TrendingUp size={16} />} label="Charts Library" />
                <TechBadge icon={<Phone size={16} />} label="Twilio (SMS Fallback)" />
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#334155] pt-12">
            <p className="text-[#94A3B8] font-mono mb-4">Bicho Mimado ERP - Desenvolvido por Fábio Lucas</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#06B6D4] text-[#FFF] font-bold rounded hover:bg-[#0891b2] transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]"
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
    <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#334155] rounded-full text-[#94A3B8] text-xs hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors cursor-default">
        {icon}
        <span>{label}</span>
    </div>
);

const ActionButton = ({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) => (
    <div className={`${color} p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-white shadow-lg cursor-pointer hover:opacity-90 transition-opacity`}>
        {icon}
        <span className="text-[10px] font-bold text-center leading-tight">{title}</span>
    </div>
);

const TechBadge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[#334155] rounded-lg text-[#F7F7F7] text-sm">
        {icon}
        <span>{label}</span>
    </div>
);

export default BichoMimadoCaseStudy;