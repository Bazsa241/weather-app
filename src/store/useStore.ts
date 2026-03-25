import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { StoreState } from './types';
import { createCitySlice } from './city/city.slice';
import { createModalSlice } from './modal/modal.slice';
import { createColorModeSlice } from './color-mode/colorMode.slice';
import { createLanguageSlice } from './language/language.slice';

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createCitySlice(...a),
      ...createModalSlice(...a),
      ...createColorModeSlice(...a),
      ...createLanguageSlice(...a),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        city: state.city,
        colorMode: state.colorMode,
        language: state.language,
      }),
    },
  ),
);
