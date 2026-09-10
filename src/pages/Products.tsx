import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, RefreshCw, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCategory } from '../types/product';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Keep state in sync with URL search params
  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory;
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: ProductCategory | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  // Filter products by category and text search
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();

    if (!query) return matchesCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.hp.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.bodyMaterial.toLowerCase().includes(query) ||
      product.specialFeature.toLowerCase().includes(query) ||
      product.badges.some(b => b.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const whatsappUrl = generateGeneralWhatsAppLink("Hi Chauhan Machinery Store, please send me the complete product catalogue with latest prices.");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEOHead 
        title="Atta Chakki Machine Catalogue & Price List"
        description="Browse domestic flour mill machines, tabletop mini mills, wet grinder combos, heavy duty 3HP floor mills, and dust-free commercial mills in Bhiwani."
      />

      {/* Page Header */}
      <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="bg-amber-50 text-amber-800 font-bold text-xs px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
            Machinery Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Flour Mill & Atta Chakki Machines
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            All machines feature 100% copper winding motors, heavy-duty build quality, and local Bhiwani warranty support. Select any model to enquire live price on WhatsApp.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 px-5 rounded-xl shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Download Full Catalogue PDF / WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        productCount={filteredProducts.length}
      />

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-md mx-auto my-12 shadow-sm">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-600 border border-amber-200">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No Machines Match Your Search</h3>
          <p className="text-xs text-slate-600">
            Try adjusting your search keywords or switching category filters to see available models.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              searchParams.delete('category');
              setSearchParams(searchParams);
            }}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-amber-700 font-bold text-xs py-2.5 px-4 rounded-xl border border-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Bottom WhatsApp Help Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-3 shadow-sm">
        <h3 className="text-base font-bold text-slate-900">Need Custom Motor Specifications or Bulk Order?</h3>
        <p className="text-xs text-slate-600 max-w-xl mx-auto">
          We supply customized commercial flour mills for dhabas, hotels, and retail store setups across Bhiwani & Haryana.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Ask Custom Machine Requirement on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
