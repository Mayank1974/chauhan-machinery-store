import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../types/product';
import { generateProductWhatsAppLink } from '../utils/whatsapp';
import { MachineryIllustration } from './MachineryIllustration';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const whatsappUrl = generateProductWhatsAppLink(product.name, product.hp);

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-amber-500/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Product Image / Visual Showcase - Compact on mobile */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-slate-50 border-b border-slate-100 p-2 sm:p-4 h-40 sm:h-56 flex items-center justify-center">
        
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={`${product.name} ${product.hp}`}
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <MachineryIllustration 
            theme={product.visualTheme} 
            name={product.name}
            category={product.categoryName}
            className="w-full h-full"
          />
        )}

        {/* Top Category Tag */}
        <div className="absolute top-2 left-2 bg-slate-900/90 text-amber-400 px-2 py-0.5 rounded text-[9px] uppercase font-extrabold tracking-wider shadow-sm">
          {product.categoryName}
        </div>

        {/* HP Badge Overlay */}
        <div className="absolute bottom-2 right-2 bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wide flex items-center gap-1 shadow-sm">
          <Zap className="w-3 h-3 fill-slate-950" />
          <span>{product.hp}</span>
        </div>
      </Link>

      {/* Card Content - Compact padding */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Badges */}
          <div className="flex flex-wrap gap-1 mb-2">
            {product.badges.slice(0, 3).map((badge, idx) => (
              <span 
                key={idx} 
                className="bg-amber-50 text-amber-800 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded border border-amber-200/80 flex items-center gap-0.5"
              >
                <ShieldCheck className="w-2.5 h-2.5 text-amber-600" />
                {badge}
              </span>
            ))}
          </div>

          {/* Title */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-amber-600 transition-colors">
            <h3 className="text-xs sm:text-base font-bold text-slate-900 leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-slate-600 text-[11px] sm:text-xs mt-1 sm:mt-1.5 line-clamp-2 leading-tight">
            {product.shortDescription}
          </p>

          {/* Key Specs List */}
          <div className="mt-2 py-1.5 border-y border-slate-100 space-y-0.5 text-[11px] sm:text-xs text-slate-700">
            <div className="flex justify-between">
              <span className="text-slate-500">Material:</span>
              <span className="font-semibold text-slate-900 truncate max-w-[130px] sm:max-w-[170px] text-right">{product.bodyMaterial}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Feature:</span>
              <span className="font-semibold text-amber-700 truncate max-w-[130px] sm:max-w-[170px] text-right">{product.specialFeature}</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Price & WhatsApp Action */}
        <div className="mt-2.5 pt-1">
          <div className="flex items-center justify-between mb-2 text-[10px] sm:text-xs">
            <span className="text-slate-500 font-medium">Pricing:</span>
            <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[10px] sm:text-xs">
              {product.pricePlaceholder}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded-lg text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-colors shadow-sm"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <Link
              to={`/product/${product.id}`}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 px-2 rounded-lg text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-colors border border-slate-200"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3 text-amber-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
