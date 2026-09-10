import React from 'react';
import { ShieldCheck, Zap, Clock, Wrench } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const trustItems = [
    {
      icon: Clock,
      title: "40+ Years Legacy",
      subtitle: "Serving Bhiwani & Haryana since 1980 with trust and integrity."
    },
    {
      icon: ShieldCheck,
      title: "ISI & ISO Certified",
      subtitle: "100% genuine industrial and domestic quality tested machines."
    },
    {
      icon: Zap,
      title: "100% Copper Motors",
      subtitle: "High torque pure copper winding motors built for heavy duty life."
    },
    {
      icon: Wrench,
      title: "Local On-Site Support",
      subtitle: "Original spare parts & expert doorstep service technician support."
    }
  ];

  return (
    <section className="py-6 sm:py-12 bg-amber-50/60 border-y border-amber-100/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <span className="text-amber-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200">
            Why Customers Trust Us
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1.5">
            Quality & Assurance You Can Count On
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Direct authorized machinery dealer in Naya Bazar, Bhiwani. No cheap counterfeits, only high performance flour mill machinery.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-amber-400 shadow-sm transition-all group"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-amber-100 text-amber-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform border border-amber-200">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-700" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-600 mt-1 leading-tight sm:leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
