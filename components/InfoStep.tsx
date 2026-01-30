
import React from 'react';
import { PatientInfo, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface InfoStepProps {
  data: PatientInfo;
  onChange: (newData: PatientInfo) => void;
  onNext: () => void;
  onBack: () => void;
  lang: Language;
}

export const InfoStep: React.FC<InfoStepProps> = ({ data, onChange, onNext, onBack, lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  const handleUnitToggle = (unit: 'metric' | 'imperial') => {
    if (unit === data.unit) return;
    
    // Conversion logic
    if (unit === 'metric') {
      const cm = Math.round(((data.heightFeet * 12) + data.heightInches) * 2.54);
      const kg = Math.round(data.weight * 0.453592);
      onChange({ ...data, unit, heightCm: cm, weight: kg });
    } else {
      const totalInches = data.heightCm / 2.54;
      const ft = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      const lbs = Math.round(data.weight / 0.453592);
      onChange({ ...data, unit, heightFeet: ft, heightInches: inches, weight: lbs });
    }
  };

  const isFormValid = data.unit === 'metric' 
    ? (data.heightCm > 0 && data.weight > 0)
    : ((data.heightFeet > 0 || data.heightInches > 0) && data.weight > 0);

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{t('patient_title')}</h2>
          <p className="text-gray-500 text-lg">{t('patient_desc')}</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl">
            <button
              onClick={() => handleUnitToggle('imperial')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                data.unit === 'imperial' ? 'bg-white text-[#ed1b2e] shadow-md' : 'text-gray-500'
              }`}
            >
              Imperial (ft/lbs)
            </button>
            <button
              onClick={() => handleUnitToggle('metric')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                data.unit === 'metric' ? 'bg-white text-[#ed1b2e] shadow-md' : 'text-gray-500'
              }`}
            >
              Metric (cm/kg)
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest">{t('label_height')}</label>
            {data.unit === 'imperial' ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="number"
                    value={data.heightFeet || ''}
                    onChange={(e) => onChange({ ...data, heightFeet: parseInt(e.target.value) || 0 })}
                    className="w-full px-5 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#ed1b2e] transition-all text-xl font-bold"
                    placeholder="ft"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">ft</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={data.heightInches || ''}
                    onChange={(e) => onChange({ ...data, heightInches: parseInt(e.target.value) || 0 })}
                    className="w-full px-5 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#ed1b2e] transition-all text-xl font-bold"
                    placeholder="in"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">in</span>
                </div>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="number"
                  value={data.heightCm || ''}
                  onChange={(e) => onChange({ ...data, heightCm: parseInt(e.target.value) || 0 })}
                  className="w-full px-5 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#ed1b2e] transition-all text-xl font-bold"
                  placeholder="cm"
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">cm</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest">{t('label_weight')}</label>
            <div className="relative">
              <input
                type="number"
                value={data.weight || ''}
                onChange={(e) => onChange({ ...data, weight: parseInt(e.target.value) || 0 })}
                className="w-full px-5 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#ed1b2e] transition-all text-xl font-bold"
                placeholder={data.unit === 'metric' ? '70' : '150'}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                {data.unit === 'metric' ? 'kg' : 'lbs'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <button
            onClick={onBack}
            className="flex-1 py-4 px-8 rounded-full border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all uppercase tracking-widest text-sm"
          >
            {t('btn_back')}
          </button>
          <button
            onClick={onNext}
            disabled={!isFormValid}
            className={`flex-[2] py-4 px-8 rounded-full font-black text-white shadow-xl transition-all uppercase tracking-widest ${
              isFormValid
                ? 'bg-[#ed1b2e] hover:bg-red-700 hover:-translate-y-1'
                : 'bg-gray-100 cursor-not-allowed shadow-none text-gray-300'
            }`}
          >
            {t('btn_generate')}
          </button>
        </div>
      </div>
    </div>
  );
};
