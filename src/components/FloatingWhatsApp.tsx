import React from 'react';
import { MessageSquare } from 'lucide-react';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = generateGeneralWhatsAppLink();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5">
      {/* Tooltip text badge (Desktop only) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-slate-900/95 backdrop-blur-md text-white text-xs font-bold py-2 px-3.5 rounded-full border border-emerald-500/40 shadow-lg hover:border-emerald-400 transition-all hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Need Price List? Chat on WhatsApp</span>
      </a>

      {/* Compact Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-13 sm:h-13 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative border-2 border-emerald-300/40"
        aria-label="Contact Chauhan Machinery Store on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        
        {/* Pulse ring indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-slate-950"></span>
        </span>
      </a>
    </div>
  );
};
