import React from 'react';
import { ArrowDown, Github, Linkedin, Smartphone, Book, GraduationCap, Code2, Terminal, Cloud, Database } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PROFILE } from '../constants';
import LottieIcon from './ui/LottieIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#000000]">
      {/* Background Decor Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#44D62C]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#44D62C]/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 opacity-20"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#333] text-[#AAAAAA] text-sm bg-[#050505] font-mono hover:border-[#44D62C] transition-colors cursor-default group">
                <div className="mr-2 text-[#44D62C] animate-pulse">
                    <div className="w-2 h-2 bg-[#44D62C] rounded-full"></div>
                </div>
                Disponível para novos projetos, e-books e cursos!
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#EEEEEE] leading-tight font-mono">
                Olá, eu sou <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44D62C] to-[#2E8B1F] flex items-center gap-4">
                    {PROFILE.name.split(' ')[0]} {PROFILE.name.split(' ')[1]}
                    <div className="inline-block align-middle -mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
                        <span className="text-4xl">👋</span>
                    </div>
                </span>
            </h1>
            
            <p className="text-xl text-[#CCCCCC] max-w-lg leading-relaxed font-light font-sans">
                {PROFILE.title}. Especialista em criar aplicações escaláveis com <span className="text-[#44D62C] font-medium border-b border-[#44D62C]/30 font-mono inline-flex items-center gap-1">Flutter <LottieIcon icon={<Smartphone size={16} />} size={20} /></span> e <span className="text-[#44D62C] font-medium border-b border-[#44D62C]/30 font-mono inline-flex items-center gap-1">Firebase <LottieIcon icon={<Database size={16} />} size={20} /></span>, além de compartilhar conhecimento através de <span className="text-[#44D62C] font-medium border-b border-[#44D62C]/30 font-mono">E-books e Cursos</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 font-mono">
                <NavLink 
                    to="/cursos" 
                    className="group px-8 py-3 bg-[#44D62C] text-[#000000] rounded-full font-bold hover:bg-[#5aff3d] transition-colors shadow-[0_0_20px_rgba(68,214,44,0.3)] flex items-center gap-2"
                >
                    <div className="w-6 h-6 flex items-center justify-center">
                         <LottieIcon icon={<GraduationCap size={24} />} size={24} playOnHover />
                    </div>
                     Meus Cursos
                </NavLink>
                <NavLink 
                    to="/ebooks" 
                    className="group px-8 py-3 border border-[#333] text-[#EEEEEE] rounded-full font-medium hover:border-[#44D62C] hover:text-[#44D62C] transition-all bg-[#050505] flex items-center gap-2"
                >
                    <div className="w-6 h-6 flex items-center justify-center">
                         <LottieIcon icon={<Book size={24} />} size={24} playOnHover />
                    </div>
                    E-books
                </NavLink>
            </div>

            <div className="flex gap-4 pt-4">
                {PROFILE.socials.map((social) => (
                    <a 
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#111111] border border-[#333] rounded-full text-[#AAAAAA] hover:border-[#44D62C] hover:text-[#44D62C] transition-all transform hover:-translate-y-1 group"
                        aria-label={social.platform}
                    >
                        {social.icon === 'github' && <Github size={20} className="group-hover:text-white" />}
                        {social.icon === 'linkedin' && <Linkedin size={20} className="group-hover:text-blue-400" />}
                        {social.icon === 'code' && <Code2 size={20} className="group-hover:text-yellow-400" />}
                        {social.icon === 'instagram' && <Smartphone size={20} className="group-hover:text-pink-500" />}
                    </a>
                ))}
            </div>
        </div>

        {/* Visual Element / Terminal Illustration */}
        <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-[#44D62C] rounded-3xl blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Main macOS Terminal Window */}
                <div className="absolute inset-0 bg-[#000000] rounded-3xl border border-[#333] flex flex-col overflow-hidden shadow-2xl relative">
                    <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        <div className="ml-auto text-xs text-[#555] font-mono">fabiolucasdev ~ bash</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                        {/* CRT / Scanlines screen overlay effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        
                        <div className="text-7xl md:text-8xl font-bold font-mono text-[#EEEEEE] tracking-tighter animate-pulse">
                            <span className="text-[#44D62C]">&lt;</span>F<span className="text-[#44D62C]">/</span>L<span className="text-[#44D62C]">&gt;</span>
                        </div>
                        
                        <div className="mt-4 font-mono text-sm text-[#44D62C] typewriter">
                            $ coding_future...
                            <span className="animate-blink block w-2 h-4 bg-[#44D62C] inline-block ml-1 align-middle"></span>
                        </div>
                    </div>
                </div>
                
                {/* Floating Stack Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#111111] p-4 rounded-xl border border-[#333] shadow-xl flex items-center gap-3 z-20">
                    <div className="w-10 h-10 bg-[#44D62C]/20 rounded-lg flex items-center justify-center text-[#44D62C]">
                        <Code2 size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-[#888] uppercase tracking-wider font-mono">Stack</p>
                        <p className="text-sm font-bold text-[#EEEEEE] font-mono">Full-Stack</p>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style>{`
                .typewriter {
                   display: inline-block;
                }
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                .animate-blink {
                  animation: blink 1s step-end infinite;
                }
            `}</style>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#666] hover:text-[#44D62C] transition-colors animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
            <ArrowDown size={32} />
        </div>
      </a>
      
    </section>
  );
};

export default Hero;