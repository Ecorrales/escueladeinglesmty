import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Clock, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language, B2BQuoteRequest } from '../types';
import { CONTENT, SITE_INFO } from '../data/content';

interface ContactSectionProps {
  lang: Language;
  prefilledData?: Partial<B2BQuoteRequest>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, prefilledData }) => {
  const t = CONTENT[lang].contact;

  const [formData, setFormData] = useState<B2BQuoteRequest>({
    fullName: prefilledData?.fullName || '',
    jobTitle: prefilledData?.jobTitle || '',
    companyName: prefilledData?.companyName || '',
    corporateEmail: prefilledData?.corporateEmail || '',
    phoneNumber: prefilledData?.phoneNumber || '',
    teamSize: prefilledData?.teamSize || '2-5',
    trainingFocus: prefilledData?.trainingFocus || 'teams',
    currentChallenge: prefilledData?.currentChallenge || '',
    preferredSchedule: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<B2BQuoteRequest | null>(null);

  React.useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        ...prefilledData,
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setSubmittedData({ ...formData });
    }, 500);
  };

  const generateWhatsAppLink = (data: B2BQuoteRequest) => {
    const focusMap = {
      executive: 'Executive English Coaching (1 a 1)',
      teams: 'Corporate Group Cohorts (Grupos Reducidos)',
      'cefr-audit': 'Evaluación & Auditoría CEFR para RRHH',
      'pronunciation-decoding': 'Pronunciación Global & Decodificación Auditiva',
      custom: 'Programa a la Medida / Materiales Auténticos'
    };

    const text = `Hola Clases de Inglés Mty,%0A%0ASolicito una cotización corporativa B2B:%0A• Empresa: ${encodeURIComponent(data.companyName)}%0A• Contacto: ${encodeURIComponent(data.fullName)} (${encodeURIComponent(data.jobTitle)})%0A• Email: ${encodeURIComponent(data.corporateEmail)}%0A• Teléfono: ${encodeURIComponent(data.phoneNumber)}%0A• Colaboradores: ${encodeURIComponent(data.teamSize)}%0A• Modalidad: ${encodeURIComponent(focusMap[data.trainingFocus] || data.trainingFocus)}%0A• Retos: ${encodeURIComponent(data.currentChallenge || 'Capacitación integral')}%0A%0AQuedo a la espera de su propuesta.`;
    return `https://wa.me/528112189877?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 bg-[#FAF9F6] border-b border-[#E7E3DC] relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Comprehensive B2B RFQ Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 border border-[#E7E3DC]">
            <div className="mb-6 pb-4 border-b border-[#E7E3DC]">
              <h3 className="text-xl font-semibold text-[#382F2A] mb-1">
                {t.formTitle}
              </h3>
              <p className="text-xs text-[#7A6F67]">
                {t.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                    {t.fields.fullName} <span className="text-[#7E913C]">*</span>
                  </label>
                  <input
                    id="b2b-contact-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.fields.fullNamePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] placeholder-[#7A6F67]/60 focus:outline-none focus:border-[#7E913C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                    {t.fields.jobTitle} <span className="text-[#7E913C]">*</span>
                  </label>
                  <input
                    id="b2b-contact-jobtitle"
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    placeholder={t.fields.jobTitlePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] placeholder-[#7A6F67]/60 focus:outline-none focus:border-[#7E913C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382F2A] mb-1.5">
                    {t.fields.companyName} <span className="text-[#7E913C]">*</span>
                  </label>
                  <input
                    id="b2b-contact-company"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder={t.fields.companyNamePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] placeholder-[#7A6F67]/60 focus:outline-none focus:border-[#7E913C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                    {t.fields.corporateEmail} <span className="text-[#7E913C]">*</span>
                  </label>
                  <input
                    id="b2b-contact-email"
                    type="email"
                    required
                    value={formData.corporateEmail}
                    onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                    placeholder={t.fields.corporateEmailPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] placeholder-[#7A6F67]/60 focus:outline-none focus:border-[#7E913C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                    {t.fields.phoneNumber} <span className="text-[#7E913C]">*</span>
                  </label>
                  <input
                    id="b2b-contact-phone"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder={t.fields.phoneNumberPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] placeholder-[#7A6F67]/60 focus:outline-none focus:border-[#7E913C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                    {t.fields.teamSize}
                  </label>
                  <select
                    id="b2b-contact-teamsize"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] focus:outline-none focus:border-[#7E913C] transition-colors cursor-pointer"
                  >
                    <option value="1">1 {lang === 'es' ? 'Ejecutivo (Coaching 1 a 1)' : 'Executive (1-on-1 Coaching)'}</option>
                    <option value="2-5">2 a 5 {lang === 'es' ? 'Colaboradores (Micro-cohorte)' : 'Employees (Small Cohort)'}</option>
                    <option value="6-15">6 a 15 {lang === 'es' ? 'Colaboradores (Equipo / Área)' : 'Employees (Department Team)'}</option>
                    <option value="16-50">16 a 50 {lang === 'es' ? 'Colaboradores (Multidepartamental)' : 'Employees (Cross-Department)'}</option>
                    <option value="50+">50+ {lang === 'es' ? 'Colaboradores (Plan Corporativo Integral)' : 'Employees (Enterprise Program)'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                  {t.fields.trainingFocus}
                </label>
                <select
                  id="b2b-contact-focus"
                  value={formData.trainingFocus}
                  onChange={(e) => setFormData({ ...formData, trainingFocus: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] focus:outline-none focus:border-[#7E913C] transition-colors cursor-pointer"
                >
                  <option value="executive">Executive English Coaching (1 a 1 para Líderes y Directivos)</option>
                  <option value="teams">Corporate Group Cohorts (Equipos de Tech, Ventas, Finanzas, Operaciones)</option>
                  <option value="cefr-audit">Auditoría y Evaluación de Nivel CEFR (A1 a C2) para Reclutamiento / RRHH</option>
                  <option value="pronunciation-decoding">Programa Intensivo en Pronunciación y Decodificación Auditiva</option>
                  <option value="custom">Diseño Curricular con Materiales Propios de la Empresa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#382F2A] mb-1.5">
                  {t.fields.currentChallenge}
                </label>
                <textarea
                  id="b2b-contact-challenge"
                  rows={3}
                  value={formData.currentChallenge}
                  onChange={(e) => setFormData({ ...formData, currentChallenge: e.target.value })}
                  placeholder={t.fields.currentChallengePlaceholder}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7E3DC] text-xs sm:text-sm text-[#382F2A] placeholder-[#7A6F67]/60 focus:outline-none focus:border-[#7E913C] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="b2b-contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#382F2A] hover:bg-[#7E913C] disabled:bg-[#7A6F67] text-white py-3.5 px-6 text-xs font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.fields.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#EBF0D8]" />
                      <span>{t.fields.submitButton}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-[#7A6F67] text-center pt-2 font-normal">
                {lang === 'es'
                  ? 'Garantizamos confidencialidad corporativa. Facturación fiscal CFDI 100% deducible.'
                  : 'We guarantee corporate confidentiality. Mexican CFDI deductible tax invoices available.'}
              </p>

            </form>
          </div>

          {/* Right: Direct B2B Contact Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-white p-7 sm:p-8 border border-[#E7E3DC] space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7E913C]">
                <ShieldCheck className="w-4 h-4 text-[#7E913C]" />
                <span>{t.directChannels.title}</span>
              </div>

              {/* Direct Phone */}
              <div className="p-4 bg-[#FAF9F6] border border-[#E7E3DC]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#7A6F67]">{t.directChannels.phoneLabel}</span>
                  <span className="text-[11px] font-semibold text-[#7E913C] bg-[#F4F7EA] border border-[#D5DFC0] px-2 py-0.5">
                    Línea Directa
                  </span>
                </div>
                <a
                  id="direct-phone-call-card"
                  href={`tel:${SITE_INFO.phone}`}
                  className="text-xl font-semibold text-[#382F2A] hover:text-[#7E913C] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#7E913C]" />
                  <span>+52 811 218 9877</span>
                </a>
                <p className="text-xs text-[#7A6F67] mt-1 font-normal">{t.directChannels.phoneNote}</p>
              </div>

              {/* WhatsApp direct */}
              <div className="p-4 bg-[#FAF9F6] border border-[#E7E3DC]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#7A6F67]">{t.directChannels.whatsappLabel}</span>
                  <span className="text-[11px] font-semibold text-[#7E913C] bg-[#F4F7EA] px-2 py-0.5 border border-[#D5DFC0]">
                    Respuesta Inmediata
                  </span>
                </div>
                <a
                  id="direct-whatsapp-card-btn"
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-[#7E913C] bg-[#F4F7EA] hover:bg-[#EBF0D8] text-[#382F2A] text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#7E913C]" />
                  <span>{t.directChannels.whatsappAction}</span>
                </a>
              </div>

              {/* Headquarters & Coverage */}
              <div className="space-y-3 pt-4 text-xs border-t border-[#E7E3DC]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7E913C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#7A6F67] block mb-0.5">{t.directChannels.hqLabel}</span>
                    <span className="text-[#382F2A] font-medium">{SITE_INFO.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#7E913C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#7A6F67] block mb-0.5">{t.directChannels.coverageLabel}</span>
                    <span className="text-[#382F2A] font-medium">{t.directChannels.coverageValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#7E913C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#7A6F67] block mb-0.5">{t.directChannels.hoursLabel}</span>
                    <span className="text-[#382F2A] font-medium">{t.directChannels.hoursValue}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Advisory note */}
            <div className="p-4 bg-[#F4F7EA] border border-[#D5DFC0] text-xs text-[#382F2A] space-y-1">
              <span className="font-semibold text-xs text-[#7E913C] block">
                {lang === 'es' ? 'Atención B2B Especializada' : 'Dedicated B2B Advisory'}
              </span>
              <p className="text-xs text-[#645850] leading-relaxed font-normal">
                {lang === 'es'
                  ? 'Cada solicitud es atendida directamente por un director pedagógico certificado para diseñar la propuesta técnica correspondiente.'
                  : 'Every enterprise request is reviewed directly by a certified academic director.'}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Success Modal upon Form Submission */}
      {submitted && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#382F2A]/60 backdrop-blur-xs">
          <div className="bg-white border border-[#E7E3DC] max-w-lg w-full p-7 text-left space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 text-[#7E913C]">
              <div className="p-2 bg-[#F4F7EA] border border-[#D5DFC0]">
                <CheckCircle2 className="w-5 h-5 text-[#7E913C]" />
              </div>
              <h4 className="text-xl font-semibold text-[#382F2A]">
                {t.successModal.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#645850] leading-relaxed font-normal">
              {t.successModal.message}
            </p>

            <div className="p-4 bg-[#FAF9F6] border border-[#E7E3DC] text-xs text-[#382F2A] space-y-1">
              <div><strong className="text-[#382F2A]">Empresa:</strong> {submittedData.companyName}</div>
              <div><strong className="text-[#382F2A]">Contacto:</strong> {submittedData.fullName} ({submittedData.jobTitle})</div>
              <div><strong className="text-[#382F2A]">Colaboradores:</strong> {submittedData.teamSize} personas</div>
            </div>

            <div className="border-t border-[#E7E3DC] pt-4 space-y-3">
              <p className="text-xs text-[#7A6F67]">
                {t.successModal.whatsappAlternative}
              </p>

              <a
                id="modal-continue-whatsapp-btn"
                href={generateWhatsAppLink(submittedData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#382F2A] hover:bg-[#7E913C] text-white text-xs font-semibold tracking-wide uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#EBF0D8]" />
                <span>{t.successModal.whatsappBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#EBF0D8]" />
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-2.5 px-4 border border-[#E7E3DC] bg-white hover:bg-[#FAF9F6] text-[#382F2A] text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
              >
                {t.successModal.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
