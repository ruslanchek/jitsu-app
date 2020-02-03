import React, { FC } from 'react';
import { Wrapper } from './common/Wrapper';
import { MainScreen } from './screens/MainScreen';

export const App: FC = () => {
  return (
    <Wrapper>
      <MainScreen />
    </Wrapper>
  );
};
