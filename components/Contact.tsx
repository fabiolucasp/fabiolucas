import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
            
            <div>
                <span className="text-[#44D62C] font-mono tracking-wider uppercase text-sm">Contato</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mt-2 mb-6 font-mono">Vamos criar algo incrível?</h2>
                <p className="text-[#AAAAAA] mb-8 text-lg font-light font-sans">
                    Estou disponível para projetos freelance e consultorias em Flutter e Arquitetura Cloud.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center text-[#666] group-hover:text-[#44D62C] group-hover:border-[#44D62C] transition-all">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-[#666] font-mono">Email</p>
                            <a href={`mailto:${PROFILE.email}`} className="text-[#EEEEEE] font-medium hover:text-[#44D62C] transition-colors font-mono">{PROFILE.email}</a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center text-[#666] group-hover:text-[#44D62C] group-hover:border-[#44D62C] transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-[#666] font-mono">Telefone / WhatsApp</p>
                            <a href={`tel:${PROFILE.phone}`} className="text-[#EEEEEE] font-medium hover:text-[#44D62C] transition-colors font-mono">{PROFILE.phone}</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center text-[#666] group-hover:text-[#44D62C] group-hover:border-[#44D62C] transition-all">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-[#666] font-mono">Localização</p>
                            <span className="text-[#EEEEEE] font-medium font-mono">{PROFILE.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-[#333]">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#AAAAAA] mb-2 font-mono">Seu Nome</label>
                        <input type="text" className="w-full bg-[#000] border border-[#333] rounded-lg px-4 py-3 text-[#EEEEEE] focus:outline-none focus:border-[#44D62C] focus:ring-1 focus:ring-[#44D62C] transition-all font-mono" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#AAAAAA] mb-2 font-mono">Email</label>
                        <input type="email" className="w-full bg-[#000] border border-[#333] rounded-lg px-4 py-3 text-[#EEEEEE] focus:outline-none focus:border-[#44D62C] focus:ring-1 focus:ring-[#44D62C] transition-all font-mono" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#AAAAAA] mb-2 font-mono">Mensagem</label>
                        <textarea rows={4} className="w-full bg-[#000] border border-[#333] rounded-lg px-4 py-3 text-[#EEEEEE] focus:outline-none focus:border-[#44D62C] focus:ring-1 focus:ring-[#44D62C] transition-all font-mono"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#44D62C] text-[#000000] font-bold py-4 rounded-lg hover:bg-[#5aff3d] transition-colors uppercase tracking-widest text-sm font-mono">
                        Enviar Mensagem
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;