import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Factory, Code, TrendingUp, Truck, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../data/content';

interface DiagnosticCalculatorProps {
  lang: Language;
  onApplyRecommendation: (params: {
    teamSize: '1' | '2-5' | '6-15' | '16-50' | '50+';
    focus: 'executive' | 'teams' | 'cefr-audit' | 'pronunciation-decoding' | 'custom';
    note: string;
  }) => void;
}

export const DiagnosticCalculator: React.FC<DiagnosticCalculatorProps> = ({
  lang,
  onApplyRecommendation,
}) => {
  const t = CONTENT[lang].calculator;

  const [selectedIndustry, setSelectedIndustry] = useState<string>('nearshoring');
  const [selectedSize, setSelectedSize] = useState<'1' | '2-5' | '6-15' | '16-50' | '50+'>('2-5');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('fast-speech');

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'nearshoring':
        return <Factory className="w-4 h-4" />;
      case 'tech':
        return <Code className="w-4 h-4" />;
      case 'finance':
        return <TrendingUp className="w-4 h-4" />;
      case 'logistics':
        return <Truck className="w-4 h-4" />;
      case 'executive':
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  // Determine strategic recommendation
  const getRecommendation = () => {
    let program = '';
    let focusKey: 'executive' | 'teams' | 'cefr-audit' | 'pronunciation-decoding' | 'custom' = 'teams';
    let schedule = '';
    let pilar = '';

    if (selectedSize === '1') {
      program = lang === 'es' ? 'Executive English Coaching (1 a 1)' : 'Executive English Coaching (1-on-1)';
      focusKey = 'executive';
      schedule = lang === 'es' ? '2 a 3 sesiones semanales de 60 min con horarios ejecutivos flexibles' : '2 to 3 weekly 60-min sessions with flexible executive slots';
    } else if (selectedSize === '50+') {
      program = lang === 'es' ? 'Programa Corporativo Multidepartamental + Auditoría CEFR' : 'Enterprise Multi-Departmental Program + CEFR Audits';
      focusKey = 'custom';
      schedule = lang === 'es' ? 'Cohortes escalonadas de 4 a 6 participantes con diagnóstico previo' : 'Staggered cohorts of 4-6 participants with initial diagnostic benchmarks';
    } else {
      program = lang === 'es' ? 'Corporate Group Cohorts (Equipos Funcionales)' : 'Corporate Group Cohorts (Functional Teams)';
      focusKey = 'teams';
      schedule = lang === 'es' ? '2 sesiones semanales de 75 min (formato online en vivo interactivo)' : '2 weekly 75-min sessions (live interactive online format)';
    }

    if (selectedChallenge === 'fast-speech') {
      pilar = lang === 'es' ? 'Pilar 2: Decodificación Auditiva y Fonética de Habla Rápida' : 'Pillar 2: Auditory Decoding & Connected Fast Speech';
    } else if (selectedChallenge === 'clarity') {
      pilar = lang === 'es' ? 'Pilar 1: Pronunciación Global, Entonación y Claridad Acústica' : 'Pillar 1: Global Pronunciation, Intonation & Acoustic Clarity';
    } else if (selectedChallenge === 'vocabulary') {
      pilar = lang === 'es' ? 'Pilar 3: Gramática Léxica y Colocaciones Auténticas de Negocios' : 'Pillar 3: Lexical Grammar & Authentic Business Collocations';
    } else {
      pilar = lang === 'es' ? 'Pilar Híbrido: Presencia Ejecutiva, Entonación Asertiva y Negociación' : 'Hybrid Pillar: Executive Presence, Assertive Intonation & Pitching';
    }

    return { program, focusKey, schedule, pilar };
  };

  const recommendation = getRecommendation();

  const handleTransferToQuote = () => {
    const indObj = t.industries.find((i) => i.id === selectedIndustry);
    const chalObj = t.challenges.find((c) => c.id === selectedChallenge);
    const summaryNote = `Diagnóstico interactivo: Sector ${indObj?.name || selectedIndustry}. Reto: ${chalObj?.title || selectedChallenge}. Tamaño: ${selectedSize}.`;
    onApplyRecommendation({
      teamSize: selectedSize,
      focus: recommendation.focusKey,
      note: summaryNote,
    });
  };

  return (
    <section id="diagnostico" className="py-24 bg-white border-b border-[#E7E3DC] relative">
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

        {/* Interactive Configuration Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 bg-[#FAF9F6] p-7 sm:p-9 border border-[#E7E3DC]">
            
            {/* Step 1: Industry */}
            <div>
              <label className="block text-xs font-semibold text-[#7E913C] mb-2.5">
                {t.step1}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`flex items-center gap-2.5 p-3 border text-xs font-medium transition-colors text-left cursor-pointer ${
                      selectedIndustry === ind.id
                        ? 'bg-[#F4F7EA] border-[#7E913C] text-[#382F2A] font-semibold'
                        : 'bg-white border-[#E7E3DC] text-[#645850] hover:border-[#7E913C]/60'
                    }`}
                  >
                    <span className={selectedIndustry === ind.id ? 'text-[#7E913C]' : 'text-[#7A6F67]'}>
                      {getIndustryIcon(ind.id)}
                    </span>
                    <span>{ind.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Team Size */}
            <div>
              <label className="block text-xs font-semibold text-[#7E913C] mb-2.5">
                {t.step2}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {t.sizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id as any)}
                    className={`p-3 border text-left transition-colors cursor-pointer ${
                      selectedSize === s.id
                        ? 'bg-[#F4F7EA] border-[#7E913C] text-[#382F2A] font-semibold'
                        : 'bg-white border-[#E7E3DC] text-[#645850] hover:border-[#7E913C]/60'
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#382F2A] mb-0.5">{s.label}</div>
                    <div className="text-[11px] text-[#7A6F67] leading-tight">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Primary Bottleneck */}
            <div>
              <label className="block text-xs font-semibold text-[#7E913C] mb-2.5">
                {t.step3}
              </label>
              <div className="space-y-2">
                {t.challenges.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedChallenge(c.id)}
                    className={`w-full flex items-center justify-between p-3 border text-xs text-left transition-colors cursor-pointer ${
                      selectedChallenge === c.id
                        ? 'bg-[#F4F7EA] border-[#7E913C] text-[#382F2A] font-semibold'
                        : 'bg-white border-[#E7E3DC] text-[#645850] hover:border-[#7E913C]/60'
                    }`}
                  >
                    <span className="font-normal pr-2">{c.title}</span>
                    <span className="text-[11px] font-semibold text-[#7E913C] bg-white border border-[#D5DFC0] px-2 py-0.5 shrink-0">
                      {c.pilar}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-Time Strategic Recommendation Result (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 border border-[#382F2A]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7E913C] mb-5">
              <CheckCircle2 className="w-4 h-4 text-[#7E913C]" />
              <span>{t.recommendationTitle}</span>
            </div>

            <div className="space-y-5 mb-7">
              <div>
                <span className="text-xs font-semibold text-[#7A6F67] block mb-1.5">{t.suggestedProgram}</span>
                <div className="text-lg font-semibold text-[#382F2A] bg-[#FAF9F6] p-3.5 border border-[#E7E3DC]">
                  {recommendation.program}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#7A6F67] block mb-1.5">{t.suggestedPillarFocus}</span>
                <div className="text-xs font-semibold text-[#7E913C] bg-[#F4F7EA] p-3 border border-[#D5DFC0]">
                  {recommendation.pilar}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#7A6F67] block mb-1">{t.suggestedDuration}</span>
                <p className="text-xs text-[#645850] leading-relaxed font-normal">
                  {recommendation.schedule}
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#E7E3DC] text-xs text-[#645850] space-y-1">
                <div className="font-semibold text-xs text-[#382F2A] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E913C]" />
                  {lang === 'es' ? 'Garantía Académica' : 'Academic Rigor'}
                </div>
                <p className="text-[11px] text-[#7A6F67] leading-relaxed">
                  {lang === 'es'
                    ? 'Evaluación diagnóstica individual bajo marco CEFR y materiales auténticos adaptados a tu sector antes de arrancar.'
                    : 'Individual CEFR diagnostic assessment and authentic industry materials prior to cohort kickoff.'}
                </p>
              </div>
            </div>

            <button
              id="diagnostic-send-to-quote-btn"
              onClick={handleTransferToQuote}
              className="w-full bg-[#382F2A] hover:bg-[#7E913C] text-white py-3 px-4 text-xs font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.sendToQuote}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EBF0D8]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
