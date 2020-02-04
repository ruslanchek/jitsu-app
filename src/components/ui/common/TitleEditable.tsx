import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FONT_SIZE } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import classNames from 'classnames';

interface IProps {
  text: string;
  editable?: boolean;
}

export const TitleEditable: FC<IProps> = ({ text, editable }) => {
  return (
    <div css={styles.root}>
      <h1 contentEditable={editable} css={styles.h1} className={classNames({ editable })}>
        {text}
      </h1>
    </div>
  );
};

const styles = {
  root: css``,

  h1: css`
    font-size: ${FONT_SIZE.H1};
    outline: none;
    padding: 5px 12px 4px;
    margin: 0 0 20px -12px;
    border-radius: 6px;
    border: 1px solid transparent;
    transition: border-color 0.2s;

    &.editable {
      &:hover {
        border-color: ${COLORS.DIRTY_SNOW};
      }
      
      &:focus {
        border-color: ${COLORS.CARBON};
      }
    }
  `,
};