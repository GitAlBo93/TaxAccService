import styled from 'styled-components';

export const ServicesPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(241, 242, 244, 1);
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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 16px 24px;
  color: rgba(0, 98, 255, 1);
  cursor: context-menu;
`;

export const HeaderServicesPage = styled.div`
  padding: 20px 0;
  background-color: rgba(241, 242, 244, 1);
`;
