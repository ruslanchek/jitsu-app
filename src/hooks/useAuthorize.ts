import { ANONYMOUS_ONLY_PATHS, AUTHORIZED_REDIRECT_PATH, UNAUTHORIZED_REDIRECT_PATH } from '../common/paths';
import { useLocation, useNavigate } from '@reach/router';
import { useCheckAuth } from './useCheckAuth';
import { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';

export const useAuthorize = () => {
  const { setAuthorized } = useContext(AuthContext);
  const { checkAuth } = useCheckAuth();
  const navigate = useNavigate();
  const location = useLocation();
  return async () => {
    const authorized = await checkAuth();
    setAuthorized(authorized);
    if (authorized && ANONYMOUS_ONLY_PATHS.indexOf(location.pathname) >= 0) {
      await navigate(AUTHORIZED_REDIRECT_PATH);
    } else if (!authorized && ANONYMOUS_ONLY_PATHS.indexOf(location.pathname) < 0) {
      await navigate(UNAUTHORIZED_REDIRECT_PATH);
    }
  };
};
