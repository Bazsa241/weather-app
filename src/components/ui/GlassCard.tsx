import { Paper } from '@mui/material';
import type { ReactNode } from 'react';
import cn from 'classnames';

export const GlassCard = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Paper
      className={cn('p-4 rounded-xl! backdrop-blur-md', className)}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.4)' : 'rgba(255,255,255,0.3)',
        border: (theme) =>
          theme.palette.mode === 'dark'
            ? '1px solid rgba(55,65,81,0.2)'
            : '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </Paper>
  );
};
