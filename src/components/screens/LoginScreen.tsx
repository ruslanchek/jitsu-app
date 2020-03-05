import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { MAIN_PADDING } from '../../common/ui';

export const LoginScreen: FC<RouteComponentProps> = () => {
  return (
    <ScreenWrapper>
      xxx
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,
};
