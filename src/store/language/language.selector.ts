import { useStore } from '@app/store';

export const useLanguage = () => useStore((state) => state.language);
export const useSetLanguage = () => useStore((state) => state.setLanguage);
