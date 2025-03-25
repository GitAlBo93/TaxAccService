import { useSelector } from 'react-redux';
import { selectAuthData } from '../../app/selectors/selectAuthData';

export const useHeader = () => {
  const username = useSelector(selectAuthData);

  return { username };
};
