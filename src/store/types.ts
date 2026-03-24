import type { CitySlice } from './city/city.slice';
import type { ModalSlice } from './modal/modal.slice';

export type StoreState = CitySlice & ModalSlice;
