import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE } from '../../../common/ui';
import { DateFormatter } from '../formatters/DateFormatter';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';

interface IProps {
  date: Date;
}

export const DocumentDueDate: FC<IProps> = ({ date }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Due_to}>
      <button css={styles.date}>
        <DateFormatter date={date} />
      </button>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css``,

  label: css`
    color: ${COLORS.SMOKE};
  `,

  date: css`
    background-color: ${rgba(COLORS.FIRE_ROSE, 0.08)};
    padding: 2px 5px;
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color 0.2s;
    color: ${COLORS.FIRE_ROSE};
    border: none;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    cursor: pointer;

    &:hover {
      background-color: ${rgba(COLORS.FIRE_ROSE, 0.15)};
    }
  `,
};
