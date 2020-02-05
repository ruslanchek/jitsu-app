import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { DOCUMENT_BUTTON_HEIGHT } from '../../../common/ui';

interface IProps {

}

export const DocumentMood: FC<IProps> = () => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Mood}>
      <span css={styles.root}>
        <span css={styles.emoji} role='img' aria-label='intelligence'>
          🤓
        </span>
      </span>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css`
    position: relative;
    width: 1em;
    height: 1em;
    display: inline-block;
  `,

  emoji: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 22px;
    width: 22px;
    line-height: ${DOCUMENT_BUTTON_HEIGHT};
    font-size: 22px;
    display: block;
  `
};
