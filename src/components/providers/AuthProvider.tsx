import React, { FC, createContext, useState, useEffect } from 'react';
import { useAuthorize } from '../../hooks/useAuthorize';
import { useAsyncEffect } from '../../hooks/useAsyncEffect';

interface IAuthProviderContext {
  authorized: boolean | undefined;
  appReady: boolean;
  setAuthorized: (authorized: boolean) => void;
}

const CONTEXT_INITIAL_SATE: IAuthProviderContext = {
  authorized: undefined,
  appReady: false,
  setAuthorized: () => {},
};

export const AuthContext = createContext<IAuthProviderContext>(CONTEXT_INITIAL_SATE);

export const AuthProvider: FC = ({ children }) => {
  const [authorized, setAuthorized] = useState(CONTEXT_INITIAL_SATE.authorized);
  const [appReady, setAppReady] = useState(CONTEXT_INITIAL_SATE.appReady);
  const authorize = useAuthorize();

  useAsyncEffect(async () => {
    await authorize();
    setAppReady(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authorized,
        setAuthorized,
        appReady,
      }}>
      {appReady ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
