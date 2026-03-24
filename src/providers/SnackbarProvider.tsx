import { SnackbarProvider as NotistackProvider } from 'notistack';
import type { ReactNode } from 'react';

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NotistackProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={4000}
    >
      {children}
    </NotistackProvider>
  );
};
