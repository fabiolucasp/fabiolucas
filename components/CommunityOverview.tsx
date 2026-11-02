import React from 'react';
import { MessageSquare, Users, Book, Code2, ExternalLink } from 'lucide-react';

const CommunityOverview: React.FC = () => {
  return (
    <section className="py-20 min-h-screen bg-[#000000] pt-24">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="w-20 h-20 bg-[#111] rounded-full border border-[#333] flex items-center justify-center mx-auto mb-6 text-[#44D62C] animate-pulse">
            <Users size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#EEEEEE] mb-6 font-mono">
            Comunidade <span className="text-[#44D62C]">Fábio Lucas</span>
          </h2>
          <p className="text-[#AAAAAA] max-w-3xl mx-auto text-xl font-sans leading-relaxed">
            Um espaço colaborativo de elite para aprender Flutter, tirar dúvidas de arquitetura e crescer junto com outros desenvolvedores Full-Stack.
          </p>
          
          {/* CTA Discord Button */}
          <div className="mt-8">
            <span aria-disabled="true"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(88,101,242,0.4)]"
            >
                <MessageSquare size={24} />
                Convite ainda não configurado
                <ExternalLink size={18} className="opacity-70" />
            </span>
            <p className="text-[#666] text-xs mt-3 font-mono">Proposta de comunidade; canais e benefícios abaixo ainda não estão disponíveis nesta vitrine.</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <CommunityFeatureCard 
            icon={<MessageSquare size={32} />} 
            title="Canais de Suporte" 
            description="Tire suas dúvidas diretamente comigo e com os monitores. Canais separados por nível: Iniciante, Intermediário e Avançado." 
          />
          <CommunityFeatureCard 
            icon={<Code2 size={32} />} 
            title="Code Review" 
            description="Envie trechos do seu código para análise. Aprenda Clean Architecture na prática vendo correções reais." 
          />
          <CommunityFeatureCard 
            icon={<Book size={32} />} 
            title="Materiais Exclusivos" 
            description="Acesso antecipado a snippets, configurações de lint, templates de projeto e descontos em novos cursos." 
          />
          <CommunityFeatureCard 
            icon={<Users size={32} />} 
            title="Networking & Vagas" 
            description="Conecte-se com recrutadores e outros devs. Canal exclusivo para divulgação de vagas Flutter Remotas." 
          />
        </div>

      </div>
    </section>
  );
};

const CommunityFeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-[#333] hover:border-[#44D62C] transition-all duration-300 group text-left hover:-translate-y-1">
    <div className="text-[#44D62C] mb-6 group-hover:scale-110 transition-transform duration-300 p-4 bg-[#111] rounded-2xl w-fit border border-[#222]">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#EEEEEE] mb-3 font-mono group-hover:text-[#44D62C] transition-colors">{title}</h3>
    <p className="text-[#AAAAAA] text-base font-sans leading-relaxed">{description}</p>
  </div>
);

export default CommunityOverview;