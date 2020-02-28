import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, BOX_SHADOW } from '../../../common/ui';
import { triangle } from 'polished';

interface IProps {
  show: boolean;
}

export const DropdownView: FC<IProps> = ({ show, children }) => {
  return show ? (
    <div css={styles.root}>
      <div css={styles.content}>{children}</div>
    </div>
  ) : null;
};

const styles = {
  root: css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 10px);
  `,

  content: css`
    background-color: ${COLORS.WHITE};
    box-shadow: ${BOX_SHADOW.MEDIUM};
    border-radius: ${BORDER_RADIUS.MEDIUM};

    &:before {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      z-index: 10;
      transform: translateX(-50%);
      ${triangle({
        pointingDirection: 'top',
        width: '16px',
        height: '10px',
        foregroundColor: COLORS.WHITE,
      })};
    }
  `,
};
