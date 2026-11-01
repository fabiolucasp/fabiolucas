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
                <a href="#features" className="hover:text-[#06B6D4] transition-colors">Funcionalidades</a>
                <a href="#tracking" className="hover:text-[#F97316] transition-colors">Rastreamento</a>
                <a href="#health" className="hover:text-[#06B6D4] transition-colors">Transparência</a>
            </div>
            <button className="bg-[#06B6D4] hover:bg-[#0891b2] text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Baixar App
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
                    <Star size={12} fill="currentColor" /> Nova Tecnologia em Goiânia
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                    Segurança de UTI. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#F97316]">Comodidade de App.</span>
                </h1>
                
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    O primeiro aplicativo veterinário de Goiânia com <strong>Rastreamento de Taxi Dog em Tempo Real</strong> e Internação 24h transparente.
                    Cuidamos do seu pet com a tecnologia que ele precisa e o amor que ele merece.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="flex items-center justify-center gap-3 px-8 py-4 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-[#F97316]/20 group">
                        <Smartphone size={20} />
                        <span>Baixar Agora</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center justify-center gap-2 px-6 py-4 text-slate-400 text-sm">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0F172A]"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0F172A]"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0F172A]"></div>
                        </div>
                        <span className="font-medium">+2.000 Pets atendidos</span>
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
                            Motorista Carlos está a 2km
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl z-20">
                        <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Uber dos Pets? Melhor. <br/> É Bicho Mimado.</h2>
                <p className="text-slate-400 text-lg">
                    Sabemos que seu tempo é curto e a segurança do seu pet é inegociável. Por isso, criamos o sistema de <strong>Taxi Dog mais seguro de Goiânia</strong>.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<MapPin className="text-[#F97316]" size={32} />}
                    title="Rastreamento em Tempo Real"
                    desc="Abra o app e veja a 'patinha' se movendo no mapa. Você sabe exatamente onde seu filho de 4 patas está, do portão de casa até a clínica."
                />
                <FeatureCard 
                    icon={<ShieldCheck className="text-[#F97316]" size={32} />}
                    title="Motoristas Credenciados"
                    desc="Nada de estranhos. Nossa frota é própria e treinada para lidar com animais, inclusive em situações delicadas de saúde."
                />
                <FeatureCard 
                    icon={<Clock className="text-[#F97316]" size={32} />}
                    title="Compromisso de Pontualidade"
                    desc="O pagamento é feito via App no agendamento. Isso garante sua vaga exclusiva e que o motorista não fará 'rotas malucas' para pegar outros pets."
                />
            </div>
        </div>
      </section>

      {/* JORNADA 2: SAÚDE (TRANSPARÊNCIA ZEUS) */}
      <section id="health" className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <span className="text-[#06B6D4] font-bold tracking-widest uppercase text-sm">Transparência Radical</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Contas Claras, <br/> Amizades Longas.</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Internação não precisa ser uma "caixa preta" de gastos. No nosso App, você acompanha cada procedimento, medicamento e exame realizado em tempo real.
                </p>
                <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-[#06B6D4]">
                    <p className="text-slate-300 italic text-sm">
                        "Quando o Zeus precisou de internação, o app me mostrava cada hemograma. Eu sabia exatamente pelo que estava pagando. Isso me deu paz."
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
                        <span className="text-sm font-bold text-white">Amanda S., Mãe do Zeus</span>
                    </div>
                </div>
            </div>

            {/* TABELA ZEUS (PROVA TÉCNICA) */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#06B6D4] p-2 rounded-full text-white"><FileText size={16} /></div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-sm">Extrato: Paciente Zeus</h3>
                            <p className="text-[10px] text-slate-500">Golden Retriever • Protocolo #8942</p>
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Alta Médica</div>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-xs md:text-sm text-left text-slate-600">
                        <thead className="bg-slate-50 text-slate-500 font-medium">
                            <tr>
                                <th className="px-4 py-2">Data</th>
                                <th className="px-4 py-2">Procedimento</th>
                                <th className="px-4 py-2 text-right">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="px-4 py-2">04/05</td>
                                <td className="px-4 py-2">Hemograma Completo</td>
                                <td className="px-4 py-2 text-right">R$ 20,79</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">04/05</td>
                                <td className="px-4 py-2">Teste de Coombs</td>
                                <td className="px-4 py-2 text-right">R$ 277,25</td>
                            </tr>
                            <tr className="bg-red-50/50">
                                <td className="px-4 py-2 text-red-500 font-bold">06/05</td>
                                <td className="px-4 py-2 text-red-600 font-bold flex items-center gap-2"><AlertCircle size={12}/> Bolsa de Sangue (Urgência)</td>
                                <td className="px-4 py-2 text-right text-red-600 font-bold">R$ 550,00</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">07/05</td>
                                <td className="px-4 py-2">Diária Internação + Medic.</td>
                                <td className="px-4 py-2 text-right">R$ 150,00</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">09/05</td>
                                <td className="px-4 py-2">Hemograma Controle</td>
                                <td className="px-4 py-2 text-right">R$ 20,79</td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-slate-50">
                            <tr>
                                <td colSpan={2} className="px-4 py-3 text-right font-bold">Total Transparente:</td>
                                <td className="px-4 py-3 text-right font-bold text-[#06B6D4]">R$ 1.018,83</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
      </section>

      {/* JORNADA 3: EMERGÊNCIA (BOTÃO DE PÂNICO) */}
      <section className="py-20 bg-red-900/10 border-y border-red-900/30 relative">
         <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full text-white font-bold text-sm mb-6 animate-pulse shadow-lg shadow-red-600/40">
                <AlertCircle size={18} /> SOS 24 Horas
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Seu Pet engoliu algo? Não espere.</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                Em momentos de desespero, cada segundo conta. Nosso App tem um <strong>"Botão de Pânico"</strong> que avisa nossa equipe de plantão antes mesmo de você sair de casa.
            </p>
            <div className="flex justify-center gap-8 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Veterinário em Alerta</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Sala de Cirurgia Preparada</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-red-500" /> GPS Ativado</div>
            </div>
         </div>
      </section>

      {/* SECTION TÉCNICA (O SEGREDO) */}
      <section className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-6">
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Tecnologia que Salva Vidas</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Por trás da tela bonita, existe um <strong>ERP (Sistema Integrado)</strong> robusto. Isso significa que quando o veterinário prescreve um remédio na internação, o estoque baixa automaticamente e o valor vai para sua conta no app. Sem erros manuais, sem cobranças surpresas.
                    </p>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"></div> Histórico Médico na Nuvem (Sempre disponível)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"></div> Nota Fiscal Automática</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"></div> Segurança de Dados (LGPD)</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="aspect-square bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/20 to-transparent"></div>
                        <Smartphone size={80} className="text-slate-600 relative z-10" />
                        <div className="absolute bottom-4 text-xs font-mono text-slate-500">Powered by Flutter & Cloud</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-white font-bold text-lg mb-4">Bicho Mimado</h4>
                    <p className="text-slate-500 mb-6 max-w-sm">
                        Muito mais que uma clínica. Um centro de amor e tecnologia para quem entende que pet é família.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#06B6D4] hover:text-white transition-all">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.002zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-bold mb-4">Contato</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-center gap-2"><Phone size={14}/> (62) 3259-XXXX</li>
                        <li>WhatsApp: (62) 9 9999-XXXX</li>
                        <li className="text-red-500 font-bold">Emergência 24h</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Endereço</h4>
                    <p className="text-slate-400 text-sm">
                        Rua C 171, Qd. 396, Lt. 14<br/>
                        Jardim América<br/>
                        Goiânia - GO
                    </p>
                    <a href="#" className="text-[#06B6D4] text-xs font-bold mt-2 inline-block hover:underline">Ver no Mapa →</a>
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