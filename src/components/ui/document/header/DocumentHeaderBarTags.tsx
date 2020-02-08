import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { css } from '@emotion/core';
import { BORDER_RADIUS, DOCUMENT_BUTTON_HEIGHT } from '../../../../common/ui';
import { darken } from 'polished';

interface IProps {
  tags: string[];
}

export const DocumentHeaderBarTags: FC<IProps> = ({ tags }) => {
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Tags}>
      {tags.map(tag => (
        <span css={styles.tag} key={tag}>
          {tag}
        </span>
      ))}
    </DocumentHeaderBarItem>
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
    transition: background-color 0.2s, color 0.2s;
    background-color: ${COLORS.WHITE};

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      background-color: ${COLORS.DIRTY_SNOW};
      color: ${darken(0.1, COLORS.SMOKE)};
    }
  `,
};
