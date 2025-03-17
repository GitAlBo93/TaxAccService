import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { MainLayoutContainer, OutletContainer } from './MainLayout.styles';

export const MainLayout = () => (
  <MainLayoutContainer>
    <Header />
    <OutletContainer>
      <Outlet />
    </OutletContainer>
  </MainLayoutContainer>
);
