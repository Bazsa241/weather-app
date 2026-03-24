import type { City } from '@app/types';
import type { StateCreator } from 'zustand';
import type { StoreState } from '@app/store';

export type CitySlice = {
  city: City | null;
  setCity: (city: City) => void;
};

export type CreateCitySlice = StateCreator<StoreState, [], [], CitySlice>;

export const createCitySlice: CreateCitySlice = (set) => ({
  city: null,
  setCity: (city) => set({ city }),
});
