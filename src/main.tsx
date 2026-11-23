import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import './anim.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { I18nProvider } from './lib/i18n';
import { theme } from './themes';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorSchemeScript defaultColorScheme="auto" />
    <BrowserRouter>
      <I18nProvider>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Notifications />
          <App />
        </MantineProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
);
