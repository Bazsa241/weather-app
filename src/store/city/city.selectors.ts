import { useStore } from '@app/store';

export const useCity = () => useStore((state) => state.city);
export const useSetCity = () => useStore((state) => state.setCity);
