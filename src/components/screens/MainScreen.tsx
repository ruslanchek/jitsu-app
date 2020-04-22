import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import { useStore } from 'react-stores';
import { userStore } from '../../eo-core';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  const { profile } = useStore(userStore);
  return <ScreenLayout>User ID: {profile.id}</ScreenLayout>;
};
