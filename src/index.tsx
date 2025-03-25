import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DropdownProvider, FontsVTBGroup, LIGHT_THEME } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <FontsVTBGroup />
          <RouterProvider router={Router} />
        </DropdownProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
