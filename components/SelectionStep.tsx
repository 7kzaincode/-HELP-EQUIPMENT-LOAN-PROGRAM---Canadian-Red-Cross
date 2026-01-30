
import React, { useState } from 'react';
import { EQUIPMENT_DATA, TRANSLATIONS } from '../constants';
import { Language, Category, Equipment } from '../types';

interface SelectionStepProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onNext: () => void;
  lang: Language;
}

export const SelectionStep: React.FC<SelectionStepProps> = ({ selectedIds, onToggle, onNext, lang }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const t = (key: string) => TRANSLATIONS[key][lang];

  const categories: Category[] = ['all', 'mobility', 'bathroom', 'bedroom'];

  const renderSection = (titleKey: string, items: Equipment[]) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">{t(titleKey)}</h3>
          <div className="h-px flex-grow bg-gray-200"></div>
          <span className="text-sm font-bold text-gray-400">{items.length} items</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onToggle(item.id)}
              className={`relative flex flex-col items-center p-5 bg-white rounded-3xl shadow-sm border-2 transition-all duration-300 hover:shadow-xl group ${
                selectedIds.includes(item.id) 
                  ? 'border-[#ed1b2e] ring-8 ring-red-50 -translate-y-1' 
                  : 'border-transparent hover:border-gray-100'
              }`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                selectedIds.includes(item.id) ? 'bg-[#ed1b2e] text-white shadow-inner' : 'bg-gray-50 text-gray-300 group-hover:text-gray-400'
              }`}>
                <CategoryIcon category={item.category} />
              </div>
              <h3 className={`text-xs md:text-sm font-black text-center leading-tight transition-colors ${
                selectedIds.includes(item.id) ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {item.name[lang]}
              </h3>
              
              {selectedIds.includes(item.id) && (
                <div className="absolute top-3 right-3 text-[#ed1b2e] bg-white rounded-full shadow-md p-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">{t('select_title')}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          {t('select_desc')}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
              activeCategory === cat 
                ? 'bg-[#ed1b2e] text-white shadow-lg scale-105 z-10' 
                : 'bg-white text-gray-400 hover:text-gray-600 border-2 border-gray-100/50 hover:border-gray-200'
            }`}
          >
            {t(`cat_${cat}`)}
          </button>
        ))}
      </div>

      {/* Grouped Content */}
      <div className="pb-32">
        {activeCategory === 'all' || activeCategory === 'mobility' ? 
          renderSection('cat_mobility', EQUIPMENT_DATA.filter(i => i.category === 'mobility')) : null}
        
        {activeCategory === 'all' || activeCategory === 'bathroom' ? 
          renderSection('cat_bathroom', EQUIPMENT_DATA.filter(i => i.category === 'bathroom')) : null}
        
        {activeCategory === 'all' || activeCategory === 'bedroom' ? 
          renderSection('cat_bedroom', EQUIPMENT_DATA.filter(i => i.category === 'bedroom')) : null}
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
        <button
          onClick={onNext}
          disabled={selectedIds.length === 0}
          className={`pointer-events-auto w-full max-w-lg py-5 md:py-6 rounded-full font-black text-xl md:text-2xl transition-all shadow-2xl border-4 border-white ${
            selectedIds.length > 0 
              ? 'bg-[#ed1b2e] text-white hover:bg-red-700 hover:scale-105 active:scale-95' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none border-transparent'
          }`}
        >
          {t('btn_next_info')} {selectedIds.length > 0 && `(${selectedIds.length})`}
        </button>
      </div>
    </div>
  );
};

const CategoryIcon: React.FC<{ category: Category }> = ({ category }) => {
  switch(category) {
    case 'mobility':
      return (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5H11V11H5V13H11V19H13V13H19V11H13V5Z" />
        </svg>
      );
    case 'bathroom':
      return (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4h16v16H4V4zm4 4v8m8-8v8" />
        </svg>
      );
    case 'bedroom':
      return (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      );
  }
};
