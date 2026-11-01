import React from 'react';
import { Palette, Apple, Monitor, LayoutGrid } from 'lucide-react'; // Changed Windows to Monitor

const DesignPhilosophy: React.FC = () => {
  const designPrinciples = [
    { name: "Material Design", icon: <Palette size={40} />, description: "Interface moderna e intuitiva do Google, focada em profundidade e movimento." },
    { name: "Cupertino Design", icon: <Apple size={40} />, description: "Estética refinada e simplicidade, seguindo as diretrizes de experiência do usuário da Apple." },
    { name: "Fluent Design", icon: <Monitor size={40} />, description: "Design adaptativo da Microsoft, combinando luz, profundidade, movimento e material para experiências imersivas." }, // Changed Windows to Monitor
    { name: "Design System", icon: <LayoutGrid size={40} />, description: "Componentes reutilizáveis e diretrizes de design consistentes para escalabilidade e manutenção." },
  ];

  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#44D62C] font-mono tracking-wider uppercase text-sm border border-[#44D62C]/30 px-3 py-1 rounded-full bg-[#44D62C]/5">Design</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mt-2 font-mono">Minha Filosofia de Design</h2>
          <p className="text-[#AAAAAA] max-w-2xl mx-auto font-sans">
            Construo interfaces não apenas funcionais, mas visualmente coesas e agradáveis, dominando os principais ecossistemas de design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designPrinciples.map((principle, index) => (
            <div 
              key={index} 
              className="bg-[#0A0A0A] p-8 rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-300 group text-center"
            >
              <div className="text-[#44D62C] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-[#EEEEEE] mb-2 font-mono">{principle.name}</h3>
              <p className="text-[#AAAAAA] text-sm font-sans">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;