import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RegistrationContainer = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: end;
`;

export { FormContainer, InputContainer, RegistrationContainer };
