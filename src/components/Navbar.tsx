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
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-100 px-4 py-2 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-[10px] uppercase font-black">Authorized Dealer</span>
            <span>Flour Mill & Atta Chakki Machines in Naya Bazar, Bhiwani</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-300">
            <a href={`tel:${SITE_CONFIG.phoneNumber}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Call: {SITE_CONFIG.phoneNumber}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{SITE_CONFIG.address.landmark}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-amber-50 border-2 border-amber-500 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                CHAUHAN <span className="text-amber-600">MACHINERY</span>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Store • Naya Bazar, Bhiwani
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4.5 rounded-xl flex items-center gap-2 shadow-md hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Catalogue</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2.5 rounded-lg flex items-center justify-center text-xs font-bold"
              aria-label="WhatsApp quick chat"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn shadow-xl">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-amber-50 text-amber-700 border-l-4 border-amber-600'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneNumber}`}
              className="w-full bg-slate-100 text-slate-800 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Shop: {SITE_CONFIG.phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
