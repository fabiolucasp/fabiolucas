import React from 'react';
import { TECHNICAL_STUDIES } from '../projectEvidence';

export default function TechnicalStudies() {
  return <div className="mt-24 border-t border-[#333] pt-12">
    <span className="text-[#44D62C] text-sm uppercase tracking-wider font-mono">Laboratório de desenvolvimento</span>
    <h2 className="text-3xl font-bold mt-3 mb-4">Estudos técnicos e protótipos</h2>
    <p className="text-[#AAA] max-w-3xl mb-8">Experimentos que exercitam fundamentos de desenvolvimento. Separados dos cases de produto para deixar claro o objetivo e a maturidade de cada trabalho.</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TECHNICAL_STUDIES.map(study => <article key={study.name} className="bg-[#0A0A0A] border border-[#333] rounded-xl p-6">
        <span className="text-xs text-[#44D62C] font-mono">{study.tech}</span>
        <h3 className="font-bold text-lg break-words mt-3 mb-3">{study.name}</h3>
        <p className="text-[#CCC] text-sm leading-relaxed">{study.description}</p>
        <p className="text-[#999] text-xs leading-relaxed mt-4 border-t border-[#333] pt-4">{study.limit}</p>
      </article>)}
    </div>
  </div>;
}
