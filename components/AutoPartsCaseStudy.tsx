import React, { useEffect } from 'react';
import { X, Wrench, Smartphone, Server, Database, AlertCircle, ShoppingCart, Search, CreditCard, MapPin, Tag, Box, CheckCircle2, Store, ShieldCheck, Camera, Bike, Timer, Navigation, MessageSquare, Heart, Settings, Image as ImageIcon, DollarSign, Bell, BarChart, Layers, FileText, UploadCloud, QrCode, Lock, UserPlus, User, LogOut, HelpCircle, Key, Mail, Trash2, FileCheck, Zap } from 'lucide-react';

interface AutoPartsCaseStudyProps {
  onClose: () => void;
}

const AutoPartsCaseStudy: React.FC<AutoPartsCaseStudyProps> = ({ onClose }) => {
  // Add ESC key listener to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Theme Colors for AutoParts Guide
  // Primary Yellow: #FFB600
  // Background Dark: #15191E
  
  return (
    <div className="fixed inset-0 z-[100] bg-[#15191E] overflow-y-auto font-sans selection:bg-[#FFB600] selection:text-[#000]">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-[#15191E]/90 backdrop-blur-md border-b border-[#FFB600]/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-[#FFB600] p-1 rounded">
                <Wrench size={20} className="text-[#15191E]" />
            </div>
            <div className="text-[#EEEEEE] font-mono font-bold text-lg tracking-wide">AutoParts <span className="text-[#FFB600]">Guide</span></div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-[#212E3A] text-[#FFB600] hover:bg-[#FFB600] hover:text-[#000] transition-all border border-[#FFB600]/30"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-h-[60vh]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-[#FFB600] text-[#FFB600] rounded text-xs font-mono uppercase tracking-widest bg-[#FFB600]/5">
              Ecossistema Automotivo
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] leading-tight">
              O "Mercado Livre" <br />
              das <span className="text-[#FFB600]">Peças</span>
            </h1>
            <p className="text-[#AAAAAA] text-lg max-w-xl leading-relaxed">
              Organizando o caos da Vila Canaã com <strong>dois aplicativos distintos</strong>. Conectamos quem precisa da peça a quem tem a peça, com validação rigorosa de lojistas e logística integrada.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <TagBadge icon={<ShoppingCart size={14} />} label="App do Cliente" />
               <TagBadge icon={<Store size={14} />} label="App do Lojista" />
               <TagBadge icon={<ShieldCheck size={14} />} label="Validação CPF/CNPJ" />
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] bg-[#212E3A] rounded-[2rem] border-4 border-[#212E3A] flex items-center justify-center overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#15191E] opacity-50 pattern-grid-lg"></div>
            {/* Simulation of Fluxo 4.6 (Cart) and 14 (App Bar) */}
            <div className="relative z-10 w-[280px] bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-500">
                <div className="bg-[#FFB600] p-4 flex items-center gap-2">
                    <div className="bg-white p-1 rounded"><Search size={16} className="text-[#000]"/></div>
                    <div className="h-2 w-24 bg-black/10 rounded"></div>
                </div>
                <div className="p-4 space-y-3">
                    <div className="h-32 bg-gray-300 rounded-lg animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-400 rounded"></div>
                    <div className="h-4 w-1/2 bg-[#FFB600] rounded"></div>
                    <div className="flex gap-2 pt-2">
                        <div className="h-8 flex-1 bg-black text-white rounded flex items-center justify-center text-xs font-bold">Comprar</div>
                    </div>
                </div>
            </div>
             <div className="absolute -bottom-10 -right-10 z-20 w-[260px] bg-[#1A1E26] border border-[#333] p-4 rounded-2xl shadow-xl transform rotate-[6deg]">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#FFB600] rounded-full flex items-center justify-center text-[#000] font-bold">!</div>
                    <div className="text-white text-sm font-bold">Peça Rara Encontrada</div>
                </div>
                <div className="text-gray-400 text-xs">Vendedor na Vila Canaã acaba de anunciar "Carburador Fusca 78".</div>
            </div>
          </div>
        </div>

        {/* SECTION 1: THE DUAL APP STRATEGY */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-4">Dois Mundos, Uma Plataforma</h2>
                <p className="text-[#AAAAAA] max-w-2xl mx-auto">
                    Para garantir a qualidade, separamos a experiência de compra da experiência de gestão. Cada público tem uma ferramenta nativa dedicada.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* APP DO CLIENTE */}
                <div className="bg-[#1A1E26] rounded-3xl p-8 border border-[#333] relative overflow-hidden group hover:border-[#FFB600] transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB600]/5 rounded-full blur-3xl group-hover:bg-[#FFB600]/10 transition-colors"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-[#15191E] rounded-2xl flex items-center justify-center border border-[#333] text-[#FFB600]">
                            <ShoppingCart size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">App do Cliente</h3>
                            <p className="text-[#888] text-sm">A experiência de compra definitiva.</p>
                        </div>
                    </div>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="mt-1 text-[#FFB600]"><Search size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Busca Inteligente & Filtros</h4>
                                <p className="text-[#888] text-xs mt-1">Filtros complexos em tempo real por Modelo, Ano e Fabricante. Encontre exatamente a peça que serve no seu carro.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 text-[#FFB600]"><CreditCard size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Checkout Integrado</h4>
                                <p className="text-[#888] text-xs mt-1">Carrinho multi-lojas e pagamento transparente via Cartão ou Pix dentro do app.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 text-[#FFB600]"><MessageSquare size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Chat & Favoritos</h4>
                                <p className="text-[#888] text-xs mt-1">Tire dúvidas técnicas diretamente com o vendedor e salve produtos para depois.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 text-[#FFB600]"><Navigation size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Rastreamento Real-Time</h4>
                                <p className="text-[#888] text-xs mt-1">Acompanhe o entregador no mapa, do balcão da loja até a sua garagem.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* APP DO LOJISTA */}
                <div className="bg-[#1A1E26] rounded-3xl p-8 border border-[#333] relative overflow-hidden group hover:border-blue-500 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-[#15191E] rounded-2xl flex items-center justify-center border border-[#333] text-blue-500">
                            <Store size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">App do Lojista</h3>
                            <p className="text-[#888] text-sm">Gestão, Estoque e Vendas.</p>
                        </div>
                    </div>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="mt-1 text-blue-500"><ShieldCheck size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Validação Rigorosa (Anti-Fraude)</h4>
                                <p className="text-[#888] text-xs mt-1">Processo complexo de verificação de CNPJ e CPF. Evitamos "malandros" e lojas fantasmas na plataforma.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 text-blue-500"><Settings size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Gestão de Catálogo & Estoque</h4>
                                <p className="text-[#888] text-xs mt-1">Ferramentas avançadas para cadastro de peças, controle de quantidade e precificação dinâmica.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 text-blue-500"><BarChart size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Planos de Anúncio</h4>
                                <p className="text-[#888] text-xs mt-1">Compra de destaque (Clássico vs Premium) via Checkout seguro (Pix/Cartão).</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1 text-blue-500"><MapPin size={20} /></div>
                            <div>
                                <h4 className="text-[#EEEEEE] font-bold text-sm">Dispatch de Entregas</h4>
                                <p className="text-[#888] text-xs mt-1">Painel para solicitar entregadores parceiros e acompanhar a saída da mercadoria.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* SECTION: DEEP DIVE - CLIENT FEATURES */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-[#333] flex-1"></div>
                <h2 className="text-2xl font-bold text-[#F7F7F7] text-center font-mono uppercase tracking-wider text-[#FFB600]">Deep Dive: App do Cliente</h2>
                <div className="h-px bg-[#333] flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* CARD 1: AUTH & ONBOARDING */}
                <div className="bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-[#FFB600] transition-colors">
                    <div className="flex items-center gap-3 mb-6 text-[#FFB600]">
                        <UserPlus size={24} />
                        <h3 className="font-bold text-white text-lg">Auth & Onboarding</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="text-[#EEE] text-xs flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFB600] rounded-full"></div>
                            Splash Screen (Identidade Visual)
                        </li>
                        <li className="text-[#EEE] text-xs flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFB600] rounded-full"></div>
                            Login Multi-etapa (UX Otimizada)
                        </li>
                        <li className="text-[#EEE] text-xs flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFB600] rounded-full"></div>
                            Recuperação de Senha/Email
                        </li>
                        <li className="text-[#EEE] text-xs flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFB600] rounded-full"></div>
                            Fluxo de Boas-vindas
                        </li>
                    </ul>
                </div>

                {/* CARD 2: GESTÃO DE PERFIL */}
                <div className="bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-[#FFB600] transition-colors">
                    <div className="flex items-center gap-3 mb-6 text-[#FFB600]">
                        <User size={24} />
                        <h3 className="font-bold text-white text-lg">Perfil & Segurança</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#1A1E26] p-2 rounded text-center border border-[#333]">
                            <Key size={16} className="mx-auto mb-1 text-[#888]" />
                            <span className="text-[10px] text-[#EEE]">Alterar Senha</span>
                        </div>
                        <div className="bg-[#1A1E26] p-2 rounded text-center border border-[#333]">
                            <Mail size={16} className="mx-auto mb-1 text-[#888]" />
                            <span className="text-[10px] text-[#EEE]">Trocar E-mail</span>
                        </div>
                        <div className="bg-[#1A1E26] p-2 rounded text-center border border-[#333]">
                            <HelpCircle size={16} className="mx-auto mb-1 text-[#888]" />
                            <span className="text-[10px] text-[#EEE]">Ajuda & FAQ</span>
                        </div>
                        <div className="bg-[#1A1E26] p-2 rounded text-center border border-[#333]">
                            <FileText size={16} className="mx-auto mb-1 text-[#888]" />
                            <span className="text-[10px] text-[#EEE]">Meus Dados</span>
                        </div>
                    </div>
                </div>

                {/* CARD 3: COMÉRCIO & FAVORITOS */}
                <div className="col-span-2 lg:col-span-2 bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-[#FFB600] transition-colors flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-4 text-[#FFB600]">
                        <ShoppingCart size={24} />
                        <h3 className="font-bold text-white text-lg">Checkout & Favoritos</h3>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1 bg-[#1A1E26] p-3 rounded-lg border border-[#333] flex items-center gap-3">
                            <Heart size={20} className="text-red-500" />
                            <div>
                                <p className="text-white text-xs font-bold">Gestão de Favoritos</p>
                                <p className="text-[#666] text-[10px]">Salvar para depois</p>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1A1E26] p-3 rounded-lg border border-[#333] flex items-center gap-3">
                            <Trash2 size={20} className="text-[#888]" />
                            <div>
                                <p className="text-white text-xs font-bold">Gestão de Carrinho</p>
                                <p className="text-[#666] text-[10px]">Remoção inteligente</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#1A1E26] p-3 rounded-lg border border-[#333] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileCheck size={20} className="text-green-500" />
                            <span className="text-white text-xs font-bold">Confirmação & Detalhes do Pedido</span>
                        </div>
                        <div className="px-2 py-1 bg-[#FFB600]/20 text-[#FFB600] rounded text-[10px] font-bold">Status Real-Time</div>
                    </div>
                </div>

                {/* CARD 4: PAGAMENTOS (Wide) */}
                <div className="col-span-2 lg:col-span-4 bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-[#FFB600] transition-colors">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3 text-[#FFB600]">
                            <CreditCard size={24} />
                            <h3 className="font-bold text-white text-lg">Carteira & Notificações</h3>
                        </div>
                        <Bell size={20} className="text-[#888]" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-[#1A1E26] p-4 rounded-xl border border-[#333] flex flex-col gap-2">
                            <span className="text-[#888] text-[10px] uppercase font-bold">Métodos</span>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <CreditCard size={16} /> Gestão de Cartões Salvos
                            </div>
                        </div>
                        <div className="bg-[#1A1E26] p-4 rounded-xl border border-[#333] flex flex-col gap-2">
                            <span className="text-[#888] text-[10px] uppercase font-bold">Ação Rápida</span>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <Zap size={16} className="text-yellow-500" /> Pagamento Imediato
                            </div>
                        </div>
                        <div className="bg-[#1A1E26] p-4 rounded-xl border border-[#333] flex flex-col gap-2">
                            <span className="text-[#888] text-[10px] uppercase font-bold">Alertas</span>
                            <div className="flex items-center gap-2 text-white text-sm">
                                <Bell size={16} className="text-[#FFB600]" /> Central de Notificações
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION: DEEP DIVE - LOJISTA FEATURES */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-[#333] flex-1"></div>
                <h2 className="text-2xl font-bold text-[#F7F7F7] text-center font-mono uppercase tracking-wider text-blue-500">Deep Dive: Painel do Lojista</h2>
                <div className="h-px bg-[#333] flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* CARD 1: CADASTRO */}
                <div className="col-span-2 bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-3 mb-6 text-blue-500">
                        <Database size={24} />
                        <h3 className="font-bold text-white text-lg">Gestão de Catálogo</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#333]">
                            <div className="text-[10px] text-[#888] uppercase font-bold mb-1">Compatibilidade</div>
                            <div className="text-[#EEE] text-sm flex items-center gap-2">
                                <Box size={14} className="text-blue-400" /> Montadora & Porte
                            </div>
                        </div>
                        <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#333]">
                            <div className="text-[10px] text-[#888] uppercase font-bold mb-1">Técnico</div>
                            <div className="text-[#EEE] text-sm flex items-center gap-2">
                                <Wrench size={14} className="text-blue-400" /> Aplicação & Ano
                            </div>
                        </div>
                        <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#333]">
                            <div className="text-[10px] text-[#888] uppercase font-bold mb-1">Organização</div>
                            <div className="text-[#EEE] text-sm flex items-center gap-2">
                                <Layers size={14} className="text-blue-400" /> Categorias & Marcas
                            </div>
                        </div>
                        <div className="bg-[#1A1E26] p-3 rounded-lg border border-[#333]">
                            <div className="text-[10px] text-[#888] uppercase font-bold mb-1">Venda</div>
                            <div className="text-[#EEE] text-sm flex items-center gap-2">
                                <DollarSign size={14} className="text-blue-400" /> Estoque & Preço
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD 2: UPLOAD */}
                <div className="bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-blue-500">
                        <ImageIcon size={24} />
                        <h3 className="font-bold text-white text-sm">Curadoria de Imagens</h3>
                    </div>
                    <p className="text-[#888] text-xs mb-4">
                        Interface otimizada para upload de fotos reais. Galeria interativa para validação visual do comprador.
                    </p>
                    <div className="flex gap-2">
                        <div className="w-10 h-10 bg-[#212E3A] rounded flex items-center justify-center border border-dashed border-[#555]">
                            <UploadCloud size={16} className="text-[#888]" />
                        </div>
                        <div className="w-10 h-10 bg-[#212E3A] rounded flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/20"></div>
                            <CheckCircle2 size={16} className="text-blue-500" />
                        </div>
                        <div className="w-10 h-10 bg-[#212E3A] rounded flex items-center justify-center animate-pulse">
                            <div className="w-4 h-4 bg-[#333] rounded"></div>
                        </div>
                    </div>
                </div>

                {/* CARD 3: FINANCEIRO */}
                <div className="bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-blue-500">
                        <CreditCard size={24} />
                        <h3 className="font-bold text-white text-sm">Checkout & Planos</h3>
                    </div>
                    <p className="text-[#888] text-xs mb-4">
                        Sistema para lojista adquirir destaque (Anúncio Premium).
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between bg-[#1A1E26] px-3 py-2 rounded border border-[#333]">
                            <span className="text-[#EEE] text-xs flex items-center gap-2"><QrCode size={12}/> PIX</span>
                            <CheckCircle2 size={12} className="text-green-500" />
                        </div>
                        <div className="flex items-center justify-between bg-[#1A1E26] px-3 py-2 rounded border border-[#333]">
                            <span className="text-[#EEE] text-xs flex items-center gap-2"><Lock size={12}/> Cartão (CVV)</span>
                            <ShieldCheck size={12} className="text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* CARD 4: PÓS-VENDA */}
                <div className="col-span-2 lg:col-span-4 bg-[#15191E] p-6 rounded-2xl border border-[#333] hover:border-blue-500 transition-colors flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 text-blue-500">
                            <Bell size={24} />
                            <h3 className="font-bold text-white text-lg">Central de Pedidos & Notificações</h3>
                        </div>
                        <p className="text-[#888] text-sm">
                            Lista histórica de vendas (`pedidos_rea`). Alertas em tempo real sobre confirmação de pagamento, perguntas de clientes e status de entrega.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1E26] rounded-full border border-[#333]">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span className="text-[#EEE] text-xs font-bold">Novo Pedido</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1E26] rounded-full border border-[#333]">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-[#EEE] text-xs font-bold">Pagamento Aprovado</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1E26] rounded-full border border-[#333]">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-[#EEE] text-xs font-bold">Em Trânsito</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 2: THE PROBLEM (VILA CANAÃ) */}
        <div className="mb-32 bg-[#212E3A] rounded-3xl p-8 md:p-12 border-l-8 border-[#FFB600] relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                    <h3 className="text-3xl font-bold text-[#F7F7F7] mb-6">O Poder do Local</h3>
                    <div className="space-y-4 text-[#AAAAAA] leading-relaxed">
                        <p>
                            A Vila Canaã em Goiânia é um gigante físico, mas invisível digitalmente. Nosso app mostra que <strong>os produtos que você precisa já estão na sua região</strong>.
                        </p>
                        <p>
                            <strong className="text-[#FFB600]">Vantagem Competitiva:</strong> Por que esperar 15 dias do Mercado Livre se você pode ter a peça na sua mão em 30 minutos?
                        </p>
                        <p>
                            Digitalizamos o estoque de centenas de lojas, transformando concorrentes físicos em parceiros de um marketplace unificado.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <FeatureRow icon={<Search />} title="Busca Unificada" desc="Pesquise em centenas de lojas simultaneamente." />
                    <FeatureRow icon={<MapPin />} title="Geolocalização" desc="Encontre a peça mais próxima de você na Vila." />
                    <FeatureRow icon={<Box />} title="Estoque Real" desc="Integração direta com o sistema dos lojistas." />
                </div>
            </div>
        </div>

        {/* SECTION 3: FUTURE ROADMAP (DRIVER APP) */}
        <div className="mb-32">
            <div className="bg-[#111] rounded-[2.5rem] border border-[#333] p-8 md:p-16 relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-[radial-gradient(#13AC6F_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#13AC6F]/10 text-[#13AC6F] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#13AC6F]/20 animate-pulse">
                        <Timer size={14} /> Em Desenvolvimento
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O Futuro: App do Entregador</h2>
                    <p className="text-[#AAA] max-w-2xl text-lg mb-12">
                        Para fechar o ciclo, estamos desenvolvendo a terceira ponta do triângulo: um aplicativo estilo "Uber" para motoboys locais.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 w-full text-left">
                        <div className="bg-[#0F0F0F] p-6 rounded-2xl border border-[#333] hover:border-[#13AC6F] transition-colors">
                            <div className="w-12 h-12 bg-[#13AC6F]/20 rounded-full flex items-center justify-center text-[#13AC6F] mb-4">
                                <Bike size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Economia Gig</h4>
                            <p className="text-sm text-[#888]">Qualquer entregador habilitado pode se registrar e começar a ganhar realizando entregas curtas na região.</p>
                        </div>
                        
                        <div className="bg-[#0F0F0F] p-6 rounded-2xl border border-[#333] hover:border-[#13AC6F] transition-colors">
                            <div className="w-12 h-12 bg-[#13AC6F]/20 rounded-full flex items-center justify-center text-[#13AC6F] mb-4">
                                <Navigation size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Algoritmo de Rotas</h4>
                            <p className="text-sm text-[#888]">"Apita" a corrida mais próxima. O app traça a rota da loja até o cliente, otimizando o tempo.</p>
                        </div>

                        <div className="bg-[#0F0F0F] p-6 rounded-2xl border border-[#333] hover:border-[#13AC6F] transition-colors">
                            <div className="w-12 h-12 bg-[#13AC6F]/20 rounded-full flex items-center justify-center text-[#13AC6F] mb-4">
                                <CheckCircle2 size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Prova de Entrega</h4>
                            <p className="text-sm text-[#888]">O entregador finaliza a corrida com foto e assinatura digital, liberando o pagamento para a loja.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 4: DESIGN SYSTEM SHOWCASE */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-[#F7F7F7] mb-8 border-b border-[#333] pb-4">Styleguide & Identidade</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Colors */}
                <div className="bg-[#212E3A] p-8 rounded-xl border border-[#333]">
                    <h4 className="text-[#AAAAAA] uppercase tracking-wider text-sm mb-6">Cores Principais</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg bg-[#FFB600] shadow-lg"></div>
                            <div>
                                <p className="text-[#F7F7F7] font-mono font-bold">#FFB600</p>
                                <p className="text-[#888] text-xs">Primary / Brand</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg bg-[#212E3A] border border-[#444] shadow-lg"></div>
                            <div>
                                <p className="text-[#F7F7F7] font-mono font-bold">#212E3A</p>
                                <p className="text-[#888] text-xs">Surface / Card</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Typography & Components */}
                <div className="bg-[#212E3A] p-8 rounded-xl border border-[#333] space-y-8">
                    <div>
                        <h4 className="text-[#AAAAAA] uppercase tracking-wider text-sm mb-4">Componentes UI</h4>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-2 bg-[#FFB600] text-[#000] font-bold rounded hover:bg-[#ffc12e]">Botão Primário</button>
                            <div className="flex items-center gap-2 bg-[#15191E] px-4 py-2 rounded border border-[#333] text-[#EEE]">
                                <div className="w-4 h-4 rounded-full border border-[#FFB600] flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#FFB600] rounded-full"></div>
                                </div>
                                <span>Radio Selecionado</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#AAAAAA] uppercase tracking-wider text-sm mb-4">Tipografia</h4>
                        <p className="text-[#F7F7F7] text-2xl font-bold">Roboto Bold</p>
                        <p className="text-[#AAAAAA]">Roboto Regular para corpo de texto, garantindo leitura fluida em listagens longas de peças.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center border-t border-[#333] pt-12">
            <p className="text-[#888] font-mono mb-4">AutoParts Guide - Desenvolvido por Fábio Lucas</p>
            <div className="flex justify-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-[#FFB600] text-[#000] font-bold rounded hover:bg-[#ffcc33] transition-colors shadow-[0_0_20px_rgba(255,182,0,0.3)]"
                >
                    Fechar Case Study
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

// Sub-components for Cleaner Code

const TagBadge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1 bg-[#212E3A] border border-[#333] rounded-full text-[#AAAAAA] text-xs">
        {icon}
        <span>{label}</span>
    </div>
);

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-center gap-4 bg-[#15191E] p-4 rounded-xl border border-[#333]">
        <div className="text-[#FFB600]">{icon}</div>
        <div>
            <h4 className="text-[#F7F7F7] font-bold text-sm">{title}</h4>
            <p className="text-[#888] text-xs">{desc}</p>
        </div>
    </div>
);

export default AutoPartsCaseStudy;