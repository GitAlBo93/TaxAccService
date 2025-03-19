import { Button, Field, Link, T, TextInput } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { RouteEnum } from '../../app/constants';
import { FormContainer, InputContainer, RegistrationLinkContainer } from './LoginPage.styles';
import { useForm } from 'react-hook-form';

type LoginFormType = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const handleLogin = (data: LoginFormType) => {
    // TODO: реализовать логику в следующей фиче
    console.log(data);
    navigate(RouteEnum.services);
  };
  const handleRegistration = () => {
    navigate(RouteEnum.registration);
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleLogin)}>
      <T font="Main/XL" color="Neutral/Neutral 90">
        Добро пожаловать!
      </T>
      <InputContainer>
        <Field label="Имя пользователя" id="username" color="Neutral/Neutral 50">
          <TextInput
            id="username"
            placeholder="Имя"
            color="Neutral/Neutral 90"
            {...register('username', { required: 'Введите имя пользователя' })}
          />
          {errors.username && (
            <T font="Body/Body 1 Short" color="Error/Error 40">
              {errors.username.message}
            </T>
          )}
        </Field>
        <Field label="Пароль" id="password" color="Neutral/Neutral 50">
          <TextInput
            id="password"
            placeholder="Пароль"
            color="Neutral/Neutral 90"
            {...register('password', { required: 'Введите пароль' })}
          />
          {errors.password && (
            <T font="Main/XS" color="Error/Error 40">
              {errors.password.message}
            </T>
          )}
        </Field>
        <RegistrationLinkContainer>
          <T font="Additional/XS" style={{ alignContent: 'center' }}>
            Ещё нет аккаунта?
          </T>
          <Link appearance="primary" dimension="s" onClick={handleRegistration}>
            Зарегистрироваться
          </Link>
        </RegistrationLinkContainer>
      </InputContainer>
      <Button dimension="xl" appearance="primary" type="submit">
        Войти
      </Button>
    </FormContainer>
  );
};
