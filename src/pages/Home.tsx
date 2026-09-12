import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck, Award, MapPin, CheckCircle2, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { TrustBadges } from '../components/TrustBadges';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const whatsappUrl = generateGeneralWhatsAppLink();

  return (
    <div className="space-y-8 sm:space-y-16 pb-12 sm:pb-16 bg-slate-50">
      <SEOHead 
        title="Flour Mill & Atta Chakki Machines Dealer in Bhiwani"
        description="Chauhan Machinery Store Naya Bazar Bhiwani. Premier dealer for domestic atta chakkis, commercial mini mills, heavy duty flour mills & dust-free commercial mills in Haryana."
      />

      {/* Hero Section - Compact Mobile Responsive */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-10 sm:pb-16 bg-gradient-to-b from-amber-100/70 via-amber-50/50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              
              {/* Top Tagline Pill */}
              <div className="inline-flex items-center gap-1.5 bg-white border border-amber-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold text-amber-800 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">Naya Bazar, Bhiwani • Haryana's Trusted Dealer</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-snug">
                Heavy Duty <span className="text-amber-600">Flour Mill & Atta Chakki</span> Machines
              </h1>

              {/* Subheadline */}
              <p className="text-slate-700 text-xs sm:text-base max-w-2xl mx-auto lg:mx-0 font-medium leading-normal">
                Authorized dealer selling genuine domestic cabinet mills, tabletop commercial mini mills, wet grinder combos, and ISO 9001 certified dust-free commercial flour mills with 100% pure copper motor guarantee.
              </p>

              {/* Primary Hero CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2.5 px-5 sm:py-3.5 sm:px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Enquire Price on WhatsApp</span>
                </a>

                <Link
                  to="/products"
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold py-2.5 px-5 sm:py-3.5 sm:px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-slate-300 shadow-sm transition-all"
                >
                  <span>Explore Catalogue ({PRODUCTS.length} Models)</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </Link>
              </div>

              {/* Trust Micro-Bullets */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs text-slate-800 font-bold max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>ISI Marked Motors</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Copper Winding</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Doorstep Bhiwani Service</span>
                </div>
              </div>

            </div>

            {/* Right Hero Product Photo Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-white border border-amber-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md overflow-hidden group">
                
                {/* Hero Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                    BEST SELLER 2026
                  </div>
                  <span className="text-[11px] text-slate-600 font-bold">Atta Chakki Bhiwani</span>
                </div>

                {/* Hero Product Photo */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center justify-center h-44 sm:h-64 relative overflow-hidden">
                  <img 
                    src="/images/products/signature-series.jpg" 
                    alt="Signature Series Domestic Flour Mill" 
                    className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* Hero Machine Caption */}
                <div className="mt-3 text-center">
                  <h3 className="text-xs sm:text-base font-bold text-slate-900">Signature Series Domestic Flour Mill</h3>
                  <p className="text-[11px] sm:text-xs text-amber-700 font-extrabold mt-0.5">Price on request via WhatsApp</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <span className="text-amber-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">Top Picks</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">
              Featured Atta Mill Machines
            </h2>
            <p className="text-slate-600 text-[11px] sm:text-xs mt-0.5">
              Most requested models in Bhiwani for home kitchens, shops, and dhabas.
            </p>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-bold py-2 px-3 rounded-lg border border-slate-200 shadow-sm mt-2 sm:mt-0 transition-colors"
          >
            <span>See All {PRODUCTS.length} Machines</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust Badges Bar (Quality & Assurance) */}
      <TrustBadges />


      {/* Store Advantage Feature Box */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50/60 border border-amber-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="bg-amber-100 text-amber-800 font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-amber-200 uppercase tracking-wider">
                Direct Store Advantage
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900">
                Why Buy From Chauhan Machinery Store in Naya Bazar?
              </h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                When buying a flour mill machine, after-sales service and genuine motor winding matter most. Unlike online portals, we provide face-to-face trust in Naya Bazar, Bhiwani with ready stock and original spare parts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <Wrench className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">On-Site Technicians</h4>
                    <p className="text-[10px] text-slate-600">Quick repair & servicing in Bhiwani and nearby villages.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">100% Genuine Copper</h4>
                    <p className="text-[10px] text-slate-600">Guaranteed heavy copper motors with low energy draw.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
              <div className="inline-flex p-2.5 bg-emerald-50 rounded-full border border-emerald-200">
                <MessageSquare className="w-6 h-6 text-emerald-600 fill-emerald-100" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Have Questions About Motor HP?</h3>
              <p className="text-[11px] text-slate-600">
                Talk directly with JP Chauhan on WhatsApp for personalized machine advice.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Location / Google Maps Preview Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-amber-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Visit Store in Bhiwani
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                Chauhan Machinery Store Address
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visit our physical store to inspect machines live in action, touch the cabinet finish, and compare 1 HP vs 2 HP vs 3 HP output before purchasing.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
                <div className="font-bold text-slate-900">{SITE_CONFIG.businessName} (JP Chauhan)</div>
                <div className="text-slate-700 text-[11px]">{SITE_CONFIG.address.fullAddress}</div>
                <div className="text-amber-700 font-bold text-[11px] pt-0.5">Phone: {SITE_CONFIG.phoneNumber}</div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                <span>Get Directions & Price List</span>
              </a>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="lg:col-span-7 h-56 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="Chauhan Machinery Store Naya Bazar Bhiwani Map"
                src={SITE_CONFIG.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
