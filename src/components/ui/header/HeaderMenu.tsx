import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';

export const HeaderMenu: FC = () => {
  return <button css={styles.root}></button>;
};

const styles = {
  root: css`
    height: ${HEADER_ELEMENT_HEIGHT};
    width: ${HEADER_ELEMENT_HEIGHT};
    display: block;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    border: none;
    border-radius: ${BORDER_RADIUS.MEDIUM};
  `,
};
