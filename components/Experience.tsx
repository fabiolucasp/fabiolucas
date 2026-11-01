import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-12 text-center font-mono">Trajetória Profissional</h2>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#333] -translate-x-1/2 hidden md:block"></div>

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row gap-8 relative items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Dot on Timeline */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#44D62C] rounded-full -translate-x-1/2 hidden md:block border-4 border-[#0A0A0A] shadow-[0_0_10px_rgba(68,214,44,0.5)] z-10"></div>

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className={`bg-[#000000] p-6 rounded-xl border border-[#333] hover:border-[#44D62C] transition-colors group ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={16} className="text-[#44D62C]" />
                        <span className="text-sm text-[#888] font-mono">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#EEEEEE] group-hover:text-[#44D62C] transition-colors font-mono">{exp.company}</h3>
                    <h4 className="text-[#CCCCCC] mb-4 font-medium font-mono">{exp.role}</h4>
                    <p className="text-[#999] text-sm mb-4 leading-relaxed font-sans">
                        {exp.description}
                    </p>
                    {exp.projects && (
                        <div className="space-y-2 mt-4 pt-4 border-t border-[#333]">
                            {exp.projects.map((proj, idx) => (
                                <div key={idx} className="text-sm font-sans">
                                    <span className="text-[#44D62C] font-bold font-mono">&gt; {proj.name}: </span>
                                    <span className="text-[#AAAAAA]">{proj.details}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;