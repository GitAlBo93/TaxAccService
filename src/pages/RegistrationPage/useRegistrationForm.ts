import { useRegisterMutation } from '../../api/rootApi';
import { useDispatch } from 'react-redux';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RouteEnum } from '../../app/constants';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setUser } from '../../slices/registerSlice';

type RegistrationFormType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

export const useRegistrationForm = () => {
  const dispatch = useDispatch();
  const [register, { isLoading, error }] = useRegisterMutation();

  const schema = object().shape({
    username: string().required('Введите имя пользователя'),
    email: string().email('Не верный формат почты. Пример: user@example.com').required('Введите email'),
    password: string().required('Введите пароль'),
    confirmPassword: string()
      .required('Введите пароль ещё раз')
      .oneOf([ref('password'), ''], 'Пароли должны совпадать'),
    role: string().required('Выберите роль'),
  });

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    resolver: yupResolver(schema),
  });

  const handleRegister = async (data: RegistrationFormType) => {
    try {
      console.log(data);
      const { confirmPassword, ...registrationData } = data;
      const response = await register(registrationData).unwrap();
      dispatch(setUser({ user: response.user }));
      navigate(RouteEnum.services);
    } catch (error) {
      console.log('Ошибка регистрации: ', error);
    }
  };

  return { control, handleSubmit, errors, handleRegister, isLoading, error };
};
