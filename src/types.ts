export type Language = 'es' | 'en';

export interface B2BQuoteRequest {
  fullName: string;
  jobTitle: string;
  companyName: string;
  corporateEmail: string;
  phoneNumber: string;
  teamSize: '1' | '2-5' | '6-15' | '16-50' | '50+';
  trainingFocus: 'executive' | 'teams' | 'cefr-audit' | 'pronunciation-decoding' | 'custom';
  currentChallenge: string;
  preferredSchedule: string;
}

export interface PillarDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  b2bImpact: string;
  keyAspects: string[];
  sampleBusinessContext: string;
}

export interface ProgramTier {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  features: string[];
  bestFor: string;
  modality: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
