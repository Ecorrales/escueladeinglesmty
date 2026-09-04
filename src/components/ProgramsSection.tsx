import React from 'react';
import { UserCheck, Users, FileCheck, Layers, Check, ArrowRight, Clock } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../data/content';

interface ProgramsSectionProps {
  lang: Language;
  onSelectProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ lang, onSelectProgram }) => {
  const t = CONTENT[lang].programs;

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'executive':
        return <UserCheck className="w-5 h-5 text-[#7E913C]" />;
      case 'teams':
        return <Users className="w-5 h-5 text-[#7E913C]" />;
      case 'audit':
        return <FileCheck className="w-5 h-5 text-[#7E913C]" />;
      case 'custom':
      default:
        return <Layers className="w-5 h-5 text-[#7E913C]" />;
    }
  };

  return (
    <section id="programas" className="py-24 bg-[#FAF9F6] border-b border-[#E7E3DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block border border-[#D5DFC0] bg-[#F4F7EA] px-3.5 py-1 mb-3">
            <p className="text-xs text-[#7E913C] font-semibold">
              {t.badge}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#382F2A] tracking-normal mb-3">
            {t.title}
          </h2>
          <p className="text-base text-[#645850] leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 B2B Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.tiers.map((tier) => (
            <div
              key={tier.id}
              id={`program-card-${tier.id}`}
              className="flex flex-col justify-between p-7 sm:p-9 bg-white border border-[#E7E3DC] hover:border-[#7E913C] transition-colors duration-200"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#E7E3DC]">
                  <div className="p-2 bg-[#F4F7EA] border border-[#D5DFC0]">
                    {getProgramIcon(tier.id)}
                  </div>
                  <span className="text-xs font-semibold text-[#7E913C] bg-[#F4F7EA] border border-[#D5DFC0] px-2.5 py-0.5">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#382F2A] mb-1">
                  {tier.title}
                </h3>
                <p className="text-xs font-medium text-[#7E913C] mb-3">
                  {tier.subtitle}
                </p>
                <p className="text-sm text-[#645850] leading-relaxed mb-5">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-5 pt-3.5 border-t border-[#E7E3DC]">
                  <span className="text-xs font-semibold text-[#7A6F67] block mb-2">
                    {lang === 'es' ? 'Componentes Clave' : 'Key Modules'}
                  </span>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#382F2A]">
                      <Check className="w-4 h-4 text-[#7E913C] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#E7E3DC] space-y-3.5">
                {/* Modality pill */}
                <div className="flex items-center gap-2 text-xs text-[#645850] font-normal">
                  <Clock className="w-3.5 h-3.5 text-[#7E913C] shrink-0" />
                  <span>{tier.modality}</span>
                </div>

                {/* Best For Note */}
                <div className="text-xs text-[#645850] bg-[#FAF9F6] p-3 border border-[#E7E3DC]">
                  <span className="font-semibold text-xs text-[#382F2A] block mb-1">
                    {lang === 'es' ? 'Perfil Recomendado' : 'Target Profile'}
                  </span>
                  {tier.bestFor}
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectProgram(tier.id)}
                  className="w-full bg-[#382F2A] hover:bg-[#7E913C] text-white py-3 px-4 text-xs font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Cotizar este programa' : 'Inquire about this program'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#EBF0D8]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
