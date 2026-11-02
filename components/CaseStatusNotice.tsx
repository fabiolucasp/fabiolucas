import React from 'react';

export default function CaseStatusNotice({ name }: { name: string }) {
  return <aside className="mb-8 rounded-xl border border-[#555] bg-black/70 px-6 py-5 text-white">
    <p className="font-mono text-sm font-bold mb-2">{name} · Apresentação conceitual</p>
    <p className="text-sm text-gray-300 leading-relaxed">O material abaixo preserva a proposta visual e comercial do projeto. Recursos, números e integrações ilustrados ainda não foram verificados no código e não representam disponibilidade de um serviço ativo. Nomes, saldos e telas são exemplos visuais, não registros de clientes.</p>
    {name === 'AutoPartsGuide' && <p className="text-sm text-gray-300 mt-2">O código-fonte não estava disponível nesta revisão.</p>}
  </aside>;
}
