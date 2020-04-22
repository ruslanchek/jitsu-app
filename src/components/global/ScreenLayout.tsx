import React, { FC } from 'react';

import { Header } from './Header';
import styles from './ScreenLayout.module.pcss';

interface IProps {}

export const ScreenLayout: FC<IProps> = ({ children }) => {
  return (
    <main className={styles.ScreenLayout}>
      <Header />
      {children}
    </main>
  );
};
