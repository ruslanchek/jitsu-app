import React, { FC } from 'react';
import { css } from '@emotion/core';
import { HeaderView } from '../ui/header/HeaderView';
import { HEADER_HEIGHT, MAIN_PADDING, MAX_WIDTH, MIN_WIDTH } from '../../common/ui';

export const ScreenWrapper: FC = ({ children }) => {
  return (
    <div css={styles.root}>
      <HeaderView />
      <div css={styles.limiter}>
        <main css={styles.main}>{children}</main>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    overflow: scroll;
    height: 100vh;
    width: 100vw;
  `,

  limiter: css`
    max-width: ${MAX_WIDTH};
    min-width: ${MIN_WIDTH};
    margin: 0 auto;
    height: calc(100vh - ${HEADER_HEIGHT});
  `,

  main: css`
    height: 100%;
    padding: 0 ${MAIN_PADDING.HORIZONTAL};
  `,
};
