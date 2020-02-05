import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';

interface IProps {}

export const HeaderUser: FC<IProps> = () => {
  return (
    <a href='/' css={styles.root}>
      <span css={styles.userName}>@m_brtn</span>
    </a>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 0 10px;
    height: ${HEADER_ELEMENT_HEIGHT}px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    color: ${COLORS.SMOKE};
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      color: ${COLORS.PLATINUM};
      background-color: ${rgba(COLORS.CARBON, 0.5)};
    }
  `,

  userName: css`
    //margin-right: 10px;
  `,
};
