import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_FAMILY, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { FiMenu } from 'react-icons/all';
import { rgba } from 'polished';

export const HeaderMenu: FC = () => {
  return (
    <button css={styles.root}>
      <FiMenu className='icon' />
    </button>
  );
};

const styles = {
  root: css`
    height: ${HEADER_ELEMENT_HEIGHT}px;
    width: ${HEADER_ELEMENT_HEIGHT}px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: ${COLORS.SMOKE};
    transition: background-color 0.2s, color .2s;
    position: relative;
    font-family: ${FONT_FAMILY};
    border: none;
    background: none;
    cursor: pointer;
    outline: none;

    .icon {
      width: 28px;
      height: 28px;
    }
    
    &:hover {
      color: ${COLORS.PLATINUM};
      background-color: ${rgba(COLORS.CARBON, 0.5)};
    }
  `,
};
