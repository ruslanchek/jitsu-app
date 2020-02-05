import React, { FC } from 'react';
import { css } from '@emotion/core';

export const HeaderLogo: FC = () => {
  return <div css={styles.root} />;
};

const styles = {
  root: css`
    background-image: url(${require('../../../assets/images/logos/jitsu-dark.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    width: 104px;
    height: 30px;
  `,
};
