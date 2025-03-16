import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layouts/Layout';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { RouteEnum } from './utils/Routes';

export const Router = createBrowserRouter([
  {
    path: RouteEnum.login,
    element: <Layout />,
    children: [
      {
        path: RouteEnum.login,
        element: <LoginPage />,
      },
      {
        path: RouteEnum.services,
        element: <ServicesPage />,
      },
    ],
  },
]);
