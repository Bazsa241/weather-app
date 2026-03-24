import { Paper } from '@mui/material';
import type { ReactNode } from 'react';
import cn from 'classnames';
import { glassStyles } from '@app/theme';

export const GlassCard = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Paper className={cn('p-4', className)} sx={glassStyles}>
      {children}
    </Paper>
  );
};
