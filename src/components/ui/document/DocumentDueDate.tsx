import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';

interface IProps {
  date: Date;
}

export const DocumentDueDate: FC<IProps> = ({ date }) => {
  return (
    <div css={styles.root}>
      <span css={styles.label}>Due to</span>
      &nbsp;
      <i css={styles.statusDot}  />
      <span>20 December 2020</span>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
  `,

  statusDot: css`
    background-color: ${rgba(COLORS.FIRE_ROSE, .8)};
    height: 10px; 
    width: 10px; 
    margin-right: 4px;
    display: block; 
    border-radius: 100%;
`,

  label: css`
    color: ${COLORS.SMOKE};
  `,
};
