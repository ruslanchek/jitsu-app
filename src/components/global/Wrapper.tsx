import React, { FC, Fragment } from 'react';
import { AppLoading } from './AppLoading';
import { useCore } from '../../hooks/useCore';
import { Drawer } from './Drawer';
import { Header } from './Header';

interface IProps {}

export const Wrapper: FC<IProps> = ({ children }) => {
  const { appReady } = useCore();
  return (
    <Fragment>
      <Drawer />
      {children}
      <AppLoading show={!appReady} />
    </Fragment>
  );
};
