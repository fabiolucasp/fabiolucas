import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ConperCaseStudy from './ConperCaseStudy';
import AutoPartsCaseStudy from './AutoPartsCaseStudy';
import Gy44CaseStudy from './Gy44CaseStudy';
import PineapplePayCaseStudy from './PineapplePayCaseStudy';
import GynMoveCaseStudy from './GynMoveCaseStudy';
import SmartDropCaseStudy from './SmartDropCaseStudy';
import BichoMimadoCaseStudy from './BichoMimadoCaseStudy';
import CfcFocusCaseStudy from './CfcFocusCaseStudy';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Gerenciamento robusto do scroll do body
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function: garante que o scroll volte ao normal se o componente desmontar
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleOpenProject = (id: string) => {
    if (['conper', 'autoparts', '44gyn', 'pineapple', 'gynmove', 'smartdrop', 'bicho-mimado', 'cfc-focus'].includes(id)) {
      setSelectedProject(id);
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-l-4 border-[#44D62C] pl-6">
            <span className="text-[#44D62C] font-mono tracking-wider uppercase text-sm">Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mt-2 font-mono">Projetos em Destaque</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#333] hover:border-[#44D62C] transition-all duration-300 hover:shadow-[0_0_15px_rgba(68,214,44,0.1)] flex flex-col cursor-pointer"
              onClick={() => handleOpenProject(project.id)}
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20 bg-[#000]/80 backdrop-blur-sm px-3 py-1 rounded border border-[#333] text-xs font-bold text-[#44D62C] font-mono">
                  {project.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#EEEEEE] group-hover:text-[#44D62C] transition-colors font-mono">
                        {project.title}
                    </h3>
                    <div className="text-[#666] group-hover:text-[#44D62C] p-2 transition-colors">
                        {['conper', 'autoparts', '44gyn', 'pineapple', 'gynmove', 'smartdrop', 'bicho-mimado', 'cfc-focus'].includes(project.id) ? <ArrowRight size={20} /> : <ExternalLink size={20} />}
                    </div>
                </div>
                
                <p className="text-[#AAAAAA] mb-6 line-clamp-3 leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-[#111] text-[#CCCCCC] text-xs rounded border border-[#333] font-mono group-hover:border-[#44D62C]/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modals */}
      {selectedProject === 'conper' && (
        <ConperCaseStudy onClose={handleCloseProject} />
      )}
      
      {selectedProject === 'autoparts' && (
        <AutoPartsCaseStudy onClose={handleCloseProject} />
      )}

      {selectedProject === '44gyn' && (
        <Gy44CaseStudy onClose={handleCloseProject} />
      )}

      {selectedProject === 'pineapple' && (
        <PineapplePayCaseStudy onClose={handleCloseProject} />
      )}

      {selectedProject === 'gynmove' && (
        <GynMoveCaseStudy onClose={handleCloseProject} />
      )}

      {selectedProject === 'smartdrop' && (
        <SmartDropCaseStudy onClose={handleCloseProject} />
      )}

      {selectedProject === 'bicho-mimado' && (
        <BichoMimadoCaseStudy onClose={handleCloseProject} />
      )}

      {selectedProject === 'cfc-focus' && (
        <CfcFocusCaseStudy onClose={handleCloseProject} />
      )}
    </section>
  );
};

export default Projects;