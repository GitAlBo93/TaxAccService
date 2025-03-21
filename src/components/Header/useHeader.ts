import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const useHeader = () => {
  const username = useSelector((state: RootState) => state.auth.user?.username);

  return { username };
};
