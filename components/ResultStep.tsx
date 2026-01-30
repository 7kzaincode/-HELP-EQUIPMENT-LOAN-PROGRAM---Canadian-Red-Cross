
import React from 'react';
import { Equipment, PatientInfo, Language } from '../types';
import { EQUIPMENT_DATA, TRANSLATIONS } from '../constants';

interface ResultStepProps {
  selectedIds: string[];
  patientData: PatientInfo;
  onRestart: () => void;
  lang: Language;
}

export const ResultStep: React.FC<ResultStepProps> = ({ selectedIds, patientData, onRestart, lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  const selectedEquipment = EQUIPMENT_DATA.filter(item => selectedIds.includes(item.id));

  // Convert to Lbs for internal checking against data
  const currentWeightLbs = patientData.unit === 'metric' 
    ? Math.round(patientData.weight / 0.453592)
    : patientData.weight;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
        <div>
          <h2 className="text-4xl font-black text-gray-900">{t('result_title')}</h2>
          <p className="text-gray-500 mt-2 text-lg">{t('result_desc')}</p>
        </div>
        <button
          onClick={onRestart}
          className="px-8 py-3 rounded-full border-2 border-[#ed1b2e] text-[#ed1b2e] font-black hover:bg-red-50 transition-all text-sm uppercase tracking-widest"
        >
          {t('btn_restart')}
        </button>
      </div>

      <div className="space-y-12">
        {selectedEquipment.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative group">
                <img src={item.imageUrl} alt={item.name[lang]} className="w-full h-full object-cover min-h-[250px] lg:min-h-[400px] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg ${currentWeightLbs > item.maxWeightLbs ? 'bg-red-600 text-white' : 'bg-white text-green-600'}`}>
                    {currentWeightLbs > item.maxWeightLbs ? t('weight_warning') : t('weight_verified')}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">{item.name[lang]}</h3>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">{item.description[lang]}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('label_sizing')}</span>
                      <span className="text-2xl font-black text-gray-800">
                        {calculateSizing(item.id, patientData)}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('label_max_load')}</span>
                      <span className={`text-2xl font-black ${currentWeightLbs > item.maxWeightLbs ? 'text-red-600' : 'text-gray-800'}`}>
                        {item.maxWeightLbs} lbs
                      </span>
                    </div>
                  </div>

                  <div className="mb-10 p-5 bg-red-50/50 rounded-2xl border border-red-100/50">
                    <h4 className="text-sm font-black text-[#ed1b2e] mb-2 uppercase tracking-widest">{t('label_sizing_note')}</h4>
                    <p className="text-sm text-gray-600 italic font-medium">{item.sizingGuide[lang]}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[2] inline-flex items-center justify-center px-8 py-5 bg-[#ed1b2e] text-white rounded-2xl font-black hover:bg-red-700 transition-all shadow-lg hover:-translate-y-1 uppercase tracking-widest text-sm"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('btn_view_pdf')}
                  </a>
                  <button className="flex-1 px-8 py-5 bg-white border-2 border-gray-100 text-gray-400 rounded-2xl font-black hover:bg-gray-50 transition-all uppercase tracking-widest text-sm hover:text-gray-600">
                    {t('btn_share')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-8 bg-blue-50 border border-blue-100 rounded-3xl flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="bg-white p-4 rounded-2xl text-blue-600 shadow-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-black text-blue-900 text-xl uppercase tracking-tight">{t('disclaimer_title')}</h4>
          <p className="text-blue-700 mt-2 text-lg leading-relaxed">
            {t('disclaimer_body')}
          </p>
        </div>
      </div>
    </div>
  );
};

const calculateSizing = (id: string, patient: PatientInfo): string => {
  let totalInches: number;
  if (patient.unit === 'metric') {
    totalInches = patient.heightCm / 2.54;
  } else {
    totalInches = (patient.heightFeet * 12) + patient.heightInches;
  }
  
  const heightMapping: Record<string, string> = {
    'cane': `${Math.round(totalInches * 0.5)}"`,
    'rollator': `${Math.round(totalInches * 0.5)}"`,
    'crutches-axilla': `${Math.round(totalInches * 0.5)}"`,
    'forearm-crutches': `${Math.round(totalInches * 0.5)}"`,
    'walker': `${Math.round(totalInches * 0.5)}"`,
    'raised-toilet-seat': '5"',
    'toilet-seat-elevator': '4-5"',
    'bath-board': 'Standard',
  };
  
  return heightMapping[id] || 'N/A';
};
