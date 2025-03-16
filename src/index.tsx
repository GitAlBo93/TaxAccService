import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DropdownProvider, FontsVTBGroup, LIGHT_THEME } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <RouterProvider router={Router} />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
