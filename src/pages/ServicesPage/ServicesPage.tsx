import { Button } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
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

export default ServicesPage;
