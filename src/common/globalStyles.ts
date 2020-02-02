import { css } from '@emotion/core';
import { COLORS } from './colors';
import { FONT_FAMILY, FONT_SIZE } from './ui';

export const globalStyles = css`
  body {
    background: ${COLORS.WHITE};
    margin: 0;
    line-height: 1.5;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
  }
`;
