import React, { FC, Fragment, useEffect } from 'react';
import { commonStore } from '../../stores/common-store';
import { useMe } from '../../hooks/useMe';
import { useLocation, useNavigate } from '@reach/router';
import { ANONYMOUS_ONLY_PATHS, AUTHORIZED_REDIRECT_PATH, UNAUTHORIZED_REDIRECT_PATH } from '../../common/paths';

export const AuthProvider: FC = ({ children }) => {
  const { user, loading, error } = useMe();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (user || error)) {
      const authorized = Boolean(!error && user);

      if (ANONYMOUS_ONLY_PATHS.indexOf(location.pathname) >= 0 && authorized) {
        navigate(AUTHORIZED_REDIRECT_PATH);
      } else if (!authorized) {
        navigate(UNAUTHORIZED_REDIRECT_PATH);
      }

      commonStore.setState({
        authorized,
        me: user || undefined,
        appReady: true,
      });
    }
  }, [loading, user, error]);

  return <Fragment>{loading ? <div>Loading...</div> : children}</Fragment>;
};
