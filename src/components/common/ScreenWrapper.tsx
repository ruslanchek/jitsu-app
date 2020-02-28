import React, { FC } from 'react';
import { css } from '@emotion/core';
import { HeaderView } from '../ui/header/HeaderView';
import { Limiter } from '../ui/common/Limiter';

export const ScreenWrapper: FC = ({ children }) => {
  return (
    <div css={styles.root}>
      <HeaderView />
      <Limiter>
        <main css={styles.main}>{children}</main>
      </Limiter>
    </div>
  );
};

const styles = {
  root: css`
    overflow: scroll;
    height: 100vh;
    width: 100vw;
  `,

  main: css`
    padding: 40px 0;
  `,
};
