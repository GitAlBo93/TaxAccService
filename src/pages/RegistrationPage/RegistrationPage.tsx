import { Button } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { RouteEnum } from '../../app/constants';

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(RouteEnum.login);
  };

  return (
    <Button dimension="xl" appearance="primary" onClick={handleLogin}>
      Login
    </Button>
  );
};
