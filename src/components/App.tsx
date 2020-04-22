import React, { FC } from 'react';
import { CoreProvider } from '../core/CoreProvider';
import { Routes } from './global/Routes';
import { Wrapper } from './global/Wrapper';

export const App: FC = () => {
  return (
    <CoreProvider>
      <Wrapper>
        <Routes />
      </Wrapper>
    </CoreProvider>
  );
};
