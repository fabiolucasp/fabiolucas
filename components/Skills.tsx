import React from 'react';
import { SKILLS } from '../constants';
import LottieIcon from './ui/LottieIcon';
import { Smartphone, Code, Server, Database, Cloud, Globe, Cpu, Layout, Terminal } from 'lucide-react';

// Helper to get Lucide Icon based on skill name
const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    
    if (name.includes('flutter')) return <Smartphone />;
    if (name.includes('dart')) return <Terminal />;
    if (name.includes('firebase')) return <Database />;
    if (name.includes('react')) return <Code />;
    if (name.includes('node')) return <Server />;
    if (name.includes('cloud') || name.includes('gcp')) return <Cloud />;
    if (name.includes('python')) return <Terminal />;
    if (name.includes('api')) return <Globe />;
    if (name.includes('design')) return <Layout />;
    if (name.includes('sql')) return <Database />;
    
    return <Cpu />; // Default fallback
};

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-[#111] rounded-full border border-[#333] text-[#44D62C]">
            <Cpu size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4 font-mono">Tecnologias & Skills</h2>
          <p className="text-[#AAAAAA] max-w-2xl mx-auto font-sans">
            Ferramentas e frameworks que utilizo para criar soluções de alto nível. Incluindo as APIs mais poderosas e princípios de Design System.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="px-6 py-3 bg-[#111111] border border-[#333] rounded-lg text-[#EEEEEE] hover:border-[#44D62C] hover:text-[#44D62C] hover:shadow-[0_0_15px_rgba(68,214,44,0.15)] transition-all cursor-default font-mono text-sm flex items-center gap-3 group"
            >
              {/* Using LottieIcon with icon fallback only */}
              <div className="w-6 h-6 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <LottieIcon 
                    icon={getSkillIcon(skill.name)}
                    size={20} 
                    playOnHover={true}
                  />
              </div>
              <span className="group-hover:translate-x-1 transition-transform">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;