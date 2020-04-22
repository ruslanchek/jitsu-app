import React, { FC } from 'react';
import { MainScreen } from '../screens/MainScreen';
import { Router } from '@reach/router';
import { PATHS } from '../../common/paths';

interface IProps {}

export const Routes: FC<IProps> = () => {
  return (
    <Router>
      <MainScreen path={PATHS.MAIN} />
    </Router>
  );
};
