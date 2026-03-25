import { useStore } from '@app/store';

export const useColorMode = () => useStore((state) => state.colorMode);
export const useToggleColorMode = () => useStore((state) => state.toggleColorMode);
