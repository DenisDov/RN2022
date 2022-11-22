import { useMemo } from 'react';

import { selectCurrentUser } from '../features/auth/authSlice';
import { useAppSelector } from './store';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
