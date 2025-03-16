import { Button, Field, Link, T, TextInput } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { RouteEnum } from '../../utils/Routes';

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(RouteEnum.services);
  };

  return (
    <div>
      <div>
        <T font="Main/XL">Добро пожаловать!</T>
        <Field label="Имя пользователя" id="login">
          <TextInput id="login" placeholder="Имя" />
        </Field>
        <Field label="Пароль" id="password">
          <TextInput id="password" placeholder="Пароль" />
        </Field>
      </div>
      <div>
        <T font="Main/S">Ещё нет аккаунта?</T>
        {/* Проверил переход, переделать под страницу регистрации */}
        <Link appearance="primary" onClick={handleLogin}>
          Зарегистрироваться
        </Link>
      </div>

      <Button dimension="xl" appearance="primary" onClick={handleLogin}>
        Войти
      </Button>
    </div>
  );
};
