import { css } from '@emotion/core';
import { BORDER_RADIUS, BOX_SHADOW, FONT_SIZE, PROJECTS_ITEM_SIZE } from './ui';
import { COLORS } from './colors';
import { lighten } from 'polished';

export const COMMON_STYLES = {
  ENTRIES_ITEM: css`
    width: ${PROJECTS_ITEM_SIZE};
    height: ${PROJECTS_ITEM_SIZE};
    box-shadow: ${BOX_SHADOW.TINY};
    border-radius: ${BORDER_RADIUS.SMALL};
    background-color: ${COLORS.SNOW};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 20px 20px 0;
    border: none;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.DIRTY_SNOW};
    }

    &.accent {
      background-color: ${COLORS.BLUE};

      &:hover {
        background-color: ${lighten(0.05, COLORS.BLUE)};
      }

      .title,
      .icon {
        color: ${COLORS.WHITE};
      }
    }

    .icon {
      width: 48px;
      height: 48px;
    }

    .title {
      color: ${COLORS.HIGH_SMOKE};
      margin-top: 1em;
      font-size: ${FONT_SIZE.SMALL};
    }
  `,
};
