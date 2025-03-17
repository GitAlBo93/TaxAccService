import logo from '../../assets/Logo_RNB.svg';
import { Avatar } from '@admiral-ds/react-ui';
import { Container } from './Header.styles';

export const Header = () => {
  // TODO: переделать с использованием redux
  const showAvatar = false;

  return (
    <Container>
      <img src={logo} alt="logo" />
      {showAvatar && <Avatar userName="AvatarName" status="inactive" dimension="xs" />}
    </Container>
  );
};
