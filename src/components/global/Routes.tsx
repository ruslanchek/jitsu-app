import React, { FC } from 'react';
import { MainScreen } from '../screens/MainScreen';
import { Router } from '@reach/router';
import { PATHS } from '../../common/paths';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';

interface IProps {}

export const Routes: FC<IProps> = () => {
  return (
    <Router>
      <MainScreen path={PATHS.MAIN} />
      <LoginScreen path={PATHS.AUTH_LOGIN} />
      <RegisterScreen path={PATHS.AUTH_REGISTER} />
    </Router>
  );
};
