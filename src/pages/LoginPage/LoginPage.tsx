import { Button, Label, Link, T, TextInput } from '@admiral-ds/react-ui';

export function LoginPage() {
  return (
    <div>
      <div>
        <T font={'Main/XL'}>Добро пожаловать!</T>
        <Label htmlFor="login">Имя пользователя</Label>
        <TextInput id="login" placeholder="Имя" />
        <Label htmlFor="password">Пароль</Label>
        <TextInput id="password" placeholder="Пароль" />
      </div>
      <div>
        <T font={'Main/S'}>Ещё нет аккаунта?</T>
        <Link appearance="primary">Зарегистрироваться</Link>
      </div>
      <Button dimension="xl" appearance="primary">
        Вход
      </Button>
    </div>
  );
}
