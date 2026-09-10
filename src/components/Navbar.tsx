import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone, MapPin, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products / Catalogue', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  const whatsappUrl = generateGeneralWhatsAppLink();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top Announcement Bar - Compact on Mobile */}
      <div className="bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 truncate">
            <span className="bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded text-[9px] uppercase font-black shrink-0">Dealer</span>
            <span className="truncate text-[10px] sm:text-xs">Flour Mill & Atta Chakki Specialist • Bhiwani</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[10px] sm:text-xs font-semibold text-slate-300">
            <a href={`tel:${SITE_CONFIG.phoneNumber}`} className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{SITE_CONFIG.phoneNumber}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{SITE_CONFIG.address.landmark}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Compact height */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18">
          
          {/* Logo Area - Compact on Mobile */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-50 border-2 border-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-extrabold tracking-tight text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                CHAUHAN <span className="text-amber-600">MACHINERY</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-none mt-0.5">
                Naya Bazar, Bhiwani
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Header CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Catalogue</span>
            </a>
          </div>

          {/* Mobile Hamburger & WhatsApp Toggle Buttons */}
          <div className="lg:hidden flex items-center gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-lg flex items-center justify-center text-xs font-bold shadow-sm"
              aria-label="WhatsApp quick chat"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-3 pt-2 pb-4 space-y-2 animate-fadeIn shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-amber-50 text-amber-700 border-l-4 border-amber-600'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneNumber}`}
              className="w-full bg-slate-100 text-slate-800 font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call JP Chauhan: {SITE_CONFIG.phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
