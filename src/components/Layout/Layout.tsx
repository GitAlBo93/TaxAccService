import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import React from 'react';

const Layout: React.FC = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
