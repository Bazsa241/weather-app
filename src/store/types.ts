import type { CitySlice } from './city/city.slice';
import type { ColorModeSlice } from './color-mode/colorMode.slice';
import type { ModalSlice } from './modal/modal.slice';

export type StoreState = CitySlice & ModalSlice & ColorModeSlice;
