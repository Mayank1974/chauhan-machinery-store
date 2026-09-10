import React from 'react';
import { MessageSquare } from 'lucide-react';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = generateGeneralWhatsAppLink();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Tooltip text badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-slate-100 text-xs font-bold py-2 px-3.5 rounded-full border border-emerald-500/40 shadow-xl hover:border-emerald-400 transition-all hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Need Price List? Chat on WhatsApp</span>
      </a>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative border-2 border-emerald-300/40"
        aria-label="Contact Chauhan Machinery Store on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        
        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-slate-950"></span>
        </span>
      </a>
    </div>
  );
};
