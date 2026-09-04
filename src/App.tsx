/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, B2BQuoteRequest } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { DiagnosticCalculator } from './components/DiagnosticCalculator';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [prefilledContact, setPrefilledContact] = useState<Partial<B2BQuoteRequest>>({
    teamSize: '2-5',
    trainingFocus: 'teams',
  });

  const scrollToContact = () => {
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const calcEl = document.getElementById('diagnostico');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (programId: string) => {
    let focus: 'executive' | 'teams' | 'cefr-audit' | 'pronunciation-decoding' | 'custom' = 'teams';
    if (programId === 'executive') focus = 'executive';
    else if (programId === 'audit') focus = 'cefr-audit';
    else if (programId === 'custom') focus = 'custom';
    else focus = 'teams';

    setPrefilledContact((prev) => ({
      ...prev,
      trainingFocus: focus,
      teamSize: programId === 'executive' ? '1' : prev.teamSize || '2-5',
    }));

    scrollToContact();
  };

  const handleApplyRecommendation = (params: {
    teamSize: '1' | '2-5' | '6-15' | '16-50' | '50+';
    focus: 'executive' | 'teams' | 'cefr-audit' | 'pronunciation-decoding' | 'custom';
    note: string;
  }) => {
    setPrefilledContact({
      teamSize: params.teamSize,
      trainingFocus: params.focus,
      currentChallenge: params.note,
    });

    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#382F2A] flex flex-col selection:bg-[#7E913C] selection:text-white font-sans">
      {/* Top sticky navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenQuote={scrollToContact}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenQuote={scrollToContact}
          onScrollToCalculator={scrollToCalculator}
        />

        <PillarsSection
          lang={lang}
          onOpenQuote={scrollToContact}
        />

        <ProgramsSection
          lang={lang}
          onSelectProgram={handleSelectProgram}
        />

        <DiagnosticCalculator
          lang={lang}
          onApplyRecommendation={handleApplyRecommendation}
        />

        <CredentialsSection
          lang={lang}
        />

        <ContactSection
          lang={lang}
          prefilledData={prefilledContact}
        />

        <FAQSection
          lang={lang}
        />
      </main>

      {/* Corporate Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat lang={lang} />
    </div>
  );
}
