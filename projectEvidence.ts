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
  'bicho-mimado': {
    name: 'Bicho Mimado',
    headline: 'O cuidado do pet, com menos idas e vindas na sua rotina.',
    audience: 'Para tutores que precisam organizar atendimento, compras e transporte até a clínica.',
    status: 'Fluxos identificados no código', accent: '#06B6D4',
    benefits: [
      { title: 'Solicitar a busca do pet', detail: 'Nas clínicas habilitadas, o fluxo permite selecionar o pet, receber uma cotação e acompanhar as etapas da busca até a chegada à clínica.' },
      { title: 'Reservar um atendimento', detail: 'Escolha serviço, profissional e horário. A lógica de reserva verifica conflitos de agenda para ajudar a organizar a rotina da clínica.' },
      { title: 'Repor compras com menos procura', detail: 'Produtos, carrinho e histórico de pedidos ficam organizados. Repetir um pedido repõe os itens no carrinho para uma nova revisão, sem concluir a compra automaticamente.' },
      { title: 'Consultar recompensas', detail: 'O fluxo de resgate verifica saldo e recompensa antes de registrar o voucher, conforme o catálogo e as regras configuradas pela clínica.' },
    ],
    limits: 'Disponibilidade depende de clínica, motorista, endereço, rota e pagamento. A busca demonstrada termina na clínica: não comprova devolução do pet em casa após o atendimento. Implantação, cobertura, atendimento e pagamentos reais não foram verificados.',
  },
  gynmove: {
    name: 'GynMove',
    headline: 'Mais informação para escolher a viagem e organizar o trabalho.',
    audience: 'Experiências distintas para passageiros e motoristas, com foco em planejamento e acompanhamento.',
    status: 'Fluxos identificados no código', accent: '#13AC6F',
    benefits: [
      { title: 'Comparar antes de sair', detail: 'O passageiro pode comparar trajetos e estimativas antes de solicitar a corrida, com opções de motoristas elegíveis conforme disponibilidade e categoria.' },
      { title: 'Revisar a cotação', detail: 'Nos fluxos de checkout habilitados, o passageiro confere cotação e condições de pagamento antes de confirmar. O histórico permite reencontrar viagens anteriores.' },
      { title: 'Organizar a fila de solicitações', detail: 'No aplicativo do motorista, a fila permite consultar o estado atualizado e aceitar ou recusar ofertas sem depender de uma lista estática.' },
      { title: 'Entender os registros das corridas', detail: 'A carteira do motorista apresenta lançamentos de acompanhamento. Não é conta bancária e não oferece saque na projeção examinada.' },
    ],
    limits: 'Oferta de motoristas, implantação e liquidação financeira não foram verificadas. A calculadora de combustível/manutenção existe no código, mas sua ligação à tela ativa não foi confirmada. Não representa lucro garantido nem custo exato; recursos de emergência e serviços adicionais não foram validados como operacionais.',
  },
  voltfinance: {
    name: 'VoltFinance',
    headline: 'Entenda o que entra, o que sai e o que sobra.',
    audience: 'Para organizar a visão pessoal e a da operação a partir dos lançamentos financeiros.',
    status: 'Implementação com áreas demonstrativas', accent: '#44D62C',
    benefits: [
      { title: 'Reunir entradas e despesas', detail: 'Painéis agregam os lançamentos em entradas, saídas e saldo calculado, evitando somas manuais para essa visão.' },
      { title: 'Ver o destino do dinheiro', detail: 'A distribuição por categoria ajuda a identificar onde as despesas se concentram; o fluxo recente reúne os últimos cinco dias da operação.' },
    ],
    limits: 'Metas, orçamento e telemetria incluem dados demonstrativos. O saldo é calculado de lançamentos, não saldo bancário confirmado. Não foram comprovadas integração bancária, transferências, crédito, investimentos ou telemetria de hardware ao vivo.',
  },
  multasipva: {
    name: 'MultasIPVA',
    headline: 'Veículos e caminhos de consulta, mais organizados.',
    audience: 'Para centralizar cadastros de veículos e referências de documentos, sem substituir fontes oficiais.',
    status: 'Organização cadastral e módulos demonstrativos', accent: '#44D62C',
    benefits: [
      { title: 'Evitar recadastrar o veículo', detail: 'O cadastro permite guardar veículos e escolher qual será consultado no painel.' },
      { title: 'Encontrar os caminhos de consulta', detail: 'Roteiros orientam o acesso manual aos portais oficiais. Uma lista pessoal mantém referências de arquivos de infração, como nome e tamanho.' },
    ],
    limits: 'Os módulos de valores, análise e recurso incluem exemplos fixos. Não há comprovação de consulta oficial automática, leitura jurídica do PDF, defesa personalizada, protocolo ou cancelamento de multa. Dados e documentos devem ser conferidos nas fontes oficiais.',
  },
  brigaelo: {
    name: 'Brigaelo',
    headline: 'Do doce escolhido ao horário combinado.',
    audience: 'Protótipo para organizar o pedido do cliente e as etapas de preparação de uma doceria.',
    status: 'Protótipo com estado local', accent: '#E91482',
    benefits: [
      { title: 'Escolher entrega ou retirada', detail: 'O fluxo reúne itens, endereço e modalidade de recebimento para revisar o pedido.' },
      { title: 'Combinar um novo horário', detail: 'O modelo de pedidos prevê proposta de remarcação de retirada, aceite e recusa, para tornar o combinado mais claro.' },
      { title: 'Organizar a preparação', detail: 'As etapas de confirmado, preparando, embalado, em rota e entregue modelam o andamento do pedido. A lógica também considera capacidade de atendimento.' },
    ],
    limits: 'Pedidos, estoque e sincronização examinados mantêm estado local em memória. Isso não comprova comunicação entre aparelhos ou operação ao vivo. Frete inclui simulações; pagamentos, cobertura, rastreamento e estoque concorrente ainda precisam de validação operacional.',
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
