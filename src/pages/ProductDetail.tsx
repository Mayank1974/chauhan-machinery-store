import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowLeft, ShieldCheck, Zap, Phone, MapPin } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { generateProductWhatsAppLink } from '../utils/whatsapp';
import { MachineryIllustration } from '../components/MachineryIllustration';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { SITE_CONFIG } from '../config/siteConfig';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Machine Model Not Found</h2>
        <p className="text-slate-600 text-sm">The machine specification page you requested does not exist or has been updated.</p>
        <Link to="/products" className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>
    );
  }

  const whatsappUrl = generateProductWhatsAppLink(product.name, product.hp);
  
  // Find related products in same category or general catalogue excluding current
  const relatedProducts = PRODUCTS
    .filter((p) => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead 
        title={`${product.name} (${product.hp})`}
        description={`Specifications and price inquiry for ${product.name} with ${product.hp} motor. Authorized dealer Chauhan Machinery Store in Naya Bazar Bhiwani.`}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 border-b border-slate-200/80 pb-4">
        <Link to="/" className="hover:text-slate-900">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-slate-900">Catalogue</Link>
        <span>/</span>
        <span className="text-amber-700 font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-amber-600" />
          <span>Back to Catalogue</span>
        </button>
      </div>

      {/* Main Product Specs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Real Product Photo / Illustration */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl h-80 sm:h-96 flex items-center justify-center p-4 overflow-hidden relative">
            {product.image && !imageError ? (
              <img
                src={product.image}
                alt={product.name}
                onError={() => setImageError(true)}
                className="max-h-full max-w-full object-contain drop-shadow-md"
              />
            ) : (
              <MachineryIllustration 
                theme={product.visualTheme}
                name={product.name}
                category={product.categoryName}
                className="w-full h-full"
              />
            )}
          </div>

          {/* Badges Bar */}
          <div className="flex flex-wrap gap-2 pt-2">
            {product.badges.map((badge, idx) => (
              <span 
                key={idx} 
                className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-lg border border-amber-200 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info & WhatsApp CTA */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <Zap className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              <span>{product.categoryName} • {product.hp}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-semibold">Pricing Status:</span>
              <span className="bg-amber-100 text-amber-900 font-extrabold text-sm px-3 py-1 rounded-lg border border-amber-300">
                {product.pricePlaceholder}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product Overview</h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Specs Highlights */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-slate-500 block">Body Material</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{product.bodyMaterial}</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-slate-500 block">Key Feature</span>
              <span className="font-bold text-amber-700 mt-0.5 block">{product.specialFeature}</span>
            </div>
          </div>

          {/* WhatsApp Primary Call To Action */}
          <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 space-y-3 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-700 font-bold">
              <span>Instant WhatsApp Price Enquiry</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Store Team Active
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2.5 shadow-md transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Enquire Price & Availability on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600 pt-1 font-semibold">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-amber-700" />
                <span>Call Store: {SITE_CONFIG.phoneNumber}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-700" />
                <span>Naya Bazar, Bhiwani</span>
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Detailed Technical Specifications Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Technical Specifications</h2>
            <p className="text-xs text-slate-500">Authentic factory parameters & build details</p>
          </div>
          <span className="bg-slate-100 text-slate-800 font-mono text-xs px-3 py-1 rounded-lg border border-slate-300">
            Model Spec Sheet
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs sm:text-sm">
          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Motor Output / HP:</span>
            <span className="text-slate-900 font-bold">{product.specifications.motorHp}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Motor Winding Type:</span>
            <span className="text-emerald-700 font-bold">{product.specifications.windingType}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Body Casing & Hopper:</span>
            <span className="text-slate-900 font-bold">{product.specifications.bodyMaterial}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Grinding Capacity:</span>
            <span className="text-amber-700 font-bold">{product.specifications.grindingCapacity}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Power Requirement:</span>
            <span className="text-slate-900 font-bold">{product.specifications.powerSource}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Mobility Base:</span>
            <span className="text-slate-900 font-bold">{product.specifications.wheelsMobility || 'Heavy Duty Base'}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Quality Certification:</span>
            <span className="text-slate-900 font-bold">{product.specifications.certification || 'Tested Standard'}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Warranty Coverage:</span>
            <span className="text-slate-900 font-bold">{product.specifications.warranty}</span>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-between py-2.5 border-b border-slate-100 gap-1">
            <span className="text-slate-500 font-medium">Recommended Suitable Uses:</span>
            <span className="text-slate-800 font-semibold text-right">{product.specifications.suitableFor}</span>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900">Related Machine Models</h2>
            <Link to="/products" className="text-amber-700 text-xs font-bold hover:underline">
              View All Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
