import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { useTranslator } from 'eo-locale';
import { EPhrase } from '../../../locales/EPhrase';
import { FaSearch } from 'react-icons/all';
import { COLORS } from '../../../common/colors';

interface IProps {}

export const HeaderSearch: FC<IProps> = () => {
  const translator = useTranslator();
  const [value, setValue] = useState('');

  return (
    <div css={styles.root}>
      <FaSearch css={styles.icon} />
      <input
        className='regular-input'
        value={value}
        placeholder={translator.translate(EPhrase.Placeholder_Search)}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
};

const styles = {
  root: css`
    padding: 0;
    display: flex;
    height: ${HEADER_ELEMENT_HEIGHT};
    position: relative;
    
    >input {
      padding-left: 35px;
      width: 160px;
    }
  `,

  icon: css`
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(calc(-50% + 1px));
    color: ${COLORS.SMOKE};
  `,
};
