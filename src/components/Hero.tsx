import React from 'react';
import { Award, CheckCircle2, MessageSquare, ArrowRight, Building, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, SITE_INFO } from '../data/content';
import { Logo } from './Logo';

interface HeroProps {
  lang: Language;
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuote, onScrollToCalculator }) => {
  const t = CONTENT[lang].hero;

  return (
    <section id="hero-section" className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#FAF9F6] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Official Emblem & Badge */}
          <div className="inline-flex items-center gap-2.5 border border-[#D5DFC0] bg-[#F4F7EA] px-3.5 py-1.5 mb-6">
            <Logo variant="icon-only" size="sm" className="w-5 h-5" />
            <p className="text-xs text-[#7E913C] font-semibold">
              {lang === 'es' ? '36+ Años de experiencia docente conjunta' : '36+ Years of combined teaching experience'} · EST. 2011 MTY
            </p>
          </div>

          {/* Main Hero Headline - Established, academic, warm typography in Source Sans 3 */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6 text-[#382F2A] max-w-3xl">
            <span>{t.titleLine1}</span>{' '}
            <span className="font-semibold text-[#7E913C]">
              {t.titleLine2}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#645850] leading-relaxed mb-8 max-w-2xl font-normal">
            {t.subtitle}
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-14">
            <button
              id="hero-primary-quote-btn"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#382F2A] hover:bg-[#7E913C] text-white py-3 px-6 text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
            >
              <span>{t.ctaQuote}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EBF0D8]" />
            </button>

            <a
              id="hero-whatsapp-btn"
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E7E3DC] bg-white text-[#382F2A] py-3 px-6 text-xs font-semibold tracking-wide uppercase hover:border-[#7E913C] hover:text-[#7E913C] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>{t.ctaWhatsApp}</span>
            </a>

            <button
              id="hero-calculator-btn"
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-5 text-xs tracking-wide font-semibold text-[#645850] hover:text-[#7E913C] transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>{t.ctaDiagnostics}</span>
            </button>
          </div>

          {/* Strategic Trust Grid - Understated and academic */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#E7E3DC]">
            
            <div className="flex flex-col items-center p-4 bg-white border border-[#E7E3DC] text-center">
              <span className="text-2xl font-semibold text-[#382F2A]">{t.trustStat1}</span>
              <span className="text-xs font-medium text-[#7A6F67] mt-1">{t.trustDesc1}</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white border border-[#E7E3DC] text-center">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#7E913C]" />
                <span className="text-2xl font-semibold text-[#7E913C]">{t.trustStat2}</span>
              </div>
              <span className="text-xs font-medium text-[#7A6F67] mt-1">{t.trustDesc2}</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white border border-[#E7E3DC] text-center">
              <span className="text-2xl font-semibold text-[#382F2A]">{t.trustStat3}</span>
              <span className="text-xs font-medium text-[#7A6F67] mt-1">{t.trustDesc3}</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white border border-[#E7E3DC] text-center">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#7E913C]" />
                <span className="text-2xl font-semibold text-[#382F2A]">{t.trustStat4}</span>
              </div>
              <span className="text-xs font-medium text-[#7A6F67] mt-1">{t.trustDesc4}</span>
            </div>

          </div>

          {/* Value proposition badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[#645850] font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7E913C]" />
              {lang === 'es' ? 'Facturación fiscal mexicana (CFDI deducible)' : 'Mexican CFDI tax invoicing available'}
            </span>
            <span className="hidden sm:inline text-[#D5DFC0]">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7E913C]" />
              {lang === 'es' ? 'Materiales auténticos adaptados a tu sector' : 'Authentic bespoke industry materials'}
            </span>
            <span className="hidden sm:inline text-[#D5DFC0]">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7E913C]" />
              {lang === 'es' ? 'Auditorías de nivel CEFR A1 - C2' : 'CEFR level benchmark audits'}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
