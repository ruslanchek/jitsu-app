import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../../global/ScreenLayout';
import { Auth } from './Auth';

interface IProps extends RouteComponentProps {}

export const RegisterScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <Auth />
    </ScreenLayout>
  );
};
