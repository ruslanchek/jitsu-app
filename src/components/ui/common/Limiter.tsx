import React, { FC } from 'react';
import { css } from '@emotion/core';
import { MAX_WIDTH, MIN_WIDTH } from '../../../common/ui';

interface IProps {}

export const Limiter: FC<IProps> = ({ children }) => {
  return (
    <div css={styles.root}>
      <div css={styles.inner}>{children}</div>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    justify-content: center;
    max-width: ${MAX_WIDTH};
    min-width: ${MIN_WIDTH};
  `,

  inner: css`
    padding: 0 40px;
    flex-grow: 1;
    box-sizing: border-box;
  `,
};
