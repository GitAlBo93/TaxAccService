import styled, { css } from 'styled-components';
import { DateField, InputField, Modal, ModalTitle, SelectField } from '@admiral-ds/react-ui';

export const CustomModal = styled(Modal)`
  padding: 24px 32px;
  width: 100%;
  top: 0;
  left: 0;
  transform: none;
  gap: 20px;
`;

export const CustomModalTitle = styled(ModalTitle)`
  padding: 0;
`;

export const ExpensesFilterModalConteiner = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const overlayStyles = css`
  background-color: rgba(100, 105, 115, 1);
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CustomInputField = styled(InputField)`
  width: 230px;
`;

export const CustomDateField = styled(DateField)`
  width: 230px;
`;

export const CustomSelectField = styled(SelectField)`
  width: 230px;
`;
