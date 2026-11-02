import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

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

        {/* Academic Education Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="text-[#44D62C]" size={28} />
            <h3 className="text-2xl md:text-3xl font-bold text-[#EEEEEE] font-mono text-center">
              Formação Acadêmica & Pesquisa
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#000000] p-6 rounded-xl border border-[#333] hover:border-[#44D62C] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-[#44D62C]" />
                    <span className="text-sm text-[#888] font-mono">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#EEEEEE] group-hover:text-[#44D62C] transition-colors font-mono">
                    {edu.degree}
                  </h4>
                  <p className="text-[#CCCCCC] text-sm font-mono mb-3">{edu.institution}</p>
                  <p className="text-[#999] text-sm mb-4 leading-relaxed font-sans">
                    {edu.description}
                  </p>
                </div>
                {edu.highlights && (
                  <div className="space-y-1.5 pt-3 border-t border-[#333]">
                    {edu.highlights.map((item, idx) => (
                      <div key={idx} className="text-xs text-[#AAAAAA] flex items-start gap-2">
                        <span className="text-[#44D62C] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;