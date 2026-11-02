import SectionLink from './SectionLink';
import React from 'react';
import { MapPin, ShieldCheck, Heart, Clock, Truck, Smartphone, AlertCircle, FileText, Star, ArrowRight, Check, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BichoMimadoLanding: React.FC = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen font-sans text-slate-200 selection:bg-[#06B6D4] selection:text-white">
      
      {/* HEADER / NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="bg-[#06B6D4] p-1.5 rounded-lg">
                    <Heart size={20} className="text-white fill-current" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Bicho <span className="text-[#06B6D4]">Mimado</span></span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
                <SectionLink id="features" className="hover:text-[#06B6D4] transition-colors">Funcionalidades</SectionLink>
                <SectionLink id="tracking" className="hover:text-[#F97316] transition-colors">Rastreamento</SectionLink>
                <SectionLink id="health" className="hover:text-[#06B6D4] transition-colors">Compras</SectionLink>
            </div>
            <button disabled title="Link do aplicativo não configurado" className="bg-[#06B6D4] hover:bg-[#0891b2] text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Link não configurado
            </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F97316]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                    <Star size={12} fill="currentColor" /> Apresentação do projeto
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                    Cuidados organizados. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#F97316]">Mais tempo com seu pet.</span>
                </h1>
                
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    Agende cuidados, organize compras e, nas clínicas habilitadas, solicite a busca do pet e acompanhe o trajeto até a clínica. Disponibilidade operacional ainda não verificada.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button disabled title="Link do aplicativo não configurado" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-[#F97316]/20 group">
                        <Smartphone size={20} />
                        <span>Acesso indisponível</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center justify-center gap-2 px-6 py-4 text-slate-400 text-sm">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0F172A]"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0F172A]"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0F172A]"></div>
                        </div>
                        <span className="font-medium">Prévia visual do aplicativo</span>
                    </div>
                </div>
            </div>

            {/* Visual Hero Mockup */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-[300px] h-[600px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden z-10 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                    {/* Fake Map UI */}
                    <div className="absolute inset-0 bg-slate-800 opacity-50 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    
                    {/* Route Animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <path d="M 80 500 Q 150 300 220 150" stroke="#F97316" strokeWidth="4" fill="none" strokeDasharray="10 6" className="animate-pulse" />
                    </svg>

                    {/* Floating UI Cards inside Phone */}
                    <div className="absolute top-10 left-4 right-4 bg-slate-800/90 backdrop-blur p-4 rounded-xl border border-slate-700 shadow-lg z-20">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Chegada Estimada</p>
                                <p className="text-xl font-bold text-white">14:05</p>
                            </div>
                            <div className="bg-[#F97316] p-2 rounded-full text-white">
                                <Truck size={20} />
                            </div>
                        </div>
                        <div className="mt-2 text-xs text-slate-300 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Exemplo visual de localização
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl z-20">
                        <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Pet em imagem ilustrativa" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Banho & Tosa</h3>
                                <p className="text-xs text-slate-500">Agendado: Hoje, 14:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* JORNADA 1: LOGÍSTICA (TAXI DOG) */}
      <section id="tracking" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Logística Premium</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Acompanhe a busca <br/> até a clínica.</h2>
                <p className="text-slate-400 text-lg">
                    O fluxo organiza a cotação, a confirmação e o acompanhamento da busca. Depende de clínica habilitada, motorista disponível, endereço e rota válidos.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<MapPin className="text-[#F97316]" size={32} />}
                    title="Etapas da busca"
                    desc="Acompanhe posição e etapas do transporte até a clínica, nos fluxos configurados."
                />
                <FeatureCard 
                    icon={<ShieldCheck className="text-[#F97316]" size={32} />}
                    title="Disponibilidade verificada no fluxo"
                    desc="A solicitação depende de motorista ativo e disponível. O código não comprova frota própria ou cobertura em todos os locais."
                />
                <FeatureCard 
                    icon={<Clock className="text-[#F97316]" size={32} />}
                    title="Cotação antes da confirmação"
                    desc="Revise a cotação e siga a confirmação e o pagamento. Não há promessa de horário garantido ou de devolução em casa após o atendimento."
                />
            </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Organize o próximo cuidado</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard icon={<Clock size={32} />} title="Escolha serviço e horário" desc="O agendamento reúne pet, serviço e profissional. A lógica de reserva verifica conflitos de horário para apoiar a organização da clínica." />
            <FeatureCard icon={<Heart size={32} />} title="Recompensas conforme as regras" desc="O resgate verifica saldo e recompensa antes de gerar um voucher, conforme o catálogo configurado pela clínica." />
          </div>
        </div>
      </section>
      <section id="health" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-6">Compras que você pode revisar e repetir</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Reúna produtos no carrinho e consulte pedidos anteriores. Repetir um pedido repõe os itens para uma nova revisão — não realiza uma compra automaticamente.</p>
          <p className="text-slate-400 text-sm mt-6">Esta página apresenta funcionalidades encontradas no código e uma interface ilustrativa. Não confirma disponibilidade do serviço, pagamentos liquidados ou atendimento clínico. Não use esta vitrine como canal de emergência.</p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-white font-bold text-lg mb-4">Bicho Mimado</h4>
                    <p className="text-slate-500 mb-6 max-w-sm">
                        Projeto de aplicativo para organizar o cuidado, as compras e a busca do pet até a clínica.
                    </p>
                    <div className="flex gap-4">
                        <span aria-disabled="true" title="Disponível em versão futura" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#06B6D4] hover:text-white transition-all">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.002zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </span>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-bold mb-4">Contato</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li>Canal de atendimento não configurado nesta vitrine.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Endereço</h4>
                    <p className="text-slate-400 text-sm">
                        Consulte a clínica responsável pelo serviço. Endereço não validado nesta apresentação.
                    </p>
                    <span aria-disabled="true" title="Disponível em versão futura" className="text-[#06B6D4] text-xs font-bold mt-2 inline-block hover:underline">Ver no Mapa →</span>
                </div>
            </div>
            
            <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Bicho Mimado Clínica Veterinária.</p>
                <div className="flex gap-4">
                    <NavLink to="/" className="text-slate-600 text-xs hover:text-white transition-colors">Desenvolvido por Fábio Lucas</NavLink>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-[#F97316]/50 transition-all group">
        <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
            {desc}
        </p>
    </div>
);

export default BichoMimadoLanding;