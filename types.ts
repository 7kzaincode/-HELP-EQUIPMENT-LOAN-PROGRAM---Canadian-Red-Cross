
export type Language = 'en' | 'fr';

export type Category = 'mobility' | 'bathroom' | 'bedroom' | 'all';

export interface Equipment {
  id: string;
  category: Category;
  name: { en: string; fr: string };
  description: { en: string; fr: string };
  imageUrl: string;
  pdfUrl: string;
  maxWeightLbs: number;
  sizingGuide: { en: string; fr: string };
}

export interface PatientInfo {
  heightFeet: number;
  heightInches: number;
  heightCm: number;
  weight: number;
  unit: 'metric' | 'imperial';
}

export type Step = 'selection' | 'info' | 'result';

export interface Translation {
  [key: string]: {
    en: string;
    fr: string;
  };
}
