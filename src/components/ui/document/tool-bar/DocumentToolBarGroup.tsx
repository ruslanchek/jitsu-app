import React, { FC } from 'react';
import { css } from '@emotion/core';

export const DocumentToolBarGroup: FC = ({ children }) => {
  return <div css={styles.root}>{children}</div>;
};

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
  `,
};
