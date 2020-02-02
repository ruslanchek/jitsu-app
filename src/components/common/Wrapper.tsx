import React, { FC, Fragment } from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../../common/globalStyles';

export const Wrapper: FC = ({ children }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      {children}
    </Fragment>
  );
};
