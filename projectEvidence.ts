/** Public editorial summaries. Detailed private evidence remains outside the website. */
export interface ProjectEvidence {
  name: string;
  headline: string;
  audience: string;
  benefits: { title: string; detail: string }[];
  limits: string;
  status: string;
  accent: string;
}

export const PROJECT_EVIDENCE: Record<string, ProjectEvidence> = {
  'gynmove': {
    name: 'GynMove Passageiro',
    headline: 'Mobilidade urbana com acompanhamento em tempo real e verificação biométrica.',
    audience: 'Para passageiros que buscam cotação clara de corridas, segurança de identidade e rotas otimizadas.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#13AC6F',
    benefits: [
      { title: 'Comparar trajetos e estimativas', detail: 'O passageiro compara trajetos e estimativas antes de solicitar a corrida, escolhendo categorias e motoristas elegíveis conforme disponibilidade.' },
      { title: 'Prova de vida e biometria', detail: 'Fluxo biométrico estruturado em 7 etapas com orientação dinâmica e validação de estabilidade da câmera antes do envio.' },
      { title: 'Acompanhamento da rota em tempo real', detail: 'Visualização da aproximação do veículo no mapa integrado com cálculo dinâmico de tempo estimado de chegada (ETA).' },
      { title: 'Revisão de cotação e histórico', detail: 'Checkout transparente com confirmação de pagamento e histórico de viagens anteriores com dados de trajeto e horário.' },
    ],
    limits: 'Oferta de motoristas e liquidação financeira dependem da malha operacional em execução. Requer conectividade e GPS ativo.',
  },
  'gynmovemotorista': {
    name: 'GynMove Motorista',
    headline: 'Gestão da rota, fila dinâmica de chamadas e telemetria veicular para motoristas.',
    audience: 'Para motoristas parceiros que precisam de gestão eficiente de solicitações e validação de segurança.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#13AC6F',
    benefits: [
      { title: 'Fila dinâmica de solicitações', detail: 'Recepção de ofertas em tempo real com valor previsto, distância até o passageiro e ponto de destino antes de aceitar.' },
      { title: 'Prova de vida automatizada', detail: 'Validação periódica de identidade do condutor com leitura estável de enquadramento, mitigando uso indevido de contas.' },
      { title: 'Telemetria e tracking em segundo plano', detail: 'Atualização contínua de coordenadas durante o percurso da corrida com sincronização para a central de monitoramento.' },
      { title: 'Carteira e extrato de corridas', detail: 'Acompanhamento detalhado de corridas concluídas, quilometragem percorrida e resumo de repasses operacionais.' },
    ],
    limits: 'Validação cadastral sujeita a verificação documental pela plataforma. A carteira de motorista é demonstrativa de repasses e não constitui conta bancária para saques diretos.',
  },
  'voltfinance': {
    name: 'VoltFinance',
    headline: 'Gestão financeira reativa integrada a fluxo de caixa e telemetria patrimonial.',
    audience: 'Para autônomos, frotistas e motoristas gerenciarem receitas, despesas e custos automotivos.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#44D62C',
    benefits: [
      { title: 'Dashboard reativo em tempo real', detail: 'Agregação automática de receitas, saídas e saldo operacional com gráficos intuitivos de acompanhamento por período.' },
      { title: 'Classificação por categoria', detail: 'Segmentação de despesas (combustível, manutenção, alimentação, tributos) para apuração de rentabilidade líquida.' },
      { title: 'Módulo IoT e dados veiculares', detail: 'Acompanhamento de custos por quilômetro rodado e controle preventivo de despesas automotivas periódicas.' },
      { title: 'Metas e fluxo de caixa recente', detail: 'Planejamento financeiro mensal com visão dos últimos lançamentos da operação para tomada rápida de decisões.' },
    ],
    limits: 'Metas, orçamento e telemetria incluem módulos demonstrativos no ecossistema local. Integração com instituições bancárias depende de credenciais Open Finance.',
  },
  'multasipva': {
    name: 'Multas & IPVA Brasil',
    headline: 'Auditoria veicular, organização de débitos e roteiros oficiais de consulta.',
    audience: 'Para condutores e frotas centralizarem veículos, taxas de licenciamento, IPVA e recursos de trânsito.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#10B981',
    benefits: [
      { title: 'Centralização de frotas e veículos', detail: 'Cadastro organizado de veículos por placa e Renavam, facilitando a consulta rápida aos dados de cada automóvel.' },
      { title: 'Roteiros de acesso aos órgãos oficiais', detail: 'Guias estruturados e links diretos para Detran, Sefaz e órgãos autuadores em âmbito nacional para consulta manual.' },
      { title: 'Organização de prazos e vencimentos', detail: 'Acompanhamento de calendários de pagamento de IPVA com desconto e datas de licenciamento anual obrigatório.' },
      { title: 'Dossiê e referências de infrações', detail: 'Armazenamento de referências de documentos de autuações e roteiro para análise de consistência formal de notificações.' },
    ],
    limits: 'Não substitui as consultas diretas aos sistemas governamentais nem garante anulação de multas. Informações oficiais devem ser conferidas nas bases do Detran/Sefaz.',
  },
  'pineapplepay': {
    name: 'Pineapple Pay',
    headline: 'Ecossistema multi-perfil de pagamentos, cashback para formaturas e marketing pré-pago.',
    audience: 'Conectando estudantes universitários, empresas parceiras locais e apoiadores/padrinhos.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#E91482',
    benefits: [
      { title: 'Jornada multi-perfil integrada', detail: 'Experiências exclusivas e direcionadas para Alunos (turmas de formatura), Lojistas credenciados e Padrinhos apoiadores.' },
      { title: 'Cashback coletivo para formaturas', detail: 'Conversão de compras no comércio local em abatimento direto de mensalidades de fundos de formatura.' },
      { title: 'Painel do lojista e marketing pré-pago', detail: 'Criação de ofertas comissionadas, validação de vouchers digitais e fidelização de consumidores universitários.' },
      { title: 'Módulo de sorteios e engajamento', detail: 'Distribuição transparente de cupons eletrônicos atrelados às compras para participação em sorteios periódicos.' },
    ],
    limits: 'A liquidação de valores e a concessão de benefícios dependem dos acordos formalizados entre comissões de formatura, intermediadores e lojistas conveniados.',
  },
  'autopartsguide': {
    name: 'AutoParts Guide (Clientes)',
    headline: 'Marketplace de autopeças por modal veicular e manutenção preventiva My Car.',
    audience: 'Para motoristas e oficinas encontrarem peças compatíveis, agendarem serviços e gerenciarem veículos.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#FFB600',
    benefits: [
      { title: 'Busca por modal e compatibilidade', detail: 'Localização de peças e acessórios filtrados por categoria (carros, motos, utilitários) e especificações técnicas.' },
      { title: 'Módulo My Car (Garagem Digital)', detail: 'Cadastro de veículos próprios e histórico de manutenções preventivas (troca de óleo, filtros, correias e freios).' },
      { title: 'Gestão de cartões e carteira', detail: 'Interface dinâmica para cadastro de cartões com detecção automática de bandeira e modalidade (crédito/débito).' },
      { title: 'Chat em tempo real com lojistas', detail: 'Canal direto para tirar dúvidas sobre aplicação de peças, cotação de frete e prazos de retirada com as lojas.' },
    ],
    limits: 'Disponibilidade de peças, agendamentos e entrega dependem dos estoques e políticas das autopeças credenciadas em cada localidade.',
  },
  'autopartsguide_lojista': {
    name: 'AutoParts Guide (Lojistas)',
    headline: 'Gestão completa de autopeças, publicação de stories, pedidos e planos de assinatura.',
    audience: 'Para lojas de autopeças, centros automotivos e distribuidoras administrarem vendas e clientes.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#FF9800',
    benefits: [
      { title: 'Catálogo de autopeças e serviços', detail: 'Cadastro completo de produtos com imagens, especificações de veículos compatíveis e controle de disponibilidade.' },
      { title: 'Stories e ofertas da loja', detail: 'Publicação de stories e campanhas promocionais para atrair clientes automotivos da região em tempo real.' },
      { title: 'Controle e despacho de pedidos', detail: 'Painel de pedidos em aberto, confirmados e despachados com dados de entrega e itens solicitados.' },
      { title: 'Checkout de assinatura de planos', detail: 'Assinatura dos planos da plataforma com pagamento por cartão de crédito (em até 12x), boleto ou Pix.' },
    ],
    limits: 'Processamento de cobranças de planos e recebimento de repasses condicionados à configuração de gateway bancário da loja.',
  },
  'bicho-mimado': {
    name: 'Bicho Mimado',
    headline: 'Ecossistema completo de pet care, marketplace e mobilidade com TaxiDog Turn-by-Turn.',
    audience: 'Para tutores agendarem cuidados veterinários, comprarem produtos e solicitarem transporte para o pet.',
    status: 'Código e fluxos verificados no GitHub',
    accent: '#06B6D4',
    benefits: [
      { title: 'Solicitar a busca do pet', detail: 'Nas clínicas habilitadas, o fluxo permite selecionar o pet, receber cotação e acompanhar as etapas do TaxiDog com navegação Turn-by-Turn via Google Navigation SDK.' },
      { title: 'Reservar atendimento veterinário e banho', detail: 'Escolha de clínica, profissional e horário com validação de conflitos de agenda para organização da rotina da clínica.' },
      { title: 'Reposição de produtos e compras', detail: 'Catálogo de rações, medicamentos e acessórios com histórico e reposição simplificada no carrinho.' },
      { title: 'Programa de recompensas e vouchers', detail: 'Acúmulo de pontos e resgate de vouchers em serviços cadastrados na rede veterinária parceira.' },
    ],
    limits: 'Disponibilidade de TaxiDog e atendimento domiciliar depende da adesão de clínicas e motoristas habilitados na região.',
  },
  'brigaelo': {
    name: 'Brigaelo',
    headline: 'Do doce artesanal escolhido ao horário combinado de entrega.',
    audience: 'Protótipo para organizar pedidos de clientes e etapas de produção de docerias artesanais.',
    status: 'Protótipo com estado local',
    accent: '#E91482',
    benefits: [
      { title: 'Escolher entrega ou retirada', detail: 'Reunião de itens selecionados, endereço e modalidade de recebimento para revisão rápida do pedido.' },
      { title: 'Combinar novo horário de entrega', detail: 'Fluxo para proposta de reagendamento de retirada ou entrega com confirmação entre as partes.' },
      { title: 'Acompanhar etapas de produção', detail: 'Visualização dos status (confirmado, em preparo, embalado, em rota e entregue) com estimativa de tempo.' },
    ],
    limits: 'Dados em memória local; pagamentos reais e rastreamento concorrente em escala dependem de homologação com provedores externos.',
  },
};

