import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CATEGORIES } from '../data/products';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = generateGeneralWhatsAppLink();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Store Branding & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-50 border-2 border-amber-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-100 tracking-tight">
                  CHAUHAN <span className="text-amber-500">MACHINERY</span>
                </h3>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Flour Mill Dealer • Bhiwani
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Authorized seller & dealer for domestic atta chakki machines, commercial mini mills, wet grinder combos, heavy duty floor mills, and dust-free commercial flour mills in Bhiwani, Haryana.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-3.5 rounded-lg shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Product Catalogue</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>About Chauhan Machinery Store</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Contact & Store Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Machine Categories */}
          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Machinery Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`} 
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Contact & Hours
            </h4>

            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneNumber}`} className="hover:underline font-bold text-slate-100">
                  {SITE_CONFIG.phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Store Timings:</div>
                  <div className="text-[11px] text-slate-400">Mon–Sat: 9:00 AM – 8:00 PM</div>
                  <div className="text-[11px] text-slate-400">Sunday: Open by Appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Chauhan Machinery Store. All rights reserved.</p>
          <p>Naya Bazar, Bhiwani, Haryana 127021 • Quality Flour Mill Machinery</p>
        </div>

      </div>
    </footer>
  );
};
