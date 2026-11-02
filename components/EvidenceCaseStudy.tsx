import React, { useEffect, useRef } from 'react';
import { 
  X, CheckCircle2, ArrowRight, Smartphone, Heart, Stethoscope, 
  Wallet, Car, ShieldCheck, FileText, CreditCard, GraduationCap, 
  Store, Navigation, Activity, Clock, Wrench, Search, Layers, Bell, Check
} from 'lucide-react';
import { PROJECT_EVIDENCE } from '../projectEvidence';

interface DeepDiveConfig {
  domainBadge: string;
  heroSub: string;
  tags: string[];
  mockupTitle: string;
  mockupSub: string;
  mockupAccent: string;
  mockupItems: { title: string; desc: string; badge: string; color: string }[];
  dualPillars: { title: string; desc: string; icon: string }[];
  deepDives: { title: string; items: string[] }[];
  palette: { name: string; hex: string; role: string }[];
}

const PROJECT_CONFIGS: Record<string, DeepDiveConfig> = {
  'bicho-mimado': {
    domainBadge: 'Veterinária & Logística Pet',
    heroSub: 'Super app completo que une o cuidado clínico à conveniência logística, com TaxiDog nativo via Google Navigation SDK e agendamentos inteligentes.',
    tags: ['TaxiDog Turn-by-Turn', 'ERP Clínico', 'Marketplace Pet', 'Google Navigation SDK', 'Firebase Functions'],
    mockupTitle: 'Bicho Mimado · Pet Care',
    mockupSub: 'Como está o seu pet hoje? 🐾',
    mockupAccent: '#06B6D4',
    mockupItems: [
      { title: 'TaxiDog Solicitado', desc: 'Motorista credenciado a 4 min do local', badge: 'Em Rota', color: '#F97316' },
      { title: 'Consulta Veterinária', desc: 'Dr. Marcos · Clínica Central · 15:30', badge: 'Confirmada', color: '#06B6D4' },
      { title: 'Vacinação V10 & Antirrábica', desc: 'Carteira digital atualizada em tempo real', badge: 'Em Dia', color: '#10B981' }
    ],
    dualPillars: [
      { title: 'App do Tutor', desc: 'Experiência completa para o tutor: agendamento com escolha de veterinário, carteira de vacinas, compra de ração e rastreamento ao vivo do TaxiDog.', icon: 'Heart' },
      { title: 'Painel da Clínica & TaxiDog', desc: 'Central de atendimento para veterinários e motoristas: prontuário médico eletrônico, controle de agenda, emissão de receitas e despacho automatizado de corridas pet.', icon: 'Stethoscope' }
    ],
    deepDives: [
      { title: 'Auth & Perfil Pet', items: ['Cadastro completo com foto, raça, porte e peso', 'Histórico de alergias e prontuário médico', 'Carteira digital de vacinas com alertas de reforço'] },
      { title: 'Agendamentos & Consultas', items: ['Calendário interativo com horários em tempo real', 'Seleção de especialidades (clínica, cirurgia, banho e tosa)', 'Lembretes push e confirmação via WhatsApp'] },
      { title: 'TaxiDog Turn-by-Turn', items: ['Cotação transparente com trajeto ida/volta', 'Navegação turn-by-turn nativa via Google Navigation SDK', 'Rastreamento GPS contínuo e status de embarque do pet'] },
      { title: 'Marketplace & Fidelidade', items: ['Catálogo de rações e medicamentos com reposição rápida', 'Programa de pontos e resgate de vouchers veterinários', 'Checkout integrado com cartão e Pix'] }
    ],
    palette: [
      { name: 'Primary Cyan', hex: '#06B6D4', role: 'Clínico & Confiança' },
      { name: 'Energy Orange', hex: '#F97316', role: 'Pet & Logística' },
      { name: 'Slate Dark', hex: '#0F172A', role: 'Surface & Fundo' }
    ]
  },
  'voltfinance': {
    domainBadge: 'Inteligência Financeira & IoT Automotivo',
    heroSub: 'Plataforma de gestão financeira reativa com arquitetura MVC, isolamento estrito de contas PF/PJ e telemetria veicular para controle em tempo real de custos por quilômetro rodado.',
    tags: ['Dashboard Reativo', 'Separação PF/PJ', 'IoT Automotivo', 'Custo por KM', 'MVC Architecture'],
    mockupTitle: 'VoltFinance · Dashboard Reativo',
    mockupSub: 'Saldo Consolidado: R$ 18.420,50',
    mockupAccent: '#44D62C',
    mockupItems: [
      { title: 'Custo por KM Rodado', desc: 'R$ 0,58/km · Combustível + Depreciação + Seguro', badge: 'Telemetria IoT', color: '#44D62C' },
      { title: 'Reserva Fiscal DAS MEI', desc: 'Provisão compulsória de 5% sobre faturamento', badge: 'Em Dia', color: '#10B981' },
      { title: 'Fluxo de Caixa Operacional', desc: 'Entradas: R$ 8.940 | Saídas Fixas: R$ 3.120', badge: 'Lucro +65%', color: '#3B82F6' }
    ],
    dualPillars: [
      { title: 'Gestão Financeira Reativa (PF/PJ)', desc: 'Isolamento estrito entre finanças da empresa (PJ / DAS MEI / Manutenção) e finanças pessoais (PF). Fluxo de dinheiro ordenado por pró-labore formal.', icon: 'Wallet' },
      { title: 'Telemetria & Custos de Frota (IoT)', desc: 'Módulo automotivo para cálculo contínuo de custo de rodagem, alertas preditivos de manutenção e conciliação de abastecimentos.', icon: 'Car' }
    ],
    deepDives: [
      { title: 'Dashboard Reativo em Tempo Real', items: ['Gráficos dinâmicos de entradas, saídas e saldo líquido', 'Indicadores de rentabilidade diária e mensal', 'Filtro rápido por contas, cartões e centros de custo'] },
      { title: 'Classificação Inteligente de Despesas', items: ['Categorização automática por regras parametrizáveis', 'Separação de despesas fixas, variáveis e investimentos', 'DRE simplificado para autônomos e pequenos negócios'] },
      { title: 'Módulo IoT & Dados Veiculares', items: ['Cálculo dinâmico de custo operacional por quilômetro', 'Acompanhamento de consumo médio de combustível', 'Depreciação veicular e provisão para pneus e revisões'] },
      { title: 'Metas, Orçamento & DAS MEI', items: ['Teto de gastos com barra de progresso por categoria', 'Guia de recolhimento DAS MEI integrada com alertas', 'Extrato consolidado pronto para contabilidade'] }
    ],
    palette: [
      { name: 'Terminal Green', hex: '#44D62C', role: 'Fintech & Indicadores' },
      { name: 'Emerald Growth', hex: '#10B981', role: 'Metas & Positivo' },
      { name: 'Matte Black', hex: '#0A0A0A', role: 'Interface Noturna' }
    ]
  },
  'multasipva': {
    domainBadge: 'Auditoria Veicular & Trânsito',
    heroSub: 'Suíte inteligente para centralização de frotas e automóveis particulares, monitoramento de prazos fiscais de IPVA e geração fundamentada de recursos formais de trânsito.',
    tags: ['Consulta Placa/Renavam', 'Calendário IPVA', 'Recursos de Multa', 'Auditoria Python', 'Órgãos Oficiais'],
    mockupTitle: 'Multas & IPVA Brasil · Dossiê',
    mockupSub: 'Frota Ativa: 12 Veículos Monitorados',
    mockupAccent: '#10B981',
    mockupItems: [
      { title: 'IPVA 2026 · Placa BRA2E19', desc: 'Desconto de 10% para cota única até 15/Jan', badge: 'Pagar c/ Desconto', color: '#10B981' },
      { title: 'Notificação de Autuação · BR-153', desc: 'Art. 218 II CTB · Prazo para Defesa Prévia: 20 dias', badge: 'Recurso Disponível', color: '#F59E0B' },
      { title: 'Licenciamento Anual CRLV-e', desc: 'Documento digital homologado e emitido', badge: 'Regular', color: '#3B82F6' }
    ],
    dualPillars: [
      { title: 'Garagem Digital do Condutor', desc: 'Cadastro centralizado de veículos por placa e Renavam com alertas antecipados de vencimento de IPVA, taxas e licenciamento anual.', icon: 'Car' },
      { title: 'Suíte de Auditoria & Recursos', desc: 'Análise técnica de consistência formal de notificações e geração de minutas administrativas para apresentação perante órgãos de trânsito.', icon: 'FileText' }
    ],
    deepDives: [
      { title: 'Dossiê Veicular Integrado', items: ['Consulta por placa e Renavam de histórico de débitos', 'Situação cadastral do automóvel e gravames', 'Central de documentos com download do CRLV digital'] },
      { title: 'Calendário Fiscal & IPVA', items: ['Datas oficiais de vencimento por final de placa', 'Simulação de economia com desconto em cota única', 'Roteiro de parcelamento em até 5x sem juros'] },
      { title: 'Radar de Infrações & Pontuação', items: ['Histórico de autuações com data, local e foto', 'Enquadramento pelo CTB e impacto na pontuação da CNH', 'Notificação imediata ao identificar novas ocorrências'] },
      { title: 'Recursos Administrativos & Órgãos', items: ['Verificação de requisitos legais e aferição do radar', 'Gerador de defesas prévias e recursos para JARI', 'Links diretos para portais do Detran, Sefaz e PRF'] }
    ],
    palette: [
      { name: 'Safety Emerald', hex: '#10B981', role: 'Conformidade & Regularidade' },
      { name: 'Alert Amber', hex: '#F59E0B', role: 'Prazos & Notificações' },
      { name: 'Deep Dark', hex: '#0A0F0D', role: 'Surface Especializado' }
    ]
  },
  'pineapplepay': {
    domainBadge: 'Fintech & Fidelização Universitária',
    heroSub: 'Ecossistema multi-perfil que transforma o consumo no comércio local em cashback direto para fundos de formatura, conectando estudantes, estabelecimentos e apoiadores.',
    tags: ['Multi-Perfil', 'Cashback Formaturas', 'Marketing Pré-Pago', 'Validação QR Code', 'Sorteios Eletrônicos'],
    mockupTitle: 'PineapplePay · Carteira',
    mockupSub: 'Comissão de Formatura · Medicina 2026',
    mockupAccent: '#E91482',
    mockupItems: [
      { title: 'Cashback Coletivo Acumulado', desc: 'R$ 48.650,00 arrecadados no comércio parceiro', badge: '-15% na Mensalidade', color: '#E91482' },
      { title: 'Voucher de Compra Validado', desc: 'Restaurante Universitário · QR Code #9482', badge: 'R$ 12 Cashback', color: '#FFAB00' },
      { title: 'Sorteio de Final de Ano', desc: 'Você possui 24 bilhetes ativos pela rede de compras', badge: 'Bilhete #8491', color: '#00C853' }
    ],
    dualPillars: [
      { title: 'Jornada do Aluno & Turmas', desc: 'Abatimento direto das parcelas da festa de formatura através do consumo diário em restaurantes, papelarias e academias credenciadas.', icon: 'GraduationCap' },
      { title: 'Painel do Lojista & Marketing', desc: 'Ferramenta para comerciantes criarem campanhas de cashback pré-pago, validarem vouchers digitais e atraírem o público acadêmico.', icon: 'Store' }
    ],
    deepDives: [
      { title: 'Perfil Aluno & Arrecadação', items: ['Carteira com saldo individual e meta da turma', 'Histórico de compras e percentual abatido por loja', 'Conexão com comissão de formatura e prestação de contas'] },
      { title: 'Painel do Estabelecimento Parceiro', items: ['Criação de ofertas promocionais e percentual de retorno', 'Leitor de QR Code para validação de compras no caixa', 'Métricas de clientes novos e retenção universitária'] },
      { title: 'Módulo Padrinhos & Sorteios', items: ['Apoiadores externos podem destinar cashback para formandos', 'Distribuição automatizada de cupons eletrônicos de sorteio', 'Auditoria de bilhetes gerados por compras reais'] },
      { title: 'Segurança & Liquidação Financeira', items: ['Repasse seguro de valores acumulados aos fundos', 'Integração bancária com extrato transparente', 'Logs de transações auditáveis em nuvem'] }
    ],
    palette: [
      { name: 'Pineapple Pink', hex: '#E91482', role: 'Identidade & Juventude' },
      { name: 'Gold Yellow', hex: '#FFAB00', role: 'Cashback & Recompensas' },
      { name: 'Midnight Black', hex: '#000000', role: 'Fundo & Contraste' }
    ]
  },
  'gynmovemotorista': {
    domainBadge: 'Mobilidade · Telemetria & Parceiros',
    heroSub: 'Aplicativo nativo para motoristas parceiros com fila dinâmica de solicitações em tempo real, validação periódica de identidade biométrica e rastreamento contínuo em segundo plano.',
    tags: ['Fila Dinâmica', 'Background Tracking', 'Telemetria de Cabine', 'Repasses Operacionais', 'Biometria'],
    mockupTitle: 'GynMove Motorista · Em Linha',
    mockupSub: 'Status: Disponível para Viagens',
    mockupAccent: '#13AC6F',
    mockupItems: [
      { title: 'Nova Chamada Recebida', desc: 'Setor Bueno ➔ Jardim Goiás · R$ 28,50 (5.2 km)', badge: 'Aceitar (12s)', color: '#13AC6F' },
      { title: 'Prova de Vida Periódica', desc: 'Biometria validada com sucesso · Conta Segura', badge: 'Homologado', color: '#10B981' },
      { title: 'Repasses do Dia', desc: '14 Corridas Realizadas · Total Líquido: R$ 384,00', badge: 'Extrato Atualizado', color: '#3B82F6' }
    ],
    dualPillars: [
      { title: 'Fila Dinâmica & Navegação', desc: 'Ofertas com dados claros antes do aceite: valor, distância até o passageiro, rota prevista e avaliação do usuário.', icon: 'Navigation' },
      { title: 'Telemetria & Gestão de Repasses', desc: 'Rastreamento GPS contínuo em segundo plano, monitoramento de cabine e extrato transparente de ganhos operacionais diários.', icon: 'Activity' }
    ],
    deepDives: [
      { title: 'Fila de Solicitações em Tempo Real', items: ['Algoritmo de despacho por proximidade e rota', 'Visualização do trajeto antes de confirmar a corrida', 'Botão de emergência e suporte direto 24h'] },
      { title: 'Verificação de Identidade Biométrica', items: ['Check facial periódico para prevenção de fraude', 'Enquadramento assistido com leitura de vivacidade', 'Liberação automática de acesso à plataforma'] },
      { title: 'Telemetria & Navegação em Segundo Plano', items: ['Tracking GPS mesmo com tela desligada ou outro app em uso', 'Cálculo preciso de velocidade, paradas e trajeto percorrido', 'Integração nativa com Google Maps e Waze'] },
      { title: 'Carteira & Extrato de Corridas', items: ['Resumo diário, semanal e mensal de rendimentos', 'Discriminação de taxas da plataforma e bônus por horário', 'Previsão de repasses com transferências via Pix'] }
    ],
    palette: [
      { name: 'Gyn Green', hex: '#13AC6F', role: 'Identidade & Operação' },
      { name: 'Active Blue', hex: '#3B82F6', role: 'Telemetria & GPS' },
      { name: 'Forest Dark', hex: '#0E1412', role: 'Interface Noturna' }
    ]
  },
  'brigaelo': {
    domainBadge: 'Confeitaria & Encomendas Artesanais',
    heroSub: 'Protótipo em Flutter para catalogação de doces artesanais, seleção de modalidades de entrega ou retirada e acompanhamento das etapas de produção.',
    tags: ['Flutter', 'Doces Artesanais', 'Etapas de Produção', 'Agendamento', 'Protótipo'],
    mockupTitle: 'Brigaelo · Doceria',
    mockupSub: 'Doces Finos Feitos à Mão',
    mockupAccent: '#E91482',
    mockupItems: [
      { title: 'Caixa 12 Gourmet Selecionada', desc: '4 Ninho c/ Nutella, 4 Belga, 4 Pistache', badge: 'No Carrinho', color: '#E91482' },
      { title: 'Modalidade de Recebimento', desc: 'Retirada no Ateliê · Hoje às 16:30', badge: 'Confirmado', color: '#F59E0B' },
      { title: 'Status da Encomenda', desc: 'Em preparo artesanal na cozinha', badge: 'Em Produção', color: '#10B981' }
    ],
    dualPillars: [
      { title: 'Vitrine & Personalização', desc: 'Seleção personalizada de caixas de brigadeiros e doces para festas, eventos ou presentes com embalagens especiais.', icon: 'Heart' },
      { title: 'Controle de Cozinha & Encomendas', desc: 'Linha do tempo visual de preparação: recebimento do pedido, preparo dos doces, embalagem e aviso de disponibilidade.', icon: 'Clock' }
    ],
    deepDives: [
      { title: 'Catálogo de Sabores & Caixas', items: ['Fotos em alta definição de cada doce artesanal', 'Montagem dinâmica de caixas personalizadas', 'Tabela de ingredientes e avisos para alérgicos'] },
      { title: 'Modalidade Entrega / Retirada', items: ['Escolha entre retirada agendada no ateliê ou delivery', 'Definição de data e horário com antecedência', 'Cálculo de taxa de entrega por região'] },
      { title: 'Acompanhamento de Preparo', items: ['Status em tempo real: Pedido Recebido, Em Preparo, Embalado, Pronto', 'Estimativa de tempo para finalização', 'Notificação de retirada com instruções de endereço'] },
      { title: 'Histórico de Encomendas', items: ['Repetição fácil de pedidos favoritos anteriores', 'Notas para cartões comemorativos de presente', 'Comunicação direta com a confeitaria'] }
    ],
    palette: [
      { name: 'Sweet Pink', hex: '#E91482', role: 'Doçura & Marca' },
      { name: 'Warm Amber', hex: '#D97706', role: 'Artesanal & Aconchego' },
      { name: 'Pure Dark', hex: '#111111', role: 'Surface' }
    ]
  }
};

