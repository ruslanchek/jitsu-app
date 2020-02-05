import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FiLoader } from 'react-icons/fi';
import { COLORS } from '../../../common/colors';
import { lighten } from 'polished';
import { EOLocale } from 'eo-locale';
import { FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
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
    background-color: ${COLORS.PURPLE};
    height: ${HEADER_ELEMENT_HEIGHT}px;
    border: none;
    padding: 0 15px 0 10px;
    text-transform: uppercase;
    border-radius: 6px;
    color: ${COLORS.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    outline: none;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    font-weight: 500;

    .icon {
      margin-right: 10px;
    }

    &:hover {
      background-color: ${lighten(0.1, COLORS.PURPLE)};
    }

    &:active {
      transform: scale(0.98);
    }
  `,
};
