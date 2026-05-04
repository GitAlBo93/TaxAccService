import { Button, InputField, T, Option, Link, SelectField } from '@admiral-ds/react-ui';
import { RouteEnum } from '../../app/constants';
import { FormContainer, RegistrationContainer, RegistrationLinkContainer } from '../RegistrationPage/RegistrationPage.styles';
import { Controller } from 'react-hook-form';
import { useRegistrationForm } from './useRegistrationForm';

export const RegistrationPage = () => {
  const { handleSubmit, handleRegister, control, errors } = useRegistrationForm();

  return (
    <FormContainer onSubmit={handleSubmit(handleRegister)}>
      <T font="Main/XL" color="Neutral/Neutral 90">
        Зарегистрироваться
      </T>
      <RegistrationContainer>
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
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              label="Email"
              placeholder="user@example.com"
              status={errors.email ? 'error' : undefined}
              extraText={errors.email?.message}
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
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              type="password"
              label="Пароль ещё раз"
              placeholder="Пароль ещё раз"
              status={errors.confirmPassword ? 'error' : undefined}
              extraText={errors.confirmPassword?.message}
            />
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <SelectField {...field} placeholder="Да/Нет" label="Администратор?">
              <Option value="yes">Да</Option>
              <Option value="no">Нет</Option>
            </SelectField>
          )}
        />
        <RegistrationLinkContainer>
          <T font="Additional/XS">Уже есть аккаунт?</T>
          <Link appearance="primary" dimension="s" href={RouteEnum.login}>
            Ввойти
          </Link>
        </RegistrationLinkContainer>
      </RegistrationContainer>
      <Button dimension="xl" appearance="primary" type="submit">
        Зарегистрироваться
      </Button>
    </FormContainer>
  );
};
