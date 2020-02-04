import React, { FC } from 'react';
import { css } from '@emotion/core';

export const HeaderLogo: FC = () => {
  return <div css={styles.root} />;
};

const HEIGHT = 30;
const RATIO = 3.4583;

const styles = {
  root: css`
    background-image: url(${require('../../../assets/images/logos/jitsu-dark.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    width: ${HEIGHT * RATIO}px;
    height: ${HEIGHT}px;
  `,
};
