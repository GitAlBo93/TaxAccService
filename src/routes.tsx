import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { RouteEnum } from './app/constants';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { ExpensesPage } from './pages/ExpensesPage/ExpensesPage';

export const Router = createBrowserRouter([
  {
    path: RouteEnum.main,
    element: <MainLayout />,
    children: [
      {
        path: RouteEnum.login,
        element: <LoginPage />,
      },
      {
        path: RouteEnum.registration,
        element: <RegistrationPage />,
      },
      {
        path: RouteEnum.services,
        element: <ServicesPage />,
      },
      {
        path: RouteEnum.expenses,
        element: <ExpensesPage />,
      },
    ],
  },
]);
