import type { StateCreator } from 'zustand';
import type { StoreState } from '@app/store';

type ColorMode = 'light' | 'dark';

export type ColorModeSlice = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};

export type CreateColorModeSlice = StateCreator<StoreState, [], [], ColorModeSlice>;

export const createColorModeSlice: CreateColorModeSlice = (set, get) => ({
  colorMode: 'light',
  toggleColorMode: () => set({ colorMode: get().colorMode === 'light' ? 'dark' : 'light' }),
});
