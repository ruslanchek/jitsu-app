import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { darken, rgba } from 'polished';
import { BORDER_RADIUS, DOCUMENT_BUTTON_HEIGHT, FONT_FAMILY, FONT_SIZE } from '../../../common/ui';

interface IProps {
  color: string;
}

export const DocumentToolBarButton: FC<IProps> = ({ children, color }) => {
  const [hover, setHover] = useState();
  const style = {
    backgroundColor: rgba(color, hover ? 0.16 : 0.08),
    color: hover ? darken(0.1, color) : color,
  };

  return (
    <button
      css={styles.root}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}>
      {children}
    </button>
  );
};

const styles = {
  root: css`
    padding: 0 5px;
    height: ${DOCUMENT_BUTTON_HEIGHT};
    line-height: ${DOCUMENT_BUTTON_HEIGHT};
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color 0.2s, color 0.2s, transform 0.2s;
    border: none;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    cursor: pointer;
    position: relative;
    outline: none;
    display: flex;
    align-items: center;

    &:active {
      transform: scale(0.98);
    }
  `,
};
