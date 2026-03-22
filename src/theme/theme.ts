import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#2563eb',
      },
      background: {
        default: mode === 'dark' ? '#0f172a' : '#f8fafc',
      },
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  });
