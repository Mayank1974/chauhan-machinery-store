import React from 'react';

interface Props {
  theme?: string;
  name: string;
  category: string;
  className?: string;
}

export const MachineryIllustration: React.FC<Props> = ({ theme = 'black-gold', category, className = 'w-full h-48 md:h-60' }) => {
  // Render distinct visual designs based on product theme
  return (
    <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-4 select-none ${className}`}>
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Top Spec Tag Overlay */}
      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-brand-wheat border border-slate-700/60 z-10">
        {category}
      </div>

      {/* SVG Graphics customized per machine model */}
      <div className="relative w-full h-full flex items-center justify-center">
        {theme === 'black-gold' && (
          /* Signature Series Cabinet Atta Chakki */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="40" width="100" height="170" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="4" />
            <rect x="58" y="48" width="84" height="110" rx="8" fill="#0F172A" />
            {/* Front Panel Gold Accent */}
            <rect x="66" y="56" width="68" height="60" rx="6" fill="url(#goldGrad)" />
            <circle cx="100" cy="86" r="18" fill="#0F172A" stroke="#FDE68A" strokeWidth="3" />
            <path d="M100 74L100 98M88 86L112 86" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            {/* Wheels */}
            <circle cx="65" cy="216" r="8" fill="#475569" stroke="#94A3B8" strokeWidth="3" />
            <circle cx="135" cy="216" r="8" fill="#475569" stroke="#94A3B8" strokeWidth="3" />
            {/* ISI Badge placeholder graphic */}
            <rect x="75" y="170" width="50" height="18" rx="4" fill="#F59E0B" />
            <text x="100" y="183" fill="#0F172A" fontSize="10" fontWeight="900" textAnchor="middle">ISI MARKED</text>
            <defs>
              <linearGradient id="goldGrad" x1="66" y1="56" x2="134" y2="116" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#78350F" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {theme === 'floral-pink' && (
          /* Floral Printed Cabinet Atta Chakki */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none">
            <rect x="50" y="40" width="100" height="170" rx="12" fill="#1E293B" stroke="#EC4899" strokeWidth="3" />
            {/* Pink/Orange Floral Panel */}
            <rect x="58" y="48" width="84" height="110" rx="8" fill="#831843" />
            <circle cx="100" cy="85" r="22" fill="#BE185D" />
            <circle cx="85" cy="75" r="10" fill="#F43F5E" opacity="0.8" />
            <circle cx="115" cy="75" r="10" fill="#FB923C" opacity="0.8" />
            <circle cx="100" cy="100" r="12" fill="#F472B6" opacity="0.8" />
            <circle cx="100" cy="85" r="6" fill="#FDE68A" />
            {/* Vents */}
            <rect x="68" y="172" width="64" height="4" rx="2" fill="#EC4899" />
            <rect x="68" y="180" width="64" height="4" rx="2" fill="#EC4899" />
            {/* Wheels */}
            <circle cx="65" cy="216" r="8" fill="#334155" stroke="#EC4899" strokeWidth="2" />
            <circle cx="135" cy="216" r="8" fill="#334155" stroke="#EC4899" strokeWidth="2" />
          </svg>
        )}

        {theme === 'rose-pattern' && (
          /* Rose Design 2HP Cabinet Atta Chakki */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none">
            <rect x="48" y="38" width="104" height="174" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="3" />
            <rect x="56" y="46" width="88" height="114" rx="8" fill="#0F172A" />
            {/* Rose Motif Graphic */}
            <path d="M100 65C90 65 82 73 82 85C82 97 100 115 100 115C100 115 118 97 118 85C118 73 110 65 100 65Z" fill="#F43F5E" />
            <circle cx="100" cy="82" r="8" fill="#FDA4AF" />
            {/* 100% Copper Badge */}
            <rect x="65" y="170" width="70" height="20" rx="4" fill="#B45309" />
            <text x="100" y="184" fill="#FEF3C7" fontSize="9" fontWeight="900" textAnchor="middle">100% COPPER 2HP</text>
            {/* Wheels */}
            <circle cx="65" cy="216" r="9" fill="#1E293B" stroke="#CBD5E1" strokeWidth="3" />
            <circle cx="135" cy="216" r="9" fill="#1E293B" stroke="#CBD5E1" strokeWidth="3" />
          </svg>
        )}

        {theme === 'silver-tabletop' && (
          /* Tabletop Stainless Steel Mini Mill */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none">
            {/* Stainless Funnel Loading Top */}
            <path d="M60 40L140 40L115 80L85 80Z" fill="url(#ssGrad)" stroke="#CBD5E1" strokeWidth="2" />
            {/* Body */}
            <rect x="55" y="80" width="90" height="110" rx="8" fill="url(#ssGradBody)" stroke="#94A3B8" strokeWidth="3" />
            <circle cx="100" cy="130" r="22" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" />
            <path d="M100 118V142M88 130H112" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
            {/* Base */}
            <rect x="45" y="190" width="110" height="16" rx="4" fill="#334155" stroke="#64748B" strokeWidth="2" />
            {/* Power Switch */}
            <circle cx="125" cy="165" r="5" fill="#EF4444" />
            <defs>
              <linearGradient id="ssGrad" x1="60" y1="40" x2="140" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E2E8F0" />
                <stop offset="1" stopColor="#94A3B8" />
              </linearGradient>
              <linearGradient id="ssGradBody" x1="55" y1="80" x2="145" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CBD5E1" />
                <stop offset="0.5" stopColor="#F8FAFC" />
                <stop offset="1" stopColor="#64748B" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {theme === 'stainless-combo' && (
          /* Wet Grinder & Flour Mill Combo Unit */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none">
            {/* Large SS Funnel Hopper */}
            <path d="M50 30L150 30L125 75L75 75Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
            <rect x="70" y="75" width="60" height="25" fill="#64748B" />
            {/* Main Grinding Chamber */}
            <rect x="50" y="100" width="100" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="3" />
            <circle cx="100" cy="145" r="24" fill="#0F172A" stroke="#10B981" strokeWidth="3" />
            <path d="M90 145L110 145M100 135L100 155" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
            {/* Wheeled Base Frame */}
            <rect x="40" y="190" width="120" height="12" rx="3" fill="#334155" />
            <circle cx="55" cy="212" r="8" fill="#0F172A" stroke="#64748B" strokeWidth="3" />
            <circle cx="145" cy="212" r="8" fill="#0F172A" stroke="#64748B" strokeWidth="3" />
          </svg>
        )}

        {theme === 'industrial-red' && (
          /* 3HP Heavy Duty Industrial Floor Standing Mill */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none">
            {/* Heavy Stainless Steel Hopper */}
            <path d="M40 25L160 25L130 70L70 70Z" fill="#E2E8F0" stroke="#DC2626" strokeWidth="3" />
            {/* Heavy Industrial Frame */}
            <rect x="65" y="70" width="70" height="75" fill="#B91C1C" stroke="#991B1B" strokeWidth="2" />
            <circle cx="100" cy="108" r="20" fill="#450A0A" stroke="#FDE68A" strokeWidth="3" />
            {/* Outlet Drum */}
            <rect x="60" y="145" width="80" height="45" rx="6" fill="#334155" stroke="#E2E8F0" strokeWidth="2" />
            {/* Heavy Stand legs */}
            <path d="M50 190L40 225M150 190L160 225" stroke="#991B1B" strokeWidth="6" strokeLinecap="round" />
            <text x="100" y="172" fill="#FDE68A" fontSize="10" fontWeight="900" textAnchor="middle">ATTA MAKER 3HP</text>
          </svg>
        )}

        {theme === 'dustfree-blue' && (
          /* Bag-Filter Dust-Free Commercial Flour Mill */
          <svg className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 200 240" fill="none">
            {/* Main Machine Body */}
            <rect x="40" y="60" width="80" height="125" rx="8" fill="#1E293B" stroke="#0EA5E9" strokeWidth="3" />
            <circle cx="80" cy="115" r="20" fill="#0F172A" stroke="#0EA5E9" strokeWidth="3" />
            {/* Dust Collection Bag Filter Column */}
            <rect x="130" y="35" width="35" height="120" rx="16" fill="#F8FAFC" stroke="#0EA5E9" strokeWidth="3" />
            {/* Dust Bag Ribs */}
            <line x1="130" y1="65" x2="165" y2="65" stroke="#94A3B8" strokeWidth="2" />
            <line x1="130" y1="95" x2="165" y2="95" stroke="#94A3B8" strokeWidth="2" />
            <line x1="130" y1="125" x2="165" y2="125" stroke="#94A3B8" strokeWidth="2" />
            {/* Dust Bin Bottom */}
            <rect x="125" y="155" width="45" height="30" rx="4" fill="#0284C7" />
            {/* ISO 9001 Badge Graphic */}
            <rect x="50" y="152" width="60" height="16" rx="3" fill="#0EA5E9" />
            <text x="80" y="164" fill="#FFFFFF" fontSize="8" fontWeight="900" textAnchor="middle">ISO 9001</text>
            {/* Wheels */}
            <circle cx="55" cy="195" r="7" fill="#334155" stroke="#0EA5E9" strokeWidth="2" />
            <circle cx="105" cy="195" r="7" fill="#334155" stroke="#0EA5E9" strokeWidth="2" />
            <circle cx="148" cy="195" r="7" fill="#334155" stroke="#0EA5E9" strokeWidth="2" />
          </svg>
        )}
      </div>

      {/* Decorative subtle brand watermark */}
      <div className="absolute bottom-2 right-3 text-[9px] font-bold text-slate-500/60 uppercase tracking-widest pointer-events-none">
        Chauhan Machinery Bhiwani
      </div>
    </div>
  );
};
