import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../../../common/colors';
import { BORDER_RADIUS, FONT_SIZE } from '../../../../../common/ui';

interface IProps {}

export const DocumentWidgetHeader: FC<IProps> = ({ children }) => {
  return <div css={styles.root}>{children}</div>;
};

const styles = {
  root: css`
    padding: 9px 20px 8px;
    background-color: ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM} ${BORDER_RADIUS.MEDIUM} 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      margin: 0;
      font-weight: 400;
      font-size: ${FONT_SIZE.H3};
    }
  `,
};
