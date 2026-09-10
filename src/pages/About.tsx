import React from 'react';
import { MapPin, CheckCircle2, MessageSquare, Phone, Store, UserCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

export const About: React.FC = () => {
  const whatsappUrl = generateGeneralWhatsAppLink();

  const values = [
    {
      title: "100% Genuine Copper Winding",
      desc: "We strictly verify every motor before dispatch. No cheap aluminum winding labeled as copper. Pure high-torque heavy copper motors guaranteed."
    },
    {
      title: "Honest Motor HP Advice",
      desc: "JP Chauhan personally guides you transparently on whether your household or business requires 1 HP, 1.5 HP, 2 HP, or 3 HP so you don't overpay."
    },
    {
      title: "Local Bhiwani After-Sales Service",
      desc: "Being located in Naya Bazar, Bhiwani, our technicians provide prompt doorstep warranty support and genuine spare parts replacement."
    },
    {
      title: "Certified & ISI/ISO Quality",
      desc: "Our domestic cabinet chakkis and dust-free commercial mills hold certified quality standards for safety, hygiene, and low noise."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
      <SEOHead 
        title="About Chauhan Machinery Store Bhiwani | JP Chauhan"
        description="Learn about Chauhan Machinery Store founded by JP Chauhan in Naya Bazar, Bhiwani, Haryana. Serving since 1980 with genuine ISI & ISO certified flour mill machinery."
      />

      {/* Hero Banner */}
      <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-sm text-center max-w-4xl mx-auto space-y-4">
        <span className="bg-amber-50 text-amber-800 font-bold text-xs px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
          Managed by JP Chauhan • Over 40 Years of Trust
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Chauhan Machinery Store
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Naya Bazar, Bhiwani, Haryana's premier dealer for high-performance domestic Atta Chakkis, tabletop mini mills, wet grinders, heavy duty floor mills, and dust-free commercial flour machinery.
        </p>
      </div>

      {/* Main Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Store className="w-4 h-4" />
            <span>Our Local Legacy in Bhiwani</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Delivering Fresh Health & Heavy Machinery Reliability
          </h2>

          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Established in Naya Bazar, Bhiwani by **JP Chauhan**, **Chauhan Machinery Store** has grown to become the most trusted destination for households, flour shop owners, dhabas, and caterers looking for durable flour milling equipment.
          </p>

          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Under JP Chauhan's expert leadership, every machine in our shop is selected for heavy-gauge metal body construction, cold-forged stainless steel grinding stones/cutters, and power-efficient motor performance.
          </p>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Connect With JP Chauhan on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Owner Profile Box */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
            <div className="w-14 h-14 bg-amber-50 border-2 border-amber-500 rounded-2xl flex items-center justify-center text-amber-700">
              <UserCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">JP Chauhan</h3>
              <p className="text-xs text-amber-800 font-bold">Founder & Proprietor</p>
              <p className="text-xs text-slate-500 font-semibold">Call/WhatsApp: {SITE_CONFIG.phoneNumber}</p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <p className="text-xs text-slate-700 leading-relaxed">
              "We treat every customer like family. Whether you are buying a small domestic chakki for your home kitchen or setting up a 3 HP commercial mill in Bhiwani, we guarantee 100% genuine copper winding and direct after-sales service."
            </p>
            <p className="text-[11px] font-bold text-slate-900 text-right">— JP Chauhan</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs pt-2">
            <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-center">
              <span className="text-amber-800 font-extrabold text-lg block">40+</span>
              <span className="text-slate-700 text-[11px]">Years Experience</span>
            </div>
            <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-center">
              <span className="text-amber-800 font-extrabold text-lg block">10,000+</span>
              <span className="text-slate-700 text-[11px]">Satisfied Customers</span>
            </div>
          </div>
        </div>

      </div>

      {/* Core Customer Promises */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900">Our Customer Commitments</h2>
          <p className="text-slate-600 text-xs mt-1">Why customers across Bhiwani district trust JP Chauhan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                <h3>{v.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Store Location Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase">
            <MapPin className="w-4 h-4" />
            <span>Store Address & Proprietor</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{SITE_CONFIG.businessName} (JP Chauhan)</h3>
          <p className="text-xs text-slate-700">{SITE_CONFIG.address.fullAddress}</p>
          <p className="text-xs text-amber-800 font-semibold">Call / WhatsApp: {SITE_CONFIG.phoneNumber}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phoneNumber}`}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 border border-slate-200"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span>Call JP Chauhan</span>
          </a>
        </div>
      </div>

    </div>
  );
};
