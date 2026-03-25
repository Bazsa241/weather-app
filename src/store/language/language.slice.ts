import type { StateCreator } from 'zustand';
import type { StoreState } from '@app/store';

type Language = 'hu' | 'en';

export type LanguageSlice = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export type CreateLanguageSlice = StateCreator<StoreState, [], [], LanguageSlice>;

export const createLanguageSlice: CreateLanguageSlice = (set) => ({
  language: 'hu',
  setLanguage: (language: Language) => set({ language }),
});
