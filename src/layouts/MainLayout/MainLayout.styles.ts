import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  //TODO: убрать высоту
  height: 100vh;
`;

export const OutletContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredT = styled(T)`
  align-content: center;
`;
