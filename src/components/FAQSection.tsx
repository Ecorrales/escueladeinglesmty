import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../data/content';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF9F6] border-b border-[#E7E3DC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Accordion List */}
        <div className="space-y-3">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-white border-[#7E913C]'
                    : 'bg-white border-[#E7E3DC] hover:border-[#7E913C]/60'
                }`}
              >
                <button
                  id={`faq-accordion-btn-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#382F2A] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 border transition-colors shrink-0 ${
                      isOpen
                        ? 'bg-[#382F2A] text-white border-[#382F2A]'
                        : 'bg-[#FAF9F6] text-[#7A6F67] border-[#E7E3DC]'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#EBF0D8]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#645850] leading-relaxed border-t border-[#E7E3DC] pt-4 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
