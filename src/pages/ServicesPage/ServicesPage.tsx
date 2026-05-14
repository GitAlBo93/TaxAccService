import { T } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { ServiceContainer, ServicesPageContainer, ServicesContainer, HeaderServicesPage } from './ServicePage.styles';
import { useServicesForm } from './useServicesForm';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { services } = useServicesForm();

  return (
    <ServicesPageContainer>
      <HeaderServicesPage>
        <T font="Main/S" color="Neutral/Neutral 90">
          Налоги
        </T>
      </HeaderServicesPage>
      <ServicesContainer>
        {/*  TODO: убрать ts-ignore, нет route для всех сервисов */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {services.map(({ key, label, route }) => (
          <ServiceContainer key={key} onClick={() => navigate(route)}>
            {label}
          </ServiceContainer>
        ))}
      </ServicesContainer>
    </ServicesPageContainer>
  );
};
