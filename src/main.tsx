import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { App } from './App.tsx';
import { QueryProvider, AppThemeProvider, SnackbarProvider, I18nSync } from '@app/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider>
      <QueryProvider>
        <AppThemeProvider>
          <I18nSync />
          <App />
        </AppThemeProvider>
      </QueryProvider>
    </SnackbarProvider>
  </StrictMode>,
);
