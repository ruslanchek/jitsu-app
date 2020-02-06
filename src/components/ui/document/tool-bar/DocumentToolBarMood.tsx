import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { BORDER_RADIUS } from '../../../../common/ui';
import { COLORS } from '../../../../common/colors';

interface IProps {}

export const DocumentToolBarMood: FC<IProps> = () => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Mood}>
      <div css={styles.root}>
        <button css={styles.emoji}>
          <span role='img' aria-label='intelligence'>
            🤓
          </span>
        </button>
      </div>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css`
    position: relative;
    width: 32px;
    height: 1em;
    display: inline-block;
  `,

  emoji: css`
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    height: 32px;
    width: 32px;
    line-height: 28px;
    font-size: 23px;
    display: block;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color .2s, transform .2s;
    
    >span {
      display: block;
    }
    
    &:hover {
      background-color: ${COLORS.DIRTY_SNOW};
    }
    
    &:active {
      transform: translate(-50%, -50%) scale(.98);
    }
  `,
};
