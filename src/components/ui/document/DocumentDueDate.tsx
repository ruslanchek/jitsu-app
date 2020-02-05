import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';
import { FONT_FAMILY, FONT_SIZE } from '../../../common/ui';
import { DateFormatter } from '../formatters/DateFormatter';

interface IProps {
  date: Date;
}

export const DocumentDueDate: FC<IProps> = ({ date }) => {
  return (
    <div css={styles.root}>
      <span css={styles.label}>Due to</span>
      &nbsp;
      <button css={styles.date}>
        <DateFormatter date={date} />
      </button>
    </div>
  );
};

const styles = {
  root: css``,

  label: css`
    color: ${COLORS.SMOKE};
  `,

  date: css`
    background-color: ${rgba(COLORS.FIRE_ROSE, 0.1)};
    padding: 2px 5px;
    border-radius: 4px;
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
