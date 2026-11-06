export interface PhysicalOrder {
  id: string;
  customerName: string;
  customerPhone: string;
  product: string;
  quantity: number;
  orderValue: number;
  scheduledDay: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo';
  scheduledDate: string;
  status: 'Pendente' | 'Remanejamento Sugerido' | 'Remanejado com Sucesso' | 'Entregue';
  isIsolatedDemand: boolean; // Pedido solitário em dia sem rota viável
  dispatchCost: number; // Custo de deslocamento / combustível / operação do dia
  netProfit: number; // Lucro líquido após custo operacional (pode ser negativo em pedidos isolados!)
  suggestedDay: 'Quinta' | 'Sexta' | 'Sábado';
  suggestedIncentive: string;
  whatsappMessage: string;
}

export interface DayDemandAnalysis {
  day: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo';
  totalOrders: number;
  grossRevenue: number;
  fixedOperatingCost: number; // Custo do ponto físico, energia e equipe
  variableDispatchCost: number; // Custo de deslocamento
  netProfit: number;
  isDeficitDay: boolean; // Dia com prejuízo por falta de demanda crítica
  recommendation: string;
}

export interface ProductionInventoryItem {
  id: string;
  name: string;
  category: 'Insumo' | 'Produto Acabado';
  currentStock: number;
  minSafeStock: number;
  unit: string;
  batchSize: number; // Tamanho ideal do lote para diluir custos fixos
  batchCost: number;
  unitCost: number;
  salePrice: number;
  status: 'Estoque Adequado' | 'Produção Recomendada' | 'Estoque Crítico';
}

export const INITIAL_PHYSICAL_ORDERS: PhysicalOrder[] = [
  {
    id: 'ord-101',
    customerName: 'Mariana Silveira',
    customerPhone: '5562981358986',
    product: 'Caixa Degustação Doces Finos (25 un)',
    quantity: 1,
    orderValue: 65.00,
    scheduledDay: 'Terça',
    scheduledDate: '2026-11-10',
    status: 'Remanejamento Sugerido',
    isIsolatedDemand: true,
    dispatchCost: 45.00,
    netProfit: -12.50, // Prejuízo invisível pelo deslocamento isolado!
    suggestedDay: 'Sexta',
    suggestedIncentive: 'Frete 100% Grátis + 4 Brigadeiros Gourmet de Brinde',
    whatsappMessage: 'Olá Mariana! Tudo bem? Notamos que sua entrega está agendada para terça-feira. Como nossa rota expressa com produção fresquinha sai na sexta-feira, gostaríamos de te oferecer Frete Grátis + uma caixa com 4 brigadeiros gourmet de cortesia para entregar na sexta! Podemos confirmar?',
  },
  {
    id: 'ord-102',
    customerName: 'Carlos Eduardo Mendes',
    customerPhone: '5562981358986',
    product: 'Kit Festa Infantil Brigadeiros & Trufas (100 un)',
    quantity: 2,
    orderValue: 320.00,
    scheduledDay: 'Sexta',
    scheduledDate: '2026-11-13',
    status: 'Pendente',
    isIsolatedDemand: false,
    dispatchCost: 15.00,
    netProfit: 185.00,
    suggestedDay: 'Sexta',
    suggestedIncentive: 'Já agrupado na rota de alta demanda',
    whatsappMessage: 'Seu pedido está agendado e confirmado para a rota de sexta-feira!',
  },
  {
    id: 'ord-103',
    customerName: 'Fernanda Rocha',
    customerPhone: '5562981358986',
    product: 'Torta de Nozes & Chocolate Belga',
    quantity: 1,
    orderValue: 140.00,
    scheduledDay: 'Sexta',
    scheduledDate: '2026-11-13',
    status: 'Pendente',
    isIsolatedDemand: false,
    dispatchCost: 15.00,
    netProfit: 78.00,
    suggestedDay: 'Sexta',
    suggestedIncentive: 'Rota agrupada',
    whatsappMessage: 'Pedido em produção para entrega na sexta-feira.',
  },
  {
    id: 'ord-104',
    customerName: 'Roberto Alencar (AutoPeças)',
    customerPhone: '5562981358986',
    product: 'Amortecedor Dianteiro Cofap + Pastilhas',
    quantity: 1,
    orderValue: 480.00,
    scheduledDay: 'Sábado',
    scheduledDate: '2026-11-14',
    status: 'Pendente',
    isIsolatedDemand: false,
    dispatchCost: 20.00,
    netProfit: 140.00,
    suggestedDay: 'Sábado',
    suggestedIncentive: 'Rota concentrada de oficinas',
    whatsappMessage: 'Separado para entrega no sábado pela manhã.',
  },
  {
    id: 'ord-105',
    customerName: 'Juliana Castro',
    customerPhone: '5562981358986',
    product: 'Lembrancinhas Maternidade Doces Finos (40 un)',
    quantity: 1,
    orderValue: 95.00,
    scheduledDay: 'Segunda',
    scheduledDate: '2026-11-09',
    status: 'Remanejamento Sugerido',
    isIsolatedDemand: true,
    dispatchCost: 50.00,
    netProfit: -8.00,
    suggestedDay: 'Quinta',
    suggestedIncentive: 'Frete Grátis + 10% de Cashback no Pix',
    whatsappMessage: 'Olá Juliana! Para garantir a entrega no melhor horário e com cashback exclusivo de 10%, podemos remanejar sua entrega para quinta-feira junto ao lote especial?',
  },
];

