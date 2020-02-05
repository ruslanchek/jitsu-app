import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FiLoader } from 'react-icons/fi';
import { COLORS } from '../../../common/colors';
import { lighten, rgba } from 'polished';
import { EOLocale } from 'eo-locale';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { EPhrase } from '../../../locales/EPhrase';

interface IProps {}

export const HeaderAdd: FC<IProps> = () => {
  return (
    <button css={styles.root}>
      <FiLoader className='icon' size='20px' />
      <EOLocale.Text id={EPhrase.Actions_Create} />
    </button>
  );
};

const styles = {
  root: css`
    background-color: ${rgba(COLORS.PURPLE, .1)};
    height: ${HEADER_ELEMENT_HEIGHT}px;
    border: none;
    padding: 0 20px 0 18px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    color: ${COLORS.PURPLE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    outline: none;
    //text-transform: uppercase;
    //font-weight: 500;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};

    .icon {
      margin-right: 8px;
    }

    &:hover {
      background-color: ${rgba(COLORS.PURPLE, .2)};
    }

    &:active {
      transform: scale(0.98);
    }
  `,
};
