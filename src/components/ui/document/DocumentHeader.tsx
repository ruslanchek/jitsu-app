import React, { FC } from 'react';
import { css } from '@emotion/core';

export const DocumentHeader: FC = ({ children }) => {
  return <div css={styles.root}>{children}</div>;
};

const styles = {
  root: css`
    margin-bottom: 20px;
  `,
};
