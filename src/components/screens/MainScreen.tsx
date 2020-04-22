import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return <ScreenLayout>xxx</ScreenLayout>;
};
