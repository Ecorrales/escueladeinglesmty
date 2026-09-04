import React, { useState } from 'react';
import { Volume2, Ear, BookOpen, Check, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, SITE_INFO } from '../data/content';

interface PillarsSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ lang, onOpenQuote }) => {
  const t = CONTENT[lang].pillarsSection;
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillarIcons = [
    <Volume2 key="vol" className="w-5 h-5 text-[#7E913C]" />,
    <Ear key="ear" className="w-5 h-5 text-[#7E913C]" />,
    <BookOpen key="book" className="w-5 h-5 text-[#7E913C]" />,
  ];

  return (
    <section id="pilares" className="py-24 bg-white border-b border-[#E7E3DC] relative">
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

        {/* 3 Pillar Top-border Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {t.pillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                id={`pillar-tab-${pillar.id}`}
                onClick={() => setActivePillar(idx)}
                className={`flex flex-col text-left p-6 transition-all cursor-pointer border-t-2 ${
                  isSelected
                    ? 'border-[#7E913C] bg-[#F4F7EA]/50'
                    : 'border-[#E7E3DC] bg-[#FAF9F6] hover:border-[#7E913C]/60 hover:bg-[#F4F7EA]/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-[#7E913C]">
                    {pillar.number}. {lang === 'es' ? 'Metodología' : 'Methodology'}
                  </span>
                  <div>{pillarIcons[idx]}</div>
                </div>
                <h3 className="text-base font-semibold text-[#382F2A] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#7A6F67] leading-relaxed">
                  {pillar.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed View */}
        {t.pillars[activePillar] && (
          <div className="border border-[#E7E3DC] bg-[#FAF9F6] p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#7E913C] bg-[#EBF0D8] px-2.5 py-0.5">
                    {lang === 'es' ? 'Pilar Activo' : 'Active Pillar'} #{t.pillars[activePillar].number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#382F2A]">
                    {t.pillars[activePillar].title}
                  </h3>
                </div>

                <h4 className="text-sm font-semibold text-[#7E913C]">
                  {t.pillars[activePillar].subtitle}
                </h4>

                <p className="text-[#645850] text-sm sm:text-base leading-relaxed font-normal">
                  {t.pillars[activePillar].description}
                </p>

                {/* Key Training Modules */}
                <div className="space-y-3 pt-3 border-t border-[#E7E3DC]">
                  <span className="text-xs font-semibold text-[#7A6F67] block mb-2">
                    {lang === 'es' ? 'Competencias desarrolladas:' : 'Key Competencies Developed:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {t.pillars[activePillar].keyAspects.map((aspect, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#382F2A]">
                        <Check className="w-4 h-4 text-[#7E913C] shrink-0 mt-0.5" />
                        <span>{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#382F2A] hover:text-[#7E913C] cursor-pointer group"
                  >
                    <span>{lang === 'es' ? 'Cotizar programa con este enfoque' : 'Request corporate program with this focus'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7E913C] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* B2B Practical Impact Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 bg-white border border-[#E7E3DC] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#7E913C]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Impacto en la Organización' : 'Organizational Impact'}</span>
                  </div>
                  {/* Subtle Lora accent typeface for the academic/business impact insight */}
                  <p className="font-serif text-sm text-[#382F2A] leading-relaxed italic">
                    "{t.pillars[activePillar].b2bImpact}"
                  </p>

                  <div className="border-t border-[#E7E3DC] pt-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#7A6F67] mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#7E913C]" />
                      <span>{lang === 'es' ? 'Aplicación en el Trabajo' : 'Workplace Application'}</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF9F6] border border-[#E7E3DC] text-xs text-[#645850] leading-relaxed">
                      {t.pillars[activePillar].sampleContext}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#E7E3DC] text-xs text-[#645850] flex items-center justify-between">
                  <span className="font-medium text-[#382F2A]">{lang === 'es' ? 'Respaldo metodológico DipTESOL & TEFL' : 'DipTESOL & TEFL methodology'}</span>
                  <span className="text-[#7E913C] font-semibold">{SITE_INFO.combinedExperience} exp.</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
