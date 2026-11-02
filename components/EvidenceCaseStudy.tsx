import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECT_EVIDENCE } from '../projectEvidence';

export default function EvidenceCaseStudy({ projectId, onClose }: { projectId: string; onClose: () => void }) {
  const project = PROJECT_EVIDENCE[projectId];
  const dialog = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    close.current?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]');
        if (!controls?.length) return;
        const first = controls[0]; const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', keyboard);
    return () => { document.removeEventListener('keydown', keyboard); previous?.focus(); };
  }, [onClose]);
  if (!project) return null;
  return (
    <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="case-title" className="fixed inset-0 z-[100] bg-[#0A0A0A] overflow-y-auto text-[#EEE]" style={{ '--case-accent': project.accent } as React.CSSProperties}>
      <header className="sticky top-0 z-10 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#333] px-6 py-4 flex items-center justify-between">
        <span className="font-mono font-bold text-xl text-[var(--case-accent)]">{project.name}</span>
        <button ref={close} onClick={onClose} aria-label={`Fechar case ${project.name}`} className="p-3 rounded-full border border-[#444] hover:bg-[#222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><X size={24} /></button>
      </header>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <span className="inline-block text-xs font-mono uppercase tracking-wider border border-[#444] rounded-full px-4 py-2 text-[var(--case-accent)]">{project.status}</span>
        <h1 id="case-title" className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mt-8 mb-6">{project.headline}</h1>
        <p className="text-lg text-[#AAA] max-w-3xl mb-12">{project.audience}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {project.benefits.map(benefit => <article key={benefit.title} className="bg-[#111] p-8 rounded-2xl border border-[#333]">
            <CheckCircle2 className="text-[var(--case-accent)] mb-5" size={28} />
            <h2 className="text-xl font-bold mb-3">{benefit.title}</h2>
            <p className="text-[#AAA] leading-relaxed">{benefit.detail}</p>
          </article>)}
        </div>
        <aside className="mt-10 border-l-4 border-[var(--case-accent)] bg-[#111] p-6 rounded-r-xl">
          <h2 className="text-lg font-bold mb-3">Escopo e disponibilidade</h2>
          <p className="text-[#AAA] leading-relaxed">{project.limits}</p>
          <p className="text-sm text-[#888] mt-4">Resumo baseado na leitura de código. Não constitui teste do serviço em produção nem comprovação de resultados comerciais.</p>
        </aside>
        <button onClick={onClose} className="mt-10 flex items-center gap-3 text-[var(--case-accent)] font-bold">Voltar aos projetos <ArrowRight size={18} /></button>
      </div>
    </div>
  );
}
