import { useGetMe } from './useGetMe';
import { useContext } from 'react';
import { ANONYMOUS_ONLY_PATHS, AUTHORIZED_REDIRECT_PATH, UNAUTHORIZED_REDIRECT_PATH } from '../common/paths';
import { AuthContext } from '../components/providers/AuthProvider';
import { useLocation, useNavigate } from '@reach/router';
import { useAsyncEffect } from './useAsyncEffect';

export const useAuthorize = () => {
  const { getMe, me, error, loading } = useGetMe();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useAsyncEffect(async () => {
    if(!loading && (error || me)) {
      const authorized = Boolean(!error && me);

      if (authorized && ANONYMOUS_ONLY_PATHS.indexOf(location.pathname) >= 0) {
        await navigate(AUTHORIZED_REDIRECT_PATH);
      } else if (!authorized && ANONYMOUS_ONLY_PATHS.indexOf(location.pathname) < 0) {
        await navigate(UNAUTHORIZED_REDIRECT_PATH);
      }

      authContext.setAuthorized(authorized);
    }
  }, [me, error, loading]);

  return async () => {
    await getMe();
  };
};
