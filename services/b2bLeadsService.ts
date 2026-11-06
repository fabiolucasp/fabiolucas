/**
 * Serviço de Prospecção B2B (Google Meu Negócio & Radar Comercial)
 * Mapeia empresas locais e regionais que possuem dores resolvidas pelos 8 apps do portfólio.
 */

export interface B2BLead {
  id: string;
  businessName: string;
  niche: 'Autopeças & Oficinas' | 'Pet Shops & Clínicas' | 'Mobilidade & Cooperativas' | 'Eventos & Formaturas' | 'Despachantes & Frotas';
  relatedProject: string; // Ex: 'AutoParts Guide', 'Bicho Mimado', 'GynMove'
  city: string;
  state: string;
  phone: string;
  googleRating: number;
  reviewCount: number;
  detectedPain: string;
  recommendedSolution: string;
  estimatedContractValue: string;
  status: 'Aberto' | 'Em Contato' | 'Proposta Enviada' | 'Fechado';
  customPitch: string;
}

export const MOCK_B2B_LEADS: B2BLead[] = [
  {
    id: 'lead-1',
    businessName: 'Distribuidora & Autopeças Canaã Peças',
    niche: 'Autopeças & Oficinas',
    relatedProject: 'AutoParts Guide',
    city: 'Goiânia',
    state: 'GO',
    phone: '5562988112233',
    googleRating: 4.6,
    reviewCount: 142,
    detectedPain: 'Atendimento lento via catálogo PDF estático no WhatsApp; perda de clientes que buscam por modelo veicular exato no balcão.',
    recommendedSolution: 'Aplicativo próprio de marketplace e catálogo dinâmico por modal veicular (Carros, Motos e Pesados) com checkout Pix.',
    estimatedContractValue: 'R$ 28.000 – R$ 38.000',
    status: 'Aberto',
    customPitch: 'Olá! Sou Fábio Lucas, desenvolvedor de Goiânia. Desenvolvi o AutoParts Guide, um marketplace em Flutter com busca por modelo de veículo e catálogo inteligente para autopeças. Notei o forte volume de clientes da Canaã Peças no Google Meu Negócio e gostaria de apresentar como um aplicativo proprietário pode agilizar o balcão e triplicar os pedidos pelo celular: https://fabiolucas.com/#/autoparts'
  },
  {
    id: 'lead-2',
    businessName: 'Hospital Veterinário & Pet Center Amigo Fiel',
    niche: 'Pet Shops & Clínicas',
    relatedProject: 'Bicho Mimado',
    city: 'Goiânia (Setor Bueno)',
    state: 'GO',
    phone: '5562999445566',
    googleRating: 4.8,
    reviewCount: 310,
    detectedPain: 'Clientes reclamam de falta de previsão de horário no serviço de leva-e-traz do pet (TaxiDog); recepcionistas sobrecarregadas com marcação manual de banho e vacina.',
    recommendedSolution: 'Super app integrado com TaxiDog nativo via Google Navigation SDK (mapa em tempo real), agendamento de consultas e prontuário digital com lembrete de vacinas.',
    estimatedContractValue: 'R$ 32.000 – R$ 45.000',
    status: 'Aberto',
    customPitch: 'Olá! Sou Fábio Lucas, arquiteto de software mobile em Goiânia. Desenvolvi o Bicho Mimado, uma plataforma com TaxiDog em tempo real no mapa e agendamento de banho e tosa. Identifiquei o destaque do Amigo Fiel no Setor Bueno e criei uma proposta visual mostrando como os donos de pets podem rastrear o transporte e agendar serviços pelo app próprio da clínica: https://fabiolucas.com/#/bichomimado'
  },
  {
    id: 'lead-3',
    businessName: 'Associação de Motoristas Executivos do Centro-Oeste',
    niche: 'Mobilidade & Cooperativas',
    relatedProject: 'GynMove & GynMove Motorista',
    city: 'Goiânia / Brasília',
    state: 'GO/DF',
    phone: '5561998877665',
    googleRating: 4.4,
    reviewCount: 88,
    detectedPain: 'Motoristas descontentes com taxas de 30% a 40% cobradas por grandes plataformas multinacionais e passageiros exigindo maior rigor de segurança.',
    recommendedSolution: 'Ecossistema completo com 2 aplicativos (Passageiro e Motorista) com prova de vida biométrica facial em 7 etapas, rotas dinâmicas e telemetria.',
    estimatedContractValue: 'R$ 50.000 – R$ 75.000',
    status: 'Em Contato',
    customPitch: 'Olá equipe! Sou Fábio Lucas, engenheiro criador do GynMove. Desenvolvemos uma plataforma completa de mobilidade em Flutter com prova de vida biométrica e cálculo de tarifas independente. Gostaria de agendar uma demonstração de 15 minutos para mostrar como a associação pode ter seu próprio app e reter 100% da receita da frota: https://fabiolucas.com/#/gynmove'
  },
  {
    id: 'lead-4',
    businessName: 'Elite Formaturas & Produções Artísticas',
    niche: 'Eventos & Formaturas',
    relatedProject: 'Pineapple Pay',
    city: 'Goiânia',
    state: 'GO',
    phone: '5562991122334',
    googleRating: 4.5,
    reviewCount: 95,
    detectedPain: 'Filas imensas de compra de bebidas e fichas de papel em eventos grandes, além de dificuldade na prestação de contas com comissões de formatura.',
    recommendedSolution: 'Carteira digital de eventos (sistema cashless) com QR Code dinâmico, recarga antecipada via Pix e módulo de cashback em parceiros locais.',
    estimatedContractValue: 'R$ 25.000 – R$ 35.000',
    status: 'Proposta Enviada',
    customPitch: 'Olá! Sou Fábio Lucas, desenvolvedor do ecossistema PineapplePay. Criamos uma solução de pagamentos por QR Code e carteira digital que eliminou filas em eventos e integrou comissões de formatura com o comércio local. Podemos implantar uma solução semelhante e customizada para os eventos da Elite: https://fabiolucas.com/#/pineapplepay'
  },
  {
    id: 'lead-5',
    businessName: 'Despachante & Assessoria Veicular Goiás',
    niche: 'Despachantes & Frotas',
    relatedProject: 'Multas & IPVA Brasil / VoltFinance',
    city: 'Aparecida de Goiânia',
    state: 'GO',
    phone: '5562984433221',
    googleRating: 4.7,
    reviewCount: 164,
    detectedPain: 'Clientes consultam status de licenciamento e multas repetidamente por telefone; frotistas sem controle de vencimento unificado.',
    recommendedSolution: 'Aplicativo de consulta veicular por placa e Renavam com alertas push automáticos de vencimento e opção de parcelamento integrado.',
    estimatedContractValue: 'R$ 22.000 – R$ 30.000',
    status: 'Aberto',
    customPitch: 'Olá! Sou Fábio Lucas. Desenvolvi o aplicativo Multas & IPVA Brasil em Flutter, permitindo consulta ágil e alertas de pendências veiculares. Podemos criar um aplicativo exclusivo com a marca do seu despachante para que seus clientes acompanhem seus processos e paguem taxas direto pelo celular: https://fabiolucas.com/#/multasipva'
  },
  {
    id: 'lead-6',
    businessName: 'Rede Oficina do Amortecedor & Freios',
    niche: 'Autopeças & Oficinas',
    relatedProject: 'AutoParts Guide',
    city: 'Brasília',
    state: 'DF',
    phone: '5561981122445',
    googleRating: 4.5,
    reviewCount: 205,
    detectedPain: 'Oficina não possui histórico digital de manutenções preventivas do veículo do cliente (troca de óleo, pastilhas e correias), perdendo retorno recorrente.',
    recommendedSolution: 'Módulo My Car (Garagem Digital) com alertas preventivos de quilometragem e agendamento de revisão com orçamento prévio.',
    estimatedContractValue: 'R$ 26.000 – R$ 36.000',
    status: 'Aberto',
    customPitch: 'Olá! Sou Fábio Lucas, especialista em desenvolvimento mobile. No aplicativo AutoParts Guide, implementamos o módulo My Car de garagem digital, que avisa o proprietário quando trocar óleo, pneus e pastilhas. Esse recurso gera recorrência previsível para oficinas mecânicas. Gostaria de bater um papo rápido sobre aplicar isso na sua rede? https://fabiolucas.com/#/autoparts'
  }
];
