import React, { FC } from 'react';
import { css } from '@emotion/core';
import { MAX_WIDTH } from '../../../common/ui';

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
  `,

  inner: css`
    padding: 0 40px;
    flex-grow: 1;
    max-width: ${MAX_WIDTH};
    box-sizing: border-box;
  `,
};
