import React, { FC, createContext, useState } from 'react';
import { useMe } from '../../hooks/useMe';
import { useLocation, useNavigate } from '@reach/router';
import { ANONYMOUS_ONLY_PATHS, AUTHORIZED_REDIRECT_PATH, UNAUTHORIZED_REDIRECT_PATH } from '../../common/paths';
import { useAsyncEffect } from '../../hooks/useAsyncEffect';

interface IAuthProviderContext {
  authorized: boolean | undefined;
  appReady: boolean;
}

const CONTEXT_INITIAL_SATE: IAuthProviderContext = {
  authorized: undefined,
  appReady: false,
};

const AuthContext = createContext<IAuthProviderContext>(CONTEXT_INITIAL_SATE);

export const AuthProvider: FC = ({ children }) => {
  const [state, setState] = useState(CONTEXT_INITIAL_SATE);
  const { me, loading, error } = useMe();
  const location = useLocation();
  const navigate = useNavigate();

  useAsyncEffect(async () => {
    if (!loading && (me || error) && !state.appReady) {
      const authorized = Boolean(!error && me);

      if (ANONYMOUS_ONLY_PATHS.indexOf(location.pathname) >= 0 && authorized) {
        await navigate(AUTHORIZED_REDIRECT_PATH);
      } else if (!authorized) {
        await navigate(UNAUTHORIZED_REDIRECT_PATH);
      }

      setState({
        authorized,
        appReady: true,
      });
    }
  }, [loading, me, error]);

  return <AuthContext.Provider value={state}>{loading ? <div>Loading...</div> : children}</AuthContext.Provider>;
};
