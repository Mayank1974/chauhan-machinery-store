import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { ProductCategory } from '../types/product';

interface Props {
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  productCount: number;
}

export const CategoryFilter: React.FC<Props> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  productCount
}) => {
  return (
    <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm space-y-3">
      {/* Top Bar: Search Input */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, HP, motor, SS body..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2 sm:py-2.5 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center justify-between sm:justify-end gap-2 text-[11px] sm:text-xs text-slate-600 px-1">
          <span className="flex items-center gap-1 font-bold text-slate-700">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            Filter
          </span>
          <span className="bg-amber-50 text-amber-700 font-extrabold px-2 py-0.5 rounded-full border border-amber-200 text-[10px] sm:text-xs">
            {productCount} {productCount === 1 ? 'Machine' : 'Machines'} Found
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
          }`}
        >
          All ({CATEGORIES.length + 3})
        </button>

        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.shortName}
            </button>
          );
        })}
      </div>
    </div>
  );
};