const renderIcon = (name: string, size = 20, color = 'currentColor') => {
  switch (name) {
    case 'Heart': return <Heart size={size} color={color} />;
    case 'Stethoscope': return <Stethoscope size={size} color={color} />;
    case 'Wallet': return <Wallet size={size} color={color} />;
    case 'Car': return <Car size={size} color={color} />;
    case 'ShieldCheck': return <ShieldCheck size={size} color={color} />;
    case 'FileText': return <FileText size={size} color={color} />;
    case 'CreditCard': return <CreditCard size={size} color={color} />;
    case 'GraduationCap': return <GraduationCap size={size} color={color} />;
    case 'Store': return <Store size={size} color={color} />;
    case 'Navigation': return <Navigation size={size} color={color} />;
    case 'Activity': return <Activity size={size} color={color} />;
    case 'Clock': return <Clock size={size} color={color} />;
    default: return <Layers size={size} color={color} />;
  }
};

export default function EvidenceCaseStudy({ projectId, onClose }: { projectId: string; onClose: () => void }) {
  const project = PROJECT_EVIDENCE[projectId];
  const dialog = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLButtonElement>(null);

  const config = PROJECT_CONFIGS[projectId] || {
    domainBadge: 'Engenharia de Software & Flutter',
    heroSub: project?.audience || '',
    tags: ['Flutter', 'Firebase', 'Cloud Functions', 'Design System', 'Clean Architecture'],
    mockupTitle: project?.name || 'Aplicativo',
    mockupSub: 'Visão Geral do Produto',
    mockupAccent: project?.accent || '#44D62C',
    mockupItems: [
      { title: 'Fluxo Principal Homologado', desc: 'Arquitetura validada em código e regras de negócio', badge: 'Ativo', color: project?.accent || '#44D62C' },
      { title: 'Autenticação & Sessão', desc: 'Sessão persistente e gerenciamento seguro de estado', badge: 'Seguro', color: '#10B981' }
    ],
    dualPillars: [
      { title: 'Interface & Usabilidade', desc: 'Layout intuitivo concebido sobre Design System responsivo com acessibilidade e fluidez.', icon: 'Layers' },
      { title: 'Backend & Serviços', desc: 'Integrações seguras com serviços em nuvem, controle de concorrência e integridade de dados.', icon: 'Activity' }
    ],
    deepDives: [
      { title: 'Autenticação & Acesso', items: ['Validação rigorosa de formulários', 'Sessão criptografada e recuperação segura', 'Controle granular de permissões'] },
      { title: 'Regras de Negócio & Telas', items: ['Listagens reativas e filtros inteligentes', 'Atualização em tempo real de dados', 'Tratamento de exceções e offline graceful'] }
    ],
    palette: [
      { name: 'Brand Accent', hex: project?.accent || '#44D62C', role: 'Identidade Principal' },
      { name: 'Dark Surface', hex: '#111111', role: 'Fundo & Contraste' }
    ]
  };

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    close.current?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', keyboard);
    return () => {
      document.removeEventListener('keydown', keyboard);
      previous?.focus();
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      className="fixed inset-0 z-[100] bg-[#0A0A0A] overflow-y-auto font-sans selection:bg-[var(--case-accent)] selection:text-[#000] text-[#EEEEEE]"
      style={{ '--case-accent': project.accent } as React.CSSProperties}
    >
      {/* Floating Header */}
      <header className="sticky top-0 z-[101] bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333] px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--case-accent)]/10 border border-[var(--case-accent)]/30 text-[var(--case-accent)]">
            <Smartphone size={20} />
          </div>
          <div>
            <span className="font-mono font-bold text-xl text-[#EEEEEE] tracking-wide">{project.name}</span>
            <span className="hidden sm:inline-block ml-3 px-2.5 py-0.5 text-xs font-mono rounded bg-[#1A1A1A] text-[var(--case-accent)] border border-[var(--case-accent)]/30">
              {project.status}
            </span>
          </div>
        </div>
        <button
          ref={close}
          onClick={onClose}
          aria-label={`Fechar case ${project.name}`}
          className="p-2 rounded-full bg-[#1A1A1A] text-[var(--case-accent)] hover:bg-[var(--case-accent)] hover:text-[#000] transition-all border border-[#333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 cursor-pointer"
        >
          <X size={22} />
        </button>
      </header>

      <div className="max-w-7xl mx-auto pt-8 pb-20 px-6">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 min-h-[55vh]">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 border border-[var(--case-accent)] text-[var(--case-accent)] rounded-full text-xs font-mono uppercase tracking-widest bg-[var(--case-accent)]/10">
              {config.domainBadge}
            </div>
            
            <h1 id="case-title" className="text-4xl md:text-6xl font-bold text-[#F7F7F7] leading-tight font-mono">
              {project.headline}
            </h1>
            
            <p className="text-[#AAAAAA] text-base md:text-lg max-w-xl leading-relaxed">
              {project.audience}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {config.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#161616] border border-[#333] text-[#CCC] rounded-lg text-xs font-mono flex items-center gap-1.5">
                  <span className="text-[var(--case-accent)] font-bold">#</span>{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Screen / Phone Mockup Simulation */}
          <div className="relative h-[440px] md:h-[500px] bg-[#121212] rounded-[2rem] border-2 border-[#262626] flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--case-accent)]/10 via-transparent to-transparent opacity-60"></div>
            
            {/* Phone Body */}
            <div className="relative z-10 w-[300px] bg-[#000000] rounded-3xl border border-[#333] overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Phone Top Bar */}
              <div className="p-4 bg-[#181818] border-b border-[#2A2A2A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.mockupAccent }}></div>
                  <span className="text-xs font-mono font-bold text-[#EEE] truncate max-w-[180px]">{config.mockupTitle}</span>
                </div>
                <Bell size={14} className="text-[#888]" />
              </div>
              
              {/* Phone Content Screen */}
              <div className="p-4 space-y-3 bg-[#0A0A0A]">
                <div className="text-[11px] font-mono text-[#888]">{config.mockupSub}</div>
                
                {config.mockupItems.map((item, idx) => (
                  <div key={idx} className="bg-[#141414] p-3 rounded-xl border border-[#262626] space-y-1 hover:border-[var(--case-accent)]/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#EEE] truncate">{item.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#888] leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: ARCHITECTURE & DUAL PILLARS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[var(--case-accent)] font-mono text-xs uppercase tracking-widest">Arquitetura Integrada</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mt-2 font-mono">Dois Mundos, Uma Plataforma</h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto mt-2 text-sm md:text-base">
              A experiência do usuário e os módulos operacionais foram projetados de forma estritamente desacoplada, garantindo alta escalabilidade e segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {config.dualPillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#111111] p-8 rounded-2xl border border-[#262626] hover:border-[var(--case-accent)] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--case-accent)]/10 border border-[var(--case-accent)]/30 flex items-center justify-center text-[var(--case-accent)] mb-6">
                    {renderIcon(pillar.icon, 24, config.mockupAccent)}
                  </div>
                  <h3 className="text-2xl font-bold text-[#EEE] mb-3 font-mono">{pillar.title}</h3>
                  <p className="text-[#AAA] leading-relaxed text-sm md:text-base">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: DEEP DIVE INTO MODULES */}
        <div className="mb-20">
          <div className="mb-10 border-l-4 border-[var(--case-accent)] pl-6">
            <span className="text-[var(--case-accent)] font-mono tracking-wider uppercase text-xs">Módulos & Telas</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#EEEEEE] mt-1 font-mono">Deep Dive: Funcionalidades & Fluxos</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.deepDives.map((module, idx) => (
              <div key={idx} className="bg-[#111111] p-6 rounded-xl border border-[#2A2A2A] hover:border-[var(--case-accent)] transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: config.mockupAccent }}></div>
                  <h3 className="text-base font-bold text-[#EEE] font-mono truncate">{module.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {module.items.map((it, iIdx) => (
                    <li key={iIdx} className="text-xs text-[#AAA] flex items-start gap-2 leading-relaxed">
                      <span className="text-[var(--case-accent)] font-bold">›</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: BENEFITS & VALIDATION (PRESERVES EDITORIAL & ACCESSIBILITY TESTS) */}
        <div className="mb-20">
          <div className="mb-10 border-l-4 border-[var(--case-accent)] pl-6">
            <span className="text-[var(--case-accent)] font-mono tracking-wider uppercase text-xs">Validações Técnicas</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#EEEEEE] mt-1 font-mono">Benefícios & Validações do Projeto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.benefits.map(benefit => (
              <article key={benefit.title} className="bg-[#111111] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[var(--case-accent)]/50 transition-colors">
                <CheckCircle2 className="text-[var(--case-accent)] mb-4" size={26} />
                <h2 className="text-xl font-bold mb-3 font-mono text-[#EEE]">{benefit.title}</h2>
                <p className="text-[#AAAAAA] leading-relaxed text-sm">{benefit.detail}</p>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 4: SCOPE & AVAILABILITY (REQUIRED BY PLAYWRIGHT EDITORIAL TEST) */}
        <aside className="mb-20 border-l-4 border-[var(--case-accent)] bg-[#111111] p-8 rounded-r-2xl border-y border-r border-[#262626]">
          <h2 className="text-lg font-bold mb-3 font-mono text-[#EEE]">Escopo e disponibilidade</h2>
          <p className="text-[#AAA] leading-relaxed text-sm md:text-base">{project.limits}</p>
          <p className="text-xs text-[#777] mt-4 font-mono">
            Resumo baseado na leitura técnica de código. Não constitui teste do serviço em produção nem comprovação de resultados comerciais.
          </p>
        </aside>

        {/* SECTION 5: STYLEGUIDE & IDENTIDADE VISUAL */}
        <div className="mb-20 bg-[#111111] p-8 rounded-2xl border border-[#2A2A2A]">
          <div className="mb-8">
            <span className="text-[var(--case-accent)] font-mono text-xs uppercase tracking-widest">Design System</span>
            <h2 className="text-2xl font-bold text-[#F7F7F7] mt-1 font-mono">Styleguide & Identidade</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {config.palette.map(color => (
              <div key={color.hex} className="bg-[#181818] p-4 rounded-xl border border-[#2D2D2D] flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg border border-[#444] shadow-inner" style={{ backgroundColor: color.hex }}></div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#EEE]">{color.name}</div>
                  <div className="text-xs font-mono text-[var(--case-accent)]">{color.hex}</div>
                  <div className="text-[11px] text-[#888]">{color.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#888]">
            <div>Tipografia: <span className="text-[#EEE]">Roboto / Inter</span> (Corpo) + <span className="text-[var(--case-accent)]">Fira Code / JetBrains Mono</span> (Técnico)</div>
            <div className="flex items-center gap-2">
              <span>Padrão UI:</span>
              <span className="px-2 py-0.5 rounded bg-[var(--case-accent)] text-[#000] font-bold">Botão Primário</span>
              <span className="px-2 py-0.5 rounded bg-[#222] text-[#CCC] border border-[#444]">Filtro Tag</span>
            </div>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="flex items-center justify-between pt-6 border-t border-[#2A2A2A]">
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-[var(--case-accent)] font-bold font-mono hover:underline cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Voltar aos projetos <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
