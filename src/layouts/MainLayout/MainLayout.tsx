import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { MainLayoutContainer } from './MainLayout.styles';

export const MainLayout = () => (
  <MainLayoutContainer>
    <Header />
    <Outlet />
  </MainLayoutContainer>
);
