import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './i18n';
import { App } from './App.tsx';
import { QueryProvider, AppThemeProvider } from '@app/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </QueryProvider>
  </StrictMode>,
);
