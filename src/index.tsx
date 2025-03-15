import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DropdownProvider, FontsVTBGroup, LIGHT_THEME } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { LoginPage } from './pages/LoginPage/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <LoginPage />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
