import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';
import classNames from 'classnames';

interface IProps {
  squared?: boolean;
  alert?: boolean;
}

export const HeaderButton: FC<IProps> = ({ alert, squared, children }) => {
  return (
    <button css={styles.root} className={classNames({ squared })}>
      {alert && <i css={styles.dot} />}
      {children}
    </button>
  );
};

const styles = {
  root: css`
    height: ${HEADER_ELEMENT_HEIGHT};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: ${COLORS.SMOKE};
    transition: background-color 0.2s, color 0.2s, transform 0.2s;
    position: relative;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    padding: 0 10px;

    &:hover,
    &:focus {
      color: ${COLORS.PLATINUM};
      background-color: ${rgba(COLORS.CARBON, 0.5)};
    }

    &:active {
      transform: scale(0.98);
    }

    &.squared {
      padding: 0;
      width: ${HEADER_ELEMENT_HEIGHT};
    }
  `,

  dot: css`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${COLORS.FIRE_ROSE};
    position: absolute;
    top: 4px;
    right: 4px;
  `,
};
