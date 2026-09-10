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
    <section className="py-12 bg-amber-50/60 border-y border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-wider bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
            Why Customers Trust Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            Quality & Assurance You Can Count On
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Direct authorized machinery dealer in Naya Bazar, Bhiwani. No cheap counterfeits, only high performance flour mill machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-amber-200">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
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