export const WEEKLY_DEMAND_ANALYSIS: DayDemandAnalysis[] = [
  {
    day: 'Segunda',
    totalOrders: 1,
    grossRevenue: 95.00,
    fixedOperatingCost: 80.00,
    variableDispatchCost: 50.00,
    netProfit: -35.00,
    isDeficitDay: true,
    recommendation: 'Custo invisível crítico: abrir o ateliê/loja e deslocar para 1 pedido gera prejuízo. Remanejar pedido para quinta-feira.',
  },
  {
    day: 'Terça',
    totalOrders: 1,
    grossRevenue: 65.00,
    fixedOperatingCost: 80.00,
    variableDispatchCost: 45.00,
    netProfit: -60.00,
    isDeficitDay: true,
    recommendation: 'Prejuízo operacional evidente. Sugerir remanejamento automático com incentivo de frete grátis para sexta-feira.',
  },
  {
    day: 'Quarta',
    totalOrders: 0,
    grossRevenue: 0.00,
    fixedOperatingCost: 0.00,
    variableDispatchCost: 0.00,
    netProfit: 0.00,
    isDeficitDay: false,
    recommendation: 'Dia de produção fechada e preparação de insumos. Sem custos de deslocamento.',
  },
  {
    day: 'Quinta',
    totalOrders: 8,
    grossRevenue: 1420.00,
    fixedOperatingCost: 120.00,
    variableDispatchCost: 90.00,
    netProfit: 780.00,
    isDeficitDay: false,
    recommendation: 'Dia altamente rentável: rota agrupada em 8 clientes no mesmo raio geográfico.',
  },
  {
    day: 'Sexta',
    totalOrders: 14,
    grossRevenue: 2850.00,
    fixedOperatingCost: 150.00,
    variableDispatchCost: 130.00,
    netProfit: 1680.00,
    isDeficitDay: false,
    recommendation: 'Pico de demanda semanal: ideal para absorver entregas remanejadas dos dias ociosos.',
  },
  {
    day: 'Sábado',
    totalOrders: 18,
    grossRevenue: 3450.00,
    fixedOperatingCost: 160.00,
    variableDispatchCost: 150.00,
    netProfit: 2150.00,
    isDeficitDay: false,
    recommendation: 'Operação plena de alta rentabilidade: pedidos corporativos e eventos de fim de semana.',
  },
  {
    day: 'Domingo',
    totalOrders: 0,
    grossRevenue: 0.00,
    fixedOperatingCost: 0.00,
    variableDispatchCost: 0.00,
    netProfit: 0.00,
    isDeficitDay: false,
    recommendation: 'Folga da equipe e economia de custos fixos.',
  },
];

export const INITIAL_INVENTORY_ITEMS: ProductionInventoryItem[] = [
  {
    id: 'inv-1',
    name: 'Leite Condensado Moça Especial (Lata 395g)',
    category: 'Insumo',
    currentStock: 48,
    minSafeStock: 24,
    unit: 'latas',
    batchSize: 20,
    batchCost: 160.00,
    unitCost: 8.00,
    salePrice: 0.00,
    status: 'Estoque Adequado',
  },
  {
    id: 'inv-2',
    name: 'Chocolate Belga Callebaut 70% (Barra 2.5kg)',
    category: 'Insumo',
    currentStock: 2,
    minSafeStock: 4,
    unit: 'barras',
    batchSize: 5,
    batchCost: 650.00,
    unitCost: 130.00,
    salePrice: 0.00,
    status: 'Estoque Crítico',
  },
  {
    id: 'inv-3',
    name: 'Cento de Brigadeiros Tradicionais Gourmet',
    category: 'Produto Acabado',
    currentStock: 150,
    minSafeStock: 200,
    unit: 'unidades',
    batchSize: 100,
    batchCost: 45.00,
    unitCost: 0.45,
    salePrice: 1.60,
    status: 'Produção Recomendada',
  },
  {
    id: 'inv-4',
    name: 'Caixas de Embalagem Premium com Visor Acetato',
    category: 'Insumo',
    currentStock: 120,
    minSafeStock: 50,
    unit: 'unidades',
    batchSize: 100,
    batchCost: 180.00,
    unitCost: 1.80,
    salePrice: 0.00,
    status: 'Estoque Adequado',
  },
];

const STORAGE_ORDERS_KEY = 'founderos_physical_orders';
const STORAGE_INVENTORY_KEY = 'founderos_inventory_data';

export function getStoredPhysicalOrders(): PhysicalOrder[] {
  try {
    const raw = localStorage.getItem(STORAGE_ORDERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return INITIAL_PHYSICAL_ORDERS;
}

export function saveStoredPhysicalOrders(orders: PhysicalOrder[]): void {
  try {
    localStorage.setItem(STORAGE_ORDERS_KEY, JSON.stringify(orders));
  } catch {}
}

export function getStoredInventory(): ProductionInventoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_INVENTORY_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return INITIAL_INVENTORY_ITEMS;
}

export function saveStoredInventory(items: ProductionInventoryItem[]): void {
  try {
    localStorage.setItem(STORAGE_INVENTORY_KEY, JSON.stringify(items));
  } catch {}
}
