import React, { FC, Fragment } from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../../common/global-styles';
import { Providers } from './Providers';

export const GlobalWrapper: FC = ({ children }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Providers>{children}</Providers>
    </Fragment>
  );
};
