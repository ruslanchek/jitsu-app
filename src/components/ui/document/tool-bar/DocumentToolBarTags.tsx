import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { css } from '@emotion/core';
import { BORDER_RADIUS, DOCUMENT_BUTTON_HEIGHT } from '../../../../common/ui';
import { darken } from 'polished';

interface IProps {
  tags: string[];
}

export const DocumentToolBarTags: FC<IProps> = ({ tags }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Tags}>
      {tags.map(tag => (
        <span css={styles.tag} key={tag}>
          {tag}
        </span>
      ))}
    </DocumentToolBarItem>
  );
};

const styles = {
  tag: css`
    height: ${DOCUMENT_BUTTON_HEIGHT};
    display: flex;
    padding: 0 5px;
    align-items: center;
    border: 1px solid ${COLORS.DIRTY_SNOW};
    box-sizing: border-box;
    border-radius: ${BORDER_RADIUS.SMALL};
    color: ${COLORS.SMOKE};
    margin-right: 1ex;
    cursor: pointer;
    transition: background-color .2s, color .2s;

    &:last-of-type {
      margin-right: 0;
    }
    
    &:hover {
      background-color: ${COLORS.DIRTY_SNOW};
      color: ${darken(.1, COLORS.SMOKE)};
    }
  `,
};
