
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { SelectionStep } from './components/SelectionStep';
import { InfoStep } from './components/InfoStep';
import { ResultStep } from './components/ResultStep';
import { PatientInfo, Step, Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentStep, setCurrentStep] = useState<Step>('selection');
  const [selectedEquipmentIds, setSelectedEquipmentIds] = useState<string[]>([]);
  const [patientData, setPatientData] = useState<PatientInfo>({
    heightFeet: 0,
    heightInches: 0,
    heightCm: 0,
    weight: 0,
    unit: 'imperial',
  });

  const t = (key: string) => TRANSLATIONS[key][lang];

  const toggleEquipment = (id: string) => {
    setSelectedEquipmentIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleNextFromSelection = () => {
    if (selectedEquipmentIds.length > 0) {
      setCurrentStep('info');
      window.scrollTo(0, 0);
    }
  };

  const handleNextFromInfo = () => {
    setCurrentStep('result');
    window.scrollTo(0, 0);
  };

  const handleBackFromInfo = () => {
    setCurrentStep('selection');
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setSelectedEquipmentIds([]);
    setCurrentStep('selection');
    window.scrollTo(0, 0);
  };

  return (
    <Layout lang={lang} setLang={setLang}>
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
            <div className="flex items-center space-x-4 md:space-x-12">
                <StepIndicator 
                    number={1} 
                    label={t('step_1')} 
                    isActive={currentStep === 'selection'} 
                    isCompleted={currentStep !== 'selection'} 
                />
                <div className={`w-6 md:w-16 h-1 rounded-full ${currentStep !== 'selection' ? 'bg-[#ed1b2e]' : 'bg-gray-100'}`}></div>
                <StepIndicator 
                    number={2} 
                    label={t('step_2')} 
                    isActive={currentStep === 'info'} 
                    isCompleted={currentStep === 'result'} 
                />
                <div className={`w-6 md:w-16 h-1 rounded-full ${currentStep === 'result' ? 'bg-[#ed1b2e]' : 'bg-gray-100'}`}></div>
                <StepIndicator 
                    number={3} 
                    label={t('step_3')} 
                    isActive={currentStep === 'result'} 
                    isCompleted={false} 
                />
            </div>
        </div>
      </div>

      <div className="min-h-[70vh]">
        {currentStep === 'selection' && (
          <SelectionStep 
            selectedIds={selectedEquipmentIds} 
            onToggle={toggleEquipment} 
            onNext={handleNextFromSelection} 
            lang={lang}
          />
        )}

        {currentStep === 'info' && (
          <InfoStep 
            data={patientData} 
            onChange={setPatientData} 
            onNext={handleNextFromInfo} 
            onBack={handleBackFromInfo} 
            lang={lang}
          />
        )}

        {currentStep === 'result' && (
          <ResultStep 
            selectedIds={selectedEquipmentIds} 
            patientData={patientData} 
            onRestart={handleRestart} 
            lang={lang}
          />
        )}
      </div>
    </Layout>
  );
};

const StepIndicator: React.FC<{ 
    number: number; 
    label: string; 
    isActive: boolean; 
    isCompleted: boolean 
}> = ({ number, label, isActive, isCompleted }) => {
    return (
        <div className="flex items-center space-x-2 md:space-x-3">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-xs md:text-sm transition-all duration-500 ${
                isCompleted 
                    ? 'bg-[#ed1b2e] text-white' 
                    : isActive 
                        ? 'bg-[#ed1b2e] text-white ring-8 ring-red-50' 
                        : 'bg-gray-100 text-gray-300'
            }`}>
                {isCompleted ? (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                ) : number}
            </div>
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors ${
                isActive ? 'text-[#ed1b2e]' : isCompleted ? 'text-gray-900' : 'text-gray-300'
            }`}>
                {label}
            </span>
        </div>
    );
};

export default App;
