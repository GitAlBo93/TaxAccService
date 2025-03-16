import { Button } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { RouteEnum } from '../../app/routes';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(RouteEnum.login);
  };

  return (
    <>
      <Button dimension="xl" appearance="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button dimension="xl" appearance="primary">
        Service_2
      </Button>
    </>
  );
};
