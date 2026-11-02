export interface ScreenItem {
  id: string;
  name: string;
  module: string;
  description: string;
  tech: string;
}

export interface AppScreensCatalog {
  appId: string;
  appName: string;
  badge: string;
  figmaRef: string;
  summary: string;
  screens: ScreenItem[];
}

export const APPS_SCREENS_CATALOG: AppScreensCatalog[] = [
  {
    appId: "autopartsguide",
    appName: "AutoParts Guide (Clientes)",
    badge: "Figma New-Style-APG · v2.1.0+105",
    figmaRef: "bi9UWRimr6q7Y72hysam4j / Página NEW DESIGN (Clientes)",
    summary: "Marketplace automotivo completo em Flutter estruturado sobre o Design System Figma, abrangendo desde busca por modal veicular até carteira digital e módulo My Car de revisões preventivas.",
    screens: [
      { id: "1223:22245", name: "Splash Screen", module: "Autenticação", description: "Abertura com logo animado, verificação de sessão ativa no Firebase Auth e carregamento do tema.", tech: "Flutter · SharedPreferences · Auth" },
      { id: "1223:21179", name: "Opção de Abertura", module: "Autenticação", description: "Seleção entre entrar na conta existente, criar novo cadastro ou explorar o catálogo como visitante.", tech: "Flutter · AnimatedSwitcher" },
      { id: "1223:21166", name: "Login 1 & 2", module: "Autenticação", description: "Formulário de acesso com e-mail e senha, validação de campos em tempo real e login social.", tech: "Flutter · FirebaseAuth · Validators" },
      { id: "1223:21072", name: "Recuperar Senha", module: "Autenticação", description: "Instruções e envio de link de redefinição de credenciais para o e-mail cadastrado.", tech: "Flutter · sendPasswordResetEmail" },
      { id: "1223:22259", name: "Cadastrar por E-mail", module: "Cadastro", description: "Formulário de cadastro em etapas: nome completo, CPF, e-mail, senha e confirmação.", tech: "Flutter · BrasilFields · Stepper" },
      { id: "1223:22336", name: "Cadastrar por Celular", module: "Cadastro", description: "Autenticação via número de telefone com envio e validação de token OTP via SMS.", tech: "Flutter · PhoneAuthCredential · SMS" },
      { id: "420:4359", name: "Home & Busca por Modal", module: "Catálogo", description: "Filtros veiculares dinâmicos (Carros, Motos, Utilitários, Pesados) e busca inteligente por texto.", tech: "Flutter · GridView · Firestore" },
      { id: "1004:18745", name: "Produtos em Destaque", module: "Catálogo", description: "Vitrine de autopeças em oferta com preço promocional, fotos em carrossel e avaliação.", tech: "Flutter · CachedNetworkImage" },
      { id: "984:17523", name: "Detalhes da Peça / Serviço", module: "Catálogo", description: "Ficha técnica completa, compatibilidade com modelos de veículos, estoque e botão de compra.", tech: "Flutter · Hero Animation · Modals" },
      { id: "1083:19317", name: "Mapa & Lojas Próximas", module: "Geolocalização", description: "Visualização das autopeças e oficinas no mapa com cálculo de distância e rota até o local.", tech: "Flutter · Google Maps Flutter · GPS" },
      { id: "941:16875", name: "My Car - Garagem Digital", module: "Manutenção", description: "Cadastro e listagem dos veículos próprios (placa, modelo, ano) para alertas de serviço.", tech: "Flutter · Hive / SQLite · Card" },
      { id: "941:16948", name: "Itens para Manutenção", module: "Manutenção", description: "Checklists preventivos de troca de óleo, filtros, correias, pastilhas de freio e pneus.", tech: "Flutter · CheckboxListTile · Alerts" },
      { id: "941:16916", name: "Informar Problema Mecânico", module: "Manutenção", description: "Assistente de diagnóstico rápido de falhas com indicação das peças necessárias para reparo.", tech: "Flutter · Formulário Inteligente" },
      { id: "1060:18358", name: "Carrinho de Compras", module: "Checkout", description: "Listagem de peças adicionadas, ajuste de quantidades, cálculo de frete por CEP e subtotal.", tech: "Flutter · Provider / Riverpod" },
      { id: "1069:19196", name: "Confirmação do Pedido", module: "Checkout", description: "Escolha entre receber no endereço residencial ou retirar na loja física credenciada.", tech: "Flutter · RadioListTile · Stepper" },
      { id: "964:17007", name: "Cartões Cadastrados", module: "Carteira", description: "Listagem visual dos cartões de crédito/débito salvos de forma segura para compras rápidas.", tech: "Flutter · Tokenização Segura" },
      { id: "965:17208", name: "Adicionar Novo Cartão", module: "Carteira", description: "Cartão dinâmico interativo com detecção de bandeira (Visa, Mastercard, Elo) e validação de CVV.", tech: "Flutter · CustomPaint · RegEx" },
      { id: "976:17119", name: "Seu Dinheiro - Movimentações", module: "Carteira", description: "Extrato de saldo de cashback, reembolsos e histórico financeiro dentro da plataforma.", tech: "Flutter · ListView · DateFormat" },
      { id: "982:17805", name: "Histórico de Pedidos", module: "Pedidos", description: "Linha do tempo com acompanhamento de pedidos abertos, confirmados, despachados e concluídos.", tech: "Flutter · TimelineTile · Firestore" },
      { id: "1083:19317", name: "Chat com a Loja", module: "Atendimento", description: "Comunicação instantânea com lojistas para tirar dúvidas sobre aplicação de peças e fretes.", tech: "Flutter · WebSocket · Chat UI" },
      { id: "1107:19863", name: "Central de Notificações", module: "Notificações", description: "Painel de alertas sobre atualização de entrega, promoções regionais e lembretes de revisão.", tech: "Flutter · Firebase Cloud Messaging" },
      { id: "870:16504", name: "Meus Dados & Segurança", module: "Perfil", description: "Edição de dados cadastrais, alteração de senha e e-mail com reautenticação protegida.", tech: "Flutter · Form · SecureStorage" }
    ]
  },
  {
    appId: "autopartsguide_lojista",
    appName: "AutoParts Guide (Lojistas)",
    badge: "Figma New-Style-APG · v1.9.0+82",
    figmaRef: "bi9UWRimr6q7Y72hysam4j / Página NEW DESIGN (Lojistas)",
    summary: "Plataforma administrativa em Flutter para autopeças e oficinas gerenciarem catálogo, publicarem stories, atenderem clientes no chat e assinarem planos mensais/anuais no plano Spark.",
    screens: [
      { id: "713:9490_login", name: "Login do Lojista", module: "Acesso Corporativo", description: "Autenticação de lojistas credenciados com e-mail institucional e senha de acesso restrito.", tech: "Flutter · FirebaseAuth · Role Check" },
      { id: "713:9490_cad", name: "Cadastro da Loja & CNPJ", module: "Onboarding Loja", description: "Registro formal da autopeça com validação de CNPJ, razão social, endereço físico e horário de funcionamento.", tech: "Flutter · Consulta CNPJ · CEP API" },
      { id: "713:9490_dash", name: "Dashboard do Lojista", module: "Painel de Controle", description: "Visão geral com indicadores de vendas diárias, visualizações da vitrine, pedidos pendentes e mensagens.", tech: "Flutter · FlChart · Firestore Stream" },
      { id: "713:9490_prod", name: "Catálogo de Produtos & Serviços", module: "Estoque", description: "Cadastro e listagem de peças com fotos, código do fabricante, modais compatíveis e quantidade em estoque.", tech: "Flutter · Firebase Storage · Form" },
      { id: "713:9490_story", name: "Publicação de Stories", module: "Marketing", description: "Upload e publicação de fotos e vídeos promocionais temporários para clientes da cidade/região.", tech: "Flutter · ImagePicker · VideoPlayer" },
      { id: "713:9490_ped", name: "Central de Pedidos da Loja", module: "Vendas", description: "Painel segmentado em abas (Em Aberto, Confirmados e Despachados) para gestão operacional.", tech: "Flutter · TabBar · Batch Updates" },
      { id: "1092:19387", name: "Detalhe do Pedido Lojista", module: "Vendas", description: "Visualização completa dos itens comprados, dados do cliente, modalidade de entrega e botão de confirmação de despacho.", tech: "Flutter · BottomSheet · Alerts" },
      { id: "713:9490_chat", name: "Atendimento & Chat ao Vivo", module: "Comunicação", description: "Conversas em tempo real com clientes para negociação de preços, tirar dúvidas técnicas e envio de fotos.", tech: "Flutter · Cloud Firestore · Stream" },
      { id: "713:9525", name: "Planos Lojista - Mensal & Anual", module: "Assinaturas", description: "Tabela comparativa dos planos de adesão da plataforma com destaque para benefícios e visibilidade.", tech: "Flutter · Card Comparativo" },
      { id: "cartao_plano", name: "Checkout Cartão de Crédito", module: "Assinaturas", description: "Pagamento de mensalidade da loja com cartão interativo, parcelamento em até 12x e validação de titularidade.", tech: "Flutter · Pagar.me API · Gateway" },
      { id: "boleto_pix_plano", name: "Checkout Boleto & Pix", module: "Assinaturas", description: "Geração de código Pix Copia-e-Cola com QR Code instantâneo e emissão de boleto bancário para a loja.", tech: "Flutter · QR Flutter · Clipboard" },
      { id: "notif_lojista", name: "Notificações & Alertas Loja", module: "Operação", description: "Central de alertas para novos pedidos recebidos, perguntas de clientes no chat e vencimento de planos.", tech: "Flutter · LocalNotifications · FCM" },
      { id: "dados_loja", name: "Configuração de Conta & Recebedor", module: "Configurações", description: "Cadastro de dados bancários (banco, agência, conta corrente) para liquidação e repasse das vendas.", tech: "Flutter · Pagar.me Recipient · Form" }
    ]
  },
  {
    appId: "pineapplepay",
    appName: "Pineapple Pay",
    badge: "Figma et3lcHcpSjRJwSrugWX9hf · 589 Telas · v3.7.0",
    figmaRef: "et3lcHcpSjRJwSrugWX9hf / Wireframes, Final Screens & Prototype",
    summary: "Ecossistema multi-perfil em Flutter conectando formandos, lojistas locais e padrinhos apoiadores, com cashback coletivo para formatura, sorteios e marketing pré-pago.",
    screens: [
      { id: "30:245", name: "Splash & Identidade Visual", module: "Boas-Vindas", description: "Apresentação da marca Pineapple Pay com animação de boas-vindas e seleção de perfil de acesso.", tech: "Flutter · Rive / Lottie · Hero" },
      { id: "36:2628", name: "Cadastrar Tipo de Conta", module: "Onboarding Multi-Perfil", description: "Triagem entre Estudante Universitário, Lojista Parceiro, Padrinho Apoiador e Cerimonialista.", tech: "Flutter · Custom Buttons · Routing" },
      { id: "36:2512", name: "Login Unificado", module: "Autenticação", description: "Entrada por e-mail/senha com direcionamento automático para o painel específico do perfil autenticado.", tech: "Flutter · Firebase Auth · Role Guard" },
      { id: "0:1_home_est", name: "Home Universitário / Formando", module: "Estudante", description: "Visualização do cashback individual acumulado, saldo da turma e metas de arrecadação da formatura.", tech: "Flutter · Custom ProgressBar · Cards" },
      { id: "0:1_ranking", name: "Ranking de Turmas & Alunos", module: "Gamificação", description: "Placar gamificado comparando a arrecadação das turmas e estudantes com premiações e destaques.", tech: "Flutter · AnimatedList · Ranking" },
      { id: "92:4790_comissao", name: "Gestão da Comissão de Formatura", module: "Comissão", description: "Painel exclusivo para membros da comissão acompanharem repasses, mensalidades e balanço financeiro.", tech: "Flutter · Relatórios · Export PDF" },
      { id: "50:915", name: "Central de Sorteios & Prêmios", module: "Engajamento", description: "Exibição de sorteios ativos, geração de números da sorte vinculados às compras e conferência de ganhadores.", tech: "Flutter · Cloud Functions · Algoritmo" },
      { id: "0:1_lojista", name: "Painel do Lojista Parceiro", module: "Lojista", description: "Dashboard com volume de vendas geradas via universitários, cashback concedido e clientes fidelizados.", tech: "Flutter · Charts · Firestore Stream" },
      { id: "37:2997", name: "Gerar Ticket Lojista", module: "Marketing Pré-Pago", description: "Criação de ofertas e cupons promocionais voltados para incentivar compras de alunos e padrinhos.", tech: "Flutter · Form · Validade Dinâmica" },
      { id: "50:721", name: "Validação de Voucher no Caixa", module: "PDV Lojista", description: "Leitor de código de barras / QR Code para conceder o desconto e processar o cashback no ponto de venda.", tech: "Flutter · MobileScanner · QR Code" },
      { id: "50:696", name: "Painel do Padrinho / Apoiador", module: "Padrinho", description: "Interface para apoiadores acompanharem o cashback gerado para o estudante apadrinhado.", tech: "Flutter · Card Padrinho · Histórico" },
      { id: "0:1_atrelar", name: "Atrelar Faculdade / Turma", module: "Padrinho", description: "Busca de turmas e estudantes pelo código de turma ou CPF para direcionamento automático de cashback.", tech: "Flutter · SearchBar · Firebase Link" },
      { id: "92:4790_org", name: "Painel Cerimonialista / Organizadora", module: "Organizadora", description: "Gestão multi-turmas com monitoramento de arrecadação global, cronograma de eventos e auditoria.", tech: "Flutter · Multi-Tenant · Cloud Functions" },
      { id: "39:3220", name: "Checkout & Split de Pagamento", module: "Financeiro", description: "Discriminação do valor da compra, cashback da turma (ex: R$ 5,00) e taxa administrativa calculada.", tech: "Flutter · Split Payment · Gateway" },
      { id: "0:1_config", name: "Configurações, Sons & Vibração", module: "Preferências", description: "Personalização de tema escuro/claro, alertas sonoros de cashback recebido e controle de notificações.", tech: "Flutter · AudioPlayers · HapticFeedback" }
    ]
  },
  {
    appId: "gynmove",
    appName: "GynMove (Passageiro)",
    badge: "Flutter 3 · Biometria 7 Etapas · v1.0.28-qa.1",
    figmaRef: "Ecossistema GynMove Firebase gynmove-fde7e",
    summary: "Aplicativo de mobilidade urbana para passageiros com motor de cotação transparente, prova de vida biométrica automatizada em 7 etapas e acompanhamento da corrida no mapa.",
    screens: [
      { id: "gm_splash", name: "Splash & Boas-Vindas", module: "Inicialização", description: "Verificação de conectividade, inicialização de serviços de telemetria e validação de token de sessão.", tech: "Flutter · FirebaseCore · Splash" },
      { id: "gm_login", name: "Login & Cadastro Passageiro", module: "Acesso", description: "Entrada por número de telefone com SMS OTP ou login social, vinculando ao perfil usuarios/{uid}.", tech: "Flutter · FirebaseAuth · PhoneAuth" },
      { id: "gm_pvida_intro", name: "Prova de Vida - Instruções", module: "Biometria", description: "Apresentação dos requisitos de enquadramento, iluminação adequada e termo de consentimento biométrico.", tech: "Flutter · Camera · Orientação Ativa" },
      { id: "gm_pvida_exec", name: "Prova de Vida - 7 Movimentos", module: "Biometria", description: "Validação sequencial de 7 expressões faciais com cronômetro de 96s, limite de 5 minutos e feedback visual.", tech: "Flutter · Machine Learning / Heurísticas" },
      { id: "gm_mapa_home", name: "Home Mapa & Geolocalização", module: "Corrida", description: "Mapa interativo com marcação automática do ponto de embarque (GPS) e campo de busca de destino.", tech: "Flutter · Google Maps API · Geolocator" },
      { id: "gm_cotacao", name: "Seleção de Rota & Categorias", module: "Cotação", description: "Comparação de tarifas por categoria de veículo (Comum, Conforto, Elétrico) e tempo estimado de chegada (ETA).", tech: "Flutter · Google Directions · Algoritmo" },
      { id: "gm_radar", name: "Radar de Chamada de Motoristas", module: "Despacho", description: "Animação de radar buscando condutores elegíveis no raio de proximidade com timeout e cancelamento.", tech: "Flutter · CustomPainter · Firestore Stream" },
      { id: "gm_corrida_ativa", name: "Acompanhamento da Viagem", module: "Corrida em Curso", description: "Visualização do veículo em tempo real no mapa, placa, modelo, nome do motorista e botão de emergência.", tech: "Flutter · WebSocket / Firestore · Polyline" },
      { id: "gm_conclusao", name: "Avaliação & Recibo da Corrida", module: "Conclusão", description: "Classificação da viagem com 1 a 5 estrelas, envio de comentário e detalhamento da tarifa cobrada.", tech: "Flutter · RatingBar · Cloud Functions" },
      { id: "gm_carteira", name: "Carteira & Métodos de Pagamento", module: "Financeiro", description: "Gestão de saldo de créditos, cartões de crédito/débito e chave Pix cadastrada para pagamentos.", tech: "Flutter · Stripe / Pagar.me · SecureStorage" }
    ]
  },
  {
    appId: "gynmovemotorista",
    appName: "GynMove Motorista",
    badge: "Flutter · Telemetria Background · v1.0.28-qa.1",
    figmaRef: "Ecossistema GynMove Firebase gynmove-fde7e",
    summary: "Aplicativo do motorista parceiro com fila dinâmica de ofertas em tempo real, validação biométrica de segurança facial e rastreamento em segundo plano.",
    screens: [
      { id: "gmm_admissao", name: "Cadastro & Envio de Documentos", module: "Admissão", description: "Envio de foto da CNH, CRLV do veículo e antecedentes criminais para aprovação documental.", tech: "Flutter · ImagePicker · Firebase Storage" },
      { id: "gmm_pvida", name: "Prova de Vida do Condutor", module: "Segurança", description: "Validação facial obrigatória periódica antes de liberar o botão de ficar disponível para corridas.", tech: "Flutter · Camera · Biometria Facial" },
      { id: "gmm_radar_painel", name: "Painel Online / Offline", module: "Operação", description: "Alternador de disponibilidade operacional com mapa indicando pontos de maior demanda (hotspots).", tech: "Flutter · BackgroundFetch · Switch" },
      { id: "gmm_fila_oferta", name: "Card de Oferta de Corrida", module: "Fila de Chamadas", description: "Oferta dinâmica com valor líquido da corrida, distância até o passageiro, destino e contagem regressiva de aceite.", tech: "Flutter · Audio Notification · Timer" },
      { id: "gmm_navegacao_emb", name: "Navegação até o Embarque", module: "Navegação", description: "Rota traçada por GPS até o passageiro com atualização de ETA e botão 'Cheguei ao Ponto de Encontro'.", tech: "Flutter · Mapbox / Google Navigation · GPS" },
      { id: "gmm_viagem_curso", name: "Viagem com Passageiro a Bordo", module: "Corrida em Curso", description: "Acompanhamento do percurso até o destino final com envio contínuo de coordenadas de telemetria.", tech: "Flutter · Background Location · Cloud Stream" },
      { id: "gmm_extrato", name: "Extrato Diário & Produção", module: "Financeiro", description: "Resumo diário e semanal com total faturado, número de corridas, quilômetros percorridos e repasses.", tech: "Flutter · Charts · DateRangePicker" },
      { id: "gmm_suporte", name: "Central de Suporte Operacional", module: "Suporte", description: "Canal direto de suporte ao motorista parceiro para resolução de ocorrências e segurança de rota.", tech: "Flutter · Intercom / WhatsApp API" }
    ]
  },
  {
    appId: "voltfinance",
    appName: "VoltFinance",
    badge: "Flutter · Arquitetura MVC Reativa · IoT · v1.8.4",
    figmaRef: "Firebase gynmove-fde7e / Hosting volt-finance-fde7e",
    summary: "Solução de gestão financeira pessoal e empresarial em Flutter com arquitetura MVC reativa, controle de fluxo de caixa diário e módulo IoT veicular para apuração de custo por km.",
    screens: [
      { id: "vf_login", name: "Login & Seleção de Perfil", module: "Autenticação", description: "Entrada segura com suporte a biometria/PIN e seleção entre perfil Pessoal, Frotista ou Empresarial.", tech: "Flutter · LocalAuth · MVC Controller" },
      { id: "vf_dash", name: "Dashboard Financeiro Reativo", module: "Visão Geral", description: "Cards em tempo real com Saldo Calculado, Entradas do Mês, Despesas Realizadas e Projeção de Economia.", tech: "Flutter · Reactive Stream · AnimatedNumbers" },
      { id: "vf_transacao", name: "Novo Lançamento de Caixa", module: "Lançamentos", description: "Formulário rápido para inserção de receitas, despesas e transferências com anexo de nota/recibo.", tech: "Flutter · Form · ImagePicker · DatePicker" },
      { id: "vf_categorias", name: "Classificação por Categorias", module: "Análise", description: "Gráficos de pizza segmentando despesas (Combustível, Manutenção, Alimentação, Moradia, Tributos).", tech: "Flutter · FlChart · ColorPalette" },
      { id: "vf_fluxo", name: "Fluxo de Caixa Recente (5 Dias)", module: "Liquidez", description: "Linha do tempo diária exibindo a movimentação líquida recente para acompanhamento de capital de giro.", tech: "Flutter · ListView · TimelineView" },
      { id: "vf_iot_garagem", name: "Módulo IoT Automotivo", module: "Frota & Veículos", description: "Cadastro dos automóveis da frota com acompanhamento de odômetro, histórico de abastecimentos e consumo médio.", tech: "Flutter · IoT Telemetry · Form" },
      { id: "vf_custo_km", name: "Calculadora de Custo por KM", module: "Finanças Veiculares", description: "Apuração precisa de rentabilidade somando gasto com combustível, manutenção preventiva e depreciação física do bem.", tech: "Flutter · Algoritmo Matemático · KPI" },
      { id: "vf_metas", name: "Orçamento & Metas de Economia", module: "Planejamento", description: "Definição de tetos de gastos por categoria e acompanhamento do progresso das metas financeiras anuais.", tech: "Flutter · ProgressBar · LocalNotifications" }
    ]
  },
  {
    appId: "multasipva",
    appName: "Multas & IPVA Brasil",
    badge: "Flutter 3.41+ · Python 3.10+ · Dart 3.11+ · v1.5.0",
    figmaRef: "Firebase Hosting multas-ipva-brasil.web.app",
    summary: "Sistema de auditoria veicular e organização documental em Flutter/Python para consulta manual estruturada de débitos, calendários de licenciamento e dossiês de recursos de multas.",
    screens: [
      { id: "mi_splash", name: "Abertura & Inicialização", module: "Boas-Vindas", description: "Apresentação visual com carregamento dos calendários estaduais e avisos de utilidade pública.", tech: "Flutter · SharedPreferences · Theme" },
      { id: "mi_garagem", name: "Centralização de Frotas / Garagem", module: "Veículos", description: "Cadastro organizado de múltiplos veículos por Placa, Renavam, Chassi e Estado (UF).", tech: "Flutter · Form · Placa Mercosul Validator" },
      { id: "mi_painel_veiculo", name: "Painel do Veículo", module: "Auditoria", description: "Card consolidado com status do licenciamento anual, débitos identificados e histórico de consultas.", tech: "Flutter · Card · Badge Status" },
      { id: "mi_roteiro_orgaos", name: "Roteiros de Consulta Detran / Sefaz", module: "Roteiros Oficiais", description: "Guias estruturados passo a passo com links diretos para os portais oficiais dos 27 Detrans do Brasil.", tech: "Flutter · UrlLauncher · WebView" },
      { id: "mi_calendario", name: "Calendário de IPVA & Descontos", module: "Tributos", description: "Tabela dinâmica com as datas de vencimento da cota única com desconto e parcelas por final de placa.", tech: "Flutter · DataTable · CalendarView" },
      { id: "mi_infracoes", name: "Registro de Infrações & Multas", module: "Multas", description: "Listagem de autos de infração com data, órgão autuador, gravidade (Leve a Gravíssima) e pontuação.", tech: "Flutter · ExpansionTile · Badges" },
      { id: "mi_dossie", name: "Dossiê de Recurso & Análise", module: "Recursos", description: "Verificador de inconsistências formais (prazos de expedição da notificação, calibração do radar).", tech: "Flutter · Python Engine · PDF Viewer" },
      { id: "mi_prazos_linha", name: "Linha do Tempo de Prazos", module: "Acompanhamento", description: "Cronograma de prazos legais para apresentação de condutor infrator, Defesa Prévia e Recursos JARI.", tech: "Flutter · TimelineWidget · Alertas" }
    ]
  },
  {
    appId: "bichomimado",
    appName: "Bicho Mimado",
    badge: "Flutter 3.41 · Google Stitch · Turn-by-Turn · v1.23.0",
    figmaRef: "Design Google Stitch (+100 Telas) · Firebase bichomimado-a7989",
    summary: "Super app de Pet Care e mobilidade em Flutter com +100 telas desenvolvidas no Google Stitch, agendamento de clínicas, marketplace veterinário e motor nativo de TaxiDog com Google Navigation SDK.",
    screens: [
      { id: "bm_splash", name: "Splash & Identidade Pet", module: "Boas-Vindas", description: "Animação de abertura com mascote da Bicho Mimado e carregamento de credenciais locais.", tech: "Flutter · Lottie · SharedPreferences" },
      { id: "bm_onboarding", name: "Onboarding do Tutor", module: "Boas-Vindas", description: "Carrossel interativo explicando os serviços de consultas veterinárias, banho/tosa e TaxiDog.", tech: "Flutter · PageView · SmoothPageIndicator" },
      { id: "bm_login", name: "Login & Cadastro do Tutor", module: "Autenticação", description: "Acesso seguro com e-mail/senha ou autenticação biométrica do aparelho.", tech: "Flutter · FirebaseAuth · FormValidators" },
      { id: "bm_perfil_pet", name: "Prontuário & Perfil do Pet", module: "Gestão Pet", description: "Ficha com foto, nome, raça, porte, idade, histórico de vacinas e observações de saúde.", tech: "Flutter · CircleAvatar · Firestore Document" },
      { id: "bm_home", name: "Home do Tutor & Serviços", module: "Serviços", description: "Hub central de agendamento de consultas veterinárias, banho, tosa e solicitação de transporte.", tech: "Flutter · GridView · Custom Cards" },
      { id: "bm_agendamento", name: "Agendamento de Consultas & Banho", module: "Agenda", description: "Seleção de clínica veterinária parceira, profissional e escolha de horário com verificação de agenda.", tech: "Flutter · TableCalendar · Conflict Detection" },
      { id: "bm_taxidog_cotacao", name: "TaxiDog - Solicitação & Cotação", module: "Mobilidade Pet", description: "Escolha do pet a transportar, endereço de busca e destino da clínica com cálculo de cotação.", tech: "Flutter · Google Places API · Directions" },
      { id: "bm_taxidog_track", name: "TaxiDog - Navegação Turn-by-Turn", module: "Mobilidade Pet", description: "Acompanhamento do trajeto do TaxiDog em tempo real com motor nativo do Google Navigation SDK.", tech: "Flutter · Google Navigation SDK · Native Bridge" },
      { id: "bm_marketplace", name: "Marketplace de Produtos Pet", module: "E-Commerce", description: "Catálogo de rações, medicamentos, brinquedos e produtos de higiene com filtros por espécie e porte.", tech: "Flutter · SliverAppBar · GridView" },
      { id: "bm_recorrencia", name: "Reposição Automática de Ração", module: "E-Commerce", description: "Recurso de repetição inteligente de compras anteriores para reposição periódica no carrinho.", tech: "Flutter · Order History · Provider" },
      { id: "bm_checkout", name: "Carrinho & Checkout Seguro", module: "Checkout", description: "Revisão dos itens do pet, escolha de entrega domiciliar e pagamento por Cartão ou Pix.", tech: "Flutter · Pagar.me / Stripe · SecureStorage" },
      { id: "bm_fidelidade", name: "Clube de Vouchers & Fidelidade", module: "Fidelização", description: "Consulta de pontos acumulados por atendimentos e resgate de vouchers de desconto em serviços.", tech: "Flutter · Voucher Engine · Cloud Functions" }
    ]
  }
];
