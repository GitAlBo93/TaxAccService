import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RouteEnum } from '../../app/constants';
import { useLoginMutation } from '../../api/rootApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/authSlice';

type LoginFormType = {
  username: string;
  password: string;
};

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const schema = object().shape({
    username: string().required('Введите имя пользователя'),
    password: string().required('Введите пароль'),
  });

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data: LoginFormType) => {
    try {
      const response = await login(data).unwrap();
      dispatch(setUser({ user: response.user }));
      navigate(RouteEnum.services);
    } catch (error) {
      console.error('Ошибка входа', error);
    }
  };

  return { control, handleSubmit, errors, handleLogin, isLoading, error };
};
