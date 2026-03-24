import type { Theme } from '@mui/material';

const base = {
  borderRadius: '0.75rem',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
};

export const glassStyles = (theme: Theme) => ({
  ...base,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.4)' : 'rgba(255,255,255,0.3)',
  border:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(55,65,81,0.2)'
      : '1px solid rgba(255,255,255,0.1)',
});

export const modalGlassStyles = (theme: Theme) => ({
  ...base,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.25)' : 'rgba(255,255,255,0.5)',
  border:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(55,65,81,0.2)'
      : '1px solid rgba(255,255,255,0.1)',
});
