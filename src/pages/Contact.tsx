import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, HelpCircle, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CATEGORIES } from '../data/products';
import { generateGeneralWhatsAppLink, formatFormToWhatsAppLink } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number.");
      return;
    }
    const whatsappLink = formatFormToWhatsAppLink(formData);
    window.open(whatsappLink, '_blank');
  };

  const faqs = [
    {
      q: "Which flour mill machine should I choose for home use?",
      a: "For general family home use, our 1.0 HP or 1.25 HP Domestic Atta Chakki (like the Signature Series or Floral Design) is ideal. It grinds 8-10 kg per hour with minimal noise and low power consumption."
    },
    {
      q: "Is 100% Copper Winding motor really provided?",
      a: "Yes! At Chauhan Machinery Store, all our domestic and commercial machines carry pure copper motor winding guarantee, offering high torque and long motor life under Indian voltage conditions."
    },
    {
      q: "Do you offer doorstep delivery & after-sales service in Bhiwani?",
      a: "Yes, we provide local doorstep delivery, installation guidance, and on-site servicing across Bhiwani city and nearby towns in Haryana."
    },
    {
      q: "What is the difference between standard and Bag-Filter Dust-Free Commercial Mills?",
      a: "The Dust-Free Commercial Mill includes a vertical cloth bag filter tower and sealed bin that captures 99.9% of airborne flour dust, keeping your shop or bakery space clean and hygienic."
    }
  ];

  const generalWhatsappUrl = generateGeneralWhatsAppLink();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
      <SEOHead 
        title="Contact Us & Store Location Bhiwani"
        description="Contact Chauhan Machinery Store in Naya Bazar, Bhiwani, Haryana. Get instant price list and machine details on WhatsApp or phone call."
      />

      {/* Page Header */}
      <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-sm text-center max-w-4xl mx-auto space-y-4">
        <span className="bg-amber-50 text-amber-800 font-bold text-xs px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
          Store Contact & Enquiry
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Get in Touch With Us
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Have a question about machinery specs, live price quotes, or store directions in Naya Bazar, Bhiwani? Reach out via WhatsApp or phone call!
        </p>

        {/* Primary Contact CTA Bar */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl flex items-center gap-2 shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp Directly</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phoneNumber}`}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-3.5 px-6 rounded-xl flex items-center gap-2 border border-slate-200 transition-all"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span>Call: {SITE_CONFIG.phoneNumber}</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: WhatsApp Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">Quick Inquiry Form</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Send Enquiry to WhatsApp</h2>
            <p className="text-xs text-slate-600 mt-1">
              Fill in your details below and click Submit to automatically launch a pre-filled WhatsApp message to our store.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Phone / Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 98120XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Machine Category Interested In</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600 text-sm"
              >
                <option value="">-- Select Category --</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Your Message / Requirement</label>
              <textarea
                rows={4}
                placeholder="e.g. I need a 2 HP domestic chakki machine for home use in Bhiwani. Please share price and warranty details."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-600 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Submit & Open Pre-Filled WhatsApp Chat</span>
            </button>
          </form>
        </div>

        {/* Right Column: Contact Details Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">Store Contact Information</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center shrink-0 text-amber-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-medium">Store Address</span>
                  <span className="text-slate-900 font-bold block">{SITE_CONFIG.businessName}</span>
                  <span className="text-slate-600 text-xs">{SITE_CONFIG.address.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center shrink-0 text-amber-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-medium">Phone & WhatsApp</span>
                  <a href={`tel:${SITE_CONFIG.phoneNumber}`} className="text-amber-700 font-bold hover:underline block">
                    {SITE_CONFIG.phoneNumber}
                  </a>
                  <span className="text-slate-500 text-xs">Alt: {SITE_CONFIG.alternatePhone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center shrink-0 text-amber-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-medium">Email Address</span>
                  <span className="text-slate-800 font-semibold">{SITE_CONFIG.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center shrink-0 text-amber-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-medium">Business Hours</span>
                  <span className="text-slate-900 font-bold block">Mon–Sat: 9:00 AM – 8:00 PM</span>
                  <span className="text-slate-500 text-xs">Sunday: Open by Appointment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50/80 rounded-3xl border border-amber-200 p-6 text-center space-y-2 shadow-sm">
            <Shield className="w-9 h-9 text-amber-700 mx-auto" />
            <h4 className="text-sm font-bold text-slate-900">Quality Certified Store</h4>
            <p className="text-xs text-slate-600">All machines sold are pre-inspected and tested before dispatch to guarantee 100% customer satisfaction.</p>
          </div>

        </div>

      </div>

      {/* Google Maps Location Embed */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Find Store on Google Maps</h3>
            <p className="text-xs text-slate-500">Located in Naya Bazar, near main Grain Market, Bhiwani, Haryana 127021</p>
          </div>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
          >
            <span>Ask Directions on WhatsApp</span>
          </a>
        </div>

        <div className="h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
          <iframe
            title="Chauhan Machinery Store Map Location"
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

      {/* FAQs Accordion Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-600" />
          <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-700 border-t border-slate-200 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
