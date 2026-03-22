import { createContext } from 'react';

export type ColorMode = 'light' | 'dark';

export type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: 'light',
  toggleColorMode: () => {},
});
