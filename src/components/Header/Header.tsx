import logo from '../../assets/Logo_RNB.png';
import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@admiral-ds/react-ui';

const Header: React.FC = () => {
  const showAvatar = false;
  const Logo = styled.img``;
  const Container = styled.div`
    margin: 10px 32px;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Container>
      <Logo src={logo} alt="logo3" />
      {showAvatar && <Avatar userName="AvatarName" status="inactive" dimension="xs" />}
    </Container>
  );
};
export default Header;
