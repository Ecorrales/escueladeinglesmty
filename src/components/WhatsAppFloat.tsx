import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/content';

interface WhatsAppFloatProps {
  lang: Language;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="bg-white border border-[#E7E3DC] text-[#382F2A] text-xs py-2.5 px-3.5 shadow-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#7E913C] shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-xs text-[#382F2A]">
              {lang === 'es' ? '¿Cotización Inmediata?' : 'Instant B2B Quote?'}
            </span>
            <span className="text-xs text-[#645850] font-normal">
              {lang === 'es' ? 'WhatsApp directo con un director académico' : 'Direct WhatsApp with an academic director'}
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#7A6F67] hover:text-[#382F2A] p-0.5 cursor-pointer ml-1"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-action-btn"
        href={SITE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#7E913C] hover:bg-[#382F2A] text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
        aria-label="Contactar por WhatsApp a Clases de Inglés Mty"
      >
        <MessageSquare className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};
