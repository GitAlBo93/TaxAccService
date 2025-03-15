import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
    ],
  },
]);

export default router;
