import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ExpensesPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${colors.backgroundSecondary};
  padding: 0 32px 32px 32px;
`;

export const HeaderExpensesPage = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftExpenses = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const HeaderRightExpenses = styled.div`
  display: flex;
  gap: 16px;
`;

export const ExpensesPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${colors.neutralWhite};
  flex: 1;
  border-radius: 8px;
`;

export const InformationTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
