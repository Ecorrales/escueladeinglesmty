import React, { useState, useEffect } from 'react';
import { Phone, Globe2, MessageSquare, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, SITE_INFO } from '../data/content';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.pillars, href: '#pilares' },
    { label: t.programs, href: '#programas' },
    { label: t.assessment, href: '#diagnostico' },
    { label: t.whyUs, href: '#respaldo' },
    { label: t.faq, href: '#faq' },
    { label: t.contact, href: '#contacto' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E3DC] shadow-xs'
          : 'bg-white border-b border-[#E7E3DC]'
      }`}
    >
      {/* Top micro-bar for B2B credentials & direct hotline */}
      <div className="hidden lg:block bg-[#FAF9F6] border-b border-[#E7E3DC] text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#645850]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#7E913C] font-semibold text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7E913C]" />
              {lang === 'es' ? 'Certificación Trinity DipTESOL & Lic. TEFL' : 'Trinity DipTESOL & BA in TEFL Certified'}
            </span>
            <span className="text-[#D5DFC0]">•</span>
            <span className="text-[#645850] text-xs font-normal">
              {SITE_INFO.headquarters} · {lang === 'es' ? 'Fundada en 2011 · Monterrey, MX' : 'Founded in 2011 · Monterrey, MX'}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              id="header-phone-link"
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-[#382F2A] hover:text-[#7E913C] transition-colors font-semibold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>+52 811 218 9877</span>
            </a>
            <span className="text-[#E7E3DC]">•</span>
            <a
              id="header-whatsapp-top-link"
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#382F2A] hover:text-[#7E913C] font-semibold text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>WhatsApp B2B</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity with Official Logo */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            title="Clases de Inglés Mty - Inicio"
          >
            <Logo size="md" />
            <div className="hidden md:block pl-3 border-l border-[#E7E3DC]">
              <p className="text-xs font-medium text-[#7A6F67]">
                Capacitación en Inglés B2B
              </p>
              <p className="text-[11px] text-[#7E913C] font-normal">
                Desde 2011 · Monterrey
              </p>
            </div>
          </a>

          {/* Desktop Navigation links - Warm, academic Source Sans 3 */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-normal text-[#645850]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#7E913C] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#7E913C] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: Language toggle + Quote CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              id="language-switcher-btn"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E7E3DC] bg-[#FAF9F6] text-xs font-semibold text-[#382F2A] hover:text-[#7E913C] hover:border-[#7E913C] transition-colors cursor-pointer"
              title="Cambiar idioma / Switch language"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>{lang.toUpperCase()}</span>
              <span className="text-[#7A6F67] text-[11px]">⇄ {lang === 'es' ? 'EN' : 'ES'}</span>
            </button>

            {/* Direct Dial button */}
            <a
              id="nav-direct-call-btn"
              href={`tel:${SITE_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#382F2A] hover:text-[#7E913C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7E913C]" />
              <span>{SITE_INFO.displayPhone}</span>
            </a>

            {/* Primary Quote CTA button with official brand espresso and olive hover */}
            <button
              id="nav-quote-cta-btn"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#382F2A] hover:bg-[#7E913C] text-white py-2.5 px-4 text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
            >
              <span>{t.requestQuote}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EBF0D8]" />
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="px-2.5 py-1 border border-[#E7E3DC] text-xs font-bold text-[#382F2A]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#382F2A] hover:text-[#7E913C] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="sm:hidden bg-white border-b border-[#E7E3DC] px-6 py-6 space-y-5">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#645850]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#7E913C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#E7E3DC] space-y-3">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#E7E3DC] bg-[#FAF9F6] text-[#382F2A] text-xs font-semibold tracking-wide uppercase"
            >
              <Phone className="w-4 h-4 text-[#7E913C]" />
              <span>+52 811 218 9877</span>
            </a>

            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#7E913C] bg-[#F4F7EA] text-[#382F2A] text-xs font-semibold tracking-wide uppercase"
            >
              <MessageSquare className="w-4 h-4 text-[#7E913C]" />
              <span>WhatsApp B2B (81 1218 9877)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-[#382F2A] hover:bg-[#7E913C] text-white text-xs font-semibold tracking-wide uppercase transition-colors"
            >
              {t.requestQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
