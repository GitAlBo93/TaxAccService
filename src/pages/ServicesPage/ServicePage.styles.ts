import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ServicesPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${colors.backgroundSecondary};
  padding: 0 32px 32px 32px;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ServiceContainer = styled.div`
  width: 290px;
  height: 90px;
  box-sizing: border-box;
  background-color: ${colors.neutralWhite};
  border-radius: 10px;
  padding: 16px 24px;
  color: ${colors.primary60Main};
  cursor: context-menu;
`;

export const HeaderServicesPage = styled.div`
  padding: 20px 0;
  background-color: ${colors.backgroundSecondary};
`;
