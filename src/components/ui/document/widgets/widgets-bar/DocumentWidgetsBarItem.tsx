import React, { FC, ReactNode, useState } from 'react';
import { css } from '@emotion/core';
import { darken, rgba } from 'polished';
import { COLORS } from '../../../../../common/colors';
import { BORDER_RADIUS } from '../../../../../common/ui';

interface IProps {
  icon: ReactNode;
}

export const DocumentWidgetsBarItem: FC<IProps> = ({ icon }) => {
  return <div css={styles.root}>{icon}</div>;
};

const styles = {
  root: css`
    width: 40px;
    height: 40px;
    background-color: ${COLORS.SNOW};
    border-radius: ${BORDER_RADIUS.SMALL};
    color: ${COLORS.HIGH_SMOKE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: move;
    user-select: none;
    margin: 10px;
    font-size: 20px;
    transition: background-color 0.2s;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    &:hover {
      background-color: ${darken(0.05, COLORS.SNOW)};
    }
  `,
};
