import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, SITE_INFO } from '../data/content';
import { Logo } from './Logo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = CONTENT[lang].footer;

  return (
    <footer className="bg-white border-t border-[#E7E3DC] text-[#645850] text-xs">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <Logo size="md" />
            <p className="text-xs text-[#7E913C] font-semibold">
              B2B Language Solutions · EST. 2011 · Monterrey, NL
            </p>
            <p className="text-xs text-[#645850] leading-relaxed max-w-sm font-normal">
              {lang === 'es'
                ? 'Escuela especializada en capacitar a profesionales y empresas para comunicarse con claridad, confianza y precisión en contextos internacionales de negocios.'
                : 'Specialized language school training enterprise teams to communicate with precision, confidence, and natural fluency across global markets.'}
            </p>

            <div className="pt-2 text-xs text-[#7A6F67] space-y-1">
              <div>
                <strong className="text-[#382F2A]">
                  {lang === 'es' ? 'Directores Pedagógicos:' : 'Academic Directors:'}
                </strong>{' '}
                Trinity DipTESOL & Licenciatura en TEFL
              </div>
              <div>
                <strong className="text-[#382F2A]">
                  {lang === 'es' ? 'Experiencia acumulada:' : 'Combined experience:'}
                </strong>{' '}
                {lang === 'es' ? '36+ años de trayectoria' : '36+ years of pedagogical expertise'}
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-brand-linkedin-pill"
                href="https://www.linkedin.com/company/clases-de-inglés-mty/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#E7E3DC] bg-[#FAF9F6] text-xs font-semibold text-[#382F2A] hover:text-[#7E913C] hover:border-[#7E913C] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#7E913C]" />
                <span>{lang === 'es' ? 'Conectar en LinkedIn' : 'Connect on LinkedIn'}</span>
              </a>
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#382F2A] pb-2 border-b border-[#E7E3DC]">
              {t.sectionsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#645850] font-normal">
              <li>
                <a href="#pilares" className="hover:text-[#7E913C] transition-colors">
                  {lang === 'es' ? '3 Pilares Metodológicos' : '3 Core Pillars'}
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-[#7E913C] transition-colors">
                  {lang === 'es' ? 'Programas Corporativos' : 'Corporate Programs'}
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#7E913C] transition-colors">
                  {lang === 'es' ? 'Diagnóstico B2B' : 'B2B Diagnostic Tool'}
                </a>
              </li>
              <li>
                <a href="#respaldo" className="hover:text-[#7E913C] transition-colors">
                  {lang === 'es' ? 'Respaldo Académico' : 'Academic Credentials'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#7E913C] transition-colors">
                  {lang === 'es' ? 'Preguntas Frecuentes' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-[#382F2A] pb-2 border-b border-[#E7E3DC]">
              {t.contactTitle}
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-2.5 text-[#382F2A] hover:text-[#7E913C] font-semibold text-base transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7E913C]" />
                <span>+52 811 218 9877</span>
              </a>

              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#382F2A] hover:text-[#7E913C] font-normal transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#7E913C]" />
                <span>WhatsApp: +52 81 1218 9877</span>
              </a>

              <a
                id="footer-linkedin-link"
                href={SITE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#382F2A] hover:text-[#7E913C] font-normal transition-colors"
                aria-label="Clases de Inglés MTY en LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#7E913C]" />
                <span>LinkedIn: Clases de Inglés MTY</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#645850] pt-1">
                <MapPin className="w-4 h-4 text-[#7A6F67] shrink-0" />
                <span>{SITE_INFO.headquarters} (Presencial & Online Global)</span>
              </div>
            </div>

            <div className="p-3 bg-[#FAF9F6] border border-[#E7E3DC] text-xs text-[#7A6F67]">
              {lang === 'es'
                ? 'Emisión de comprobantes fiscales deducibles (CFDI) conforme a la legislación mexicana.'
                : 'Full tax deductible CFDI invoicing compliant with Mexican fiscal law.'}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="border-t border-[#E7E3DC] bg-[#FAF9F6] py-5 px-4 sm:px-6 lg:px-8 text-[#7A6F67] text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {SITE_INFO.name}. {t.rights}</p>
          <div className="flex items-center gap-4 text-xs text-[#7A6F67]">
            <a
              id="footer-bottom-linkedin-link"
              href="https://www.linkedin.com/company/clases-de-inglés-mty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#382F2A] hover:text-[#7E913C] transition-colors font-medium"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[#D5DFC0]">•</span>
            <span>Monterrey, Nuevo León, México</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
