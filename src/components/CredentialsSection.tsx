import React from 'react';
import { Award, GraduationCap, History, Calendar, Sparkles, Building2, ShieldCheck, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, SITE_INFO } from '../data/content';

interface CredentialsSectionProps {
  lang: Language;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].credentials;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-[#7E913C]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#7E913C]" />;
      case 'History':
        return <History className="w-5 h-5 text-[#7E913C]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#7E913C]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#7E913C]" />;
      case 'Building2':
      default:
        return <Building2 className="w-5 h-5 text-[#7E913C]" />;
    }
  };

  return (
    <section id="respaldo" className="py-24 bg-[#FAF9F6] border-b border-[#E7E3DC] relative">
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

        {/* 6 Core Value & Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="p-7 bg-white border border-[#E7E3DC] hover:border-[#7E913C] transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 bg-[#F4F7EA] border border-[#D5DFC0] w-fit mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-base font-semibold text-[#382F2A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#645850] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive on Trinity DipTESOL & Academic Rigor */}
        <div className="border border-[#E7E3DC] bg-white p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block border border-[#D5DFC0] bg-[#F4F7EA] px-3 py-1 text-xs font-semibold text-[#7E913C]">
                Trinity DipTESOL · Marco Ofqual Nivel 7 (Nivel Maestría)
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#382F2A]">
                {lang === 'es'
                  ? 'El Estándar Internacional más Alto en Enseñanza del Idioma Inglés'
                  : 'The Highest Global Benchmark in English Language Teaching'}
              </h3>
              <p className="text-[#645850] text-sm sm:text-base leading-relaxed font-normal">
                {lang === 'es'
                  ? 'El DipTESOL está catalogado internacionalmente en el Nivel 7 (equivalente a Maestría). Certifica una pericia técnica avanzada en fonética acústica, diseño de planes curriculares corporativos y análisis de discurso empresarial. Esta formación garantiza que tus ejecutivos reciban retroalimentación experta sobre sus cuellos de botella exactos, no simples correcciones superficiales.'
                  : 'The DipTESOL is officially benchmarked at Level 7 (Master\'s Degree equivalent). It certifies advanced expertise in acoustic phonetics, corporate curriculum design, and workplace discourse analysis, ensuring your executives receive expert diagnostics on exact communication friction points.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E7E3DC]">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#382F2A]">
                  <CheckCircle className="w-4 h-4 text-[#7E913C] shrink-0" />
                  <span>{lang === 'es' ? 'Fonética articulatoria aplicada al habla rápida' : 'Applied phonetics for rapid connected speech'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#382F2A]">
                  <CheckCircle className="w-4 h-4 text-[#7E913C] shrink-0" />
                  <span>{lang === 'es' ? 'Desarrollo de materiales auténticos por sector' : 'Authentic curriculum engineered per industry'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#382F2A]">
                  <CheckCircle className="w-4 h-4 text-[#7E913C] shrink-0" />
                  <span>{lang === 'es' ? 'Auditorías de nivel CEFR estandarizadas' : 'Standardized CEFR proficiency audits'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#382F2A]">
                  <CheckCircle className="w-4 h-4 text-[#7E913C] shrink-0" />
                  <span>{lang === 'es' ? 'Fundada y operada en Monterrey desde 2011' : 'Founded & operated in Monterrey since 2011'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-7 bg-[#FAF9F6] border border-[#E7E3DC] text-center space-y-2">
              <span className="text-4xl font-normal text-[#382F2A]">
                {lang === 'es' ? '36+ Años' : '36+ Years'}
              </span>
              <span className="text-xs font-semibold text-[#7E913C]">
                {lang === 'es' ? 'Experiencia Pedagógica Conjunta' : 'Combined Experience'}
              </span>
              <p className="text-xs text-[#7A6F67] pt-2 border-t border-[#E7E3DC] mt-2">
                {lang === 'es'
                  ? 'Más de tres décadas formando líderes en Nuevo León y en todo México.'
                  : 'Over three decades training enterprise leaders in Monterrey and the US.'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
