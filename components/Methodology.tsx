import React from 'react';
import { Lightbulb, List, Share2, Layout, Eye, Code2 } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    { id: 1, title: 'Estratégia', icon: <Lightbulb size={32} strokeWidth={1.5} /> },
    { id: 2, title: 'Escopo', icon: <List size={32} strokeWidth={1.5} /> },
    { id: 3, title: 'Estrutura', icon: <Share2 size={32} strokeWidth={1.5} /> }, // Share2 looks like a structure/node map
    { id: 4, title: 'Esqueleto', icon: <Layout size={32} strokeWidth={1.5} /> },
    { id: 5, title: 'Interface', icon: <Eye size={32} strokeWidth={1.5} /> },
    { id: 6, title: 'Desenvolvimento', icon: <Code2 size={32} strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#333] relative overflow-hidden">
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
             <span className="text-[#44D62C] font-mono tracking-wider uppercase text-sm border border-[#44D62C]/30 px-3 py-1 rounded-full bg-[#44D62C]/5">Workflow</span>
             <h2 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] mt-6 font-mono">Minha Metodologia</h2>
             <p className="text-[#888] mt-4 font-sans max-w-2xl mx-auto">Do conceito à entrega, um processo estruturado para garantir qualidade e eficiência.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-[3rem] left-0 w-full h-[2px] bg-[#333] z-0">
                 {/* Start Diamond */}
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#333] rotate-45"></div>
                 {/* End Arrow */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#333]"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-default">
                        {/* Circle Icon */}
                        <div className="w-24 h-24 rounded-full border-2 border-[#EEEEEE] bg-[#0A0A0A] flex items-center justify-center text-[#EEEEEE] group-hover:border-[#44D62C] group-hover:text-[#44D62C] transition-all duration-500 shadow-[0_0_0_8px_rgba(10,10,10,1)] z-10 relative">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                        </div>
                        
                        {/* Connector Line (Mobile/Tablet vertical) - Visual only */}
                        <div className="lg:hidden h-8 w-[2px] bg-[#333] my-2"></div>

                        {/* Text */}
                        <h3 className="text-[#EEEEEE] font-bold font-mono text-lg text-center mt-6 group-hover:text-[#44D62C] transition-colors uppercase tracking-tight">
                            {step.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;