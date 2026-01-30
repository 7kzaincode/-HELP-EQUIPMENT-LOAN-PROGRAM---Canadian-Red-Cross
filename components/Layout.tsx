import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  return (
    <div className="flex flex-col min-h-screen selection:bg-red-100">
      <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-[60] shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
                <div className="relative w-10 h-10 bg-[#ed1b2e] flex items-center justify-center rounded-lg shadow-sm" aria-hidden="true">
                    <div className="absolute bg-white w-2 h-6 rounded-full"></div>
                    <div className="absolute bg-white w-6 h-2 rounded-full"></div>
                </div>
                <div className="ml-3">
                    <h1 className="text-lg md:text-xl font-black text-gray-900 tracking-tight leading-tight">
                      {t('header_title')}
                    </h1>
                    <p className="text-[10px] text-[#ed1b2e] font-black uppercase tracking-[0.2em]">
                      {t('header_subtitle')}
                    </p>
                </div>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
              className="px-5 py-2 text-xs font-black text-gray-900 hover:bg-red-50 hover:text-[#ed1b2e] hover:border-red-100 rounded-2xl transition-all border-2 border-gray-100 uppercase tracking-widest flex items-center space-x-2"
            >
              <span>{lang === 'en' ? 'FRANÇAIS' : 'ENGLISH'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.19 15.878 5.412 19" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50/30">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full">
          <div className="flex flex-col items-center md:items-start">
             <div className="w-12 h-1 bg-gray-100 rounded-full mb-6"></div>
             <p className="text-xs font-black text-gray-300 uppercase tracking-[0.4em]">© {new Date().getFullYear()} Canadian Red Cross Society</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end group cursor-default ml-auto">
            <div className="h-px w-0 group-hover:w-full bg-red-100 transition-all duration-1000 mb-2 ml-auto"></div>
            <p className="text-xs text-gray-400 font-bold tracking-tight text-right">
              portal engineering <span className="text-[#ed1b2e] font-black italic hover:underline decoration-red-200 decoration-2 ml-1 whitespace-nowrap">made by ali khan</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};