export const TECHNICAL_STUDIES = [
  { name: 'Faculdade-SimpleAdapter', tech: 'Android · Java · Volley', description: 'Estudo de formulários, navegação e apresentação de dados externos no celular.', limit: 'Exercício acadêmico; autenticação fictícia e listagens não validadas.' },
  { name: 'Retrofit-Master-Faculdade', tech: 'Android · Retrofit · Gson', description: 'Estudo de integração REST que separa requisições, modelos de dados e telas de consulta.', limit: 'Exercício acadêmico; não comprova listas completas, persistência ou autenticação real.' },
  { name: 'faculdade_flutter', tech: 'Flutter · Dart', description: 'Gerador experimental de combinações de palavras para explorar sugestões de nomes durante a navegação.', limit: 'Sem favoritos, armazenamento ou verificação de marca e domínio.' },
  { name: 'flutter_fotos_list', tech: 'Flutter · API · Isolates', description: 'Galeria demonstrativa com miniaturas em grade e processamento de JSON fora do isolate da interface.', limit: 'Fonte externa demonstrativa; sem upload, edição ou biblioteca pessoal.' },
  { name: 'agenda-online', tech: 'PHP · MySQL · jQuery', description: 'Protótipo colaborativo de cadastro, consulta, edição e exclusão de pessoas em formulários web.', limit: 'Trabalho em equipe. Não é agenda clínica pronta; segurança e uso real precisam de revisão.' },
  { name: 'insta-downloader', tech: 'Python · Linha de comando', description: 'Utilitário para tentar salvar um post público indicado por URL, com retorno simples de erro.', limit: 'Uso condicionado à autorização sobre o conteúdo e ao funcionamento da dependência. Sem integração ativa com conta ou execução nesta revisão.' },
];
