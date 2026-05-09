import { Button, InputField, Link, T } from '@admiral-ds/react-ui';
import { RouteEnum } from '../../app/constants';
import { FormContainer, InputContainer, LoginPageContainer, RegistrationLinkContainer } from './LoginPage.styles';
import { Controller } from 'react-hook-form';
import { useLoginForm } from './useLoginForm';

export const LoginPage = () => {
  const { handleSubmit, handleLogin, control, errors } = useLoginForm();

  return (
    <LoginPageContainer>
      <FormContainer onSubmit={handleSubmit(handleLogin)}>
        <T font="Main/XL" color="Neutral/Neutral 90">
          Добро пожаловать!
        </T>
        <InputContainer>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Имя пользователя"
                placeholder="Имя"
                status={errors.username ? 'error' : undefined}
                extraText={errors.username?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                type="password"
                label="Пароль"
                placeholder="Пароль"
                status={errors.password ? 'error' : undefined}
                extraText={errors.password?.message}
              />
            )}
          />
          <RegistrationLinkContainer>
            <T font="Additional/XS">Ещё нет аккаунта?</T>
            <Link appearance="primary" dimension="s" href={RouteEnum.registration}>
              Зарегистрироваться
            </Link>
          </RegistrationLinkContainer>
        </InputContainer>
        <Button dimension="xl" appearance="primary" type="submit">
          Войти
        </Button>
      </FormContainer>
    </LoginPageContainer>
  );
};
