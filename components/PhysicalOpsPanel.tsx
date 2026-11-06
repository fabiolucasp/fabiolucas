import React, { useState } from 'react';
import { 
  Truck, Calendar, AlertTriangle, CheckCircle, Send, DollarSign, 
  Package, TrendingDown, TrendingUp, Sparkles, Plus, Clock, 
  MapPin, Check, RefreshCw, ShoppingBag, ArrowRight, MessageSquare
} from 'lucide-react';
import { 
  PhysicalOrder, 
  DayDemandAnalysis, 
  ProductionInventoryItem,
  INITIAL_PHYSICAL_ORDERS,
  WEEKLY_DEMAND_ANALYSIS,
  INITIAL_INVENTORY_ITEMS,
  getStoredPhysicalOrders,
  saveStoredPhysicalOrders,
  getStoredInventory,
  saveStoredInventory
} from '../services/physicalOpsService';

interface PhysicalOpsPanelProps {
  userRole?: 'admin' | 'client';
}

export const PhysicalOpsPanel: React.FC<PhysicalOpsPanelProps> = ({ userRole = 'admin' }) => {
  const isAdmin = userRole === 'admin';
  const [orders, setOrders] = useState<PhysicalOrder[]>(getStoredPhysicalOrders);
  const [demandAnalysis, setDemandAnalysis] = useState<DayDemandAnalysis[]>(WEEKLY_DEMAND_ANALYSIS);
  const [inventory, setInventory] = useState<ProductionInventoryItem[]>(getStoredInventory);

  // Filter state
  const [orderFilter, setOrderFilter] = useState<'Todos' | 'Isolados' | 'Remanejados'>('Todos');

  // Modal for new physical order
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState('');
  const [newProduct, setNewProduct] = useState('Caixa Degustação Doces Finos (25 un)');
  const [newVal, setNewVal] = useState('75.00');
  const [newDay, setNewDay] = useState<'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo'>('Terça');

  // WhatsApp Alert Simulation
  const [activeWhatsappOrder, setActiveWhatsappOrder] = useState<PhysicalOrder | null>(null);

  // Trigger automated rescheduling
  const handleConfirmReschedule = (orderId: string) => {
    const updated = orders.map(ord => {
      if (ord.id === orderId) {
        return {
          ...ord,
          scheduledDay: ord.suggestedDay as any,
          status: 'Remanejado com Sucesso' as const,
          isIsolatedDemand: false,
          dispatchCost: 15.00, // Diluído na rota agrupada!
          netProfit: ord.orderValue - 25.00, // Lucro positivo restaurado!
        };
      }
      return ord;
    });

    setOrders(updated);
    saveStoredPhysicalOrders(updated);

    // Update weekly analysis
    setDemandAnalysis(prev => prev.map(d => {
      if (d.day === 'Terça' || d.day === 'Segunda') {
        return { ...d, totalOrders: Math.max(0, d.totalOrders - 1) };
      }
      if (d.day === 'Sexta') {
        return { ...d, totalOrders: d.totalOrders + 1 };
      }
      return d;
    }));
  };

  const handleAddNewOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer.trim()) return;

    const isTuesdayOrMonday = newDay === 'Segunda' || newDay === 'Terça';
    const newOrd: PhysicalOrder = {
      id: `ord-${Date.now()}`,
      customerName: newCustomer.trim(),
      customerPhone: '5562981358986',
      product: newProduct,
      quantity: 1,
      orderValue: Number(newVal) || 60,
      scheduledDay: newDay,
      scheduledDate: '2026-11-17',
      status: isTuesdayOrMonday ? 'Remanejamento Sugerido' : 'Pendente',
      isIsolatedDemand: isTuesdayOrMonday,
      dispatchCost: isTuesdayOrMonday ? 45.00 : 15.00,
      netProfit: isTuesdayOrMonday ? (Number(newVal) - 65.00) : (Number(newVal) - 25.00),
      suggestedDay: 'Sexta',
      suggestedIncentive: 'Frete Grátis + Brinde Exclusivo',
      whatsappMessage: `Olá ${newCustomer}! Notamos que seu pedido está agendado para ${newDay}. Se você optar por receber na Sexta-feira junto à nossa rota expressa, oferecemos Frete Grátis + Brinde! Podemos confirmar?`
    };

    const updated = [newOrd, ...orders];
    setOrders(updated);
    saveStoredPhysicalOrders(updated);
    setShowNewOrderModal(false);
    setNewCustomer('');
  };

  const filteredOrders = orders.filter(o => {
    if (orderFilter === 'Isolados') return o.isIsolatedDemand;
    if (orderFilter === 'Remanejados') return o.status === 'Remanejado com Sucesso';
    return true;
  });

  const totalSavedCost = orders
    .filter(o => o.status === 'Remanejado com Sucesso')
    .reduce((acc, curr) => acc + 30.00, 0); // ~R$ 30 por remanejamento evitado

  const isolatedCount = orders.filter(o => o.isIsolatedDemand).length;

  return (
    <div className="space-y-6 font-sans">
      {/* Top Banner Card */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <Truck size={26} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold font-mono text-white tracking-wide">
                Gestão Operacional, Demanda & Remanejamento Inteligente
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
                OTIMIZAÇÃO DE CUSTOS
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              Evite deslocamentos e custos fixos em dias sem demanda mínima através de sugestões automatizadas de remanejamento
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowNewOrderModal(true)}
          className="px-3.5 py-2 bg-[#44D62C] text-black font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 hover:bg-[#52f036] transition-all shadow-md shadow-[#44D62C]/20 shrink-0"
        >
          <Plus size={14} /> Novo Pedido de Operação
        </button>
      </div>

      {/* Invisible Cost Problem / Diagnosis Alert */}
      {isolatedCount > 0 && (
        <div className="bg-gradient-to-r from-red-950/40 via-amber-950/30 to-[#0E131F] border border-amber-500/40 rounded-xl p-5 relative overflow-hidden">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
              <AlertTriangle size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-mono font-bold text-white text-sm">
                Alerta de Custo Invisível Detectado: {isolatedCount} pedido(s) isolado(s) em dia de baixa demanda
              </h3>
              <p className="text-xs text-gray-300 font-mono leading-relaxed">
                Deslocar veículo, gastar combustível e abrir operação para atender apenas 1 pedido isolado gera <strong>prejuízo líquido</strong>. O sistema gerou sugestões automáticas para propor ao cliente a antecipação ou remanejamento para a rota agrupada com benefício (frete grátis/brinde).
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs font-mono">
                <span className="text-amber-400 font-bold">
                  Economia potencial imediata: R$ {(isolatedCount * 35).toFixed(2)}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-[#44D62C]">
                  Economia já obtida este mês: R$ {totalSavedCost.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Weekly Demand Matrix (Segunda a Domingo) */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1E2638]">
          <div>
            <h3 className="font-mono font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
              <Calendar size={16} className="text-[#44D62C]" />
              Matriz Semanal de Demanda vs. Custo Operacional
            </h3>
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              Ponto de equilíbrio entre pedidos concentrados e custos de operação por dia da semana
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {demandAnalysis.map((item) => (
            <div
              key={item.day}
              className={`rounded-xl p-3.5 border font-mono text-xs flex flex-col justify-between transition-all ${
                item.isDeficitDay
                  ? 'bg-red-950/20 border-red-500/40 text-red-200'
                  : item.totalOrders > 5
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                    : 'bg-[#0A0D14] border-[#1E2638] text-gray-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <strong className="text-sm font-bold text-white">{item.day}</strong>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    item.isDeficitDay 
                      ? 'bg-red-500/20 text-red-400' 
                      : item.totalOrders > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#161D2B] text-gray-400'
                  }`}>
                    {item.totalOrders} {item.totalOrders === 1 ? 'ped.' : 'peds.'}
                  </span>
                </div>

                <div className="space-y-1 text-[11px] mb-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Receita:</span>
                    <span className="text-white">R$ {item.grossRevenue.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Custo Oper.:</span>
                    <span className="text-red-400">R$ {(item.fixedOperatingCost + item.variableDispatchCost).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#1E2638]">
                    <span>Resultado:</span>
                    <strong className={item.netProfit < 0 ? 'text-red-400' : 'text-[#44D62C]'}>
                      R$ {item.netProfit.toFixed(0)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-400 line-clamp-3 pt-2 border-t border-[#161D2B]">
                {item.recommendation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orders List & Rescheduling Engine */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-[#1E2638]">
          <div>
            <h3 className="font-mono font-bold text-white text-base flex items-center gap-2">
              <Package size={18} className="text-[#44D62C]" />
              Fila de Pedidos & Remanejamento Automático de Entregas
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Sugestões automáticas para reagrupar rotas e transformar prejuízos operacionais em lucro líquido
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#0A0D14] p-1 rounded-lg border border-[#1E2638] text-xs font-mono">
            {(['Todos', 'Isolados', 'Remanejados'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setOrderFilter(tab)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  orderFilter === tab 
                    ? 'bg-[#44D62C] text-black font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {filteredOrders.map(order => (
            <div 
              key={order.id}
              className={`p-4 rounded-xl border transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${
                order.isIsolatedDemand 
                  ? 'bg-red-950/10 border-red-500/40 hover:border-red-500' 
                  : order.status === 'Remanejado com Sucesso'
                    ? 'bg-emerald-950/10 border-emerald-500/40'
                    : 'bg-[#0A0D14] border-[#1E2638] hover:border-[#44D62C]/40'
              }`}
            >
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-white">{order.customerName}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    order.isIsolatedDemand 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : order.status === 'Remanejado com Sucesso'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-[#161D2B] text-gray-300'
                  }`}>
                    {order.isIsolatedDemand ? '⚠️ Pedido Solitário / Prejuízo Operacional' : order.status}
                  </span>
                  <span className="text-gray-500 text-[11px] flex items-center gap-1">
                    <Clock size={12} /> Agendado: <strong className="text-white">{order.scheduledDay} ({order.scheduledDate})</strong>
                  </span>
                </div>

                <p className="text-gray-300 text-xs">
                  Item: <strong className="text-white">{order.product}</strong> ({order.quantity} un) • Valor: <strong className="text-white">R$ {order.orderValue.toFixed(2)}</strong>
                </p>

                {order.isIsolatedDemand ? (
                  <div className="text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 p-2 rounded-lg">
                    ⚡ <strong>Sugestão da IA:</strong> Remanejar para <strong>{order.suggestedDay}</strong> com incentivo: <em>"{order.suggestedIncentive}"</em>.
                  </div>
                ) : (
                  <p className="text-gray-400 text-[11px]">
                    Rota consolidada • Lucro Líquido Estimado: <strong className="text-[#44D62C]">R$ {order.netProfit.toFixed(2)}</strong>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                {order.isIsolatedDemand ? (
                  <>
                    <button
                      onClick={() => setActiveWhatsappOrder(order)}
                      className="px-3 py-2 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 rounded-lg flex items-center gap-1.5 transition-all text-xs font-bold"
                    >
                      <Send size={13} /> Disparar Proposta (WhatsApp)
                    </button>

                    <button
                      onClick={() => handleConfirmReschedule(order.id)}
                      className="px-3 py-2 bg-[#44D62C] hover:bg-[#52f036] text-black font-bold rounded-lg flex items-center gap-1.5 transition-all text-xs shadow-md shadow-[#44D62C]/20"
                    >
                      <Check size={14} /> Confirmar Remanejamento ({order.suggestedDay})
                    </button>
                  </>
                ) : (
                  <span className="px-3 py-1.5 bg-[#161D2B] text-gray-400 rounded-lg text-xs flex items-center gap-1">
                    <CheckCircle size={13} className="text-[#44D62C]" /> Rota Equilibrada
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Inventory & Batch Equilibrium */}
      <div className="bg-[#0E131F] border border-[#1E2638] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1E2638]">
          <div>
            <h3 className="font-mono font-bold text-white text-base flex items-center gap-2">
              <ShoppingBag size={18} className="text-purple-400" />
              Controle de Estoque & Ponto de Equilíbrio de Lotes de Produção
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Produzir sob demanda em lotes calculados para diluição de custos de energia e mão de obra
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {inventory.map(item => (
            <div key={item.id} className="bg-[#0A0D14] border border-[#1E2638] rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#161D2B] text-gray-400 uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-white text-sm mt-1">{item.name}</h4>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    item.status === 'Estoque Crítico' 
                      ? 'bg-red-500/10 text-red-400 border border-red-500/30' 
                      : item.status === 'Produção Recomendada'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-[#121826] p-2.5 rounded-lg border border-[#1E2638] my-3 text-[11px]">
                  <div>
                    <span className="text-gray-500 block">Estoque Atual:</span>
                    <strong className="text-white">{item.currentStock} {item.unit}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Estoque de Segurança:</span>
                    <strong className="text-gray-300">{item.minSafeStock} {item.unit}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Tamanho do Lote:</span>
                    <strong className="text-purple-400">{item.batchSize} {item.unit}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Custo Unitário no Lote:</span>
                    <strong className="text-[#44D62C]">R$ {item.unitCost.toFixed(2)}</strong>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-gray-400 pt-2 border-t border-[#1E2638] flex items-center justify-between">
                <span>Custo do Lote: R$ {item.batchCost.toFixed(2)}</span>
                {item.salePrice > 0 && (
                  <span className="text-[#44D62C] font-bold">Preço Venda: R$ {item.salePrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHATSAPP PROPOSAL SIMULATION MODAL */}
      {activeWhatsappOrder && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-emerald-500/40 rounded-2xl max-w-md w-full p-6 text-xs font-mono shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E2638]">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Send size={16} className="text-emerald-400" />
                Mensagem Automática para o Cliente
              </h3>
              <button onClick={() => setActiveWhatsappOrder(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            <div className="p-3 bg-[#0A0D14] border border-[#1E2638] rounded-xl mb-4 text-gray-200 leading-relaxed">
              <span className="text-emerald-400 block mb-1 font-bold">Destinatário: {activeWhatsappOrder.customerName} ({activeWhatsappOrder.customerPhone})</span>
              <p className="p-2.5 bg-[#121826] rounded-lg border border-[#1E2638] text-gray-300 whitespace-pre-wrap">
                {activeWhatsappOrder.whatsappMessage}
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#1E2638]">
              <button
                onClick={() => setActiveWhatsappOrder(null)}
                className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
              >
                Cancelar
              </button>
              <a
                href={`https://wa.me/${activeWhatsappOrder.customerPhone}?text=${encodeURIComponent(activeWhatsappOrder.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleConfirmReschedule(activeWhatsappOrder.id);
                  setActiveWhatsappOrder(null);
                }}
                className="px-4 py-2 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 flex items-center gap-1.5"
              >
                <Send size={13} /> Abrir WhatsApp & Confirmar
              </a>
            </div>
          </div>
        </div>
      )}

      {/* NEW PHYSICAL ORDER MODAL */}
      {showNewOrderModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E131F] border border-[#1E2638] rounded-2xl max-w-md w-full p-6 text-xs font-mono shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Plus size={16} className="text-[#44D62C]" />
              Cadastrar Pedido na Operação Física
            </h3>
            <p className="text-gray-400 mb-4">
              Registre a demanda para cálculo de viabilidade e remanejamento automático:
            </p>

            <form onSubmit={handleAddNewOrder} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">NOME DO CLIENTE</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silveira"
                  value={newCustomer}
                  onChange={(e) => setNewCustomer(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">PRODUTO / ITEM</label>
                <input
                  type="text"
                  required
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
                  className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">VALOR DO PEDIDO (R$)</label>
                  <input
                    type="number"
                    value={newVal}
                    onChange={(e) => setNewVal(e.target.value)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">DIA AGENDADO</label>
                  <select
                    value={newDay}
                    onChange={(e) => setNewDay(e.target.value as any)}
                    className="w-full bg-[#0A0D14] border border-[#1E2638] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#44D62C]"
                  >
                    {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#1E2638]">
                <button
                  type="button"
                  onClick={() => setShowNewOrderModal(false)}
                  className="px-4 py-2 bg-[#161D2B] text-gray-300 rounded-lg hover:bg-[#1E2638]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-[#52f036]"
                >
                  Cadastrar Pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhysicalOpsPanel;
