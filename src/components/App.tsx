import React, { FC } from 'react';
import { Routes } from './global/Routes';
import { Wrapper } from './global/Wrapper';

export const App: FC = () => {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  );
};
