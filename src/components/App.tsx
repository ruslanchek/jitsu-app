import React, { FC } from 'react';
import { GlobalWrapper } from './common/GlobalWrapper';
import { MainScreen } from './screens/MainScreen';

export const App: FC = () => {
  return (
    <GlobalWrapper>
      <MainScreen />
    </GlobalWrapper>
  );
};
