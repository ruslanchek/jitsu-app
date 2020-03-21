import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../common/colors';
import { BORDER_RADIUS, BOX_SHADOW } from '../../common/ui';

interface IProps {}

export const SideMenu: FC<IProps> = () => {
  return <div css={styles.root}></div>;
};

const styles = {
  root: css`
    position: fixed;
    z-index: 1000;
    width: 400px;
    border-radius: ${BORDER_RADIUS.LARGE};
    box-shadow: ${BOX_SHADOW.LARGE};
    top: 80px;
    bottom: 20px;
    right: 20px;
    left: auto;
    background-color: ${COLORS.PLATINUM};
  `,
};
