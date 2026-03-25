import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { getTheme } from '@app/theme';
import { useColorMode } from '@app/store';

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorMode = useColorMode();

  const theme = useMemo(() => getTheme(colorMode), [colorMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
