import logo from '../../assets/Logo_RNB.svg';
import { Avatar } from '@admiral-ds/react-ui';
import { Container } from './Header.styles';
import { useHeader } from './useHeader';

export const Header = () => {
  const { username } = useHeader();

  return (
    <Container>
      <img src={logo} alt="logo" />
      {username && <Avatar userName={username} status="royalBlue" dimension="m" />}
    </Container>
  );
};
