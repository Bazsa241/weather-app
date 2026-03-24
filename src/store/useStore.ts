import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { StoreState } from './types';
import { createCitySlice } from './city/city.slice';
import { createModalSlice } from './modal/modal.slice';

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createCitySlice(...a),
      ...createModalSlice(...a),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        city: state.city,
      }),
    },
  ),
);
