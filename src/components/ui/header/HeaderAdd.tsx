import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FiLoader } from 'react-icons/fi';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { EPhrase } from '../../../locales/EPhrase';
import { useTranslator } from 'eo-locale';
import { darken, rgba } from 'polished';

interface IProps {}

export const HeaderAdd: FC<IProps> = () => {
  const translator = useTranslator();
  return (
    <button css={styles.root} title={translator.translate(EPhrase.Actions_Create)}>
      <FiLoader className='icon' size='20px' />
    </button>
  );
};

const styles = {
  root: css`
    background-color: ${rgba(COLORS.PURPLE, 0.1)};
    height: ${HEADER_ELEMENT_HEIGHT};
    border: none;
    padding: 0 10px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    color: ${COLORS.PURPLE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s, color 0.2s;
    outline: none;
    text-transform: uppercase;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};

    &:focus,
    &:hover {
      background-color: ${rgba(COLORS.PURPLE, 0.2)};
      color: ${darken(0.1, COLORS.PURPLE)};
    }

    &:active {
      transform: scale(0.98);
    }
  `,
};
